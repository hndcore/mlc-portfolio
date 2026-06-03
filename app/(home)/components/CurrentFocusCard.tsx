import Link from "next/link";
import type { CurrentFocus } from "../home.types";

type CurrentFocusCardProps = {
  focus: CurrentFocus;
};

const CurrentFocusCard = ({ focus }: CurrentFocusCardProps) => {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.02] p-7">
      <h2 className="text-lg font-semibold text-white">Current Focus</h2>

      <div className="mt-8 space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
          Current role
        </p>
        <div>
          <h3 className="text-xl font-semibold text-white">{focus.role}</h3>
          <p className="mt-2 text-sm text-zinc-500 ">{focus.company}</p>
        </div>
        <p className="max-w-md text-sm leading-7 text-zinc-400">
          {focus.description}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {focus.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href="/experience"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-200"
      >
        View full experience <span aria-hidden="true">-&gt;</span>
      </Link>
    </article>
  );
};

export default CurrentFocusCard;
