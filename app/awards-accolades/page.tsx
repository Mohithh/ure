// app/awards-accolades/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

// Award organizations data
const awardOrganizations = [
  { name: 'Chambers & Partners', icon: '⚖️' },
  { name: 'Legal 500', icon: '📜' },
  { name: 'Asian Legal Business', icon: '🌏' },
  { name: 'India Business Law Journal', icon: '🇮🇳' },
  { name: 'IFLR 1000', icon: '💼' },
  { name: 'Benchmark Litigation', icon: '🏛️' },
  { name: 'AsiaLaw', icon: '🎯' },
  { name: 'Mergermarket', icon: '📊' },
];

export default function AwardsAccoladesPage() {
  const [awardsData, setAwardsData] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPresenter, setSelectedPresenter] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchPerson, setSearchPerson] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);

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

  // Get unique values for filters
  const presenters = ['All', ...new Set(awardsData.map(award => award.presenter))];
  const years = ['All', ...new Set(awardsData.map(award => award.year))];

  // Filter awards
  const filteredAwards = awardsData.filter(award => {
    const matchPresenter = selectedPresenter === 'All' || award.presenter === selectedPresenter;
    const matchYear = selectedYear === 'All' || award.year === selectedYear;
    const matchSearch = searchPerson === '' || award.lawyer.toLowerCase().includes(searchPerson.toLowerCase());
    return matchPresenter && matchYear && matchSearch;
  });

  const resetFilters = () => {
    setSelectedPresenter('All');
    setSelectedYear('All');
    setSearchPerson('');
    setVisibleCount(8);
  };

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#5a5651]">Loading awards data...</p>
        </div>
      </div>
    );
  }

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
            Awards & Accolades
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Recognition of excellence across global rankings and industry accolades
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Recognized By Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Recognized By
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {awardOrganizations.map((org, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-6 text-center hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {org.icon}
                </div>
                <p className="text-xs text-[#5a5651] group-hover:text-[#C15F3C] transition-colors font-medium">
                  {org.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <hr className="border-[#d8d3d3] mb-10" />
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 flex-1">
              <select 
                value={selectedPresenter}
                onChange={(e) => setSelectedPresenter(e.target.value)}
                className="px-4 py-2 bg-white border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] min-w-[180px]"
              >
                {presenters.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 bg-white border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] min-w-[120px]"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              
              <input 
                type="text" 
                placeholder="Search by lawyer name..."
                value={searchPerson}
                onChange={(e) => setSearchPerson(e.target.value)}
                className="flex-1 min-w-[200px] px-4 py-2 bg-white border border-[#d8d3d3] text-[#2d2926] text-sm placeholder:text-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C]"
              />
            </div>
            
            <button 
              onClick={resetFilters}
              className="text-[#C15F3C] text-sm font-semibold hover:underline transition-all whitespace-nowrap"
            >
              Reset Filters
            </button>
          </div>
          
          <div className="mt-4 text-right">
            <p className="text-sm text-[#5a5651]">
              Showing <span className="font-semibold text-[#2d2926]">{filteredAwards.length}</span> results
            </p>
          </div>
        </div>

        {/* Awards Table */}
        <div className="mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#d8d3d3]">
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase text-[#5a5651] tracking-wider">Presenter</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase text-[#5a5651] tracking-wider">Award/Ranking</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase text-[#5a5651] tracking-wider">Year</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase text-[#5a5651] tracking-wider">Lawyer</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase text-[#5a5651] tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredAwards.length > 0 ? (
                  filteredAwards.slice(0, visibleCount).map((award, idx) => (
                    <tr 
                      key={idx} 
                      className="border-b border-[#e8e4de] hover:bg-white/50 transition-colors group"
                    >
                      <td className="px-4 py-5 text-sm text-[#2d2926] font-medium">
                        {award.presenter}
                      </td>
                      <td className="px-4 py-5">
                        <p className="text-sm font-semibold text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                          {award.award}
                        </p>
                      </td>
                      <td className="px-4 py-5 text-sm text-[#5a5651]">
                        {award.year}
                      </td>
                      <td className="px-4 py-5 text-sm text-[#5a5651]">
                        {award.lawyer}
                      </td>
                      <td className="px-4 py-5 text-sm text-[#5a5651]">
                        {award.details}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-12 text-center text-[#5a5651]">
                      No awards found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Load More Button */}
          {visibleCount < filteredAwards.length && (
            <div className="flex justify-center pt-10">
              <button 
                onClick={() => setVisibleCount(visibleCount + 8)}
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

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}