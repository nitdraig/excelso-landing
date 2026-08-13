import type { Locale } from "@/lib/seo";

export const homeCopy = {
  en: {
    badge: "Tech Group",
    h1a: "We fix it thinking of you.",
    h1bPrefix: "We are ",
    h1bHighlight: "solutions",
    h1c: "We are Excelso.",
    lead:
      "A tech group driving innovation, digitalization, and sustainability through digital solutions.",
    ctaVault: "Explore Vault",
    ctaOpen: "Discover Open",
    scroll: "Scroll to explore",
    divisionsTitle: "Our Divisions",
    divisionsLead:
      "Excelso delivers through two specialized divisions—and experimental labs that generate impact projects for either Open or Vault.",
    vaultTitle: "Excelso Vault",
    vaultLead:
      "Our private and corporate division, dedicated to delivering strategic, scalable, and secure IT solutions.",
    vaultBullets: [
      "Process modernization strategies",
      "Applied artificial intelligence solutions",
      "Scalable digital infrastructure",
    ],
    openTitle: "Excelso Open",
    openLead:
      "Our open-source and community-focused branch, championing collaborative technology and social impact projects.",
    openBullets: [
      "Development of open-source projects",
      "Public-private collaborative efforts",
      "IT education and mentorship programs",
    ],
    stats: [
      { to: 4, label: "Years of Experience" },
      { to: 20, label: "Completed Projects" },
      { to: 3, label: "Open Source Projects" },
    ],
    ctaTitle: "Ready to transform your digital future?",
    ctaLead:
      "Connect with our team to explore how Excelso can help you achieve your technological goals.",
    ctaContact: "Contact Us",
    ctaAbout: "Learn More",
    labsTitle: "Excelso Labs",
    labsLead:
      "Initiatives that generate impact projects—innovation, better workflows, and development. Advances may be released as open source or kept closed when contracts, security, or privacy require it.",
    labsCta: "Explore Labs",
    labsAiCta: "AI Lab",
    labsSecCta: "CyberSec Lab",
  },
  es: {
    badge: "Grupo tecnológico",
    h1a: "Lo resolvemos pensando en vos.",
    h1bPrefix: "Somos ",
    h1bHighlight: "soluciones",
    h1c: "Somos Excelso.",
    lead:
      "Un grupo tecnológico que impulsa innovación, digitalización y sostenibilidad a través de soluciones digitales.",
    ctaVault: "Explorar Vault",
    ctaOpen: "Descubrir Open",
    scroll: "Desplazá para explorar",
    divisionsTitle: "Nuestras divisiones",
    divisionsLead:
      "Excelso entrega a través de dos divisiones especializadas—y labs experimentales que generan proyectos de impacto para Open o Vault.",
    vaultTitle: "Excelso Vault",
    vaultLead:
      "Nuestra división privada y corporativa, dedicada a entregar soluciones IT estratégicas, escalables y seguras.",
    vaultBullets: [
      "Estrategias de modernización de procesos",
      "Soluciones de inteligencia artificial aplicada",
      "Infraestructura digital escalable",
    ],
    openTitle: "Excelso Open",
    openLead:
      "Nuestra rama open source y comunitaria, impulsando tecnología colaborativa y proyectos de impacto social.",
    openBullets: [
      "Desarrollo de proyectos open source",
      "Colaboraciones público-privadas",
      "Educación IT y programas de mentoría",
    ],
    stats: [
      { to: 4, label: "Años de experiencia" },
      { to: 20, label: "Proyectos completados" },
      { to: 3, label: "Proyectos open source" },
    ],
    ctaTitle: "¿Listo para transformar tu futuro digital?",
    ctaLead:
      "Conectá con nuestro equipo para explorar cómo Excelso puede ayudarte a lograr tus objetivos tecnológicos.",
    ctaContact: "Contactanos",
    ctaAbout: "Conocenos",
    labsTitle: "Excelso Labs",
    labsLead:
      "Iniciativas que generan proyectos de impacto—innovación, mejores flujos y desarrollo. Los avances pueden publicarse como open source o permanecer cerrados cuando lo exigen contratos, seguridad o privacidad.",
    labsCta: "Explorar Labs",
    labsAiCta: "AI Lab",
    labsSecCta: "CyberSec Lab",
  },
} as const;

export type HomeCopy = (typeof homeCopy)[Locale];
