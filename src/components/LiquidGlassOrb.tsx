/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LiquidGlassOrbProps {
  glowColor: string;
  accentGradient: string;
  accentColor: string;
  className?: string;
}

export default function LiquidGlassOrb({
  glowColor,
  accentGradient,
  accentColor,
  className = "",
}: LiquidGlassOrbProps) {
  return (
    <div
      className={`relative flex items-center justify-center w-[20px] h-[20px] shrink-0 select-none group/orb ${className}`}
    >
      {/* 1. Ambient fluid glow aura */}
      <div
        className="absolute inset-0 rounded-full blur-[6px] pointer-events-none transition-all duration-300 group-hover/orb:blur-[9px] group-hover/orb:opacity-100"
        style={{
          background: glowColor,
          animation: "liquid-orb-glow 4s ease-in-out infinite",
        }}
      />

      {/* 2. Outer Liquid Glass Shell with organic fluid morphing */}
      <div
        className="relative w-full h-full flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 cursor-default"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: `inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.65), inset 0 -1.5px 2.5px 0 rgba(0, 0, 0, 0.7), inset 0 0 4px 0 ${accentColor}, 0 2px 6px -1px rgba(0, 0, 0, 0.6)`,
          animation: "liquid-orb-morph 7s ease-in-out infinite",
          background:
            "radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 45%, rgba(0, 0, 0, 0.6) 100%)",
        }}
      >
        {/* 3. Swirling Fluid Liquid Core */}
        <div
          className="absolute -inset-2 pointer-events-none opacity-80 mix-blend-screen"
          style={{
            background: accentGradient,
            animation: "liquid-orb-fluid-spin 5s linear infinite",
          }}
        />

        {/* 4. Internal Caustic Refraction Node */}
        <div
          className="absolute w-[8px] h-[8px] rounded-full pointer-events-none blur-[1px] opacity-70"
          style={{
            background: accentColor,
            transform: "translate(1px, 1px)",
          }}
        />

        {/* 5. Top Curved Specular Glare (Convex Glass Light Arc) */}
        <div
          className="absolute top-[1.5px] left-[2.5px] w-[10px] h-[5px] rounded-full pointer-events-none opacity-90"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0) 75%)",
            transform: "rotate(-28deg)",
          }}
        />

        {/* 6. Bottom Rim Light Reflection */}
        <div
          className="absolute bottom-[1px] right-[2px] w-[7px] h-[3px] rounded-full pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 70%)",
            transform: "rotate(-20deg)",
          }}
        />

        {/* 7. Periodic Shimmer Gleam */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%)",
            animation: "liquid-shimmer-sweep 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          }}
        />
      </div>
    </div>
  );
}
