import type { SiteNavItem, SocialLink } from "./site-nav.types";
import {
  House,
  User,
  FileText,
  Briefcase,
  Code,
  MessageSquareHeart,
} from "lucide-react";

export const siteNavItems: SiteNavItem[] = [
  {
    href: "/",
    label: "/home",
    icon: <House />,
  },
  {
    href: "/about/",
    label: "/about",
    icon: <User />,
  },
  {
    href: "/experience/",
    label: "/experience",
    icon: <FileText />,
  },
  {
    href: "/work/",
    label: "/work",
    icon: <Briefcase />,
  },
  {
    href: "/projects/",
    label: "/projects",
    icon: <Code />,
  },
  {
    href: "/contact/",
    label: "/contact",
    icon: <MessageSquareHeart />,
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Madrid, ES",
    href: "https://www.google.com/maps/place/Madrid",
    icon: "pin",
  },
  {
    label: "hello@manuel.dev",
    href: "mailto:hello@manuel.dev",
    icon: "mail",
  },
  {
    label: "github.com/manuelcamarena",
    href: "https://github.com/manuelcamarena",
    icon: "gh",
  },
  {
    label: "linkedin.com/in/manuelcamarena",
    href: "https://linkedin.com/in/manuelcamarena",
    icon: "in",
  },
];
