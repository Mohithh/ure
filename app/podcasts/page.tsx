// app/podcasts/page.tsx
'use client';

import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Define the type for a podcast item from the API
interface ApiPodcast {
  title: string;
  des: string;
  dateinfo: string;
  link: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Define the type for a podcast episode
interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  date: string;
  link: string;
  image: string;
  type: 'episode' | 'series';
}

// Helper function to parse dateinfo for episodes (format: "19th December 2025 | 49:16")
function parseEpisodeInfo(dateinfo: string): { date: string; duration: string } {
  if (dateinfo.includes('|')) {
    const [date, duration] = dateinfo.split('|');
    return { date: date.trim(), duration: duration.trim() };
  }
  return { date: dateinfo, duration: '' };
}

// Helper function to parse dateinfo for series (format: "46 Episodes")
function parseSeriesInfo(dateinfo: string): { episodes: string } {
  return { episodes: dateinfo };
}

export default function PodcastsPage() {
  const [podcastEpisodes, setPodcastEpisodes] = useState<PodcastEpisode[]>([]);
  const [podcastSeries, setPodcastSeries] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedPractice, setSelectedPractice] = useState('All');

  // Static filter options (not from API - these are for UI)
  const topics = ['All', 'Innovation', 'Compliance', 'M&A', 'Technology', 'Leadership'];
  const practices = ['All', 'Corporate', 'Litigation', 'Tax', 'Employment'];

  // Fetch podcasts data from API
  useEffect(() => {
    async function fetchPodcasts() {
      try {
        const res = await fetch('https://cms.urelegal.in/api/content/items/ThoughtLeadershipPodcasts', {
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch podcasts: ${res.status}`);
        }
        
        const data: ApiPodcast[] = await res.json();
        
        // Separate episodes and series based on dateinfo format
        const episodes: PodcastEpisode[] = [];
        const series: PodcastEpisode[] = [];
        
        data.forEach((item, index) => {
          // Check if this is a series (contains "Episodes" in dateinfo) or episode (contains "|")
          if (item.dateinfo.includes('Episodes')) {
            // This is a podcast series
            const { episodes: episodeCount } = parseSeriesInfo(item.dateinfo);
            series.push({
              title: item.title,
              description: item.des,
              duration: '',
              date: '',
              link: item.link,
              image: `/images/podcast-series-${series.length + 1}.jpg`,
              type: 'series'
            });
          } else {
            // This is an episode
            const { date, duration } = parseEpisodeInfo(item.dateinfo);
            episodes.push({
              title: item.title,
              description: item.des,
              duration: duration,
              date: date,
              link: item.link,
              image: `/images/podcast-${episodes.length + 1}.jpg`,
              type: 'episode'
            });
          }
        });
        
        setPodcastEpisodes(episodes);
        setPodcastSeries(series);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
        setPodcastEpisodes([]);
        setPodcastSeries([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPodcasts();
  }, []);

  // Get unique years from episodes
  const getUniqueYears = () => {
    const years = [...new Set(podcastEpisodes.map(ep => {
      const yearMatch = ep.date.match(/\d{4}/);
      return yearMatch ? yearMatch[0] : null;
    }).filter(Boolean))] as string[];
    return ['All', ...years.sort((a, b) => b.localeCompare(a))];
  };

  // Filter episodes based on selections
  const filteredEpisodes = podcastEpisodes.filter(ep => {
    const matchesYear = selectedYear === 'All' || ep.date.includes(selectedYear);
    // Topic and Practice filters are currently UI placeholders
    // You can add these fields to your CMS if needed
    return matchesYear;
  });

  const resetFilters = () => {
    setSelectedTopic('All');
    setSelectedYear('All');
    setSelectedPractice('All');
  };

  const sidebarContent = (
    <div className="space-y-10">
      <div className="bg-[#1a1a1a] text-white p-8">
        <h3 className="text-lg font-bold text-[#C15F3C] mb-6 uppercase tracking-wider">Listen On</h3>
        <div className="space-y-4 text-sm font-bold">
          <a href="#" className="flex items-center gap-3 hover:text-[#C15F3C] transition-colors">
            <div className="w-10 h-10 bg-[#C15F3C] rounded-full flex items-center justify-center text-white">S</div>
            Spotify
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-[#C15F3C] transition-colors">
            <div className="w-10 h-10 bg-[#C15F3C] rounded-full flex items-center justify-center text-white">A</div>
            Apple Podcasts
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-[#C15F3C] transition-colors">
            <div className="w-10 h-10 bg-[#C15F3C] rounded-full flex items-center justify-center text-white">G</div>
            Google Podcasts
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-[#1a1a1a] uppercase border-b-2 border-[#C15F3C] pb-3">Podcast Series</h3>
        <ul className="space-y-4 text-sm font-medium">
          {podcastSeries.map((series, idx) => (
            <li key={idx}>
              <a href={series.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#C15F3C] transition-colors flex items-center gap-2">
                › {series.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (loading) {
    return (
      <PageTemplate 
        title="Podcasts" 
        subtitle="Listen to insights from URE Legal's experts on law, business, and innovation."
        category="Thought Leadership"
        heroImage="/images/thought-leadership-hero.jpg"
        showHero={true}
        showContactForm={false}
        fullWidth={true}
        sidebar={sidebarContent}
      >
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading podcasts...</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

  const yearOptions = getUniqueYears();

  return (
    <PageTemplate 
      title="Podcasts" 
      subtitle="Listen to insights from URE Legal's experts on law, business, and innovation."
      category="Thought Leadership"
      heroImage="/images/thought-leadership-hero.jpg"
      showHero={true}
      showContactForm={false}
      fullWidth={true}
      sidebar={sidebarContent}
    >
      <div className="space-y-16 pb-20">
        
        {/* Intro Text */}
        <p className="text-lg text-black leading-relaxed">
          Explore our latest thinking on key issues that matter the most to businesses. Our podcast series brings together leading legal practitioners and industry visionaries.
        </p>

        {/* Filter Section */}
        <div className="space-y-6 pt-6 border-t-2 border-[#C15F3C]">
          <h3 className="text-lg font-bold text-[#1a1a1a] uppercase pt-6">Recent</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <select 
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="flex-1 border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C]"
            >
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="flex-1 border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C]"
            >
              {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            
            <select 
              value={selectedPractice}
              onChange={(e) => setSelectedPractice(e.target.value)}
              className="flex-1 border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C]"
            >
              {practices.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div className="flex justify-end">
            <button 
              onClick={resetFilters}
              className="text-[#C15F3C] font-bold text-sm uppercase hover:underline"
            >
              Reset Filters
            </button>
          </div>
          <div className="w-full h-1 bg-[#C15F3C]"></div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-500">
          Showing {filteredEpisodes.length} of {podcastEpisodes.length} episodes
        </div>

        {/* Recent Episodes - DYNAMIC from API */}
        {filteredEpisodes.length > 0 ? (
          <section className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredEpisodes.map((episode, idx) => (
                <div key={idx} className="bg-white border border-[#B1ADA1]/30 hover:shadow-lg transition-all group">
                  {/* Image */}
                  <div className="w-full h-48 bg-[#F4F3EE] border-b border-[#B1ADA1]/30 overflow-hidden flex items-center justify-center">
                    <img 
                      src={episode.image} 
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#C15F3C] to-[#1a1a1a] text-white">
                      <div className="text-6xl mb-2">🎙️</div>
                      <span className="text-sm font-bold">Podcast Cover</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors leading-tight">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {episode.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#B1ADA1]/30">
                      <div className="text-xs text-gray-500 font-bold uppercase">
                        {episode.date} | {episode.duration}
                      </div>
                      <a 
                        href={episode.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#C15F3C] font-bold text-xs uppercase hover:opacity-70"
                      >
                        ▶ Listen
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No episodes found matching your filters.
          </div>
        )}

        {/* Podcast Series - DYNAMIC from API */}
        {podcastSeries.length > 0 && (
          <section className="space-y-8 pt-16 border-t border-[#B1ADA1]/30">
            <h2 className="text-3xl font-bold text-[#1a1a1a] uppercase">Podcast Series</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {podcastSeries.map((series, idx) => (
                <div key={idx} className="bg-white border border-[#B1ADA1]/30 hover:shadow-lg transition-all group overflow-hidden">
                  {/* Series Image */}
                  <div className="w-full h-64 bg-[#F4F3EE] overflow-hidden flex items-center justify-center relative">
                    <img 
                      src={series.image} 
                      alt={series.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#C15F3C] to-[#1a1a1a] text-white">
                      <div className="text-8xl mb-4">🎧</div>
                      <span className="text-lg font-bold">{series.title}</span>
                    </div>
                  </div>
                  
                  {/* Series Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors">
                      {series.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {series.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 font-bold text-sm uppercase">
                      <span className="text-gray-600">Series</span>
                      <a 
                        href={series.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#C15F3C] hover:underline"
                      >
                        View Series →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageTemplate>
  );
}