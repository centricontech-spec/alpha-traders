import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Elite Forex Hub | Learn to trade Gold & Forex with Junaid Rizv",
  description:
    "Daily market analysis, key levels and trade ideas on gold and major forex pairs, with the reasoning behind every idea. Learn market structure, daily bias and disciplined risk management.",
  openGraph: {
    title: "Elite Forex Hub",
    description:
      "Read the structure. Find the bias. Manage the risk. Learn to trade gold and forex with Junaid Rizv.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a08",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
