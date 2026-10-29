import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Cross(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 32 32" fill="currentColor" stroke="none" {...props}>
      <path d="M13 8c-4.4 1.6-7 5.2-7 10v6h8v-8h-4c0-3 1.6-5 4-6l-1-2Zm13 0c-4.4 1.6-7 5.2-7 10v6h8v-8h-4c0-3 1.6-5 4-6l-1-2Z" />
    </svg>
  );
}

const featureIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  chart: (p) => (
    <svg {...base} {...p}>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 16v-4M12 16V8M16 16v-6" strokeWidth={2.2} />
    </svg>
  ),
  levels: (p) => (
    <svg {...base} {...p}>
      <path d="M3 7h18M3 12h18M3 17h18" strokeDasharray="2 3" />
      <path d="M5 17l5-5 4 3 5-8" />
    </svg>
  ),
  target: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  ),
  book: (p) => (
    <svg {...base} {...p}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5" />
    </svg>
  ),
};

export function FeatureIcon({ name, ...props }: IconProps & { name: string }) {
  const Icon = featureIcons[name] ?? featureIcons.chart;
  return <Icon {...props} />;
}

const socialIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  instagram: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  youtube: (p) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8ZM9.7 15.1V8.9l5.8 3.1-5.8 3.1Z" />
    </svg>
  ),
  x: (p) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.5l11.2 14.5Z" />
    </svg>
  ),
  discord: (p) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M20.3 4.4A19.6 19.6 0 0 0 15.4 3l-.6 1.3a18 18 0 0 0-5.6 0L8.6 3a19.5 19.5 0 0 0-4.9 1.4C1.1 9 .4 13.5.7 18.1a19.7 19.7 0 0 0 6 3l1.3-2.1c-.7-.3-1.4-.6-2-1l.5-.4a14 14 0 0 0 11.8 0l.5.4-2 1 1.3 2.1a19.6 19.6 0 0 0 6-3c.5-5.2-.8-9.7-3.4-13.7ZM8.5 15.4c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4Zm7 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4Z" />
    </svg>
  ),
  whatsapp: (p) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 24 12a11.7 11.7 0 0 0-3.5-8.5ZM12 21.6c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7Zm5.4-7.3c-.3-.2-1.8-.9-2-1s-.5-.1-.7.2l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4l-.5-.3Z" />
    </svg>
  ),
};

export function SocialIcon({ name, ...props }: IconProps & { name: string }) {
  const Icon = socialIcons[name] ?? socialIcons.instagram;
  return <Icon {...props} />;
}
