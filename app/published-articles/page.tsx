// app/published-articles/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Define the type for an article from the API
interface ApiArticle {
  title: string;
  des: string;
  dateinfo: string;
  date: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Define the type for display
interface Article {
  title: string;
  desc: string;
  source: string;
  date: string;
  year: string;
}

// Helper function to parse dateinfo into source and date
function parseDateInfo(dateinfo: string): { source: string; date: string } {
  const lastSpaceIndex = dateinfo.lastIndexOf(' ');
  if (lastSpaceIndex === -1) {
    return { source: dateinfo, date: '' };
  }
  
  const source = dateinfo.substring(0, lastSpaceIndex);
  const date = dateinfo.substring(lastSpaceIndex + 1);
  
  return { source, date };
}

// Helper function to get unique years from articles
function getUniqueYears(articles: Article[]): string[] {
  const years = [...new Set(articles.map(article => article.year))];
  return years.sort((a, b) => b.localeCompare(a));
}

export default function PublishedArticlesPage() {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [visibleRecentCount, setVisibleRecentCount] = useState(6);
  const [visibleYearCount, setVisibleYearCount] = useState(6);

  // Fetch articles data from API
  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch('https://cms.urelegal.in/api/content/items/ThoughtLeadershipPublishedArticles', {
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch articles: ${res.status}`);
        }
        
        const data: ApiArticle[] = await res.json();
        
        const transformedData: Article[] = data.map((item) => {
          const { source, date } = parseDateInfo(item.dateinfo || '');
          return {
            title: item.title || '',
            desc: item.des || '',
            source: source,
            date: date,
            year: item.date || new Date().getFullYear().toString()
          };
        });
        
        setAllArticles(transformedData);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setAllArticles([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticles();
  }, []);

  const yearOptions = ['All', ...getUniqueYears(allArticles)];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) ||
                          article.desc.toLowerCase().includes(search.toLowerCase());
    const matchesYear = selectedYear === 'All' || article.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  const recentArticles = filteredArticles.slice(0, visibleRecentCount);
  const hasMoreRecent = filteredArticles.length > visibleRecentCount;

  const yearFilteredArticles = filteredArticles.slice(0, visibleYearCount);
  const hasMoreYearArticles = filteredArticles.length > visibleYearCount;

  const loadMoreRecent = () => setVisibleRecentCount(prev => prev + 6);
  const loadMoreYear = () => setVisibleYearCount(prev => prev + 6);

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#5a5651]">Loading articles...</p>
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
            Published Articles
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Stay informed about URE Legal's view
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Intro Text */}
        <div className="mb-10">
          <div className="w-12 h-[1px] bg-[#C15F3C]/40 mb-6" />
          <p className="text-base md:text-lg font-light text-[#2d2926] leading-relaxed">
            Read published articles featuring opinions and insights from our expert lawyers.
          </p>
        </div>

        {/* Recent Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Recent
          </h2>
          
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all placeholder:text-[#B1ADA1]"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B1ADA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-[#5a5651] mb-6">
            Showing {recentArticles.length} of {filteredArticles.length} articles
          </div>

          {/* Recent Grid */}
          {recentArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, idx) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[#5a5651]">
              No articles found matching your search criteria.
            </div>
          )}

          {/* Load More Button for Recent */}
          {hasMoreRecent && (
            <div className="flex justify-center pt-8">
              <button 
                onClick={loadMoreRecent}
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
                onChange={e => setSelectedYear(e.target.value)}
                className="px-4 py-2 bg-white border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] cursor-pointer"
              >
                {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div className="text-sm text-[#5a5651]">
              Showing {yearFilteredArticles.length} articles
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Archive
          </h2>

          {/* Archive Grid */}
          {yearFilteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yearFilteredArticles.map((article, idx) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[#5a5651]">
              No articles found for {selectedYear !== 'All' ? selectedYear : 'selected year'}.
            </div>
          )}

          {/* Load More for Archive */}
          {hasMoreYearArticles && (
            <div className="flex justify-center pt-8">
              <button 
                onClick={loadMoreYear}
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

      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="bg-white border border-[#e0dbd5] rounded-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Image Placeholder */}
      <div className="relative w-full h-[200px] bg-gradient-to-br from-[#C15F3C]/10 to-[#B1ADA1]/10 flex items-center justify-center overflow-hidden">
        <svg className="w-12 h-12 text-[#C15F3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-[#2d2926] group-hover:text-[#C15F3C] transition-colors leading-snug mb-3 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-[#5a5651] text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
          {article.desc}
        </p>
        <div>
          <Link href="#" className="inline-flex items-center gap-2 text-[#C15F3C] text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-[#B1ADA1] text-xs mt-2">
            {article.source} • {article.date}
          </p>
        </div>
      </div>
    </div>
  );
}