"use client";

import React, { useEffect, useState, useRef } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  className = "",
  animateBy = "words",
  direction = "bottom",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {elements.map((element, index) => (
        <span
          key={index}
          style={{
            transition: `all 0.6s cubic-bezier(0.2, 0.65, 0.3, 0.9) ${index * delay}ms`,
            opacity: inView ? 1 : 0,
            filter: inView ? "blur(0px)" : "blur(8px)",
            transform: inView
              ? "translateY(0)"
              : direction === "top"
              ? "translateY(-16px)"
              : "translateY(16px)",
          }}
          className="inline-block"
        >
          {element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
};

export default BlurText;
