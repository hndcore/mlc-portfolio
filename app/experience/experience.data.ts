type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  category: string;
  logoSrc: string;
  logoAlt: string;
  highlights: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    company: "Capitole Consulting",
    role: "Senior Frontend Developer",
    period: "Mar 2026 - Present",
    location: "Madrid, ES · Remote",
    category: "Fintech / Consulting",
    logoSrc: "/capitole.webp",
    logoAlt: "Capitole Consulting logo",
    highlights: [
      "Leading frontend initiatives for an international fintech and insurance client across multiple teams.",
      "Partnering with engineering, product and business stakeholders to plan and deliver quarterly releases.",
      "Established frontend testing and quality standards, including Sonar integration with DevOps.",
      "Led a frontend release that reduced reported bugs by over 83% during a quarterly cycle.",
    ],
    technologies: ["React", "TypeScript", "Testing", "SonarQube", "CI/CD"],
  },
  {
    company: "eDreams ODIGEO",
    role: "Frontend Software Engineer",
    period: "Oct 2025 - Feb 2026",
    location: "Barcelona, ES · Hybrid",
    category: "Travel / Tech",
    logoSrc: "/edreams.webp",
    logoAlt: "eDreams ODIGEO logo",
    highlights: [
      "Led frontend development for a core back-office project and its migration to a modern stack.",
      "Reduced lead time by 18% while delivering features under Lean methodology.",
      "Built a feature flag system that reduced deployment risk by 40% and enabled fast rollbacks.",
      "Stabilized E2E testing with Robot Framework, MSW and standardized API contracts with backend teams.",
    ],
    technologies: [
      "React 18",
      "Node 20",
      "TypeScript",
      "Robot Framework",
      "MSW",
      "Feature Flags",
    ],
  },
  {
    company: "Paradigma Digital",
    role: "Frontend / Fullstack Developer",
    period: "Sep 2023 - Oct 2025",
    location: "Madrid, ES · Remote",
    category: "Digital Agency",
    logoSrc: "/paradigma.webp",
    logoAlt: "Paradigma Digital logo",
    highlights: [
      "Built microfrontend back-office tools for a major Spanish retail fashion client.",
      "Created React architectures with custom component libraries, Redux Saga, React Query and Zustand.",
      "Reduced lead time from specification to launch by 16% through delivery and architecture improvements.",
      "Designed Node.js APIs and promoted Cypress E2E strategies that reduced production bugs by up to 63%.",
    ],
    technologies: ["React", "Node.js", "Koa", "Redux Saga", "Cypress"],
  },
  {
    company: "Knowmad Mood",
    role: "Frontend Developer",
    period: "Sep 2020 - Sep 2023",
    location: "Sevilla, ES · Remote",
    category: "Consulting / Tech",
    logoSrc: "/knowmad.webp",
    logoAlt: "Knowmad Mood logo",
    highlights: [
      "Built complex React architectures with dynamic components, Redux and Redux Saga.",
      "Led frontend development for an internal file management platform with Angular and exhaustive testing.",
      "Developed mobile applications with Ionic and introduced React Native for internal booking workflows.",
      "Contributed to training, technical interviews and Cypress adoption as a frontend E2E standard.",
    ],
    technologies: ["React", "Angular", "Ionic", "React Native", "Cypress"],
  },
];

export { experiences };
export type { Experience };
