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
    { name: "PostgreSQL", icon: Code2 },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-12 pb-8 border-b border-white/[0.1] bg-black">
      {/* Background Squares Canvas in Stark Monochrome */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.35}
          squareSize={46}
          borderColor="rgba(255, 255, 255, 0.04)"
          hoverFillColor="rgba(255, 255, 255, 0.12)"
        />
        {/* Ambient Monochrome Glow Spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Top Eyebrow Badge (Monochrome Pill) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-white/15 text-xs font-mono text-zinc-300 mb-6 backdrop-blur-md shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>DEVS REC · TECHNICAL SOCIETY</span>
          <span className="text-zinc-600">/</span>
          <ShinyText text="DEVATHON 2025 OPEN" speed={3} className="text-white font-bold" />
        </div>

        {/* Primary Headline in High-Contrast Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          <span className="block">With DEVS,</span>
          <span className="block mt-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Everything Is Easier.
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
          The flagship technical guild of Rajalakshmi Engineering College. We forge curious students into high-impact software architects, AI researchers, and open-source creators.
        </p>

        {/* Interactive CTA Buttons (Black & White Inversion) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Magnet padding={30} magnetStrength={3}>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold text-sm transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] active:scale-95"
            >
              <span>Join DEVS Guild</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnet>

          <Magnet padding={30} magnetStrength={3}>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-white/20 hover:border-white/40 text-white font-mono text-sm transition-all backdrop-blur-md active:scale-95"
            >
              <Terminal className="w-4 h-4 text-zinc-400" />
              <span>Explore Devathon</span>
            </Link>
          </Magnet>

          <Magnet padding={30} magnetStrength={3}>
            <a
              href="https://learn.devsrec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white font-mono text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-zinc-300" />
              <span>P2P Platform</span>
            </a>
          </Magnet>
        </div>

        {/* Interactive Terminal Pill (Monochrome) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md">
          <span className="text-white font-bold">$</span>
          <span>npm install @devs-rec/community</span>
          <span className="text-zinc-500">--save-future</span>
        </div>
      </div>

      {/* Bottom Tech Marquee with InfiniteScroll */}
      <div className="relative z-10 border-t border-white/[0.08] bg-black/80 backdrop-blur-sm mt-8 py-2.5">
        <InfiniteScroll
          speed={32}
          direction="left"
          items={techLogos.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-950 border border-white/[0.08] text-xs font-mono text-zinc-400 hover:text-white hover:border-white/25 transition-all cursor-default"
              >
                <Icon className="w-3.5 h-3.5 text-zinc-300" />
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
