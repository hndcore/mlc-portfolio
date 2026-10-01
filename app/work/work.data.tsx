import type { LucideIcon } from "lucide-react";
import {
  BugOff,
  ChartNoAxesCombined,
  FlaskConical,
  GitPullRequestArrow,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Smartphone,
  SquareCheckBig,
  ToggleRight,
  Users,
} from "lucide-react";

type WorkCase = {
  icon: LucideIcon;
  label: string;
  title: string;
  context: string;
  outcome: string;
  contributions: string[];
  technologies: string[];
};

type WorkPrinciple = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type WorkStackGroup = {
  title: string;
  items: string[];
};

type WorkPublication = {
  source: string;
  language: string;
  title: string;
  description: string;
  url: string;
  action: string;
};

const workCases: WorkCase[] = [
  {
    icon: BugOff,
    label: "Quality",
    title: "Reducing frontend bugs before release",
    context:
      "A product team needed more confidence around quarterly delivery, especially in flows where regressions were expensive to discover late.",
    outcome:
      "Reduced reported frontend bugs by over 83% during a quarterly cycle by tightening review, testing and quality gates.",
    contributions: [
      "Reviewed fragile UI paths and turned recurring issues into explicit checks.",
      "Promoted smaller pull requests, clearer acceptance criteria and practical code review standards.",
      "Aligned product and engineering on what needed automated coverage before release.",
    ],
    technologies: ["React", "TypeScript", "Testing", "SonarQube", "CI/CD"],
  },
  {
    icon: SquareCheckBig,
    label: "Testing",
    title: "Building a testing strategy for complex products",
    context:
      "Several teams were shipping features across frontend, backend and QA boundaries with uneven test ownership and duplicated manual checks.",
    outcome:
      "Created a more sustainable testing culture with clearer responsibilities, better API contracts and safer E2E coverage.",
    contributions: [
      "Defined where unit, integration and E2E tests should live in the delivery flow.",
      "Used API mocking and stable contracts to reduce flaky frontend tests.",
      "Helped teams choose the smallest useful test instead of defaulting to broad E2E coverage.",
    ],
    technologies: [
      "React Testing Library",
      "Cypress",
      "Robot Framework",
      "MSW",
    ],
  },
  {
    icon: ShieldCheck,
    label: "Code health",
    title: "Introducing maintainability checks in CI",
    context:
      "A growing codebase needed consistent quality signals without turning tooling into a blocker for day-to-day delivery.",
    outcome:
      "Improved visibility of code health and made quality standards part of the release process through SonarQube integration.",
    contributions: [
      "Connected quality analysis to the existing DevOps workflow.",
      "Turned static analysis feedback into team conventions instead of one-off fixes.",
      "Balanced strictness with developer experience so the gates stayed useful.",
    ],
    technologies: ["SonarQube", "Azure DevOps", "TypeScript", "CI/CD"],
  },
  {
    icon: Layers3,
    label: "Architecture",
    title: "Modernizing a core back-office frontend",
    context:
      "A core back-office project at eDreams ODIGEO needed to move from React 16 and Node 14 to React 18 and Node 20 while continuing to deliver features.",
    outcome:
      "Helped migrate the frontend to a modern stack and reduced lead time by 18% while delivering features under Lean methodology.",
    contributions: [
      "Developed the frontend for the core back-office project.",
      "Documented the architectural migration plan and technical implementation in Confluence.",
      "Worked closely with the Project Manager on UX/UI design initiatives.",
    ],
    technologies: ["React 18", "Node 20", "TypeScript", "Confluence"],
  },
  {
    icon: ToggleRight,
    label: "Release safety",
    title: "Reducing deployment risk with feature flags",
    context:
      "Feature delivery for a core back-office project at eDreams ODIGEO included managing deployment risk and supporting fast rollbacks.",
    outcome:
      "Built a feature flag system that reduced deployment risk by 40% and enabled fast rollbacks.",
    contributions: [
      "Implemented frontend feature flags for the core back-office project.",
      "Used the feature flag system to support fast rollbacks.",
    ],
    technologies: ["React", "TypeScript", "Feature Flags"],
  },
  {
    icon: ChartNoAxesCombined,
    label: "Business visibility",
    title: "Giving business teams direct access to critical KPIs",
    context:
      "A client at Paradigma Digital lacked direct access to critical KPIs needed for business analysis and decision-making.",
    outcome:
      "Developed microfrontend back-office tools that made those KPIs directly accessible to the client.",
    contributions: [
      "Built back-office interfaces using a microfrontend architecture.",
      "Created React architectures with custom component libraries.",
      "Implemented state management and data fetching with Redux Saga, React Query and Zustand.",
    ],
    technologies: ["React", "Redux Saga", "React Query", "Zustand"],
  },
  {
    icon: FlaskConical,
    label: "Technical evaluation",
    title: "Evaluating tools through practical proofs of concept",
    context:
      "Cross-team technical initiatives at Capitole Consulting involved evaluating tooling and providing implementation feedback to engineering leadership and management.",
    outcome:
      "Provided technical recommendations grounded in proofs of concept, tooling evaluations and implementation feedback.",
    contributions: [
      "Built proofs of concept for technical initiatives spanning multiple teams.",
      "Evaluated tooling and shared practical implementation feedback.",
      "Supported frontend developers with technical guidance and helped unblock delivery challenges.",
    ],
    technologies: ["React", "TypeScript"],
  },
  {
    icon: Smartphone,
    label: "Mobile development",
    title: "Building mobile apps and internal booking workflows",
    context:
      "Development work at Knowmad Mood included mobile applications and internal booking workflows alongside web frontend projects.",
    outcome:
      "Delivered mobile applications with Ionic and introduced React Native for internal booking workflows.",
    contributions: [
      "Developed mobile applications using Ionic.",
      "Introduced React Native for internal booking workflows.",
    ],
    technologies: ["Ionic", "React Native"],
  },
  {
    icon: GraduationCap,
    label: "Knowledge sharing",
    title: "Sharing technical practices beyond individual projects",
    context:
      "Alongside product development at Knowmad Mood and Paradigma Digital, I contributed to internal training and shared technical experience through talks, articles and a podcast.",
    outcome:
      "Helped promote Cypress as a corporate frontend E2E standard and shared technical knowledge with colleagues and the wider community.",
    contributions: [
      "Delivered talks about emerging technologies and promoted Cypress adoption at Knowmad Mood.",
      "Contributed to training and technical interviews.",
      "Wrote articles for the Paradigma Digital blog and joined a podcast on growth strategies in a technical career.",
    ],
    technologies: ["Cypress"],
  },
];

