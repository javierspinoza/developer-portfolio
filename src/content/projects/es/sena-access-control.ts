import type { ProjectContent } from "../../types";

export default {
  title: "Control de acceso y asistencia estudiantil SENA",
  category: "Control de acceso / Full-Stack",
  company: "SENA",
  summary:
    "Sistema institucional para registrar y monitorear asistencia estudiantil, controlar ingreso y digitalizar gestion administrativa en horas de alta afluencia.",
  theme: "dark",
  tags: ["laravel", "vue", "bootstrap", "mysql", "gray"],
  results: [
    "Registro y monitoreo digital de asistencia estudiantil.",
    "Reduccion de tiempos de ingreso sin porcentajes inventados.",
    "Operacion preparada para horas pico y consulta multi-dispositivo.",
  ],
  stack: ["Laravel", "Vue.js", "Bootstrap", "MySQL", "Control de acceso", "Adaptacion multi-dispositivo"],
  status: {
    demo: "private",
    code: "private",
    label: "Caso institucional: sin demo, codigo ni datos personales",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Caso de etapa productiva en SENA orientado a digitalizar el registro de asistencia estudiantil y el control de acceso al centro educativo.<br/><br/>La solucion ayudo a ordenar la operacion presencial, reducir tiempos de ingreso de forma cualitativa y dar soporte a momentos de alta afluencia sin exponer informacion sensible de aprendices o procesos internos.",
  components: [
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "El centro educativo necesitaba registrar asistencia, monitorear entradas y apoyar la gestion administrativa asociada al ingreso de estudiantes. El proceso debia funcionar durante jornadas con alta afluencia, donde la velocidad de consulta y captura era clave para no generar filas innecesarias.",
      },
    },
    {
      type: "text",
      props: {
        title: "Reto",
        text: "El reto era convertir un flujo presencial en un sistema confiable para registrar asistencia, validar accesos y consultar informacion administrativa desde distintos dispositivos. La solucion tambien debia cuidar datos sensibles mediante controles de acceso y permisos acordes con los perfiles de uso.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solucion",
        text: "Se desarrollo un sistema full-stack con Laravel, Vue.js y Bootstrap para registrar entradas, monitorear asistencia estudiantil y consultar informacion operativa. La interfaz reactiva permitio capturar y revisar estados rapidamente, mientras el backend centralizo reglas, validaciones y persistencia.",
      },
    },
    {
      type: "list",
      props: {
        title: "Arquitectura y stack",
        items: [
          "Laravel para reglas de negocio, validaciones, persistencia y organizacion de modulos administrativos.",
          "Vue.js para vistas reactivas de registro, monitoreo y consulta de asistencia.",
          "Bootstrap para adaptar la experiencia a escritorio, tabletas y dispositivos de consulta rapida.",
          "Modelo de datos orientado a estudiantes, registros de ingreso, asistencia, estados y trazabilidad administrativa.",
          "Flujos pensados para horas pico o alta afluencia, priorizando captura rapida y lectura clara.",
          "Permisos y controles de acceso para separar acciones de registro, consulta y administracion sobre datos sensibles.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Responsabilidades de Javier",
        items: [
          "Construir modulos para registro y monitoreo de asistencia estudiantil.",
          "Traducir el proceso presencial de ingreso en pantallas, estados y validaciones operativas.",
          "Implementar componentes responsive con Vue.js y Bootstrap para uso multi-dispositivo.",
          "Apoyar controles de permisos y roles para proteger informacion institucional sensible.",
          "Optimizar la experiencia de captura y consulta para reducir friccion durante horas de alta afluencia.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados",
        items: [
          "Digitalizacion administrativa del registro de asistencia y control de acceso.",
          "Ingreso estudiantil mas agil durante jornadas de mayor movimiento, sin reportar porcentajes no confirmados.",
          "Mejor visibilidad para consultar asistencia, estados y registros desde una fuente centralizada.",
          "Experiencia adaptable a multiples dispositivos para apoyar operacion presencial y revision administrativa.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidencialidad",
        text: "El caso no publica demo, codigo, capturas internas, datos personales de estudiantes, credenciales ni detalles operativos sensibles. La descripcion se limita a contexto, reto, arquitectura, stack, responsabilidades y resultados publicables.",
      },
    },
  ],
} as const satisfies ProjectContent;
