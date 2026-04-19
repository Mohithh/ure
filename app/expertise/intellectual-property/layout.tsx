import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Intellectual Property Law Firm | Patents, Trademarks, Copyrights | URE Legal",
  description: "URE Legal's Intellectual Property practice offers comprehensive services for IP prosecution, litigation, portfolio management, and commercialization in India.",
  keywords: ["IP law india", "patent prosecution", "trademark registration", "copyright litigation", "URE Legal", "intellectual property advisory"],
  openGraph: {
    title: "Intellectual Property Practice | URE Legal",
    description: "Expert protection and commercialization of your innovations and creative assets.",
    type: "website",
  },
};

export default function IntellectualPropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
