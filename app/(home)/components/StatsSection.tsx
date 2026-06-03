import type { HomeStat } from "../home.types";

type StatsSectionProps = {
  stats: HomeStat[];
};

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="grid gap-6 border-b border-white/10 py-8 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex gap-5 border-white/10 xl:border-r xl:last:border-r-0"
        >
          <span className="font-mono text-2xl text-lime-300">{stat.icon}</span>
          <div>
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-3 max-w-28 text-sm leading-6 text-zinc-400">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
