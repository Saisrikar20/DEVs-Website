"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Calendar, Code2, Users, BookOpen, Menu, X, ShieldCheck } from "lucide-react";

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
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Team", href: "/team", icon: Users },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/[0.1] py-3 shadow-2xl shadow-black"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Clean Official Logo only */}
          <Link href="/" className="flex items-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/devs-logo.png"
              alt="DEVS"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]"
            />
          </Link>

          {/* Desktop Nav Links (Clean Monochrome Swiss Style) */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-950 border border-white/[0.1] backdrop-blur-md px-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    isActive
                      ? "bg-white text-black font-bold shadow-md"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/admin"
              className="px-3 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
              title="No-Code CMS Content Studio"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>CMS Studio</span>
            </Link>

            <Link
              href="/apply"
              className="px-4 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:scale-95"
            >
              <span>Join DEVS</span>
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
            return (
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
              className="p-2.5 rounded-xl bg-white text-black text-xs font-mono font-bold text-center"
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
