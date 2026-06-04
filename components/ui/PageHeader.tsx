type PageHeaderProps = {
  eyebrow: string;
  command?: string;
};

export function PageHeader({ eyebrow, command }: PageHeaderProps) {
  const pageCommand = command ?? eyebrow.replace(/^\//, "").replace(/\/$/, "");

  return (
    <section aria-label="Page location" className="font-mono">
      <p className="flex items-center gap-3 text-sm text-zinc-400">
        <span className="font-semibold text-lime-300">&gt;</span>
        <span>cd {pageCommand}</span>
      </p>
    </section>
  );
}
