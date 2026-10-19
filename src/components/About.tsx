"use client";

import React from "react";
import Image from "next/image";
import { Code, Layers, Rocket, CheckCircle2, Globe, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/pc2.png";

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "Clean & Modern Code",
      description:
        "Dedicated to writing readable, maintainable, and type-safe code following modern web standards and best practices.",
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: "Full Stack Foundations",
      description:
        "Building interactive user interfaces with React and Next.js, paired with RESTful backend services using Node.js, Express, and MongoDB.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      title: "Continuous Learner",
      description:
        "Enthusiastic about keeping pace with evolving web technologies, deepening foundational knowledge, and tackling practical challenges.",
    },
    {
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      title: "Remote Collaboration",
      description:
        "Comfortable with Git and GitHub workflows, clear written communication, and collaborating across distributed teams.",
    },
  ];

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm shadow-cyan-500/10">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Driven by curiosity, building for the modern web
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A glimpse into my background, development values, and aspirations as an early-career software engineer.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Outer neon cyber glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl blur-xl opacity-30 dark:opacity-40 group-hover:opacity-60 dark:group-hover:opacity-75 transition duration-500" />

              <div className="relative rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-cyan-500/30 overflow-hidden shadow-xl dark:shadow-2xl backdrop-blur-md">
                {/* Visual Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                  <Image
                    src={profilePhoto}
                    alt="Piel Mitra - Full Stack Web Developer"
                    priority
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-80" />
                </div>

                {/* Profile Caption Banner */}
                <div className="p-5 relative bg-white/95 dark:bg-surface-card/90 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>Piel Mitra</span>
                        <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                      </h3>
                      <p className="text-xs text-cyan-700 dark:text-cyan-300 font-mono mt-0.5">
                        Full Stack Web Developer
                      </p>
                    </div>
                    <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-500/10 border border-purple-500/30 px-2.5 py-1 rounded-md">
                      BD • Remote
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-4 -right-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-purple-500/40 text-purple-700 dark:text-purple-300 text-xs font-medium flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                <span>Next.js &amp; TypeScript Focus</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-surface-card/80 border border-slate-200 dark:border-slate-800/90 backdrop-blur-md relative overflow-hidden shadow-lg dark:shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Passionate Early-Career Developer
              </h3>

              <p className="mb-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Hello! I am <span className="text-cyan-700 dark:text-cyan-300 font-semibold">Piel Mitra</span>, an aspiring full stack web developer focused on creating smooth, accessible, and responsive user experiences on the web.
              </p>

              <p className="mb-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                My journey into programming began with a deep curiosity about how modern digital products operate under the hood. Since then, I have invested my energy into mastering core web technologies—building solid foundations in <span className="text-slate-900 dark:text-slate-100 font-medium">JavaScript</span> and <span className="text-slate-900 dark:text-slate-100 font-medium">TypeScript</span>, crafting responsive UIs with <span className="text-slate-900 dark:text-slate-100 font-medium">React.js</span>, <span className="text-slate-900 dark:text-slate-100 font-medium">Next.js</span>, and <span className="text-slate-900 dark:text-slate-100 font-medium">Tailwind CSS</span>, and architecting backend services with <span className="text-slate-900 dark:text-slate-100 font-medium">Node.js</span>, <span className="text-slate-900 dark:text-slate-100 font-medium">Express.js</span>, and <span className="text-slate-900 dark:text-slate-100 font-medium">MongoDB</span>.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                I am actively seeking <span className="text-cyan-700 dark:text-cyan-300 font-medium">remote internship opportunities</span> and junior roles where I can contribute to meaningful real-world projects, collaborate with experienced engineers, and continuously elevate my technical craftsmanship.
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                What I Bring to a Team:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-surface-card/40 border border-slate-200 dark:border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>Strong command of web fundamentals</span>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-surface-card/40 border border-slate-200 dark:border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Emphasis on type safety &amp; clean code</span>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-surface-card/40 border border-slate-200 dark:border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>Disciplined version control with Git &amp; GitHub</span>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50 dark:bg-surface-card/40 border border-slate-200 dark:border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>Receptive to feedback &amp; code reviews</span>
                </div>
              </div>
            </div>

            {/* Internship Callout Box */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-purple-100/60 via-white to-cyan-100/60 dark:from-purple-950/30 dark:via-surface-card dark:to-cyan-950/30 border border-cyan-400/40 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-semibold text-slate-900 dark:text-white">
                <HeartHandshake className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <span>Ready for Remote Collaboration</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Comfortable adapting to team workflows, agile processes, time zone differences, and asynchronous communication standards.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-xl bg-white/90 dark:bg-surface-card/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-white dark:hover:bg-surface-card transition-all duration-300 group shadow-sm"
            >
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-colors w-fit mb-3">
                {item.icon}
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
