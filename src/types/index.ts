export type ProjectCategory = "web" | "mobile" | "dashboard" | "erp" | "ai" | "custom";

export interface ProjectLinks {
  website?: string;
  playStore?: string;
  appStore?: string;
}

export interface LocalizedText {
  en: string;
  ar: string;
}

// Raw project data as authored in src/data/projects.ts — title/description
// carry both languages so the site can switch with the active locale.
export interface RawProject {
  id: string;
  category: ProjectCategory;
  title: LocalizedText;
  description: LocalizedText;
  longDescription?: LocalizedText;
  image: string;
  tech: string[];
  tags: string[];
  year: string;
  featured?: boolean;
  links?: ProjectLinks;
}

// Resolved project for a single locale — what the UI components consume.
export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  image: string;
  tech: string[];
  tags: string[];
  year: string;
  featured?: boolean;
  links?: ProjectLinks;
  longDescription?: string;
}

export interface PortfolioCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: string;
  bg: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}
