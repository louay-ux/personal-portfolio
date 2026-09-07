/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import KeyMetrics from "./components/KeyMetrics";

export default function App() {
  const [mounted, setMounted] = useState(false);

  // Single CSS opacity fade-in on mount: 0.3s ease-out from 0 to 1
  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="app-container"
      className="w-full min-h-screen bg-[#0C0C0C] text-[#666666] selection:bg-[#222222] selection:text-[#E8E8E8] transition-opacity duration-300 ease-out"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <div className="max-w-[640px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-0">
        
        {/* Navigation Block (top, not sticky) */}
        <nav id="nav-block" className="flex justify-between items-center mb-12 select-none">
          {/* Left: "Louai Serir" in 14px Inter weight 500, #E8E8E8 */}
          <span className="text-[14px] font-medium text-[#E8E8E8]">
            Louai Serir
          </span>
          {/* Right: plain text links — "Work  Stack  Contact" separated by two spaces, 14px #666666, hover: #E8E8E8 */}
          <div className="flex items-center text-[14px] text-[#666666]">
            <button
              onClick={() => scrollToSection("work-section")}
              className="hover:text-[#E8E8E8] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Work
            </button>
            <span className="whitespace-pre">  </span>
            <button
              onClick={() => scrollToSection("stack-section")}
              className="hover:text-[#E8E8E8] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Stack
            </button>
            <span className="whitespace-pre">  </span>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="hover:text-[#E8E8E8] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero-section" className="flex flex-col items-start text-left">
          {/* Line 1 — 14px Inter, #666666 */}
          <span className="text-[14px] text-[#666666] font-normal leading-normal">
            Full-stack product builder · Solo founder — Algeria
          </span>
          {/* Line 2 — 24px Inter weight 500, #E8E8E8, margin-top 8px */}
          <h1 className="text-[24px] font-medium text-[#E8E8E8] mt-2 tracking-tight leading-snug">
            I take ideas from first conversation to deployed product.
          </h1>
          {/* Below that, one short paragraph, 14px #666666, max-width 480px, margin-top 16px, line-height 1.7 */}
          <p className="text-[14px] text-[#666666] max-w-[480px] mt-4 leading-[1.7]">
            Three years building end-to-end — web apps, mobile apps, AI-powered 
            tools, and data platforms. I handle everything: product scoping, 
            design, development, and deployment. Solo. Fast.
          </p>
          {/* Below that, two plain text links side by side, margin-top 24px */}
          <div className="flex flex-wrap gap-6 mt-6">
            <button
              onClick={() => scrollToSection("work-section")}
              className="text-[14px] font-normal text-[#3B82F6] hover:underline cursor-pointer bg-transparent border-0 p-0"
            >
              See my work ↓
            </button>
            <a
              href="tel:+213776051622"
              className="text-[14px] font-normal text-[#3B82F6] hover:underline"
            >
              +213 776-051-622
            </a>
            <a
              href="mailto:louaiserir1@gmail.com"
              className="text-[14px] font-normal text-[#3B82F6] hover:underline"
            >
              louaiserir1@gmail.com
            </a>
          </div>
        </section>

        {/* Divider 1: solid #222222, exactly 64px below hero (mt-16) */}
        <div className="h-[1px] bg-[#222222] w-full mt-16 mb-16" />

        {/* WORK SECTION */}
        <div id="work-section" className="scroll-mt-6">
          <ProjectList />
        </div>

        {/* Divider 2: solid #222222, exactly 64px below (mt-16) */}
        <div className="h-[1px] bg-[#222222] w-full mt-16 mb-16" />

        {/* STACK SECTION */}
        <section id="stack-section" className="scroll-mt-6 flex flex-col items-start">
          {/* Section label: 12px, #666666, uppercase, letter-spacing 0.08em */}
          <span className="text-[12px] font-sans text-[#666666] uppercase tracking-[0.08em] select-none">
            Stack
          </span>

          <p className="text-[14px] text-[#666666] leading-[1.9] max-w-[560px] mt-6 select-text">
            I build with{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">React</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Next.js</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">React Native</code>{" "}
            and{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Expo</code>{" "}
            on the frontend, paired with{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Zustand</code>.{" "}
            I use{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Node.js</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Flask</code>{" "}
            and{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Supabase</code>{" "}
            on the backend integrated with{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Microsoft SQL Server</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">PostGIS</code>{" "}
            and{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Firebase FCM</code>.{" "}
            I deploy and build with{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Vercel</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Docker</code>{" "}
            and{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">EAS Build</code>,{" "}
            design in{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Figma</code>,{" "}
            and manage projects in{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Notion</code>{" "}
            and{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Jira</code>.{" "}
            For data, ML, and spatial work, I use{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Python</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">scikit-learn</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">pandas</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Power BI</code>{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Tableau</code>{" "}
            and{" "}
            <code className="text-[13px] font-mono text-[#E8E8E8] bg-[#141414] border border-[#222222] rounded-[4px] px-[3px]">Mapbox GL</code>.
          </p>

          <span className="text-[13px] text-[#666666] italic mt-4 select-none">
            I pick up whatever the project needs.
          </span>
        </section>

        {/* Divider 3: solid #222222, exactly 64px below (mt-16) */}
        <div className="h-[1px] bg-[#222222] w-full mt-16 mb-16" />

        {/* CONTACT SECTION */}
        <section id="contact-section" className="scroll-mt-6 flex flex-col items-start font-sans">
          <span className="text-[12px] font-sans text-[#666666] uppercase tracking-[0.08em] select-none mb-6">
            Contact
          </span>
          <p className="text-[14px] text-[#666666] mb-4">
            Open to freelance projects and collaborations.
          </p>
          <div className="flex flex-col items-start leading-[2.2]">
            <a
              id="contact-phone-link"
              href="tel:+213776051622"
              className="text-[14px] text-[#3B82F6] hover:underline"
            >
              +213 776-051-622
            </a>
            <a
              id="contact-email-link"
              href="mailto:louaiserir1@gmail.com"
              className="text-[14px] text-[#3B82F6] hover:underline"
            >
              louaiserir1@gmail.com
            </a>
            <a
              id="contact-linkedin-link"
              href="https://linkedin.com/in/serir-louai-mouiz"
              target="_blank"
              rel="noopener noreferrer referrer"
              className="text-[14px] text-[#3B82F6] hover:underline"
            >
              linkedin.com/in/serir-louai-mouiz
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="footer-block" className="mt-16 text-center select-none">
          <span className="text-[12px] text-[#444444] font-normal">
            © 2026 Louai Serir
          </span>
        </footer>

      </div>
    </div>
  );
}
