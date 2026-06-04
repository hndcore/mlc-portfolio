import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { aboutPortrait, techStack } from "./about.data";

const AboutPage = () => {
  return (
    <main className="space-y-12 lg:space-y-14">
      <PageHeader eyebrow="/about" />

      <section className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1fr)_13.5rem] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,44rem)_13.5rem]">
        <div className="max-w-3xl space-y-8">
          <h1 className="font-mono text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            About Me
          </h1>
          <p className="max-w-2xl font-mono text-base leading-8 text-zinc-300 sm:text-lg">
            Curious about software, people and ideas. Always learning,
            occasionally slowing down.
          </p>
        </div>

        <div className="relative h-44 w-44 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30 sm:h-56 sm:w-56 lg:mt-10">
          <Image
            src={aboutPortrait}
            alt="Portrait of Manuel Lopez Camarena"
            fill
            sizes="(min-width: 1024px) 224px, 176px"
            className="object-cover"
            priority
          />
        </div>
      </section>
      <Section title="Background">
        <div className="max-w-5xl space-y-7 text-sm leading-8 text-zinc-300 sm:text-base">
          <p>
            I first got into web development when I was around 14 or 15 years
            old. At the time I was using MyAnimeList to keep track of the anime
            I watched, but I wasn&apos;t particularly happy with how my profile
            looked. The platform allowed users to customize their lists using
            BBCode, and that small curiosity eventually led me to HTML, CSS and
            building my own pages locally.
          </p>
          <p>
            What started as a way to tweak things I used every day gradually
            became a long-term interest. I&apos;ve always enjoyed creating
            visual products, experimenting with interfaces and turning ideas
            into something tangible that people can actually use.
          </p>
          <p>
            Today, what keeps me interested in software is the constant
            opportunity to learn. Whether it&apos;s exploring a new library,
            understanding an unfamiliar codebase, debugging a complex issue or
            evaluating different architectural approaches, I enjoy figuring out
            how systems work and how they can be improved. I tend to be more
            interested in practical solutions than in chasing trends, and I
            value software that is easy to understand, well tested and built
            with long-term maintainability in mind.
          </p>
          <p>
            Although frontend development became my main area of expertise,
            I&apos;ve also worked in full-stack roles learning backend
            technologies and practices with Node.js and its frameworks along the
            way. Also, I&apos;ve always had a strong interest in systems as
            well. Before becoming a web developer I studied systems
            administration, and Linux remains one of my favourite technologies
            to work with (I ❤️ my Debian setup), and I enjoy learning about how
            software interacts with the underlying hardware and operating
            system. Free Software philosophy and open source communities have
            also been a big influence on how I think about software and its
            impact on society. That interest naturally exposed me to areas such
            as services, infrastructure, automation and DevOps practices, giving
            me a broader perspective on how software is built and operated
            beyond the frontend layer. One thing that has consistently defined
            my career is adaptability. I enjoy stepping into unfamiliar
            environments, understanding how things work and becoming productive
            quickly. Over the years I&apos;ve had the opportunity to contribute
            not only through code, but also through quality initiatives, testing
            strategies, technical leadership and cross-team collaboration.
          </p>
        </div>
      </Section>

      <Section title="Tech I Use">
        <ul className="flex max-w-5xl flex-wrap gap-3">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-sm text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Beyond Work" isLast>
        <>
          <div className="max-w-5xl space-y-7 text-sm leading-8 text-zinc-300 sm:text-base">
            <p>
              Outside of software, I&apos;m naturally drawn to learning and
              exploring new ideas. History, politics, documentaries and
              long-form conversations are subjects I regularly come back to,
              especially when they help explain how people, societies and
              systems evolve over time.
            </p>
            <p>
              I&apos;m also a long-time fan of science fiction and fantasy.
              Stories such as Dune, A Song of Ice and Fire and One Piece have
              shaped my appreciation for worldbuilding, complex systems and the
              different ways people respond to change, conflict and uncertainty.
            </p>
            <p>
              Cooking is another important part of my daily life. I enjoy
              planning meals, discovering recipes from different cultures and
              experimenting with new ingredients and approaches, including
              vegetarian and vegan cuisine. For me, cooking combines creativity,
              problem-solving and continuous improvement in much the same way
              software development does.
            </p>
            <p>
              When I&apos;m away from a screen, I value simple routines that
              help me disconnect and stay healthy. Walking, training at the gym
              and spending time outdoors provide a balance to the more
              analytical side of my work and help me return with a clearer
              perspective. In a world that constantly pushes for more
              productivity, I&apos;ve learned to appreciate the value of slowing
              down. Rest, good sleep and moments of calm are just as important
              to me as learning, building and improving.
            </p>
          </div>

          <blockquote className="grid max-w-5xl grid-cols-[2.5rem_1fr] gap-5 rounded-lg border border-white/10 bg-white/[0.02] p-6 font-mono text-lg leading-8 text-zinc-200 sm:p-8 sm:text-2xl sm:leading-10">
            <span
              aria-hidden="true"
              className="text-5xl font-semibold leading-none text-lime-300"
            >
              &ldquo;
            </span>
            <p>
              Intelligence is the ability to avoid doing work, yet getting the
              work done.{" "}
              <span className="text-lime-400"> — Linus Torvalds</span>
            </p>
          </blockquote>
        </>
      </Section>
    </main>
  );
};

export default AboutPage;
