"use client";

import React from "react";
import Link from "next/link";
import { useCMSData } from "@/data/cms-store";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export const TeamPreview = () => {
  const { data } = useCMSData();
  const members = data.team.slice(0, 4);

  return (
    <section className="relative py-16 sm:py-24 border-b border-white/[0.08] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>LEADERSHIP &amp; ARCHITECTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              The Builders Behind DEVS REC
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 max-w-lg">
              Student founders, tech leads, and domain architects mentoring the next generation of engineers.
            </p>
          </div>

          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all self-start sm:self-auto"
          >
            <span>Full Roster &amp; Alumni</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-5 lift hover:border-white/20 transition-all shadow-xl group"
            >
              <div>
                {/* Avatar with fallback or image */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-white/10 mb-4 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {member.domain}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-2.5">
                  {member.role}
                </p>
                <p className="text-xs text-zinc-300 line-clamp-2 mb-4 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  {member.year}
                </span>

                <div className="flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
