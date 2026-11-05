import Link from "next/link";
import { legalContact, legalDocs, type LegalDoc } from "@/lib/legal";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

const anchor = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1 pt-16">
        <header className="border-b border-line">
          <div className="frame pb-12 pt-14 lg:pb-16 lg:pt-20">
            <p className="label text-bone-dim">
              <span className="text-gold">Legal</span>
              <span className="mx-3" aria-hidden>
                /
              </span>
              {doc.short}
            </p>
            <h1 className="display mt-6 text-[clamp(3rem,7vw,6rem)]">{doc.title}</h1>
            <p className="label mt-6 text-bone-dim">
              Effective <span className="text-bone">{doc.effective}</span>
            </p>
          </div>
        </header>

        <div className="frame grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <nav aria-label="On this page" className="hidden lg:block">
                <p className="label text-gold">On this page</p>
                <ol className="mt-4 border-l border-line">
                  {doc.sections.map((s) => (
                    <li key={s.heading}>
                      <a
                        href={`#${anchor(s.heading)}`}
                        className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-bone-dim transition-colors hover:border-gold hover:text-bone"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact"
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-bone-dim transition-colors hover:border-gold hover:text-bone"
                    >
                      Contact us
                    </a>
                  </li>
                </ol>
              </nav>

              <nav aria-label="Policies" className="lg:mt-10">
                <p className="label text-gold">Policies</p>
                <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-0">
                  {legalDocs.map((d) => {
                    const current = d.slug === doc.slug;
                    return (
                      <li key={d.slug}>
                        <Link
                          href={`/${d.slug}`}
                          aria-current={current ? "page" : undefined}
                          className={`inline-flex min-h-10 items-center border px-3 text-sm transition-colors lg:w-full lg:border-0 lg:border-b lg:border-line lg:px-0 ${
                            current
                              ? "border-gold text-gold"
                              : "border-line text-bone-dim hover:border-gold hover:text-bone"
                          }`}
                        >
                          {d.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          <article className="max-w-[68ch] lg:col-span-8 lg:col-start-5">
            {doc.intro.map((p) => (
              <p key={p} className="mb-5 text-lg leading-relaxed text-bone">
                {p}
              </p>
            ))}

            {doc.sections.map((s, i) => (
              <section key={s.heading} id={anchor(s.heading)} className="mt-12 border-t border-line pt-8">
                <h2 className="flex items-baseline gap-4 text-2xl font-semibold tracking-tight">
                  <span className="label text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                {s.blocks.map((b, j) =>
                  b.type === "p" ? (
                    <p key={j} className="mt-4 leading-relaxed text-bone-dim">
                      {b.text}
                    </p>
                  ) : (
                    <ul key={j} className="mt-4 space-y-3">
                      {b.items.map((it) => (
                        <li key={it.text} className="flex gap-3 leading-relaxed text-bone-dim">
                          <span className="mt-[0.7em] h-1 w-3 shrink-0 bg-gold" aria-hidden />
                          <span>
                            {it.term && <strong className="font-semibold text-bone">{it.term}: </strong>}
                            {it.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}

            <section id="contact" className="mt-12 border border-line bg-ink-2 p-6 sm:p-8">
              <h2 className="label text-gold">Contact us</h2>
              <p className="mt-4 text-lg font-semibold text-bone">{legalContact.company}</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-[7rem_1fr]">
                <dt className="label text-bone-dim">Email</dt>
                <dd>
                  <a href={`mailto:${legalContact.email}`} className="break-all text-bone underline decoration-gold underline-offset-4 hover:text-gold-hi">
                    {legalContact.email}
                  </a>
                </dd>
                <dt className="label text-bone-dim">WhatsApp</dt>
                <dd>
                  <a href={legalContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-bone underline decoration-gold underline-offset-4 hover:text-gold-hi">
                    {legalContact.whatsapp}
                  </a>
                </dd>
                <dt className="label text-bone-dim">Address</dt>
                <dd>
                  <address className="not-italic text-bone">{legalContact.address}</address>
                </dd>
                <dt className="label text-bone-dim">Website</dt>
                <dd>
                  <Link href="/" className="text-bone underline decoration-gold underline-offset-4 hover:text-gold-hi">
                    {legalContact.website}
                  </Link>
                </dd>
              </dl>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
