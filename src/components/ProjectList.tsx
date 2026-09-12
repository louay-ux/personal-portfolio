/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight } from "lucide-react";
import LiquidGlassOrb from "./LiquidGlassOrb";

interface ProjectRow {
  name: string;
  category?: string;
  description: string;
  year: string;
  tag?: string;
  url?: string;
  glowColor: string;
  accentGradient: string;
  accentColor: string;
}

const SPEC_PROJECTS: ProjectRow[] = [
  {
    name: "GridForecast AI",
    category: "AI / MACHINE LEARNING",
    description: "ML load-forecasting platform built during a capstone internship at SONELGAZ, Algeria's national electricity company. Random Forest trained on ~106,000 hourly records — 98.65% accuracy, in a real production environment.",
    year: "2025 – 2026",
    url: "https://electricity-forecasting-app.vercel.app/",
    glowColor: "rgba(59, 130, 246, 0.45)",
    accentGradient: "radial-gradient(circle at 40% 40%, rgba(56, 189, 248, 0.55) 0%, rgba(37, 99, 235, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(59, 130, 246, 0.5)"
  },
  {
    name: "Clinicos",
    category: "HEALTH-TECH",
    description: "Algerian health-tech platform. Role-based clinical dashboard with Gantt-style scheduling, real-time queues, and a trust-scoring system that reduces appointment fraud. Bilingual RTL/LTR.",
    year: "2026",
    glowColor: "rgba(16, 185, 129, 0.45)",
    accentGradient: "radial-gradient(circle at 40% 40%, rgba(52, 211, 153, 0.55) 0%, rgba(13, 148, 136, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(16, 185, 129, 0.5)"
  },
  {
    name: "Data Warehouse & BI",
    category: "DATA ENGINEERING",
    description: "Self-directed data engineering project. SQL Server warehouse using Medallion architecture (Bronze/Silver/Gold), star-schema modeling, and T-SQL ETL — with Power BI and Tableau dashboards built on top using DAX and LOD expressions.",
    year: "2026",
    glowColor: "rgba(139, 92, 246, 0.45)",
    accentGradient: "radial-gradient(circle at 40% 40%, rgba(167, 139, 250, 0.55) 0%, rgba(124, 58, 237, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(139, 92, 246, 0.5)"
  },
  {
    name: "CosmeticaDZ",
    category: "E-COMMERCE",
    description: "Bilingual e-commerce marketplace for the Algerian market. Solo, concept to launch — regional payment flow by Wilaya/Baladia, admin dashboard tracking orders, stock, and margins.",
    year: "2025",
    url: "https://cosmeticadz.netlify.app/",
    glowColor: "rgba(244, 63, 94, 0.45)",
    accentGradient: "radial-gradient(circle at 40% 40%, rgba(251, 113, 133, 0.55) 0%, rgba(219, 39, 119, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(244, 63, 94, 0.5)"
  }
];

export default function ProjectList() {
  return (
    <div id="projects-section" className="flex flex-col">
      {/* Section label: 12px, #666666, uppercase, letter-spacing 0.08em */}
      <span className="text-[12px] font-sans text-[#666666] uppercase tracking-[0.08em] select-none">
        Work
      </span>

      {/* List of projects as simple rows — with 24px gap from the label */}
      <div className="flex flex-col mt-6 border-t border-[#222222]">
        {SPEC_PROJECTS.map((project, idx) => (
          <div
            id={`project-row-${idx}`}
            key={project.name}
            className="group flex justify-between items-start py-5 border-b border-[#222222] transition-colors duration-200 hover:bg-[#141414] px-3 -mx-3"
          >
            {/* Left: project category, liquid glass orb + name, and description */}
            <div className="flex flex-col pr-4 flex-1">
              {project.category && (
                <span className="text-[11px] font-sans text-[#666666] uppercase tracking-[0.06em] mb-1.5 select-none">
                  {project.category}
                </span>
              )}

              <div className="flex items-center gap-2.5 my-0.5">
                {/* Pure Abstract Liquid Glass Orb */}
                <LiquidGlassOrb
                  glowColor={project.glowColor}
                  accentGradient={project.accentGradient}
                  accentColor={project.accentColor}
                />

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-[#E8E8E8] transition-colors duration-200 hover:text-[#3B82F6] inline-flex items-center gap-1.5 group/title"
                  >
                    <span>{project.name}</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-[#666666] transition-all duration-200 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 group-hover/title:text-[#3B82F6] shrink-0"
                      strokeWidth={2}
                    />
                  </a>
                ) : (
                  <span className="text-[14px] font-medium text-[#E8E8E8] transition-colors duration-200 group-hover:text-[#3B82F6]">
                    {project.name}
                  </span>
                )}
              </div>

              <span className="text-[14px] text-[#666666] font-normal leading-[1.5] mt-1.5">
                {project.description}
              </span>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-[#3B82F6] hover:underline mt-2.5 w-fit font-mono group/link"
                >
                  <span>{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                  <ArrowUpRight
                    className="w-3 h-3 text-[#3B82F6] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 shrink-0"
                    strokeWidth={2}
                  />
                </a>
              )}
            </div>

            {/* Right: year right-aligned & optional tag */}
            <div className="flex items-center gap-2 shrink-0 select-none pt-[3px] text-right">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#3B82F6] border border-[#3B82F6]/30 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 rounded-[4px] px-1.5 py-[2px] font-normal leading-none inline-flex items-center gap-1 transition-colors group/live"
                  title={`Open ${project.name}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block animate-pulse" />
                  Live
                  <ArrowUpRight
                    className="w-2.5 h-2.5 text-[#3B82F6] transition-transform duration-150 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
                    strokeWidth={2.5}
                  />
                </a>
              )}
              <span className="text-[14px] text-[#666666] font-normal">
                {project.year}
              </span>
              {project.tag && (
                <span className="text-[11px] text-[#666666] border border-[#222222] rounded-[4px] px-1 py-[1px] font-normal leading-none inline-block align-middle">
                  {project.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Below the list, one small line in #666666 14px italic */}
      <p id="work-more-label" className="text-[14px] text-[#666666] italic mt-6 select-none">
        More available on request.
      </p>
    </div>
  );
}
