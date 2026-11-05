"use client";

import React, { useState } from "react";
import { useCMSData } from "@/data/cms-store";
import TiltedCard from "@/components/reactbits/TiltedCard";
import ShinyText from "@/components/reactbits/ShinyText";
import DecryptedText from "@/components/reactbits/DecryptedText";
import { Code2, ExternalLink, Sparkles, Search } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function ProjectsPage() {
  const { data } = useCMSData();
  const projects = data.projects;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPEN SOURCE &amp; CAMPUS PLATFORMS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            <DecryptedText text="Engineering Showcases" speed={30} className="text-white" encryptedClassName="text-emerald-400 font-mono" />
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Production web platforms, 3D spatial simulations, and developer utilities engineered collaboratively by DEVS REC members.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-80 mb-10">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects, domains, or stacks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <TiltedCard
              key={project.id}
              maxTilt={7}
              glareEffect={true}
              className="h-full rounded-2xl"
            >
              <div className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-6 sm:p-7 hover:border-white/20 transition-all shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/[0.08] text-zinc-200 border border-white/10">
                      {project.domain}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                        <ShinyText text={project.badge} speed={3} className="text-emerald-400 font-bold" />
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2.5">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <span>Launch Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-zinc-400">
                        Campus Network Access
                      </span>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
