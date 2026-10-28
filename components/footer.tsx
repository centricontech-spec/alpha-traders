import { disclaimer, nav, site, socials } from "@/lib/content";
import { LogoMark, SocialIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="font-semibold tracking-tight">{site.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.tagline}</p>
            <ul className="mt-6 flex gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    <SocialIcon name={s.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold">Explore</p>
            <ul className="mt-4 space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-9 items-center text-sm text-muted hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-4 space-y-1 text-sm text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex min-h-9 items-center hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center hover:text-foreground">
                  WhatsApp
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm font-semibold">Legal</p>
            {/* PLACEHOLDER: create these pages */}
            <ul className="mt-4 space-y-1 text-sm text-muted">
              {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="inline-flex min-h-9 items-center hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-background p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Risk disclaimer</p>
          <p className="mt-2 text-xs leading-relaxed text-muted">{disclaimer}</p>
        </div>

        <p className="mt-8 text-xs text-muted">
          © {site.year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
