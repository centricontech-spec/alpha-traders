import { Backdrop } from "./backdrop";
import { about, closing, curriculum, daily, mentorship, plans, site, socials } from "@/lib/content";
import { ArrowRight, Check, FeatureIcon, SocialIcon } from "./icons";

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

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-20 lg:py-28">
      <Backdrop variant="contour" />
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

export function Daily() {
  return (
    <section id="included" className="relative isolate overflow-hidden py-20 lg:py-28">
      <Backdrop variant="scan" />
      <div className="frame">
        <SectionTag index="02" label={daily.eyebrow} />
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

export function Program() {
  return (
    <section id="program" className="relative isolate overflow-hidden border-t border-line bg-ink-2 py-20 lg:py-28">
      <Backdrop variant="diagonal" />
      <div className="frame">
        <SectionTag index="03" label={mentorship.eyebrow} />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <h2 data-reveal className="display text-[clamp(2.8rem,5.5vw,5rem)]">
              {mentorship.title}
            </h2>
            <p data-reveal className="mt-5 text-2xl font-medium text-gold">
              {mentorship.subtitle}
            </p>
            <p data-reveal className="mt-6 max-w-lg text-lg leading-relaxed text-bone-dim">
              {mentorship.body}
            </p>
            <div data-reveal className="mt-10">
              <p className="label text-gold">What&apos;s included</p>
              <ul className="mt-4 border-t border-line">
                {mentorship.includes.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-line py-3.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#pricing" className="btn btn-gold mt-8 w-full sm:w-auto sm:min-w-64">
                Apply for mentorship
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <ol className="lg:col-span-7 lg:pl-8">
            {curriculum.map((m, i) => (
              <li
                key={m.title}
                data-reveal
                className="group grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-line py-7 transition-colors last:border-b hover:bg-ink sm:grid-cols-[4.5rem_1fr_auto]"
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
    <section id="pricing" className="relative isolate overflow-hidden py-20 lg:py-28">
      <Backdrop variant="aurora" />
      <div className="frame">
        <SectionTag index="04" label="Pricing" />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <h2 data-reveal className="display text-[clamp(3rem,7vw,6.5rem)] lg:col-span-7">
            Choose how you <span className="text-gold">learn.</span>
          </h2>
          <p data-reveal className="text-lg leading-relaxed text-bone-dim lg:col-span-4 lg:col-start-9 lg:self-end">
            Join the community for the daily analysis, or go one on one with Junaid.
          </p>
        </div>

        <div className="mt-14 grid border border-line md:grid-cols-2">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              data-reveal
              style={delay(i, 90)}
              className={`relative flex flex-col p-7 sm:p-9 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""} ${
                plan.badge ? "bg-ink-3" : "bg-ink-2"
              }`}
            >
              {plan.badge && <span className="absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden />}
              <div className="flex items-center justify-between">
                <h3 className="label text-bone">{plan.name}</h3>
                {plan.badge && <span className="label bg-gold px-2 py-1 text-ink">{plan.badge}</span>}
              </div>
              <p className="mt-8 flex items-end gap-3">
                <span className={`display text-8xl ${plan.badge ? "text-gold" : "text-bone"}`}>{plan.price}</span>
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
              <a href={site.joinUrl} className={`btn mt-8 w-full ${plan.badge ? "btn-gold" : "btn-line"}`}>
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
    <section id="socials" className="relative isolate overflow-hidden py-20 lg:py-28">
      <Backdrop variant="dots" />
      <div className="frame">
        <SectionTag index="06" label="Follow along" />
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

export function Closing() {
  return (
    <section className="relative isolate overflow-hidden bg-gold text-ink">
      <Backdrop variant="flow-ink" />
      <div className="frame grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <h2 data-reveal className="display text-[clamp(3rem,6vw,5.5rem)] lg:col-span-8">
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
