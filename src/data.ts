/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Post, StackCategory, Metric } from "./types";

export const BIO_TEXT = `I'm a designer and front-end developer focused on the intersection of typography, high-integrity user interfaces, and modular browser tooling. I prioritize sub-ms render steps, predictable layouts, and extreme restraint in visual design. Currently specializing in typographic engines, low-overhead client states, and building digital objects that run without dependencies.`;

export const PROJECTS: Project[] = [
  {
    id: "micro-kbd",
    title: "micro-kbd",
    description: "A 300-byte hotkey dispatcher with zero dependencies.",
    year: "2026",
    url: "https://github.com/louai/micro-kbd",
    tags: ["TypeScript", "NPM"]
  },
  {
    id: "fluid-canvas",
    title: "fluid-canvas",
    description: "Hardware-accelerated rendering contexts for minimal interactive interfaces.",
    year: "2025",
    url: "https://github.com/louai/fluid-canvas",
    tags: ["WebGL", "Performance"]
  },
  {
    id: "pretty-md",
    title: "pretty-md",
    description: "AST-based syntax tree parser optimizing typographical whitespace automatically.",
    year: "2025",
    url: "https://github.com/louai/pretty-md",
    tags: ["TypeScript", "Markdown"]
  },
  {
    id: "serif-core",
    title: "serif-core",
    description: "State primitives optimized for fast typographic canvas rendering.",
    year: "2024",
    url: "https://github.com/louai/serif-core",
    tags: ["React", "Engine"]
  },
  {
    id: "vaunt",
    title: "vaunt",
    description: "High-performance static page hydration engine designed for edge servers.",
    year: "2024",
    url: "https://github.com/louai/vaunt",
    tags: ["Deno", "Hydration"]
  },
  {
    id: "curator",
    title: "curator",
    description: "Local storage relational cache indexer for lightweight bookmarks.",
    year: "2023",
    url: "https://github.com/louai/curator",
    tags: ["IndexedDB", "Minimal"]
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
    title: "Languages & Core",
    items: ["TypeScript", "Rust", "Swift", "WebAssembly", "HTML/CSS"]
  },
  {
    title: "Libraries & Tooling",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Radix UI", "D3"]
  },
  {
    title: "Hardware Desk Setup",
    items: [
      "MacBook Pro M4 (14\", Space Black)",
      "Apple Studio Display (Standard Glass)",
      "Happy Hacking Keyboard (HHKB Professional Hybrid)",
      "Logitech MX Master 3S (Graphite)"
    ]
  },
  {
    title: "Software Suite & OS",
    items: ["Figma", "Cursor editor", "Terminal.app (Fish Shell)", "Linear", "TablePlus", "macOS Sequoia"]
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
