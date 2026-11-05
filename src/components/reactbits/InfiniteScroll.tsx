"use client";

import React from "react";

interface InfiniteScrollProps {
  items: React.ReactNode[];
  speed?: number; // duration in seconds
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  speed = 25,
  direction = "left",
  pauseOnHover = true,
  className = "",
}) => {
  return (
    <div
      className={`group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-6 py-3 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, idx) => (
          <div key={`item-1-${idx}`} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-6 py-3 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, idx) => (
          <div key={`item-2-${idx}`} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
