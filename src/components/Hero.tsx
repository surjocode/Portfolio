"use client";

import React from "react";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import CyberCanvasWrapper from "./3d/CyberCanvasWrapper";
import ResumeButton from "./ResumeButton";

export default function Hero() {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Personal Narrative & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{siteConfig.openToWork}</span>
            </div>

            {/* Candidate Introduction & Headline */}
            <div>
              <h2 className="text-sm sm:text-base font-mono text-purple-600 dark:text-purple-400 tracking-wider mb-2 flex items-center gap-2">
                <span className="text-cyan-500 dark:text-cyan-400">&gt;</span>
                <span>const developer = &quot;{siteConfig.name}&quot;;</span>
              </h2>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Full Stack{" "}
                <span className="text-gradient-cyan-purple">
                  Web Developer
                </span>
              </h1>
            </div>

            <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {siteConfig.shortBio}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary "View Projects" CTA */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-neon-cyan hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              {/* Secondary "Download Resume" CTA */}
              <div className="w-full sm:w-auto">
                <ResumeButton
                  variant="secondary"
                  label="Download Resume"
                  className="w-full sm:w-auto"
                />
              </div>

              {/* Contact Link */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-surface-card/60 dark:hover:bg-surface-card border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/40 transition-all text-sm backdrop-blur-sm active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Social & Contact Placeholders */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                  Links:
                </span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-surface-card/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors shadow-sm"
                    title={`${social.name} (Placeholder URL)`}
                  >
                    <span className="text-cyan-500 dark:text-cyan-400">{getSocialIcon(social.name)}</span>
                    <span>{social.name}</span>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase px-1 py-0.2 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
                      Placeholder
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Developer interactive terminal teaser card */}
            <div className="max-w-xl text-left rounded-xl bg-white/90 dark:bg-surface-card/90 border border-slate-200 dark:border-slate-800/90 p-4 shadow-lg shadow-slate-200/50 dark:shadow-xl dark:shadow-black/50 backdrop-blur-md hidden sm:block">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80"></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>piel-mitra ~ dev profile</span>
                </div>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <p>
                  <span className="text-purple-600 dark:text-purple-400">const</span> candidate = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-cyan-700 dark:text-cyan-300">&quot;Piel Mitra&quot;</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-cyan-700 dark:text-cyan-300">&quot;Full Stack Web Developer&quot;</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-purple-700 dark:text-purple-300">&quot;React&quot;</span>, <span className="text-purple-700 dark:text-purple-300">&quot;Next.js&quot;</span>, <span className="text-purple-700 dark:text-purple-300">&quot;TypeScript&quot;</span>, <span className="text-purple-700 dark:text-purple-300">&quot;Node.js&quot;</span>, <span className="text-purple-700 dark:text-purple-300">&quot;MongoDB&quot;</span>],
                </p>
                <p className="pl-4">
                  availability: <span className="text-teal-700 dark:text-teal-300">&quot;Remote Internships &amp; Roles&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Interactive 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="w-full relative">
              <CyberCanvasWrapper />
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-[11px] tracking-wider uppercase">Explore Journey</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-500 dark:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
