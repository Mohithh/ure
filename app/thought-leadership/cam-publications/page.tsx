'use client';
import PageTemplate from '@/app/components/pagetemplate';
import { useState } from 'react';

const publications = [
  {
    title: "Digital Handbook on Capital Listing in India",
    desc: "This handbook is a detailed guide on the listing process in India, covering regulatory frameworks, key considerations for investors, and best practices for companies looking to go public.",
    date: "January 22, 2024",
    accent: "#C15F3C"
  },
  {
    title: "FAQs – The Digital Personal Data Protection Framework",
    desc: "Our data protection guidance fundamentally reshapes how organisations collect, use, and safeguard personal data. These FAQs address key interpretative and operational questions to help move from principle to implementation.",
    date: "December 15, 2023",
    accent: "#4a3728"
  },
  {
    title: "A Guide to the New Labour Codes: What You Need to Know",
    desc: "As employers chart their path towards compliance with newly implemented Labour Codes, this primer sets out a summary of key provisions to help understand its architecture, key changes, and impact.",
    date: "December 6, 2023",
    accent: "#8b5e3c"
  },
  {
    title: "A Guide to Regulatory Compliance in Pharmaceuticals",
    desc: "This primer is a guide on regulatory compliance in India's pharmaceutical sector, covering enforcement powers, legal procedures, corporate liability, and defenses, along with product classification frameworks.",
    date: "October 15, 2023",
    accent: "#C15F3C"
  },
  {
    title: "Legal Resilience in a Post-Pandemic World",
    desc: "This e-book focuses on our experiences navigating complex legal challenges post-pandemic, condensed into nine comprehensive chapters exploring a range of practice areas and emerging trends.",
    date: "August 31, 2023",
    accent: "#2d4a6e"
  },
  {
    title: "Arbitration in India – A Practitioner's Primer",
    desc: "A comprehensive guide to arbitration in India, including matters relating to choosing an Indian seat, role of Indian courts, new developments, and key amendments to the Arbitration and Conciliation Act.",
    date: "December 15, 2022",
    accent: "#4a3728"
  }
];

export default function CAMPublicationsPage() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? publications : publications.slice(0, 4);

  return (
    <PageTemplate
      title="URE Legal Publications"
      subtitle="In-depth analysis of key issues"
      category="Thought Leadership"
      showHero={true}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="space-y-10 pb-20">

        {/* Intro text */}
        <p className="text-xl font-medium text-black">
          Explore our latest thinking on key issues that matter the most to businesses.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 pb-4 border-b-2 border-[#C15F3C]">
          <select className="border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white cursor-pointer hover:border-[#C15F3C] transition-colors focus:outline-none focus:border-[#C15F3C]">
            <option>All Practice Areas</option>
            <option>Dispute Resolution</option>
            <option>Corporate &amp; M&amp;A</option>
            <option>Labour &amp; Employment</option>
            <option>Data Privacy</option>
          </select>
          <select className="border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white cursor-pointer hover:border-[#C15F3C] transition-colors focus:outline-none focus:border-[#C15F3C]">
            <option>All Sectors</option>
            <option>Banking &amp; Finance</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Real Estate</option>
          </select>
          <select className="border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white cursor-pointer hover:border-[#C15F3C] transition-colors focus:outline-none focus:border-[#C15F3C]">
            <option>All Years</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <button className="bg-[#C15F3C] text-white px-6 py-2 text-sm font-bold hover:bg-[#a0502f] transition-colors">
            Apply
          </button>
          <button
            className="text-[#C15F3C] text-sm font-medium hover:underline ml-2"
            onClick={() => setShowAll(false)}
          >
            Reset Filters
          </button>
        </div>

        {/* 2-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayed.map((pub, idx) => (
            <div
              key={idx}
              className="flex bg-white border border-[#B1ADA1]/30 hover:shadow-lg transition-shadow group cursor-pointer min-h-[280px]"
            >
              {/* Left: Book Cover Image Placeholder - larger */}
              <div
                className="w-52 flex-shrink-0 relative overflow-hidden"
                style={{ backgroundColor: pub.accent }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 mb-3 flex items-center justify-center">
                    <span className="text-white text-xs font-bold uppercase">URE</span>
                  </div>
                  <span className="text-white text-[9px] font-bold uppercase tracking-wider leading-tight text-center opacity-80">
                    ure legal
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 p-7 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pub.desc}
                  </p>
                  <p className="text-gray-400 text-sm font-semibold pt-1">{pub.date}</p>
                </div>

                {/* Action Icons - Download + Bookmark */}
                <div className="flex items-center gap-3 mt-6">
                  <button className="w-9 h-9 rounded-full border-2 border-[#C15F3C]/50 hover:bg-[#C15F3C] hover:border-[#C15F3C] flex items-center justify-center transition-all">
                    <span className="text-[#C15F3C] hover:text-white text-sm">↓</span>
                  </button>
                  <button className="w-9 h-9 rounded-full border-2 border-[#C15F3C]/50 hover:bg-[#C15F3C] hover:border-[#C15F3C] flex items-center justify-center transition-all text-xs">
                    <span className="text-[#C15F3C]">🔖</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {!showAll && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#C15F3C] text-white px-12 py-3 font-semibold hover:bg-[#a0502f] transition-colors"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </PageTemplate>
  );
}
