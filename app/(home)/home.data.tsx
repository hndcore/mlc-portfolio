import type { CurrentFocus, HomeStat, SelectedWork } from "./home.types";
import {
  Calendar,
  Code,
  Globe,
  Building2,
  BugOff,
  ShieldCheck,
  SquareCheckBig,
  Users,
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
    label: "Frontend Bugs Reduced",
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
    "Leading frontend development for an international insurance/fintech platform. Driving quality, testing and engineering standards while supporting teams, technical initiatives and product delivery.",
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
    title: "Reducing frontend bugs by an average of 73%",
    description:
      "Implementing best practices, code reviews and quality standards across the team.",
  },
  {
    icon: <SquareCheckBig />,
    title: "Building a testing strategy",
    description:
      "Introducing testing culture and increasing coverage in a complex fintech product.",
  },
  {
    icon: <ShieldCheck />,
    title: "SonarQube integration",
    description:
      "Improving code health metrics and maintaining high quality standards.",
  },
  {
    icon: <Users />,
    title: "Cross-team frontend support",
    description:
      "Collaborating with multiple teams to ship features faster and with confidence.",
  },
];
