// app/stand-out-deals/page.tsx
import Link from 'next/link';
import React from 'react';
import { 
  Award, 
  TrendingUp, 
  Building2, 
  Globe, 
  Shield, 
  Rocket,
  ArrowRight,
  Briefcase,
  Star,
  Users,
  DollarSign,
  MapPin
} from 'lucide-react';

// Define the type for a deal object from the API
interface ApiDeal {
  Transaction: string;
  Category: string;
  Value: string;
  Year: string;
  Sector: string;
  Region: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// ✅ FIX: Replaced JSX.Element with React.ReactElement (JSX.Element is deprecated)
function getCategoryDetails(category: string): {
  displayName: string;
  icon: React.ReactElement;
  tags: string[];
} {
  const categoryMap: {
    [key: string]: { displayName: string; icon: React.ReactElement; tags: string[] };
  } = {
    'M&A': {
      displayName: 'Mergers & Acquisitions',
      icon: <Briefcase className="w-8 h-8" />,
      tags: ['M&A', 'Cross-Border']
    },
    'Private Equity': {
      displayName: 'Private Equity',
      icon: <TrendingUp className="w-8 h-8" />,
      tags: ['Private Equity', 'Investment']
    },
    'Capital Markets': {
      displayName: 'Capital Markets',
      icon: <Rocket className="w-8 h-8" />,
      tags: ['Capital Markets', 'IPO']
    },
    'Project Finance': {
      displayName: 'Project Finance',
      icon: <Building2 className="w-8 h-8" />,
      tags: ['Project Finance', 'Infrastructure']
    },
    'Restructuring': {
      displayName: 'Restructuring',
      icon: <Shield className="w-8 h-8" />,
      tags: ['Restructuring', 'Debt']
    }
  };

  return categoryMap[category] || {
    displayName: category,
    icon: <Globe className="w-8 h-8" />,
    tags: [category]
  };
}

// Helper function to get sector-specific tags
function getSectorTags(sector: string): string[] {
  const sectorTags: { [key: string]: string[] } = {
    'E-commerce': ['E-commerce', 'Retail Tech'],
    'HealthTech': ['HealthTech', 'Digital Health'],
    'Infrastructure': ['Infrastructure', 'Development'],
    'Pharmaceuticals': ['Pharma', 'Healthcare'],
    'Banking': ['Banking', 'Financial Services'],
    'Renewable Energy': ['Renewable Energy', 'Clean Tech']
  };
  return sectorTags[sector] || [sector];
}

// Helper function to get a description for a deal
function getDealDescription(deal: ApiDeal): string {
  const descriptions: { [key: string]: string } = {
    'M&A': `Advised on strategic ${deal.Sector.toLowerCase()} acquisition with complex regulatory approvals.`,
    'Private Equity': `Represented leading PE fund in landmark ${deal.Sector.toLowerCase()} investment round.`,
    'Capital Markets': `Successfully managed ${deal.Sector.toLowerCase()} capital raising with strong investor demand.`,
    'Project Finance': `Structured and negotiated financing for ${deal.Sector.toLowerCase()} infrastructure project.`,
    'Restructuring': `Led comprehensive debt restructuring for major ${deal.Sector.toLowerCase()} company.`
  };
  return descriptions[deal.Category] || `Advised on this significant ${deal.Sector.toLowerCase()} transaction.`;
}

// This is a Server Component, so we can fetch data directly
async function getDealsData(): Promise<ApiDeal[]> {
  try {
    const res = await fetch('https://cms.urelegal.in/api/content/items/expertisestandoutdeals', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch deals: ${res.status}`);
    }

    const data = await res.json();
    console.log('Fetched deals:', data);
    return data;
  } catch (error) {
    console.error('Error fetching deals data:', error);
    return [];
  }
}

export default async function StandOutDealsPage() {
  const apiDeals = await getDealsData();

  const featuredDeals = apiDeals.slice(0, 3).map((deal: ApiDeal) => {
    const categoryDetails = getCategoryDetails(deal.Category);
    const sectorTags = getSectorTags(deal.Sector);
    const description = getDealDescription(deal);

    return {
      category: categoryDetails.displayName,
      title: deal.Transaction,
      description: description,
      icon: categoryDetails.icon,
      tags: [...categoryDetails.tags, ...sectorTags.slice(0, 1)],
      year: deal.Year,
      region: deal.Region,
      value: deal.Value
    };
  });

  const allDeals = apiDeals.map((deal: ApiDeal) => ({
    title: deal.Transaction,
    category: deal.Category,
    value: deal.Value,
    year: deal.Year,
    sector: deal.Sector,
    region: deal.Region
  }));

  const dealHighlights = [
    { number: "50+", label: "Cross-Border Transactions", icon: <Globe className="w-5 h-5" /> },
    { number: "$15B+", label: "Total Deal Value", icon: <DollarSign className="w-5 h-5" /> },
    { number: "25+", label: "Industry Sectors", icon: <Briefcase className="w-5 h-5" /> },
    { number: "15+", label: "Global Jurisdictions", icon: <MapPin className="w-5 h-5" /> }
  ];

  const awards = [
    "Deal of the Year - M&A Award 2024",
    "Best Cross-Border Transaction - Asia Legal Awards 2023",
    "Infrastructure Deal of the Year - IFLR 2024",
    "Private Equity Deal of the Year - India Legal Awards 2023"
  ];

  const serviceItems = ["End-to-End Support", "Due Diligence", "Regulatory Approvals", "Post-Closing Integration"];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-16 bg-[#C15F3C] rounded-full mt-2" />
            <div>
              <p className="text-[#C15F3C] font-semibold text-sm uppercase tracking-wider mb-2">
                Our Success Stories
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Stand Out Deals
              </h1>
            </div>
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed pl-5">
            Landmark transactions and precedent-setting matters that define our legacy 
            of excellence. We've advised on some of the most complex and high-value 
            deals across industries and geographies.
          </p>
        </div>
      </section>

      {/* Deal Highlights Stats */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dealHighlights.map((item, idx) => (
              <div key={idx} className="text-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-[#C15F3C] flex justify-center mb-3">
                  {item.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{item.number}</p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deals Grid - DYNAMIC from API */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Transactions
            </h2>
            <div className="w-16 h-1 bg-[#C15F3C] mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing our most significant and complex deals across practice areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDeals.map((deal, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C15F3C]/10 flex items-center justify-center text-[#C15F3C] group-hover:scale-110 transition-transform duration-300">
                    {deal.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#C15F3C] bg-[#C15F3C]/10 px-2 py-1 rounded">
                      {deal.value}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-[#C15F3C] font-semibold uppercase tracking-wider">
                    {deal.category}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-500">{deal.year}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {deal.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {deal.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {deal.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {deal.region}
                  </span>
                  <Link 
                    href="/contactus"
                    className="inline-flex items-center gap-1 text-[#C15F3C] font-semibold text-sm hover:gap-2 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Deals Table - DYNAMIC from API */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-1 h-12 bg-[#C15F3C] rounded-full mt-1" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Notable Deal Highlights
              </h2>
              <p className="text-gray-600 mt-2">
                A selection of our recent landmark transactions and matters
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Transaction</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Category</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Value</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Year</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Sector</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Region</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {allDeals.map((deal, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium">{deal.title}</td>
                      <td className="px-6 py-4">
                        <span className="text-xs bg-[#C15F3C]/10 text-[#C15F3C] px-2 py-1 rounded-full">
                          {deal.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{deal.value}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{deal.year}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{deal.sector}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{deal.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 h-12 bg-[#C15F3C] rounded-full mt-1" />
                <div>
                  <p className="text-[#C15F3C] font-semibold text-sm uppercase tracking-wider">
                    Industry Recognition
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Award-Winning Deal Work
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 pl-5">
                Our deal expertise has been consistently recognized by premier 
                industry publications and award bodies.
              </p>
              <div className="space-y-3 pl-5">
                {awards.map((award, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[#C15F3C] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{award}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C15F3C]/5 to-[#C15F3C]/10 rounded-2xl p-8 border border-[#C15F3C]/20">
              <Users className="w-12 h-12 text-[#C15F3C] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Deal Advisory Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our multidisciplinary deal teams combine deep sector knowledge, 
                regulatory expertise, and execution capabilities to deliver 
                exceptional outcomes for our clients.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {serviceItems.map((item, idx) => (
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
          <Award className="w-12 h-12 text-[#C15F3C] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Make Your Next Big Deal?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our experienced deal advisors are ready to help you navigate complex 
            transactions and achieve your strategic objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contactus"
              className="px-10 py-3.5 bg-[#C15F3C] text-white border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md inline-block"
            >
              Discuss Your Deal
            </Link>
            <Link 
              href="/people"
              className="px-10 py-3.5 bg-transparent text-[#C15F3C] border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 hover:bg-[#C15F3C] hover:text-white transition-all duration-300 shadow-md inline-block"
            >
              Meet Our Deal Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}