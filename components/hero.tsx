import { site } from "@/lib/content";
import { ArrowRight } from "./icons";

// Deterministic candles for the decorative chart (no randomness, so server and client match)
const candles = [
  [62, 70, 55, 66], [66, 72, 60, 61], [61, 64, 52, 54], [54, 58, 47, 57],
  [57, 66, 55, 64], [64, 69, 59, 60], [60, 63, 50, 52], [52, 56, 44, 47],
  [47, 55, 45, 53], [53, 62, 51, 60], [60, 68, 58, 66], [66, 75, 63, 72],
  [72, 76, 66, 68], [68, 74, 65, 73], [73, 82, 71, 80], [80, 86, 76, 84],
  [84, 88, 79, 81], [81, 87, 78, 86],
];

function Chart() {
  const w = 420;
  const h = 220;
  const step = w / candles.length;
  const y = (v: number) => h - 10 - ((v - 40) / 52) * (h - 20);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label="Example gold chart showing a bullish break of structure above a key level">
      <line x1="0" x2={w} y1={y(57)} y2={y(57)} stroke="var(--gold)" strokeDasharray="3 4" />
      <text x={w - 4} y={y(57) - 6} textAnchor="end" fill="var(--gold)" fontSize="9" fontFamily="var(--font-plex-mono)">
        KEY LEVEL
      </text>
      <line x1="0" x2={w} y1={y(45)} y2={y(45)} stroke="var(--bear)" strokeOpacity="0.7" strokeDasharray="3 4" />
      <text x={w - 4} y={y(45) + 13} textAnchor="end" fill="var(--bear)" fontSize="9" fontFamily="var(--font-plex-mono)">
        INVALIDATION
      </text>
      {candles.map(([o, hi, lo, c], i) => {
        const up = c >= o;
        const x = i * step + step / 2;
        const color = up ? "var(--bull)" : "var(--bear)";
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={y(hi)} y2={y(lo)} stroke={color} strokeWidth="1" />
            <rect
              x={x - step * 0.28}
              width={step * 0.56}
              y={y(Math.max(o, c))}
              height={Math.max(1.5, Math.abs(y(o) - y(c)))}
              fill={up ? "transparent" : color}
              stroke={color}
              strokeWidth="1"
            />
          </g>
        );
      })}
    </svg>
  );
}

function PlanPanel() {
  const rows = [
    { label: "Bias", value: "Bullish above 4H structure", tone: "text-bull" },
    { label: "Key level", value: "Previous day high", tone: "text-gold" },
    { label: "Invalidation", value: "Close below Asia low", tone: "text-bear" },
  ];
  return (
    <div className="border border-line-strong bg-ink-2">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="label text-bone">Daily plan / XAU/USD</span>
        <span className="label flex items-center gap-2 text-bull">
          <span className="h-1.5 w-1.5 bg-bull" aria-hidden />
          Posted pre-open
        </span>
      </div>
      <div className="grid-paper px-3 pb-2 pt-4">
        <Chart />
      </div>
      <dl className="border-t border-line">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 last:border-b-0">
            <dt className="label text-bone-dim">{r.label}</dt>
            <dd className={`text-right font-mono text-sm ${r.tone}`}>{r.value}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-line px-4 py-3 text-xs text-bone-dim">
        Illustration of the daily format, not a live trade.
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative border-b border-line pt-16">
      <div className="frame grid gap-12 pb-14 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-20">
        <div className="flex flex-col justify-between lg:col-span-7 xl:col-span-8">
          <div>
            <p className="label text-gold">Gold &amp; major FX / daily bias before the open</p>
            <h1 className="display mt-6 text-[clamp(3.6rem,11vw,10.5rem)]">
              Read the structure.
              <br />
              <span className="text-gold">Find the bias.</span>
              <br />
              Trade the plan.
            </h1>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-bone-dim">
              Learn to trade gold and forex with <span className="text-bone">{site.trader}</span>. Analysis,
              key levels and trade ideas shared before the market opens, with the reasoning behind every one.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={site.joinUrl} className="btn btn-gold sm:min-w-56">
                Join Elite Forex Hub
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#method" className="btn btn-line">
                How it works
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 xl:col-span-4 lg:self-end">
          <PlanPanel />
        </div>
      </div>

      <dl className="frame grid grid-cols-2 border-t border-line md:grid-cols-4">
        {[
          ["Pre-open", "Bias posted before the session"],
          ["Every loss", "Broken down in the open"],
          ["XAU + majors", "A focused watchlist"],
          ["Zero", "Indicator overload"],
        ].map(([k, v], i) => (
          <div
            key={v}
            className={`py-6 md:px-6 ${i % 2 === 1 ? "border-l border-line pl-5" : ""} ${i > 0 ? "md:border-l md:border-line" : "md:pl-0"} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
          >
            <dt className="sr-only">{v}</dt>
            <dd>
              <span className="display block text-3xl lg:text-4xl">{k}</span>
              <span className="label mt-2 block text-bone-dim">{v}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
