import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Competition & Antitrust Law Firm | URE Legal",
  description: "URE Legal's Competition and Antitrust team provides expert legal solutions for merger control, enforcement litigation, and risk assessment in India.",
  keywords: ["competition law", "antitrust law india", "merger control", "cci litigation", "URE Legal"],
  openGraph: {
    title: "Competition & Antitrust Practice | URE Legal",
    description: "Leading experts in Indian competition and antitrust law.",
    type: "website",
  },
};

export default function CompetitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
