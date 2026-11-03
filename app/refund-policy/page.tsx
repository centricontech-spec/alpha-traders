import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { refund } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${refund.title} | Elite Forex Hub`,
  description: refund.description,
};

export default function Page() {
  return <LegalPage doc={refund} />;
}
