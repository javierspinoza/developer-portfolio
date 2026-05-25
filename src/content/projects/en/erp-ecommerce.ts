import type { ProjectContent } from "../../types";

export default {
  title: "ERP/e-commerce integration with reliable historical data",
  category: "ERP / e-commerce",
  company: "Industrias Bicicletas Milan S.A.",
  summary:
    "Production integration across SAP Business One, Odoo.sh and Magento 2 to synchronize inventory, orders and historical data with traceability.",
  theme: "dark",
  tags: ["sap", "odoo", "magento", "python", "django", "fastapi", "postgresql", "docker", "aws", "github"],
  results: [
    "10 years of historical information managed without data loss.",
    "Inventory and orders synchronized between ERP and Magento 2.",
    "QA, analytics and production deployments included in the flow.",
  ],
  stack: [
    "Odoo.sh",
    "SAP Business One",
    "Magento 2",
    "PostgreSQL",
    "SQL",
    "Python",
    "Django",
    "FastAPI",
    "Docker",
    "Linux",
    "AWS",
    "SSH",
    "GitHub",
    "Playwright",
    "k6",
    "Google Tag Manager",
    "Google Analytics",
    "SEO",
  ],
  status: {
    demo: "private",
    code: "private",
    label: "Confidential case: no public demo or code",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Enterprise integration case connecting SAP Business One, Odoo.sh and Magento 2 so inventory, orders and business data can move through a clearer source of truth.<br/><br/>The focus was operational continuity: reliable historical data, integration APIs, deployments on Linux servers, analytics measurement and performance validation without exposing sensitive client information.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "Industrias Bicicletas Milan needed to sustain an operation where ERP, e-commerce, historical data and business teams depended on each other. The work connected SAP Business One, Odoo.sh and Magento 2 so purchasing, inventory, sales and analytics could operate with more consistent information.",
      },
    },
    {
      type: "text",
      props: {
        title: "Challenge",
        text: "The challenge was keeping inventory, orders and historical data synchronized without relying on fragile manual steps. Information came from systems with different responsibilities, with business rules that had to respect accounting, logistics, e-commerce and internal audit needs.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "An integration layer with Python, Django and FastAPI was strengthened to expose controlled services, coordinate synchronizations and encapsulate business rules. Odoo.sh received operational customizations, Magento 2 was connected to the commercial flow and PostgreSQL/SQL supported queries, historical records and validations.",
      },
    },
    {
      type: "list",
      props: {
        title: "Architecture and stack",
        items: [
          "SAP Business One and Odoo.sh as the main enterprise systems.",
          "Magento 2 integrated into the inventory, order and catalog flow.",
          "Python, Django and FastAPI for internal services, validation and orchestration.",
          "PostgreSQL and SQL for historical data, operational queries, integrity and auditing.",
          "Docker, Linux, AWS, SSH and GitHub for deployments, versioning and production operations.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Javier's responsibilities",
        items: [
          "Model integration rules between ERP, e-commerce and databases without exposing sensitive information.",
          "Build and maintain backend services for synchronization, queries and operational tasks.",
          "Manage deployments on Linux/AWS through SSH, Docker and GitHub workflows.",
          "Support technical measurement with Google Tag Manager, Google Analytics, SEO, Playwright and k6.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Quantified results",
        items: [
          "10 years of historical data managed and queryable without information loss.",
          "Operational ERP/e-commerce integration for inventory, orders and business data.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Qualitative results",
        items: [
          "Less manual friction to keep stock consistent across systems.",
          "Better traceability for auditing, operational support and business decisions.",
          "Load-time reduction approached through QA, performance, analytics and technical SEO.",
          "More controlled production deployments with versioning, SSH access and Linux environments.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidentiality",
        text: "Because this is a private business operations system, this case does not include a public demo, source code, credentials, internal screenshots or client data. The description is limited to architecture, responsibilities, stack and publishable results.",
      },
    },
  ],
} as const satisfies ProjectContent;
