import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import {
  workCases,
  workPublications,
  workPrinciples,
  workStackGroups,
} from "./work.data";

const WorkPage = () => {
  return (
    <main className="space-y-12 lg:space-y-14">
      <PageHeader eyebrow="/work" />

      <section className="border-b border-white/10 pb-10">
        <div className="max-w-3xl space-y-7">
          <h1 className="font-mono text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Work<span className="text-lime-300">.</span>
          </h1>
          <p className="max-w-2xl font-mono text-base leading-8 text-zinc-300 sm:text-lg">
            Selected work patterns, delivery problems and technical decisions
            from real product teams.
          </p>
        </div>
      </section>

      <Section title="Case Studies">
        <div className="grid gap-5 xl:grid-cols-2">
          {workCases.map((workCase) => {
            const Icon = workCase.icon;

            return (
              <article
                key={workCase.title}
                className="rounded-lg border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 text-lime-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                      {workCase.label}
                    </p>
                    <h2 className="mt-3 font-mono text-xl font-semibold text-white">
                      {workCase.title}
                    </h2>
                  </div>
                </div>

                <div className="mt-6 space-y-5 font-mono text-sm leading-7 text-zinc-300">
                  <p>{workCase.context}</p>
                  <p className="border-l border-lime-300/60 pl-4 text-zinc-200">
                    {workCase.outcome}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 font-mono text-sm leading-6 text-zinc-300">
                  {workCase.contributions.map((contribution) => (
                    <li
                      key={contribution}
                      className="grid grid-cols-[0.75rem_1fr] gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.7rem] h-1 w-1 rounded-full bg-lime-300"
                      />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {workCase.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded border border-white/10 bg-black/10 px-3 py-1.5 font-mono text-xs text-zinc-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      <Section title="Articles & Talks">
        <ul className="divide-y divide-white/10">
          {workPublications.map((publication) => (
            <li
              key={publication.url}
              className="space-y-3 py-6 first:pt-0 last:pb-0"
            >
              <h3
                lang={publication.language === "Spanish" ? "es" : undefined}
                className="font-mono text-lg font-semibold text-white"
              >
                {publication.title}
              </h3>
              <p className="max-w-3xl text-sm leading-7 text-zinc-300">
                {publication.description}{" "}
                <span className="text-zinc-400">
                  ({publication.source} · {publication.language})
                </span>
              </p>
              <a
                href={publication.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${publication.action}: ${publication.title}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-lime-300"
              >
                {publication.action}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How I Work">
        <div className="grid gap-5 lg:grid-cols-3">
          {workPrinciples.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="rounded-lg border border-white/10 bg-white/[0.02] p-6"
              >
                <Icon className="h-6 w-6 text-lime-300" />
                <h2 className="mt-5 font-mono text-lg font-semibold text-white">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section title="Technologies In Context" isLast>
        <div className="grid gap-6 lg:grid-cols-4">
          {workStackGroups.map((group) => (
            <div key={group.title}>
              <h2 className="border-b border-white/10 pb-4 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-400">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default WorkPage;
