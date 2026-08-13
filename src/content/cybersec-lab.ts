import type { Locale } from "@/lib/seo";

export const cybersecLabCopy = {
  en: {
    title: "Excelso CyberSec Lab",
    seoTitle: "Excelso CyberSec Lab",
    seoDescription:
      "Excelso CyberSec Lab hardens apps, APIs, and infrastructure with AppSec, DevSecOps, and continuous audit. Findings may be published as open source or kept in Vault for contracts, security, or privacy.",
    motto: "Security by design, resilience by code.",
    code: "EXC-LAB-SEC",
    lead:
      "An experimental initiative to generate impact projects: safer products, better security workflows, and defensive development. Outcomes can surface in Excelso Open or Excelso Vault.",
    missionTitle: "Mission",
    mission:
      "Harden applications, APIs, and infrastructure across the Excelso ecosystem through advanced AppSec, DevSecOps, and continuous audit—protecting client and community data.",
    visionTitle: "Vision",
    vision:
      "Become the preventive-security standard for fast-scaling SaaS and cloud/VPS infrastructure in the region.",
    valuesTitle: "Values",
    valuesLead: "How we decide what to harden, share, or keep closed.",
    values: [
      {
        title: "Zero Trust",
        description:
          "Never assume the network, the user, or the pipeline is safe. Verify continuously.",
      },
      {
        title: "Operational resilience",
        description:
          "Design for failure, recovery, and audit trails—not only for a clean first release.",
      },
      {
        title: "Privacy by design",
        description:
          "Minimize data, protect it in transit and at rest, and refuse to publish what would harm people or clients.",
      },
      {
        title: "Digital ethics",
        description:
          "Defensive research and disclosure. We do not offer offensive hacking as a product.",
      },
    ],
    focusTitle: "Research focus",
    focusLead:
      "Defensive themes we explore in the lab. Enterprise security delivery stays on Vault; shareable hardening patterns can go to Open.",
    focus: [
      {
        title: "Application security",
        description:
          "Secure SDLC, threat modeling, and review of web apps and APIs before they reach production.",
      },
      {
        title: "DevSecOps",
        description:
          "Controls in CI/CD, secrets, supply chain, and infrastructure as code for teams that ship often.",
      },
      {
        title: "Continuous audit",
        description:
          "Monitoring and verification so fast-scaling SaaS and VPS stacks do not drift into risk.",
      },
      {
        title: "Cloud and privacy",
        description:
          "Hardening cloud/VPS deployments and aligning controls with privacy and data-integrity needs.",
      },
    ],
    ctaTitle: "Build with security in the loop",
    ctaLead:
      "Public patterns belong in Open. Client assessments, exploit details, and regulated environments stay in Vault.",
    ctaContact: "Start a conversation",
    ctaOpen: "See Open",
    ctaVault: "See Vault",
    ctaLabs: "All Labs",
  },
  es: {
    title: "Excelso CyberSec Lab",
    seoTitle: "Excelso CyberSec Lab",
    seoDescription:
      "Excelso CyberSec Lab blinda apps, APIs e infraestructura con AppSec, DevSecOps y auditoría continua. Los hallazgos pueden publicarse como open source o permanecer en Vault por contratos, seguridad o privacidad.",
    motto: "Seguridad por diseño, resistencia por código.",
    code: "EXC-LAB-SEC",
    lead:
      "Una iniciativa experimental para generar proyectos de impacto: productos más seguros, mejores flujos de seguridad y desarrollo defensivo. Los resultados pueden aparecer en Excelso Open o Excelso Vault.",
    missionTitle: "Misión",
    mission:
      "Blindar aplicaciones, APIs e infraestructuras del ecosistema Excelso mediante AppSec, DevSecOps y auditoría continua, garantizando la integridad de los datos de clientes y comunidades.",
    visionTitle: "Visión",
    vision:
      "Convertirse en el estándar de seguridad preventiva para productos SaaS e infraestructuras cloud/VPS de rápido escalamiento en la región.",
    valuesTitle: "Valores",
    valuesLead: "Cómo decidimos qué endurecer, compartir o mantener cerrado.",
    values: [
      {
        title: "Confianza cero",
        description:
          "Nunca asumimos que la red, el usuario o el pipeline son seguros. Verificamos de forma continua.",
      },
      {
        title: "Resiliencia operativa",
        description:
          "Diseñamos para fallos, recuperación y trazas de auditoría—no solo para un primer release limpio.",
      },
      {
        title: "Privacidad por diseño",
        description:
          "Minimizamos datos, los protegemos en tránsito y en reposo, y no publicamos lo que dañaría a personas o clientes.",
      },
      {
        title: "Ética digital",
        description:
          "Investigación y divulgación defensivas. No ofrecemos hacking ofensivo como producto.",
      },
    ],
    focusTitle: "Foco de investigación",
    focusLead:
      "Temas defensivos que exploramos en el lab. La entrega de seguridad enterprise permanece en Vault; los patrones compartibles pueden ir a Open.",
    focus: [
      {
        title: "Seguridad de aplicaciones",
        description:
          "SDLC seguro, modelado de amenazas y revisión de apps web y APIs antes de producción.",
      },
      {
        title: "DevSecOps",
        description:
          "Controles en CI/CD, secretos, cadena de suministro e infraestructura como código para equipos que entregan seguido.",
      },
      {
        title: "Auditoría continua",
        description:
          "Monitoreo y verificación para que stacks SaaS y VPS de rápido crecimiento no deriven en riesgo.",
      },
      {
        title: "Cloud y privacidad",
        description:
          "Endurecimiento de despliegues cloud/VPS y alineación de controles con privacidad e integridad de datos.",
      },
    ],
    ctaTitle: "Construí con seguridad en el circuito",
    ctaLead:
      "Los patrones públicos van a Open. Evaluaciones de cliente, detalles de exploit y entornos regulados permanecen en Vault.",
    ctaContact: "Empezar una conversación",
    ctaOpen: "Ver Open",
    ctaVault: "Ver Vault",
    ctaLabs: "Todos los Labs",
  },
} as const;

export type CybersecLabCopy = (typeof cybersecLabCopy)[Locale];
