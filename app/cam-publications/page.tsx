// app/cam-publications/page.tsx
'use client';
import PageTemplate from '@/app/components/pagetemplate';
import { useState, useEffect } from 'react';

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
  title: string;
  desc: string;
  date: string;
  accent: string;
}

// Array of accent colors for visual variety (static - not from API)
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

export default function CAMPublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  
  // Filter states
  const [selectedPractice, setSelectedPractice] = useState('All Practice Areas');
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedYear, setSelectedYear] = useState('All Years');

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
        
        // Transform API data to match component's format with random accent colors
        const transformedData: Publication[] = data.map((item, index) => ({
          title: item.title || '',
          desc: item.desc || '',
          date: item.date || '',
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

  // Get unique years from publications
  const getUniqueYears = () => {
    const years = [...new Set(publications.map(pub => {
      const yearMatch = pub.date.match(/\d{4}/);
      return yearMatch ? yearMatch[0] : null;
    }).filter(Boolean))] as string[];
    return years.sort((a, b) => b.localeCompare(a));
  };

  // Apply filters
  const applyFilters = () => {
    let filtered = [...publications];
    
    // Filter by year
    if (selectedYear !== 'All Years') {
      filtered = filtered.filter(pub => {
        const yearMatch = pub.date.match(/\d{4}/);
        return yearMatch && yearMatch[0] === selectedYear;
      });
    }
    
    // Note: Practice Area and Sector filters are currently placeholders
    // as the API doesn't provide these fields. You can add them to your CMS if needed.
    
    setFilteredPublications(filtered);
    setShowAll(false); // Reset showAll when filters change
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedPractice('All Practice Areas');
    setSelectedSector('All Sectors');
    setSelectedYear('All Years');
    setFilteredPublications(publications);
    setShowAll(false);
  };

  // Get displayed publications based on showAll state
  const displayedPublications = showAll 
    ? filteredPublications 
    : filteredPublications.slice(0, 4);

  const hasMore = filteredPublications.length > 4;

  if (loading) {
    return (
      <PageTemplate
        title="URE Legal Publications"
        subtitle="In-depth analysis of key issues"
        category="Thought Leadership"
        showHero={true}
        showContactForm={false}
        fullWidth={true}
      >
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading publications...</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

  const uniqueYears = getUniqueYears();

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
          <select 
            value={selectedPractice}
            onChange={(e) => setSelectedPractice(e.target.value)}
            className="border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white cursor-pointer hover:border-[#C15F3C] transition-colors focus:outline-none focus:border-[#C15F3C]"
          >
            <option>All Practice Areas</option>
            <option>Dispute Resolution</option>
            <option>Corporate &amp; M&amp;A</option>
            <option>Labour &amp; Employment</option>
            <option>Data Privacy</option>
          </select>
          <select 
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white cursor-pointer hover:border-[#C15F3C] transition-colors focus:outline-none focus:border-[#C15F3C]"
          >
            <option>All Sectors</option>
            <option>Banking &amp; Finance</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Real Estate</option>
          </select>
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 px-4 py-2 text-sm text-gray-600 bg-white cursor-pointer hover:border-[#C15F3C] transition-colors focus:outline-none focus:border-[#C15F3C]"
          >
            <option>All Years</option>
            {uniqueYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <button 
            onClick={applyFilters}
            className="bg-[#C15F3C] text-white px-6 py-2 text-sm font-bold hover:bg-[#a0502f] transition-colors"
          >
            Apply
          </button>
          <button
            onClick={resetFilters}
            className="text-[#C15F3C] text-sm font-medium hover:underline ml-2"
          >
            Reset Filters
          </button>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-500">
          Showing {displayedPublications.length} of {filteredPublications.length} publications
        </div>

        {/* 2-Column Card Grid - DYNAMIC from API */}
        {displayedPublications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedPublications.map((pub, idx) => (
              <div
                key={idx}
                className="flex bg-white border border-[#B1ADA1]/30 hover:shadow-lg transition-shadow group cursor-pointer min-h-[280px]"
              >
                {/* Left: Book Cover Image Placeholder - DYNAMIC color from API item */}
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
                      <span className="text-[#C15F3C] hover:text-white">🔖</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No publications found matching your filters.
          </div>
        )}

        {/* Load More */}
        {!showAll && hasMore && (
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