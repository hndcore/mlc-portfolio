import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Manuel Lopez Camarena | JS/TS Developer",
    template: "%s | Manuel Lopez Camarena",
  },
  description:
    "Manuel L. Camarena's portfolio, showcasing expertise in JavaScript and TypeScript development, with a focus on frontend technologies.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-100">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
};

export default RootLayout;
