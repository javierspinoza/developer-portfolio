import { projectIds } from "./projects/index";

import type { TagVariant } from "../components/tagVariants";
import type { ProjectComponent } from "../features/projects/types";
import type { ProjectFilterId } from "../features/projects/utils/projectFilters";

export type ProjectId = (typeof projectIds)[number];

export interface ProjectContent {
  title: string;
  category: string;
  company: string;
  summary: string;
  theme: "light" | "dark";
  tags: TagVariant[];
  results: string[];
  stack: string[];
  status: {
    demo: "public" | "private" | "none";
    code: "public" | "private" | "none";
    label: string;
  };
  confidential?: boolean;
  description?: string;
  videoBorder?: boolean;
  live?: string;
  source?: string;
  components?: ProjectComponent[];
}

export interface SkillContent {
  name: string;
  bullets: string[];
}

export interface ProjectPreview {
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  filters: Exclude<ProjectFilterId, "all">[];
  company: string;
  description: string;
  results: string[];
  tags: TagVariant[];
  status: string;
  confidential?: boolean;
}
