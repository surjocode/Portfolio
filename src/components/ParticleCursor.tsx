"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
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
    // Check eligibility: desktop fine pointer, hover capable, width >= 768px, not reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktopWidth = window.innerWidth >= 768;

    if (!hasFinePointer || !hasHover || prefersReducedMotion || !isDesktopWidth) {
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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Number of circular particles in the trailing chain
    const PARTICLE_COUNT = 24;
    const maxRadius = 5.4;

    // Coordinates and trailing physics state
    let mouseX = -100;
    let mouseY = -100;
    let isMouseOnScreen = false;
    let isOverInteractive = false;
    let lastMoveTime = Date.now();
    let trailStrength = 0; // 0 when resting, 1 when actively moving

    // Initialize bead particle chain
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: -100,
      y: -100,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseOnScreen = true;
      lastMoveTime = Date.now();
      trailStrength = 1.0;

      // Check if cursor is over interactive controls
      const target = e.target as HTMLElement | null;
      isOverInteractive = Boolean(
        target &&
          target.closest(
            'a, button, input, textarea, select, [role="button"], label, .cursor-pointer'
          )
      );

      // Initialize all points on first mouse enter
      if (particles[0].x < 0) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particles[i].x = mouseX;
          particles[i].y = mouseY;
        }
      }
    };

    const onMouseLeave = () => {
      isMouseOnScreen = false;
    };

    const onMouseEnter = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseOnScreen = true;
      lastMoveTime = Date.now();
      trailStrength = 1.0;
    };

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("resize", onResize, { passive: true });

    // High performance render loop via requestAnimationFrame
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Decay trail strength smoothly when mouse is stationary
      const now = Date.now();
      if (now - lastMoveTime > 90) {
        trailStrength = Math.max(0, trailStrength - 0.032);
      }

      if (isMouseOnScreen || trailStrength > 0.01) {
        // Head particle moves with rapid responsiveness towards mouse
        particles[0].x += (mouseX - particles[0].x) * 0.72;
        particles[0].y += (mouseY - particles[0].y) * 0.72;

        // Subsequent particles smoothly follow the predecessor with a cascading physics delay
        for (let i = 1; i < PARTICLE_COUNT; i++) {
          const prev = particles[i - 1];
          const curr = particles[i];
          curr.x += (prev.x - curr.x) * 0.40;
          curr.y += (prev.y - curr.y) * 0.40;
        }

        const isLightMode =
          themeRef.current === "light" ||
          document.documentElement.classList.contains("light");

        // Render from tail (smallest) to head (largest) so head particle is cleanly drawn on top
        for (let i = PARTICLE_COUNT - 1; i >= 0; i--) {
          const p = particles[i];
          if (p.x < 0 || p.y < 0) continue;

          const progress = i / (PARTICLE_COUNT - 1); // 0 at head, 1 at tail
          const isHead = i === 0;

          // Head particle retains crisp size as primary cursor indicator; trailing particles shrink with distance
          const radius = isHead
            ? isOverInteractive
              ? 3.8
              : maxRadius
            : Math.max(
                0.7,
                maxRadius * (1 - progress * 0.82) * (0.25 + 0.75 * trailStrength)
              );

          // Alpha fades naturally along the chain and when mouse rests
          const alpha = isHead
            ? isMouseOnScreen
              ? 0.95
              : 0
            : (1 - progress * 0.65) *
              (0.12 + 0.88 * trailStrength) *
              (isMouseOnScreen ? 1 : 0);

          if (alpha <= 0.01) continue;

          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);

          if (isLightMode) {
            // Light Mode: dark slate gray particles with excellent contrast
            ctx.fillStyle = `rgba(30, 41, 59, ${alpha * 0.92})`;
            ctx.shadowColor = `rgba(0, 0, 0, ${alpha * 0.15})`;
            ctx.shadowBlur = isHead ? 3 : 1.5;
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = `rgba(15, 23, 42, ${alpha * 0.25})`;
            ctx.stroke();
          } else {
            // Dark Mode: near-black / black particles with subtle cyber contrast outline
            ctx.fillStyle = `rgba(8, 10, 16, ${alpha * 0.96})`;
            ctx.shadowColor = `rgba(0, 242, 254, ${alpha * 0.35})`;
            ctx.shadowBlur = isHead ? 4 : 2;
            ctx.lineWidth = 1;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.24})`;
            ctx.stroke();
          }

          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("resize", onResize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 w-full h-full"
    />
  );
}
