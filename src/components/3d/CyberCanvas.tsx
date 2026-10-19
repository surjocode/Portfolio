"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hero3DObject from "./Hero3DObject";

// Graceful Fallback if WebGL is unavailable or during reduced motion
function CyberFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Glowing Ring 1 */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-400/40 animate-spin-slow [border-dasharray:10_15]" />
      
      {/* Animated Glowing Ring 2 */}
      <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-purple-500/50 animate-[spin_14s_linear_infinite_reverse]" />
      
      {/* Central Core Hologram */}
      <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/30 to-pink-500/20 backdrop-blur-md border border-cyan-400/40 shadow-neon-glow">
        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-surface-card border border-purple-400/50 flex items-center justify-center text-center p-3">
          <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider">
            &lt;DEV /&gt;
          </span>
        </div>
      </div>

      {/* Floating neon accent points */}
      <div className="absolute -top-4 right-12 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-neon-cyan animate-pulse" />
      <div className="absolute -bottom-6 left-10 w-3 h-3 rounded-full bg-purple-500 shadow-neon-purple animate-pulse" />
    </div>
  );
}

export default function CyberCanvas() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    // Test WebGL availability and release context to avoid context leaks
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      const supported = Boolean(gl);
      if (gl) {
        const ext = (gl as WebGLRenderingContext).getExtension("WEBGL_lose_context");
        if (ext) {
          ext.loseContext();
        }
      }
      setHasWebGL(supported);
    } catch {
      setHasWebGL(false);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // During SSR or before check completes
  if (hasWebGL === null) {
    return (
      <div className="w-full h-[360px] sm:h-[440px] md:h-[480px] flex items-center justify-center">
        <CyberFallback />
      </div>
    );
  }

  // Graceful fallback if WebGL is unsupported
  if (!hasWebGL) {
    return (
      <div className="w-full h-[360px] sm:h-[440px] md:h-[480px] flex items-center justify-center">
        <CyberFallback />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] cursor-grab active:cursor-grabbing select-none">
      {/* Decorative radial cyber backlight behind 3D object */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-transparent blur-3xl opacity-70" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full relative z-10"
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.8}
            dampingFactor={0.06}
            autoRotate={false}
          />
          <Hero3DObject reducedMotion={prefersReducedMotion} />
        </Suspense>
      </Canvas>

      {/* Subtle interaction tip */}
      <div className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-600 dark:text-slate-400 tracking-wider uppercase px-2 py-0.5 rounded bg-white/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xs shadow-sm">
        Interactive 3D • Drag / Move
      </div>
    </div>
  );
}
