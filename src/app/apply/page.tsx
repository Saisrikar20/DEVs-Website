"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ShinyText from "@/components/reactbits/ShinyText";
import { CheckCircle2, Send, Terminal, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rollNumber: "",
    department: "CSE",
    yearOfStudy: "2nd Year",
    primaryDomain: "Full Stack & Web",
    githubUrl: "",
    portfolioUrl: "",
    whyJoin: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const generatedId = `DEVS-APP-${Math.floor(10000 + Math.random() * 90000)}`;
      setAppId(generatedId);
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#34d399", "#06b6d4", "#a855f7"],
      });
    }, 700);
  };

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-10 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>ANNUAL RECRUITMENT CYCLE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                <DecryptedText text="Join DEVS REC" speed={30} className="text-white" encryptedClassName="text-emerald-400 font-mono" />
              </h1>
              <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                Step into the arena. Fill out the application form below. We review every single application and evaluate candidates on passion, curiosity, and proof of work.
              </p>
            </div>

            {/* Application Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 shadow-2xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sanjay Raman"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    REC Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rollno@rajalakshmi.edu.in"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    Roll Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="221701045"
                    value={formData.rollNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, rollNumber: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="CSE">Computer Science &amp; Engg</option>
                    <option value="IT">Information Tech</option>
                    <option value="AI-DS">AI &amp; Data Science</option>
                    <option value="CS-BS">CS &amp; Business Systems</option>
                    <option value="ECE">Electronics &amp; Comm</option>
                    <option value="OTHER">Other Branch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    Year of Study
                  </label>
                  <select
                    value={formData.yearOfStudy}
                    onChange={(e) =>
                      setFormData({ ...formData, yearOfStudy: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="1st Year">1st Year (Fresher)</option>
                    <option value="2nd Year">2nd Year (Sophomore)</option>
                    <option value="3rd Year">3rd Year (Junior)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-2">
                  Primary Domain of Interest *
                </label>
                <select
                  value={formData.primaryDomain}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryDomain: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="Full Stack & Web">Full Stack &amp; Web Engineering</option>
                  <option value="AI / ML & Agents">AI / Machine Learning &amp; Agents</option>
                  <option value="Cloud & DevOps">Cloud Infrastructure &amp; DevOps</option>
                  <option value="Game Dev & Spatial 3D">Spatial 3D &amp; Game Development</option>
                  <option value="Mobile Engineering">Mobile Engineering (Flutter/Native)</option>
                  <option value="UI/UX & Product Design">UI / UX &amp; Product Design</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    GitHub Profile Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/yourhandle"
                    value={formData.githubUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, githubUrl: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">
                    Portfolio / LinkedIn / Project Demo
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/... or website"
                    value={formData.portfolioUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, portfolioUrl: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-2">
                  What makes you want to join DEVS REC? (Proof of work, passion, or projects built) *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about a technical challenge you tackled, a project you built, or why you want to collaborate with other builders..."
                  value={formData.whyJoin}
                  onChange={(e) =>
                    setFormData({ ...formData, whyJoin: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-sm transition-all shadow-[0_0_25px_rgba(52,211,153,0.3)] active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Transmitting Application..." : "Submit Recruitment Application"}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="text-center py-12 p-8 rounded-3xl border border-emerald-500/30 bg-zinc-950 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-4">
              <span>APPLICATION LOGGED</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Application Received, {formData.fullName}!
            </h2>

            <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6 leading-relaxed">
              Your candidate profile has been recorded in the DEVS REC applicant stream. Keep an eye on your email for interview invitations and code challenge links.
            </p>

            <div className="max-w-md mx-auto p-4 rounded-2xl bg-zinc-900/90 border border-white/10 font-mono text-left text-xs space-y-2 mb-8">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Tracking ID:</span>
                <span className="text-emerald-400 font-bold">{appId}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Domain Preference:</span>
                <span className="text-white">{formData.primaryDomain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Next Step:</span>
                <span className="text-cyan-400">Domain Lead Evaluation</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  rollNumber: "",
                  department: "CSE",
                  yearOfStudy: "2nd Year",
                  primaryDomain: "Full Stack & Web",
                  githubUrl: "",
                  portfolioUrl: "",
                  whyJoin: "",
                });
              }}
              className="px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-mono text-white transition-all cursor-pointer"
            >
              Submit Another Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
