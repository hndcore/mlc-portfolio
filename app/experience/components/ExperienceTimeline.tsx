import type { Experience } from "../experience.data";
import { ExperienceBlock } from "./ExperienceBlock";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <section aria-label="Professional experience">
      <ol className="relative space-y-0 lg:pl-8">
        {experiences.map((experience, index) => (
          <ExperienceBlock
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            hasSeparator={index < experiences.length - 1}
          />
        ))}
      </ol>
    </section>
  );
};

export { ExperienceTimeline };
