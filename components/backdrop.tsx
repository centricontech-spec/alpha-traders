// Decorative animated section backgrounds.
// Pure SVG + CSS (transform-only keyframes in globals.css), no JS, no images.
// Every variant sits behind the content (-z-10 inside an `isolate` section),
// is hidden from assistive tech, and stops moving under reduced motion.

type Variant = "flow" | "contour" | "scan" | "diagonal" | "aurora" | "streams" | "dots" | "flow-ink";

const W = 1600;

// Periodic "price line": every term repeats exactly over W, so two copies tile seamlessly
function pricePath(seed: number, base: number, amp: number, h: number) {
  const terms = [
    { k: 1, a: 1, p: seed * 1.7 },
    { k: 3, a: 0.45, p: seed * 2.3 },
    { k: 7, a: 0.22, p: seed * 0.9 },
    { k: 19, a: 0.09, p: seed * 3.1 },
    { k: 41, a: 0.05, p: seed * 1.3 },
  ];
  const pts: string[] = [];
  for (let x = 0; x <= W * 2; x += 10) {
    let v = 0;
    for (const t of terms) v += t.a * Math.sin((2 * Math.PI * t.k * x) / W + t.p);
    pts.push(`${x},${(base + v * amp * h).toFixed(1)}`);
  }
  return `M${pts.join("L")}`;
}

function Flow({ color = "var(--gold)", strength = 1 }: { color?: string; strength?: number }) {
  const H = 600;
  const lines = [
    { seed: 1, base: 230, amp: 0.16, o: 0.22, w: 1.2, speed: "bd-slow" },
    { seed: 2.4, base: 330, amp: 0.12, o: 0.12, w: 1, speed: "bd-slower" },
    { seed: 3.8, base: 420, amp: 0.14, o: 0.08, w: 1, speed: "bd-slowest" },
  ];
  return (
    <>
      {lines.map((l) => (
        <svg
          key={l.seed}
          viewBox={`0 0 ${W * 2} ${H}`}
          preserveAspectRatio="none"
          className={`bd-anim bd-drift ${l.speed} absolute inset-y-0 left-0 h-full w-[200%]`}
          style={{ opacity: l.o * strength }}
        >
          <path d={pricePath(l.seed, l.base, l.amp, H)} fill="none" stroke={color} strokeWidth={l.w} vectorEffect="non-scaling-stroke" />
        </svg>
      ))}
    </>
  );
}

function Contour() {
  const rings = Array.from({ length: 16 }, (_, i) => i);
  return (
    <svg viewBox="-400 -400 800 800" className="bd-anim bd-spin absolute -left-[22rem] top-1/2 h-[64rem] w-[64rem] -translate-y-1/2 opacity-[0.14]">
      {rings.map((i) => {
        const r = 40 + i * 22;
        // Slightly irregular rings read as a topographic map rather than a target
        const d = Array.from({ length: 73 }, (_, j) => {
          const a = (j / 72) * Math.PI * 2;
          const rr = r + Math.sin(a * 3 + i * 0.6) * (6 + i * 0.8) + Math.sin(a * 5 + i) * 4;
          return `${(Math.cos(a) * rr).toFixed(1)},${(Math.sin(a) * rr * 0.82).toFixed(1)}`;
        }).join("L");
        return <path key={i} d={`M${d}Z`} fill="none" stroke="var(--gold)" strokeWidth="1" vectorEffect="non-scaling-stroke" />;
      })}
    </svg>
  );
}

function Scan() {
  return (
    <>
      <div className="grid-paper absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="bd-anim bd-scan absolute inset-x-0 top-0 h-1/3 bg-[linear-gradient(to_bottom,transparent,rgb(200_168_101/0.07)_85%,rgb(200_168_101/0.22)_100%)]" />
    </>
  );
}

function Diagonal() {
  return (
    <div className="absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_70%)]">
      <svg className="bd-anim bd-diag absolute -inset-[40px] h-[calc(100%+80px)] w-[calc(100%+80px)] opacity-[0.09]">
        <defs>
          <pattern id="bd-diag" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M-10 10 10 -10M0 40 40 0M30 50 50 30" stroke="var(--gold)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bd-diag)" />
      </svg>
    </div>
  );
}

function Aurora() {
  return (
    <>
      <div className="bd-anim bd-float-a absolute -top-1/4 left-[10%] h-[70%] w-[55%] bg-[radial-gradient(closest-side,rgb(200_168_101/0.13),transparent)]" />
      <div className="bd-anim bd-float-b absolute -bottom-1/4 right-[5%] h-[70%] w-[50%] bg-[radial-gradient(closest-side,rgb(134_112_63/0.16),transparent)]" />
    </>
  );
}

function Streams() {
  const rows = [12, 24, 38, 55, 71, 86];
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.16] [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      {rows.map((y, i) => (
        <line
          key={y}
          x1="0"
          x2="100%"
          y1={`${y}%`}
          y2={`${y}%`}
          stroke="var(--gold)"
          strokeWidth="1"
          strokeDasharray={i % 2 ? "2 14 40 14" : "60 22 6 22"}
          className={`bd-anim bd-dash ${i % 3 === 0 ? "bd-dash-fast" : i % 3 === 1 ? "bd-dash-mid" : "bd-dash-slow"}`}
        />
      ))}
    </svg>
  );
}

function Dots() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(rgb(236_227_207/0.09)_1px,transparent_1.2px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="bd-anim bd-float-a absolute left-[20%] top-[10%] h-[80%] w-[45%] bg-[radial-gradient(closest-side,rgb(200_168_101/0.1),transparent)]" />
    </>
  );
}

export function Backdrop({ variant }: { variant: Variant }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {variant === "flow" && (
        <>
          <div className="absolute -right-[10%] -top-[20%] h-[80%] w-[60%] bg-[radial-gradient(closest-side,rgb(200_168_101/0.1),transparent)]" />
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_75%,transparent)]">
            <Flow />
          </div>
        </>
      )}
      {variant === "flow-ink" && <Flow color="var(--ink)" strength={0.9} />}
      {variant === "contour" && <Contour />}
      {variant === "scan" && <Scan />}
      {variant === "diagonal" && <Diagonal />}
      {variant === "aurora" && <Aurora />}
      {variant === "streams" && <Streams />}
      {variant === "dots" && <Dots />}
    </div>
  );
}
