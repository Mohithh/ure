import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Public Policy Law Firm India | URE Legal",
  description: "URE Legal's Public Policy practice provides specialized, in-depth, and cross-sectoral advice on regulatory strategy, legislative drafting, and government relations in India.",
  keywords: ["public policy law india", "regulatory strategy", "government relations", "legislative drafting", "URE Legal", "policy mapping"],
  openGraph: {
    title: "Public Policy Practice | URE Legal",
    description: "Expert advisory at the intersection of law, policy, and the economy.",
    type: "website",
  },
};

export default function PublicPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
