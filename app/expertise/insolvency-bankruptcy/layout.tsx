import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Insolvency & Bankruptcy Law Firm India | URE Legal",
  description: "URE Legal's Insolvency practice provides expert representation in IBC proceedings, debt restructuring, and stressed asset resolution before the NCLT and NCLAT in India.",
  keywords: ["insolvency law india", "IBC proceedings india", "debt restructuring law", "stressed asset resolution", "URE Legal", "NCLT representation"],
  openGraph: {
    title: "Insolvency & Bankruptcy Practice | URE Legal",
    description: "Expert advisory for high-stakes corporate insolvency and financial restructuring.",
    type: "website",
  },
};

export default function InsolvencyBankruptcyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
