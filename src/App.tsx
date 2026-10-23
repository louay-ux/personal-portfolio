/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import { STACK_CARDS } from "./data";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">("en");

  const isAr = lang === "ar";

  // Single CSS opacity fade-in on mount: 0.3s ease-out from 0 to 1
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update html document direction for screen readers & browser consistency
  useEffect(() => {
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = isAr ? "ar" : "en";
  }, [isAr]);

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
      dir={isAr ? "rtl" : "ltr"}
      className="w-full min-h-screen bg-[#0a0a0a] text-[#888888] selection:bg-[#222222] selection:text-[#E8E8E8] transition-opacity duration-300 ease-out"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <div className="max-w-[640px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-0">
        
        {/* Navigation Block (top, not sticky) */}
        <nav id="nav-block" className="flex justify-between items-center mb-12 select-none">
          {/* Left: Brand Name */}
          <span className="text-[14px] font-medium text-[#E8E8E8]">
            {isAr ? "لؤي سرير" : "Louai Serir"}
          </span>

          {/* Right: plain text links + GCC Bilingual Language Toggle */}
          <div className="flex items-center gap-5 text-[14px] text-[#666666]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection("work-section")}
                className="hover:text-[#E8E8E8] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                {isAr ? "الأعمال" : "Work"}
              </button>
              <button
                onClick={() => scrollToSection("stack-section")}
                className="hover:text-[#E8E8E8] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                {isAr ? "التقنيات" : "Stack"}
              </button>
              <button
                onClick={() => scrollToSection("contact-section")}
                className="hover:text-[#E8E8E8] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                {isAr ? "تواصل معي" : "Contact"}
              </button>
            </div>

            {/* 5. Working EN (LTR) / عربي (RTL) Switcher Pill */}
            <button
              onClick={() => setLang(isAr ? "en" : "ar")}
              aria-label="Toggle language direction"
              title={isAr ? "Switch to English (LTR)" : "التبديل إلى العربية (RTL)"}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 text-[#E8E8E8] transition-all cursor-pointer"
            >
              <span className={!isAr ? "text-white font-medium" : "text-[#777777]"}>EN</span>
              <span className="text-[#555555]">·</span>
              <span className={isAr ? "text-white font-medium font-sans" : "text-[#777777] font-sans"}>عربي</span>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero-section" className="flex flex-col items-start text-start">
          {/* Eyebrow / Subtitle */}
          <span className="text-[14px] text-[#888888] font-normal leading-normal">
            {isAr
              ? "مهندس واجهات المستخدم وتطبيقات الويب · React & Next.js & TypeScript"
              : "UI & Frontend Engineer · React, Next.js & TypeScript — Algeria (Remote)"}
          </span>

          {/* Main Headline */}
          <h1 className="text-[24px] font-medium text-[#E8E8E8] mt-2 tracking-tight leading-snug">
            {isAr
              ? "هندسة وتطوير واجهات ويب عالية الأداء وقابلة للتوسع بمعايير عالمية."
              : "Engineering high-performance, scalable web interfaces and digital products."}
          </h1>

          {/* Bio Paragraph */}
          <p className="text-[14px] text-[#888888] max-w-[560px] mt-4 leading-[1.7]">
            {isAr
              ? "خبرة عملية تزيد عن 5 سنوات في بناء تطبيقات ويب متجاوبة وثنائية اللغة (RTL/LTR) باستخدام React و Next.js و TypeScript، مع التركيز على الأداء الفائق وتجربة المستخدم الدقيقة."
              : "5+ years of hands-on experience building responsive, bilingual (RTL/LTR) web applications, headless architectures, and design systems with React, Next.js (App Router, SSR/SSG), and TypeScript. Obsessed with 95+ Core Web Vitals, Zero-CLS layouts, WCAG accessibility, and pixel-perfect Figma-to-code execution."}
          </p>

          {/* 4.1 Upgraded Hero CTA Row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-6">
            <button
              onClick={() => scrollToSection("work-section")}
              className="bg-white text-black font-medium px-4 py-1.5 rounded-full text-sm hover:bg-neutral-200 transition cursor-pointer border-none shadow-sm inline-flex items-center gap-1.5 select-none"
            >
              <span>{isAr ? "شاهد أعمالي ↓" : "See my work ↓"}</span>
            </button>
            <a
              href="https://github.com/louai-pixelouai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-normal text-[#3B82F6] hover:underline inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
            <a
              href="https://linkedin.com/in/louai-serir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-normal text-[#3B82F6] hover:underline inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span className="text-xs">↗</span>
            </a>
            <a
              href="mailto:louaiserir1@gmail.com"
              className="text-[14px] font-normal text-[#3B82F6] hover:underline"
            >
              louaiserir1@gmail.com
            </a>
            <a
              href="tel:+213776051622"
              className="text-[14px] font-normal text-[#3B82F6] hover:underline"
              dir="ltr"
            >
              +213 776-051-622
            </a>
          </div>

          {/* 4.2 Engineering Telemetry Bar (4-Column Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-white/[0.08] w-full select-none">
            <div className="flex flex-col">
              <span className="text-[20px] font-medium text-[#E8E8E8] tracking-tight font-mono">
                {isAr ? "+5 سنوات" : "5+ Years"}
              </span>
              <span className="text-[11px] text-[#888888] font-mono mt-0.5 leading-snug">
                {isAr ? "هندسة واجهات وتطبيقات الإنتاج" : "Production UI & Frontend"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[20px] font-medium text-[#E8E8E8] tracking-tight font-mono">
                {isAr ? "+95 درجة" : "95+ Score"}
              </span>
              <span className="text-[11px] text-[#888888] font-mono mt-0.5 leading-snug">
                {isAr ? "أداء وسرعة Lighthouse ومعايير SEO" : "Lighthouse Perf & SEO"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[20px] font-medium text-[#E8E8E8] tracking-tight font-mono">
                0.00 CLS
              </span>
              <span className="text-[11px] text-[#888888] font-mono mt-0.5 leading-snug">
                {isAr ? "استقرار بصري تام وتخطيط منعدم الإزاحة" : "Zero Layout Shift UI"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[20px] font-medium text-[#E8E8E8] tracking-tight font-mono">
                RTL &amp; LTR
              </span>
              <span className="text-[11px] text-[#888888] font-mono mt-0.5 leading-snug">
                {isAr ? "أنظمة ثنائية اللغة تدعم العربية أصلياً" : "Native Bilingual Systems"}
              </span>
            </div>
          </div>
        </section>

        {/* Divider 1: solid #222222, exactly 64px below hero (mt-16) */}
        <div className="h-[1px] bg-[#222222] w-full mt-16 mb-16" />

        {/* WORK SECTION */}
        <div id="work-section" className="scroll-mt-6">
          <ProjectList lang={lang} />
        </div>

        {/* Divider 2: solid #222222, exactly 64px below (mt-16) */}
        <div className="h-[1px] bg-[#222222] w-full mt-16 mb-16" />

        {/* 2. STACK SECTION — 3-Card Architectural Grid (FIXED: no multi-line broken code wrapping) */}
        <section id="stack-section" className="scroll-mt-6 flex flex-col items-start w-full">
          <span className="text-[12px] font-sans text-[#666666] uppercase tracking-[0.08em] select-none">
            {isAr ? "التقنيات والمعمارية" : "Stack"}
          </span>

          <div className="flex flex-col gap-4 mt-6 w-full">
            {STACK_CARDS.map((card) => (
              <div
                key={card.id}
                className="p-5 rounded-lg bg-white/[0.02] border border-[#222222] hover:border-white/10 transition-colors flex flex-col gap-3"
              >
                <div className="flex items-center justify-between select-none">
                  <h3 className="text-[13px] font-mono text-[#E8E8E8] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    {isAr ? card.titleAr : card.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#666666]">
                    {card.pills.length} {isAr ? "عنصر" : "modules"}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2" dir="ltr">
                  {card.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="text-xs bg-white/[0.04] border border-white/[0.08] text-neutral-300 px-2.5 py-1 rounded font-mono inline-flex items-center whitespace-nowrap hover:border-white/20 hover:text-white transition-colors select-none"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider 3: solid #222222, exactly 64px below (mt-16) */}
        <div className="h-[1px] bg-[#222222] w-full mt-16 mb-16" />

        {/* CONTACT SECTION */}
        <section id="contact-section" className="scroll-mt-6 flex flex-col items-start font-sans">
          <span className="text-[12px] font-sans text-[#666666] uppercase tracking-[0.08em] select-none mb-6">
            {isAr ? "تواصل معي" : "Contact"}
          </span>
          <p className="text-[14px] text-[#888888] mb-4">
            {isAr
              ? "متاح لفرص العمل عن بعد بدوام كامل وهندسة واجهات المشاريع الرقمية الكبرى."
              : "Available for full-time remote Frontend / UI Engineering roles and enterprise collaborations."}
          </p>
          <div className="flex flex-col items-start leading-[2.2]">
            <a
              id="contact-phone-link"
              href="tel:+213776051622"
              className="text-[14px] text-[#3B82F6] hover:underline"
              dir="ltr"
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
              href="https://linkedin.com/in/louai-serir"
              target="_blank"
              rel="noopener noreferrer referrer"
              className="text-[14px] text-[#3B82F6] hover:underline"
            >
              linkedin.com/in/louai-serir
            </a>
            <a
              id="contact-github-link"
              href="https://github.com/louai-pixelouai"
              target="_blank"
              rel="noopener noreferrer referrer"
              className="text-[14px] text-[#3B82F6] hover:underline"
            >
              github.com/louai-pixelouai
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="footer-block" className="mt-16 text-center select-none">
          <span className="text-[12px] text-[#444444] font-normal font-mono">
            {isAr
              ? "© 2026 لؤي سرير · تم التطوير باستخدام React و TypeScript"
              : "© 2026 Louai Serir · Built with React & TypeScript"}
          </span>
        </footer>

      </div>
    </div>
  );
}
