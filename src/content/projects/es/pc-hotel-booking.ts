import type { ProjectContent } from "../../types";

export default {
  title: "Reservas hoteleras con pagos y RBAC",
  category: "Reservas / pagos / Full-Stack",
  company: "PC Ingenieria de Software SAS",
  summary:
    "Sistema de reservas hoteleras para operar disponibilidad, pagos, usuarios y permisos con Laravel, Livewire y MySQL.",
  theme: "light",
  tags: ["laravel", "livewire", "php", "mysql", "javascript", "bootstrap", "gray"],
  results: [
    "Flujo transaccional de reservas con pasarelas de pago.",
    "Control de acceso basado en roles para operacion y administracion.",
    "Gestion hotelera trazable sin exponer informacion privada del cliente.",
  ],
  stack: ["Laravel", "Livewire", "PHP", "MySQL", "JavaScript", "Bootstrap", "Pasarelas de pago", "RBAC"],
  status: {
    demo: "private",
    code: "private",
    label: "Caso confidencial de cliente: sin demo ni codigo publico",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Caso de reservas hoteleras construido para digitalizar flujos de disponibilidad, reserva, pago y administracion interna.<br/><br/>La solucion combino Laravel, Livewire y MySQL con pasarelas de pago y control de acceso basado en roles, manteniendo el caso publico limitado a arquitectura, stack, responsabilidades y resultados no sensibles.",
  components: [
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "PC Ingenieria de Software SAS desarrollo una plataforma para negocios hoteleros que necesitaban recibir reservas, controlar disponibilidad y administrar operaciones internas desde un sistema web. El flujo debia ser entendible para usuarios finales y suficientemente ordenado para equipos administrativos.",
      },
    },
    {
      type: "text",
      props: {
        title: "Reto",
        text: "El reto era conectar una experiencia de reserva con pagos en linea, estados operativos y permisos diferenciados. La plataforma debia proteger informacion sensible de clientes y reservas, evitar acciones fuera del rol autorizado y mantener datos consistentes en MySQL.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solucion",
        text: "Se construyeron modulos full-stack con Laravel y Livewire para gestionar reservas, disponibilidad, pagos, usuarios y administracion. MySQL sostuvo el modelo transaccional y Bootstrap ayudo a entregar una interfaz responsive para consulta y operacion desde distintos dispositivos.",
      },
    },
    {
      type: "list",
      props: {
        title: "Arquitectura y stack",
        items: [
          "Laravel como base backend para reglas de negocio, validaciones y persistencia.",
          "Livewire para interfaces reactivas de reserva y administracion sin separar innecesariamente el flujo.",
          "MySQL para habitaciones, disponibilidad, reservas, pagos, usuarios, estados e historiales.",
          "Pasarelas de pago integradas al ciclo de reserva para confirmar transacciones y estados.",
          "RBAC para separar permisos de cliente, operacion y administracion.",
          "Bootstrap y JavaScript para una experiencia responsive y util en escritorio o movil.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Responsabilidades de Javier",
        items: [
          "Implementar modulos full-stack para reservas, estados, usuarios y administracion.",
          "Traducir reglas del proceso hotelero en validaciones, modelos y pantallas operativas.",
          "Apoyar la integracion de pagos y el manejo de estados asociados a la reserva.",
          "Aplicar RBAC para que cada perfil tuviera acceso solo a las acciones correspondientes.",
          "Cuidar la experiencia responsive con Bootstrap y JavaScript para flujos de consulta y gestion.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados",
        items: [
          "Proceso de reserva mas trazable desde disponibilidad hasta pago y gestion administrativa.",
          "Mejor separacion de responsabilidades mediante roles y permisos.",
          "Base de datos estructurada para consultar reservas, estados y usuarios sin depender de registros dispersos.",
          "Experiencia responsive preparada para operacion desde diferentes dispositivos.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidencialidad",
        text: "Por tratarse de un proyecto privado de cliente, este caso no publica demo, codigo fuente, credenciales, datos de reservas, informacion de pagos ni nombres internos. La descripcion se limita al trabajo tecnico y a resultados publicables.",
      },
    },
  ],
} as const satisfies ProjectContent;
