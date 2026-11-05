"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-[length:200%_100%] ${
        !disabled ? "animate-shine" : ""
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0.1) 80%)",
        animation: !disabled ? `shine ${animationDuration} linear infinite` : "none",
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
