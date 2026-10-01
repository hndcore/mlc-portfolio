type Project = {
  title: string;
  type: string;
  images: { src: string; alt: string }[];
  repositoryUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Do you really need it?",
    type: "Personal finance tool",
    images: [
      { src: "/calc-home.webp", alt: "Do you really need it calculator" },
      { src: "/calc-home-2.webp", alt: "Calculator income options" },
      { src: "/calc-results.webp", alt: "Purchase cost in working time" },
      { src: "/calc-quotes.webp", alt: "Spending reflection quotes" },
      { src: "/calc-about.webp", alt: "About Do you really need it" },
    ],
    repositoryUrl: "https://github.com/hndcore/do-you-really-need-it",
    liveUrl: "https://do-you-really-need-it-one.vercel.app/calculator",
    description:
      "A small React app that translates a purchase price into working time, making spending decisions feel more concrete before buying.",
    highlights: [
      "Purchase-to-time calculator with hourly, daily, monthly and yearly income modes.",
      "Private by design: all calculations happen in the browser without tracking or server storage.",
      "Includes reflection prompts, multilingual UI and tested business logic.",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Vitest",
    ],
  },
  {
    title: "LK3Dashboard",
    type: "Browser start page",
    images: [
      { src: "/lk3 home.webp", alt: "LK3Dashboard homepage" },
      { src: "/lk3 youtube.webp", alt: "LK3Dashboard YouTube section" },
      { src: "/lk3 news.webp", alt: "LK3Dashboard news feeds" },
    ],
    repositoryUrl: "https://github.com/hndcore/LK3Dashboard",
    description:
      "A personal browser homepage with editable favorites, search, weather, quick notes, YouTube sections and news feeds.",
    highlights: [
      "Local-first dashboard with preferences, favorites and notes persisted in localStorage.",
      "Configurable search providers, external data widgets and fallback loading states.",
      "Designed to run as a local homepage with Vite preview and optional local HTTPS setup.",
    ],
    technologies: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "Lucide Vue",
      "Vitest",
      "Happy DOM",
    ],
  },
  {
    title: "LK3DCash",
    type: "Personal finance app",
    videoUrl: "https://www.youtube.com/watch?v=eLiZw7k5mYs",
    images: [
      { src: "/lk3dcash-home.webp", alt: "LK3DCash financial overview" },
      { src: "/lk3dcash-spends.webp", alt: "LK3DCash expenses" },
      {
        src: "/lk3dcash-calendar.webp",
        alt: "LK3DCash recurring payments calendar",
      },
      { src: "/lk3dcash-objectives.webp", alt: "LK3DCash savings goals" },
      { src: "/lk3dcash-history.webp", alt: "LK3DCash financial history" },
      { src: "/lk3dcash-config.webp", alt: "LK3DCash preferences" },
      { src: "/lk3dcash-login.webp", alt: "LK3DCash sign-in screen" },
    ],
    description:
      "A personal finance app for tracking income, expenses, budgets and savings goals, with a monthly overview and recurring payment calendar.",
    highlights: [
      "Manage budgets, recurring transactions, savings contributions and debts.",
      "Review financial history, monthly comparisons and forecasts.",
      "Google sign-in with server-side calculations and PostgreSQL persistence.",
    ],
    technologies: [
      "Angular 21",
      "Ionic 9",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    title: "MLC Portfolio",
    type: "Portfolio website",
    images: [{ src: "/portfolio.png", alt: "MLC portfolio homepage" }],
    repositoryUrl: "https://github.com/hndcore/mlc-portfolio",
    description:
      "The portfolio you are browsing now: a compact, terminal-inspired site for experience, work notes and public projects.",
    highlights: [
      "Built with a focused app-router structure and reusable page sections.",
      "Uses static export-friendly configuration, local fonts and unoptimized images.",
      "Keeps work, experience and projects separated so each section has a clear purpose.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "Testing Library",
    ],
  },
];

export { projects };
export type { Project };
