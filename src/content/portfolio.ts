import { computed } from "vue";
import { locale } from "../i18n/store";

import type { Locale } from "../i18n/types";
import type { ProjectId } from "./types";

export type SkillGroupId =
  | "erp-ecommerce"
  | "enterprise-backend"
  | "frontend"
  | "data"
  | "cloud-devops"
  | "qa-security"
  | "applied-ai"
  | "analytics"
  | "methodologies"
  | "languages";

export interface MetricContent {
  value: string;
  label: string;
  detail?: string;
}

export interface SkillGroupContent {
  id: SkillGroupId;
  title: string;
  summary: string;
  items: string[];
  evidence: {
    label: string;
    slug: ProjectId;
  }[];
}

export interface EducationContent {
  institution: string;
  program: string;
  status: string;
  location: string;
  summary: string;
  tags: string[];
}

export interface CertificationContent {
  title: string;
  issuer: string;
  year: string;
  area: string;
}

export interface ExperienceSummaryContent {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  results: string[];
  technologies: string[];
}

export interface PortfolioContent {
  profile: {
    name: string;
    initials: string;
    role: string;
    specialty: string;
    availability: string;
    location: string;
    email: string;
    linkedin: string;
    whatsapp: {
      label: string;
      url: string;
    };
  };
  nav: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stack: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: MetricContent[];
  };
  about: {
    label: string;
    tagline: string;
    paragraphs: string[];
    tags: string[];
    terminal: {
      title: string;
      roleLabel: string;
      focusLabel: string;
      locationLabel: string;
      approachLabel: string;
      approach: string[];
    };
    highlights: {
      specialtiesLabel: string;
      certificationsLabel: string;
      languageLabel: string;
      certifications: string[];
      language: string;
    };
  };
  experience: {
    label: string;
    title: string;
    summary: string;
    items: ExperienceSummaryContent[];
  };
  skills: {
    label: string;
    title: string;
    summary: string;
    evidenceLabel: string;
    groups: SkillGroupContent[];
  };
  education: {
    label: string;
    title: string;
    summary: string;
    educationLabel: string;
    certificationsLabel: string;
    items: EducationContent[];
    certifications: CertificationContent[];
  };
  contact: {
    title: string;
    summary: string;
    responseTime: string;
    emailLabel: string;
    emailCta: string;
    linkedinLabel: string;
    linkedinCta: string;
    whatsappLabel: string;
    whatsappCta: string;
    channelsLabel: string;
  };
}

