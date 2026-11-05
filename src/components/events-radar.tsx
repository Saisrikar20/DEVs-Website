"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCMSData } from "@/data/cms-store";
import { ClubEvent } from "@/data/club-data";
import RSVPModal from "./rsvp-modal";
import ShinyText from "./reactbits/ShinyText";
import { Calendar, MapPin, Users, Clock, Ticket, ArrowRight, Sparkles } from "lucide-react";

export const EventsRadar = () => {
  const { data } = useCMSData();
  const events = data.events;
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);

  return (
    <section id="events" className="relative py-16 sm:py-24 border-b border-white/[0.08] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>EVENTS &amp; HACKATHONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Upcoming Event Radar
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 max-w-lg">
              Level up your practical skills. Secure your passes for upcoming campus hackathons and engineering bootcamps.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all self-start sm:self-auto"
          >
            <span>Full Calendar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {events.map((event) => {
            const seatsRemaining = event.seatsTotal - event.seatsFilled;
            const progress = (event.seatsFilled / event.seatsTotal) * 100;

            return (
              <div
                key={event.id}
                className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-6 sm:p-7 lift hover:border-white/20 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md font-semibold border ${
                        event.category === "Hackathon"
                          ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                          : event.category === "Workshop"
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      }`}
                    >
                      {event.category}
                    </span>

                    {event.featured && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                        <ShinyText text="FLAGSHIP" speed={3} className="text-emerald-400 font-bold" />
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-5 text-xs font-mono text-zinc-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
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
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full py-2.5 rounded-xl bg-white/[0.08] hover:bg-emerald-500 hover:text-black text-white text-xs font-mono font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-white/10 hover:border-emerald-500"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Get RSVP Pass ({seatsRemaining} left)</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <RSVPModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
};

export default EventsRadar;
