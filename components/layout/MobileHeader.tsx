"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteNavItems } from "./site-nav.data";

function normalizePath(path: string) {
  return path === "/" ? path : path.replace(/\/$/, "");
}

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/90 px-5 py-4 backdrop-blur lg:hidden">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-base font-semibold text-lime-300"
          onClick={() => setIsOpen(false)}
        >
          ML &gt;_
        </Link>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-site-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-lime-300 transition hover:border-lime-300 hover:text-lime-300"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {isOpen && (
        <nav
          id="mobile-site-nav"
          className="mt-4 border-t border-white/10 pt-4"
        >
          <ul className="grid gap-1">
            {siteNavItems.map((item) => {
              const isActive = currentPath === normalizePath(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex min-h-12 items-center gap-4 px-1 text-sm transition hover:text-lime-300 ${
                      isActive ? "text-lime-300" : "text-zinc-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center [&_svg]:h-4 [&_svg]:w-4 ${
                        isActive ? "text-lime-300" : "text-zinc-400"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto h-2.5 w-2.5 rounded-full bg-lime-300" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
