import type { ProjectContent } from "../../types";

export default {
  title: "Sustainability with waste traceability",
  category: "Sustainability / SSR",
  company: "PC Ingenieria de Software SAS",
  summary: "Responsive platform for waste traceability, collection and reuse with Next.js, React and SSR rendering.",
  theme: "dark",
  tags: ["next", "react", "javascript", "html", "css", "gray"],
  results: [
    "Traceability for waste collection and reuse.",
    "Responsive experience with Next.js, React and SSR.",
    "Environmental-impact case without exposing sensitive information.",
  ],
  stack: ["Next.js", "React", "JavaScript", "SSR", "HTML5", "CSS3", "Responsive design"],
  status: {
    demo: "private",
    code: "private",
    label: "Private case: no demo, code or internal data",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Sustainability platform focused on waste traceability, collection and reuse, built with Next.js and React.<br/><br/>The project used SSR and a responsive experience so environmental information could be clear and consultable, while keeping internal data, private operations and any sensitive client information out of the portfolio.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "The organization needed a web platform to communicate and operate processes related to waste, collection and reuse. The product had to be accessible from different devices and present information clearly for internal or external users depending on the flow.",
      },
    },
    {
      type: "text",
      props: {
        title: "Challenge",
        text: "The challenge was turning sustainability processes into a traceable digital experience: registering or consulting statuses, connecting collection and reuse actions, and offering a responsive interface with strong initial performance through server-side rendering.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "A platform was implemented with Next.js and React, using SSR to deliver more structured initial content faster. The interface organized waste, collection and reuse information into clear views prepared for consultation and follow-up from desktop or mobile.",
      },
    },
    {
      type: "list",
      props: {
        title: "Architecture and stack",
        items: [
          "Next.js as the base for a React application with SSR rendering.",
          "React for reusable components, tracking views and responsive experience.",
          "JavaScript, HTML5 and CSS3 for interactions, structure and visual adaptation.",
          "Content model oriented to traceability, collection stages and reuse.",
          "Separation of public and private information to avoid exposure of sensitive data.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Javier's responsibilities",
        items: [
          "Develop responsive views with Next.js and React for sustainability processes.",
          "Translate waste, collection and reuse flows into understandable screens.",
          "Apply SSR to improve initial content delivery and navigation experience.",
          "Organize components and interface states to keep the product extensible.",
          "Document the case in publishable terms without revealing internal client data.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Results",
        items: [
          "Responsive web platform to support environmental traceability.",
          "Better reading of collection and reuse processes from a centralized experience.",
          "Maintainable frontend base with Next.js, React and SSR.",
          "Professional presentation of environmental impact without publishing confidential information.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidentiality",
        text: "This case does not expose a demo, source code, internal screenshots, user data, routes, waste volumes or private operational information. Only the permitted technical and business narrative is published.",
      },
    },
  ],
} as const satisfies ProjectContent;
