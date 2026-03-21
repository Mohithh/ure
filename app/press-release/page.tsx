'use client';

import PageTemplate from '@/app/components/pagetemplate';
import { useState } from 'react';

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
    <PageTemplate 
      title="Press Release" 
      subtitle=""
      category="Thought Leadership"
      heroImage="/images/thought-leadership-hero.jpg"
      showHero={true}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="space-y-8 pb-20 max-w-2xl">
        
        {/* Year Filter - Top of Content */}
        <section className="space-y-6 border-b-2 border-[#C15F3C] pb-8">
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C] transition-colors w-full md:w-40"
          >
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <div className="w-full h-1 bg-[#C15F3C]"></div>
        </section>
        
        {/* Press Release Cards - Single Column */}
        <section className="space-y-8">
          {pressReleaseData.slice(0, visibleCount).map((release) => (
            <div key={release.id} className="bg-white border overflow-hidden hover:shadow-lg transition-all group">
              
              {/* Card Header with URE Legal Branding */}
              <div className="bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a]/80 text-white px-6 py-4 flex items-center gap-3 border-b-4 border-[#C15F3C]">
                <div className="w-12 h-12 bg-[#C15F3C] rounded-full flex items-center justify-center font-bold text-sm">UR</div>
                <div>
                  <p className="text-xs font-bold uppercase">URE Legal</p>
                  <p className="text-xs text-[#C15F3C]">India's leading law firm</p>
                </div>
              </div>

              {/* Featured Image */}
              <div className="w-full h-48 bg-[#F4F3EE] overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/thought-leadership-image.jpg" 
                  alt={release.title}
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

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors">
                  {release.title}
                </h3>
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  {release.content}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-[#B1ADA1]/20 flex items-center justify-between bg-gray-50">
                <div className="text-xs text-gray-600 font-medium">
                  <span>{release.date}</span>
                  <span className="mx-2">|</span>
                  <span>{release.type}</span>
                </div>
                <a href="#" className="text-[#C15F3C] font-bold text-sm uppercase hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Load More Button */}
        {visibleCount < pressReleaseData.length && (
          <div className="flex justify-center pt-8">
            <button 
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="bg-[#1a1a1a] text-white px-8 py-3 font-bold uppercase text-sm hover:bg-[#C15F3C] transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </PageTemplate>
  );
}
