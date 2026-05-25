export const social = [
  { url: "mailto:javierspinoza2001@gmail.com", name: "mail", labelKey: "social-mail-label" },
  {
    url: "https://www.linkedin.com/in/javier-espinosa-pico-b1b223188/",
    name: "linkedin",
    labelKey: "social-linkedin-label",
  },
  { url: "https://wa.me/573138089035", name: "whatsapp", labelKey: "social-whatsapp-label" },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "whatsapp" | "x";
  labelKey: string;
}[];
