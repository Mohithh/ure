import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Investment Funds Law Firm India | URE Legal",
  description: "URE Legal's Investment Funds practice provides expert legal, tax, and regulatory advice on fund formation, asset management, and secondary transactions in India.",
  keywords: ["investment funds india", "fund formation law", "alternative investment funds", "AIF regulatory india", "URE Legal", "SEBI compliance funds"],
  openGraph: {
    title: "Investment Funds Practice | URE Legal",
    description: "End-to-end legal and tax structuring for global and domestic asset managers.",
    type: "website",
  },
};

export default function InvestmentFundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
