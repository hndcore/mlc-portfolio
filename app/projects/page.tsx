import { ArrowUpRight, Globe, Play } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { projects } from "./projects.data";
import { ProjectCarousel } from "./ProjectCarousel";

const ProjectsPage = () => {
  return (
    <main className="space-y-12 lg:space-y-14">
      <PageHeader eyebrow="/projects" />

      <section className="border-b border-white/10 pb-10">
        <div className="max-w-3xl space-y-7">
          <h1 className="font-mono text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projects<span className="text-lime-300">.</span>
          </h1>
          <p className="max-w-2xl font-mono text-base leading-8 text-zinc-300 sm:text-lg">
            Public projects I can show: small products, experiments and the
            portfolio itself.
          </p>
        </div>
      </section>

      <section aria-label="Public projects" className="space-y-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="grid gap-6 border-b border-white/10 pb-8 last:border-b-0 last:pb-0 xl:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1fr)] xl:items-start xl:gap-8"
          >
            <ProjectCarousel
              images={project.images}
              title={project.title}
              priority={index === 0}
            />

            <div className="min-w-0 font-mono">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
                {project.type}
              </p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap gap-2 [&>*]:w-40 sm:flex-col sm:items-end">
                  {project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-xs font-semibold text-lime-300 transition hover:border-lime-300/70 hover:bg-lime-300 hover:text-zinc-950"
                    >
                      <IconBrandGithub className="h-4 w-4" aria-hidden="true" />
                      Repository
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex h-10 shrink-0 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-xs font-semibold text-zinc-500"
                    >
                      <IconBrandGithub className="h-4 w-4" aria-hidden="true" />
                      Private
                    </button>
                  )}
                  {[
                    { href: project.liveUrl, label: "Live site", Icon: Globe },
                    { href: project.videoUrl, label: "Demo", Icon: Play },
                  ].map(({ href, label, Icon }) =>
                    href ? (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-xs font-semibold text-lime-300 transition hover:border-lime-300/70 hover:bg-lime-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-lime-300"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {label}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null,
                  )}
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-300">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="grid grid-cols-[0.75rem_1fr] gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] h-1 w-1 rounded-full bg-lime-300"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;
