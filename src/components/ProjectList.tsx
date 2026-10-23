/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import LiquidGlassOrb from "./LiquidGlassOrb";
import { projects } from "../data";
import { Project } from "../types";

const FILTER_GROUPS = [
  "All",
  "Next.js & Web Architecture",
  "Industrial & Motion UI",
  "E-Commerce & SaaS",
  "AI & Data",
] as const;

const FILTER_LABELS_AR: Record<string, string> = {
  All: "الكل",
  "Next.js & Web Architecture": "Next.js ومعمارية الويب",
  "Industrial & Motion UI": "الواجهات الصناعية والحركية",
  "E-Commerce & SaaS": "التجارة الإلكترونية وSaaS",
  "AI & Data": "الذكاء الاصطناعي والبيانات",
};

interface ProjectListProps {
  lang?: "en" | "ar";
}

export default function ProjectList({ lang = "en" }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});

  const isAr = lang === "ar";

  const toggleSpecs = (projectName: string) => {
    setExpandedSpecs((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }));
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterGroup === activeFilter);

  const getCount = (group: string) => {
    if (group === "All") return projects.length;
    return projects.filter((p) => p.filterGroup === group).length;
  };

  const isGithubUrl = (url?: string) => Boolean(url?.includes("github.com"));

  const getActionLinks = (project: Project) => {
    const links: { label: string; url: string; isPrimary: boolean }[] = [];

    // Multiple explicit live links if provided (e.g. Aquila, Copackers, Dado)
    if (project.liveLinks && project.liveLinks.length > 0) {
      project.liveLinks.forEach((item) => {
        links.push({
          label: item.label,
          url: item.url,
          isPrimary: true,
        });
      });
    } else if (project.url && !isGithubUrl(project.url)) {
      // Single live site link
      links.push({
        label: isAr ? "الموقع المباشر" : "Live Site",
        url: project.url,
        isPrimary: true,
      });
    }

    // Explicit GitHub links
    if (project.githubLinks && project.githubLinks.length > 0) {
      project.githubLinks.forEach((item) => {
        links.push({
          label: item.label,
          url: item.url,
          isPrimary: false,
        });
      });
    } else if (project.github) {
      if (
        project.url &&
        isGithubUrl(project.url) &&
        project.url !== project.github
      ) {
        // Distinct repositories (e.g. Aquila & Copackers)
        links.push({
          label: "GitHub (Aquila)",
          url: project.url,
          isPrimary: false,
        });
        links.push({
          label: "GitHub (Copackers)",
          url: project.github,
          isPrimary: false,
        });
      } else {
        links.push({
          label: "GitHub",
          url: project.github,
          isPrimary: !project.url || isGithubUrl(project.url),
        });
      }
    } else if (project.url && isGithubUrl(project.url)) {
      links.push({
        label: "GitHub",
        url: project.url,
        isPrimary: false,
      });
    }

    return links;
  };

  const getPrimaryUrl = (project: Project) => {
    if (project.url && !isGithubUrl(project.url)) return project.url;
    if (project.url) return project.url;
    if (project.github) return project.github;
    return undefined;
  };

  return (
    <div id="projects-section" className="flex flex-col">
      {/* Section Header */}
      <div className="flex items-center justify-between select-none">
        <span className="text-[12px] font-sans text-[#666666] uppercase tracking-[0.08em]">
          {isAr ? "الأعمال والمشاريع" : "Work"}
        </span>
        <span className="text-[11px] font-mono text-[#666666]">
          {isAr
            ? `${filteredProjects.length} من أصل ${projects.length} مشاريع`
            : `${filteredProjects.length} of ${projects.length} Projects`}
        </span>
      </div>

      {/* 1. Category Filter Bar (FIXED: flex-wrap, 100% visible, no clipping) */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap items-center gap-2 mt-4 select-none"
      >
        {FILTER_GROUPS.map((group) => {
          const isSelected = activeFilter === group;
          const count = getCount(group);
          const label = isAr ? FILTER_LABELS_AR[group] || group : group;

          return (
            <button
              key={group}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveFilter(group)}
              className={`text-[12px] font-mono px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                isSelected
                  ? "bg-white/[0.08] text-[#E8E8E8] border-white/25 shadow-sm"
                  : "bg-transparent text-[#666666] border-white/[0.06] hover:text-[#A0A0A0] hover:border-white/10 hover:bg-white/[0.02]"
              }`}
            >
              <span>{label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans transition-colors ${
                  isSelected
                    ? "bg-white/15 text-[#E8E8E8]"
                    : "bg-white/[0.04] text-[#666666]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="flex flex-col mt-4 border-t border-[#222222] transition-opacity duration-200">
        {filteredProjects.map((project, idx) => {
          const actionLinks = getActionLinks(project);
          const primaryUrl = getPrimaryUrl(project);
          const isSpecsOpen = Boolean(expandedSpecs[project.name]);

          return (
            <div
              id={`project-row-${idx}`}
              key={project.name}
              className="group flex flex-col py-6 border-b border-[#222222] transition-colors duration-200 hover:bg-[#121212] px-3 -mx-3 rounded-md"
            >
              {/* Category & Year */}
              <div className="flex items-center justify-between gap-2 mb-1.5 select-none">
                <span className="text-[11px] font-mono text-[#777777] uppercase tracking-[0.06em]">
                  {project.category}
                </span>

                <span className="text-[12px] font-mono text-[#666666]">
                  {project.year}
                </span>
              </div>

              {/* Title & Glowing Liquid Glass Orb */}
              <div className="flex items-center gap-2.5 my-1">
                <LiquidGlassOrb
                  glowColor={project.glowColor}
                  accentGradient={project.accentGradient}
                  accentColor={project.accentColor}
                />

                {primaryUrl ? (
                  <a
                    href={primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium text-[#E8E8E8] transition-colors duration-200 hover:text-[#3B82F6] inline-flex items-center gap-1.5 group/title"
                  >
                    <span>{project.name}</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-[#666666] transition-all duration-200 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 group-hover/title:text-[#3B82F6] shrink-0"
                      strokeWidth={2}
                    />
                  </a>
                ) : (
                  <span className="text-[15px] font-medium text-[#E8E8E8]">
                    {project.name}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] text-[#888888] font-normal leading-relaxed mt-1.5 select-text">
                {project.description}
              </p>

              {/* 3.1 Differentiated Telemetry Strip (borderless inline telemetry with glowing dots) */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-[11px] font-mono select-none">
                  {project.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5"
                    >
                      <span className="text-[#38BDF8] text-[10px] leading-none">✦</span>
                      <span className="text-neutral-300 font-normal">{highlight}</span>
                      {hIdx < project.highlights.length - 1 && (
                        <span className="text-neutral-600 ps-1">·</span>
                      )}
                    </span>
                  ))}
                </div>
              )}

              {/* 3.2 Monospace Tech Stack Pill Badges */}
              {project.stack && project.stack.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 mt-2.5" dir="ltr">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs bg-white/[0.03] border border-white/[0.08] text-neutral-300 px-2.5 py-0.5 rounded font-mono whitespace-nowrap select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* 3.3 Action Links & Engineering Specs Toggle Button */}
              <div className="flex flex-wrap items-center gap-4 mt-3 pt-1">
                {actionLinks.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-[12px] font-mono transition-colors duration-150 hover:underline group/act ${
                      link.isPrimary
                        ? "text-[#3B82F6] hover:text-[#60A5FA]"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform duration-150 group-hover/act:translate-x-0.5 group-hover/act:-translate-y-0.5 shrink-0"
                      strokeWidth={2}
                    />
                  </a>
                ))}

                {/* Interactive Engineering Specs Accordion Toggle */}
                {project.architectureSpecs && project.architectureSpecs.length > 0 && (
                  <button
                    onClick={() => toggleSpecs(project.name)}
                    aria-expanded={isSpecsOpen}
                    className="inline-flex items-center gap-1.5 text-[12px] font-mono text-neutral-400 hover:text-neutral-100 hover:underline transition-colors cursor-pointer bg-transparent border-none p-0 select-none"
                  >
                    <span>
                      {isSpecsOpen
                        ? isAr
                          ? "إخفاء التفاصيل −"
                          : "Hide Specs −"
                        : isAr
                          ? "التفاصيل الهندسية +"
                          : "Engineering Specs +"}
                    </span>
                    {isSpecsOpen ? (
                      <ChevronUp className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                    )}
                  </button>
                )}
              </div>

              {/* Expanded Architectural Breakdown Panel */}
              {isSpecsOpen && project.architectureSpecs && (
                <div
                  className="bg-white/[0.02] border-s-2 border-neutral-700 ps-4 py-3 mt-3 text-xs text-neutral-300 space-y-2 rounded-e transition-all duration-200 animate-in fade-in slide-in-from-top-1"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 select-none mb-1">
                    {isAr ? "معمارية النظام والتنفيذ التقني:" : "Architectural Highlights & Technical Spec:"}
                  </div>
                  {project.architectureSpecs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#3B82F6] font-mono shrink-0 select-none">›</span>
                      <span className="text-neutral-300">{spec}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer hint */}
      <p
        id="work-more-label"
        className="text-[13px] text-[#666666] italic mt-6 select-none"
      >
        {isAr
          ? "دراسات الحالة التفصيلية ومراجعات الأكواد متاحة عند الطلب."
          : "Enterprise case studies and code walkthroughs available on request."}
      </p>
    </div>
  );
}
