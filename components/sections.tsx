import {
  about,
  closing,
  curriculum,
  daily,
  different,
  faqs,
  instruments,
  pillars,
  plans,
  site,
  socials,
  testimonials,
} from "@/lib/content";
import { ArrowRight, Check, Cross, FeatureIcon, Plus, Quote, SocialIcon } from "./icons";

function SectionHeading({
  eyebrow,
  title,
  body,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  center?: boolean;
}) {
  return (
    <div data-reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.75rem]">
        {title}
      </h2>
      {body && <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">{body}</p>}
    </div>
  );
}

const container = "mx-auto max-w-6xl px-4 sm:px-6";

export function Ticker() {
  const items = [...instruments, ...instruments];
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-surface/50 py-4" aria-label="Markets covered">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" aria-hidden />
      <ul className="marquee-track flex w-max gap-10">
        {items.map((pair, i) => (
          <li
            key={i}
            aria-hidden={i >= instruments.length}
            className="flex items-center gap-3 font-mono text-sm text-muted"
          >
            <span className={pair === "XAU/USD" ? "text-gold" : "text-foreground/80"}>{pair}</span>
            <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className={`${container} grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
        {/* PLACEHOLDER: replace with a real portrait at /public/junaid.jpg using next/image */}
        <div data-reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line-strong bg-gradient-to-b from-surface-2 to-surface">
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[9rem] italic leading-none text-gold-gradient">JR</span>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-line bg-background/70 p-4 backdrop-blur">
              <p className="font-semibold">{site.trader}</p>
              <p className="text-sm text-muted">Forex &amp; Gold trader, founder of {site.name}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div data-reveal className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <figure data-reveal className="mt-10 rounded-2xl border border-line bg-surface p-6">
            <blockquote>
              <p className="text-xl font-medium leading-snug tracking-tight">{about.problem.title}</p>
              <p className="mt-3 leading-relaxed text-muted">{about.problem.body}</p>
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section id="method" className="border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className={container}>
        <SectionHeading
          eyebrow="The method"
          title={
            <>
              Simple, but <span className="font-serif font-normal italic text-gold-gradient">powerful.</span>
            </>
          }
          body="Four steps, repeated every day. No indicator overload and no guesswork, just a clear way of reading what price is telling you."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li
              key={p.step}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group bg-background p-7 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-sm text-gold">{p.step}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Daily() {
  return (
    <section className="py-24 sm:py-32">
      <div className={container}>
        <SectionHeading eyebrow={daily.eyebrow} title={daily.title} body={daily.body} />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {daily.items.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-gold/40"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                <FeatureIcon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Different() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/40 py-24 sm:py-32">
      <div className={`${container} grid gap-14 lg:grid-cols-2 lg:gap-20`}>
        <div>
          <SectionHeading eyebrow={different.eyebrow} title={different.title} body={different.body} />
          <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {different.focus}
          </p>
        </div>
        <div data-reveal className="overflow-hidden rounded-3xl border border-line-strong bg-background">
          <div className="grid grid-cols-2 border-b border-line text-sm">
            <p className="p-4 text-muted sm:p-5">Most trading groups</p>
            <p className="border-l border-line bg-gold/[0.06] p-4 font-semibold text-gold sm:p-5">{site.name}</p>
          </div>
          <ul>
            {different.compare.map(([bad, good]) => (
              <li key={good} className="grid grid-cols-2 border-b border-line text-sm last:border-b-0 sm:text-[15px]">
                <p className="flex items-start gap-2.5 p-4 text-muted sm:p-5">
                  <Cross className="mt-0.5 h-4 w-4 shrink-0 text-bear" />
                  <span>{bad}</span>
                </p>
                <p className="flex items-start gap-2.5 border-l border-line bg-gold/[0.06] p-4 sm:p-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-bull" />
                  <span>{good}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Program() {
  const total = curriculum.reduce((n, m) => n + m.lessons, 0);
  return (
    <section id="program" className="py-24 sm:py-32">
      <div className={`${container} grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="The program"
            title="From reading price to finding your own bias."
            body="A structured course that teaches the exact process behind the daily analysis, so you can apply it on your own charts."
          />
          <dl data-reveal className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted">Modules</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">{curriculum.length}</dd>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted">Lessons</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">{total}+</dd>
            </div>
          </dl>
        </div>
        <ol className="space-y-3">
          {curriculum.map((m, i) => (
            <li
              key={m.title}
              data-reveal
              className="group flex gap-5 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-gold/40 sm:p-6"
            >
              <span className="font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">{m.title}</h3>
                  <span className="font-mono text-xs text-muted">{m.lessons} lessons</span>
                </div>
                <p className="mt-2 leading-relaxed text-muted">{m.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className={container}>
        <SectionHeading
          center
          eyebrow="Pricing"
          title="Choose how you want to learn."
          body="Start with the daily analysis or go deeper with the full program and mentorship."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                plan.featured
                  ? "border border-gold/50 bg-gradient-to-b from-gold/[0.12] to-surface shadow-[0_30px_80px_-30px_rgb(227_180_80/0.45)]"
                  : "border border-line bg-background"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-[#17120a]">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-[-0.04em]">{plan.price}</span>
                <span className="text-sm text-muted">{plan.period}</span>
              </p>
              <a href={site.joinUrl} className={`btn mt-7 w-full ${plan.featured ? "btn-gold" : "btn-ghost"}`}>
                {plan.cta}
              </a>
              <ul className="mt-8 space-y-3 border-t border-line pt-7 text-[15px]">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
          Questions before joining?{" "}
          <a href={site.whatsappUrl} className="text-gold underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className={container}>
        <SectionHeading center eyebrow="Members" title="What the community says." />
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li
              key={i}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="flex flex-col rounded-3xl border border-line bg-surface p-7"
            >
              <Quote className="h-7 w-7 text-gold/70" />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-semibold text-gold" aria-hidden>
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Socials() {
  return (
    <section id="socials" className="border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className={container}>
        <SectionHeading
          eyebrow="Follow along"
          title="Join the conversation."
          body="Free market notes, chart breakdowns and lessons across our channels."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s, i) => (
            <li key={s.name} data-reveal style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-gold/50 active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-foreground transition-colors group-hover:text-gold">
                    <SocialIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <ArrowRight className="h-4 w-4 -rotate-45 text-muted transition-colors group-hover:text-gold" />
                </div>
                <p className="mt-6 font-semibold">{s.name}</p>
                <p className="font-mono text-sm text-gold">{s.handle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <div data-reveal className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-medium">
                {f.q}
                <Plus className="faq-icon h-5 w-5 shrink-0 text-gold transition-transform duration-200" />
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div
        data-reveal
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-gold/[0.14] via-surface to-surface px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl">
            {closing.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">{closing.body}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.joinUrl} className="btn btn-gold">
              Join Elite Forex Hub
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <SocialIcon name="whatsapp" className="h-4 w-4" />
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
