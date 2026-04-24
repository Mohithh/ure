// app/sectors/page.tsx
import Link from 'next/link';
import { 
  Building2, 
  Cpu, 
  Stethoscope, 
  Factory, 
  ShoppingBag, 
  GraduationCap,
  Truck,
  Film,
  Landmark,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Globe,
  TrendingUp,
  Shield
} from 'lucide-react';

export default function SectorsPage() {
  const sectors = [
    {
      icon: <Landmark className="w-10 h-10" />,
      title: "Financial Services",
      description: "Expert counsel for banks, NBFCs, insurance companies, asset management firms, and fintech enterprises navigating complex regulatory frameworks.",
      subSectors: ["Banking & NBFCs", "Insurance", "Asset Management", "Fintech", "Stock Broking"],
      color: "from-amber-500/10 to-amber-500/5"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Technology & Telecom",
      description: "Strategic advisory for tech companies, telecom operators, and digital platforms on regulatory compliance, data protection, and emerging technologies.",
      subSectors: ["SaaS & Software", "Telecom Infrastructure", "Data Privacy", "AI & ML", "Cloud Computing"],
      color: "from-blue-500/10 to-blue-500/5"
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: "Healthcare & Pharma",
      description: "Comprehensive legal support for hospitals, pharmaceutical companies, medical device manufacturers, and healthcare startups.",
      subSectors: ["Hospitals & Clinics", "Pharmaceuticals", "Medical Devices", "Telemedicine", "Clinical Research"],
      color: "from-green-500/10 to-green-500/5"
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Manufacturing & Industrials",
      description: "End-to-end legal solutions for manufacturing enterprises covering contracts, compliance, labor laws, and environmental regulations.",
      subSectors: ["Heavy Engineering", "Automotive", "Chemicals", "Steel & Metals", "Textiles"],
      color: "from-slate-500/10 to-slate-500/5"
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Retail & Consumer Goods",
      description: "Strategic guidance for retailers, e-commerce platforms, FMCG companies, and consumer brands on distribution, licensing, and consumer protection.",
      subSectors: ["E-commerce", "FMCG", "Luxury Goods", "Franchising", "Retail Chains"],
      color: "from-rose-500/10 to-rose-500/5"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Education & EdTech",
      description: "Expert advisory for educational institutions, EdTech platforms, and training providers on regulatory compliance and operational matters.",
      subSectors: ["Universities & Colleges", "EdTech Platforms", "Vocational Training", "Online Learning", "International Education"],
      color: "from-purple-500/10 to-purple-500/5"
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Infrastructure & Logistics",
      description: "Comprehensive legal support for infrastructure developers, logistics providers, and transportation companies on projects and operations.",
      subSectors: ["Roads & Highways", "Ports & Shipping", "Airports", "Logistics & Supply Chain", "Urban Infrastructure"],
      color: "from-orange-500/10 to-orange-500/5"
    },
    {
      icon: <Film className="w-10 h-10" />,
      title: "Media & Entertainment",
      description: "Strategic counsel for media houses, production companies, OTT platforms, and entertainment enterprises on content and intellectual property.",
      subSectors: ["Broadcasting", "OTT Platforms", "Film Production", "Digital Media", "Gaming & Esports"],
      color: "from-red-500/10 to-red-500/5"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Real Estate & Hospitality",
      description: "Expert guidance on real estate development, property transactions, and hospitality projects including hotels and resorts.",
      subSectors: ["Real Estate Development", "Property Management", "Hotels & Resorts", "REITs", "Commercial Real Estate"],
      color: "from-emerald-500/10 to-emerald-500/5"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Private Equity & Venture Capital",
      description: "Specialized advisory for PE/VC funds on investments, exits, fund formation, and portfolio management across sectors.",
      subSectors: ["Fund Formation", "Investment Advisory", "Exits & Liquidity", "Portfolio Management", "Co-investments"],
      color: "from-indigo-500/10 to-indigo-500/5"
    }
  ];

  const featuredDeals = [
    "Advised a leading PE fund on $500M acquisition in fintech space",
    "Represented major telecom player in spectrum acquisition",
    "Counseled healthcare chain on $200M Series C funding",
    "Advised e-commerce platform on cross-border expansion strategy"
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Clean white background */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-16 bg-[#C15F3C] rounded-full mt-2" />
            <div>
              <p className="text-[#C15F3C] font-semibold text-sm uppercase tracking-wider mb-2">
                Industry Focus
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Sectors We Serve
              </h1>
            </div>
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed pl-5">
            Deep industry expertise combined with legal excellence. We understand 
            the unique challenges and opportunities across diverse sectors, delivering 
            strategic solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center text-[#C15F3C] mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {sector.subSectors.map((sub, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
                <Link 
                  href="/contactus"
                  className="inline-flex items-center gap-2 text-[#C15F3C] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Recognition
            </h2>
            <div className="w-16 h-1 bg-[#C15F3C] mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consistently ranked as a leading firm across key sectors by premier legal directories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { rank: "Tier 1", category: "Banking & Finance", publication: "Legal 500" },
              { rank: "Tier 1", category: "Corporate & M&A", publication: "Chambers Asia" },
              { rank: "Tier 2", category: "Dispute Resolution", publication: "Legal 500" },
              { rank: "Leading Firm", category: "Technology & Telecom", publication: "IFLR 1000" }
            ].map((recognition, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100">
                <p className="text-[#C15F3C] font-bold text-2xl mb-2">{recognition.rank}</p>
                <p className="text-gray-800 font-semibold mb-1">{recognition.category}</p>
                <p className="text-gray-500 text-sm">{recognition.publication}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 h-12 bg-[#C15F3C] rounded-full mt-1" />
                <div>
                  <p className="text-[#C15F3C] font-semibold text-sm uppercase tracking-wider">
                    Our Expertise
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Featured Matters
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 pl-5">
                Our sector-focused approach has enabled us to advise on some of the most 
                complex and high-profile transactions across industries.
              </p>
              <div className="space-y-4 pl-5">
                {featuredDeals.map((deal, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C15F3C] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{deal}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#C15F3C]/5 to-[#C15F3C]/10 rounded-2xl p-8 border border-[#C15F3C]/20">
              <Shield className="w-12 h-12 text-[#C15F3C] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cross-Sector Synergy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our integrated approach leverages insights across sectors to deliver 
                innovative solutions. We combine deep industry knowledge with 
                multidisciplinary legal expertise.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Integrated Teams", "Industry Insights", "Global Reach", "Innovation Hub"].map((item, idx) => (
                  <span key={idx} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Industry Experts?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our sector specialists are ready to provide strategic legal counsel 
            tailored to your industry's unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contactus"
              className="px-10 py-3.5 bg-[#C15F3C] text-white border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md inline-block"
            >
              Contact Our Experts
            </Link>
            <Link 
              href="/people"
              className="px-10 py-3.5 bg-transparent text-[#C15F3C] border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 hover:bg-[#C15F3C] hover:text-white transition-all duration-300 shadow-md inline-block"
            >
              Meet Our Lawyers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}