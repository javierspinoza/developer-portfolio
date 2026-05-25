import type { ProjectContent } from "../../types";

export default {
  title: "Hotel booking with payments and RBAC",
  category: "Booking / payments / Full-Stack",
  company: "PC Ingenieria de Software SAS",
  summary: "Hotel booking system to operate availability, payments, users and permissions with Laravel, Livewire and MySQL.",
  theme: "light",
  tags: ["laravel", "livewire", "php", "mysql", "javascript", "bootstrap", "gray"],
  results: [
    "Transactional booking flow with payment gateways.",
    "Role-based access control for operations and administration.",
    "Traceable hotel management without exposing private client information.",
  ],
  stack: ["Laravel", "Livewire", "PHP", "MySQL", "JavaScript", "Bootstrap", "Payment gateways", "RBAC"],
  status: {
    demo: "private",
    code: "private",
    label: "Confidential client case: no public demo or code",
  },
  confidential: true,
  videoBorder: false,
  description:
    "Hotel booking case built to digitize availability, reservation, payment and internal administration flows.<br/><br/>The solution combined Laravel, Livewire and MySQL with payment gateways and role-based access control, keeping the public case limited to architecture, stack, responsibilities and non-sensitive results.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "PC Ingenieria de Software SAS developed a platform for hotel businesses that needed to receive reservations, control availability and manage internal operations from a web system. The flow had to be understandable for end users and orderly enough for administrative teams.",
      },
    },
    {
      type: "text",
      props: {
        title: "Challenge",
        text: "The challenge was connecting a booking experience with online payments, operational states and differentiated permissions. The platform had to protect sensitive customer and reservation information, prevent actions outside the authorized role and keep data consistent in MySQL.",
      },
    },
    {
      type: "text",
      props: {
        title: "Solution",
        text: "Full-stack modules were built with Laravel and Livewire to manage reservations, availability, payments, users and administration. MySQL supported the transactional model and Bootstrap helped deliver a responsive interface for consultation and operation across devices.",
      },
    },
    {
      type: "list",
      props: {
        title: "Architecture and stack",
        items: [
          "Laravel as the backend base for business rules, validation and persistence.",
          "Livewire for reactive reservation and administration interfaces without unnecessarily splitting the flow.",
          "MySQL for rooms, availability, reservations, payments, users, statuses and histories.",
          "Payment gateways integrated into the booking cycle to confirm transactions and statuses.",
          "RBAC to separate customer, operations and administration permissions.",
          "Bootstrap and JavaScript for a responsive experience useful on desktop and mobile.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Javier's responsibilities",
        items: [
          "Implement full-stack modules for reservations, statuses, users and administration.",
          "Translate hotel-process rules into validations, models and operational screens.",
          "Support payment integration and the handling of reservation-related statuses.",
          "Apply RBAC so each profile could access only the corresponding actions.",
          "Care for the responsive experience with Bootstrap and JavaScript for consultation and management flows.",
        ],
      },
    },
    {
      type: "list",
      props: {
        title: "Results",
        items: [
          "More traceable booking process from availability to payment and administrative management.",
          "Better separation of responsibilities through roles and permissions.",
          "Structured database to query reservations, statuses and users without depending on scattered records.",
          "Responsive experience prepared for operation from different devices.",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Confidentiality",
        text: "Because this is a private client project, the case does not publish a demo, source code, credentials, reservation data, payment information or internal names. The description is limited to technical work and publishable results.",
      },
    },
  ],
} as const satisfies ProjectContent;
