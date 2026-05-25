import type { ProjectContent } from "../../types";

export default {
  title: "Integracion ERP/e-commerce con datos historicos confiables",
  category: "ERP / e-commerce",
  company: "Industrias Bicicletas Milan S.A.",
  summary:
    "Integracion productiva entre SAP Business One, Odoo.sh y Magento 2 para sincronizar inventario, pedidos y datos historicos con trazabilidad.",
  theme: "dark",
  tags: ["sap", "odoo", "magento", "python", "django", "fastapi", "postgresql", "docker", "aws", "github"],
  results: [
    "10 anos de informacion historica administrada sin perdida de datos.",
    "Inventario y pedidos sincronizados entre ERP y Magento 2.",
    "QA, analitica y despliegues productivos incorporados al flujo.",
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
    label: "Caso confidencial: sin demo ni codigo publico",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Caso de integracion empresarial entre SAP Business One, Odoo.sh y Magento 2 para que inventario, pedidos y datos de negocio se muevan con una fuente de verdad mas clara.<br/><br/>El foco fue la continuidad operativa: datos historicos confiables, APIs de integracion, despliegues en servidores Linux, medicion con analitica y validacion de rendimiento sin exponer informacion sensible del cliente.",
  components: [
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Industrias Bicicletas Milan necesitaba sostener una operacion donde ERP, e-commerce, datos historicos y equipos de negocio dependian unos de otros. El trabajo conecto SAP Business One, Odoo.sh y Magento 2 para que compras, inventario, ventas y analitica operaran con informacion mas consistente.",
      },
    },
    {
      type: "text",
      props: {
        title: "Reto",
        text: "El reto era mantener sincronizados inventario, pedidos y datos historicos sin depender de pasos manuales fragiles. La informacion venia de sistemas con responsabilidades distintas, con reglas de negocio que debian respetar contabilidad, logistica, e-commerce y auditoria interna.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solucion",
        text: "Se reforzo una capa de integracion con Python, Django y FastAPI para exponer servicios controlados, coordinar sincronizaciones y encapsular reglas de negocio. Odoo.sh recibio personalizaciones operativas, Magento 2 quedo conectado al flujo comercial y PostgreSQL/SQL sirvieron como base para consultas, historicos y validaciones.",
      },
    },
    {
      type: "list",
      props: {
        title: "Arquitectura y stack",
        items: [
          "SAP Business One y Odoo.sh como sistemas empresariales principales.",
          "Magento 2 integrado al flujo de inventario, pedidos y catalogo.",
          "Python, Django y FastAPI para servicios internos, validacion y orquestacion.",
          "PostgreSQL y SQL para historicos, consultas operativas, integridad y auditoria.",
          "Docker, Linux, AWS, SSH y GitHub para despliegues, versionamiento y operacion productiva.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Responsabilidades de Javier",
        items: [
          "Modelar reglas de integracion entre ERP, e-commerce y bases de datos sin alterar informacion sensible.",
          "Construir y mantener servicios backend para sincronizacion, consultas y tareas operativas.",
          "Administrar despliegues en Linux/AWS mediante SSH, Docker y flujos de GitHub.",
          "Acompanhar medicion tecnica con Google Tag Manager, Google Analytics, SEO, Playwright y k6.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados cuantificados",
        items: [
          "10 anos de datos historicos administrados y consultables sin perdida de informacion.",
          "Integracion ERP/e-commerce operativa para inventario, pedidos y datos de negocio.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Resultados cualitativos",
        items: [
          "Menos friccion manual para mantener coherencia de stock entre sistemas.",
          "Mejor trazabilidad para auditoria, soporte operativo y decisiones de negocio.",
          "Reduccion de tiempos de carga abordada desde QA, rendimiento, analitica y SEO tecnico.",
          "Despliegues productivos mas controlados con versionamiento, acceso por SSH y ambientes Linux.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidencialidad",
        text: "Por tratarse de un sistema privado de operacion empresarial, este caso no incluye demo publica, codigo fuente, credenciales, capturas internas ni datos del cliente. La descripcion se limita a arquitectura, responsabilidades, stack y resultados publicables.",
      },
    },
  ],
} as const satisfies ProjectContent;
