/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { METRICS } from "../data";

export default function KeyMetrics() {
  const [activeMetricId, setActiveMetricId] = useState(METRICS[0].id);

  const activeMetric = METRICS.find((m) => m.id === activeMetricId) || METRICS[0];

  return (
    <div id="metrics-section" className="flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex justify-between items-baseline border-b border-[#222222] pb-2">
        <h2 className="text-[14px] font-medium text-[#E8E8E8]">Key Performance Metrics</h2>
        <span className="text-[12px] font-mono text-[#666666]">Interactive selection</span>
      </div>

      {/* Main Metric Display Block */}
      <div className="bg-[#141414] border border-[#222222] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="text-[12px] font-mono text-[#666666] uppercase tracking-wider mb-1 select-none">
            {activeMetric.label}
          </span>
          <p className="text-[14px] text-[#666666] max-w-[340px] leading-relaxed">
            {activeMetric.detail}
          </p>
        </div>

        {/* The sparingly used Accent Color (#3B82F6) specifically on the single key metric */}
        <div className="flex flex-col items-start md:items-end select-all">
          <span className="text-[40px] font-medium tracking-tight text-[#3B82F6] leading-none mb-1">
            {activeMetric.value}
          </span>
          <span className="text-[11px] font-mono text-[#666666]">Spotlight Node</span>
        </div>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {METRICS.map((metric) => {
          const isSelected = metric.id === activeMetricId;
          return (
            <button
              id={`metric-btn-${metric.id}`}
              key={metric.id}
              onClick={() => setActiveMetricId(metric.id)}
              className={`px-3 py-2 text-left border rounded-none transition-all cursor-pointer ${
                isSelected
                  ? "border-[#3B82F6] bg-[#141414] text-[#E8E8E8]"
                  : "border-[#222222] text-[#666666] hover:opacity-60"
              }`}
            >
              <div className="text-[11px] font-mono uppercase text-[#666666]">
                Select
              </div>
              <div className="text-[13px] font-medium truncate mt-0.5">
                {metric.label.split(" ").pop() || metric.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
