"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCMSData } from "@/data/cms-store";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ShinyText from "@/components/reactbits/ShinyText";
import { BookOpen, Search, Clock, ArrowRight, Sparkles, User } from "lucide-react";

export default function BlogHubPage() {
  const { data } = useCMSData();
  const blogs = data.blogs || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(blogs.flatMap((b) => b.tags)))];

  const filteredBlogs = blogs.filter((b) => {
    const matchesTag = selectedTag === "All" || b.tags.includes(selectedTag);
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredBlog = blogs.find((b) => b.featured) || blogs[0];

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-black text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-zinc-300" />
            <span>DISPATCHES &amp; ESSAYS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            <DecryptedText text="Engineering Blogs" speed={30} className="text-white" encryptedClassName="text-zinc-400 font-mono" />
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Technical architectural blueprints, deep dives into AI and systems, and field notes written by DEVS REC organizers, mentors, and student creators.
          </p>
        </div>

        {/* Featured Post Spotlight (if any) */}
        {featuredBlog && selectedTag === "All" && !searchQuery && (
          <div className="mb-14">
            <Link
              href={`/blog/${featuredBlog.slug}`}
              className="group block rounded-3xl border border-white/15 bg-zinc-950 p-7 sm:p-10 hover:border-white/30 transition-all shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-md bg-white text-black font-bold">
                  FEATURED ARTICLE
                </span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-400">{featuredBlog.date}</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featuredBlog.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 group-hover:text-zinc-200 transition-colors">
                {featuredBlog.title}
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl mb-8">
                {featuredBlog.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-3">
                  {featuredBlog.authorAvatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={featuredBlog.authorAvatar}
                      alt={featuredBlog.author}
                      className="w-10 h-10 rounded-full object-cover grayscale border border-white/20"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center">
                      <User className="w-4 h-4 text-zinc-400" />
                    </div>
                  )}
                  <div>
                    <span className="block text-sm font-bold text-white">
                      {featuredBlog.author}
                    </span>
                    <span className="block text-xs font-mono text-zinc-500">
                      {featuredBlog.authorRole}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-white/10 w-full sm:w-auto overflow-x-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                  selectedTag === tag
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 sm:p-7 lift hover:border-white/25 transition-all shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5 text-xs font-mono text-zinc-500">
                  <div className="flex flex-wrap gap-1.5">
                    {blog.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/10 text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] shrink-0">{blog.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-zinc-200 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {blog.authorAvatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blog.authorAvatar}
                      alt={blog.author}
                      className="w-6 h-6 rounded-full object-cover grayscale border border-white/15"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center">
                      <User className="w-3 h-3 text-zinc-400" />
                    </div>
                  )}
                  <span className="text-xs text-zinc-300 font-medium truncate max-w-[120px]">
                    {blog.author}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-white group-hover:translate-x-1 transition-transform">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20 text-zinc-500 font-mono text-xs">
            No articles match your query. You can add one via the CMS Studio.
          </div>
        )}
      </div>
    </div>
  );
}
