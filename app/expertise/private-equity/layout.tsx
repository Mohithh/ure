import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Equity Law Firm India | URE Legal",
  description: "URE Legal's Private Equity team possesses extensive knowledge and expertise in advising top international and domestic multilateral institutions on buyouts, growth capital, and exit strategies in India.",
  keywords: ["private equity law india", "buyouts advisory", "growth capital investment", "PE exit strategies", "URE Legal", "VC legal advisory"],
  openGraph: {
    title: "Private Equity Practice | URE Legal",
    description: "Expert advisory for high-stakes private equity and venture capital investments.",
    type: "website",
  },
};

export default function PrivateEquityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
