import type { ProjectContent } from "../../types";

export default {
  title: "Automatizacion con IA para marketing y contenido e-commerce",
  category: "IA / automatizacion",
  company: "Industrias Bicicletas Milan S.A.",
  summary:
    "Pipelines con RAG, agentes y SDKs de IA para reducir trabajo manual de marketing sin perder revision, trazabilidad ni control productivo.",
  theme: "dark",
  tags: ["react", "node", "vercelai", "llm", "rag", "crewai", "pydanticai", "langgraph", "aws", "github"],
  results: [
    "40% menos trabajo manual en procesos de marketing.",
    "RAG y agentes aplicados a flujos reales de contenido y revision.",
    "MLOps, QA y analitica usados como control operativo, no decoracion.",
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
    label: "Caso productivo confidencial: sin demo ni codigo publico",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Caso de automatizacion con IA aplicada a marketing y e-commerce, construido alrededor de generacion asistida, recuperacion de contexto, agentes autonomos y revision humana.<br/><br/>El objetivo fue reducir trabajo repetitivo con una operacion controlada: prompts versionables, trazabilidad de salidas, medicion, QA, despliegues productivos y criterios MLOps para mantener el sistema gobernable.",
  components: [
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "La operacion de Milan manejaba un catalogo amplio y procesos de marketing que requerian contenido, revision, medicion SEO y adaptacion constante. El uso de IA tenia que integrarse a flujos existentes, no funcionar como una herramienta aislada.",
      },
    },
    {
      type: "text",
      props: {
        title: "Reto",
        text: "El equipo necesitaba disminuir tareas repetitivas de marketing sin publicar contenido no revisado ni perder control sobre tono, fuentes, cambios de prompt, costos o errores del proveedor de modelos. Tambien era clave medir el impacto tecnico en SEO, carga y analitica.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solucion",
        text: "Se implementaron pipelines con Vercel AI SDK, RAG y agentes autonomos para generar, enriquecer y revisar contenido asistido. CrewAI, PydanticAI y LangGraph se usaron segun el tipo de flujo: coordinacion de tareas, validacion estructurada y control de estado. La revision humana siguio siendo parte del proceso antes de publicar.",
      },
    },
    {
      type: "list",
      props: {
        title: "Arquitectura aplicada",
        items: [
          "React para interfaces de operacion, revision y seguimiento del contenido generado.",
          "Node.js y Vercel AI SDK para llamadas controladas a modelos y streaming cuando aplica.",
          "RAG para recuperar contexto de productos, reglas comerciales y fuentes aprobadas antes de generar.",
          "CrewAI para coordinar tareas autonomas y LangGraph para flujos con estado y pasos verificables.",
          "PydanticAI para validar salidas estructuradas antes de persistirlas o enviarlas a revision.",
          "MLOps practico: version de prompts, metadata de modelo, reintentos, monitoreo de errores y trazabilidad.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "QA, analitica y despliegue",
        items: [
          "Playwright para validar flujos criticos de interfaz y revision.",
          "k6 para observar rendimiento bajo carga en endpoints y operaciones sensibles.",
          "Google Tag Manager y Google Analytics para medicion de eventos, comportamiento y embudos.",
          "SEO tecnico como criterio de salida para contenido, metadata y reduccion cualitativa de tiempos de carga.",
          "AWS, Docker, Linux, SSH y GitHub para despliegues y operacion productiva controlada.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados cuantificados",
        items: [
          "Reduccion verificable del 40% en trabajo manual de marketing.",
          "Pipeline productivo para generacion, revision y publicacion asistida de contenido.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados cualitativos",
        items: [
          "Menos dependencia de copiado manual para descripciones, metadata y variaciones de contenido.",
          "Mayor trazabilidad sobre prompts, fuentes, respuestas y aprobaciones humanas.",
          "Base extensible para probar proveedores y agentes sin reescribir toda la operacion.",
          "Mejor control de calidad antes de publicar contenido generado por IA.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidencialidad",
        text: "El caso se presenta sin demo publica, codigo, prompts privados, credenciales, datos de catalogo internos ni capturas de herramientas de la empresa. Las tecnologias se describen como uso aplicado dentro de un producto real.",
      },
    },
  ],
} as const satisfies ProjectContent;
