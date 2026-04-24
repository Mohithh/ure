'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const pressReleaseData = [
  {
    id: 1,
    title: "Cyril Amarchand Mangaldas welcomes Rohan Singh as a Partner in its Corporate Practice",
    date: '22nd January 2026',
    type: 'Press Release',
    content: 'We are delighted to welcome Rohan Singh who has re-joined us as a Partner in our Corporate Practice. He will be based in our Mumbai office. Welcome aboard Rohan!'
  },
  {
    id: 2,
    title: "Strategic Partnership Announcement: Major Market Expansion",
    date: '18th January 2026',
    type: 'Press Release',
    content: 'URE Legal announces a strategic partnership to expand its presence across new markets with enhanced service offerings and global capabilities.'
  },
  {
    id: 3,
    title: "Recognition: Top Firm in Annual Legal Rankings",
    date: '15th January 2026',
    type: 'Press Release',
    content: 'URE Legal has been recognized as a leading law firm in the latest industry rankings for innovation and excellence in legal practice.'
  },
  {
    id: 4,
    title: "New Practice Area Launch: Digital Transformation Services",
    date: '10th January 2026',
    type: 'Press Release',
    content: 'URE Legal launches a new dedicated practice area focusing on digital transformation and legal technology solutions for enterprises.'
  },
  {
    id: 5,
    title: "Sustainability Initiative: Green Legal Practices",
    date: '5th January 2026',
    type: 'Press Release',
    content: 'The firm announces its commitment to sustainability through new green legal practices and environmental consulting services.'
  },
  {
    id: 6,
    title: "Client Satisfaction Report: Record Scores Achieved",
    date: '28th December 2025',
    type: 'Press Release',
    content: 'Annual client satisfaction survey shows record-high scores with 98% satisfaction rating across all practice areas.'
  }
];

export default function PressReleasePage() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [visibleCount, setVisibleCount] = useState(6);

  const years = ['2026', '2025', '2024', '2023'];

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
            Press Release
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Latest news and announcements from URE Legal
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Year Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
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
              Showing <span className="font-semibold text-[#2d2926]">{pressReleaseData.length}</span> press releases
            </div>
          </div>
          <hr className="border-[#d8d3d3] mt-4" />
        </div>

        {/* Press Release Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pressReleaseData.slice(0, visibleCount).map((release) => (
            <div 
              key={release.id} 
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
                    {release.type}
                  </span>
                  <span className="text-[10px] text-[#B1ADA1]">•</span>
                  <span className="text-[10px] text-[#5a5651]">{release.date}</span>
                </div>
                
                <h3 className="text-base font-semibold text-[#2d2926] leading-relaxed mb-3 group-hover:text-[#C15F3C] transition-colors line-clamp-2">
                  {release.title}
                </h3>
                
                <p className="text-sm text-[#5a5651] leading-relaxed line-clamp-3">
                  {release.content}
                </p>
                
                <div className="mt-4 pt-4 border-t border-[#f0e6e0]">
                  <Link 
                    href={`/press-release/${release.id}`} 
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
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < pressReleaseData.length && (
          <div className="flex justify-center mb-16">
            <button 
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="bg-[#C15F3C] text-white px-8 py-3 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md"
            >
              Load More
            </button>
          </div>
        )}

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