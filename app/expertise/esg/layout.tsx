import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ESG Law Firm India | Environmental, Social & Governance | URE Legal",
  description: "URE Legal's ESG practice provides integrated legal advisory on sustainable finance, climate change strategy, business responsibility reporting, and greenwashing litigation in India.",
  keywords: ["ESG law india", "sustainable finance advisory", "business responsibility reporting", "climate change legal", "URE Legal", "ESG compliance india"],
  openGraph: {
    title: "ESG & Sustainability Practice | URE Legal",
    description: "Holistic legal advisory on Environmental, Social, and Governance (ESG) standards.",
    type: "website",
  },
};

export default function ESGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
