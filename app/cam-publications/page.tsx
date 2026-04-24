// app/cam-publications/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define the type for a publication from the API
interface ApiPublication {
  title: string;
  desc: string;
  date: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Define the type for display
interface Publication {
  id: string;
  title: string;
  desc: string;
  date: string;
  year: string;
  accent: string;
}

// Array of accent colors for visual variety
const accentColors = [
  "#C15F3C",
  "#4a3728",
  "#8b5e3c",
  "#2d4a6e",
  "#5b1744",
  "#1a5c5c",
  "#6b3e2c",
  "#3a6b4a"
];

// Helper function to extract year from date string
const extractYear = (dateStr: string): string => {
  const match = dateStr.match(/\d{4}/);
  return match ? match[0] : "2024";
};

// Format date to display format (e.g., "January 22, 2024")
const formatDate = (dateStr: string): string => {
  // If date is already formatted nicely, return as is
  if (dateStr.match(/[A-Za-z]+\s\d{1,2},\s\d{4}/)) {
    return dateStr;
  }
  
  // Try to parse and format
  const match = dateStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (match) {
    const month = parseInt(match[1]);
    const day = parseInt(match[2]);
    const year = match[3];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${monthNames[month - 1]} ${day}, ${year}`;
  }
  
  return dateStr;
};

export default function CAMPublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Filter states
  const [selectedYear, setSelectedYear] = useState('All Years');

  // Get unique years from publications
  const getUniqueYears = () => {
    const years = [...new Set(publications.map(pub => pub.year))];
    return years.sort((a, b) => b.localeCompare(a));
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...publications];
    
    // Filter by year
    if (selectedYear !== 'All Years') {
      filtered = filtered.filter(pub => pub.year === selectedYear);
    }
    
    setFilteredPublications(filtered);
    setVisibleCount(6);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedYear('All Years');
    setFilteredPublications(publications);
    setVisibleCount(6);
  };

  // Fetch publications data from API
  useEffect(() => {
    async function fetchPublications() {
      try {
        const res = await fetch('https://cms.urelegal.in/api/content/items/campublications', {
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch publications: ${res.status}`);
        }
        
        const data: ApiPublication[] = await res.json();
        
        // Transform API data
        const transformedData: Publication[] = data.map((item, index) => ({
          id: item._id || String(index),
          title: item.title || '',
          desc: item.desc || '',
          date: formatDate(item.date || ''),
          year: extractYear(item.date || ''),
          accent: accentColors[index % accentColors.length]
        }));
        
        setPublications(transformedData);
        setFilteredPublications(transformedData);
      } catch (error) {
        console.error('Error fetching publications:', error);
        setPublications([]);
        setFilteredPublications([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPublications();
  }, []);

  const displayedPublications = filteredPublications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPublications.length;
  const uniqueYears = getUniqueYears();

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#5a5651]">Loading publications...</p>
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
            Publications
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            In-depth analysis of key issues that matter to businesses
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Intro Text */}
        <div className="mb-10">
          <div className="w-12 h-[1px] bg-[#C15F3C]/40 mb-5" />
          <p className="text-base md:text-lg font-light text-[#2d2926] leading-relaxed">
            Explore our latest thinking on key issues that matter the most to businesses.
          </p>
        </div>

        {/* Filter Bar - Only Year Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#d8d3d3]">
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#5a5651]">Filter by year:</span>
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-[#d8d3d3] px-4 py-2 text-sm text-[#5a5651] bg-white cursor-pointer hover:border-[#C15F3C] transition-colors focus:outline-none focus:border-[#C15F3C]"
            >
              <option>All Years</option>
              {uniqueYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            
            <button 
              onClick={applyFilters}
              className="bg-[#C15F3C] text-white px-6 py-2 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md"
            >
              Apply
            </button>
            
            <button
              onClick={resetFilters}
              className="text-[#C15F3C] text-sm font-medium hover:underline transition-all"
            >
              Reset
            </button>
          </div>
          
          {/* Results Count */}
          <div className="text-sm text-[#5a5651]">
            Showing {displayedPublications.length} of {filteredPublications.length} publications
          </div>
        </div>

        {/* Publications Grid - 3 Columns */}
        {displayedPublications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedPublications.map((pub, idx) => (
              <div
                key={pub.id}
                className="bg-white border border-[#e0dbd5] rounded-sm hover:shadow-md transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Top: Book Cover Placeholder with Title */}
                <div
                  className="w-full h-48 flex-shrink-0 relative overflow-hidden"
                  style={{ backgroundColor: pub.accent }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 mb-4 flex items-center justify-center">
                      <span className="text-white text-xs font-bold uppercase">URE</span>
                    </div>
                    <h4 className="text-white text-sm font-semibold leading-tight line-clamp-2">
                      {pub.title}
                    </h4>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20" />
                </div>

                {/* Bottom: Content */}
                <div className="flex-1 p-5 flex flex-col">
                  <p className="text-[#5a5651] text-sm leading-relaxed line-clamp-3 mb-4">
                    {pub.desc}
                  </p>
                  
                  <p className="text-[#B1ADA1] text-xs font-medium mb-4">
                    {pub.date}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#f0e6e0]">
                    <button className="w-8 h-8 rounded-full border border-[#C15F3C]/30 hover:bg-[#C15F3C] hover:border-[#C15F3C] flex items-center justify-center transition-all group">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#C15F3C] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-[#C15F3C]/30 hover:bg-[#C15F3C] hover:border-[#C15F3C] flex items-center justify-center transition-all group">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#C15F3C] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-[#5a5651]">
            No publications found matching your filters.
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="bg-[#C15F3C] text-white px-8 py-3 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md"
            >
              Load More
            </button>
          </div>
        )}

        {/* Print/Mail Icons */}
        <div className="flex justify-end gap-3 mt-16 mb-12">
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

        {/* Newsletter CTA - White background */}
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
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
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