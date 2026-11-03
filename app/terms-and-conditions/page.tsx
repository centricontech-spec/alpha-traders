import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { terms } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${terms.title} | Elite Forex Hub`,
  description: terms.description,
};

export default function Page() {
  return <LegalPage doc={terms} />;
}
