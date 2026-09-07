/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  url?: string;
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
