
import { LucideIcon } from 'lucide-react';

export interface Scripture {
  text: string;
  reference: string;
  translation: string;
}

export interface Resource {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  type: "download" | "link";
}

export interface StudyGuide {
  id: number;
  title: string;
  description: string;
  preview: string;
  month: string;
  mainScripture: Scripture;
  context: string;
  keyPoints: string[];
  applicationPoints: string[];
  discussionQuestions: string[];
  relatedScriptures: Scripture[];
  resources: Resource[];
}

export const MONTHS = {
  JANUARY_2025: "january-2025",
  FEBRUARY_2025: "february-2025",
  MARCH_2025: "march-2025",
  APRIL_2025: "april-2025",
  MAY_2025: "may-2025",
  JUNE_2025: "june-2025",
  JULY_2025: "july-2025",
  AUGUST_2025: "august-2025",
  SEPTEMBER_2025: "september-2025",
  OCTOBER_2025: "october-2025",
  NOVEMBER_2025: "november-2025",
  DECEMBER_2025: "december-2025",
};
