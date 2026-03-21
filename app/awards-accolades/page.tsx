'use client';

import PageTemplate from '@/app/components/pagetemplate';
import { useState } from 'react';

const awardsData = [
  {
    presenter: 'Asian Legal Business (ALB)',
    award: "Asian Legal Business India's Top IP Lawyers 2026",
    year: '2026',
    lawyer: 'Swati Sharma',
    details: 'Recognized for excellence in intellectual property practice'
  },
  {
    presenter: 'Resight India',
    award: 'Rise Rated Lawyers Ranking 2026',
    year: '2026',
    lawyer: '35 Lawyers Ranked',
    details: 'Comprehensive recognition across multiple practice areas'
  },
  {
    presenter: 'DebtCircle',
    award: "India's Influential Women in Fixed Income Market 2026",
    year: '2026',
    lawyer: 'Leena Chacko',
    details: 'Leading expertise in financial and capital markets'
  },
  {
    presenter: 'Chambers & Partners',
    award: 'Chambers Global Rankings 2025',
    year: '2025',
    lawyer: 'Multiple Lawyers Ranked',
    details: 'Recognition in multiple practice areas'
  },
  {
    presenter: 'Legal 500 Asia',
    award: 'Recommended Law Firm 2025',
    year: '2025',
    lawyer: 'Corporate and M&A Practice',
    details: 'Excellence in corporate transactions'
  },
  {
    presenter: 'Mergermarket',
    award: 'Top Counsel Recognition 2025',
    year: '2025',
    lawyer: 'Deal Advisory Team',
    details: 'Exceptional M&A transaction execution'
  },
  {
    presenter: 'IFLR 1000',
    award: 'IFLR 1000 Financial Law Leaders 2025',
    year: '2025',
    lawyer: 'Finance Practice Group',
    details: 'Leading expertise in financial and banking law'
  },
  {
    presenter: 'Benchmark Litigation',
    award: 'Benchmark Litigation Leaders 2025',
    year: '2025',
    lawyer: 'Litigation Team',
    details: 'Excellence in commercial and civil litigation'
  },
  {
    presenter: 'AsiaLaw',
    award: 'AsiaLaw Profiles 2024',
    year: '2024',
    lawyer: 'Senior Partnership',
    details: 'Recognition across key practice areas'
  },
  {
    presenter: 'Bloomberg Law',
    award: 'Bloomberg Law Firm Leaders 2024',
    year: '2024',
    lawyer: 'Managing Partners',
    details: 'Distinguished legal expertise and innovation'
  },
  {
    presenter: 'FT Consulting',
    award: 'FT Consulting Global Leaders 2024',
    year: '2024',
    lawyer: 'Strategic Advisory Team',
    details: 'Excellence in consulting and corporate advice'
  },
  {
    presenter: 'India Business Law Journal',
    award: 'Top Law Firm Awards 2024',
    year: '2024',
    lawyer: 'Multiple Practice Areas',
    details: 'Recognition for innovation and service excellence'
  }
];

const awardLogos = [
  { name: 'Chambers & Partners', image: '/images/about-us-image.jpg' },
  { name: 'Legal 500', image: '/images/about-us-image.jpg' },
  { name: 'Asian Legal Business', image: '/images/about-us-image.jpg' },
  { name: 'India Business Law Journal', image: '/images/about-us-image.jpg' },
  { name: 'Mergermarket', image: '/images/about-us-image.jpg' },
  { name: 'IFLR 1000', image: '/images/about-us-image.jpg' },
  { name: 'FT Consulting', image: '/images/about-us-image.jpg' },
  { name: 'Bloomberg', image: '/images/about-us-image.jpg' },
  { name: 'AsiaLaw', image: '/images/about-us-image.jpg' },
  { name: 'Benchmark Litigation', image: '/images/about-us-image.jpg' }
];

