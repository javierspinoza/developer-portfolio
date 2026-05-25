import type { ProjectContent } from "../../types";

export default {
  title: "Logistics platform for imports and inventory",
  category: "Logistics / inventory",
  company: "PC Ingenieria de Software SAS",
  summary:
    "Web platform for supply chain, product imports and inventory traceability with Vue.js, JavaScript and Bootstrap.",
  theme: "dark",
  tags: ["vue", "javascript", "bootstrap", "mysql", "gray"],
  results: [
    "Operational tracking for imports and supply chain.",
    "Inventory traceability for internal teams.",
    "Responsive interface to review statuses and movements.",
  ],
  stack: ["Vue.js", "JavaScript", "Bootstrap", "MySQL", "Inventory traceability", "Import workflows"],
  status: {
    demo: "private",
    code: "private",
    label: "Private project: no demo, code or operational data",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Logistics case to organize supply-chain processes, product imports and inventory traceability through a web platform.<br/><br/>The focus was turning statuses, movements and operational queries into a clear experience for internal teams, without exposing sensitive supplier, product or client data.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "The operation needed visibility over imported products, supply-chain statuses and inventory movements. The system had to help internal teams consult information without relying on manual tracking or scattered messages.",
      },
    },
    {
      type: "text",
      props: {
        title: "Challenge",
        text: "The challenge was representing a process with multiple stages: import, reception, inventory, status updates and consultation by operational profiles. The interface had to be fast to scan and adaptable for users reviewing information from different devices.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "A platform was developed with Vue.js, JavaScript and Bootstrap to consult and update logistics information. The experience organized statuses, products and inventory movements into work views oriented toward traceability and operational follow-up.",
      },
    },
    {
      type: "list",
      props: {
        title: "Architecture and stack",
        items: [
          "Vue.js to structure reactive views for logistics and inventory tracking.",
          "JavaScript for interactions, interface-state handling and operational behavior.",
          "Bootstrap to build responsive, consistent and maintainable screens.",
          "Data model oriented to products, movements, statuses and inventory history.",
          "Import workflows represented as consultable statuses to reduce operational ambiguity.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Javier's responsibilities",
        items: [
          "Build consultation and management screens for supply-chain processes.",
          "Translate import and inventory stages into components and interface states.",
          "Implement responsive experience with Vue.js, JavaScript and Bootstrap.",
          "Support product and movement traceability to make operational consultation easier.",
          "Keep the case publishable without revealing suppliers, volumes, internal codes or sensitive data.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Results",
        items: [
          "Greater clarity over import statuses, products and inventory movements.",
          "Less dependence on manual tracking to locate operational information.",
          "More scannable interface for teams that needed to review traceability quickly.",
          "Functional base to evolve logistics flows without rebuilding the whole experience.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidentiality",
        text: "The case does not include a public demo, code, internal screenshots, supplier names, inventory data or commercial information. The description focuses on context, challenge, architecture, stack and technical responsibilities.",
      },
    },
  ],
} as const satisfies ProjectContent;
