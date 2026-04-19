import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/siteheader";
import Footer from "./components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "URE Legal | Premier Advocates in Corporate, Finance & Dispute Resolution",
  description: "URE Legal is a leading law firm specializing in corporate law, finance, dispute resolution, and competition/antitrust matters. Providing strategic legal solutions for domestic and international clients.",
  keywords: ["law firm", "legal advocates", "corporate law", "finance law", "dispute resolution", "competition law", "antitrust", "URE Legal"],
  openGraph: {
    title: "URE Legal | Premier Advocates",
    description: "Leading law firm providing strategic legal solutions.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SiteHeader />
        <main className="pt-[92px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
