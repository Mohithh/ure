import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Banking & Finance Law Firm India | URE Legal",
  description: "URE Legal's Banking and Finance practice advises a diverse client base on acquisition finance, structured finance, debt issuances, and project finance in India.",
  keywords: ["banking and finance india", "acquisition finance law", "structured finance india", "debt issuance law", "URE Legal", "financial services law"],
  openGraph: {
    title: "Banking & Finance Practice | URE Legal",
    description: "Expert advisory for high-value, complex domestic and cross-border financing.",
    type: "website",
  },
};

export default function BankingFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
