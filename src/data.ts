/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Post, StackCategory, Metric } from "./types";

export const BIO_TEXT = `5+ years of hands-on experience building responsive, bilingual (RTL/LTR) web applications, headless architectures, and design systems with React, Next.js (App Router, SSR/SSG), and TypeScript. Obsessed with 95+ Core Web Vitals, Zero-CLS layouts, WCAG accessibility, and pixel-perfect Figma-to-code execution.`;

export const projects: Project[] = [
  {
    name: "Hious",
    category: "B2B WEB ARCHITECTURE / NEXT.JS",
    filterGroup: "Next.js & Web Architecture",
    description:
      "B2B digital product & engineering agency platform built on Next.js App Router and React 19. Engineered zero-dependency bilingual i18n (82 statically prerendered SSG routes), Edge middleware locale routing, multi-step client intake qualification, and 95+ Core Web Vitals.",
    year: "2026",
    isLive: true,
    url: "https://hious.io.vn/",
    github: "https://github.com/louai-pixelouai/Hious",
    stack: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "SSG / i18n"],
    highlights: ["82 SSG Routes", "95+ Core Web Vitals", "Zero-Reload Bilingual i18n"],
    architectureSpecs: [
      "Architected 82 statically prerendered (SSG) routes across 6 engineering practices, 8 industry verticals, and 7 case studies.",
      "Built zero-dependency Edge middleware i18n routing (`/` EN and `/vi/*` VI) with `NEXT_LOCALE` cookie persistence and instant zero-reload switching.",
      "Engineered a multi-step client intake qualification state machine with Schema.org JSON-LD SEO structured data."
    ],
    glowColor: "rgba(6, 182, 212, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(34, 211, 238, 0.55) 0%, rgba(14, 165, 233, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(6, 182, 212, 0.5)",
  },
  {
    name: "Sundial Travel",
    category: "DESIGN ENGINEERING & ACCESSIBILITY",
    filterGroup: "Next.js & Web Architecture",
    description:
      "Art-directed boutique travel platform with native bilingual routing. Engineered on a strict 100% design-token CSS architecture (zero raw pixels/hex values), dynamic locale-aware inquiry routing, and automated Playwright viewport verification.",
    year: "2026",
    isLive: true,
    url: "https://travel-agency-landing-page-fawn.vercel.app/",
    github: "https://github.com/louai-pixelouai/travel-agency-landing-page",
    stack: ["TypeScript", "Astro v7", "Tailwind CSS v4", "Design Tokens", "Playwright", "axe-core"],
    highlights: ["100% WCAG 2.2 AA (0 Violations)", "Tested Across 41 Viewports", "Sub-Second LCP"],
    architectureSpecs: [
      "Enforced a 100% tokenized CSS architecture (`tokens.css`) with zero raw hex values and zero raw pixel declarations.",
      "Verified 0 axe-core WCAG 2.2 AA violations and 0px horizontal overflow across 41 viewports (320px–1920px) via automated Playwright tests.",
      "Optimized LCP to sub-second speed using preloaded responsive hero variants and self-hosted variable fonts."
    ],
    glowColor: "rgba(194, 93, 56, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(217, 119, 6, 0.55) 0%, rgba(180, 83, 9, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(194, 93, 56, 0.5)",
  },
  {
    name: "Clinicos",
    category: "HEALTH-TECH / BILINGUAL RTL UI",
    filterGroup: "E-Commerce & SaaS",
    description:
      "Role-based clinical management dashboard featuring interactive Gantt-style appointment scheduling, real-time patient queues, and an automated trust-scoring system. Engineered from the ground up with full bilingual RTL (Arabic) and LTR (English/French) layout symmetry.",
    year: "2026",
    isLive: false,
    stack: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "RTL/LTR Architecture", "REST APIs"],
    highlights: ["Full RTL/LTR Support", "Gantt Scheduling UI", "Real-Time Queue State"],
    architectureSpecs: [
      "Designed symmetrical RTL (Arabic) and LTR (English/French) clinical workspaces using CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline`).",
      "Built an interactive Gantt-style appointment scheduler and real-time patient queue state engine.",
      "Implemented an automated patient trust-scoring algorithm to reduce no-show fraud across clinics."
    ],
    glowColor: "rgba(16, 185, 129, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(52, 211, 153, 0.55) 0%, rgba(16, 185, 129, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    name: "Baba Ali",
    category: "B2B WHOLESALE MARKETPLACE / RTL",
    filterGroup: "E-Commerce & SaaS",
    description:
      "Arabic-first (RTL) B2B wholesale marketplace connecting regional suppliers and retail buyers. Delivered 15+ core V1 modules—including bulk tier pricing, merchant onboarding, and hardened security policies—using Next.js, TypeScript, and Supabase.",
    year: "2026",
    isLive: false,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "Cloudflare", "RTL/LTR"],
    highlights: ["Arabic-First RTL UX", "15+ Core B2B Modules", "Row-Level Security Hardened"],
    architectureSpecs: [
      "Architected an Arabic-first RTL layout system optimized for high-density B2B wholesale catalog browsing and bulk ordering.",
      "Shipped 15+ core V1 marketplace features in a 9-day spec-driven sprint with strict code review and QA gates.",
      "Executed pre-launch security hardening, PostgreSQL Row-Level Security (RLS) audits, and Cloudflare edge protection."
    ],
    glowColor: "rgba(245, 158, 11, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(251, 191, 36, 0.55) 0%, rgba(217, 119, 6, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(245, 158, 11, 0.5)",
  },
  {
    name: "BioEnergy Egypt",
    category: "INDUSTRIAL B2B / SVG MOTION UI",
    filterGroup: "Industrial & Motion UI",
    description:
      "Enterprise B2B platform and dark-mode industrial design system for Egypt's leading Alternative Fuels supplier across the MEA region. Features 60fps GPU-accelerated SVG/CSS rotary kiln schematics, thermal loop animations, and a deterministic B2B off-take RFQ engine.",
    year: "2026",
    isLive: true,
    url: "https://bioenergy-egypt.vercel.app/",
    github: "https://github.com/louai-pixelouai/bioenergy-egypt",
    stack: ["React 19", "TypeScript", "Tailwind CSS v4", "60fps SVG/CSS Motion", "Node Test Runner"],
    highlights: ["60fps GPU Vector Motion", "MEA Regional B2B Flow", "Automated Unit Tests"],
    architectureSpecs: [
      "Engineered custom 60fps GPU-accelerated SVG/CSS CAD schematics (1,450°C rotary cement kiln, twin-shaft shredders, thermal displacement loop).",
      "Built a deterministic B2B off-take RFQ engine for cement plants across the Middle East & Africa (MEA) generating traceable reference IDs.",
      "Verified copy and data integrity with automated Node.js (`node:test`) unit tests."
    ],
    glowColor: "rgba(245, 158, 11, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(251, 191, 36, 0.55) 0%, rgba(217, 119, 6, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(245, 158, 11, 0.5)",
  },
  {
    name: "Clean Addis Recycling",
    category: "CLEANTECH / ENTERPRISE WEB",
    filterGroup: "Industrial & Motion UI",
    description:
      "Enterprise web platform with continuous side-elevation CAD schematics, an interactive B2B polymer intake matrix with instant filtering, and an automated dispatch scheduling system with zero cumulative layout shift (0.00 CLS).",
    year: "2026",
    isLive: true,
    url: "https://clean-addis-recycling-ethiopia-iota.vercel.app/",
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Zero-CLS UI"],
    highlights: ["0.00 CLS Score", "Interactive Intake Matrix", "Accessible Lightbox"],
    architectureSpecs: [
      "Eliminated Cumulative Layout Shift (0.00 CLS) across complex animated SVG plant cross-sections using strict container dimension locks.",
      "Created a high-contrast B2B polymer intake specification matrix with instant zero-jank client filtering.",
      "Implemented deterministic collection scheduling (`CAR-2026-XXXX`) with accessible keyboard-navigable lightbox inspection."
    ],
    glowColor: "rgba(16, 185, 129, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(52, 211, 153, 0.55) 0%, rgba(5, 150, 105, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    name: "GridForecast AI",
    category: "AI / ENTERPRISE DASHBOARD",
    filterGroup: "AI & Data",
    description:
      "Operations dashboard and ML load-forecasting platform built for SONELGAZ (Algeria's national electricity company). Responsive React 18 interface connected to Flask REST APIs, visualizing predictions from a Random Forest model trained on 106,000+ hourly records (98.65% accuracy).",
    year: "2025 – 2026",
    isLive: true,
    url: "https://electricity-forecasting-app.vercel.app",
    stack: ["React 18", "TypeScript", "Tailwind CSS", "REST APIs", "Docker", "Python / Flask"],
    highlights: ["98.65% Forecast Accuracy", "106k+ Records Processed", "Dockerized Stack"],
    architectureSpecs: [
      "Developed the real-time React 18 operations dashboard for SONELGAZ (Algeria's national utility) consuming Flask REST prediction endpoints.",
      "Visualized hourly load curves powered by a Random Forest pipeline trained on 106,000+ historical grid records (98.65% accuracy).",
      "Containerized the frontend and API services with Docker for reproducible deployment."
    ],
    glowColor: "rgba(59, 130, 246, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(96, 165, 250, 0.55) 0%, rgba(37, 99, 235, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    name: "CosmeticaDZ",
    category: "E-COMMERCE MARKETPLACE",
    filterGroup: "E-Commerce & SaaS",
    description:
      "Bilingual (RTL/LTR) e-commerce marketplace and authenticated admin dashboard. Engineered regional checkout flows across 58 provinces (Wilaya/Baladia) with real-time order, inventory, and margin tracking.",
    year: "2025",
    isLive: true,
    url: "https://cosmeticadz.netlify.app",
    stack: ["React", "Next.js", "TypeScript", "Redux Toolkit / Context", "Supabase", "RTL/LTR"],
    highlights: ["Bilingual Arabic/French", "Admin Inventory Portal", "Regional Checkout Flow"],
    architectureSpecs: [
      "Built a full-featured bilingual (Arabic RTL / French LTR) e-commerce storefront with dynamic 58-province (Wilaya/Baladia) delivery fee calculation.",
      "Engineered a role-protected Admin Dashboard for real-time order fulfillment, SKU stock alerts, and net margin analytics.",
      "Managed complex cart, filter, and checkout state with Redux Toolkit / Context API and Supabase."
    ],
    glowColor: "rgba(236, 72, 153, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(244, 114, 182, 0.55) 0%, rgba(219, 39, 119, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(236, 72, 153, 0.5)",
  },
  {
    name: "Aquila & Copackers B2B Suite",
    category: "INDUSTRIAL B2B SYSTEMS",
    filterGroup: "Industrial & Motion UI",
    description:
      "Dual B2B procurement and material-recovery platforms for East and West African industrial facilities (Kampala & Lagos). Engineered multi-track commercial intent routers, strict 10-field deterministic form validation, and interactive geo-logistics radar views.",
    year: "2026",
    isLive: true,
    url: "https://aquila-recycling-uganda.vercel.app/",
    liveLinks: [
      { label: "Aquila", url: "https://aquila-recycling-uganda.vercel.app/" },
      { label: "Copackers", url: "https://copackers-recycling.vercel.app/" },
      { label: "Dado Recycle", url: "https://dado-recycle-uganda.vercel.app/" },
    ],
    githubLinks: [
      { label: "GitHub (Aquila)", url: "https://github.com/louai-pixelouai/aquila-recycling-uganda" },
      { label: "GitHub (Copackers)", url: "https://github.com/louai-pixelouai/copackers-recycling" },
    ],
    github: "https://github.com/louai-pixelouai/copackers-recycling",
    stack: ["React 18/19", "TypeScript (Strict)", "Tailwind CSS v4", "Unit Tested (tsx)"],
    highlights: ["Strict Type-Safe Validation", "Multi-Stream RFQ Router", "WCAG Contrast Verified"],
    architectureSpecs: [
      "Engineered a 3-path commercial intent router dynamically segmenting waste suppliers, industrial flake buyers, and municipal partners.",
      "Implemented strict 10-field deterministic TypeScript form validation for metric tonnage tiers and regional telecom formats.",
      "Built an interactive geo-logistics supply corridor radar and full-screen keyboard-accessible SVG schematic deck."
    ],
    glowColor: "rgba(2, 132, 199, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(56, 189, 248, 0.55) 0%, rgba(2, 132, 199, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(2, 132, 199, 0.5)",
  },
  {
    name: "Data Warehouse & BI",
    category: "DATA ENGINEERING & ANALYTICS",
    filterGroup: "AI & Data",
    description:
      "End-to-end SQL Server data warehouse using Medallion architecture (Bronze/Silver/Gold), star-schema modeling, and T-SQL ETL pipelines — paired with executive Power BI and Tableau analytics dashboards.",
    year: "2026",
    isLive: false,
    stack: ["SQL Server", "T-SQL ETL", "Power BI", "Tableau", "Star Schema"],
    highlights: ["Medallion Architecture", "DAX & LOD Expressions"],
    architectureSpecs: [
      "Designed a 3-layer Medallion architecture (Bronze raw ingestion, Silver cleansed/conformed, Gold star-schema marts) in SQL Server.",
      "Authored modular T-SQL stored procedures for incremental ETL and data quality validation.",
      "Built executive KPI dashboards in Power BI (DAX) and Tableau (LOD expressions)."
    ],
    glowColor: "rgba(139, 92, 246, 0.45)",
    accentGradient:
      "radial-gradient(circle at 40% 40%, rgba(167, 139, 250, 0.55) 0%, rgba(124, 58, 237, 0.35) 60%, transparent 100%)",
    accentColor: "rgba(139, 92, 246, 0.5)",
  },
];

