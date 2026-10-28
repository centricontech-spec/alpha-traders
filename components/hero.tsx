import { site } from "@/lib/content";
import { ArrowRight } from "./icons";

// Deterministic candles for the decorative chart (no randomness, so server and client match)
const candles = [
  [62, 70, 55, 66], [66, 72, 60, 61], [61, 64, 52, 54], [54, 58, 47, 57],
  [57, 66, 55, 64], [64, 69, 59, 60], [60, 63, 50, 52], [52, 56, 44, 47],
  [47, 55, 45, 53], [53, 62, 51, 60], [60, 68, 58, 66], [66, 75, 63, 72],
  [72, 76, 66, 68], [68, 74, 65, 73], [73, 82, 71, 80], [80, 86, 76, 84],
];

function MiniChart() {
  const w = 320;
  const h = 150;
  const step = w / candles.length;
  const y = (v: number) => h - ((v - 40) / 50) * h;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label="Example gold chart showing a bullish break of structure">
      {/* Key levels */}
      <line x1="0" x2={w} y1={y(57)} y2={y(57)} stroke="var(--gold)" strokeOpacity="0.55" strokeDasharray="4 4" />
      <line x1="0" x2={w} y1={y(45)} y2={y(45)} stroke="var(--bear)" strokeOpacity="0.5" strokeDasharray="4 4" />
      {candles.map(([o, hi, lo, c], i) => {
        const up = c >= o;
        const x = i * step + step / 2;
        const color = up ? "var(--bull)" : "var(--bear)";
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={y(hi)} y2={y(lo)} stroke={color} strokeWidth="1.2" />
            <rect
              x={x - step * 0.3}
              width={step * 0.6}
              y={y(Math.max(o, c))}
              height={Math.max(2, Math.abs(y(o) - y(c)))}
              fill={color}
              rx="1"
            />
          </g>
        );
      })}
    </svg>
  );
}

function PlanCard() {
  const rows = [
    { label: "Bias", value: "Bullish above 4H structure", tone: "text-bull" },
    { label: "Key level", value: "Previous day high", tone: "text-gold" },
    { label: "Invalidation", value: "Close below Asia low", tone: "text-bear" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gold/10 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-3xl border border-line-strong bg-surface/80 p-5 shadow-2xl shadow-black/50 backdrop-blur sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Daily plan</p>
            <p className="mt-1 text-lg font-semibold tracking-tight">XAU/USD</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-bull/30 bg-bull/10 px-2.5 py-1 font-mono text-[11px] font-medium text-bull">
            <span className="h-1.5 w-1.5 rounded-full bg-bull" aria-hidden />
            Shared pre-open
          </span>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-background/60 p-3">
          <MiniChart />
        </div>
        <dl className="mt-4 divide-y divide-line">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between py-2.5 text-sm">
              <dt className="text-muted">{r.label}</dt>
              <dd className={`font-mono ${r.tone}`}>{r.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-muted">
          Illustrative example of the daily format. Not a live trade.
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(227_180_80/0.18),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            Gold &amp; major forex pairs, analysed every trading day
          </p>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]">
            Read the structure.
            <br />
            <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-gold-gradient">
              Find the bias.
            </span>
            <br />
            Trade the plan.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Learn to trade gold and forex with {site.trader}. Daily analysis, key levels and trade
            ideas shared before the market opens, with the reasoning behind every one.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={site.joinUrl} className="btn btn-gold">
              Join Elite Forex Hub
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#method" className="btn btn-ghost">
              See how it works
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
            {[
              ["Pre-open", "Bias shared daily"],
              ["Every", "Loss broken down"],
              ["Zero", "Indicator overload"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="sr-only">{v}</dt>
                <dd>
                  <span className="block text-xl font-semibold tracking-tight text-foreground">{k}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted">{v}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <PlanCard />
      </div>
    </section>
  );
}
