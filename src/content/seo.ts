import type { Locale } from "../i18n/types";

export interface SeoContent {
  siteName: string;
  title: string;
  description: string;
  imageAlt: string;
  locale: string;
  alternateLocale: string;
  personTitle: string;
}

export const seoContent = {
  es: {
    siteName: "Javier Espinosa Pico",
    title: "Javier Espinosa Pico | Full-Stack ERP, cloud, datos, QA e IA",
    description:
      "Portafolio de Javier Espinosa Pico, Full-Stack Developer empresarial especializado en ERP/e-commerce, cloud, datos, QA, automatizacion e IA aplicada.",
    imageAlt: "Javier Espinosa Pico, Full-Stack Developer empresarial para ERP, cloud, datos, QA e IA",
    locale: "es_CO",
    alternateLocale: "en_US",
    personTitle: "Full-Stack Developer empresarial especializado en ERP/e-commerce, cloud, datos, QA e IA aplicada",
  },
  en: {
    siteName: "Javier Espinosa Pico",
    title: "Javier Espinosa Pico | Full-Stack ERP, cloud, data, QA and AI",
    description:
      "Portfolio of Javier Espinosa Pico, an enterprise Full-Stack Developer specializing in ERP/e-commerce, cloud, data, QA, automation and applied AI.",
    imageAlt: "Javier Espinosa Pico, enterprise Full-Stack Developer for ERP, cloud, data, QA and AI",
    locale: "en_US",
    alternateLocale: "es_CO",
    personTitle: "Enterprise Full-Stack Developer specializing in ERP/e-commerce, cloud, data, QA and applied AI",
  },
} as const satisfies Record<Locale, SeoContent>;

export const defaultSeoLocale: Locale = "es";
