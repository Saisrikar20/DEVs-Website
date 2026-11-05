"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { useCMSData } from "@/data/cms-store";

export const AnnouncementBar = () => {
  const { data } = useCMSData();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !data.announcement) return null;

  return (
    <div className="relative z-50 bg-zinc-950 border-b border-white/10 py-2 px-4 text-xs font-mono text-zinc-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-ping shrink-0" />
          <span className="truncate text-zinc-300">
            {data.announcement}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/events"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-white hover:underline transition-all"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 rounded hover:bg-white/10 text-zinc-500 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
