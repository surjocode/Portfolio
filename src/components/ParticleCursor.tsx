"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  glowColor: string;
  life: number;
  decay: number;
}

export default function ParticleCursor() {
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    // Check eligibility: disable only on touch-only devices or if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchOnly = window.matchMedia("(pointer: coarse) and (hover: none)").matches;

    if (prefersReducedMotion || isTouchOnly) {
      return;
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // High-DPI support
    const updateCanvasDimensions = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateCanvasDimensions();

    const particles: Particle[] = [];
    let lastMouseX = -100;
    let lastMouseY = -100;
    let hasMoved = false;

    // Vibrant cyber palette for dark mode and rich contrast palette for light mode
    const getColors = (isLight: boolean) => {
      if (isLight) {
        const palettes = [
          { color: "rgba(8, 145, 178, ", glow: "rgba(8, 145, 178, 0.4)" }, // deep cyan
          { color: "rgba(99, 102, 241, ", glow: "rgba(99, 102, 241, 0.4)" }, // electric indigo
          { color: "rgba(147, 51, 234, ", glow: "rgba(147, 51, 234, 0.4)" }, // purple
          { color: "rgba(13, 148, 136, ", glow: "rgba(13, 148, 136, 0.4)" }, // teal
        ];
        return palettes[Math.floor(Math.random() * palettes.length)];
      } else {
        const palettes = [
          { color: "rgba(0, 242, 254, ", glow: "rgba(0, 242, 254, 0.85)" }, // cyber cyan
          { color: "rgba(56, 189, 248, ", glow: "rgba(56, 189, 248, 0.8)" }, // sky blue
          { color: "rgba(168, 85, 247, ", glow: "rgba(168, 85, 247, 0.8)" }, // neon purple
          { color: "rgba(236, 72, 153, ", glow: "rgba(236, 72, 153, 0.7)" }, // pink neon
        ];
        return palettes[Math.floor(Math.random() * palettes.length)];
      }
    };

    const spawnParticles = (startX: number, startY: number, endX: number, endY: number) => {
      const isLight =
        themeRef.current === "light" ||
        document.documentElement.classList.contains("light");

      const dist = Math.hypot(endX - startX, endY - startY);
      // Spawn at least 1 particle, and more along the trajectory if moving quickly
      const steps = Math.min(Math.max(1, Math.floor(dist / 6)), 8);

      for (let i = 0; i < steps; i++) {
        const t = (i + 1) / steps;
        const x = startX + (endX - startX) * t + (Math.random() - 0.5) * 3;
        const y = startY + (endY - startY) * t + (Math.random() - 0.5) * 3;
        const palette = getColors(isLight);

        // Angle and drift
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.7 + 0.2;

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2.5 + 3.0, // 3.0 - 5.5px radius
          color: palette.color,
          glowColor: palette.glow,
          life: 1.0,
          decay: Math.random() * 0.018 + 0.022, // Fades over ~30-45 frames
        });
      }

      // Limit max active particles for optimal 60fps performance
      if (particles.length > 90) {
        particles.splice(0, particles.length - 90);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (hasMoved) {
        spawnParticles(lastMouseX, lastMouseY, currentX, currentY);
      } else {
        hasMoved = true;
        spawnParticles(currentX, currentY, currentX, currentY);
      }

      lastMouseX = currentX;
      lastMouseY = currentY;
    };

    const onMouseLeave = () => {
      hasMoved = false;
    };

    const onResize = () => {
      updateCanvasDimensions();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize, { passive: true });

    // Animation frame render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Particle becomes smaller as it ages
        const currentRadius = Math.max(0.5, p.size * Math.pow(p.life, 1.1));
        // Particle fades away gradually
        const currentAlpha = Math.max(0, p.life * 0.92);

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] w-full h-full"
    />
  );
}
