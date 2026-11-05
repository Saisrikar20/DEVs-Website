"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
  clubName?: string;
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  clubName = "DEVS REC",
}) => {
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user previously loaded in this session
    const isLoaded = sessionStorage.getItem("devs_website_preloader_seen");
    if (isLoaded) {
      onComplete();
      return;
    }

    const start = Date.now();
    const duration = 1400; // Cinematic duration matching DEVs-P2P

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setPhase("out");
        sessionStorage.setItem("devs_website_preloader_seen", "true");
        setTimeout(onComplete, 500);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-zinc-100 transition-all duration-500 ease-out select-none ${
        phase === "out" ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-white/[0.05] blur-[130px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-lg w-full px-6 text-center z-10">
        {/* Prominent Official DEVS Logo */}
        <div className="relative mb-8 transition-transform duration-700 hover:scale-105">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/devs-logo.png"
            alt="DEVS REC Logo"
            className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.25)] object-contain"
          />
        </div>

        {/* Subtle Category Pill (Monochrome) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 text-[11px] font-mono tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>DEVS REC · Rajalakshmi Engineering College</span>
        </div>

        {/* Sleek Minimalist Progress Bar */}
        <div className="w-56 sm:w-64 h-[2px] bg-zinc-900 rounded-full overflow-hidden border border-white/10 relative">
          <div
            className="h-full bg-gradient-to-r from-zinc-500 via-white to-zinc-500 transition-all duration-100 ease-out rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numeric Progress Counter */}
        <div className="mt-3 flex items-center justify-between w-56 sm:w-64 text-[10px] font-mono text-zinc-500">
          <span>INITIALIZING CORE</span>
          <span className="text-zinc-200 font-bold tabular-nums">{progress}%</span>
        </div>

        {/* Skip button for fast accessibility */}
        <button
          onClick={() => {
            setPhase("out");
            sessionStorage.setItem("devs_website_preloader_seen", "true");
            setTimeout(onComplete, 200);
          }}
          className="mt-8 text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
};

export default Preloader;

