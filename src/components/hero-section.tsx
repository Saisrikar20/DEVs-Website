"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, Code2, Globe, Cpu, Layers } from "lucide-react";
import Squares from "./reactbits/Squares";
import ShinyText from "./reactbits/ShinyText";
import BlurText from "./reactbits/BlurText";
import DecryptedText from "./reactbits/DecryptedText";
import Magnet from "./reactbits/Magnet";
import InfiniteScroll from "./reactbits/InfiniteScroll";

export const HeroSection = () => {
  const techLogos = [
    { name: "Next.js 15", icon: Globe },
    { name: "React 19", icon: Code2 },
    { name: "TypeScript", icon: Terminal },
    { name: "PyTorch & AI", icon: Cpu },
    { name: "Three.js 3D", icon: Layers },
    { name: "Tailwind CSS", icon: Sparkles },
    { name: "Docker & Cloud", icon: Globe },
    { name: "Supabase & Postgres", icon: Code2 },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-12 pb-8 border-b border-white/[0.08]">
      {/* Background Squares Canvas from React Bits */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.4}
          squareSize={46}
          borderColor="rgba(255, 255, 255, 0.04)"
          hoverFillColor="rgba(52, 211, 153, 0.08)"
        />
        {/* Ambient Gradient glow overlays */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 mb-6 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>OFFICIAL DEVELOPERS CLUB · REC</span>
          <span className="text-zinc-600">|</span>
          <ShinyText text="DEVATHON 2025 OPEN" speed={3} className="text-emerald-400 font-bold" />
        </div>

        {/* Primary Headline with BlurText */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          <span className="block">With DEVS,</span>
          <span className="block mt-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400">
              Everything Is Easier.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-200 leading-relaxed mb-8">
          The flagship technical community of Rajalakshmi Engineering College. We turn curious students into high-impact software architects, AI researchers, and open-source creators.
        </p>

        {/* Interactive CTA Buttons with Magnet */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Magnet padding={30} magnetStrength={3}>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-sm transition-all shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.55)] active:scale-95"
            >
              <span>Join DEVS Guild</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnet>

          <Magnet padding={30} magnetStrength={3}>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-white/15 text-white font-mono text-sm transition-all hover:border-white/30 backdrop-blur-md active:scale-95"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Explore Devathon &amp; Events</span>
            </Link>
          </Magnet>

          <Magnet padding={30} magnetStrength={3}>
            <a
              href="https://learn.devsrec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white font-mono text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>P2P Platform</span>
            </a>
          </Magnet>
        </div>

        {/* Interactive Terminal Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950/80 border border-white/[0.08] text-xs font-mono text-zinc-300 backdrop-blur-md">
          <span className="text-emerald-400">$</span>
          <span>npm install @devs-rec/community</span>
          <span className="text-zinc-600">--save-future</span>
        </div>
      </div>

      {/* Bottom Tech Marquee with InfiniteScroll */}
      <div className="relative z-10 border-t border-white/[0.06] bg-black/60 backdrop-blur-sm mt-8 py-2">
        <InfiniteScroll
          speed={30}
          direction="left"
          items={techLogos.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-950/60 border border-white/[0.06] text-xs font-mono text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-default"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        />
      </div>
    </section>
  );
};

export default HeroSection;
