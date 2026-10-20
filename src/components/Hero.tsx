"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Code2, User } from "lucide-react";
import { motion } from "framer-motion";
import CyberCanvasWrapper from "./3d/CyberCanvasWrapper";
import ResumeButton from "./ResumeButton";
import heroPortrait from "@/assets/hero-portrait.png";

export default function Hero() {
  const [activeVisual, setActiveVisual] = useState<"photo" | "3d">("photo");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Personal Narrative & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-4 sm:space-y-5"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{siteConfig.openToWork}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14] pb-1">
              Full Stack{" "}
              <span className="text-gradient-cyan-purple inline-block">
                Web Developer
              </span>
            </h1>

            {/* Mobile Profile Image Presentation (Visible on < lg screens, below the introduction headline) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:hidden flex justify-center py-2"
            >
              <div className="relative group w-48 sm:w-56">
                {/* Subtle ambient cyan/purple glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-pink-500/20 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
                
                {/* Gradient border frame */}
                <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-cyan-400/80 via-purple-500/70 to-teal-400/60 shadow-lg shadow-cyan-500/10">
                  <div className="relative rounded-[22px] overflow-hidden bg-slate-100 dark:bg-[#070b18] aspect-square">
                    <Image
                      src={heroPortrait}
                      alt="Piel Mitra - Full Stack Web Developer"
                      priority
                      sizes="(max-width: 640px) 192px, 224px"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                    
                    {/* Status badge on mobile */}
                    <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                      <span className="font-semibold text-white">Piel Mitra</span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {siteConfig.shortBio}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              {/* Primary "View Projects" CTA */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-neon-cyan hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] text-sm sm:text-base"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* Secondary "Download Resume" CTA */}
              <div className="w-full sm:w-auto">
                <ResumeButton
                  variant="secondary"
                  label="Download Resume"
                  className="w-full sm:w-auto text-sm sm:text-base"
                />
              </div>

              {/* Contact Link */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-surface-card/60 dark:hover:bg-surface-card border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/40 transition-all text-sm backdrop-blur-sm active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Social & Contact Links */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex flex-wrap items-center gap-2">
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
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-surface-card/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors shadow-sm"
                    title={social.name}
                  >
                    <span className="text-cyan-500 dark:text-cyan-400">{getSocialIcon(social.name)}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Profile Showcase & 3D Interactive Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Desktop View: Switchable Profile Showcase & 3D Cyber Core */}
            <div className="hidden lg:flex flex-col items-center w-full">
              {/* Futuristic View Switcher Tabs */}
              <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 backdrop-blur-md mb-5 shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveVisual("photo")}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                    activeVisual === "photo"
                      ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold shadow-neon-cyan"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Profile Photo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveVisual("3d")}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                    activeVisual === "3d"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-neon-purple"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>3D Cyber Core</span>
                </button>
              </div>

              {/* Profile Card View */}
              <div className={activeVisual === "photo" ? "w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[390px] relative group" : "hidden"}>
                {/* Outer Cyan & Purple Atmospheric Glow */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500/25 via-purple-600/25 to-pink-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 -z-10" />

                {/* Ambient Cyber Orbit Ring Frame */}
                <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-cyan-400 via-purple-500/80 to-teal-400 shadow-2xl shadow-cyan-500/10">
                  <div className="relative rounded-[22px] overflow-hidden bg-white/95 dark:bg-[#070b18]/95 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl">
                    {/* Cyber Tech HUD Corner Accents */}
                    <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80 z-20 pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-cyan-400/80 z-20 pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-purple-400/80 z-20 pointer-events-none" />
                    <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-purple-400/80 z-20 pointer-events-none" />

                    {/* Visual Portrait Image Container */}
                    <div className="relative aspect-[4/4.7] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={heroPortrait}
                        alt="Piel Mitra - Full Stack Web Developer"
                        priority
                        sizes="(max-width: 1024px) 100vw, 390px"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Gradient shading at base for smooth integration */}
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

                      {/* Floating Top-Left Status Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono text-cyan-300 shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span>Available for Hire</span>
                      </div>

                      {/* Floating Bottom Bar with 3D Holo Core button & Next.js + React badge */}
                      <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between gap-2 pointer-events-auto">
                        {/* Interactive 3D Quick-Action Pill Button */}
                        <button
                          type="button"
                          onClick={() => setActiveVisual("3d")}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-slate-200 hover:text-cyan-300 border border-slate-700 hover:border-cyan-400/60 text-[11px] font-mono backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md shrink-0 cursor-pointer"
                          title="Switch to 3D Cyber Crystal"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                          <span>3D Holo Core &rarr;</span>
                        </button>

                        {/* Floating Tech Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-purple-500/40 text-[11px] font-mono text-purple-300 shadow-lg shrink-0">
                          <Code2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>Next.js • React</span>
                        </div>
                      </div>
                    </div>

                    {/* Profile Caption Banner */}
                    <div className="p-3.5 sm:p-4 bg-white/95 dark:bg-surface-card/95 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">Piel Mitra</h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 shrink-0">
                            Full Stack
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5 truncate">
                          Crafting modern interactive web systems
                        </p>
                      </div>
                      <span className="text-xs font-mono text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap">
                        BD &bull; Remote
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Canvas View on Desktop */}
              <div className={activeVisual === "3d" ? "w-full relative flex flex-col items-center" : "hidden"}>
                {isDesktop && activeVisual === "3d" && <CyberCanvasWrapper />}
                <button
                  type="button"
                  onClick={() => setActiveVisual("photo")}
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-surface-card/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-cyan-500/40 text-xs font-mono hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <User className="w-3.5 h-3.5 text-cyan-500" />
                  <span>&larr; Switch Back to Profile Photo</span>
                </button>
              </div>
            </div>

            {/* Mobile View: Interactive 3D Canvas displayed below */}
            <div className="lg:hidden w-full relative">
              {!isDesktop && <CyberCanvasWrapper />}
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-8 sm:mt-12 flex justify-center">
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
