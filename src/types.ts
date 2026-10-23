/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  name: string;
  category: string;
  filterGroup: string;
  description: string;
  year: string;
  isLive: boolean;
  url?: string;
  github?: string;
  liveLinks?: { label: string; url: string }[];
  githubLinks?: { label: string; url: string }[];
  stack: string[];
  highlights: string[];
  architectureSpecs?: string[];
  glowColor: string;
  accentGradient: string;
  accentColor: string;
  id?: string;
  title?: string;
  tags?: string[];
}

export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  url?: string;
}

export interface StackCategory {
  title: string;
  items: string[];
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string; // ISO or human format
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  detail: string;
}
