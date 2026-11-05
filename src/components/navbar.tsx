"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Calendar, Code2, Users, Sparkles, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import ShinyText from "./reactbits/ShinyText";
import DecryptedText from "./reactbits/DecryptedText";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", href: "/#domains", icon: Terminal },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Projects", href: "/projects", icon: Code2 },
    { name: "P2P Curriculum", href: "https://learn.devsrec.com", external: true, icon: Sparkles },
    { name: "Team", href: "/team", icon: Users },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono font-bold text-white transition-all group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              <span className="text-emerald-400">&gt;</span>_
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5 font-sans">
                <DecryptedText text="DEVS REC" speed={25} className="text-white" encryptedClassName="text-emerald-400 font-mono" />
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  FLAGSHIP
                </span>
              </span>
              <span className="text-[11px] font-mono text-zinc-300 tracking-wider">
                RAJALAKSHMI ENGG COLLEGE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-950/70 border border-white/[0.08] backdrop-blur-md px-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    isActive
                      ? "bg-white/[0.12] text-white font-medium border border-white/15"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA & Admin CMS Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/admin"
              className="px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
              title="No-Code CMS Content Studio"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
              <span>CMS Studio</span>
            </Link>

            <Link
              href="/apply"
              className="relative group overflow-hidden px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-bold transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] active:scale-95"
            >
              <ShinyText text="Join DEVS" speed={3} className="text-black font-bold" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.06] border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl text-sm font-mono text-zinc-300 hover:text-white hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{link.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-2.5 rounded-xl text-sm font-mono text-zinc-300 hover:text-white hover:bg-white/[0.06]"
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-center text-zinc-300"
            >
              CMS Studio (No-Code Editor)
            </Link>
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-emerald-500 text-black text-xs font-mono font-bold text-center"
            >
              Join DEVS / Apply
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
