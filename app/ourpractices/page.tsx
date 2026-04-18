// app/ourpractices/page.tsx
import Link from 'next/link';
import { 
  Briefcase, 
  Scale, 
  Building2, 
  Landmark, 
  Shield, 
  Users, 
  Gavel, 
  TrendingUp,
  Globe,
  Handshake,
  FileCheck,
  BarChart3
} from 'lucide-react';

export default function OurPracticesPage() {
  const practiceAreas = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate & M&A",
      description: "Comprehensive advisory on mergers, acquisitions, joint ventures, and corporate restructuring across all industry sectors.",
      features: ["Cross-border M&A", "Private equity", "Joint ventures", "Corporate governance"]
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Dispute Resolution",
      description: "Strategic litigation and arbitration services covering commercial disputes, regulatory matters, and white-collar crime.",
      features: ["Commercial litigation", "International arbitration", "Regulatory disputes", "Mediation services"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Real Estate & Infrastructure",
      description: "End-to-end legal support for real estate transactions, infrastructure projects, and construction contracts.",
      features: ["Project development", "Land acquisition", "Construction contracts", "REITs"]
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Banking & Finance",
      description: "Expert counsel on banking regulations, project finance, structured finance, and debt capital markets.",
      features: ["Project finance", "Asset finance", "Regulatory compliance", "Debt restructuring"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Capital Markets",
      description: "Leading practice advising on IPOs, rights issues, debt offerings, and ongoing compliance for listed entities.",
      features: ["IPOs & FPOs", "Debt offerings", "QIPs & rights issues", "SEBI compliance"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employment & Labor",
      description: "Strategic advice on employment contracts, compliance with labor codes, and workplace investigations.",
      features: ["Labor law compliance", "Employment contracts", "POSH compliance", "Workplace policies"]
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: "Intellectual Property",
      description: "Protection, enforcement, and commercialization of IP rights including patents, trademarks, and copyrights.",
      features: ["IP registration", "IP enforcement", "Licensing agreements", "Anti-counterfeiting"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Private Wealth & Family Offices",
      description: "Specialized advisory for high-net-worth individuals on succession planning, trusts, and estate management.",
      features: ["Estate planning", "Trust structures", "Succession planning", "Family governance"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Trade & WTO",
      description: "Expert guidance on cross-border trade regulations, anti-dumping duties, and international trade agreements.",
      features: ["Trade compliance", "Anti-dumping", "Export controls", "Trade remedies"]
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Projects & Energy",
      description: "Comprehensive legal support for energy projects including renewable, conventional power, and natural gas.",
      features: ["Power projects", "Renewable energy", "PPAs", "Regulatory advisory"]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Taxation",
      description: "Strategic tax planning, dispute resolution, and advisory on direct and indirect tax matters.",
      features: ["Direct tax", "Indirect tax (GST)", "International tax", "Tax litigation"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Competition & Antitrust",
      description: "Expert counsel on competition law compliance, merger control filings, and antitrust investigations.",
      features: ["Merger control", "Cartel investigations", "Compliance programs", "Leniency applications"]
    }
  ];

  const sectors = [
    "Financial Services",
    "Technology & Telecom",
    "Healthcare & Pharma",
    "Manufacturing & Industrials",
    "Retail & Consumer Goods",
    "Education & EdTech",
    "Infrastructure & Logistics",
    "Media & Entertainment"
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="bg-white border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
    {/* Breadcrumb */}
    <div className="mb-4">
      <p className="text-sm text-[#C15F3C] uppercase tracking-wider font-semibold">
        Expertise
      </p>
    </div>
    
    {/* Title with left accent bar */}
    <div className="flex items-start gap-4 mb-6">
      <div className="w-1 h-16 bg-[#C15F3C] rounded-full mt-2" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
        Our Practices
      </h1>
    </div>
    
    {/* Description */}
    <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed pl-5">
      Comprehensive legal expertise across diverse practice areas, 
      delivering strategic solutions tailored to your business needs.
    </p>
  </div>
</section>

      {/* Practice Areas Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C15F3C] mb-4">
              Practice Areas
            </h2>
            <div className="w-20 h-1 bg-[#C15F3C]/30 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our multidisciplinary approach ensures seamless delivery of legal services 
              across these interconnected practice areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((practice, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-[#C15F3C] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {practice.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {practice.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {practice.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {practice.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#C15F3C] mb-6">
                Sectors We Serve
              </h2>
              <div className="w-20 h-1 bg-[#C15F3C]/30 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-8">
                Our industry-focused approach combines deep sector knowledge with 
                legal excellence. We understand the unique challenges and opportunities 
                across diverse industries, enabling us to provide truly strategic counsel 
                that drives business success.
              </p>
              <div className="flex flex-wrap gap-3">
                {sectors.map((sector, index) => (
                  <span 
                    key={index}
                    className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:border-[#C15F3C] hover:text-[#C15F3C] transition-colors duration-300 cursor-default"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#C15F3C]/10 to-[#C15F3C]/5 rounded-2xl p-8 border border-[#C15F3C]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {[
                  "Integrated, full-service legal solutions",
                  "Industry-recognized practice leaders",
                  "Cross-border transaction expertise",
                  "Innovative legal technology integration",
                  "Client-centric, results-driven approach"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#C15F3C] mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Using exact button styling from your example */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C15F3C] mb-4">
            Need Expert Legal Counsel?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our team of experienced lawyers is ready to assist you with your legal needs.
            Let's discuss how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contactus"
              className="mt-16 px-10 py-3.5 bg-[#C15F3C] text-white border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md"
            >
              Contact Our Experts
            </Link>
            <Link 
              href="/people"
              className="mt-16 px-10 py-3.5 bg-transparent text-[#C15F3C] border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 hover:bg-[#C15F3C] hover:text-white transition-all duration-300 shadow-md"
            >
              Meet Our Lawyers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}