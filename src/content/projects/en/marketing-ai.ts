import type { ProjectContent } from "../../types";

export default {
  title: "AI automation for marketing and e-commerce content",
  category: "AI / automation",
  company: "Industrias Bicicletas Milan S.A.",
  summary:
    "Pipelines with RAG, agents and AI SDKs to reduce manual marketing work without losing review, traceability or production control.",
  theme: "dark",
  tags: ["react", "node", "vercelai", "llm", "rag", "crewai", "pydanticai", "langgraph", "aws", "github"],
  results: [
    "40% less manual work in marketing processes.",
    "RAG and agents applied to real content and review workflows.",
    "MLOps, QA and analytics used as operational control, not decoration.",
  ],
  stack: [
    "React",
    "Node.js",
    "Vercel AI SDK",
    "LLMs",
    "RAG",
    "CrewAI",
    "PydanticAI",
    "LangGraph",
    "MLOps",
    "AWS",
    "Docker",
    "Linux",
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
    label: "Confidential production case: no public demo or code",
  },
  confidential: true,
  videoBorder: false,
  description:
    "AI automation case applied to marketing and e-commerce, built around assisted generation, context retrieval, autonomous agents and human review.<br/><br/>The goal was to reduce repetitive work with a controlled operation: versionable prompts, output traceability, measurement, QA, production deployments and MLOps criteria to keep the system governable.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "Milan's operation managed a large catalog and marketing processes that required content, review, SEO measurement and constant adaptation. AI had to be integrated into existing workflows, not operate as an isolated tool.",
      },
    },
    {
      type: "text",
      props: {
        title: "Challenge",
        text: "The team needed to reduce repetitive marketing tasks without publishing unreviewed content or losing control over tone, sources, prompt changes, costs or model-provider errors. Measuring the technical impact on SEO, load time and analytics was also important.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "Pipelines with Vercel AI SDK, RAG and autonomous agents were implemented to generate, enrich and review assisted content. CrewAI, PydanticAI and LangGraph were used according to the workflow type: task coordination, structured validation and state control. Human review remained part of the process before publishing.",
      },
    },
    {
      type: "list",
      props: {
        title: "Applied architecture",
        items: [
          "React for operation, review and tracking interfaces around generated content.",
          "Node.js and Vercel AI SDK for controlled model calls and streaming when applicable.",
          "RAG to retrieve product context, commercial rules and approved sources before generation.",
          "CrewAI to coordinate autonomous tasks and LangGraph for workflows with state and verifiable steps.",
          "PydanticAI to validate structured outputs before persisting them or sending them to review.",
          "Practical MLOps: prompt versioning, model metadata, retries, error monitoring and traceability.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "QA, analytics and deployment",
        items: [
          "Playwright to validate critical interface and review flows.",
          "k6 to observe performance under load in endpoints and sensitive operations.",
          "Google Tag Manager and Google Analytics for event, behavior and funnel measurement.",
          "Technical SEO as an exit criterion for content, metadata and qualitative load-time reduction.",
          "AWS, Docker, Linux, SSH and GitHub for controlled deployment and production operation.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Quantified results",
        items: [
          "Verified 40% reduction in manual marketing work.",
          "Production pipeline for assisted content generation, review and publishing.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Qualitative results",
        items: [
          "Less dependence on manual copy work for descriptions, metadata and content variations.",
          "More traceability over prompts, sources, responses and human approvals.",
          "Extensible foundation to test providers and agents without rewriting the whole operation.",
          "Better quality control before publishing AI-generated content.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidentiality",
        text: "This case is presented without a public demo, code, private prompts, credentials, internal catalog data or company tool screenshots. The technologies are described as applied usage inside a real product.",
      },
    },
  ],
} as const satisfies ProjectContent;
