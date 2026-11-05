"use client";

import React, { useState } from "react";
import { useCMSData, CMSData } from "@/data/cms-store";
import { ClubEvent, ClubProject, TeamMember } from "@/data/club-data";
import {
  ShieldCheck,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  Calendar,
  Code2,
  Users,
  Bell,
  HelpCircle,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function AdminCMSPage() {
  const { data, updateData, resetData } = useCMSData();
  const [activeTab, setActiveTab] = useState<"general" | "events" | "projects" | "team">("general");
  const [saveNotification, setSaveNotification] = useState(false);

  // Local state for editing
  const [announcement, setAnnouncement] = useState(data.announcement);
  const [stats, setStats] = useState(data.stats);
  const [events, setEvents] = useState<ClubEvent[]>(data.events);
  const [projects, setProjects] = useState<ClubProject[]>(data.projects);
  const [team, setTeam] = useState<TeamMember[]>(data.team);

  // Sync when data loads
  React.useEffect(() => {
    setAnnouncement(data.announcement);
    setStats(data.stats);
    setEvents(data.events);
    setProjects(data.projects);
    setTeam(data.team);
  }, [data]);

  const handleSave = () => {
    const updated: CMSData = {
      announcement,
      stats,
      events,
      projects,
      team,
    };
    updateData(updated);
    setSaveNotification(true);
    setTimeout(() => setSaveNotification(false), 2500);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to restore the default club content?")) {
      resetData();
    }
  };

  // Event handlers
  const handleAddEvent = () => {
    const newEvent: ClubEvent = {
      id: `event-${Date.now()}`,
      title: "New Technical Workshop",
      category: "Workshop",
      date: "May 15, 2025",
      time: "02:00 PM - 05:00 PM",
      venue: "CS Seminar Hall",
      description: "Hands-on session on advanced software systems.",
      registrationOpen: true,
      seatsTotal: 100,
      seatsFilled: 0,
      slug: `new-workshop-${Date.now()}`,
    };
    setEvents([newEvent, ...events]);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  // Project handlers
  const handleAddProject = () => {
    const newProject: ClubProject = {
      id: `project-${Date.now()}`,
      title: "New Student Platform",
      summary: "Innovative solution built by DEVS REC developers.",
      domain: "Full Stack",
      liveUrl: "https://example.com",
      tags: ["React", "TypeScript", "Node.js"],
      featured: false,
      badge: "New Release",
    };
    setProjects([newProject, ...projects]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-black text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Jargon Educational Alert for the user */}
        <div className="mb-8 p-5 rounded-2xl border border-white/20 bg-zinc-950 text-xs font-mono text-zinc-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">
                What is this page? (The CMS Explained)
              </span>
              <span className="text-zinc-400">
                This is your <strong>CMS (Content Management System)</strong>. Non-technical club leads can edit announcements, tweak live stats, add upcoming workshops, and update member bios right here. Every change updates the website immediately without touching code or Git!
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>Publish Changes</span>
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Reset to defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Save confirmation toast */}
        {saveNotification && (
          <div className="mb-6 p-3 rounded-xl bg-white/10 border border-white/25 text-white font-mono text-xs flex items-center gap-2 animate-bounce">
            <ShieldCheck className="w-4 h-4" />
            <span>Success: CMS content updated live across all website pages!</span>
          </div>
        )}

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
              <span>CONTENT STUDIO &amp; ADMIN PANEL</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              DEVS REC Content Studio
            </h1>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-zinc-950 border border-white/10 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("general")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "general"
                ? "bg-white text-black font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Announcement &amp; Stats</span>
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "events"
                ? "bg-white text-black font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Events ({events.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === "projects"
                ? "bg-white text-black font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Projects ({projects.length})</span>
          </button>
        </div>

        {/* TAB 1: GENERAL & STATS */}
        {activeTab === "general" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950 space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2 font-mono">
                <Bell className="w-4 h-4 text-zinc-300" />
                <span>Top Banner Announcement</span>
              </h2>
              <p className="text-xs text-zinc-400">
                This notice floats above the website navigation on every page.
              </p>
              <input
                type="text"
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white focus:outline-none focus:border-white font-mono transition-colors"
              />
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950 space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2 font-mono">
                <Sparkles className="w-4 h-4 text-zinc-300" />
                <span>Live Proof-of-Work Counters</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Students Impacted
                  </label>
                  <input
                    type="number"
                    value={stats.members}
                    onChange={(e) =>
                      setStats({ ...stats, members: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white font-mono focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Hackathons Hosted
                  </label>
                  <input
                    type="number"
                    value={stats.hackathons}
                    onChange={(e) =>
                      setStats({ ...stats, hackathons: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white font-mono focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Active Platforms
                  </label>
                  <input
                    type="number"
                    value={stats.platforms}
                    onChange={(e) =>
                      setStats({ ...stats, platforms: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white font-mono focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Prize Money ($)
                  </label>
                  <input
                    type="number"
                    value={stats.prizeMoney}
                    onChange={(e) =>
                      setStats({ ...stats, prizeMoney: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white font-mono focus:outline-none focus:border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EVENTS */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Manage upcoming Devathons, workshops, and bootcamps.
              </span>
              <button
                onClick={handleAddEvent}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.08] text-white border border-white/20 hover:bg-white hover:text-black text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Event</span>
              </button>
            </div>

            <div className="space-y-4">
              {events.map((evt, idx) => (
                <div
                  key={evt.id}
                  className="p-5 rounded-2xl border border-white/10 bg-zinc-950 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white font-bold">
                      Event #{idx + 1}
                    </span>
                    <button
                      onClick={() => handleDeleteEvent(evt.id)}
                      className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      title="Delete event"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        Event Title
                      </label>
                      <input
                        type="text"
                        value={evt.title}
                        onChange={(e) => {
                          const copy = [...events];
                          copy[idx].title = e.target.value;
                          setEvents(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        Category
                      </label>
                      <select
                        value={evt.category}
                        onChange={(e) => {
                          const copy = [...events];
                          copy[idx].category = e.target.value as any;
                          setEvents(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                      >
                        <option value="Hackathon">Hackathon</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Bootcamp">Bootcamp</option>
                        <option value="Tech Talk">Tech Talk</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        Date
                      </label>
                      <input
                        type="text"
                        value={evt.date}
                        onChange={(e) => {
                          const copy = [...events];
                          copy[idx].date = e.target.value;
                          setEvents(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        Time
                      </label>
                      <input
                        type="text"
                        value={evt.time}
                        onChange={(e) => {
                          const copy = [...events];
                          copy[idx].time = e.target.value;
                          setEvents(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        Venue
                      </label>
                      <input
                        type="text"
                        value={evt.venue}
                        onChange={(e) => {
                          const copy = [...events];
                          copy[idx].venue = e.target.value;
                          setEvents(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={evt.description}
                      onChange={(e) => {
                        const copy = [...events];
                        copy[idx].description = e.target.value;
                        setEvents(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PROJECTS */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Showcase student platforms, hackathon submissions, and 3D games.
              </span>
              <button
                onClick={handleAddProject}
                className="px-3.5 py-1.5 rounded-xl bg-white/[0.08] text-white border border-white/20 hover:bg-white hover:text-black text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl border border-white/10 bg-zinc-950 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white font-bold">
                      Project #{idx + 1}
                    </span>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      title="Delete project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const copy = [...projects];
                          copy[idx].title = e.target.value;
                          setProjects(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                        Domain
                      </label>
                      <input
                        type="text"
                        value={proj.domain}
                        onChange={(e) => {
                          const copy = [...projects];
                          copy[idx].domain = e.target.value;
                          setProjects(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      Live URL (optional)
                    </label>
                    <input
                      type="url"
                      value={proj.liveUrl || ""}
                      onChange={(e) => {
                        const copy = [...projects];
                        copy[idx].liveUrl = e.target.value;
                        setProjects(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                      Summary
                    </label>
                    <textarea
                      rows={2}
                      value={proj.summary}
                      onChange={(e) => {
                        const copy = [...projects];
                        copy[idx].summary = e.target.value;
                        setProjects(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Save Action */}
        <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-400">
            Press &quot;Publish Changes&quot; to push all modifications to the live site.
          </span>
          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>Publish Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
