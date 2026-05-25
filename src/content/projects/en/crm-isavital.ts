import type { ProjectContent } from "../../types";

export default {
  title: "CRM and Java portal to digitize Isavital operations",
  category: "CRM / Java / Full-Stack",
  company: "Soluciones Isavital SAS",
  summary:
    "CRM built from scratch plus a connected portal to replace spreadsheets, organize customers and appointments, and enable predictive after-sales follow-up.",
  theme: "light",
  tags: ["laravel", "livewire", "mysql", "react", "java", "spring", "typescript", "tailwind", "linux", "gray"],
  results: [
    "100% of customer and appointment management digitized.",
    "CRM with roles, permissions, traceability and continuous deployment.",
    "React/Spring Boot portal with JWT security, tests and OpenAPI documentation.",
  ],
  stack: [
    "Laravel",
    "Livewire",
    "PHP",
    "MySQL",
    "Jira",
    "Git",
    "TypeScript",
    "JavaScript",
    "CSS3",
    "Tailwind CSS",
    "React",
    "Java",
    "Spring Boot",
    "Lombok",
    "Spring Data JPA",
    "Spring Security",
    "JWT",
    "JUnit",
    "Swagger/OpenAPI",
    "Linux servers",
    "Continuous deployment",
  ],
  status: {
    demo: "private",
    code: "private",
    label: "Private client project: no public links",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Operational digitization case for Soluciones Isavital SAS: a custom CRM replaced spreadsheets and manual records with traceable flows for customers, appointments, roles, permissions and after-sales follow-up.<br/><br/>The project also included a secondary portal with React and Java/Spring Boot to separate experiences, strengthen security and document APIs without exposing code, internal data or client access.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "Isavital needed to move from an operation supported by spreadsheets, manual records and scattered communication to a system with reliable information for customers, scheduling, owners and after-sales. The goal was for each team to see the real state of the operation without depending on isolated files.",
      },
    },
    {
      type: "text",
      props: {
        title: "Challenge",
        text: "The challenge was to digitize 100% of customer and appointment management without disrupting daily operations. The solution had to cover internal roles, permissions, change traceability, fast queries, scheduling, after-sales tracking and a technical base ready for frequent deployments on Linux servers.",
      },
    },
    {
      type: "list",
      props: {
        title: "Operational CRM",
        items: [
          "Laravel and Livewire as the base for business modules with controlled reactivity.",
          "MySQL to model customers, appointments, users, statuses, histories and after-sales tracking.",
          "TypeScript, JavaScript, CSS3 and Tailwind CSS for clearer and more maintainable internal interfaces.",
          "Roles and permissions to separate responsibilities across operations, administration and management.",
          "Jira and Git to organize deliveries, task tracking and change control.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "React and Java/Spring Boot portal",
        items: [
          "React for an experience decoupled from the main CRM when the flow required it.",
          "Java and Spring Boot to expose backend services with enterprise structure.",
          "Lombok and Spring Data JPA to reduce repetition and organize data access.",
          "Spring Security and JWT to protect routes, sessions and permission-based access.",
          "JUnit to validate critical behavior and Swagger/OpenAPI to document API contracts.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "After-sales AI automation",
        items: [
          "Predictive follow-up to prioritize customers and actions after service.",
          "Centralized statuses, reminders and customer context to reduce response times.",
          "Support for retention and satisfaction through operational signals, without publishing unverified metrics.",
          "Automation used as an extension of the commercial workflow, not as an isolated feature.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Javier's responsibilities",
        items: [
          "Map manual processes and translate them into customer, appointment, user, role and after-sales modules.",
          "Design the data model and permissions so each profile accessed only what it needed.",
          "Build full-stack functionality with Laravel, Livewire, MySQL, TypeScript, JavaScript and Tailwind CSS.",
          "Implement the React/Spring Boot portal with JWT security, JPA persistence, JUnit tests and OpenAPI documentation.",
          "Support continuous deployments on Linux servers, controlling versions with Git and deliveries managed in Jira.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Quantified results",
        items: [
          "100% of customer management digitized in the CRM.",
          "100% of appointment management migrated from manual records into traceable flows.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Qualitative results",
        items: [
          "Less dependence on spreadsheets and isolated records to operate scheduling and customer management.",
          "Clearer traceability for after-sales, internal owners and case tracking.",
          "Reduced response times supported by information centralization and predictive follow-up.",
          "Stronger security base with roles, permissions and JWT authentication in the secondary portal.",
          "Better foundation to evolve the product with Jira, Git, tests and API documentation.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidentiality",
        text: "Because this is a private client project, the case does not include a public demo, source code, credentials, internal screenshots or sensitive data. The description is limited to architecture, stack, technical decisions, responsibilities and publishable results.",
      },
    },
  ],
} as const satisfies ProjectContent;
