import Image from "next/image";
import type { Experience } from "../experience.data";

type ExperienceBlockProps = {
  experience: Experience;
  hasSeparator: boolean;
};

const ExperienceBlock = ({
  experience,
  hasSeparator,
}: ExperienceBlockProps) => {
  return (
    <li className="relative border-b border-white/10 py-8 first:pt-0 last:border-b-0 lg:border-b-0 lg:pl-20">
      {hasSeparator && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-20 right-0 hidden border-b border-white/10 lg:block"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[0.9375rem] top-0 hidden w-px bg-white/20 lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute left-[0.5625rem] top-10 z-10 hidden h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_24px_rgba(190,242,100,0.45)] lg:block"
      />

      <article className="grid gap-6 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-x-8 lg:gap-y-5 2xl:grid-cols-[9rem_5.5rem_minmax(13rem,1fr)_minmax(20rem,1.55fr)] 2xl:gap-8">
        <div className="font-mono text-sm lg:col-start-1 lg:row-start-1 2xl:col-auto 2xl:row-auto">
          <p className="text-white">{experience.period}</p>
          <p className="mt-3 text-zinc-400">{experience.location}</p>
        </div>

        <div className="relative h-20 w-20 overflow-hidden rounded-md border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 lg:col-start-1 lg:row-start-2 2xl:col-auto 2xl:row-auto">
          <Image
            src={experience.logoSrc}
            alt={experience.logoAlt}
            fill
            sizes="80px"
            className="object-contain"
          />
        </div>

        <div className="font-mono lg:col-start-2 lg:row-start-1 2xl:col-auto 2xl:row-auto">
          <h2 className="text-lg font-semibold text-white">
            {experience.company}
          </h2>
          <p className="mt-3 text-sm text-lime-300">{experience.role}</p>
          <p className="mt-3 text-sm text-zinc-400">{experience.category}</p>
        </div>

        <div className="min-w-0 space-y-5 lg:col-start-2 lg:row-start-2 2xl:col-auto 2xl:row-auto">
          <ul className="space-y-2 font-mono text-sm leading-6 text-zinc-300">
            {experience.highlights.map((highlight) => (
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

          <ul className="flex flex-wrap gap-3">
            {experience.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-zinc-300"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
};

export { ExperienceBlock };
