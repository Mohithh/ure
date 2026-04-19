import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Employment & Labour Law Firm | URE Legal",
  description: "URE Legal's Employment practice offers expert legal solutions for labour codes, workplace policies, employee benefits, and industrial disputes in India.",
  keywords: ["employment law india", "labour codes 2024", "workplace compliance", "industrial relations", "URE Legal", "employee benefits law"],
  openGraph: {
    title: "Employment & Labour Law Practice | URE Legal",
    description: "Expert advisory on Indian labour laws and modern workplace dynamics.",
    type: "website",
  },
};

export default function EmploymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
