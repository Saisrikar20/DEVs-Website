"use client";

import React, { useState } from "react";
import { initialDomains } from "@/data/club-data";
import SpotlightCard from "./reactbits/SpotlightCard";
import DecryptedText from "./reactbits/DecryptedText";
import { Globe, Cpu, Cloud, Gamepad2, Smartphone, Palette, Layers, Terminal } from "lucide-react";

export const DomainsSection = () => {
  const [activeDomain, setActiveDomain] = useState<string>("all");

  const iconMap: Record<string, React.ElementType> = {
    Globe,
    Cpu,
    Cloud,
    Gamepad2,
    Smartphone,
    Palette,
    Layers,
  };

  const filteredDomains =
    activeDomain === "all"
      ? initialDomains
      : initialDomains.filter((d) => d.slug === activeDomain);

  return (
    <section id="domains" className="relative py-16 sm:py-24 border-b border-white/[0.08] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>TECHNICAL DOMAINS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Guilds &amp; Tracks
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl">
              Choose your craft. We organize dedicated project pods, code sprints, and mentor pairings for each engineering discipline.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-white/10 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveDomain("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                activeDomain === "all"
                  ? "bg-white text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Guilds
            </button>
            {initialDomains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain.slug)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                  activeDomain === domain.slug
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {domain.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Domains Grid with SpotlightCard (Monochrome Silver Glow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain) => {
            const IconComponent = iconMap[domain.iconName] || Terminal;
            return (
              <SpotlightCard
                key={domain.id}
                spotlightColor="rgba(255, 255, 255, 0.09)"
                className="flex flex-col justify-between h-full bg-zinc-950 border-white/[0.08] hover:border-white/25 transition-all p-6 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
                      {domain.lead}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <DecryptedText
                      text={domain.name}
                      speed={25}
                      className="text-white"
                      encryptedClassName="text-zinc-400 font-mono"
                    />
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {domain.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
