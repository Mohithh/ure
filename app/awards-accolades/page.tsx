// app/awards-accolades/page.tsx
'use client';

import PageTemplate from '@/app/components/pagetemplate';
import { useState, useEffect } from 'react';

// Define the type for an award from the API
interface ApiAward {
  Presenter: string;
  "Awards/Rankings": string;
  lawyer: string;
  Year: string;
  Details: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Define the type for display
interface Award {
  presenter: string;
  award: string;
  year: string;
  lawyer: string;
  details: string;
}

// Static award logos data (images - not from API)
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
  const [awardsData, setAwardsData] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPresenter, setSelectedPresenter] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchPerson, setSearchPerson] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Fetch awards data from API
  useEffect(() => {
    async function fetchAwards() {
      try {
        const res = await fetch('https://cms.urelegal.in/api/content/items/awardsaccolades', {
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch awards: ${res.status}`);
        }
        
        const data: ApiAward[] = await res.json();
        
        // Transform API data to match the component's format
        const transformedData: Award[] = data.map((item) => ({
          presenter: item.Presenter,
          award: item["Awards/Rankings"],
          year: item.Year,
          lawyer: item.lawyer,
          details: item.Details
        }));
        
        setAwardsData(transformedData);
      } catch (error) {
        console.error('Error fetching awards data:', error);
        setAwardsData([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchAwards();
  }, []);

  // Get unique presenters from API data for filter
  const presenters = ['All', ...new Set(awardsData.map(award => award.presenter))];
  
  // Get unique years from API data for filter
  const years = ['All', ...new Set(awardsData.map(award => award.year))];

  // Filter awards based on selections
  const filteredAwards = awardsData.filter(award => {
    const matchPresenter = selectedPresenter === 'All' || award.presenter === selectedPresenter;
    const matchYear = selectedYear === 'All' || award.year === selectedYear;
    const matchSearch = searchPerson === '' || award.lawyer.toLowerCase().includes(searchPerson.toLowerCase());
    return matchPresenter && matchYear && matchSearch;
  });

  // Reset all filters
  const resetFilters = () => {
    setSelectedPresenter('All');
    setSelectedYear('All');
    setSearchPerson('');
  };

  if (loading) {
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
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading awards data...</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

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
        
        {/* Award Organizations Logos Section - Static content */}
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
                      if (e.currentTarget.nextElementSibling) {
                        e.currentTarget.nextElementSibling.classList.remove('hidden');
                      }
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
              value={searchPerson}
              onChange={(e) => setSearchPerson(e.target.value)}
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
              onClick={resetFilters}
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

        {/* Awards Table - DYNAMIC from API */}
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
                {filteredAwards.length > 0 ? (
                  filteredAwards.slice(0, visibleCount).map((award, idx) => (
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      No awards found matching your filters.
                    </td>
                  </tr>
                )}
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