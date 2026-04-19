import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "M&A and Joint Venture Law Firm | URE Legal",
  description: "URE Legal's M&A practice is renowned for its innovative approach to complex domestic and cross-border transactions, joint ventures, and strategic partnerships in India.",
  keywords: ["mergers and acquisitions india", "joint ventures law", "cross-border M&A", "transactional advisory", "URE Legal", "corporate restructuring"],
  openGraph: {
    title: "M&A / Joint Venture Practice | URE Legal",
    description: "Leading advisory for complex deal-making and strategic corporate growth.",
    type: "website",
  },
};

export default function MergersAcquisitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
