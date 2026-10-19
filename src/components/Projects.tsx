"use client";

import React from "react";
import { projectsData } from "@/data/portfolio";
import { ProjectItem } from "@/types";
import {
  ArrowUpRight,
  Github,
  Newspaper,
  TrendingUp,
  Dumbbell,
  Film,
  Play,
  Terminal,
  Code2,
  Sparkles,
  Search,
  Activity,
  Layers,
  Star,
  CheckCircle2,
  Globe,
  Radio,
} from "lucide-react";
import { motion } from "framer-motion";

// --- Visual Preview 1: Bangla News 24 ---
function BanglaNewsPreview() {
  return (
    <div className="relative w-full h-[320px] sm:h-[350px] md:h-[370px] lg:h-[390px] rounded-2xl overflow-hidden bg-[#070b16] border border-slate-800/90 flex flex-col justify-between p-5 select-none group/preview shadow-2xl">
      {/* Blueprint Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

      {/* Subtle Radial Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-rose-500/15 blur-3xl pointer-events-none" />

      {/* Geometric Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-cyan-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-purple-500/10 border-dashed pointer-events-none" />

      {/* Technical Header Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-b border-slate-800/80 pb-2.5">
        <span className="text-cyan-400 flex items-center gap-1.5 tracking-wider">
          <Radio className="w-3 h-3 text-rose-500 animate-pulse" />
          FEED://LIVE_NEWS_BN
        </span>
        <span className="text-slate-400 bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded text-[9px] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          ONLINE • 24/7
        </span>
      </div>

      {/* Central News Layout Motif */}
      <div className="relative z-10 my-auto space-y-3 transform group-hover/preview:scale-[1.02] transition-transform duration-500">
        {/* Breaking News Ticker */}
        <div className="flex items-center gap-2 rounded-lg bg-rose-950/40 border border-rose-500/30 px-3 py-1.5 text-xs text-rose-200 backdrop-blur-sm shadow-sm">
          <span className="bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0 font-sans tracking-wide">
            সর্বশেষ
          </span>
          <span className="truncate text-[11px] font-sans text-rose-100">
            দেশ ও বিশ্বের সর্বশেষ সংবাদ • রাজনীতি • অর্থনীতি • প্রযুক্তি
          </span>
        </div>

        {/* Lead Article Card */}
        <div className="p-3.5 rounded-xl bg-surface-card/90 border border-slate-800/90 space-y-2 backdrop-blur-md shadow-lg shadow-black/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded font-sans flex items-center gap-1">
              <Newspaper className="w-3 h-3 text-rose-400" />
              প্রধান খবর
            </span>
            <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
              <Globe className="w-3 h-3 text-cyan-400" />
              Digital Media
            </span>
          </div>
          <h5 className="text-xs sm:text-sm font-bold text-white font-sans leading-snug line-clamp-2">
            সহজ ও পরিচ্ছন্ন ইন্টারফেসে নির্ভরযোগ্য বাংলা সংবাদ পরিবেশন
          </h5>
          <div className="space-y-1 pt-0.5">
            <div className="h-1.5 bg-slate-700/60 rounded-full w-11/12" />
            <div className="h-1.5 bg-slate-800/80 rounded-full w-4/5" />
          </div>
        </div>

        {/* News Categories & Sync Badge */}
        <div className="flex items-center justify-between gap-1 text-[10px] font-sans">
          <div className="grid grid-cols-4 gap-1 flex-1">
            <span className="px-1.5 py-1 text-center rounded bg-slate-900/80 border border-slate-800 text-slate-300">
              রাজনীতি
            </span>
            <span className="px-1.5 py-1 text-center rounded bg-slate-900/80 border border-slate-800 text-slate-300">
              বিশ্ব
            </span>
            <span className="px-1.5 py-1 text-center rounded bg-slate-900/80 border border-slate-800 text-slate-300">
              বাণিজ্য
            </span>
            <span className="px-1.5 py-1 text-center rounded bg-slate-900/80 border border-slate-800 text-slate-300">
              খেলা
            </span>
          </div>
        </div>
      </div>

      {/* Technical Footer Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2.5">
        <span className="flex items-center gap-1 text-slate-400">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          Better Auth + MongoDB
        </span>
        <span className="text-cyan-400 font-semibold tracking-wider">
          NEXT.JS 14
        </span>
      </div>
    </div>
  );
}

// --- Visual Preview 2: BazarDor ---
function BazarDorPreview() {
  return (
    <div className="relative w-full h-[320px] sm:h-[350px] md:h-[370px] lg:h-[390px] rounded-2xl overflow-hidden bg-[#070b16] border border-slate-800/90 flex flex-col justify-between p-5 select-none group/preview shadow-2xl">
      {/* Blueprint Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

      {/* Radial Glow Accents */}
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      {/* Geometric Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-emerald-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-cyan-500/15 border-dashed pointer-events-none" />

      {/* Technical Header Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-b border-slate-800/80 pb-2.5">
        <span className="text-emerald-400 flex items-center gap-1.5 tracking-wider">
          <TrendingUp className="w-3 h-3 text-emerald-400" />
          MARKET_TELEMETRY://BD_DHAKA
        </span>
        <span className="text-slate-400 bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded text-[9px] flex items-center gap-1 font-sans">
          বাজার দর ট্র্যাকার
        </span>
      </div>

      {/* Central Market Price Dashboard Motif */}
      <div className="relative z-10 my-auto space-y-3 transform group-hover/preview:scale-[1.02] transition-transform duration-500">
        {/* Mock Search Bar */}
        <div className="h-8 rounded-lg bg-surface-card/90 border border-slate-800/90 flex items-center justify-between px-3 text-xs text-slate-400 shadow-sm backdrop-blur-md">
          <span className="flex items-center gap-1.5 text-[11px]">
            <Search className="w-3 h-3 text-cyan-400" />
            Search daily commodity prices...
          </span>
          <span className="text-[10px] text-cyan-400 font-mono font-sans bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
            নিত্যপণ্য
          </span>
        </div>

        {/* Commodity Price Cards Grid */}
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          {/* Card 1: Onion */}
          <div className="p-3 rounded-xl bg-surface-card/90 border border-slate-800/90 space-y-1.5 shadow-md backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-slate-200 block text-[11px] font-sans font-medium">
                পেঁয়াজ (Onion)
              </span>
              <span className="text-[10px] text-rose-400 font-mono font-semibold bg-rose-500/10 px-1 rounded">
                ▲ 12.5%
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-cyan-300 font-bold font-mono text-base block">
                ৳ ৫৪<span className="text-xs font-normal text-slate-400">/কেজি</span>
              </span>
              <span className="text-[9px] text-slate-400 font-mono">Daily Avg</span>
            </div>
            {/* Sparkline curve bar */}
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-rose-400 w-3/4 rounded-full" />
            </div>
          </div>

          {/* Card 2: Ginger */}
          <div className="p-3 rounded-xl bg-surface-card/90 border border-slate-800/90 space-y-1.5 shadow-md backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-slate-200 block text-[11px] font-sans font-medium">
                আদা (Ginger)
              </span>
              <span className="text-[10px] text-emerald-400 font-mono font-semibold bg-emerald-500/10 px-1 rounded">
                ▼ 4.2%
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-cyan-300 font-bold font-mono text-base block">
                ৳ ৮৫<span className="text-xs font-normal text-slate-400">/কেজি</span>
              </span>
              <span className="text-[9px] text-slate-400 font-mono">Market Price</span>
            </div>
            {/* Sparkline curve bar */}
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 w-4/5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Market Engine Telemetry Bar */}
        <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between font-mono backdrop-blur-sm">
          <span className="flex items-center gap-1.5 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Realtime Daily Commodity Tracker Engine
          </span>
          <span className="text-[9px] text-emerald-400 font-bold">● ACTIVE</span>
        </div>
      </div>

      {/* Technical Footer Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2.5">
        <span>MONGODB + BETTER AUTH</span>
        <span className="text-emerald-400">PRICE TRACKER</span>
      </div>
    </div>
  );
}

// --- Visual Preview 3: FitLog ---
function FitLogPreview() {
  return (
    <div className="relative w-full h-[320px] sm:h-[350px] md:h-[370px] lg:h-[390px] rounded-2xl overflow-hidden bg-[#070b16] border border-slate-800/90 flex flex-col justify-between p-5 select-none group/preview shadow-2xl">
      {/* Blueprint Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

      {/* Radial Glow Accents */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      {/* Geometric Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-purple-500/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-cyan-500/15 border-dashed pointer-events-none" />

      {/* Technical Header Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-b border-slate-800/80 pb-2.5">
        <span className="text-purple-400 flex items-center gap-1.5 tracking-wider">
          <Activity className="w-3 h-3 text-purple-400 animate-pulse" />
          FITLOG_CORE://ROUTINE_ACTIVE
        </span>
        <span className="text-cyan-400 bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded text-[9px]">
          LOCALSTORAGE SYNC
        </span>
      </div>

      {/* Central Workout HUD Motif */}
      <div className="relative z-10 my-auto space-y-2.5 transform group-hover/preview:scale-[1.02] transition-transform duration-500">
        {/* Workout Plan Header Bar */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-card/90 border border-slate-800 text-xs backdrop-blur-md shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Dumbbell className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <span className="font-semibold text-white text-xs">
              Today&apos;s Workout Plan
            </span>
          </div>
          <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/30 px-2 py-0.5 rounded">
            3 Active Lifts
          </span>
        </div>

        {/* Exercise Items Progression */}
        <div className="space-y-1.5 text-xs">
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/90 flex justify-between items-center text-slate-300">
            <div>
              <span className="font-medium text-white block text-[11px]">
                Barbell Bench Press
              </span>
              <span className="text-[10px] text-slate-400">Chest • 75kg</span>
            </div>
            <span className="text-purple-300 font-mono text-[11px] font-medium bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              4 sets × 10
            </span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/90 flex justify-between items-center text-slate-300">
            <div>
              <span className="font-medium text-white block text-[11px]">
                Back Squat
              </span>
              <span className="text-[10px] text-slate-400">Legs • 90kg</span>
            </div>
            <span className="text-purple-300 font-mono text-[11px] font-medium bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              4 sets × 8
            </span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/90 flex justify-between items-center text-slate-300">
            <div>
              <span className="font-medium text-white block text-[11px]">
                Pull-Up
              </span>
              <span className="text-[10px] text-slate-400">Back • Bodyweight</span>
            </div>
            <span className="text-purple-300 font-mono text-[11px] font-medium bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              3 sets × 12
            </span>
          </div>
        </div>

        {/* Stats Gauge Bar */}
        <div className="p-2 rounded-lg bg-purple-950/30 border border-purple-500/30 text-[10px] text-purple-300 font-mono flex items-center justify-between px-3">
          <span>Stats: 3 Exercises • 45m • 320 kcal</span>
          <span className="text-purple-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Complete
          </span>
        </div>
      </div>

      {/* Technical Footer Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2.5">
        <span>FRAMER MOTION + TAILWIND</span>
        <span className="text-purple-400">FITNESS HUD</span>
      </div>
    </div>
  );
}

// --- Visual Preview 4: MovieExplorer ---
function MovieExplorerPreview() {
  return (
    <div className="relative w-full h-[320px] sm:h-[350px] md:h-[370px] lg:h-[390px] rounded-2xl overflow-hidden bg-[#070b16] border border-slate-800/90 flex flex-col justify-between p-5 select-none group/preview shadow-2xl">
      {/* Blueprint Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

      {/* Radial Glow Accents */}
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

      {/* Geometric Film Elements & Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-purple-500/15 border-dashed pointer-events-none" />

      {/* Technical Header Bar with Film Sprockets */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-b border-slate-800/80 pb-2.5">
        <span className="text-blue-400 flex items-center gap-1.5 tracking-wider">
          <Film className="w-3 h-3 text-cyan-400" />
          CINEMA_DB://REST_API
        </span>
        <span className="text-slate-400 bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded text-[9px] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          STREAM • 4K HDR
        </span>
      </div>

      {/* Central Cinematic Discovery Motif */}
      <div className="relative z-10 my-auto space-y-3 transform group-hover/preview:scale-[1.02] transition-transform duration-500">
        {/* Cinematic Feature Card */}
        <div className="p-3.5 rounded-xl bg-surface-card/90 border border-slate-800/90 space-y-2.5 backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded font-mono flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Featured Release
            </span>
            <div className="flex items-center gap-1 text-[10px] text-amber-400 font-mono font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>8.9 / 10</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Play Button Emblem */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center shrink-0 shadow-neon-cyan">
              <Play className="w-5 h-5 text-cyan-300 fill-cyan-300/80 ml-0.5" />
            </div>
            <div className="space-y-1">
              <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                Interstellar Odyssey
              </h5>
              <p className="text-[10px] text-slate-400 line-clamp-1 font-mono">
                Sci-Fi • Space Exploration • Adventure
              </p>
            </div>
          </div>

          {/* Genre & Specs Badges */}
          <div className="flex items-center gap-1.5 pt-1 text-[9px] font-mono text-slate-300">
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
              ULTRA HD
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
              DOLBY ATMOS
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
              SUBTITLES
            </span>
          </div>
        </div>

        {/* Discovery Filter Bar */}
        <div className="p-2 rounded-lg bg-blue-950/20 border border-blue-500/30 text-[10px] text-blue-300 font-mono flex items-center justify-between px-3">
          <span>Catalog: 1,200+ Titles Indexed</span>
          <span className="text-cyan-400 font-semibold">Instant Search</span>
        </div>
      </div>

      {/* Technical Footer Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2.5">
        <span>REACT + REST API</span>
        <span className="text-cyan-400">NETLIFY DEPLOYED</span>
      </div>
    </div>
  );
}

// --- Visual Preview 5: DevStack ---
function DevStackPreview() {
  return (
    <div className="relative w-full h-[320px] sm:h-[350px] md:h-[370px] lg:h-[390px] rounded-2xl overflow-hidden bg-[#070b16] border border-slate-800/90 flex flex-col justify-between p-5 select-none group/preview shadow-2xl">
      {/* Blueprint Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

      {/* Radial Glow Accents */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

      {/* Geometric Circuit Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-cyan-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-purple-500/15 border-dashed pointer-events-none" />

      {/* Technical Header Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono border-b border-slate-800/80 pb-2.5">
        <span className="text-cyan-400 flex items-center gap-1.5 tracking-wider">
          <Terminal className="w-3 h-3 text-cyan-400" />
          DEVSTACK://STACK_BUILDER_v1
        </span>
        <span className="text-slate-400 bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded text-[9px] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          VITE BUILD
        </span>
      </div>

      {/* Central Developer Stack Workbench Motif */}
      <div className="relative z-10 my-auto space-y-3 transform group-hover/preview:scale-[1.02] transition-transform duration-500">
        {/* Terminal Header */}
        <div className="p-3.5 rounded-xl bg-surface-card/90 border border-slate-800/90 space-y-2.5 backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              devstack ~/my-stack
            </span>
          </div>

          <div className="space-y-1.5 pt-1">
            <p className="text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Personalized Technology Stack:</span>
            </p>
            {/* Interactive Selected Tech Slots */}
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                React.js
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-300">
                TypeScript
              </span>
              <span className="px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 text-[10px] font-mono text-teal-300">
                Tailwind CSS
              </span>
              <span className="px-2 py-0.5 rounded bg-pink-500/10 border border-pink-500/30 text-[10px] font-mono text-pink-300">
                DaisyUI
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300">
                Vite
              </span>
            </div>
          </div>
        </div>

        {/* Stack Status Badge */}
        <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between font-mono backdrop-blur-sm">
          <span className="flex items-center gap-1.5 text-[10px]">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Selected: 5 Tools • Duplicate Prevention Active
          </span>
          <span className="text-[9px] text-emerald-400 font-bold">● READY</span>
        </div>
      </div>

      {/* Technical Footer Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2.5">
        <span>REACT-TOASTIFY + TS</span>
        <span className="text-cyan-400">NETLIFY HOSTED</span>
      </div>
    </div>
  );
}

// Map each project ID to its visual preview component
function ProjectVisualPreview({ projectId }: { projectId: string }) {
  switch (projectId) {
    case "bangla-news-24":
      return <BanglaNewsPreview />;
    case "bazardor":
      return <BazarDorPreview />;
    case "fitlog":
      return <FitLogPreview />;
    case "movieexplorer":
      return <MovieExplorerPreview />;
    case "devstack":
      return <DevStackPreview />;
    default:
      return <BanglaNewsPreview />;
  }
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dots-pattern"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm shadow-cyan-500/10">
            Portfolio Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3.5 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A curated collection of full-stack web applications engineered with modern technologies and clean architectures.
          </p>
        </motion.div>

        {/* Five Projects List in Exact Order */}
        <div className="space-y-12 sm:space-y-16">
          {projectsData.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group"
            >
              {/* Large Horizontal Project Card */}
              <div className="rounded-3xl bg-white dark:bg-[#0c1527] border border-slate-200/90 dark:border-slate-800/90 hover:border-cyan-500/40 p-7 sm:p-9 lg:p-11 shadow-lg shadow-slate-200/40 dark:shadow-2xl dark:shadow-black/60 hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    {/* Header: Category & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wider">
                        {project.number}
                      </span>
                    </div>

                    {/* Large Bold Project Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {project.title}
                      {project.bengaliTitle && (
                        <span className="text-lg sm:text-xl font-normal text-cyan-700/80 dark:text-cyan-300/80 font-sans ml-2">
                          ({project.bengaliTitle})
                        </span>
                      )}
                    </h3>

                    {/* Concise Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Small Outlined Technology Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-mono font-medium border border-slate-300 dark:border-slate-800/90 bg-slate-100/70 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                      {/* View Live Demo Link */}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo for ${project.title}`}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-200 shadow-neon-cyan hover:shadow-cyan-400/50 active:scale-95"
                      >
                        <span>View Live Demo</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      {/* View Repository Link */}
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View repository for ${project.title}`}
                        className="group/repo inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/40 transition-all duration-200 active:scale-95"
                      >
                        <span>View Repository</span>
                        <Github className="w-4 h-4 text-purple-500 dark:text-purple-400 group-hover/repo:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Large Custom Visual Preview Panel */}
                  <div className="lg:col-span-5 flex items-center justify-center w-full">
                    <ProjectVisualPreview projectId={project.id} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
