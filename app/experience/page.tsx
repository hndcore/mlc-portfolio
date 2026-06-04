import { PageHeader } from "@/components/ui/PageHeader";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { experiences } from "./experience.data";

const ExperiencePage = () => {
  return (
    <main className="space-y-12 lg:space-y-14">
      <PageHeader eyebrow="/experience" />

      <section className="border-b border-white/10 pb-10">
        <div className="max-w-3xl space-y-7">
          <h1 className="font-mono text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Experience
            <span className="text-lime-300">.</span>
          </h1>
          <p className="max-w-2xl font-mono text-base leading-8 text-zinc-300">
            The roles, teams and experiences that shaped my approach to software
            engineering.
          </p>
        </div>
      </section>

      <ExperienceTimeline experiences={experiences} />
    </main>
  );
};

export default ExperiencePage;
