'use client';

import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';
import { useState } from 'react';

const podcastEpisodes = [
  {
    title: "Legal Innovation at Scale: Transforming Law Practice",
    description: "Our Chief Innovation Officer explores how technology is revolutionizing legal service delivery and client experience.",
    duration: "49:16",
    date: "19th December 2025",
    image: "/images/podcast-1.jpg"
  },
  {
    title: "Corporate Compliance in a Digital World",
    description: "Understanding regulatory requirements and strategies in the age of digital transformation and cyber security.",
    duration: "41:51",
    date: "12th December 2025",
    image: "/images/podcast-2.jpg"
  },
  {
    title: "Strategic M&A and Green Economics",
    description: "Deep insights into legal strategy, environmental economics, and innovation in corporate transactions.",
    duration: "43:47",
    date: "17th October 2025",
    image: "/images/podcast-3.jpg"
  },
  {
    title: "Compliance and Workplace Regulations",
    description: "Expert discussion on workplace compliance frameworks and regulatory best practices.",
    duration: "17:03",
    date: "7th August 2025",
    image: "/images/podcast-4.jpg"
  }
];

const podcastSeries = [
  {
    name: "URE Law Radio",
    description: "In-depth conversations cutting through complexity to bring clarity to the legal landscape.",
    episodes: 46,
    image: "/images/podcast-series-1.jpg"
  },
  {
    name: "Legal Compliance Series",
    description: "A Podcast Series on compliance and regulatory matters with expert practitioners and consultants.",
    episodes: 14,
    image: "/images/podcast-series-2.jpg"
  },
  {
    name: "Innovation & Legaltech",
    description: "Exploring the intersection of legal innovation, technology, and modern practice management.",
    episodes: 12,
    image: "/images/podcast-series-3.jpg"
  }
];

export default function PodcastsPage() {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedPractice, setSelectedPractice] = useState('All');

  const topics = ['All', 'Innovation', 'Compliance', 'M&A', 'Technology', 'Leadership'];
  const years = ['2025', '2024', '2023'];
  const practices = ['All', 'Corporate', 'Litigation', 'Tax', 'Employment'];

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
          <li><a href="#" className="hover:text-[#C15F3C] transition-colors flex items-center gap-2">› URE Law Radio</a></li>
          <li><a href="#" className="hover:text-[#C15F3C] transition-colors flex items-center gap-2">› Legal Compliance Series</a></li>
          <li><a href="#" className="hover:text-[#C15F3C] transition-colors flex items-center gap-2">› Innovation & Legaltech</a></li>
        </ul>
      </div>
    </div>
  );

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
              {topics.map(t => <option key={t} value={t}>{t || 'Topic'}</option>)}
            </select>
            
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="flex-1 border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C]"
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            
            <select 
              value={selectedPractice}
              onChange={(e) => setSelectedPractice(e.target.value)}
              className="flex-1 border border-[#B1ADA1]/50 p-3 bg-white text-[#1a1a1a] font-medium cursor-pointer hover:border-[#C15F3C]"
            >
              {practices.map(p => <option key={p} value={p}>{p || 'Practice'}</option>)}
            </select>
          </div>
          <div className="flex justify-end">
            <button className="text-[#C15F3C] font-bold text-sm uppercase hover:underline">
              Reset Filters
            </button>
          </div>
          <div className="w-full h-1 bg-[#C15F3C]"></div>
        </div>

        {/* Recent Episodes */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcastEpisodes.map((episode, idx) => (
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
                    <button className="text-[#C15F3C] font-bold text-xs uppercase hover:opacity-70">
                      ▶ Listen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Podcast Series */}
        <section className="space-y-8 pt-16 border-t border-[#B1ADA1]/30">
          <h2 className="text-3xl font-bold text-[#1a1a1a] uppercase">Podcast Series</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {podcastSeries.map((series, idx) => (
              <div key={idx} className="bg-white border border-[#B1ADA1]/30 hover:shadow-lg transition-all group overflow-hidden">
                {/* Series Image */}
                <div className="w-full h-64 bg-[#F4F3EE] overflow-hidden flex items-center justify-center relative">
                  <img 
                    src={series.image} 
                    alt={series.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#C15F3C] to-[#1a1a1a] text-white">
                    <div className="text-8xl mb-4">🎧</div>
                    <span className="text-lg font-bold">{series.name}</span>
                  </div>
                </div>
                
                {/* Series Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors">
                    {series.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {series.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 font-bold text-sm uppercase">
                    <span className="text-gray-600">{series.episodes} Episodes</span>
                    <a href="#" className="text-[#C15F3C] hover:underline">
                      View Series →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
