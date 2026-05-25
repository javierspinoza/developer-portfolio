import type { ProjectContent } from "../../types";

export default {
  title: "Sostenibilidad con trazabilidad de residuos",
  category: "Sostenibilidad / SSR",
  company: "PC Ingenieria de Software SAS",
  summary:
    "Plataforma responsive para trazabilidad, recoleccion y reutilizacion de residuos con Next.js, React y renderizado SSR.",
  theme: "dark",
  tags: ["next", "react", "javascript", "html", "css", "gray"],
  results: [
    "Trazabilidad para recoleccion y reutilizacion de residuos.",
    "Experiencia responsive con Next.js, React y SSR.",
    "Caso de impacto ambiental sin exponer informacion sensible.",
  ],
  stack: ["Next.js", "React", "JavaScript", "SSR", "HTML5", "CSS3", "Responsive design"],
  status: {
    demo: "private",
    code: "private",
    label: "Caso privado: sin demo, codigo ni datos internos",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Plataforma de sostenibilidad enfocada en trazabilidad de residuos, recoleccion y reutilizacion, construida con Next.js y React.<br/><br/>El proyecto uso SSR y una experiencia responsive para que la informacion ambiental fuera consultable y clara, manteniendo fuera del portafolio datos internos, operaciones privadas y cualquier informacion sensible del cliente.",
  components: [
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "La organizacion necesitaba una plataforma web para comunicar y operar procesos relacionados con residuos, recoleccion y reutilizacion. El producto debia ser accesible desde distintos dispositivos y presentar informacion de manera clara para usuarios internos o externos segun el flujo.",
      },
    },
    {
      type: "text",
      props: {
        title: "Reto",
        text: "El reto fue convertir procesos de sostenibilidad en una experiencia digital trazable: registrar o consultar estados, conectar acciones de recoleccion y reutilizacion, y ofrecer una interfaz responsive con buen rendimiento inicial mediante renderizado del lado del servidor.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solucion",
        text: "Se implemento una plataforma con Next.js y React, usando SSR para entregar contenido inicial mas rapido y estructurado. La interfaz organizo informacion de residuos, recoleccion y reutilizacion en vistas claras, preparadas para consulta y seguimiento desde escritorio o movil.",
      },
    },
    {
      type: "list",
      props: {
        title: "Arquitectura y stack",
        items: [
          "Next.js como base de aplicacion React con renderizado SSR.",
          "React para componentes reutilizables, vistas de seguimiento y experiencia responsive.",
          "JavaScript, HTML5 y CSS3 para interacciones, estructura y adaptacion visual.",
          "Modelo de contenido orientado a trazabilidad, etapas de recoleccion y reutilizacion.",
          "Separacion de informacion publica y privada para evitar exposicion de datos sensibles.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Responsabilidades de Javier",
        items: [
          "Desarrollar vistas responsive con Next.js y React para procesos de sostenibilidad.",
          "Traducir flujos de residuos, recoleccion y reutilizacion en pantallas comprensibles.",
          "Aplicar SSR para mejorar entrega inicial de contenido y experiencia de navegacion.",
          "Organizar componentes y estados de interfaz para mantener el producto extensible.",
          "Documentar el caso en terminos publicables sin revelar datos internos del cliente.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados",
        items: [
          "Plataforma web responsive para apoyar trazabilidad ambiental.",
          "Mejor lectura de procesos de recoleccion y reutilizacion desde una experiencia centralizada.",
          "Base frontend mantenible con Next.js, React y SSR.",
          "Presentacion profesional del impacto ambiental sin publicar informacion confidencial.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidencialidad",
        text: "Este caso no expone demo, codigo fuente, capturas internas, datos de usuarios, rutas, volumenes de residuos ni informacion privada de la operacion. Se publica solo la narrativa tecnica y de negocio permitida.",
      },
    },
  ],
} as const satisfies ProjectContent;
