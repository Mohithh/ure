import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Client & Estate Planning Law Firm | URE Legal",
  description: "URE Legal's Private Client practice provides bespoke legal advice on succession planning, family trusts, estate management, and wealth preservation for high-net-worth individuals.",
  keywords: ["private client law india", "estate planning", "family trusts", "succession law india", "URE Legal", "wealth preservation"],
  openGraph: {
    title: "Private Client Practice | URE Legal",
    description: "Bespoke legal solutions for multi-generational wealth and family legacy.",
    type: "website",
  },
};

export default function PrivateClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