export default function AwardsAccoladesPage() {
  const [selectedPresenter, setSelectedPresenter] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedPractice, setSelectedPractice] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const presenters = ['All', 'Asian Legal Business', 'Resight India', 'DebtCircle', 'Chambers & Partners', 'Legal 500 Asia'];
  const years = ['All', '2026', '2025', '2024', '2023'];
  const practices = ['All', 'Corporate', 'IP', 'Litigation', 'Finance', 'M&A'];

  const filteredAwards = awardsData.filter(award => {
    const matchPresenter = selectedPresenter === 'All' || award.presenter === selectedPresenter;
    const matchYear = selectedYear === 'All' || award.year === selectedYear;
    return matchPresenter && matchYear;
  });

  return (
    <PageTemplate 
      title="Awards & Accolades" 
      subtitle="Recognition of excellence across global rankings and industry accolades"
      category="About Us"
      heroImage="/images/about-us-hero.jpg"
      showHero={true}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="space-y-16 pb-20">
        
        {/* Award Organizations Logos Section */}
        <section className="space-y-8">
          <h3 className="text-lg font-bold text-[#1a1a1a] uppercase">Recognized By</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {awardLogos.map((logo, idx) => (
              <div key={idx} className="bg-white border border-[#B1ADA1]/30 hover:shadow-lg transition-all group overflow-hidden">
                <div className="w-full h-32 bg-[#F4F3EE] overflow-hidden flex items-center justify-center">
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C15F3C] to-[#1a1a1a] text-white">
                    <div className="text-center">🏆</div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs font-bold text-gray-700 group-hover:text-[#C15F3C] transition-colors">{logo.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Section */}
        <section className="space-y-6 pt-8 border-t-2 border-[#C15F3C]">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <select 
              value={selectedPresenter}
              onChange={(e) => setSelectedPresenter(e.target.value)}
              className="flex-1 min-w-[200px] border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C] transition-colors"
            >
              {presenters.map(p => <option key={p} value={p}>{p || 'Presenter'}</option>)}
            </select>
            
            <input 
              type="text" 
              placeholder="Search Person Name"
              className="flex-1 min-w-[200px] border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] placeholder-gray-500 font-medium hover:border-[#C15F3C] transition-colors"
            />
            
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="flex-1 min-w-[200px] border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C] transition-colors"
            >
              {years.map(y => <option key={y} value={y}>{y || 'Year'}</option>)}
            </select>

            <button 
              onClick={() => {
                setSelectedPresenter('All');
                setSelectedYear('All');
                setSelectedPractice('All');
              }}
              className="text-[#C15F3C] font-bold text-sm uppercase hover:underline whitespace-nowrap"
            >
              Reset Filters
            </button>
          </div>
          <div className="w-full h-1 bg-[#C15F3C]"></div>
        </section>

        {/* Results Count */}
        <div className="text-sm font-bold text-gray-600 uppercase">
          {filteredAwards.length} Results
        </div>

        {/* Awards Table */}
        <section className="space-y-6">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F4F3EE] border-b-2 border-[#B1ADA1]/30">
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase text-[#1a1a1a]">Presenter</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase text-[#1a1a1a]">Awards/Rankings</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase text-[#1a1a1a]">Year</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase text-[#1a1a1a]">Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredAwards.slice(0, visibleCount).map((award, idx) => (
                  <tr key={idx} className="border-b border-[#B1ADA1]/20 hover:bg-[#F4F3EE]/50 transition-colors group">
                    <td className="px-6 py-6 text-sm text-gray-700 font-medium">{award.presenter}</td>
                    <td className="px-6 py-6">
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors">{award.award}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-2">
                          <span>👤</span>
                          {award.lawyer}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-sm font-bold text-gray-600">{award.year}</td>
                    <td className="px-6 py-6 text-sm text-gray-600">{award.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Load More Button */}
          {visibleCount < filteredAwards.length && (
            <div className="flex justify-center pt-8">
              <button 
                onClick={() => setVisibleCount(visibleCount + 6)}
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
