"use client";

import type { ReactNode } from "react";
import { MobileHeader } from "./MobileHeader";
import { Sidebar } from "./Sidebar";
import { usePathname } from "next/navigation";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-dvh bg-[radial-gradient(circle_at_top_left,#101826_0,#090d14_45%,#05080d_100%)] text-zinc-100 lg:h-dvh lg:overflow-hidden">
      <MobileHeader />
      <div className="flex min-h-dvh lg:h-dvh lg:min-h-0">
        <Sidebar />
        <div className="min-w-0 flex-1 lg:h-dvh lg:overflow-y-auto">
          <div className="mx-auto w-full max-w-[96rem] px-5 py-10 sm:px-8 lg:px-16 lg:py-14">
            <div className={`mb-${isHomePage ? "16" : "4"} flex justify-end`}>
              <p className="flex items-center gap-3 text-xs text-zinc-400">
                Focused on my current role
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
