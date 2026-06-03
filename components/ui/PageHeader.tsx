type PageHeaderProps = {
  eyebrow: string;
};

export function PageHeader({ eyebrow }: PageHeaderProps) {
  return (
    <section className="max-w-3xl space-y-4 border-b border-white/10 pb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-300">
        {eyebrow}
      </p>
    </section>
  );
}
