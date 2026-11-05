"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ClubEvent } from "@/data/club-data";
import { X, CheckCircle, Ticket, Calendar, MapPin, QrCode } from "lucide-react";
import ShinyText from "./reactbits/ShinyText";

interface RSVPModalProps {
  event: ClubEvent | null;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ event, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [dept, setDept] = useState("CSE");
  const [ticketIssued, setTicketIssued] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const generatedPass = `DEVS-${event.slug.toUpperCase().slice(0, 5)}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketIssued(generatedPass);
      setLoading(false);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#34d399", "#06b6d4", "#ffffff"],
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-zinc-950 p-6 sm:p-8 shadow-2xl text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!ticketIssued ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium mb-3">
              <Ticket className="w-3.5 h-3.5" />
              <span>RSVP PASS REGISTRATION</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {event.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300 mb-6 pb-4 border-b border-white/[0.08]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {event.venue}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    College Email / Official Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rollno@rajalakshmi.edu.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="211701xxx"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                  Engineering Department
                </label>
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="CSE">Computer Science &amp; Engineering</option>
                  <option value="IT">Information Technology</option>
                  <option value="AI-DS">Artificial Intelligence &amp; Data Science</option>
                  <option value="CS-BS">Computer Science &amp; Business Systems</option>
                  <option value="ECE">Electronics &amp; Communication</option>
                  <option value="MECH">Mechanical / Mechatronics</option>
                  <option value="OTHER">Other REC Branch</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-sm transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Generating Digital Pass..." : "Confirm RSVP & Generate Pass"}
              </button>
            </form>
          </div>
        ) : (
          /* Issued Digital Pass View */
          <div className="text-center py-2">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Registration Confirmed!
            </h3>
            <p className="text-xs text-zinc-300 mb-6">
              Your attendee pass is ready. Please present this at the venue entrance.
            </p>

            {/* Digital Badge Card */}
            <div className="p-5 rounded-2xl border border-dashed border-emerald-500/40 bg-zinc-900/90 text-left font-mono space-y-3 mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[11px] text-zinc-400 uppercase tracking-widest">
                  DEVS REC PASS
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  {ticketIssued}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-zinc-300 block uppercase">
                  Attendee
                </span>
                <span className="text-sm font-bold text-white block">
                  {name} ({dept})
                </span>
                <span className="text-xs text-zinc-300 block">
                  {rollNo} · {email}
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-300 block uppercase">
                    Event
                  </span>
                  <span className="text-xs text-white font-medium">
                    {event.title}
                  </span>
                </div>
                <QrCode className="w-9 h-9 text-emerald-400" />
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-mono text-white transition-all cursor-pointer"
            >
              Done &amp; Close Pass
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RSVPModal;
