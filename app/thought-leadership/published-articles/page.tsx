'use client';
import PageTemplate from '@/app/components/pagetemplate';
import { useState } from 'react';

const recentArticles = [
  {
    title: "Admission Enquiry to Everyday Classroom Data: Impact of New Data Protection Law On Education Sector",
    desc: "The digital journey of every student begins the moment they submit an admission enquiry. Under India's new Digital Personal Data Protection (DPDP) framework, every touchpoint from recruitment to daily classroom activity now demands a rigorous standard of compliance and transparency. In their article, our Partner (Head – Media, Education & Gaming) Aarushi Jain, Partner (Head – Digital Disruption) Huzefa Tavawalla and Associate Tannvi R discuss the structural shifts required for schools and universities to stay compliant.",
    source: "NDTV profit",
    date: "26th February 2026"
  },
  {
    title: "FDI Ambiguity in India's evolving space data regime",
    desc: "India's space sector is at a pivotal juncture. While the liberalised Foreign Direct Investment (FDI) policy aims to catapult the private space economy, the intersection with evolving data sovereignty and localization mandates presents a complex regulatory landscape for global investors. In their article published by our Partner (Head – Digital Disruption) Huzefa Tavawalla and Associate Jvalita Krishan analyze the nuances of India's space-data regime.",
    source: "Moneycontrol",
    date: "25th February 2026"
  },
  {
    title: "Stamp Duty on Parent-Subsidiary Arrangements: Implications in Delhi and Haryana",
    desc: "In the evolving landscape of corporate restructuring, selecting the right jurisdiction for a merger can result in cost differentials running into crores. In their article, our Partner Shika Tandon, Principal Associate Zaid Drabu and Associate Shubham Mittal discuss the critical stamp duty implications for parent-subsidiary mergers in Delhi and Haryana.",
    source: "SCC Online",
    date: "25th February 2026"
  },
  {
    title: "An Introduction to Private Wealth Law",
    desc: "Read the India chapter of 'An Introduction to Private Wealth Law' authored by our Partner (Co-Head – Private Client) Radhika Gaggar, Partner Shaishavi Kadakia and Principal Associate Pratyush Khanna published by Chambers and Partners. This guide covers India's 2025 wealth trends: strong IPO activity, rising regional wealth, growth of family offices, evolving philanthropy, and key regulatory and tax developments including the UCC, GIFT City, and the new Income-tax Act.",
    source: "Chambers & Partners",
    date: "12th December 2025"
  },
  {
    title: "Can my sister claim assets bequeathed to my late mother in father's will?",
    desc: "Our Partner Shaishavi Kadakia and Senior Associate Sachi Shah in a Q&A published by Mint discuss how a sibling can claim lapsed assets under a will as a residuary legatee.",
    source: "Live Mint",
    date: "10th December 2025"
  },
  {
    title: "As regulatory changes step up lending competition in India, private credit could prove its mettle and thrive",
    desc: "Our Senior Partner L. Viswanathan and Partner Hariharan Kumar in their article published in Mint discuss how private credit in India continues to grow strongly and emerge as a major financing option, despite new RBI policies intensifying lending competition.",
    source: "Live Mint",
    date: "10th December 2025"
  }
];

const yearArticles = [
  {
    title: "The Future of Digital Banking in India: A Regulatory Perspective",
    desc: "As the financial landscape shifts towards a more digital-first approach, the RBI has introduced several new measures to ensure security and consumer protection. This article explores the implications for neo-banks and traditional institutions alike.",
    source: "Financial Express",
    date: "15th November 2025"
  },
  {
    title: "Navigating Cross-Border Mergers: Key Legal Considerations",
    desc: "Cross-border M&A activity has seen a significant uptick. Our experts break down the complex tax and regulatory hurdles that companies must navigate when expanding their global footprint through acquisitions.",
    source: "Economic Times",
    date: "3rd October 2025"
  },
  {
    title: "ESG Reporting: Moving from Voluntary to Mandatory",
    desc: "With the SEBI's new BRSR Core framework, ESG reporting is no longer just a trend. We discuss how companies can prepare for the new disclosure requirements and the impact on investor relations.",
    source: "Business Standard",
    date: "20th September 2025"
  }
];

const yearOptions = ['2025', '2024', '2023', '2022'];

export default function PublishedArticlesPage() {
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');

  const filteredRecent = recentArticles.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageTemplate
      title="Published Articles"
      subtitle="Stay informed about URE Legal's view"
      category="Thought Leadership"
      showHero={false}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="space-y-12 pb-20">

        {/* Intro */}
        <p className="text-xl font-semibold text-[#C15F3C]">
          Read published articles featuring opinions and insights from our expert lawyers.
        </p>

        {/* Recent Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-normal text-[#1a1a1a]">Recent</h2>
          
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 w-full max-w-sm">
            <input
              type="text"
              placeholder="Search published articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm text-gray-700 focus:outline-none bg-white placeholder-gray-400"
            />
            <div className="px-3 border-l border-gray-300 text-gray-400 py-2.5">
              🔍
            </div>
          </div>

          {/* Recent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecent.map((article, idx) => (
              <ArticleCard key={idx} article={article} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center pt-8">
            <button className="bg-[#C15F3C] text-white px-14 py-3 font-semibold hover:bg-[#a0502f] transition-colors">
              Load More
            </button>
          </div>
        </div>

        {/* Year Filter Section */}
        <div className="space-y-8 pt-4 border-t border-[#B1ADA1]/20">
          <div className="max-w-[160px]">
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="w-full border border-gray-300 px-6 py-3 text-base text-gray-700 bg-white focus:outline-none focus:border-[#C15F3C] cursor-pointer"
            >
              {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          {/* Grid for selected year */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yearArticles.map((article, idx) => (
              <ArticleCard key={idx} article={article} />
            ))}
          </div>

          {/* Load More for year section */}
          <div className="text-center pt-4">
            <button className="bg-[#C15F3C] text-white px-14 py-3 font-semibold hover:bg-[#a0502f] transition-colors">
              Load More
            </button>
          </div>
        </div>

      </div>
    </PageTemplate>
  );
}

function ArticleCard({ article }: { article: any }) {
  return (
    <div className="flex flex-col group cursor-pointer border border-[#B1ADA1]/20 hover:shadow-md transition-shadow">
      {/* Image Placeholder */}
      <div className="w-full h-[220px] bg-[#F4F3EE] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C15F3C]/10 to-[#1a1a1a]/20"></div>
        <div className="relative z-10 text-center px-6 py-4">
          <span className="text-[#C15F3C]/50 text-4xl block mb-2">📄</span>
          <span className="text-[#1a1a1a]/30 text-[10px] font-bold uppercase tracking-widest">
            Article Image
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-3">
        <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {article.desc}
        </p>
        <div>
          <span className="text-[#C15F3C] text-sm font-semibold hover:underline">
            Read More
          </span>
          <p className="text-gray-400 text-xs mt-1">
            {article.source} {article.date}
          </p>
        </div>
      </div>
    </div>
  );
}
