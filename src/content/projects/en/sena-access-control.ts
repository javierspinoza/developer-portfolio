import type { ProjectContent } from "../../types";

export default {
  title: "SENA student access control and attendance",
  category: "Access control / Full-Stack",
  company: "SENA",
  summary:
    "Institutional system to record and monitor student attendance, control entry and digitize administrative management during high-traffic hours.",
  theme: "dark",
  tags: ["laravel", "vue", "bootstrap", "mysql", "gray"],
  results: [
    "Digital registration and monitoring of student attendance.",
    "Reduced entry times without invented percentages.",
    "Operation prepared for peak hours and multi-device consultation.",
  ],
  stack: ["Laravel", "Vue.js", "Bootstrap", "MySQL", "Access control", "Multi-device adaptation"],
  status: {
    demo: "private",
    code: "private",
    label: "Institutional case: no demo, code or personal data",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Productive-stage case at SENA focused on digitizing student attendance records and access control for an educational center.<br/><br/>The solution helped organize on-site operations, qualitatively reduce entry times and support high-traffic moments without exposing sensitive learner or internal-process information.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "The educational center needed to record attendance, monitor entries and support administrative management related to student access. The process had to work during high-traffic schedules, where query and capture speed was important to avoid unnecessary queues.",
      },
    },
    {
      type: "text",
      props: {
        title: "Challenge",
        text: "The challenge was turning an on-site workflow into a reliable system to record attendance, validate access and consult administrative information from different devices. The solution also had to protect sensitive data through access controls and permissions aligned with user profiles.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "A full-stack system was developed with Laravel, Vue.js and Bootstrap to record entries, monitor student attendance and consult operational information. The reactive interface made it possible to capture and review statuses quickly, while the backend centralized rules, validations and persistence.",
      },
    },
    {
      type: "list",
      props: {
        title: "Architecture and stack",
        items: [
          "Laravel for business rules, validations, persistence and organization of administrative modules.",
          "Vue.js for reactive registration, monitoring and attendance consultation views.",
          "Bootstrap to adapt the experience to desktop, tablets and quick-consultation devices.",
          "Data model oriented to students, entry records, attendance, statuses and administrative traceability.",
          "Flows designed for peak hours or high foot traffic, prioritizing fast capture and clear reading.",
          "Permissions and access controls to separate registration, consultation and administration actions over sensitive data.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Javier's responsibilities",
        items: [
          "Build modules for student attendance registration and monitoring.",
          "Translate the on-site entry process into screens, statuses and operational validations.",
          "Implement responsive components with Vue.js and Bootstrap for multi-device use.",
          "Support permissions and role controls to protect sensitive institutional information.",
          "Optimize the capture and consultation experience to reduce friction during high-traffic hours.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Results",
        items: [
          "Administrative digitization of attendance registration and access control.",
          "Faster student entry during busier schedules, without reporting unconfirmed percentages.",
          "Better visibility to consult attendance, statuses and records from a centralized source.",
          "Experience adaptable to multiple devices to support on-site operation and administrative review.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidentiality",
        text: "The case does not publish a demo, code, internal screenshots, student personal data, credentials or sensitive operational details. The description is limited to context, challenge, architecture, stack, responsibilities and publishable results.",
      },
    },
  ],
} as const satisfies ProjectContent;
