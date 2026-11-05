"use client";

import React, { useState } from "react";
import { useCMSData } from "@/data/cms-store";
import { ClubEvent } from "@/data/club-data";
import RSVPModal from "@/components/rsvp-modal";
import ShinyText from "@/components/reactbits/ShinyText";
import DecryptedText from "@/components/reactbits/DecryptedText";
import { Calendar, MapPin, Clock, Ticket, Search, Sparkles } from "lucide-react";

export default function EventsPage() {
  const { data } = useCMSData();
  const events = data.events;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);

  const categories = ["All", "Hackathon", "Workshop", "Bootcamp"];

  const filteredEvents = events.filter((e) => {
    const matchesCategory =
      selectedCategory === "All" || e.category === selectedCategory;
    const matchesSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>DEVATHON &amp; TECHNICAL SESSIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            <DecryptedText text="Club Events &amp; Workshops" speed={30} className="text-white" encryptedClassName="text-zinc-400 font-mono" />
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            From 36-hour national hackathons to intense hands-on bootcamps. RSVP directly to get your digital entry pass.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-white/10 w-full sm:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Events Grid (Monochrome) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const seatsRemaining = event.seatsTotal - event.seatsFilled;
            const progress = (event.seatsFilled / event.seatsTotal) * 100;

            return (
              <div
                key={event.id}
                className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 sm:p-7 lift hover:border-white/25 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md font-semibold border bg-white/[0.08] text-white border-white/20">
                      {event.category}
                    </span>

                    {event.featured && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.1] text-white border border-white/20 font-bold">
                        <ShinyText text="FLAGSHIP" speed={3} className="text-white font-bold" />
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-bold text-white mb-3">
                    {event.title}
                  </h2>

                  <div className="space-y-2 mb-5 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <div>
                  {/* Capacity Bar */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
                      <span>Capacity Status</span>
                      <span className="text-zinc-200">
                        {event.seatsFilled} / {event.seatsTotal} seats
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-zinc-500 via-white to-zinc-400"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* RSVP button (Monochrome) */}
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-mono font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Get RSVP Pass ({seatsRemaining} left)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16 text-zinc-500 font-mono text-xs">
            No events match your current filter. Try resetting search.
          </div>
        )}
      </div>

      {selectedEvent && (
        <RSVPModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
