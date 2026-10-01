import type { CurrentFocus, HomeStat, SelectedWork } from "./home.types";
import {
  Calendar,
  Code,
  Globe,
  Building2,
  BugOff,
  Layers3,
  ToggleRight,
  ChartNoAxesCombined,
} from "lucide-react";

const getYearsExperience = () => {
  const currentDate = new Date();
  const yearsFromStart = currentDate.getFullYear() - 2020;
  const hasPassedSeptember = currentDate.getMonth() > 8;

  return yearsFromStart + (hasPassedSeptember ? 1 : 0);
};

export const homeStats: HomeStat[] = [
  {
    icon: <Calendar className="h-6 w-6 mt-1" />,
    value: `${getYearsExperience()}+`,
    label: "Years Experience",
  },
  {
    icon: <Code className="h-6 w-6 mt-1" />,
    value: "73%",
    label: "Average Bugs Reduced",
  },
  {
    icon: <Building2 className="h-6 w-6 mt-1" />,
    value: "8",
    label: "Major Client Projects",
  },
  {
    icon: <Globe className="h-6 w-6 mt-1" />,
    value: "ES/EN",
    label: "International Team Experience",
  },
];

export const currentFocus: CurrentFocus = {
  role: "Senior Frontend Engineer",
  company: "Capitole Consulting",
  description:
    "Building frontend features for an international insurance/fintech platform. Improving quality, testing and engineering practices while helping small teams coordinate delivery and collaborating across teams.",
  tags: [
    "React",
    "TypeScript",
    "Testing",
    "Architecture",
    "Mentorship",
    "Code Health",
    "Tooling",
    "Cross-team collaboration",
  ],
};

export const selectedWork: SelectedWork[] = [
  {
    icon: <BugOff />,
    title: "Reducing frontend bugs by over 83%",
    description:
      "Improving reviews, testing and quality checks during a quarterly release cycle.",
  },
  {
    icon: <Layers3 />,
    title: "Modernizing a core back-office frontend",
    description:
      "Migrating to React 18 and Node 20, with an 18% reduction in lead time.",
  },
  {
    icon: <ToggleRight />,
    title: "Reducing deployment risk by 40%",
    description:
      "Building feature flags to control releases and enable fast rollbacks.",
  },
  {
    icon: <ChartNoAxesCombined />,
    title: "Giving business teams direct access to KPIs",
    description:
      "Building microfrontend back-office tools for business analysis and decision-making.",
  },
];
