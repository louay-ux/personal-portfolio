/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LiquidGlassEmojiProps {
  emoji: string;
  glowColor: string;
  accentGradient: string;
  accentColor: string;
  className?: string;
}

export default function LiquidGlassEmoji({
  emoji,
  glowColor,
  accentGradient,
  accentColor,
  className = "",
}: LiquidGlassEmojiProps) {
  return (
    <div
      className={`relative flex items-center justify-center w-[28px] h-[28px] shrink-0 select-none group/glass ${className}`}
    >
      {/* 1. Ambient liquid glow behind the glass */}
      <div
        className="absolute inset-0 rounded-full blur-[7px] pointer-events-none transition-all duration-300 group-hover/glass:blur-[9px]"
        style={{
          background: glowColor,
          animation: "liquid-glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* 2. Outer Liquid Glass Shell with morphing organic physics */}
      <div
        className="relative w-full h-full flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 cursor-default"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.24)",
          boxShadow: `inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.5), inset 0 -2px 3px 0 rgba(0, 0, 0, 0.6), inset 0 -0.5px 1.5px 0 ${accentColor}, 0 3px 8px -2px rgba(0, 0, 0, 0.5)`,
          animation: "liquid-glass-morph 8s ease-in-out infinite",
          background:
            "radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 45%, rgba(10, 10, 10, 0.65) 100%)",
        }}
      >
        {/* 3. Internal Fluid Liquid Motion Layer */}
        <div
          className="absolute -inset-1 pointer-events-none opacity-60 mix-blend-screen"
          style={{
            background: accentGradient,
            animation: "liquid-wave 6s linear infinite",
          }}
        />

        {/* 4. Top Curved Specular Glare (Realistic Glass Highlight) */}
        <div
          className="absolute top-[2px] left-[3px] w-[14px] h-[7px] rounded-full pointer-events-none opacity-85"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 45%, rgba(255, 255, 255, 0) 75%)",
            transform: "rotate(-25deg)",
          }}
        />

        {/* 5. Periodic Shimmer Sweep */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)",
            animation: "liquid-shimmer-sweep 5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          }}
        />

        {/* 6. Centered Floating Emoji */}
        <span
          className="relative z-10 text-[13px] leading-none select-none transition-transform duration-300 group-hover/glass:scale-110"
          style={{
            animation: "liquid-emoji-float 3.2s ease-in-out infinite",
            filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.7))",
          }}
        >
          {emoji}
        </span>
      </div>
    </div>
  );
}
