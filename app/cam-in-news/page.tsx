'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    return item.date.includes(selectedYear);
  });

  // Recent news (latest 3 from 2026)
  const recentNews = newsData.filter(item => item.date.includes('2026')).slice(0, visibleRecentCount);

  return (
    <div className="bg-[#F4F3EE]">
      {/* HERO SECTION - Centered like all other pages */}
      <div className="relative w-full min-h-[400px] bg-gradient-to-br from-[#2d2926] to-[#4a3b35] flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#C15F3C] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#C15F3C] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            CAM in News
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Insights and perspectives from our experts in leading publications
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Recent Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-[#2d2926] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Recent
            </h2>
            <Link href="#" className="text-[#C15F3C] text-sm font-semibold hover:underline transition-all">
              Read all →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news) => (
              <div 
                key={news.id} 
                className="bg-white border border-[#e0dbd5] rounded-sm hover:shadow-md transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C]/10 to-[#B1ADA1]/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#C15F3C]/5 group-hover:bg-[#C15F3C]/10 transition-all" />
                  <svg className="w-16 h-16 text-[#C15F3C]/30 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] text-[#C15F3C] font-semibold uppercase tracking-wider">
                      {news.source}
                    </span>
                    <span className="text-[10px] text-[#B1ADA1]">•</span>
                    <span className="text-[10px] text-[#5a5651]">{news.date}</span>
                  </div>
                  
                  <h3 className="text-base font-semibold text-[#2d2926] leading-relaxed mb-3 group-hover:text-[#C15F3C] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-sm text-[#5a5651] leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-[#f0e6e0]">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-[#B1ADA1]">
                        By <span className="text-[#C15F3C]">{news.partner}</span>
                      </p>
                      <Link 
                        href={`/cam-in-news/${news.id}`} 
                        className="inline-flex items-center gap-2 text-[#C15F3C] text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button for Recent */}
          {visibleRecentCount < newsData.filter(item => item.date.includes('2026')).length && (
            <div className="flex justify-center mt-10">
              <button 
                onClick={() => setVisibleRecentCount(visibleRecentCount + 3)}
                className="bg-[#C15F3C] text-white px-8 py-3 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Archive Section */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          
          {/* Year Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#5a5651]">Filter by year:</span>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 bg-white border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] cursor-pointer"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div className="text-sm text-[#5a5651]">
              Showing <span className="font-semibold text-[#2d2926]">{filteredNews.length}</span> articles
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Archive
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(0, visibleFilteredCount).map((news) => (
              <div 
                key={news.id} 
                className="bg-white border border-[#e0dbd5] rounded-sm hover:shadow-md transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-[#C15F3C]/10 to-[#B1ADA1]/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#C15F3C]/5 group-hover:bg-[#C15F3C]/10 transition-all" />
                  <svg className="w-16 h-16 text-[#C15F3C]/30 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] text-[#C15F3C] font-semibold uppercase tracking-wider">
                      {news.source}
                    </span>
                    <span className="text-[10px] text-[#B1ADA1]">•</span>
                    <span className="text-[10px] text-[#5a5651]">{news.date}</span>
                  </div>
                  
                  <h3 className="text-base font-semibold text-[#2d2926] leading-relaxed mb-3 group-hover:text-[#C15F3C] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-sm text-[#5a5651] leading-relaxed line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-[#f0e6e0]">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-[#B1ADA1]">
                        By <span className="text-[#C15F3C]">{news.partner}</span>
                      </p>
                      <Link 
                        href={`/cam-in-news/${news.id}`} 
                        className="inline-flex items-center gap-2 text-[#C15F3C] text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button for Filtered */}
          {visibleFilteredCount < filteredNews.length && (
            <div className="flex justify-center mt-10">
              <button 
                onClick={() => setVisibleFilteredCount(visibleFilteredCount + 3)}
                className="bg-[#C15F3C] text-white px-8 py-3 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Print/Mail Icons */}
        <div className="flex justify-end gap-3 mb-12">
          <div className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center cursor-pointer hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#5a5651] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center cursor-pointer hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#5a5651] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </div>
        </div>

        {/* Newsletter CTA - White background like other pages */}
        <div className="bg-white border border-[#e0dbd5] rounded-sm p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-[#2d2926] mb-3">
            Join 100,000+ decision makers
          </h3>
          <p className="text-[#5a5651] mb-6 max-w-2xl mx-auto text-sm">
            Subscribe to CAM newsletter and stay up to date with all the significant developments 
            in Indian corporate and commercial law that impact the corporate ecosystem.
          </p>
          <div className="flex max-w-md mx-auto gap-3 flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email ID" 
              className="flex-1 px-4 py-3 bg-[#F4F3EE] border border-[#d8d3d3] text-[#2d2926] outline-none focus:ring-2 focus:ring-[#C15F3C] transition-all rounded-sm"
            />
            <button className="bg-[#C15F3C] text-white px-6 py-3 font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md whitespace-nowrap rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Add line-clamp for text truncation */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}