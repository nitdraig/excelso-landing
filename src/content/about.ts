import type { Locale } from "@/lib/seo";

export const aboutCopy = {
  en: {
    title: "About Excelso",
    missionTitle: "Mission",
    mission:
      "To develop high-quality IT solutions that positively impact lives, fostering digital transformation, cybersecurity, innovation, and sustainable development.",
    visionTitle: "Vision",
    vision:
      "To be a leader in innovation, ethics, and sustainability within the IT sector, empowering individuals, organizations, and communities towards a more modern, secure, and inclusive future.",
    valuesTitle: "Core Values",
    valuesLead: "The principles that guide our work and define our culture.",
    values: [
      {
        title: "Excellence",
        description: "Pursuing the highest standards in all endeavors.",
      },
      {
        title: "Innovation",
        description: "Embracing creativity to drive technological advancement.",
      },
      {
        title: "Integrity",
        description: "Upholding transparency and ethical practices.",
      },
      {
        title: "Collaboration",
        description: "Working synergistically with clients and partners.",
      },
      {
        title: "Social & Environmental Responsibility",
        description: "Committing to positive societal and ecological impact.",
      },
      {
        title: "Flexibility",
        description: "Adapting to evolving client needs and industry trends.",
      },
      {
        title: "Sustainability",
        description: "Ensuring long-term viability in all solutions.",
      },
    ],
  },
  es: {
    title: "Sobre Excelso",
    missionTitle: "Misión",
    mission:
      "Desarrollar soluciones IT de alta calidad que impacten positivamente la vida de las personas, impulsando transformación digital, ciberseguridad, innovación y desarrollo sostenible.",
    visionTitle: "Visión",
    vision:
      "Ser líderes en innovación, ética y sostenibilidad en el sector IT, empoderando a personas, organizaciones y comunidades hacia un futuro más moderno, seguro e inclusivo.",
    valuesTitle: "Valores",
    valuesLead: "Los principios que guían nuestro trabajo y definen nuestra cultura.",
    values: [
      {
        title: "Excelencia",
        description: "Buscar los más altos estándares en todo lo que hacemos.",
      },
      {
        title: "Innovación",
        description: "Abrazar la creatividad para impulsar el avance tecnológico.",
      },
      {
        title: "Integridad",
        description: "Mantener transparencia y prácticas éticas.",
      },
      {
        title: "Colaboración",
        description: "Trabajar en sinergia con clientes y partners.",
      },
      {
        title: "Responsabilidad social y ambiental",
        description: "Compromiso con un impacto social y ecológico positivo.",
      },
      {
        title: "Flexibilidad",
        description: "Adaptarnos a las necesidades del cliente y a las tendencias del sector.",
      },
      {
        title: "Sostenibilidad",
        description: "Asegurar viabilidad a largo plazo en todas las soluciones.",
      },
    ],
  },
} as const;

export type AboutCopy = (typeof aboutCopy)[Locale];
