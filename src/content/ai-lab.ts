import type { Locale } from "@/lib/seo";

export const aiLabCopy = {
  en: {
    title: "Excelso AI Lab",
    seoTitle: "Excelso AI Lab",
    seoDescription:
      "Excelso AI Lab develops applied AI architectures, agents, and high-precision RAG. Outcomes may ship as open source or as closed Vault work when contracts, security, or privacy require it.",
    motto: "Structuring context, accelerating intelligence.",
    code: "EXC-LAB-AI",
    lead:
      "An experimental initiative to generate impact projects: innovation, better workflows, and applied development. Results can surface in Excelso Open or Excelso Vault.",
    missionTitle: "Mission",
    mission:
      "Develop applied AI architectures, autonomous agents, and high-precision RAG systems—reducing bias and computational cost—to solve industrial, environmental, and productivity problems.",
    visionTitle: "Vision",
    vision:
      "Become a technical reference in Context Engineering and agile AI integration in Latin America, turning abstract algorithms into high-impact commercial and social products.",
    valuesTitle: "Values",
    valuesLead: "How we choose what to build and what to publish.",
    values: [
      {
        title: "Deterministic efficiency",
        description:
          "Prefer architectures that are measurable, repeatable, and cheap to run over prompt theatre.",
      },
      {
        title: "Technological transparency",
        description:
          "Explain methods when we can share them; never hide risk behind marketing language.",
      },
      {
        title: "Context over prompting",
        description:
          "Structure retrieval, memory, and constraints first. Prompts are the last mile, not the product.",
      },
      {
        title: "Algorithmic sustainability",
        description:
          "Optimize compute and data use so intelligence stays useful without waste.",
      },
    ],
    focusTitle: "Research focus",
    focusLead:
      "Themes we explore in the lab. Delivery catalogs stay on Vault; public tools stay on Open.",
    focus: [
      {
        title: "Context Engineering",
        description:
          "Pipelines that give models the right evidence, policies, and memory—not just a longer prompt.",
      },
      {
        title: "Autonomous agents",
        description:
          "Task-bounded agents for operations and knowledge work, with human checkpoints where impact is high.",
      },
      {
        title: "High-precision RAG",
        description:
          "Retrieval systems tuned for accuracy, citations, and lower hallucination in real domains.",
      },
      {
        title: "Bias and cost",
        description:
          "Reduce systematic error and computational spend so solutions stay fair and viable.",
      },
    ],
    ctaTitle: "Put applied intelligence to work",
    ctaLead:
      "If the problem can be shared, we aim for Open. If it is bound by a contract, security, or privacy, it ships through Vault.",
    ctaContact: "Start a conversation",
    ctaOpen: "See Open",
    ctaVault: "See Vault",
    ctaLabs: "All Labs",
  },
  es: {
    title: "Excelso AI Lab",
    seoTitle: "Excelso AI Lab",
    seoDescription:
      "Excelso AI Lab desarrolla arquitecturas de IA aplicada, agentes y RAG de alta precisión. Los resultados pueden publicarse como open source o como trabajo cerrado de Vault cuando lo exigen contratos, seguridad o privacidad.",
    motto: "Estructurando contexto, acelerando inteligencia.",
    code: "EXC-LAB-AI",
    lead:
      "Una iniciativa experimental para generar proyectos de impacto: innovación, mejores flujos y desarrollo aplicado. Los resultados pueden aparecer en Excelso Open o Excelso Vault.",
    missionTitle: "Misión",
    mission:
      "Desarrollar arquitecturas de IA aplicada, agentes autónomos y sistemas RAG de alta precisión, reduciendo sesgos y costos computacionales, para resolver problemas industriales, ambientales y de productividad.",
    visionTitle: "Visión",
    vision:
      "Posicionarse como referente técnico en Context Engineering e integración ágil de IA en Latinoamérica, transformando algoritmos abstractos en productos de alto impacto comercial y social.",
    valuesTitle: "Valores",
    valuesLead: "Cómo elegimos qué construir y qué publicar.",
    values: [
      {
        title: "Eficiencia determinista",
        description:
          "Preferimos arquitecturas medibles, repetibles y baratas de operar antes que teatro de prompts.",
      },
      {
        title: "Transparencia tecnológica",
        description:
          "Explicamos métodos cuando podemos compartirlos; no escondemos riesgo detrás de lenguaje de marketing.",
      },
      {
        title: "Contexto sobre prompting",
        description:
          "Primero estructuramos recuperación, memoria y restricciones. El prompt es la última milla, no el producto.",
      },
      {
        title: "Sostenibilidad algorítmica",
        description:
          "Optimizamos cómputo y uso de datos para que la inteligencia siga siendo útil sin desperdicio.",
      },
    ],
    focusTitle: "Foco de investigación",
    focusLead:
      "Temas que exploramos en el lab. El catálogo de entrega permanece en Vault; las herramientas públicas, en Open.",
    focus: [
      {
        title: "Context Engineering",
        description:
          "Pipelines que dan a los modelos evidencia, políticas y memoria correctas—no solo un prompt más largo.",
      },
      {
        title: "Agentes autónomos",
        description:
          "Agentes acotados a tareas para operaciones y conocimiento, con checkpoints humanos donde el impacto es alto.",
      },
      {
        title: "RAG de alta precisión",
        description:
          "Sistemas de recuperación afinados para exactitud, citas y menos alucinación en dominios reales.",
      },
      {
        title: "Sesgo y costo",
        description:
          "Reducir error sistemático y gasto computacional para que las soluciones sean justas y viables.",
      },
    ],
    ctaTitle: "Pongamos inteligencia aplicada a trabajar",
    ctaLead:
      "Si el problema se puede compartir, apuntamos a Open. Si está atado a un contrato, a seguridad o a privacidad, sale por Vault.",
    ctaContact: "Empezar una conversación",
    ctaOpen: "Ver Open",
    ctaVault: "Ver Vault",
    ctaLabs: "Todos los Labs",
  },
} as const;

export type AiLabCopy = (typeof aiLabCopy)[Locale];
