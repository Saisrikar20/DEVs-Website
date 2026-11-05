"use client";

import React, { useState } from "react";

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

export const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "DEVS REC Technical Community",
  blurAmount = 4,
  borderColor = "#ffffff",
  glowColor = "rgba(255, 255, 255, 0.35)",
  className = "",
}) => {
  const words = sentence.split(" ");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className={`relative inline-flex flex-wrap items-center gap-3 ${className}`}>
      {words.map((word, index) => {
        const isActive = activeIndex === index;
        return (
          <span
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className="relative cursor-pointer px-2.5 py-1 text-inherit transition-all duration-300"
            style={{
              filter: activeIndex !== null && !isActive ? `blur(${blurAmount}px)` : "none",
              opacity: activeIndex !== null && !isActive ? 0.6 : 1,
            }}
          >
            {word}
            {isActive && (
              <span
                className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300"
                style={{
                  border: `1.5px solid ${borderColor}`,
                  boxShadow: `0 0 16px ${glowColor}`,
                }}
              />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default TrueFocus;

