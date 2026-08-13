import type { Locale } from "@/lib/seo";

export const labsCopy = {
  en: {
    title: "Excelso Labs",
    seoTitle: "Excelso Labs",
    seoDescription:
      "Experimental initiatives at Excelso that generate impact projects—innovation, workflow improvement, and development—released as open source or kept in Vault when contracts, security, or privacy require it.",
    badge: "R&D initiatives",
    lead:
      "Labs invent impact. Each initiative can ship through Excelso Open or Excelso Vault—public when we can share, closed when we must protect.",
    positioning:
      "We run experimental labs to generate projects with real impact: innovation, better operational flows, and new development. Work from either lab may be released as open source or delivered as closed Vault work when contracts, security, or privacy require it.",
    outcomesTitle: "Open when we can. Vault when we must.",
    outcomesLead:
      "AI Lab and CyberSec Lab are not locked to one division. The same initiative can produce a public advance or a private delivery.",
    openTrackTitle: "Shown in Excelso Open",
    openTrackLead:
      "Advances we can share: open-source tools, methods, demos, and education that grow the community without exposing client or sensitive data.",
    vaultTrackTitle: "Shown in Excelso Vault",
    vaultTrackLead:
      "Developments kept closed because of contracts, security, or privacy—client IP, threat models, regulated data, or production systems that must not be public.",
    cardsCta: "Explore the lab",
    ctaTitle: "Build impact with Excelso Labs",
    ctaLead:
      "Partner on applied research, or follow what we can publish. Tell us whether the work should live in Open, Vault, or both over time.",
    ctaContact: "Contact Us",
    ctaOpen: "Discover Open",
    ctaVault: "Explore Vault",
    aiName: "Excelso AI Lab",
    aiMotto: "Structuring context, accelerating intelligence.",
    aiCode: "EXC-LAB-AI",
    aiBlurb:
      "Applied AI, agents, and high-precision RAG—aimed at industrial, environmental, and productivity impact.",
    secName: "Excelso CyberSec Lab",
    secMotto: "Security by design, resilience by code.",
    secCode: "EXC-LAB-SEC",
    secBlurb:
      "AppSec, DevSecOps, and continuous audit so products and infrastructure stay trustworthy as they scale.",
  },
  es: {
    title: "Excelso Labs",
    seoTitle: "Excelso Labs",
    seoDescription:
      "Iniciativas experimentales de Excelso que generan proyectos de impacto—innovación, mejora de flujos y desarrollo—publicados como open source o mantenidos en Vault cuando lo exigen contratos, seguridad o privacidad.",
    badge: "Iniciativas de I+D",
    lead:
      "Los labs inventan impacto. Cada iniciativa puede salir por Excelso Open o Excelso Vault: público cuando podemos compartir, cerrado cuando debemos proteger.",
    positioning:
      "Impulsamos labs experimentales para generar proyectos con impacto real: innovación, mejora de flujos operativos y nuevo desarrollo. El trabajo de cualquiera de los dos labs puede publicarse como open source o entregarse como trabajo cerrado de Vault cuando lo exigen contratos, seguridad o privacidad.",
    outcomesTitle: "Open cuando podemos. Vault cuando debemos.",
    outcomesLead:
      "AI Lab y CyberSec Lab no están atados a una sola división. La misma iniciativa puede producir un avance público o una entrega privada.",
    openTrackTitle: "Se muestra en Excelso Open",
    openTrackLead:
      "Avances que podemos compartir: herramientas open source, métodos, demos y educación que crecen la comunidad sin exponer datos de clientes o información sensible.",
    vaultTrackTitle: "Se muestra en Excelso Vault",
    vaultTrackLead:
      "Desarrollos que permanecen cerrados por contratos, seguridad o privacidad: IP del cliente, modelos de amenaza, datos regulados o sistemas productivos que no deben ser públicos.",
    cardsCta: "Explorar el lab",
    ctaTitle: "Construí impacto con Excelso Labs",
    ctaLead:
      "Asociate en investigación aplicada, o seguí lo que podemos publicar. Contanos si el trabajo debe vivir en Open, Vault, o en ambos a lo largo del tiempo.",
    ctaContact: "Contactanos",
    ctaOpen: "Descubrir Open",
    ctaVault: "Explorar Vault",
    aiName: "Excelso AI Lab",
    aiMotto: "Estructurando contexto, acelerando inteligencia.",
    aiCode: "EXC-LAB-AI",
    aiBlurb:
      "IA aplicada, agentes y RAG de alta precisión—con impacto industrial, ambiental y de productividad.",
    secName: "Excelso CyberSec Lab",
    secMotto: "Seguridad por diseño, resistencia por código.",
    secCode: "EXC-LAB-SEC",
    secBlurb:
      "AppSec, DevSecOps y auditoría continua para que productos e infraestructura sigan siendo confiables al escalar.",
  },
} as const;

export type LabsCopy = (typeof labsCopy)[Locale];
