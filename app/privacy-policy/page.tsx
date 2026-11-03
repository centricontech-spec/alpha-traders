import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${privacy.title} | Elite Forex Hub`,
  description: privacy.description,
};

export default function Page() {
  return <LegalPage doc={privacy} />;
}
