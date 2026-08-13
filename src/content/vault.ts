import type { Locale } from "@/lib/seo";

export const vaultServices = [
  {
    icon: "shield" as const,
    labPath: "/labs/cybersec",
    en: {
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security frameworks tailored to your organization's specific threat landscape and compliance requirements.",
      labCta: "R&D in CyberSec Lab",
    },
    es: {
      title: "Soluciones de ciberseguridad",
      description:
        "Marcos de seguridad integrales adaptados al panorama de amenazas y los requisitos de cumplimiento de tu organización.",
      labCta: "I+D en CyberSec Lab",
    },
  },
  {
    icon: "cpu" as const,
    labPath: "/labs/ai",
    en: {
      title: "AI & Machine Learning",
      description:
        "Custom AI solutions that transform your data into actionable insights and automate complex business processes.",
      labCta: "R&D in AI Lab",
    },
    es: {
      title: "IA y Machine Learning",
      description:
        "Soluciones de IA a medida que transforman tus datos en insights accionables y automatizan procesos de negocio complejos.",
      labCta: "I+D en AI Lab",
    },
  },
  {
    icon: "cloud" as const,
    en: {
      title: "Cloud Infrastructure",
      description:
        "Scalable, secure, and optimized cloud architectures designed for your specific performance and reliability needs.",
    },
    es: {
      title: "Infraestructura cloud",
      description:
        "Arquitecturas cloud escalables, seguras y optimizadas según tus necesidades de rendimiento y confiabilidad.",
    },
  },
  {
    icon: "database" as const,
    en: {
      title: "Data Engineering",
      description:
        "End-to-end data pipelines and analytics platforms that unlock the full potential of your organization's data.",
    },
    es: {
      title: "Ingeniería de datos",
      description:
        "Pipelines de datos y plataformas de analytics end-to-end que desbloquean el potencial de los datos de tu organización.",
    },
  },
  {
    icon: "smartphone" as const,
    en: {
      title: "Digital Transformation",
      description:
        "Strategic modernization of legacy systems and processes to enhance efficiency and create new business opportunities.",
    },
    es: {
      title: "Transformación digital",
      description:
        "Modernización estratégica de sistemas y procesos legacy para mejorar eficiencia y crear nuevas oportunidades de negocio.",
    },
  },
  {
    icon: "network" as const,
    en: {
      title: "IoT & Edge Computing",
      description:
        "Connected device ecosystems with real-time processing capabilities for mission-critical applications.",
    },
    es: {
      title: "IoT y Edge Computing",
      description:
        "Ecosistemas de dispositivos conectados con procesamiento en tiempo real para aplicaciones críticas.",
    },
  },
];

export const vaultCopy = {
  en: {
    title: "Excelso Vault",
    lead:
      "Our private and corporate division, dedicated to delivering strategic, scalable, and secure IT solutions.",
    ctaPartner: "Partner with Vault",
    ctaProjects: "See our projects",
    servicesBadge: "Tailored Solutions",
    servicesTitle: "Custom Enterprise Services",
    servicesLead:
      "Bespoke technology solutions designed to address your organization's unique challenges and opportunities.",
    servicesCta: "Request Custom Service",
    projectsTitle: "Featured Enterprise Solutions",
    projectsLead:
      "Discover our portfolio of closed-source enterprise solutions delivering measurable impact.",
    viewCase: "View case study",
    viewAll: "View All Case Studies",
    more: "more",
    ctaTitle: "Elevate your organization's technological capabilities",
    ctaLead:
      "Partner with Excelso Vault to transform your business through innovative technology solutions.",
    ctaContact: "Contact Us",
  },
  es: {
    title: "Excelso Vault",
    lead:
      "Nuestra división privada y corporativa, dedicada a entregar soluciones IT estratégicas, escalables y seguras.",
    ctaPartner: "Trabajá con Vault",
    ctaProjects: "Ver proyectos",
    servicesBadge: "Soluciones a medida",
    servicesTitle: "Servicios enterprise personalizados",
    servicesLead:
      "Soluciones tecnológicas diseñadas para los desafíos y oportunidades únicos de tu organización.",
    servicesCta: "Solicitar servicio a medida",
    projectsTitle: "Soluciones enterprise destacadas",
    projectsLead:
      "Conocé nuestro portfolio de soluciones enterprise closed-source con impacto medible.",
    viewCase: "Ver caso de estudio",
    viewAll: "Ver todos los casos",
    more: "más",
    ctaTitle: "Elevá las capacidades tecnológicas de tu organización",
    ctaLead:
      "Asociate con Excelso Vault para transformar tu negocio con soluciones tecnológicas innovadoras.",
    ctaContact: "Contactanos",
  },
} as const;

export type VaultCopy = (typeof vaultCopy)[Locale];