export const PROJECTS: Project[] = projects;

export const STACK_CARDS = [
  {
    id: "frontend",
    title: "Frontend & UI Architecture",
    titleAr: "معمارية الواجهات وتطبيقات الويب",
    pills: [
      "React 18 / 19",
      "Next.js (App Router)",
      "SSR / SSG / ISR",
      "TypeScript (Strict)",
      "SCSS / SASS",
      "Tailwind CSS v4",
      "HTML5 / CSS3",
      "Design Tokens",
      "Framer Motion",
      "SVG / Canvas Motion",
      "Bilingual RTL / LTR"
    ]
  },
  {
    id: "state-api",
    title: "State, APIs & Headless CMS",
    titleAr: "إدارة الحالة وواجهات البرمجة والأنظمة",
    pills: [
      "Redux Toolkit",
      "Context API",
      "Zustand",
      "RESTful APIs",
      "GraphQL",
      "Headless Drupal / WP",
      "Node.js",
      "Supabase (PostgreSQL)",
      "Python / Flask"
    ]
  },
  {
    id: "quality-devops",
    title: "Quality, Performance & DevOps",
    titleAr: "الجودة والأداء وهندسة العمليات",
    pills: [
      "Lighthouse 95+",
      "Core Web Vitals (0 CLS)",
      "WCAG 2.2 AA",
      "Jest",
      "React Testing Library",
      "Playwright",
      "Cypress",
      "Git / GitHub Actions CI/CD",
      "Docker",
      "AWS / Vercel",
      "Figma to Code",
      "Agile / Scrum"
    ]
  }
];

