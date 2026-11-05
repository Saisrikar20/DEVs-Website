"use client";

import React, { useState } from "react";
import { useCMSData } from "@/data/cms-store";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ShinyText from "@/components/reactbits/ShinyText";
import { Users, Sparkles, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";

export default function TeamPage() {
  const { data } = useCMSData();
  const team = data.team;
  const [filter, setFilter] = useState<"all" | "leads" | "alumni">("all");

  const filteredTeam = team.filter((member) => {
    if (filter === "leads") return !member.isAlumni;
    if (filter === "alumni") return member.isAlumni;
    return true;
  });

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
            <Users className="w-3.5 h-3.5 text-zinc-300" />
            <span>LEADERSHIP &amp; HALL OF FAME</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            <DecryptedText text="The Core Architects" speed={30} className="text-white" encryptedClassName="text-zinc-400 font-mono" />
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Meet the student organizers, domain leads, and mentors from DEVs-P2P and Rajalakshmi Engineering College.
          </p>
        </div>

        {/* Filter Pills (Monochrome) */}
        <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-white/10 w-fit mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              filter === "all"
                ? "bg-white text-black font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            All Members ({team.length})
          </button>
          <button
            onClick={() => setFilter("leads")}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              filter === "leads"
                ? "bg-white text-black font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Current Organizers &amp; Mentors
          </button>
          <button
            onClick={() => setFilter("alumni")}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              filter === "alumni"
                ? "bg-white text-black font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Founders &amp; Alumni
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950 p-5 lift hover:border-white/25 transition-all shadow-xl group"
            >
              <div>
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-white/10 mb-4 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/85 text-white border border-white/20 backdrop-blur-md">
                      {member.domain}
                    </span>
                  </div>
                  {member.isAlumni && (
                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.12] text-white border border-white/25 backdrop-blur-md font-semibold">
                        Hall of Fame
                      </span>
                    </div>
                  )}
                </div>

                <h2 className="text-base font-bold text-white mb-0.5">
                  {member.name}
                </h2>
                <p className="text-xs font-mono text-zinc-400 mb-2.5">
                  {member.role}
                </p>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
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
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.12] text-zinc-400 hover:text-white transition-colors"
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
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.12] text-zinc-400 hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.12] text-zinc-400 hover:text-white transition-colors"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
