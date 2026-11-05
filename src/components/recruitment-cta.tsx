import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import ShinyText from "./reactbits/ShinyText";
import Magnet from "./reactbits/Magnet";

export const RecruitmentCTA = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>RECRUITMENT &amp; ONBOARDING</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Ready to Build Things That Matter?
        </h2>

        <p className="max-w-xl mx-auto text-xs sm:text-base text-zinc-300 leading-relaxed mb-8">
          Join the DEVS REC family. Work alongside driven peers, build real software, win hackathons, and launch your engineering career from college.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Magnet padding={30} magnetStrength={3}>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-sm transition-all shadow-[0_0_25px_rgba(52,211,153,0.35)] hover:shadow-[0_0_35px_rgba(52,211,153,0.55)] active:scale-95"
            >
              <span>Submit Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnet>

          <Magnet padding={30} magnetStrength={3}>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-300 hover:text-white font-mono text-sm transition-all"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Explore CMS Studio</span>
            </Link>
          </Magnet>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentCTA;
