"use client";

import React from "react";
import { useCMSData } from "@/data/cms-store";
import CountUp from "./reactbits/CountUp";
import { Users, Trophy, Code, Award, Sparkles } from "lucide-react";

export const StatsSection = () => {
  const { data } = useCMSData();
  const stats = data.stats;

  const statItems = [
    {
      label: "Active Students Impacted",
      value: stats.members,
      suffix: "+",
      icon: Users,
      description: "Across all REC engineering branches",
    },
    {
      label: "Hackathons & Dev Events",
      value: stats.hackathons,
      suffix: "+",
      icon: Trophy,
      description: "Host & participant podium finishes",
    },
    {
      label: "Live Campus Platforms",
      value: stats.platforms,
      suffix: "",
      icon: Code,
      description: "Virtual Exp, DEVS Chat, P2P, Game",
    },
    {
      label: "Prize Pool & Grants Won",
      value: stats.prizeMoney,
      prefix: "$",
      suffix: "+",
      icon: Award,
      description: "Won by members in global hackathons",
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 border-b border-white/[0.08] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>PROOF OF WORK &amp; IMPACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering Numbers That Speak
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Real metrics driven by REC student builders, mentors, and innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 lift hover:border-white/25 transition-all group overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1.5 flex items-baseline">
                  <CountUp
                    to={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    duration={2.5}
                    className="text-white"
                  />
                </div>

                <h3 className="text-sm font-semibold text-zinc-200 mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-zinc-400">
                  {item.description}
                </p>

                {/* Subtle bottom accent line (monochrome white) */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
