import type { ProjectPreview } from "../../../content/types";

export const projectFilterIds = [
  "all",
  "erp",
  "crm",
  "ai",
  "java",
  "fullstack",
  "ecommerce",
  "access",
  "logistics",
  "sustainability",
  "business",
  "automation",
  "qa",
  "analytics",
] as const;

export type ProjectFilterId = (typeof projectFilterIds)[number];

export const filterProjectPreviews = (previews: ProjectPreview[], filterId: ProjectFilterId) => {
  if (filterId === "all") return previews;

  return previews.filter((preview) => preview.filters.includes(filterId));
};
