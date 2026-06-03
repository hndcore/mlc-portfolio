import Link from "next/link";

const NotFound = () => {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 items-center px-6 py-16 sm:py-24">
      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-300">
          404
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Pagina no encontrada
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            La ruta que buscas no existe o se ha movido. Puedes volver al inicio
            y seguir navegando por el portfolio.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-md bg-lime-300 px-5 text-sm font-medium text-zinc-950 transition hover:bg-lime-200"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
