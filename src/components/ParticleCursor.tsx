"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  colorBase: string; // e.g. "0,242,254"
  life: number;    // 1.0 → 0
  decay: number;
}

export default function ParticleCursor() {
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);

  // Keep themeRef current without re-running the main effect
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  // Check eligibility once on mount
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchOnly = window.matchMedia(
      "(pointer: coarse) and (hover: none)"
    ).matches;
    if (!prefersReducedMotion && !isTouchOnly) {
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // ── Size tracking ──────────────────────────────────────────────────────
    // Store logical (CSS-pixel) size so the render loop always gets the latest.
    const size = { w: window.innerWidth, h: window.innerHeight };

    const applySize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size.w = window.innerWidth;
      size.h = window.innerHeight;

      // Backing-store size (device pixels)
      canvas.width  = Math.round(size.w * dpr);
      canvas.height = Math.round(size.h * dpr);

      // CSS display size (logical pixels)
      canvas.style.width  = `${size.w}px`;
      canvas.style.height = `${size.h}px`;

      // Reset transform then apply DPR scale so we can draw in CSS pixels
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    applySize();

    // ── Particle pool ──────────────────────────────────────────────────────
    const particles: Particle[] = [];

    // Color palettes – these are RGB triplets so we can inject alpha inline
    const darkPalette  = ["0,242,254", "56,189,248", "168,85,247", "236,72,153"];
    const lightPalette = ["8,145,178",  "99,102,241", "147,51,234", "13,148,136"];

    const randomColor = (isLight: boolean) => {
      const pal = isLight ? lightPalette : darkPalette;
      return pal[Math.floor(Math.random() * pal.length)];
    };

    const spawnAt = (x: number, y: number, prevX: number, prevY: number) => {
      const isLight =
        themeRef.current === "light" ||
        document.documentElement.classList.contains("light");

      const dist  = Math.hypot(x - prevX, y - prevY);
      // At least 1 particle; more for faster movement, capped for perf
      const count = Math.min(Math.max(1, Math.floor(dist / 5)), 10);

      for (let i = 0; i < count; i++) {
        const t  = (i + 1) / count;
        const px = prevX + (x - prevX) * t + (Math.random() - 0.5) * 2;
        const py = prevY + (y - prevY) * t + (Math.random() - 0.5) * 2;

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;

        particles.push({
          x: px,
          y: py,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size:      Math.random() * 2.5 + 2.5,  // 2.5–5 px radius
          colorBase: randomColor(isLight),
          life:      1.0,
          decay:     Math.random() * 0.02 + 0.02, // fades in ~25–50 frames
        });
      }

      // Keep pool bounded
      if (particles.length > 120) {
        particles.splice(0, particles.length - 120);
      }
    };

    // ── Mouse tracking ─────────────────────────────────────────────────────
    // Store coordinates in a ref so the rAF loop always reads current values
    // without creating stale closures.
    const mouse = { x: -200, y: -200, prevX: -200, prevY: -200, moved: false };

    const onMouseMove = (e: MouseEvent) => {
      const nx = e.clientX;
      const ny = e.clientY;

      if (mouse.moved) {
        spawnAt(nx, ny, mouse.prevX, mouse.prevY);
      } else {
        mouse.moved = true;
        spawnAt(nx, ny, nx, ny);
      }

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x     = nx;
      mouse.y     = ny;
    };

    const onMouseLeave = () => {
      mouse.moved = false;
    };

    window.addEventListener("mousemove",   onMouseMove,   { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // ── Resize handling ────────────────────────────────────────────────────
    const onResize = () => applySize();
    window.addEventListener("resize", onResize, { passive: true });

    // ── Render loop ────────────────────────────────────────────────────────
    let rafId: number;

    const render = () => {
      // Always clear with the current logical dimensions
      ctx.clearRect(0, 0, size.w, size.h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Advance physics
        p.x    += p.vx;
        p.y    += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const radius = Math.max(0.3, p.size * Math.pow(p.life, 0.9));
        const alpha  = Math.max(0, p.life * 0.95);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${p.colorBase})`;
        ctx.shadowColor = `rgba(${p.colorBase},0.7)`;
        ctx.shadowBlur  = 6;
        ctx.fill();
        ctx.restore();
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove",   onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize",      onResize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        pointerEvents: "none",
        zIndex:        9999,
        display:       "block",
        visibility:    "visible",
      }}
    />
  );
}
