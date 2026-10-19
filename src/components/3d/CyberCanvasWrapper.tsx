"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import CyberCanvas with SSR disabled
const CyberCanvas = dynamic(() => import("./CyberCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[360px] sm:h-[440px] md:h-[480px] flex items-center justify-center">
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-cyan-500/20 animate-pulse flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-purple-500/10 blur-xl" />
      </div>
    </div>
  ),
});

export default function CyberCanvasWrapper() {
  return <CyberCanvas />;
}
