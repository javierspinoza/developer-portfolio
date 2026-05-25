import type { ProjectContent } from "../../types";

export default {
  title: "CRM y portal Java para digitalizar la operacion de Isavital",
  category: "CRM / Java / Full-Stack",
  company: "Soluciones Isavital SAS",
  summary:
    "CRM construido desde cero y portal secundario desacoplado para reemplazar hojas de calculo, ordenar clientes y citas, y habilitar postventa predictiva.",
  theme: "light",
  tags: ["laravel", "livewire", "mysql", "react", "java", "spring", "typescript", "tailwind", "linux", "gray"],
  results: [
    "100% de la gestion de clientes y citas digitalizada.",
    "CRM con roles, permisos, trazabilidad y despliegue continuo.",
    "Portal React/Spring Boot con seguridad JWT, pruebas y documentacion OpenAPI.",
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
    "Servidores Linux",
    "Despliegue continuo",
  ],
  status: {
    demo: "private",
    code: "private",
    label: "Proyecto privado de cliente: sin enlaces publicos",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Caso de digitalizacion operativa para Soluciones Isavital SAS: un CRM a medida reemplazo hojas de calculo y registros manuales por flujos trazables de clientes, citas, roles, permisos y seguimiento postventa.<br/><br/>El proyecto tambien incluyo un portal secundario con React y Java/Spring Boot para separar experiencias, fortalecer seguridad y documentar APIs sin exponer codigo, datos internos ni accesos del cliente.",
  components: [
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Isavital necesitaba pasar de una operacion apoyada en hojas de calculo, registros manuales y comunicacion dispersa a un sistema con informacion confiable para clientes, agenda, responsables y postventa. El objetivo era que cada equipo pudiera ver el estado real de la gestion sin depender de archivos aislados.",
      },
    },
    {
      type: "text",
      props: {
        title: "Reto",
        text: "El reto fue digitalizar el 100% de la gestion de clientes y citas sin romper la operacion diaria. La solucion tenia que cubrir roles internos, permisos, trazabilidad de cambios, consultas rapidas, agenda, seguimiento postventa y una base tecnica preparada para despliegues frecuentes en servidores Linux.",
      },
    },
    {
      type: "list",
      props: {
        title: "CRM operativo",
        items: [
          "Laravel y Livewire como base para construir modulos empresariales con reactividad controlada.",
          "MySQL para modelar clientes, citas, usuarios, estados, historiales y seguimiento postventa.",
          "TypeScript, JavaScript, CSS3 y Tailwind CSS para interfaces internas mas claras y mantenibles.",
          "Roles y permisos para separar responsabilidades entre operacion, administracion y gerencia.",
          "Jira y Git para organizar entregas, seguimiento de tareas y control de cambios.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Portal React y Java/Spring Boot",
        items: [
          "React para una experiencia desacoplada del CRM principal cuando el flujo lo requeria.",
          "Java y Spring Boot para exponer servicios backend con estructura empresarial.",
          "Lombok y Spring Data JPA para reducir repeticion y ordenar el acceso a datos.",
          "Spring Security y JWT para proteger rutas, sesiones y acceso por permisos.",
          "JUnit para validar comportamiento critico y Swagger/OpenAPI para documentar contratos de API.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Automatizacion postventa con IA",
        items: [
          "Seguimiento predictivo para priorizar clientes y acciones posteriores a la atencion.",
          "Centralizacion de estados, recordatorios y contexto de cliente para reducir tiempos de respuesta.",
          "Apoyo a retencion y satisfaccion mediante senales operativas, sin publicar metricas no verificadas.",
          "Uso de la automatizacion como extension del flujo comercial, no como funcion aislada del proceso.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Responsabilidades de Javier",
        items: [
          "Levantar procesos manuales y traducirlos en modulos de clientes, citas, usuarios, roles y postventa.",
          "Disenar el modelo de datos y los permisos para que cada perfil accediera solo a lo necesario.",
          "Construir funcionalidades full-stack en Laravel, Livewire, MySQL, TypeScript, JavaScript y Tailwind CSS.",
          "Implementar el portal React/Spring Boot con seguridad JWT, persistencia JPA, pruebas JUnit y documentacion OpenAPI.",
          "Acompanar despliegues continuos en servidores Linux, controlando versiones con Git y entregas gestionadas en Jira.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados cuantificados",
        items: [
          "100% de la gestion de clientes digitalizada en el CRM.",
          "100% de la gestion de citas migrada desde registros manuales hacia flujos trazables.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados cualitativos",
        items: [
          "Menos dependencia de hojas de calculo y registros aislados para operar agenda y clientes.",
          "Trazabilidad mas clara para postventa, responsables internos y seguimiento de casos.",
          "Reduccion de tiempos de respuesta apoyada por centralizacion de informacion y seguimiento predictivo.",
          "Mejor base de seguridad con roles, permisos y autenticacion JWT en el portal secundario.",
          "Mayor orden para evolucionar el producto con Jira, Git, pruebas y documentacion de APIs.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidencialidad",
        text: "Por ser un proyecto privado de cliente, este caso no incluye demo publica, codigo fuente, credenciales, capturas internas ni datos sensibles. La descripcion se limita a la arquitectura, stack, decisiones tecnicas, responsabilidades y resultados publicables.",
      },
    },
  ],
} as const satisfies ProjectContent;
