import { disclaimer, nav, site, socials } from "@/lib/content";
import Image from "next/image";
import { SocialIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="frame pt-16">
        <div className="grid gap-12 border-b border-line pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <Image src="/logo-mark.png" alt="" width={513} height={398} className="h-11 w-auto" />
              <span className="display text-3xl">{site.name}</span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-bone-dim">{site.tagline}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name}: ${s.label}`}
                    className="inline-flex h-11 w-11 items-center justify-center border border-line text-bone-dim transition-colors hover:border-gold hover:text-gold"
                  >
                    <SocialIcon name={s.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="md:col-span-2 md:col-start-7">
            <p className="label text-gold">Explore</p>
            <ul className="mt-5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-9 items-center text-bone-dim hover:text-bone">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="label text-gold">Follow</p>
            <ul className="mt-5">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center text-bone-dim hover:text-bone"
                  >
                    {s.name === "Instagram" ? `IG / ${s.label}` : s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label text-gold">Contact</p>
            <ul className="mt-5">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex min-h-9 items-center break-all text-bone-dim hover:text-bone">
                  Email us
                </a>
              </li>
              <li>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center text-bone-dim hover:text-bone">
                  WhatsApp
                </a>
              </li>
            </ul>
            <p className="label mt-8 text-gold">Legal</p>
            {/* PLACEHOLDER: create these pages */}
            <ul className="mt-5">
              {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="inline-flex min-h-9 items-center text-bone-dim hover:text-bone">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 py-8 md:grid-cols-12">
          <p className="label text-gold md:col-span-2">Risk disclaimer</p>
          <p className="text-xs leading-relaxed text-bone-dim md:col-span-10">{disclaimer}</p>
        </div>

        <div className="label flex flex-col justify-between gap-2 border-t border-line py-6 text-bone-dim sm:flex-row">
          <span>
            © {site.year} {site.name}
          </span>
          <span>Educational content only. Not financial advice.</span>
        </div>
      </div>

      {/* Oversized wordmark to close the page */}
      <p aria-hidden className="display select-none overflow-hidden whitespace-nowrap text-center text-[15.5vw] leading-[0.78] text-ink-3">
        Elite Forex Hub
      </p>
    </footer>
  );
}
