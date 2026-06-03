import Link from "next/link";
import type { SelectedWork } from "../home.types";

type SelectedWorkCardProps = {
  work: SelectedWork[];
};

const SelectedWorkCard = ({ work }: SelectedWorkCardProps) => {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.02] p-7">
      <h2 className="text-lg font-semibold text-white">Selected Work</h2>

      <div className="mt-6 divide-y divide-white/10">
        {work.map((item) => (
          <Link
            key={item.title}
            href="/projects"
            className="group grid grid-cols-[3rem_1fr_auto] gap-5 py-4"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 font-mono text-sm text-lime-300">
              {item.icon}
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">
                {item.title}
              </span>
              <span className="mt-1 block text-xs leading-5 text-zinc-400">
                {item.description}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="self-center text-lime-300 transition group-hover:translate-x-1"
            >
              -&gt;
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/work"
        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-200"
      >
        View all case studies <span aria-hidden="true">-&gt;</span>
      </Link>
    </article>
  );
};

export default SelectedWorkCard;