export const POSTS: Post[] = [
  {
    id: "typographical-density",
    title: "On typographical density",
    description: "Finding visual equilibrium between device pixels and structural line heights.",
    date: "April 12, 2026",
    readingTime: "5 min read",
    url: "#"
  },
  {
    id: "reducing-state-sync",
    title: "Reducing state sync overhead",
    description: "Developing responsive client views by optimizing React's diffing pass.",
    date: "November 04, 2025",
    readingTime: "8 min read",
    url: "#"
  },
  {
    id: "60fps-canvas",
    title: "The 60fps canvas constraint",
    description: "Why single-thread processing requires double-buffered draw loops.",
    date: "August 19, 2025",
    readingTime: "12 min read",
    url: "#"
  },
  {
    id: "designing-vaunt",
    title: "Architecting a web-standard compiler",
    description: "Practical lessons learned replacing node modules with edge-native runtimes.",
    date: "May 15, 2024",
    readingTime: "6 min read",
    url: "#"
  }
];

export const STACK: StackCategory[] = [
  {
    title: "Frontend & UI Architecture",
    items: ["React 18/19", "Next.js (App Router, SSR, SSG, ISR)", "TypeScript", "SCSS / SASS", "Tailwind CSS", "HTML5 / CSS3", "Framer Motion", "RTL/LTR", "Design Tokens"]
  },
  {
    title: "State, APIs & Headless Integration",
    items: ["Redux Toolkit", "Context API", "Zustand", "RESTful APIs", "GraphQL", "Node.js", "Supabase (PostgreSQL)", "WordPress / Drupal"]
  },
  {
    title: "Quality, Performance & DevOps",
    items: ["Lighthouse", "Jest", "React Testing Library", "Cypress / Playwright", "Git / GitHub Actions CI/CD", "Docker", "AWS / Vercel", "Figma", "Agile / Scrum"]
  }
];

