import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taxation Law Firm India | URE Legal",
  description: "URE Legal's Taxation practice is widely regarded for its commercial acumen and rapport with Indian regulators, providing expert advice on corporate tax, indirect tax, and transfer pricing.",
  keywords: ["taxation law india", "corporate tax advisory", "GST law india", "tax litigation", "URE Legal", "transfer pricing india"],
  openGraph: {
    title: "Taxation Practice | URE Legal",
    description: "Expert tax advisory with deep commercial acumen and regulatory foresight.",
    type: "website",
  },
};

export default function TaxationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
