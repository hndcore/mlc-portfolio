type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    company: "Capitole Consulting",
    role: "Senior Frontend Developer",
    period: "Mar 2026 - Present",
    location: "Madrid, ES · Remote",
    highlights: [
      "Developing frontend features for an international fintech and insurance client, coordinating technical work within small teams and collaborating across teams.",
      "Providing technical guidance and support to frontend developers across teams, helping align engineering practices and unblock delivery challenges.",
      "Partnering with engineering, product and business stakeholders to plan and deliver quarterly releases.",
      "Established frontend testing and quality standards, including Sonar integration with DevOps.",
      "Helped deliver a frontend release that reduced reported bugs by over 83% during a quarterly cycle.",
      "Driving transversal technical initiatives through proof-of-concepts and tooling evaluations, providing implementation feedback and technical recommendations to engineering leadership and management.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "Testing",
      "Jest",
      "RTL",
      "SonarQube",
      "Azure CI/CD",
    ],
  },
  {
    company: "eDreams ODIGEO",
    role: "Frontend Software Engineer",
    period: "Oct 2025 - Feb 2026",
    location: "Barcelona, ES · Hybrid",
    highlights: [
      "Led the development of the frontend for a core back-office project and helped migrate it to a modern stack.",
      "Reduced lead time by 18% while delivering features under Lean methodology.",
      "Built a feature flag system that reduced deployment risk by 40% and enabled fast rollbacks.",
      "Stabilized E2E testing with Robot Framework, MSW and standardized API contracts with backend teams.",
      "Integrated MSW (Mock Service Worker) to streamline testing and decoupled development environments.",
      "Spearheaded UX/UI design initiatives in close collaboration with the Project Manager.",
      "Partnered with the backend team to define and standardize API contracts.",
      "Authored comprehensive technical documentation in Confluence, including a full architectural migration plan from React 16/Node 14 to React 18/Node 20",
    ],
    technologies: [
      "React",
      "Node",
      "TypeScript",
      "Robot Framework",
      "MSW",
      "Feature Flags",
      "Jenkins",
    ],
  },
  {
    company: "Paradigma Digital",
    role: "Frontend / Fullstack Developer",
    period: "Sep 2023 - Oct 2025",
    location: "Madrid, ES · Remote",
    highlights: [
      "Developed backoffice tools with microfrontend architecture that enabled the client to access critical KPIs they had previously lacked direct access to, facilitating their decision-making process and business analysis.",
      "Created React architectures with custom component libraries, Redux Saga, React Query and Zustand.",
      "Reduced lead time from specification to launch by 16% through delivery and architecture improvements.",
      "Designed Node.js APIs and promoted Cypress E2E strategies that reduced production bugs by up to 63% according to client metrics.",
      "Wrote technical articles for the company blog and participated in a podcast about growth strategies in a technical career.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Koa",
      "Express",
      "React Query",
      "Redux Saga",
      "Cypress",
      "Jest",
      "Kubernetes",
      "Recharts",
      "Zustand",
      "Storybook",
      "SonarQube",
      "Visx",
    ],
  },
  {
    company: "Knowmad Mood",
    role: "Frontend Developer",
    period: "Sep 2020 - Sep 2023",
    location: "Sevilla, ES · Remote",
    highlights: [
      "Built complex React architectures with dynamic components, Redux and Redux Saga.",
      "Built the frontend for an internal file management platform with Angular and exhaustive testing.",
      "Developed mobile applications with Ionic and introduced React Native for internal booking workflows.",
      "Contributed to training, technical interviews and Cypress adoption as a frontend E2E standard.",
      "Served as a technical evangelist delivering talks about emerging technologies and promoting the adoption of Cypress as the corporate standard tool in the frontend area for e2e testing.",
    ],
    technologies: [
      "React",
      "Angular",
      "Ionic",
      "React Native",
      "Cypress",
      "Redux",
      "Redux Saga",
      "Jest",
      "Storybook",
      "SonarQube",
      "GraphQL",
      "TypeScript",
    ],
  },
];

export { experiences };
export type { Experience };
