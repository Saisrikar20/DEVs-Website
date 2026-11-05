import React from "react";
import { Sparkles, ArrowUpRight, BookOpen, Layers, CheckCircle2, Terminal } from "lucide-react";
import ShinyText from "./reactbits/ShinyText";
import DecryptedText from "./reactbits/DecryptedText";

export const P2PSpotlight = () => {
  const tracks = [
    { title: "Frontend Engineering", skills: "React 19, Next.js, WebGL, Tailwind v4" },
    { title: "Backend Systems", skills: "PostgreSQL, Distributed Systems, Microservices" },
    { title: "AI & Neural Pipelines", skills: "PyTorch, Transformers, Agentic Workflows" },
    { title: "Cloud & Kubernetes", skills: "AWS, CI/CD, Container Architecture" },
  ];

  return (
    <section className="relative py-16 sm:py-24 border-b border-white/[0.08] bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-white/10 bg-zinc-950/90 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTEGRATED ECOSYSTEM</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                DEVs P2P: Open Technical Curriculum &amp; Mentorship
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
                We don’t believe in passive tutorial watching. The DEVs P2P platform gives students structured, phase-by-phase roadmaps, production architectures, mentor directories, and capstone milestones across engineering domains.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {tracks.map((track, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono space-y-1"
                  >
                    <div className="flex items-center gap-2 text-white font-bold">
                      <span className="text-emerald-400">#0{idx + 1}</span>
                      <span>{track.title}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 truncate">
                      {track.skills}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://learn.devsrec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] active:scale-95"
                >
                  <span>Launch learn.devsrec.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs font-mono text-zinc-400">
                  100% Free &amp; Open Access for all RECians
                </span>
              </div>
            </div>

            {/* Right Graphic / Terminal preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-black/80 p-5 font-mono text-xs text-zinc-300 space-y-3 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] text-zinc-400">learn.devsrec.com</span>
                </div>

                <div className="space-y-2 text-[12px]">
                  <p className="text-zinc-400">
                    <span className="text-emerald-400">devs@rec</span>:
                    <span className="text-cyan-400">~</span>$ p2p roadmap --track=web3-ai
                  </p>
                  <p className="text-emerald-300">
                    ✔ [Phase 01]: Foundational Systems &amp; Next.js 15
                  </p>
                  <p className="text-emerald-300">
                    ✔ [Phase 02]: Vector Embeddings &amp; Local LLMs
                  </p>
                  <p className="text-emerald-300">
                    ✔ [Phase 03]: Real-time Multi-tenant WebSockets
                  </p>
                  <p className="text-cyan-300">
                    ➜ [Phase 04]: Production Docker &amp; Cloud Deployment
                  </p>
                  <div className="pt-2 text-zinc-400 text-[11px]">
                    Status: <span className="text-emerald-400 font-bold">120+ active student peers enrolled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2PSpotlight;
