import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real Estate Law Firm India | URE Legal",
  description: "URE Legal's Real Estate practice is among the largest in India, providing expert legal advice on title diligence, deal structuring, real estate financing, and RERA compliance.",
  keywords: ["real estate law india", "property title diligence", "real estate financing", "RERA compliance india", "URE Legal", "commercial real estate law"],
  openGraph: {
    title: "Real Estate Practice | URE Legal",
    description: "Decades of experience in large-scale property developments and transactions.",
    type: "website",
  },
};

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
