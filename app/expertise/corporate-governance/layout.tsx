import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Corporate Governance Law Firm | URE Legal",
  description: "URE Legal's Corporate Governance practice offers expert legal advice on board effectiveness, compliance, risk management, and integrated advisory services in India.",
  keywords: ["corporate governance india", "board effectiveness", "compliance advisory", "risk management law", "URE Legal", "Cyril Shroff inspired governance"],
  openGraph: {
    title: "Corporate Governance Practice | URE Legal",
    description: "Leading experts in Indian corporate governance and board advisory.",
    type: "website",
  },
};

export default function CorporateGovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