export const portfolioContent = {
  es: {
    profile: {
      name: "Javier Espinosa Pico",
      initials: "JEP",
      role: "Full-Stack Developer",
      specialty: "Full-Stack empresarial, ERP/e-commerce, cloud, datos, QA e IA aplicada",
      availability: "Disponible para proyectos y oportunidades remotas",
      location: "Bucaramanga, Colombia / Remoto",
      email: "javierspinoza2001@gmail.com",
      linkedin: "https://www.linkedin.com/in/javier-espinosa-pico-b1b223188/",
      whatsapp: {
        label: "+57 313 808 9035",
        url: "https://wa.me/573138089035",
      },
    },
    nav: {
      about: "Sobre mí",
      projects: "Casos",
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Educación",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Disponible desde Colombia / Remoto",
      title: "Full-Stack empresarial para operación, datos e IA",
      subtitle:
        "Construyo e integro sistemas empresariales con ERP/e-commerce, cloud, datos, QA e inteligencia artificial aplicada a procesos reales.",
      stack:
        "SAP Business One · Odoo.sh · Magento 2 · Laravel · React · Python · Django · FastAPI · AWS · Playwright",
      primaryCta: "Ver casos",
      secondaryCta: "Hablemos",
      metrics: [
        { value: "5+", label: "años", detail: "experiencia productiva" },
        { value: "10", label: "años de datos", detail: "históricos administrados" },
        { value: "40%", label: "menos manual", detail: "marketing automatizado con IA" },
        { value: "100%", label: "digitalización", detail: "clientes y citas en CRM" },
      ],
    },
    about: {
      label: "// perfil.empresarial",
      tagline:
        "Resuelvo problemas de procesos, datos e integración antes de escribir la primera línea de código.",
      paragraphs: [
        "Soy Javier Espinosa, desarrollador Full-Stack y estudiante de Ingeniería de Sistemas de Bucaramanga. Trabajo entre lógica de negocio, datos y arquitectura técnica para convertir operaciones difíciles de mantener en sistemas confiables.",
        "He trabajado con ERPs corporativos como SAP Business One y Odoo.sh, e-commerce con Magento 2, CRMs a medida, portales Java/Spring Boot y aplicaciones productivas con Laravel, React, Vue, Next.js, Python, Django y FastAPI.",
        "Mi foco actual es unir cloud, QA, analítica e IA aplicada con sistemas reales: datos consistentes, APIs claras, procesos auditables, despliegues mantenibles y equipos con menos fricción operativa.",
      ],
      tags: ["ERP/e-commerce", "Cloud", "Datos", "QA", "IA aplicada", "Inglés A2"],
      terminal: {
        title: "perfil_javier.json",
        roleLabel: "rol",
        focusLabel: "enfoque",
        locationLabel: "base",
        approachLabel: "metodo",
        approach: ["mapear proceso", "ordenar datos", "integrar sistemas", "codificar con criterio"],
      },
      highlights: {
        specialtiesLabel: "Especialidades",
        certificationsLabel: "Certificaciones destacadas",
        languageLabel: "Comunicación",
        certifications: ["Odoo 19", "Agentes de IA", "Vue.js 3", "Laravel API", "FrontEnd Web Developer"],
        language: "Español nativo · Inglés A2",
      },
    },
    experience: {
      label: "// experiencia.resumen",
      title: "Sistemas reales, procesos críticos",
      summary:
        "Trayectoria cronológica en productos internos, integraciones empresariales, CRM a medida y automatizaciones con IA en entornos productivos.",
      items: [
        {
          company: "Industrias Bicicletas Milan S.A.",
          role: "Full-Stack Developer",
          period: "Jun 2024 - May 2026",
          location: "Colombia · Presencial",
          responsibilities: [
            "Liderar bajo Scrum la personalización de Odoo.sh, la administración de SAP Business One y la integración con Magento 2.",
            "Arquitectar servicios con Python, Django, FastAPI y PostgreSQL/SQL para sincronización, datos históricos y operación e-commerce.",
            "Construir automatizaciones con LLMs, RAG, agentes autónomos, Vercel AI SDK, CrewAI, PydanticAI, LangGraph y prácticas MLOps.",
            "Validar comportamiento, rendimiento y medición con Playwright, k6, Google Tag Manager, Google Analytics y SEO técnico.",
          ],
          results: [
            "Administración e integración de 10 años de datos históricos para operación ERP/e-commerce.",
            "Reducción verificable del 40% del trabajo manual en procesos de marketing automatizados con IA.",
            "Procesos de inventario, medición y despliegue más trazables sin exponer información privada del negocio.",
          ],
          technologies: [
            "Odoo.sh",
            "SAP Business One",
            "Magento 2",
            "Python",
            "Django",
            "FastAPI",
            "React",
            "Node.js",
            "Vercel AI SDK",
            "CrewAI",
            "PydanticAI",
            "LangGraph",
            "MLOps",
            "Docker",
            "Linux",
            "AWS",
            "SSH",
            "GitHub",
            "PostgreSQL",
            "SQL",
            "Google Analytics",
            "Playwright",
            "k6",
            "Scrum",
          ],
        },
        {
          company: "Soluciones Isavital SAS",
          role: "Freelance Full-Stack",
          period: "Dic 2022 - May 2024",
          location: "Colombia · Remoto",
          responsibilities: [
            "Arquitectar y desarrollar desde cero un CRM a medida con Laravel, Livewire, MySQL, roles, permisos y gestión de citas.",
            "Construir un portal secundario con React, Java, Spring Boot, Spring Data JPA, Spring Security JWT, Lombok, JUnit y Swagger/OpenAPI.",
            "Diseñar módulos automatizados con IA para trazabilidad postventa, seguimiento predictivo y reducción de tiempos de respuesta.",
            "Administrar despliegues continuos en servidores Linux con Jira, Git y flujos de trabajo colaborativos.",
          ],
          results: [
            "Digitalización del 100% de la gestión de clientes y citas que antes dependía de registros manuales.",
            "Operación interna con mejor trazabilidad, roles claros y menor dependencia de hojas de cálculo.",
          ],
          technologies: [
            "Laravel",
            "Livewire",
            "React",
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "JUnit",
            "Swagger/OpenAPI",
            "TypeScript",
            "JavaScript",
            "CSS3",
            "Tailwind CSS",
            "MySQL",
            "Jira",
            "Git",
            "Linux",
            "CI/CD",
          ],
        },
        {
          company: "PC Ingeniería de Software SAS",
          role: "Full-Stack Developer",
          period: "Oct 2021 - Oct 2022",
          location: "Colombia · Híbrido",
          responsibilities: [
            "Desarrollar sistemas de reservas hoteleras con pasarelas de pago y control de acceso basado en roles.",
            "Construir plataformas de cadena de suministro, importación y trazabilidad de inventario con Vue.js, JavaScript y Bootstrap.",
            "Implementar aplicaciones de sostenibilidad con Next.js, React, SSR, trazabilidad de residuos, recolección y reutilización.",
          ],
          results: [
            "Plataformas web empresariales listas para operación, trazabilidad y gestión interna.",
            "Experiencia transversal en backend, frontend y flujos de producto.",
          ],
          technologies: ["Laravel", "Livewire", "Next.js", "Vue.js", "React", "JavaScript", "MySQL", "Bootstrap", "RBAC"],
        },
        {
          company: "SENA - Etapa Productiva",
          role: "Full-Stack Developer",
          period: "Mar 2021 - Ago 2021",
          location: "Colombia · Presencial",
          responsibilities: [
            "Diseñar desde cero una plataforma web de control de acceso y monitoreo de asistencia estudiantil.",
            "Construir backend en Laravel y frontend reactivo en Vue.js con Bootstrap.",
            "Preparar la aplicación para operar en horas pico, reducir tiempos de ingreso y adaptarse a múltiples dispositivos.",
          ],
          results: [
            "Digitalización administrativa de registros de ingreso y asistencia en un entorno institucional real.",
            "Base técnica sólida en Laravel, Vue, PHP, MySQL, estado reactivo y diseño responsive.",
          ],
          technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Bootstrap"],
        },
      ],
    },
    skills: {
      label: "// stack.operativo",
      title: "Habilidades agrupadas por impacto",
      summary:
        "Una matriz verificable para conectar tecnologías, experiencias y resultados de negocio sin perder mantenibilidad.",
      evidenceLabel: "Evidencia en casos",
      groups: [
        {
          id: "erp-ecommerce",
          title: "ERP / e-commerce",
          summary: "Operación, inventario, sincronización y comercio conectado.",
          items: ["SAP Business One", "Odoo / Odoo.sh", "Magento 2", "Inventario", "Integración ERP"],
          evidence: [
            { label: "ERP/e-commerce Milan", slug: "erp-ecommerce" },
            { label: "IA marketing e-commerce", slug: "marketing-ai" },
          ],
        },
        {
          id: "enterprise-backend",
          title: "Backend empresarial",
          summary: "APIs, middleware, permisos y lógica de negocio mantenible.",
          items: [
            "Java",
            "Spring Boot",
            "Laravel",
            "Livewire",
            "Python",
            "Django",
            "FastAPI",
            "Node.js",
            "APIs RESTful",
          ],
          evidence: [
            { label: "CRM Isavital", slug: "crm-isavital" },
            { label: "Reservas hoteleras", slug: "pc-hotel-booking" },
          ],
        },
        {
          id: "frontend",
          title: "Frontend",
          summary: "Interfaces productivas, dashboards y flujos internos claros.",
          items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
          evidence: [
            { label: "Portal Java/Spring", slug: "crm-isavital" },
            { label: "Sostenibilidad SSR", slug: "pc-sustainability" },
            { label: "Control SENA", slug: "sena-access-control" },
          ],
        },
        {
          id: "data",
          title: "Datos y analítica",
          summary: "Modelado, consultas, migración y lectura operativa del negocio.",
          items: ["PostgreSQL", "MySQL", "SQL", "Procedimientos almacenados", "10 años de datos históricos", "Power BI"],
          evidence: [
            { label: "Datos ERP", slug: "erp-ecommerce" },
            { label: "Logística e inventario", slug: "pc-logistics" },
          ],
        },
        {
          id: "cloud-devops",
          title: "Cloud / DevOps",
          summary: "Despliegues, servidores y pipelines para sistemas productivos.",
          items: ["AWS", "Docker", "Linux", "SSH", "Git", "GitHub", "CI/CD", "Odoo.sh"],
          evidence: [
            { label: "Milan productivo", slug: "erp-ecommerce" },
            { label: "Despliegues Isavital", slug: "crm-isavital" },
          ],
        },
        {
          id: "qa-security",
          title: "QA, testing y seguridad",
          summary: "Validación funcional, rendimiento, permisos y contratos técnicos.",
          items: ["Playwright", "k6", "JUnit", "Mockito", "Spring Security", "JWT", "Swagger/OpenAPI", "RBAC"],
          evidence: [
            { label: "QA e-commerce", slug: "erp-ecommerce" },
            { label: "Portal seguro", slug: "crm-isavital" },
            { label: "RBAC reservas", slug: "pc-hotel-booking" },
          ],
        },
        {
          id: "applied-ai",
          title: "IA aplicada",
          summary: "Automatización aplicada a procesos reales con contexto y trazabilidad.",
          items: [
            "RAG",
            "Vercel AI SDK",
            "CrewAI",
            "PydanticAI",
            "LangGraph",
            "MLOps",
            "Cursor",
            "Claude Code como herramienta",
          ],
          evidence: [
            { label: "IA marketing", slug: "marketing-ai" },
            { label: "Postventa predictiva", slug: "crm-isavital" },
          ],
        },
        {
          id: "analytics",
          title: "Analítica y marketing técnico",
          summary: "Medición, SEO, rendimiento y lectura de impacto operativo.",
          items: ["Google Tag Manager", "Google Analytics", "SEO", "Power BI", "Reducción de tiempos de carga"],
          evidence: [
            { label: "Medición Milan", slug: "erp-ecommerce" },
            { label: "Automatización SEO", slug: "marketing-ai" },
          ],
        },
        {
          id: "methodologies",
          title: "Metodologías y gestión",
          summary: "Trabajo iterativo, documentación y análisis antes de construir.",
          items: ["Scrum", "Jira", "Documentación técnica", "Análisis de procesos"],
          evidence: [
            { label: "Scrum Milan", slug: "erp-ecommerce" },
            { label: "Jira Isavital", slug: "crm-isavital" },
          ],
        },
        {
          id: "languages",
          title: "Idiomas",
          summary: "Comunicación para equipos locales y colaboración remota.",
          items: ["Español nativo", "Inglés A2"],
          evidence: [
            { label: "CRM Isavital", slug: "crm-isavital" },
          ],
        },
      ],
    },
    education: {
      label: "// formacion.validada",
      title: "Educación y certificaciones",
      summary: "Formación formal y actualización continua en desarrollo, ERP e IA aplicada.",
      educationLabel: "Educación formal",
      certificationsLabel: "Certificaciones y aprendizaje reciente",
      items: [
        {
          institution: "Universidad Nacional Abierta y a Distancia",
          program: "Ingeniería de Sistemas",
          status: "En curso",
          location: "UNAD · Colombia",
          summary: "Base formal en ingeniería, sistemas de información, datos y arquitectura de software.",
          tags: ["Ingeniería", "Sistemas", "Arquitectura", "Datos"],
        },
        {
          institution: "Servicio Nacional de Aprendizaje",
          program: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
          status: "Graduado · Sep 2021",
          location: "SENA · Colombia",
          summary: "Formación aplicada en análisis, desarrollo web, bases de datos y entrega de software.",
          tags: ["SENA", "Desarrollo web", "Bases de datos", "Producto"],
        },
      ],
      certifications: [
        { title: "Odoo 19", issuer: "Odoo", year: "2026", area: "ERP" },
        { title: "Agentes de IA", issuer: "Udemy", year: "2025", area: "IA generativa" },
        { title: "Vue.js 3", issuer: "Udemy", year: "2023", area: "Frontend" },
        { title: "Creación de API REST con Laravel y MySQL", issuer: "Udemy", year: "2022", area: "Backend" },
        { title: "FrontEnd Web Developer", issuer: "Udemy", year: "2022", area: "Frontend" },
      ],
    },
    contact: {
      title: "Hablemos de tu operación",
      summary:
        "Si tu empresa necesita integrar sistemas, optimizar un ERP, automatizar procesos con IA o construir una plataforma robusta desde cero, hablemos.",
      responseTime: "Respondo normalmente en menos de 24 horas.",
      emailLabel: "Email directo",
      emailCta: "Enviar propuesta formal",
      linkedinLabel: "LinkedIn",
      linkedinCta: "Conectar profesionalmente",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Conversación rápida",
      channelsLabel: "Canales de contacto",
    },
  },
  en: {
    profile: {
      name: "Javier Espinosa Pico",
      initials: "JEP",
      role: "Full-Stack Developer",
      specialty: "Enterprise full-stack, ERP/e-commerce, cloud, data, QA and applied AI",
      availability: "Available for remote projects and opportunities",
      location: "Bucaramanga, Colombia / Remote",
      email: "javierspinoza2001@gmail.com",
      linkedin: "https://www.linkedin.com/in/javier-espinosa-pico-b1b223188/",
      whatsapp: {
        label: "+57 313 808 9035",
        url: "https://wa.me/573138089035",
      },
    },
    nav: {
      about: "About",
      projects: "Cases",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Available from Colombia / Remote",
      title: "Enterprise full-stack for operations, data and AI",
      subtitle:
        "I build and integrate enterprise systems with ERP/e-commerce, cloud, data, QA and artificial intelligence applied to real processes.",
      stack:
        "SAP Business One · Odoo.sh · Magento 2 · Laravel · React · Python · Django · FastAPI · AWS · Playwright",
      primaryCta: "View cases",
      secondaryCta: "Let's talk",
      metrics: [
        { value: "5+", label: "years", detail: "production experience" },
        { value: "10", label: "years of data", detail: "historical records managed" },
        { value: "40%", label: "less manual", detail: "AI-automated marketing" },
        { value: "100%", label: "digitized", detail: "customers and appointments in CRM" },
      ],
    },
    about: {
      label: "// business.profile",
      tagline:
        "I solve process, data and integration problems before writing the first line of code.",
      paragraphs: [
        "I am Javier Espinosa, a full-stack developer and systems engineering student from Bucaramanga. I work between business logic, data and technical architecture to turn hard-to-maintain operations into reliable systems.",
        "I have worked with corporate ERPs such as SAP Business One and Odoo.sh, e-commerce with Magento 2, custom CRMs, Java/Spring Boot portals and production applications with Laravel, React, Vue, Next.js, Python, Django and FastAPI.",
        "My current focus is connecting cloud, QA, analytics and applied AI with real systems: consistent data, clear APIs, auditable processes, maintainable deployments and teams with less operational friction.",
      ],
      tags: ["ERP/e-commerce", "Cloud", "Data", "QA", "Applied AI", "English A2"],
      terminal: {
        title: "javier_profile.json",
        roleLabel: "role",
        focusLabel: "focus",
        locationLabel: "base",
        approachLabel: "method",
        approach: ["map process", "clean data", "integrate systems", "code with judgment"],
      },
      highlights: {
        specialtiesLabel: "Specialties",
        certificationsLabel: "Featured certifications",
        languageLabel: "Communication",
        certifications: ["Odoo 19", "AI Agents", "Vue.js 3", "Laravel API", "FrontEnd Web Developer"],
        language: "Native Spanish · English A2",
      },
    },
    experience: {
      label: "// experience.summary",
      title: "Real systems, critical processes",
      summary:
        "A chronological path through internal products, enterprise integrations, custom CRMs and AI automations in production environments.",
      items: [
        {
          company: "Industrias Bicicletas Milan S.A.",
          role: "Full-Stack Developer",
          period: "Jun 2024 - May 2026",
          location: "Colombia · On-site",
          responsibilities: [
            "Lead Odoo.sh customization, SAP Business One administration and Magento 2 integration under Scrum.",
            "Architect services with Python, Django, FastAPI and PostgreSQL/SQL for synchronization, historical data and e-commerce operations.",
            "Build automations with LLMs, RAG, autonomous agents, Vercel AI SDK, CrewAI, PydanticAI, LangGraph and MLOps practices.",
            "Validate behavior, performance and measurement with Playwright, k6, Google Tag Manager, Google Analytics and technical SEO.",
          ],
          results: [
            "Managed and integrated 10 years of historical data for ERP/e-commerce operations.",
            "Verified 40% reduction in manual work across AI-automated marketing processes.",
            "More traceable inventory, measurement and deployment workflows without exposing private business information.",
          ],
          technologies: [
            "Odoo.sh",
            "SAP Business One",
            "Magento 2",
            "Python",
            "Django",
            "FastAPI",
            "React",
            "Node.js",
            "Vercel AI SDK",
            "CrewAI",
            "PydanticAI",
            "LangGraph",
            "MLOps",
            "Docker",
            "Linux",
            "AWS",
            "SSH",
            "GitHub",
            "PostgreSQL",
            "SQL",
            "Google Analytics",
            "Playwright",
            "k6",
            "Scrum",
          ],
        },
        {
          company: "Soluciones Isavital SAS",
          role: "Freelance Full-Stack",
          period: "Dec 2022 - May 2024",
          location: "Colombia · Remote",
          responsibilities: [
            "Architect and develop a custom CRM from scratch with Laravel, Livewire, MySQL, roles, permissions and appointment management.",
            "Build a secondary portal with React, Java, Spring Boot, Spring Data JPA, Spring Security JWT, Lombok, JUnit and Swagger/OpenAPI.",
            "Design AI-powered modules for after-sales traceability, predictive follow-up and response-time reduction.",
            "Manage continuous deployments on Linux servers with Jira, Git and collaborative workflows.",
          ],
          results: [
            "Digitized 100% of customer and appointment management that previously depended on manual records.",
            "Internal operation with better traceability, clear roles and less dependence on spreadsheets.",
          ],
          technologies: [
            "Laravel",
            "Livewire",
            "React",
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "JUnit",
            "Swagger/OpenAPI",
            "TypeScript",
            "JavaScript",
            "CSS3",
            "Tailwind CSS",
            "MySQL",
            "Jira",
            "Git",
            "Linux",
            "CI/CD",
          ],
        },
        {
          company: "PC Ingeniería de Software SAS",
          role: "Full-Stack Developer",
          period: "Oct 2021 - Oct 2022",
          location: "Colombia · Hybrid",
          responsibilities: [
            "Develop hotel booking systems with payment gateways and role-based access control.",
            "Build supply-chain, import and inventory-traceability platforms with Vue.js, JavaScript and Bootstrap.",
            "Implement sustainability applications with Next.js, React, SSR, waste traceability, collection and reuse workflows.",
          ],
          results: [
            "Business web platforms ready for operation, traceability and internal management.",
            "Cross-functional experience across backend, frontend and product workflows.",
          ],
          technologies: ["Laravel", "Livewire", "Next.js", "Vue.js", "React", "JavaScript", "MySQL", "Bootstrap", "RBAC"],
        },
        {
          company: "SENA - Productive Stage",
          role: "Full-Stack Developer",
          period: "Mar 2021 - Aug 2021",
          location: "Colombia · On-site",
          responsibilities: [
            "Design a student access-control and attendance-monitoring web platform from scratch.",
            "Build the backend in Laravel and the reactive frontend in Vue.js with Bootstrap.",
            "Prepare the application to operate during peak hours, reduce entry times and adapt to multiple device types.",
          ],
          results: [
            "Administrative digitization of entry and attendance records in a real institutional environment.",
            "Solid technical base in Laravel, Vue, PHP, MySQL, reactive state and responsive design.",
          ],
          technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "Bootstrap"],
        },
      ],
    },
    skills: {
      label: "// operational.stack",
      title: "Skills grouped by impact",
      summary:
        "A verifiable matrix to connect technologies, experience and business outcomes without losing maintainability.",
      evidenceLabel: "Case evidence",
      groups: [
        {
          id: "erp-ecommerce",
          title: "ERP / e-commerce",
          summary: "Operations, inventory, synchronization and connected commerce.",
          items: ["SAP Business One", "Odoo / Odoo.sh", "Magento 2", "Inventory", "ERP integration"],
          evidence: [
            { label: "Milan ERP/e-commerce", slug: "erp-ecommerce" },
            { label: "E-commerce marketing AI", slug: "marketing-ai" },
          ],
        },
        {
          id: "enterprise-backend",
          title: "Enterprise backend",
          summary: "APIs, middleware, permissions and maintainable business logic.",
          items: [
            "Java",
            "Spring Boot",
            "Laravel",
            "Livewire",
            "Python",
            "Django",
            "FastAPI",
            "Node.js",
            "RESTful APIs",
          ],
          evidence: [
            { label: "Isavital CRM", slug: "crm-isavital" },
            { label: "Hotel booking", slug: "pc-hotel-booking" },
          ],
        },
        {
          id: "frontend",
          title: "Frontend",
          summary: "Productive interfaces, dashboards and clear internal workflows.",
          items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
          evidence: [
            { label: "Java/Spring portal", slug: "crm-isavital" },
            { label: "Sustainability SSR", slug: "pc-sustainability" },
            { label: "SENA control", slug: "sena-access-control" },
          ],
        },
        {
          id: "data",
          title: "Data and analytics",
          summary: "Modeling, queries, migration and operational business insight.",
          items: ["PostgreSQL", "MySQL", "SQL", "Stored procedures", "10 years of historical data", "Power BI"],
          evidence: [
            { label: "ERP data", slug: "erp-ecommerce" },
            { label: "Logistics and inventory", slug: "pc-logistics" },
          ],
        },
        {
          id: "cloud-devops",
          title: "Cloud / DevOps",
          summary: "Deployments, servers and pipelines for production systems.",
          items: ["AWS", "Docker", "Linux", "SSH", "Git", "GitHub", "CI/CD", "Odoo.sh"],
          evidence: [
            { label: "Milan production", slug: "erp-ecommerce" },
            { label: "Isavital deployments", slug: "crm-isavital" },
          ],
        },
        {
          id: "qa-security",
          title: "QA, testing and security",
          summary: "Functional validation, performance, permissions and technical contracts.",
          items: ["Playwright", "k6", "JUnit", "Mockito", "Spring Security", "JWT", "Swagger/OpenAPI", "RBAC"],
          evidence: [
            { label: "E-commerce QA", slug: "erp-ecommerce" },
            { label: "Secure portal", slug: "crm-isavital" },
            { label: "Booking RBAC", slug: "pc-hotel-booking" },
          ],
        },
        {
          id: "applied-ai",
          title: "Applied AI",
          summary: "Automation applied to real processes with context and traceability.",
          items: [
            "RAG",
            "Vercel AI SDK",
            "CrewAI",
            "PydanticAI",
            "LangGraph",
            "MLOps",
            "Cursor",
            "Claude Code as a tool",
          ],
          evidence: [
            { label: "Marketing AI", slug: "marketing-ai" },
            { label: "Predictive after-sales", slug: "crm-isavital" },
          ],
        },
        {
          id: "analytics",
          title: "Analytics and technical marketing",
          summary: "Measurement, SEO, performance and operational impact insight.",
          items: ["Google Tag Manager", "Google Analytics", "SEO", "Power BI", "Load-time reduction"],
          evidence: [
            { label: "Milan measurement", slug: "erp-ecommerce" },
            { label: "SEO automation", slug: "marketing-ai" },
          ],
        },
        {
          id: "methodologies",
          title: "Methodologies and management",
          summary: "Iterative work, documentation and analysis before building.",
          items: ["Scrum", "Jira", "Technical documentation", "Process analysis"],
          evidence: [
            { label: "Milan Scrum", slug: "erp-ecommerce" },
            { label: "Isavital Jira", slug: "crm-isavital" },
          ],
        },
        {
          id: "languages",
          title: "Languages",
          summary: "Communication for local teams and remote collaboration.",
          items: ["Native Spanish", "English A2"],
          evidence: [
            { label: "Isavital CRM", slug: "crm-isavital" },
          ],
        },
      ],
    },
    education: {
      label: "// education.validated",
      title: "Education and certifications",
      summary: "Formal education and continuous learning in development, ERP and applied AI.",
      educationLabel: "Formal education",
      certificationsLabel: "Certifications and recent learning",
      items: [
        {
          institution: "Universidad Nacional Abierta y a Distancia",
          program: "Systems Engineering",
          status: "In progress",
          location: "UNAD · Colombia",
          summary: "Formal foundation in engineering, information systems, data and software architecture.",
          tags: ["Engineering", "Systems", "Architecture", "Data"],
        },
        {
          institution: "Servicio Nacional de Aprendizaje",
          program: "Technologist in Information Systems Analysis and Development",
          status: "Graduated · Sep 2021",
          location: "SENA · Colombia",
          summary: "Applied training in analysis, web development, databases and software delivery.",
          tags: ["SENA", "Web development", "Databases", "Product"],
        },
      ],
      certifications: [
        { title: "Odoo 19", issuer: "Odoo", year: "2026", area: "ERP" },
        { title: "AI Agents", issuer: "Udemy", year: "2025", area: "Generative AI" },
        { title: "Vue.js 3", issuer: "Udemy", year: "2023", area: "Frontend" },
        { title: "REST API Creation with Laravel and MySQL", issuer: "Udemy", year: "2022", area: "Backend" },
        { title: "FrontEnd Web Developer", issuer: "Udemy", year: "2022", area: "Frontend" },
      ],
    },
    contact: {
      title: "Let's talk about your operation",
      summary:
        "If your company needs system integration, ERP optimization, AI automation or a robust platform built from scratch, let's talk.",
      responseTime: "I usually reply in under 24 hours.",
      emailLabel: "Direct email",
      emailCta: "Send a formal proposal",
      linkedinLabel: "LinkedIn",
      linkedinCta: "Connect professionally",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Start a quick conversation",
      channelsLabel: "Contact channels",
    },
  },
} as const satisfies Record<Locale, PortfolioContent>;

export const usePortfolioContent = () => {
  return computed(() => portfolioContent[locale.value ?? "es"]);
};