const workPublications: WorkPublication[] = [
  {
    source: "Paradigma Digital · Spotify",
    language: "Spanish",
    title:
      "Más allá del código: habilidades y enfoques para crecer en una carrera técnica",
    description:
      "A conversation about growing in a technical career, continuous learning, communication and supporting teammates beyond writing code.",
    url: "https://open.spotify.com/episode/54mPLEdQO0jcEohzmiOhGJ?si=D3QCghnmQbebnUlkeq2_Jw",
    action: "Listen to episode",
  },
  {
    source: "Paradigma Digital Blog",
    language: "Spanish",
    title: 'Jotai: simplificando la gestión de estado hasta un nivel "atómico"',
    description:
      "An introduction to Jotai through practical examples of atoms, derived state, persistence and asynchronous data in React.",
    url: "https://www.paradigmadigital.com/dev/jotai-simplificando-gestion-estado-nivel-atomico/",
    action: "Read article",
  },
  {
    source: "DEV Community",
    language: "Spanish",
    title:
      "Guía en español para configurar Redux y Redux Sagas con Typescript sin volverse loco",
    description:
      "A practical setup guide for Redux Toolkit and Redux Saga with TypeScript, bringing state management and asynchronous workflows together.",
    url: "https://dev.to/mlcamarena/guia-en-espanol-para-configurar-redux-y-redux-sagas-con-typescript-sin-volverse-loco-3nlj",
    action: "Read guide",
  },
  {
    source: "Capitole Consulting",
    language: "English / Spanish",
    title: "React articles and a frontend testing guide",
    description:
      "I wrote most of the community's React articles, covering Zustand, Redux, Jotai, React Hook Form, architecture and React Query, plus a frontend testing guide.",
    url: "https://capitoleconsulting.github.io/Frontend-Community-Capitole/",
    action: "Explore community",
  },
];

const workPrinciples: WorkPrinciple[] = [
  {
    icon: GitPullRequestArrow,
    title: "Ship in reviewable pieces",
    description:
      "I prefer changes that are small enough to reason about, test and discuss properly.",
  },
  {
    icon: Users,
    title: "Make team boundaries explicit",
    description:
      "Most frontend problems are also product, backend or process problems. I try to make those contracts visible.",
  },
  {
    icon: ShieldCheck,
    title: "Use quality signals pragmatically",
    description:
      "Metrics are useful when they help teams make better decisions, not when they become decoration.",
  },
];

const workStackGroups: WorkStackGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Angular",
      "Ionic",
      "React Native",
      "Vue",
      "Storybook",
    ],
  },
  {
    title: "State and data",
    items: [
      "Redux",
      "Redux Saga",
      "React Query",
      "Zustand",
      "OpenAPI",
      "GraphQL",
      "REST",
      "MSW",
      "Swagger",
    ],
  },
  {
    title: "Testing",
    items: [
      "Jest",
      "Cypress",
      "Playwright",
      "React Testing Library",
      "Robot Framework",
      "MSW",
    ],
  },
  {
    title: "Delivery",
    items: [
      "SonarQube",
      "CI/CD",
      "Azure",
      "AWS",
      "Jenkins",
      "Kubernetes",
      "Feature Flags",
    ],
  },
];

export { workCases, workPublications, workPrinciples, workStackGroups };
export type { WorkCase, WorkPrinciple, WorkStackGroup };
