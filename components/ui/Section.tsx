import { PropsWithChildren } from "react";

interface SectionProps {
  title: React.ReactNode;
  isLast?: boolean;
}

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  title,
  isLast,
  children,
}) => {
  return (
    <section
      className={`space-y-7 ${!isLast && "border-b border-white/10 pb-12"}`}
    >
      <h2 className="font-mono text-xl font-semibold text-white">
        <span className="mr-3 text-lime-300">&gt;</span>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
