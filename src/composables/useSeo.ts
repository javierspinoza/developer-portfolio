import { watch } from "vue";
import { locale } from "../i18n/store";
import { LOCALES } from "../i18n/constants";
import { seoContent, defaultSeoLocale } from "../content/seo";
import { portfolioContent } from "../content/portfolio";
import { projectId, path } from "./useRouteObserver";
import { projectModules } from "../content/projects";

import type { Locale } from "../i18n/types";
import type { ProjectContent } from "../content/types";

const defaultImage = "/meta/og-image.svg";
const siteUrl = import.meta.env.VITE_SITE_URL;

const normalizeBaseUrl = () => {
  if (siteUrl) return String(siteUrl).replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "";
};

const absoluteUrl = (pathname: string) => {
  const baseUrl = normalizeBaseUrl();
  if (!baseUrl) return pathname;
  return `${baseUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
};

const setNamedMeta = (name: string, content: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const setPropertyMeta = (property: string, content: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const setLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let tag = document.querySelector<HTMLLinkElement>(selector);
  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    if (hreflang) tag.hreflang = hreflang;
    document.head.appendChild(tag);
  }
  tag.href = href;
};

const getProjectContent = (currentLocale: Locale): ProjectContent | null => {
  const currentProjectId = projectId.value;
  if (!currentProjectId) return null;

  const module = projectModules[currentLocale][currentProjectId];
  return (module?.default ?? module?.project ?? null) as ProjectContent | null;
};

const buildStructuredData = (currentLocale: Locale, pageUrl: string, project: ProjectContent | null) => {
  const seo = seoContent[currentLocale];
  const profile = portfolioContent[currentLocale].profile;
  const homeUrl = absoluteUrl("/");
  const personId = `${homeUrl}#javier-espinosa-pico`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: homeUrl,
        jobTitle: seo.personTitle,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bucaramanga",
          addressCountry: "CO",
        },
        sameAs: [profile.linkedin, profile.whatsapp.url],
        knowsAbout: [
          "Full-Stack Development",
          "ERP",
          "CRM",
          "SAP Business One",
          "Odoo",
          "Magento",
          "E-commerce",
          "Cloud Architecture",
          "AWS",
          "Docker",
          "Data Engineering",
          "PostgreSQL",
          "QA Automation",
          "Playwright",
          "k6",
          "Java",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "JUnit",
          "Swagger/OpenAPI",
          "Python",
          "Django",
          "FastAPI",
          "Artificial Intelligence",
          "Automation",
          "Google Tag Manager",
          "Google Analytics",
          "Power BI",
          "Supply chain",
          "Access control",
          "Sustainability platforms",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${homeUrl}#website`,
        name: seo.siteName,
        url: homeUrl,
        description: seo.description,
        inLanguage: LOCALES[currentLocale].iso,
        publisher: {
          "@id": personId,
        },
      },
      ...(project
        ? [
            {
              "@type": "CreativeWork",
              "@id": `${pageUrl}#case-study`,
              name: project.title,
              headline: project.title,
              description: project.summary,
              url: pageUrl,
              inLanguage: LOCALES[currentLocale].iso,
              creator: {
                "@id": personId,
              },
              about: [...project.stack, project.category],
              keywords: project.tags.join(", "),
              isAccessibleForFree: true,
            },
          ]
        : []),
    ],
  };
};

const setStructuredData = (currentLocale: Locale, pageUrl: string, project: ProjectContent | null) => {
  const id = "person-structured-data";
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(buildStructuredData(currentLocale, pageUrl, project));
};

export const useSeo = () => {
  watch(
    [locale, path, projectId],
    () => {
      const currentLocale = locale.value ?? defaultSeoLocale;
      const seo = seoContent[currentLocale];
      const project = getProjectContent(currentLocale);
      const pageTitle = project ? `${project.title} | ${seo.siteName}` : seo.title;
      const pageDescription = project?.summary ?? seo.description;
      const pagePath = path.value || "/";
      const pageUrl = absoluteUrl(pagePath);
      const imageUrl = absoluteUrl(defaultImage);

      document.documentElement.lang = LOCALES[currentLocale].iso;
      document.title = pageTitle;

      setNamedMeta("description", pageDescription);
      setNamedMeta("robots", "index, follow");
      setNamedMeta("twitter:card", "summary_large_image");
      setNamedMeta("twitter:title", pageTitle);
      setNamedMeta("twitter:description", pageDescription);
      setNamedMeta("twitter:image", imageUrl);
      setNamedMeta("twitter:image:alt", seo.imageAlt);
      setNamedMeta("theme-color", "#111827");

      setPropertyMeta("og:site_name", seo.siteName);
      setPropertyMeta("og:title", pageTitle);
      setPropertyMeta("og:description", pageDescription);
      setPropertyMeta("og:type", project ? "article" : "website");
      setPropertyMeta("og:url", pageUrl);
      setPropertyMeta("og:locale", seo.locale);
      setPropertyMeta("og:locale:alternate", seo.alternateLocale);
      setPropertyMeta("og:image", imageUrl);
      setPropertyMeta("og:image:alt", seo.imageAlt);
      setPropertyMeta("og:image:width", "1200");
      setPropertyMeta("og:image:height", "630");

      setLink("canonical", pageUrl);
      setLink("alternate", pageUrl, LOCALES.es.iso);
      setLink("alternate", pageUrl, LOCALES.en.iso);
      setLink("alternate", pageUrl, "x-default");

      setStructuredData(currentLocale, pageUrl, project);
    },
    { immediate: true },
  );
};
