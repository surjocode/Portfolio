"use client";

import React, { useState } from "react";
import { skillCategories, allSkillsList } from "@/data/portfolio";
import {
  Code,
  Server,
  GitBranch,
  CheckCircle,
  FileCode2,
  Terminal,
  Database,
  Cpu,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const getCategoryIcon = (title: string) => {
    if (title.includes("Frontend")) {
      return <Code className="w-5 h-5 text-cyan-400" />;
    }
    if (title.includes("Backend")) {
      return <Server className="w-5 h-5 text-purple-400" />;
    }
    return <GitBranch className="w-5 h-5 text-cyan-400" />;
  };

  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case "HTML":
      case "CSS":
        return <FileCode2 className="w-4 h-4 text-cyan-400" />;
      case "JavaScript":
      case "TypeScript":
        return <Code className="w-4 h-4 text-purple-400" />;
      case "React.js":
      case "Next.js":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Tailwind CSS":
        return <Layers className="w-4 h-4 text-teal-400" />;
      case "Node.js":
      case "Express.js":
        return <Terminal className="w-4 h-4 text-purple-400" />;
      case "MongoDB":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "Git":
      case "GitHub":
        return <GitBranch className="w-4 h-4 text-cyan-400" />;
      default:
        return <CheckCircle className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories =
    activeFilter === "All"
      ? skillCategories
      : skillCategories.filter((c) =>
          c.title.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-surface-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm shadow-purple-500/10">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Focused on a strong core stack for modern, full-stack web application development.
          </p>

          {/* Quick interactive filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {["All", "Frontend", "Backend", "Collaboration"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-400/50 shadow-neon-cyan"
                    : "bg-white dark:bg-surface-card border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col h-full rounded-2xl bg-white/90 dark:bg-surface-card/80 border border-slate-200 dark:border-slate-800/90 p-6 hover:border-cyan-500/40 hover:shadow-neon-glow transition-all duration-300 group backdrop-blur-md shadow-md dark:shadow-xl"
            >
              {/* Category Top Banner */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
                  {getCategoryIcon(cat.title)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {cat.skills.length} core technologies
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {cat.description}
              </p>

              {/* Individual Skill Items */}
              <div className="flex-grow space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-surface-200/80 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-100 dark:hover:bg-surface-100 transition-all duration-200 group/item"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {getSkillIcon(skill.name)}
                        <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal pl-6">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Tag Cloud of all 12 skills */}
        <div className="mt-14 p-6 rounded-2xl bg-white/80 dark:bg-surface-card/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
            Core Technology Cloud
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allSkillsList.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-surface-100 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 hover:shadow-neon-cyan transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-slate-500 dark:text-slate-400">
            Note: Listed technologies represent active focus areas where hands-on coding and project implementations are ongoing.
          </p>
        </div>
      </div>
    </section>
  );
}
