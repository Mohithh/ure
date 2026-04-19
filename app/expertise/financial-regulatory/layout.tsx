import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Financial Regulatory Law Firm India | URE Legal",
  description: "URE Legal's Financial Regulatory practice provides expert advisory on RBI, SEBI, and IRDAI compliance, licensing, and regulatory investigations in India.",
  keywords: ["financial regulatory law india", "RBI compliance law", "SEBI regulatory services", "fintech law india", "URE Legal", "financial services compliance"],
  openGraph: {
    title: "Financial Regulatory Practice | URE Legal",
    description: "Navigating the complex landscape of financial services regulation in India.",
    type: "website",
  },
};

export default function FinancialRegulatoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
