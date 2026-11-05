"use client";

import React from "react";
import Link from "next/link";
import { useCMSData } from "@/data/cms-store";
import TiltedCard from "./reactbits/TiltedCard";
import ShinyText from "./reactbits/ShinyText";
import { ExternalLink, Code2, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "./icons";

export const FlagshipProjects = () => {
  const { data } = useCMSData();
  const projects = data.projects;

  return (
    <section id="projects" className="relative py-16 sm:py-24 border-b border-white/[0.08] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Flagship Student Platforms
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-lg">
              Shipped by DEVS REC developers for the college campus, hackathon stages, and global open source.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all self-start sm:self-auto"
          >
            <span>View All Repos</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3D Tilted Cards Grid from React Bits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <TiltedCard
              key={project.id}
              maxTilt={8}
              glareEffect={true}
              className="h-full rounded-2xl"
            >
              <div className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 sm:p-7 hover:border-white/25 transition-all shadow-xl">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/[0.06] text-zinc-300 border border-white/10">
                      {project.domain}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.08] text-white border border-white/20 font-semibold">
                        <ShinyText text={project.badge} speed={3} className="text-white font-bold" />
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tech stack pills */}
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

                  {/* Links (Monochrome) */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:underline transition-all"
                      >
                        <span>Launch Platform</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-zinc-500">
                        Campus Network Access
                      </span>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
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
    </section>
  );
};

export default FlagshipProjects;
