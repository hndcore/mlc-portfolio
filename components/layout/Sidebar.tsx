"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavItems } from "./site-nav.data";
import { MapPin } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-dvh w-80 shrink-0 border-r border-white/10 px-8 py-10 lg:flex lg:flex-col">
      <div>
        <Link
          href="/"
          className="font-mono text-xl font-semibold tracking-tight text-lime-300"
        >
          MLC &gt;_
        </Link>
        <div className="mt-12">
          <p className="text-xl font-semibold text-white">Manuel L. Camarena</p>
          <p className="mt-3 text-sm text-zinc-400">
            Full-stack JS/TS Developer (Frontend expert)
          </p>
        </div>
      </div>

      <nav className="mt-12 border-y border-white/10 py-8">
        <ul className="space-y-6">
          {siteNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group flex items-center gap-5 text-sm transition hover:text-lime-300 ${
                  pathname === item.href ? "text-lime-300" : "text-zinc-300"
                }`}
              >
                <span
                  className={`w-5 font-mono text-xs transition group-hover:text-lime-300 ${
                    pathname === item.href ? "text-lime-300" : "text-zinc-400"
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
                {pathname === item.href && (
                  <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto space-y-5 text-xs text-zinc-400">
        <a
          href={"https://www.google.com/maps/place/Sevilla"}
          className="flex items-center transition hover:text-lime-300 mt-4"
        >
          <span className="w-6 font-mono text-[0.65rem] text-lime-300 mb-[3px]">
            <MapPin size="0.85rem" />
          </span>
          Sevilla, ES
        </a>
        <p className="pt-8 leading-6">
          © {new Date().getFullYear()} Manuel Lopez Camarena
          <br />
          No copyright. Free to use, modify and distribute.
          <br />
          With ❤️
        </p>
      </div>
    </aside>
  );
}
