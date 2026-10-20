"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/portfolio";
import { Menu, X, ArrowUpRight, Terminal, Sun, Moon } from "lucide-react";
import ResumeButton from "./ResumeButton";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#050811]/90 backdrop-blur-md border-b border-slate-200 dark:border-cyan-500/15 shadow-sm dark:shadow-xl dark:shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo / Branding */}
          <Link
            href="#hero"
            className="shrink-0 group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded-lg"
            onClick={closeMenu}
            aria-label="Piel Mitra – Full Stack Web Developer, go to home"
          >
            {/* Terminal icon badge */}
            <div className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 dark:bg-gradient-to-br dark:from-cyan-500/15 dark:via-purple-500/10 dark:to-transparent border border-cyan-500/30 dark:border-cyan-500/40 text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-400/70 group-hover:bg-cyan-500/15 group-hover:shadow-[0_0_14px_-3px_rgba(0,242,254,0.4)] transition-all duration-300">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" />
            </div>

            {/* Name + subtitle stacked */}
            <div className="flex flex-col leading-none gap-[3px]">
              <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200 whitespace-nowrap">
                {siteConfig.name}
                <span className="text-cyan-500 dark:text-cyan-400 ml-0.5">_</span>
              </span>
              <span className="hidden sm:block font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-cyan-600/70 dark:text-cyan-400/60 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200 whitespace-nowrap">
                Full Stack Web Developer
              </span>
            </div>
          </Link>

          {/* Desktop & Tablet Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-white/80 dark:bg-surface-card/80 border border-slate-200 dark:border-slate-800/80 rounded-full px-2.5 lg:px-4 py-1.5 backdrop-blur-md shadow-sm dark:shadow-inner shrink-0"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 lg:px-4 py-1 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-cyan-700 dark:text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-sm shadow-cyan-500/20"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 lg:p-2.5 rounded-xl text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300 bg-slate-100 dark:bg-surface-card hover:bg-slate-200 dark:hover:bg-surface-elevated border border-slate-200 dark:border-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer shadow-sm active:scale-95 shrink-0"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Quick Resume Download Action */}
            <ResumeButton variant="nav" label="Resume" />

            {/* Contact Action (Visible on lg+ screens to give tablet breathing room) */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-lg transition-all duration-200 shadow-neon-cyan hover:shadow-cyan-400/40 active:scale-[0.98] shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#050811]/98 border-b border-slate-200 dark:border-cyan-500/15 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl shadow-xl dark:shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-l-2 border-cyan-500 dark:border-cyan-400 font-semibold"
                      : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-2.5">
            {/* Resume button for mobile */}
            <div className="w-full">
              <ResumeButton
                className="w-full justify-center"
                variant="secondary"
                label="Download Resume (PDF)"
              />
            </div>

            {/* Contact button for mobile */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-center font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-colors shadow-neon-cyan"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
