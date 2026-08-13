import type { Locale } from "@/lib/seo";

export const openCopy = {
  en: {
    title: "Excelso Open",
    lead:
      "Our open-source and community-focused branch, championing collaborative technology and social impact projects. Some experimental work from Excelso Labs is released here; other lab work stays in Vault when contracts, security, or privacy require it.",
    ctaGithub: "GitHub Organization",
    ctaProjects: "See our projects",
    ctaLabs: "Explore Labs",
    projectsTitle: "Active Open Source Projects",
    projectsLead:
      "Explore our community-driven projects and contributions to the open source ecosystem.",
    viewAll: "View All Projects",
    repo: "Repo",
    demo: "Demo",
    ctaTitle: "Contribute to a collaborative and inclusive digital future",
    ctaLead:
      "Join Excelso Open to be part of technology initiatives that make a positive impact on society.",
    ctaInvolve: "Get Involved",
  },
  es: {
    title: "Excelso Open",
    lead:
      "Nuestra rama open source y comunitaria, impulsando tecnología colaborativa y proyectos de impacto social. Parte del trabajo experimental de Excelso Labs se publica aquí; otro permanece en Vault cuando lo exigen contratos, seguridad o privacidad.",
    ctaGithub: "Organización en GitHub",
    ctaProjects: "Ver proyectos",
    ctaLabs: "Explorar Labs",
    projectsTitle: "Proyectos open source activos",
    projectsLead:
      "Explorá nuestros proyectos comunitarios y contribuciones al ecosistema open source.",
    viewAll: "Ver todos los proyectos",
    repo: "Repo",
    demo: "Demo",
    ctaTitle: "Contribuí a un futuro digital colaborativo e inclusivo",
    ctaLead:
      "Sumate a Excelso Open y formá parte de iniciativas tecnológicas con impacto positivo en la sociedad.",
    ctaInvolve: "Participá",
  },
} as const;

export type OpenCopy = (typeof openCopy)[Locale];
