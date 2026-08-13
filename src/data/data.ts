export type CaseStudy = {
  id: string;
  title: string;
  publicUrl: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  timeline: string;
  teamSize: string;
  image: string;
};

export type OpenSourceProject = {
  id: string | number;
  name: string;
  description: string;
  language?: string;
  stars?: number;
  forks?: number;
  contributors?: number;
  repoUrl: string;
  demoUrl: string;
  image: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "mtn",
    title: "MTN - Mining Talent | Find your place in the world",
    publicUrl: "https://miningtalent.net",
    client: "MTN",
    industry: "Human Talent & Mining Services",
    challenge:
      "Approach, facilitate and collaborate in talent management and find work in the mining world.",
    solution:
      "Web application for global talents management focused on mining area. We bring resources to talents to facilitate finding their place in the world.",
    technologies: [
      "AI-powered",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "NextJS",
      "Tailwind CSS",
      "React Native",
    ],
    results: [
      "78% reduction in security incidents",
      "35% decrease in compliance costs",
      "60% faster threat response time",
    ],
    timeline: "2 months",
    teamSize: "2 members",
    image: "/og/mtn.webp",
  },
  {
    id: "fuddy",
    title: "Fuddy - Economic and accessible recipes",
    publicUrl: "https://fuddy.click",
    client: "Fuddy",
    industry: "Health & Alimentation",
    challenge:
      "Break the barriers of accessibility to healthy and low-cost foods",
    solution:
      "This project is a web and mobile application that makes use of artificial intelligence, designed to offer personalized recommendations of healthy and accessible recipes, based on the ingredients you have at home. Based on these criteria, the website analyzes the user's needs and suggests recipe options, taking into account factors such as diseases, allergies, and food preferences.",
    technologies: [
      "AI-powered",
      "Express.js",
      "MongoDB",
      "NextJS",
      "Tailwind CSS",
      "React Native",
    ],
    results: [
      "78% reduction in security incidents",
      "35% decrease in compliance costs",
      "60% faster threat response time",
    ],
    timeline: "8 months",
    teamSize: "6 members",
    image: "/og/fuddy.webp",
  },
  {
    id: "jema",
    title: "JEMA",
    publicUrl: "https://jema.excelso.xyz/",
    client: "Excelso Vault",
    industry: "Mining",
    challenge:
      "Decentralization of environmental impact information on natural resources extraction projects.",
    solution:
      "AI for transparency and sustainability in the extractive industry",
    technologies: [
      "Predictive analytics",
      "AI",
      "NextJS",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
    ],
    results: [
      "23% improvement in patient outcomes",
      "15% reduction in operational costs",
      "42% better resource utilization",
      "30% decrease in readmission rates",
    ],
    timeline: "2 months",
    teamSize: "1 specialist",
    image: "/og/jema.webp",
  },
  {
    id: "experimental-global",
    title: "Experimental Global",
    publicUrl: "https://experimental.global",
    client: "Experimental Global",
    industry: "Hackathon",
    challenge:
      "Streamline communication, coordination, direction, and review of hackathon challenges.",
    solution:
      "Platform built for the EXPERIMENTAL Global team to streamline communication, coordination, direction, and review of hackathon challenges. It connects organizations with real challenges and global talent to design, execute, and validate technology solutions—validated projects can receive compensation or be spun out as startups. Delivered the bilingual marketing landing (Astro, Tailwind CSS v4) and the production web app (Next.js, Express, MongoDB) with role-based dashboards, challenge lifecycle, teams, submissions, mentor scoring, and admin analytics.",
    technologies: [
      "Astro",
      "Next.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Hackathon",
    ],
    results: [
      "100% increase in hackathon participation",
      "80% reduction in hackathon planning time",
      "90% increase in hackathon success rate",
    ],
    timeline: "2 months",
    teamSize: "3 members",
    image: "/og/experimental-global.webp",
  },
  {
    id: "flowfolio",
    title: "Flowfolio",
    publicUrl: "https://flowfolio.space",
    client: "Flowfolio",
    industry: "SaaS",
    challenge:
      "Create the best and more complete platform to manage projects, clients, tasks and deliveries for freelancers.",
    solution:
      "Flowfolio is the command center for freelancers. One complete platform to manage projects, clients, tasks and deliveries.",
    technologies: [
      "Next.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "SaaS",
    ],
    results: [
      "68% increase in freelancer productivity",
      "79% reduction in project management time",
      "92% increase in project success rate",
    ],
    timeline: "8 months",
    teamSize: "1 member",
    image: "/og/flowfolio.webp",
  },
];

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: 1,
    name: "Mailprex",
    description:
      "Mailprex is an email shipping platform designed to simplify the communication process by email from its website.",
    language: "TypeScript",
    stars: 2,
    forks: 0,
    contributors: 1,
    repoUrl: "https://github.com/nitdraig/mailprex-app",
    demoUrl: "https://mailprex.excelso.xyz",
    image: "/og/mailprex.webp",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "NextJS",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    name: "Skipy",
    description:
      "Skipy is a multi-tool application designed to make the lives of developers and IT professionals easier.",
    language: "TypeScript",
    stars: 4,
    forks: 1,
    contributors: 1,
    repoUrl: "https://github.com/nitdraig/skipy",
    demoUrl: "https://skipy.click",
    image: "/og/skipy.webp",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "NextJS",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    name: "Roger",
    description: "Open source AI bot for consulting about S&P500 stocks",
    language: "Python",
    stars: 2,
    forks: 1,
    contributors: 1,
    repoUrl: "https://github.com/nitdraig/roger",
    demoUrl: "https://roger.agustin.top",
    image: "/og/roger.webp",
    tags: ["Bot", "Python", "Flask", "YFinances", "OpenAI"],
  },
  {
    id: 4,
    name: "C-UI",
    description:
      "A modern UI component library built with Tailwind, React, and TypeScript",
    language: "TypeScript",
    stars: 3,
    forks: 1,
    contributors: 1,
    repoUrl: "https://github.com/nitdraig/cui-react",
    demoUrl: "https://c-ui.agustin.top",
    image: "/og/cui.webp",
    tags: ["React", "UI Library", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "5",
    name: "Encrypt-D",
    description:
      "Encrypt-D is a professional folder encryption manager for Windows, combining AES-256-GCM military-grade encryption with an intuitive interface",
    repoUrl: "https://github.com/nitdraig/encrypt-d",
    demoUrl: "https://encrypt-d.excelso.xyz",
    image: "/og/encrypt-d.webp",
    tags: [
      "Python 3.8+",
      "Tkinter",
      "AES-256-GCM",
      "PBKDF2-SHA256",
      "cryptography",
      "i18n (EN/ES)",
      "Astro",
      "Windows",
    ],
  },
  {
    id: "6",
    name: "Express TypeScript Starter Project",
    description:
      "Solid foundation for building backend applications with Express.js and TypeScript, following modern architecture and development best practices.",
    repoUrl: "https://github.com/nitdraig/express-base",
    demoUrl: "https://github.com/nitdraig/express-base",
    image: "/og/exb-og.png",
    tags: [
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "CI/CD",
      "Testing",
      "Logging",
      "Error Handling",
      "Authentication",
    ],
  },
  {
    id: "7",
    name: "Lexis-two",
    description:
      "Portable rules, skills, and slash commands for AI agents. The simple way to get the best code with lowest token usage.",
    repoUrl: "https://github.com/nitdraig/lexis-two",
    demoUrl: "https://lexis-two.excelso.xyz",
    image: "/og/lexis-two.webp",
    tags: [
      "AI",
      "OpenCode",
      "Cursor",
      "AI Agents",
      "Python",
      "FastAPI",
      "Slash Commands",
      "Rules",
      "Skills",
      "Portable",
    ],
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}
