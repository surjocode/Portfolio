"use client";

import React from "react";
import { siteConfig, navLinks, socialLinks } from "@/data/portfolio";
import { Terminal, ArrowUp, Github, Linkedin, Mail, Download } from "lucide-react";

// ── Per-platform colour accent ──────────────────────────────────────────────
function getSocialAccent(name: string): string {
  switch (name.toLowerCase()) {
    case "github":
      return "hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-800/80 dark:hover:bg-slate-700/60";
    case "linkedin":
      return "hover:text-[#0A66C2] hover:border-[#0A66C2]/60 dark:hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10";
    case "email":
      return "hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10";
    default:
      return "hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/50";
  }
}

function getSocialIcon(name: string) {
  switch (name.toLowerCase()) {
    case "github":   return <Github   className="w-4 h-4" />;
    case "linkedin": return <Linkedin className="w-4 h-4" />;
    case "email":    return <Mail     className="w-4 h-4" />;
    default:         return null;
  }
}

// ── Footer ──────────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 transition-colors duration-300" aria-label="Site footer">

      {/* Gradient top divider */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 dark:via-cyan-400/30 to-transparent"
      />

      {/* Main body */}
      <div className="bg-slate-50/95 dark:bg-[#030609]/95 backdrop-blur-sm px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ── Top row: brand | nav | resume + socials ──────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">

            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <a
                href="#hero"
                className="group inline-flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                aria-label="Back to top – Piel Mitra"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 dark:border-cyan-500/40 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_12px_-2px_rgba(0,242,254,0.35)] transition-all duration-300 shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="font-mono text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                  {siteConfig.name}
                  <span className="text-cyan-500 dark:text-cyan-400 ml-0.5">_</span>
                </span>
              </a>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[220px] text-center md:text-left">
                Full Stack Web Developer
                <span className="mx-1.5 text-slate-300 dark:text-slate-600">·</span>
                Clean Code &amp; Accessibility
              </p>

              {/* Availability pill */}
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                {siteConfig.openToWork}
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col items-center gap-1" aria-label="Footer navigation">
              <p className="text-[10px] font-mono font-semibold tracking-[0.15em] uppercase text-slate-400 dark:text-slate-500 mb-2">
                Navigate
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative group text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-200 py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-sm"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"
                  />
                </a>
              ))}
            </nav>

            {/* Resume + Social icons */}
            <div className="flex flex-col items-center md:items-end gap-5">

              {/* Resume download */}
              <a
                href="/resume.pdf"
                download="Piel-Mitra-Resume.pdf"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-500/35 hover:border-cyan-400 dark:hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_18px_-4px_rgba(0,242,254,0.35)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 active:scale-95"
                aria-label="Download Resume PDF"
              >
                <Download className="w-3.5 h-3.5 group-hover:animate-bounce" />
                Resume PDF
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2" role="list" aria-label="Social links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    role="listitem"
                    aria-label={social.name}
                    title={social.label ?? social.name}
                    className={`p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 active:scale-95 ${getSocialAccent(social.name)}`}
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}

                {/* Back-to-top */}
                <a
                  href="#hero"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_14px_-4px_rgba(0,242,254,0.3)] shadow-sm transition-all duration-200 ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 active:scale-95"
                  aria-label="Back to top"
                  title="Back to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Inner bottom divider */}
          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 dark:via-slate-700/50 to-transparent"
          />

          {/* Copyright + tech credits */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 dark:text-slate-500">
            <p>
              &copy; {currentYear}{" "}
              <span className="text-slate-600 dark:text-slate-400 font-medium">{siteConfig.name}</span>.
              {" "}All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              Built with{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">Next.js</span>
              {" · "}
              <span className="text-purple-600 dark:text-purple-400 font-medium">Three.js</span>
              {" · "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">Tailwind CSS</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
