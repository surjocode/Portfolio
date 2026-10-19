"use client";

import React from "react";
import { Download } from "lucide-react";

interface ResumeButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "nav";
  label?: string;
}

export default function ResumeButton({
  className = "",
  variant = "secondary",
  label = "Download Resume",
}: ResumeButtonProps) {
  // Styling based on variant with light & dark theme support
  let buttonStyles = "";
  if (variant === "primary") {
    buttonStyles =
      "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-neon-cyan hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";
  } else if (variant === "nav") {
    buttonStyles =
      "inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 shadow-sm shadow-cyan-500/10 active:scale-95";
  } else {
    // Secondary default
    buttonStyles =
      "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-cyan-700 dark:text-cyan-300 bg-white dark:bg-surface-card/90 hover:bg-slate-50 dark:hover:bg-surface-elevated border border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400/60 hover:text-cyan-900 dark:hover:text-white transition-all duration-300 backdrop-blur-md shadow-sm dark:shadow-lg dark:shadow-black/40 hover:shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";
  }

  return (
    <a
      href="/resume.pdf"
      download="Piel-Mitra-Resume.pdf"
      className={`${buttonStyles} ${className} cursor-pointer group focus:outline-none focus:ring-2 focus:ring-cyan-400/60`}
      aria-label="Download Resume PDF"
    >
      <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:animate-bounce transition-transform" />
      <span>{label}</span>
    </a>
  );
}
