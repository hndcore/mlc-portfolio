import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "./ContactForm";
import { contactLinks } from "./contact.data";

const ContactPage = () => {
  return (
    <main className="space-y-12 lg:space-y-14">
      <PageHeader eyebrow="/contact" />

      <section className="border-b border-white/10 pb-12">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-mono text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s connect<span className="text-lime-300">.</span>
          </h1>
          <p className="max-w-xl font-mono text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            Open to discussing projects, collaborating with interesting teams or
            just having a good conversation about software.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-20">
          <ContactForm />

          <aside className="space-y-9">
            <div>
              <h2 className="border-b border-white/10 pb-4 font-mono text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Other ways to reach me
              </h2>

              <ul className="mt-7 space-y-8">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group grid grid-cols-[1.5rem_1fr] gap-4 font-mono"
                      >
                        <Icon
                          size={22}
                          aria-hidden="true"
                          className="mt-0.5 text-zinc-300 transition text-lime-300"
                        />
                        <span>
                          <span className="block text-xs font-mono uppercase tracking-wide text-lime-400">
                            {link.label}
                          </span>
                          <span className="mt-3 block break-words text-sm text-zinc-300 transition group-hover:text-white">
                            {link.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
