"use client";
import React, { useEffect, useRef } from "react";

interface SpotlightCursorProps {
  size?: number;
  opacity?: number;
  color?: string;
}

const SpotlightCursor: React.FC<SpotlightCursorProps> = ({
  size = 400,
  opacity = 0.5,
  color = "rgba(251, 191, 36, 0.1)", // Amber glow to match your theme
}) => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const x = e.clientX - size / 2;
        const y = e.clientY - size / 2;

        spotlightRef.current.style.transform = `translate(${x}px, ${y}px)`;
        spotlightRef.current.style.opacity = opacity.toString();
      }
    };

    // Show spotlight immediately
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = opacity.toString();
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size, opacity]);
  return (
    <div
      ref={spotlightRef}
      className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color} 0%, rgba(251, 191, 36, 0.05) 40%, transparent 70%)`,
        borderRadius: "50%",
        opacity: opacity,
      }}
    />
  );
};

export default SpotlightCursor;
