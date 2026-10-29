// All site copy lives here so it can be edited without touching components.
// Anything marked PLACEHOLDER still needs real content before launch.

export const site = {
  name: "Elite Forex Hub",
  shortName: "EFH",
  trader: "Junaid Rizv",
  tagline: "Read the structure. Find the bias. Manage the risk.",
  // PLACEHOLDER: replace with the real checkout / signup URL
  joinUrl: "#pricing",
  // PLACEHOLDER: replace with the real WhatsApp number (digits only, with country code)
  whatsappUrl: "https://wa.me/910000000000",
  // PLACEHOLDER: replace with the real support email
  email: "support@eliteforexhub.com",
  year: 2026,
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Method", href: "#method" },
  { label: "Program", href: "#program" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Community", href: "#socials" },
  { label: "FAQ", href: "#faq" },
];

export const instruments = [
  "XAU/USD",
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "USD/CAD",
  "USD/CHF",
  "NZD/USD",
  "GBP/JPY",
  "EUR/JPY",
];

export const about = {
  eyebrow: "About Elite Forex Hub",
  title: "Meet Junaid Rizv",
  paragraphs: [
    "Meet Junaid Rizv, the Forex and Gold trader behind Elite Forex Hub. Over the past year, Junaid has built a track record of disciplined, consistent trading, sharing his analysis openly and in real time rather than showing results after the fact.",
    "His approach is simple but powerful: read the structure, find the bias, manage the risk, and let the process do the work.",
  ],
  problem: {
    title: "Most traders don't lose because the market is against them.",
    body: "They lose because they're trading alone, reacting to noise, and guessing instead of reading what price is actually telling them. Elite Forex Hub exists to change that.",
  },
};

export const pillars = [
  {
    step: "01",
    title: "Read the structure",
    body: "Start from what price is actually doing: highs, lows, breaks and ranges on gold and the major pairs.",
  },
  {
    step: "02",
    title: "Find the bias",
    body: "Build a daily directional bias before the session opens, so every decision has context.",
  },
  {
    step: "03",
    title: "Manage the risk",
    body: "Define invalidation and position size first. Protecting capital comes before chasing profit.",
  },
  {
    step: "04",
    title: "Let the process work",
    body: "Execute the plan, review it honestly, and repeat. Consistency is built from the routine, not the outcome.",
  },
];

export const daily = {
  eyebrow: "Every trading day",
  title: "You don't just see the idea. You see why.",
  body: "Every trading day, members get Junaid's market analysis, key levels, and the trade ideas he's watching, along with the reasoning behind each one. Every idea becomes a lesson you can use on your own charts.",
  items: [
    {
      icon: "chart",
      title: "Market analysis",
      body: "A structured read of gold and the major pairs, posted before the market opens.",
    },
    {
      icon: "levels",
      title: "Key levels",
      body: "The exact zones that matter for the day, marked and explained.",
    },
    {
      icon: "target",
      title: "Trade ideas",
      body: "Where Junaid is looking to buy or sell, with entry logic and invalidation.",
    },
    {
      icon: "book",
      title: "The reasoning",
      body: "The why behind every idea, so you learn to find it yourself.",
    },
  ],
};

export const different = {
  eyebrow: "What makes it different",
  title: "The plan is traded out loud.",
  body: "The bias is shared before the market opens, not after the move has already happened. When an idea doesn't work, it's broken down just as openly as the ones that do, because the losing trades teach more than the winners ever will.",
  // Left column = what you see elsewhere, right column = Elite Forex Hub
  compare: [
    ["Results posted after the move", "Bias shared before the open"],
    ["Only winning trades shown", "Losses broken down just as openly"],
    ["Indicator overload", "Clean market structure"],
    ["Recycled strategies", "One clear, repeatable process"],
    ["Flashy screenshots", "Real reasoning you can apply"],
  ],
  focus:
    "The focus is on gold and major forex pairs, built around market structure, daily bias, and disciplined risk management. Just a clear, repeatable way of reading the market.",
};

// PLACEHOLDER: course modules, replace with the real curriculum
export const curriculum = [
  {
    title: "Foundations of price",
    lessons: 6,
    body: "How forex and gold markets move, sessions, pairs, and the language of price action.",
  },
  {
    title: "Market structure",
    lessons: 8,
    body: "Identifying trend, swing points, breaks of structure and ranges on any timeframe.",
  },
  {
    title: "Building a daily bias",
    lessons: 7,
    body: "Top-down analysis from higher timeframes to a clear directional plan for the day.",
  },
  {
    title: "Key levels and entries",
    lessons: 6,
    body: "Marking the zones that matter and waiting for price to confirm before acting.",
  },
  {
    title: "Risk management",
    lessons: 5,
    body: "Position sizing, stop placement, and protecting capital through losing streaks.",
  },
  {
    title: "Trading gold (XAU/USD)",
    lessons: 6,
    body: "How gold behaves differently, its volatility, and adapting the process to it.",
  },
  {
    title: "Psychology and review",
    lessons: 5,
    body: "Journaling, reviewing losing trades honestly, and building discipline.",
  },
];

// Prices confirmed; plan names and features are still PLACEHOLDER
export const plans = [
  {
    name: "Community",
    price: "$14.99",
    period: "/month",
    description: "Daily analysis and the community, for traders who want structure every day.",
    features: [
      "Daily bias before the market opens",
      "Key levels on gold and major pairs",
      "Trade ideas with full reasoning",
      "Losing trade breakdowns",
      "Members-only community chat",
    ],
    cta: "Join the community",
    featured: false,
  },
  {
    name: "Elite Program",
    price: "$49",
    period: "/month",
    description: "The full course plus everything in Community, to learn the method end to end.",
    features: [
      "Everything in Community",
      "Full 7-module video course",
      "New lessons added every month",
      "Weekly live market review",
      "Risk and journaling templates",
    ],
    cta: "Enroll now",
    featured: true,
  },
  {
    name: "Mentorship",
    price: "$99",
    period: "one-time",
    description: "Direct guidance from Junaid for traders ready to go deeper.",
    features: [
      "Everything in Elite Program",
      "1:1 sessions with Junaid",
      "Personal trade and journal review",
      "Custom plan for your schedule",
      "Priority support",
    ],
    cta: "Check availability",
    featured: false,
  },
];

export const socials = [
  {
    name: "Instagram",
    label: "Elite Forex Official",
    handle: "@eliteforexhub_",
    href: "https://www.instagram.com/eliteforexhub_/",
    blurb: "Chart breakdowns, lessons and community moments.",
    icon: "instagram",
  },
  {
    name: "Instagram",
    label: "Junaid Rizv Official",
    handle: "@junaidrzv",
    href: "https://www.instagram.com/junaidrzv/",
    blurb: "Junaid's own feed: daily bias, trades and thoughts.",
    icon: "instagram",
  },
  {
    name: "YouTube",
    label: "Junaid Rizv",
    handle: "@junaidrizv",
    href: "https://www.youtube.com/@junaidrizv/",
    blurb: "Long-form market reviews and free lessons.",
    icon: "youtube",
  },
  {
    name: "Discord",
    label: "Elite Forex Hub",
    handle: "Join the server",
    href: "https://discord.gg/QZ4jaDKNP7",
    blurb: "Where the community trades, asks and reviews together.",
    icon: "discord",
  },
  {
    name: "X",
    label: "Rizv Trades",
    handle: "@rizvtrades",
    href: "https://x.com/rizvtrades",
    blurb: "Quick market notes during the session.",
    icon: "x",
  },
];

export const faqs = [
  {
    q: "Is this for complete beginners?",
    a: "Yes. The program starts from the foundations of price and market structure, and the daily analysis explains the reasoning behind every idea so you learn as you follow along.",
  },
  {
    q: "Which markets do you cover?",
    a: "The focus is gold (XAU/USD) and the major forex pairs. Keeping the list short means deeper, more consistent analysis.",
  },
  {
    q: "Are these signals I just copy?",
    a: "No. The goal isn't to make you depend on calls. Every idea comes with its reasoning so you can get to the point where you find the bias yourself.",
  },
  {
    q: "When is the daily analysis shared?",
    a: "The bias and key levels are shared before the market opens, not after the move has already happened.",
  },
  {
    q: "Do you show losing trades?",
    a: "Always. When an idea doesn't work it's broken down just as openly as the ones that do, because losing trades teach more than winners.",
  },
  {
    // PLACEHOLDER: confirm your refund policy
    q: "What is the refund policy?",
    a: "Please contact us before purchasing if you have any questions. Refund terms are listed in our Refund Policy.",
  },
];

export const closing = {
  title: "Trade with a community that thinks, questions and grows together.",
  body: "The goal isn't to make you depend on calls. It's to get you to the point where you can find the bias yourself.",
};

export const disclaimer =
  "All content shared in Elite Forex Hub is for educational growth of individuals aiming to become what they always dreamt of. Nothing on this website or in the community is financial advice. Trading forex and gold on margin carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results. Only trade with money you can afford to lose.";
