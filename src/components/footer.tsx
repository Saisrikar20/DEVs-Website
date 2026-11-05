import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";
import { LinkedinIcon, InstagramIcon, GithubIcon } from "./icons";

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.1] bg-black text-zinc-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info with official DEVS Logo */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/devs-logo.png"
                alt="DEVS"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
              />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              The premier developer community at Rajalakshmi Engineering College. Fostering real-world engineering, open-source architectures, and student innovation.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.linkedin.com/company/devsrec/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/devsrec/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/Saisrikar20/DEVs-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
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
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <Link href="/#domains" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> AI Systems &amp; LLMs
                </Link>
              </li>
              <li>
                <Link href="/#domains" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Full Stack &amp; Web
                </Link>
              </li>
              <li>
                <Link href="/#domains" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Cloud &amp; MLOps
                </Link>
              </li>
              <li>
                <Link href="/#domains" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Backend Architecture
                </Link>
              </li>
              <li>
                <Link href="/#domains" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">›</span> Robotics &amp; Spatial 3D
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms & Hubs */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Ecosystem Platforms
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-300 group-hover:text-white">Engineering Blogs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                </Link>
              </li>
              <li>
                <a
                  href="https://learn.devsrec.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-300 group-hover:text-white">DEVs P2P Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://rec-experience.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-300 group-hover:text-white">REC Virtual Experience 3D</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://devschat-c2d01.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-300 group-hover:text-white">DEVS Real-time Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                </a>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="text-zinc-300 group-hover:text-white">No-Code CMS Content Studio</span>
                  <Terminal className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} DEVS REC. Code. Coffee. Repeat ...
          </p>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Rajalakshmi Engineering College</span>
            <span>·</span>
            <span className="text-white font-medium">With DEVS, Everything Is Easier</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
