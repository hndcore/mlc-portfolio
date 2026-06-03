const CoverSection = () => {
  return (
    <section className="space-y-7 border-b border-white/10 pb-10">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Less bugs.
          <br />
          Less complexity.
          <br />
          <span className="text-lime-300">Better software.</span>
        </h1>
        <p className="max-w-2xl text-base leading-8 text-zinc-400">
          Senior Frontend Engineer with a focus on code quality, testing and
          scalable architectures. I help teams build software that lasts.
        </p>
      </div>
    </section>
  );
};

export default CoverSection;
