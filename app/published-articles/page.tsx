// app/published-articles/page.tsx
'use client';
import PageTemplate from '@/app/components/pagetemplate';
import { useState, useEffect } from 'react';

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
  // Split by last space to separate source and date
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
  return years.sort((a, b) => b.localeCompare(a)); // Sort descending
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
        
        // Transform API data to match component's format
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

  // Get unique years for filter
  const yearOptions = ['All', ...getUniqueYears(allArticles)];

  // Filter articles based on search and year
  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) ||
                          article.desc.toLowerCase().includes(search.toLowerCase());
    const matchesYear = selectedYear === 'All' || article.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  // Split articles into recent (first 6 by default) and rest
  const recentArticles = filteredArticles.slice(0, visibleRecentCount);
  const hasMoreRecent = filteredArticles.length > visibleRecentCount;

  // Year-filtered articles (excluding the recent ones if needed)
  const yearFilteredArticles = filteredArticles.slice(0, visibleYearCount);
  const hasMoreYearArticles = filteredArticles.length > visibleYearCount;

  const loadMoreRecent = () => {
    setVisibleRecentCount(prev => prev + 6);
  };

  const loadMoreYear = () => {
    setVisibleYearCount(prev => prev + 6);
  };

  if (loading) {
    return (
      <PageTemplate
        title="Published Articles"
        subtitle="Stay informed about URE Legal's view"
        category="Thought Leadership"
        heroImage="/images/thought-leadership-hero.jpg"
        showHero={true}
        showContactForm={false}
        fullWidth={true}
      >
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading articles...</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate
      title="Published Articles"
      subtitle="Stay informed about URE Legal's view"
      category="Thought Leadership"
      heroImage="/images/thought-leadership-hero.jpg"
      showHero={true}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="space-y-12 pb-20">

        {/* Intro */}
        <p className="text-xl font-semibold text-[#C15F3C]">
          Read published articles featuring opinions and insights from our expert lawyers.
        </p>

        {/* Recent Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-normal text-[#1a1a1a]">Recent</h2>
          
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 w-full max-w-sm">
            <input
              type="text"
              placeholder="Search published articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 text-sm text-gray-700 focus:outline-none bg-white placeholder-gray-400"
            />
            <div className="px-3 border-l border-gray-300 text-gray-400 py-2.5">
              🔍
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-500">
            Showing {recentArticles.length} of {filteredArticles.length} articles
          </div>

          {/* Recent Grid - DYNAMIC from API */}
          {recentArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, idx) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No articles found matching your search criteria.
            </div>
          )}

          {/* Load More Button for Recent */}
          {hasMoreRecent && (
            <div className="text-center pt-8">
              <button 
                onClick={loadMoreRecent}
                className="bg-[#C15F3C] text-white px-14 py-3 font-semibold hover:bg-[#a0502f] transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Year Filter Section - DYNAMIC from API */}
        <div className="space-y-8 pt-4 border-t border-[#B1ADA1]/20">
          <div className="max-w-[160px]">
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="w-full border border-gray-300 px-6 py-3 text-base text-gray-700 bg-white focus:outline-none focus:border-[#C15F3C] cursor-pointer"
            >
              {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          {/* Grid for selected year - DYNAMIC from API */}
          {yearFilteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yearFilteredArticles.map((article, idx) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No articles found for {selectedYear !== 'All' ? selectedYear : 'selected year'}.
            </div>
          )}

          {/* Load More for year section */}
          {hasMoreYearArticles && (
            <div className="text-center pt-4">
              <button 
                onClick={loadMoreYear}
                className="bg-[#C15F3C] text-white px-14 py-3 font-semibold hover:bg-[#a0502f] transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>

      </div>
    </PageTemplate>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="flex flex-col group cursor-pointer border border-[#B1ADA1]/20 hover:shadow-md transition-shadow">
      {/* Image Placeholder */}
      <div className="w-full h-[220px] bg-[#F4F3EE] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C15F3C]/10 to-[#1a1a1a]/20"></div>
        <div className="relative z-10 text-center px-6 py-4">
          <span className="text-[#C15F3C]/50 text-4xl block mb-2">📄</span>
          <span className="text-[#1a1a1a]/30 text-[10px] font-bold uppercase tracking-widest">
            Article Image
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-3">
        <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-4">
          {article.desc}
        </p>
        <div>
          <span className="text-[#C15F3C] text-sm font-semibold hover:underline">
            Read More
          </span>
          <p className="text-gray-400 text-xs mt-1">
            {article.source} {article.date}
          </p>
        </div>
      </div>
    </div>
  );
}