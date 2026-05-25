export type TagVariant =
  | "sap"
  | "odoo"
  | "magento"
  | "python"
  | "django"
  | "fastapi"
  | "sqlserver"
  | "postgresql"
  | "mysql"
  | "laravel"
  | "livewire"
  | "php"
  | "react"
  | "vue"
  | "typescript"
  | "tailwind"
  | "bootstrap"
  | "java"
  | "spring"
  | "jwt"
  | "node"
  | "javascript"
  | "docker"
  | "github"
  | "playwright"
  | "k6"
  | "analytics"
  | "vercelai"
  | "llm"
  | "rag"
  | "langgraph"
  | "crewai"
  | "pydanticai"
  | "aws"
  | "linux"
  | "powerbi"
  | "gray"
  | "three"
  | "websockets"
  | "redis"
  | "html"
  | "css"
  | "next"
  | "kubernetes"
  | "ogl"
  | "glsl";

export const tagLabels = {
  sap: "SAP Business One",
  odoo: "Odoo.sh",
  magento: "Magento 2",
  python: "Python",
  django: "Django",
  fastapi: "FastAPI",
  sqlserver: "SQL Server",
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  laravel: "Laravel",
  livewire: "Livewire",
  php: "PHP",
  react: "React",
  vue: "Vue.js",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  bootstrap: "Bootstrap",
  java: "Java",
  spring: "Spring Boot",
  jwt: "JWT",
  node: "Node.js",
  javascript: "JavaScript",
  docker: "Docker",
  github: "GitHub",
  playwright: "Playwright",
  k6: "k6",
  analytics: "Analytics",
  vercelai: "Vercel AI SDK",
  llm: "LLM",
  rag: "RAG",
  langgraph: "LangGraph",
  crewai: "CrewAI",
  pydanticai: "PydanticAI",
  aws: "AWS",
  linux: "Linux",
  powerbi: "Power BI",
  gray: "Private case",
  three: "Three.js",
  websockets: "WebSockets",
  redis: "Redis",
  html: "HTML",
  css: "CSS",
  next: "Next.js",
  kubernetes: "Kubernetes",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
