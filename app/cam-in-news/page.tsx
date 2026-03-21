'use client';

import PageTemplate from '@/app/components/pagetemplate';
import { useState } from 'react';

const newsData = [
  {
    id: 1,
    title: "Can a woman be 'Karta' of a Hindu Undivided Family?",
    excerpt: "The legal framework governing HUF structures is shifting. While traditional views once limited the role of 'Karta' to the eldest male member, legislative changes and landmark judicial precedents have fundamentally redefined the rights of daughters and wives within a HUF.",
    image: "/images/thought-leadership-image.jpg",
    date: "27th February 2026",
    source: "Moneycontrol",
    partner: "Radhika Gaggar"
  },
  {
    id: 2,
    title: "Green financing gets fillip in Gift City",
    excerpt: "The landscape of sustainable finance in India is evolving rapidly, with GIFT City emerging as a pivotal hub for green capital. In an article published in Financial Express, our Partner Sangita John highlights how the region and new initiatives are providing a significant fillip to sustainable investments.",
    image: "/images/thought-leadership-image.jpg",
    date: "26th February 2026",
    source: "Financial Express",
    partner: "Sangita John"
  },
  {
    id: 3,
    title: "Inherited, ancestral property can be attached under PMLA: Delhi HC",
    excerpt: "The intersection of inherited property rights and the Prevention of Money Laundering Act (PMLA) remains a complex legal landscape. In a significant recent judgment, the Delhi High Court has clarified that ancestral or inherited properties are not immune from attachment under the PMLA.",
    image: "/images/thought-leadership-image.jpg",
    date: "25th February 2026",
    source: "Business Standard",
    partner: "Nikhil Varshney"
  },
  {
    id: 4,
    title: "With mounting pendency, infra woes, NCLT struggles as insolvency cases surge beyond capacity",
    excerpt: "Our Partner Madhav V. Kanoria in an article published by The Economic Times shares his views on the Supreme Court's reaffirmation of the commercial wisdom of the Committee of Creditors (CoC) and the limited role of tribunals and courts in reviewing resolution plans.",
    image: "/images/thought-leadership-image.jpg",
    date: "10th December 2025",
    source: "The Economic Times",
    partner: "Madhav V. Kanoria"
  },
  {
    id: 5,
    title: "Amid IPO boom, lawyers with capital markets exposure in demand",
    excerpt: "Law firms are ramping up recruitment of capital markets specialists amid a surge in demand for Initial Public Offerings (IPOs) and other fundraising drives. Our Partner (Head – Capital Markets) Manan Lahoty shares his views on this in an article published by The Economic Times.",
    image: "/images/thought-leadership-image.jpg",
    date: "10th December 2025",
    source: "The Economic Times",
    partner: "Manan Lahoty"
  },
  {
    id: 6,
    title: "Indian legal AI builds momentum at home, eyes global reach",
    excerpt: "With strong domestic capability and evolving user expectations, Indian legal AI has opened a significant new chapter. Its long-term impact will depend on trust, accuracy and the everyday lawyer's comfort with the technology. Our Chief Innovation Officer Komal Gupta shares her views on this.",
    image: "/images/thought-leadership-image.jpg",
    date: "10th December 2025",
    source: "Financial Express",
    partner: "Komal Gupta"
  },
  {
    id: 7,
    title: "Corporate Restructuring in Digital Era",
    excerpt: "The digital transformation is reshaping how corporations approach restructuring strategies. New technologies and frameworks are enabling faster and more efficient corporate transformations across sectors.",
    image: "/images/thought-leadership-image.jpg",
    date: "5th December 2025",
    source: "Business Standard",
    partner: "Leadership Team"
  },
  {
    id: 8,
    title: "Fintech Regulations and Compliance Framework",
    excerpt: "India's regulatory landscape for fintech is rapidly evolving. New guidelines and frameworks are being introduced to ensure consumer protection while fostering innovation in the financial services sector.",
    image: "/images/thought-leadership-image.jpg",
    date: "1st December 2025",
    source: "Financial Express",
    partner: "Expert Team"
  },
  {
    id: 9,
    title: "ESG Disclosures: Mandatory or Voluntary?",
    excerpt: "Environmental, Social and Governance disclosures are becoming increasingly important for corporates. The question remains whether these should be mandatory or left to voluntary adoption by companies.",
    image: "/images/thought-leadership-image.jpg",
    date: "25th November 2025",
    source: "Moneycontrol",
    partner: "Sustainability Practice"
  }
];

export default function CAMInNewsPage() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [visibleRecentCount, setVisibleRecentCount] = useState(3);
  const [visibleFilteredCount, setVisibleFilteredCount] = useState(3);

  const years = ['2026', '2025', '2024', '2023'];

  const filteredNews = newsData.filter(item => {
    const year = selectedYear === '2026' ? '2026' : '2025';
    return item.date.includes(year);
  });

  return (
    <PageTemplate 
      title="CAM in News" 
      subtitle=""
      category="Thought Leadership"
      heroImage="/images/thought-leadership-hero.jpg"
      showHero={true}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="space-y-12 pb-20">
        
        {/* Recent Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#1a1a1a] uppercase">Recent</h2>
            <a href="#" className="text-[#C15F3C] font-bold text-sm uppercase hover:underline">
              Read all →
            </a>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.slice(0, visibleRecentCount).map((news) => (
              <div key={news.id} className="bg-white border border-[#B1ADA1]/30 hover:shadow-lg transition-all group overflow-hidden">
                
                {/* Image */}
                <div className="w-full h-48 bg-[#F4F3EE] overflow-hidden flex items-center justify-center">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C15F3C] to-[#1a1a1a] text-white text-6xl">
                    📰
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-[#B1ADA1]/20 bg-gray-50 flex items-center justify-between">
                  <p className="text-xs text-gray-500">{news.date}</p>
                  <a href="#" className="text-[#C15F3C] font-bold text-sm uppercase hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button for Recent */}
          {visibleRecentCount < newsData.length && (
            <div className="flex justify-center pt-8">
              <button 
                onClick={() => setVisibleRecentCount(visibleRecentCount + 3)}
                className="bg-[#1a1a1a] text-white px-8 py-3 font-bold uppercase text-sm hover:bg-[#C15F3C] transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* Year Filter Section */}
        <section className="space-y-6 py-12 border-t-2 border-[#C15F3C]">
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C] transition-colors w-full md:w-40"
          >
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <div className="w-full h-1 bg-[#C15F3C]"></div>
        </section>

        {/* Archive Section - Cards Below Year */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredNews.slice(0, visibleFilteredCount).map((news) => (
              <div key={news.id} className="bg-white border border-[#B1ADA1]/30 hover:shadow-lg transition-all group overflow-hidden">
                
                {/* Image */}
                <div className="w-full h-48 bg-[#F4F3EE] overflow-hidden flex items-center justify-center">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C15F3C] to-[#1a1a1a] text-white text-6xl">
                    📰
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-[#B1ADA1]/20 bg-gray-50 flex items-center justify-between">
                  <p className="text-xs text-gray-500">{news.date}</p>
                  <a href="#" className="text-[#C15F3C] font-bold text-sm uppercase hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button for Filtered */}
          {visibleFilteredCount < filteredNews.length && (
            <div className="flex justify-center pt-8">
              <button 
                onClick={() => setVisibleFilteredCount(visibleFilteredCount + 3)}
                className="bg-[#1a1a1a] text-white px-8 py-3 font-bold uppercase text-sm hover:bg-[#C15F3C] transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </div>
    </PageTemplate>
  );
}
