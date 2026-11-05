import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Heart } from "lucide-react";
import { LinkedinIcon, InstagramIcon, GithubIcon } from "./icons";
import DecryptedText from "./reactbits/DecryptedText";

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-black text-zinc-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
                &gt;_
              </div>
              <span className="font-bold text-lg text-white font-sans tracking-tight">
                DEVS REC
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm">
              The premier developer community at Rajalakshmi Engineering College. Fostering real-world engineering, open-source architectures, and student innovation.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.linkedin.com/company/devsrec/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/devsrec/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/Saisrikar20/DEVs-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                title="GitHub Repo"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Technical Domains */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Technical Domains
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li>
                <Link href="/#domains" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Full Stack & Web
                </Link>
              </li>
              <li>
                <Link href="/#domains" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> AI / ML & Agents
                </Link>
              </li>
              <li>
                <Link href="/#domains" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/#domains" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Spatial 3D & Games
                </Link>
              </li>
              <li>
                <Link href="/#domains" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> UI / UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms & Hubs */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Ecosystem Platforms
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li>
                <a
                  href="https://learn.devsrec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-200 group-hover:text-emerald-400">DEVs P2P Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://rec-experience.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-200 group-hover:text-emerald-400">REC Virtual Experience 3D</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://devschat-c2d01.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-200 group-hover:text-emerald-400">DEVS Real-time Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-200 group-hover:text-emerald-400">No-Code CMS Content Studio</span>
                  <Terminal className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-300">
          <p>
            &copy; {new Date().getFullYear()} DEVS REC. Built with Next.js 15, Tailwind v4 &amp; React Bits.
          </p>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span>Rajalakshmi Engineering College</span>
            <span>·</span>
            <span className="text-emerald-400">With DEVS, Everything Is Easier</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
