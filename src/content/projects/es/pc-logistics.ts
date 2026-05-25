import type { ProjectContent } from "../../types";

export default {
  title: "Plataforma logistica para importacion e inventario",
  category: "Logistica / inventario",
  company: "PC Ingenieria de Software SAS",
  summary:
    "Plataforma web para cadena de suministro, importacion de productos y trazabilidad de inventario con Vue.js, JavaScript y Bootstrap.",
  theme: "dark",
  tags: ["vue", "javascript", "bootstrap", "mysql", "gray"],
  results: [
    "Seguimiento operativo de importacion y cadena de suministro.",
    "Trazabilidad de inventario para equipos internos.",
    "Interfaz responsive para consultar estados y movimientos.",
  ],
  stack: ["Vue.js", "JavaScript", "Bootstrap", "MySQL", "Trazabilidad de inventario", "Flujos de importacion"],
  status: {
    demo: "private",
    code: "private",
    label: "Proyecto privado: sin demo, codigo ni datos operativos",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Caso logistico para ordenar procesos de cadena de suministro, importacion de productos y trazabilidad de inventario desde una plataforma web.<br/><br/>El foco fue convertir estados, movimientos y consultas operativas en una experiencia clara para equipos internos, sin exponer datos sensibles de proveedores, productos o clientes.",
  components: [
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "La operacion necesitaba visibilidad sobre productos importados, estados de cadena de suministro y movimientos de inventario. El sistema debia ayudar a equipos internos a consultar informacion sin depender de seguimiento manual o mensajes dispersos.",
      },
    },
    {
      type: "text",
      props: {
        title: "Reto",
        text: "El reto era representar un proceso con multiples etapas: importacion, recepcion, inventario, actualizacion de estados y consulta por perfiles operativos. La interfaz tenia que ser rapida de escanear y adaptable para usuarios que revisaban informacion desde distintos dispositivos.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solucion",
        text: "Se desarrollo una plataforma con Vue.js, JavaScript y Bootstrap para consultar y actualizar informacion logistica. La experiencia organizo estados, productos y movimientos de inventario en vistas de trabajo orientadas a trazabilidad y seguimiento operativo.",
      },
    },
    {
      type: "list",
      props: {
        title: "Arquitectura y stack",
        items: [
          "Vue.js para estructurar vistas reactivas de seguimiento logistico e inventario.",
          "JavaScript para interacciones, manejo de estados de interfaz y comportamiento operativo.",
          "Bootstrap para construir pantallas responsive, consistentes y faciles de mantener.",
          "Modelo de datos orientado a productos, movimientos, estados e historial de inventario.",
          "Flujos de importacion representados como estados consultables para reducir ambiguedad operativa.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Responsabilidades de Javier",
        items: [
          "Construir pantallas de consulta y gestion para procesos de cadena de suministro.",
          "Traducir etapas de importacion e inventario en componentes y estados de interfaz.",
          "Implementar experiencia responsive con Vue.js, JavaScript y Bootstrap.",
          "Apoyar trazabilidad de productos y movimientos para facilitar consulta operativa.",
          "Mantener el caso publicable sin revelar proveedores, volumenes, codigos internos ni datos sensibles.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados",
        items: [
          "Mayor claridad sobre estados de importacion, productos y movimientos de inventario.",
          "Menos dependencia de seguimiento manual para ubicar informacion operativa.",
          "Interfaz mas escaneable para equipos que necesitaban consultar trazabilidad rapidamente.",
          "Base funcional para evolucionar flujos logisticos sin rehacer la experiencia completa.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidencialidad",
        text: "El caso no incluye demo publica, codigo, capturas internas, nombres de proveedores, datos de inventario ni informacion comercial. La descripcion se centra en contexto, reto, arquitectura, stack y responsabilidades tecnicas.",
      },
    },
  ],
} as const satisfies ProjectContent;
