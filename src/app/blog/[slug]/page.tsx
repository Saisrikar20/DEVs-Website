"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCMSData } from "@/data/cms-store";
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles, BookOpen } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { data } = useCMSData();
  const blogs = data.blogs || [];

  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-black">
        <h1 className="text-2xl font-bold text-white mb-2">Article Not Found</h1>
        <p className="text-xs text-zinc-400 mb-6">
          The requested article could not be located or has been archived.
        </p>
        <Link
          href="/blog"
          className="px-5 py-2 rounded-xl bg-white text-black font-mono font-bold text-xs"
        >
          Return to Blog Hub
        </Link>
      </div>
    );
  }

  // Format content paragraphs and markdown-style headers
  const renderFormattedContent = (content: string) => {
    return content.split("\n\n").map((block, idx) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").map((line) => line.replace(/^- /, ""));
        return (
          <ul key={idx} className="my-4 space-y-2 list-none">
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-relaxed">
                <span className="text-white font-bold select-none">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={idx} className="text-sm sm:text-base text-zinc-300 leading-relaxed my-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <article className="min-h-screen py-12 sm:py-20 bg-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Post Metadata Header */}
        <div className="space-y-4 pb-8 border-b border-white/[0.1] mb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {post.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-white/[0.08] text-white border border-white/15"
              >
                {t}
              </span>
            ))}
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-zinc-500" />
              {post.date}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-zinc-500" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Capsule */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              {post.authorAvatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-11 h-11 rounded-full object-cover grayscale border border-white/20"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
              )}
              <div>
                <span className="block text-sm font-bold text-white">
                  {post.author}
                </span>
                <span className="block text-xs font-mono text-zinc-400">
                  {post.authorRole}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Article link copied to clipboard!");
                }
              }}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-400 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              title="Copy share link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none font-sans">
          {renderFormattedContent(post.content)}
        </div>

        {/* Footer Next Steps */}
        <div className="mt-16 pt-8 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>More Articles</span>
          </Link>

          <Link
            href="/apply"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs shadow-md transition-all"
          >
            Join DEVS REC Community
          </Link>
        </div>
      </div>
    </article>
  );
}
