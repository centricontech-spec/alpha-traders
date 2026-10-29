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
} from "@/lib/content";
import { ArrowRight, Check, Cross, FeatureIcon, Plus, SocialIcon } from "./icons";

// Section header used across the page: index number + label on a hairline rule
function SectionTag({ index, label, tone = "dark" }: { index: string; label: string; tone?: "dark" | "light" }) {
  const rule = tone === "dark" ? "border-line text-bone-dim" : "border-paper-ink/15 text-paper-ink/60";
  return (
    <div className={`label flex items-center justify-between border-t pt-4 ${rule}`}>
      <span>
        <span className={tone === "dark" ? "text-gold" : "text-gold-deep"}>{index}</span>
        <span className="mx-3" aria-hidden>
          /
        </span>
        {label}
      </span>
      <span aria-hidden>{site.shortName}</span>
    </div>
  );
}

const delay = (i: number, step = 70) => ({ "--reveal-delay": `${i * step}ms` }) as React.CSSProperties;

export function Ticker() {
  const items = [...instruments, ...instruments];
  return (
    <div className="marquee overflow-hidden bg-gold py-3 text-ink" aria-label="Markets covered">
      <ul className="marquee-track flex w-max">
        {items.map((pair, i) => (
          <li key={i} aria-hidden={i >= instruments.length} className="display flex items-center text-2xl">
            <span className="px-6">{pair}</span>
            <span className="h-2 w-2 rotate-45 bg-ink" aria-hidden />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="frame">
        <SectionTag index="01" label={about.eyebrow} />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* PLACEHOLDER: swap the monogram for a real portrait at /public/junaid.jpg */}
          <div data-reveal className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden border border-line bg-ink-2">
              <div className="grid-paper absolute inset-0" aria-hidden />
              <span className="display absolute -bottom-6 -left-2 text-[14rem] leading-none text-gold/90" aria-hidden>
                JR
              </span>
              <div className="absolute inset-x-0 top-0 flex justify-between border-b border-line bg-ink/80 px-4 py-3">
                <span className="label text-bone">{site.trader}</span>
                <span className="label text-bone-dim">Founder</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <h2 data-reveal className="display text-[clamp(3rem,7vw,6.5rem)]">
              {about.title}
            </h2>
            <div data-reveal className="mt-8 grid gap-6 text-lg leading-relaxed text-bone-dim md:grid-cols-2">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <blockquote data-reveal className="mt-12 border-l-2 border-gold pl-6 lg:mt-16">
              <p className="text-2xl font-medium leading-snug text-bone lg:text-[2rem]">{about.problem.title}</p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-bone-dim">{about.problem.body}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section id="method" className="border-t border-line bg-ink-2 py-20 lg:py-28">
      <div className="frame">
        <SectionTag index="02" label="The method" />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <h2 data-reveal className="display text-[clamp(3rem,7vw,6.5rem)] lg:col-span-7">
            Simple, but <span className="text-gold">powerful.</span>
          </h2>
          <p data-reveal className="text-lg leading-relaxed text-bone-dim lg:col-span-4 lg:col-start-9 lg:self-end">
            Four steps, repeated every day. No indicator overload and no guesswork, just a clear way of reading
            what price is telling you.
          </p>
        </div>
      </div>
      <ol className="frame mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <li
            key={p.step}
            data-reveal
            style={delay(i)}
            className="group border-t border-line py-8 sm:px-6 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:border-l lg:border-l lg:[&:nth-child(odd)]:pl-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <span className="display block text-7xl text-gold/30 transition-colors group-hover:text-gold">{p.step}</span>
            <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-bone-dim">{p.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Daily() {
  return (
    <section className="py-20 lg:py-28">
      <div className="frame">
        <SectionTag index="03" label={daily.eyebrow} />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 data-reveal className="display text-[clamp(2.8rem,6vw,5.5rem)]">
              {daily.title}
            </h2>
            <p data-reveal className="mt-8 max-w-lg text-lg leading-relaxed text-bone-dim">
              {daily.body}
            </p>
          </div>
          <ul className="lg:col-span-7 lg:pl-8">
            {daily.items.map((item, i) => (
              <li
                key={item.title}
                data-reveal
                style={delay(i)}
                className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-line py-7 last:border-b sm:grid-cols-[auto_14rem_1fr]"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-line text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <FeatureIcon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="self-center text-xl font-semibold">{item.title}</h3>
                <p className="col-start-2 leading-relaxed text-bone-dim sm:col-start-3 sm:self-center">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Light "paper" section to break the run of dark sections
export function Different() {
  return (
    <section className="bg-paper py-20 text-paper-ink lg:py-28">
      <div className="frame">
        <SectionTag index="04" label={different.eyebrow} tone="light" />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 data-reveal className="display text-[clamp(3rem,7vw,6.5rem)]">
              {different.title}
            </h2>
            <p data-reveal className="mt-8 text-lg leading-relaxed text-paper-ink/75">
              {different.body}
            </p>
            <p data-reveal className="mt-5 text-lg leading-relaxed text-paper-ink/75">
              {different.focus}
            </p>
          </div>
          <div data-reveal className="lg:col-span-7 lg:pl-8">
            <div className="label grid grid-cols-2 border-b-2 border-paper-ink pb-3">
              <span className="text-paper-ink/60">Most trading groups</span>
              <span className="pl-5 text-paper-ink">{site.name}</span>
            </div>
            <ul>
              {different.compare.map(([bad, good]) => (
                <li key={good} className="grid grid-cols-2 border-b border-paper-ink/15">
                  <p className="flex items-start gap-3 py-5 pr-4 text-paper-ink/55 line-through decoration-paper-ink/25">
                    <Cross className="mt-1 h-4 w-4 shrink-0 text-bear" />
                    <span>{bad}</span>
                  </p>
                  <p className="flex items-start gap-3 border-l border-paper-ink/15 py-5 pl-5 font-medium">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" />
                    <span>{good}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Program() {
  const total = curriculum.reduce((n, m) => n + m.lessons, 0);
  return (
    <section id="program" className="py-20 lg:py-28">
      <div className="frame">
        <SectionTag index="05" label="The program" />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <h2 data-reveal className="display text-[clamp(2.8rem,6vw,5.5rem)]">
              From reading price to finding your own bias.
            </h2>
            <p data-reveal className="mt-8 max-w-lg text-lg leading-relaxed text-bone-dim">
              A structured course that teaches the exact process behind the daily analysis, so you can apply it
              on your own charts.
            </p>
            <dl data-reveal className="mt-10 grid max-w-sm grid-cols-2 border-t border-line">
              <div className="pt-5">
                <dt className="label text-bone-dim">Modules</dt>
                <dd className="display mt-2 text-6xl text-gold">{curriculum.length}</dd>
              </div>
              <div className="border-l border-line pl-6 pt-5">
                <dt className="label text-bone-dim">Lessons</dt>
                <dd className="display mt-2 text-6xl text-gold">{total}+</dd>
              </div>
            </dl>
          </div>
          <ol className="lg:col-span-7 lg:pl-8">
            {curriculum.map((m, i) => (
              <li
                key={m.title}
                data-reveal
                className="group grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-line py-7 transition-colors last:border-b hover:bg-ink-2 sm:grid-cols-[4.5rem_1fr_auto]"
              >
                <span className="display text-4xl text-bone-dim transition-colors group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-bone-dim">{m.body}</p>
                </div>
                <span className="label col-start-2 mt-3 text-bone-dim sm:col-start-3 sm:mt-1.5">
                  {m.lessons} lessons
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line bg-ink-2 py-20 lg:py-28">
      <div className="frame">
        <SectionTag index="06" label="Pricing" />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <h2 data-reveal className="display text-[clamp(3rem,7vw,6.5rem)] lg:col-span-7">
            Choose how you <span className="text-gold">learn.</span>
          </h2>
          <p data-reveal className="text-lg leading-relaxed text-bone-dim lg:col-span-4 lg:col-start-9 lg:self-end">
            Start with the daily analysis, or go deeper with the full program and mentorship.
          </p>
        </div>

        <div className="mt-14 grid border border-line lg:grid-cols-3">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              data-reveal
              style={delay(i, 90)}
              className={`relative flex flex-col p-7 sm:p-9 ${i > 0 ? "border-t border-line lg:border-l lg:border-t-0" : ""} ${
                plan.featured ? "bg-ink-3" : "bg-ink"
              }`}
            >
              {plan.featured && <span className="absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden />}
              <div className="flex items-center justify-between">
                <h3 className="label text-bone">{plan.name}</h3>
                {plan.featured && <span className="label bg-gold px-2 py-1 text-ink">Most popular</span>}
              </div>
              <p className="mt-8 flex items-end gap-3">
                <span className={`display text-8xl ${plan.featured ? "text-gold" : "text-bone"}`}>{plan.price}</span>
                <span className="label mb-2 text-bone-dim">{plan.period}</span>
              </p>
              <p className="mt-6 min-h-12 leading-relaxed text-bone-dim">{plan.description}</p>
              <ul className="mt-8 flex-1 border-t border-line">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 border-b border-line py-3.5 text-[15px]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={site.joinUrl} className={`btn mt-8 w-full ${plan.featured ? "btn-gold" : "btn-line"}`}>
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
        <p className="label mt-6 text-bone-dim">
          Questions before joining?{" "}
          <a
            href={site.whatsappUrl}
            className="text-gold underline underline-offset-4 hover:text-gold-hi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}

export function Socials() {
  return (
    <section id="socials" className="py-20 lg:py-28">
      <div className="frame">
        <SectionTag index="08" label="Follow along" />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <h2 data-reveal className="display text-[clamp(3rem,7vw,6.5rem)] lg:col-span-7">
            Join the conversation.
          </h2>
          <p data-reveal className="text-lg leading-relaxed text-bone-dim lg:col-span-4 lg:col-start-9 lg:self-end">
            Free market notes, chart breakdowns and lessons, wherever you follow along.
          </p>
        </div>
      </div>
      <ul className="frame mt-14 grid sm:grid-cols-2 lg:grid-cols-5">
        {socials.map((s, i) => (
          <li
            key={s.href}
            data-reveal
            style={delay(i)}
            className="border-t border-line sm:[&:nth-child(even)]:border-l lg:border-l lg:first:border-l-0"
          >
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col p-6 transition-colors hover:bg-gold hover:text-ink"
            >
              <div className="flex items-center justify-between">
                <SocialIcon name={s.icon} className="h-6 w-6 text-gold transition-colors group-hover:text-ink" />
                <ArrowRight className="h-4 w-4 -rotate-45 text-bone-dim transition-colors group-hover:text-ink" />
              </div>
              <p className="display mt-10 text-4xl">{s.name}</p>
              <p className="label mt-2 text-gold transition-colors group-hover:text-ink">{s.label}</p>
              <p className="mt-4 text-sm leading-relaxed text-bone-dim transition-colors group-hover:text-ink/75">
                {s.blurb}
              </p>
              <p className="label mt-6 text-bone-dim transition-colors group-hover:text-ink">{s.handle}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-ink-2 py-20 lg:py-28">
      <div className="frame">
        <SectionTag index="09" label="FAQ" />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <h2 data-reveal className="display text-[clamp(3rem,7vw,6.5rem)] lg:col-span-5">
            Questions, answered.
          </h2>
          <div data-reveal className="lg:col-span-7 lg:pl-8">
            <div className="border-b border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-t border-line">
                <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-medium transition-colors hover:text-gold">
                  {f.q}
                  <Plus className="faq-icon h-5 w-5 shrink-0 text-gold transition-transform duration-200" />
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-bone-dim">{f.a}</p>
              </details>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="bg-gold text-ink">
      <div className="frame grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <h2 data-reveal className="display text-[clamp(3rem,8vw,7.5rem)] lg:col-span-8">
          {closing.title}
        </h2>
        <div data-reveal className="flex flex-col justify-end gap-8 lg:col-span-4">
          <p className="text-lg leading-relaxed text-ink/80">{closing.body}</p>
          <div className="flex flex-col gap-3">
            <a href={site.joinUrl} className="btn btn-ink">
              Join Elite Forex Hub
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-ink/30 hover:border-ink"
            >
              Talk to us on WhatsApp
              <SocialIcon name="whatsapp" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
