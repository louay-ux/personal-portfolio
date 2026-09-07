/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface ProjectRow {
  name: string;
  category?: string;
  description: string;
  year: string;
  tag?: string;
}

const SPEC_PROJECTS: ProjectRow[] = [
  {
    name: "GridForecast AI",
    category: "AI / MACHINE LEARNING",
    description: "ML load-forecasting platform built during a capstone internship at SONELGAZ, Algeria's national electricity company. Random Forest trained on ~106,000 hourly records — 98.65% accuracy, in a real production environment.",
    year: "2025 – 2026"
  },
  {
    name: "Clinicos",
    category: "HEALTH-TECH",
    description: "Algerian health-tech platform. Role-based clinical dashboard with Gantt-style scheduling, real-time queues, and a trust-scoring system that reduces appointment fraud. Bilingual RTL/LTR.",
    year: "2026"
  },
  {
    name: "Data Warehouse & BI",
    category: "DATA ENGINEERING",
    description: "Self-directed data engineering project. SQL Server warehouse using Medallion architecture (Bronze/Silver/Gold), star-schema modeling, and T-SQL ETL — with Power BI and Tableau dashboards built on top using DAX and LOD expressions.",
    year: "2026"
  },
  {
    name: "CosmeticaDZ",
    category: "E-COMMERCE",
    description: "Bilingual e-commerce marketplace for the Algerian market. Solo, concept to launch — regional payment flow by Wilaya/Baladia, admin dashboard tracking orders, stock, and margins.",
    year: "2025"
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
            {/* Left: project category, name and description */}
            <div className="flex flex-col pr-4">
              {project.category && (
                <span className="text-[11px] font-sans text-[#666666] uppercase tracking-[0.06em] mb-1 select-none">
                  {project.category}
                </span>
              )}
              <span className="text-[14px] font-medium text-[#E8E8E8] transition-colors duration-200 group-hover:text-[#3B82F6]">
                {project.name}
              </span>
              <span className="text-[14px] text-[#666666] font-normal leading-[1.5] mt-1">
                {project.description}
              </span>
            </div>

            {/* Right: year right-aligned & optional tag */}
            <div className="flex items-center gap-2 shrink-0 select-none pt-[1px] text-right">
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
