import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Infrastructure & Project Finance Law Firm India | URE Legal",
  description: "URE Legal's Infrastructure practice provides expert legal advice on PPP models, concession agreements, EPC contracts, and project financing for energy, roads, and smart cities in India.",
  keywords: ["infrastructure law india", "project finance law", "PPP models india", "EPC contracts law", "URE Legal", "energy project legal"],
  openGraph: {
    title: "Infrastructure & Project Finance Practice | URE Legal",
    description: "Decades of experience in large-scale national and international infrastructure developments.",
    type: "website",
  },
};

export default function InfrastructureProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