export const METRICS: Metric[] = [
  {
    id: "craft-duration",
    label: "Total Craft Duration",
    value: "14,820",
    detail: "Hours spent tuning typography margins, writing modular lines of code, and compiling un-bloated digital objects."
  },
  {
    id: "dependency-philosophy",
    label: "Dependency Philosophy",
    value: "0.0%",
    detail: "Fraction of raw development packages that are imported blindly. Every bundle overhead is analyzed before commit."
  },
  {
    id: "response-speeds",
    label: "Interaction Response Latency",
    value: "4.2ms",
    detail: "High-performance mouse click to interface render updates, measured through active layout frame timers."
  },
  {
    id: "test-coverage",
    label: "Automated Build Success Rate",
    value: "99.98%",
    detail: "Consistent end-to-end integration test success frequency measured across continuous delivery pipelines."
  }
];

export const HISTORICAL_GUESTBOOK: string[][] = [
  ["Guillermo Rauch", "Exquisite rendering speed and spacing Louai."],
  ["Paco Coursey", "This feels exactly right. Zero margins, strict borders, correct line-height. Excellent work."],
  ["Lee Robinson", "Minimalism at its peak. Bookmarking this as a prime README reference."],
  ["Shu Ding", "Beautiful interactive command trick at the top."]
];
