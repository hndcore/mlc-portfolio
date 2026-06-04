import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export const formspreeUrl = "https://formspree.io/f/mdavojng";

export const contactFormMessages = {
  default: "I usually reply within a few days.",
  sending: "Looks good. Sending your message...",
  sentTitle: "Message sent.",
  sentDescription:
    "Thanks for reaching out. I'll get back to you as soon as I can.",
  invalid: "Please review the highlighted fields.",
  error: "Something went wrong. Please try again or email me directly.",
};

export const contactFormFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your.email@example.com",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What's this about?",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Tell me more...",
    rows: 6,
  },
] as const;

export type ContactFormFieldName = (typeof contactFormFields)[number]["name"];

export const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/hndcore",
    href: "https://github.com/hndcore",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/manuellc32",
    href: "https://linkedin.com/in/manuellc32/",
    icon: IconBrandLinkedin,
  },
];
