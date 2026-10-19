"use client";

import React from "react";
import { siteConfig, navLinks, socialLinks } from "@/data/portfolio";
import { Terminal, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import ResumeButton from "./ResumeButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#03060d] py-14 px-4 sm:px-6 lg:px-8 relative z-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-200 dark:border-slate-800/60">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#hero"
              className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono">
                {siteConfig.name}
                <span className="text-cyan-500 dark:text-cyan-400">_</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full Stack Web Developer • Clean Code &amp; Accessibility
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <ResumeButton variant="nav" label="Resume PDF" />
          </nav>

          {/* Social Icons Placeholders */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 transition-colors shadow-sm"
                title={social.name}
                aria-label={social.name}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
            <a
              href="#hero"
              className="p-2 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 transition-colors ml-2 shadow-sm"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Engineered with <span className="text-cyan-600 dark:text-cyan-400">Next.js 14 App Router</span>, <span className="text-purple-600 dark:text-purple-400">Three.js</span> &amp; <span className="text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
