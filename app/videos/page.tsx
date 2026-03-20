'use client';
import PageTemplate from '@/app/components/pagetemplate';
import { useState } from 'react';

const allVideos = [
  {
    category: "In the Media",
    title: "The Thought League S3 – EP10",
    desc: "Our Managing Partner and Uday Shankar, Former Director of Disney Star Systems, come together to discuss the pivotal moment really reshaping digital landscape shaped by our thoughts, imagination, and the interchange of media and entertainment.",
    date: "12th February 2026",
    tag: "In the Media"
  },
  {
    category: "In the Media",
    title: "The Thought League S3 – EP9",
    desc: "In this episode of The Thought League – Season 03, our Managing Partner and Shankar Aggarwal, Managing Director, TAFE come together for a focused conversation on the future of Indian manufacturing.",
    date: "13th January 2026",
    tag: "In the Media"
  },
  {
    category: "In the Media",
    title: "The Thought League S3 – EP8",
    desc: "In the latest episode of The Thought League our Managing Partner and Sajjan Jindal, Chairman & Managing Director, JSW Group, discuss the key economic, industrial, and legal shifts that will shape India's growth story.",
    date: "30th December 2025",
    tag: "In the Media"
  },
  {
    category: "In the Media",
    title: "The Thought League S3 – EP8",
    desc: "In the latest episode of The Thought League our Managing Partner and Prof. Dr. C. Raj Kumar, Founding Vice-Chancellor, O.P. Jindal Global University explore how law, technology, and education are shaping India's growth story.",
    date: "7th October 2025",
    tag: "In the Media"
  },
  {
    category: "In the Media",
    title: "The Thought League S3 – EP7",
    desc: "In the latest episode of The Thought League our Managing Partner and Professor Richard Susskind CBE KC (Hon), Author, Speaker & Independent Adviser explore how artificial intelligence is reshaping law, regulation, and s...",
    date: "7th October 2025",
    tag: "In the Media"
  },
  {
    category: "In the Media",
    title: "The Thought League S3 – EP6",
    desc: "In the latest episode of The Thought League our Managing Partner and Dr. Janmejaya Sinha, Chairman of Boston Consulting Group (BCG) and Prashant Nair of CNBC-TV18, discusses how India can turn global volatility into opportunity.",
    date: "12th August 2025",
    tag: "In the Media"
  }
];

const tabs = ['All', 'Video Blogs', 'Webinars & Events', 'In the Media'];

export default function VideosPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeTab === 'All' ? allVideos : allVideos.filter(v => v.tag === activeTab);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <PageTemplate
      title="Videos"
      subtitle="Benefit from expert opinions"
      category="Thought Leadership"
      showHero={false}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="space-y-10 pb-0">

        {/* Intro */}
        <p className="text-xl font-semibold text-[#1a1a1a]">
          Stay informed as we share our expertise on key legal issues that matter the most to businesses.
        </p>

        {/* Filter Tabs */}
        <div className="space-y-4">
          <div className="flex gap-8 border-b border-[#B1ADA1]/40 pb-0">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setShowAll(false); }}
                className={`pb-3 text-sm font-semibold tracking-wide border-b-2 -mb-px transition-colors ${
                  activeTab === tab
                    ? 'border-[#C15F3C] text-[#C15F3C]'
                    : 'border-transparent text-gray-500 hover:text-[#1a1a1a]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <select className="border border-gray-400 px-6 py-3 text-base text-gray-700 bg-white focus:outline-none focus:border-[#C15F3C] min-w-[200px] cursor-pointer">
              <option>Topic</option>
              <option>Legal Technology</option>
              <option>Dispute Resolution</option>
              <option>Corporate Law</option>
            </select>
            <select className="border border-gray-400 px-6 py-3 text-base text-gray-700 bg-white focus:outline-none focus:border-[#C15F3C] min-w-[160px] cursor-pointer">
              <option>Year</option>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>
            <select className="border border-gray-400 px-6 py-3 text-base text-gray-700 bg-white focus:outline-none focus:border-[#C15F3C] min-w-[200px] cursor-pointer">
              <option>Practice</option>
              <option>M&amp;A</option>
              <option>Tax</option>
              <option>Employment</option>
            </select>
            <button className="text-[#C15F3C] text-base font-semibold hover:underline ml-2">
              Reset Filters
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((video, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              {/* YouTube Thumbnail - large */}
              <div className="w-full h-[260px] bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C15F3C]/20 to-[#1a1a1a]"></div>
                {/* Play Button */}
                <div className="relative z-10 w-20 h-14 bg-[#FF0000] rounded-xl flex items-center justify-center hover:bg-[#CC0000] transition-colors group-hover:scale-110 transform duration-200">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                {/* YouTube badge */}
                <div className="absolute top-3 left-3 flex gap-1 items-center bg-black/60 px-2 py-1 rounded text-white text-[10px] font-medium">
                  <span>▶ YouTube</span>
                </div>
                {/* More options dot */}
                <div className="absolute top-3 right-3 text-white text-xl font-bold opacity-60">⋮</div>
              </div>

              {/* Meta */}
              <div className="pt-4 space-y-2 flex-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{video.tag}</span>
                <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors leading-snug">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{video.desc}</p>
                <p className="text-gray-400 text-sm">{video.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {!showAll && filtered.length > 6 && (
          <div className="text-center py-4">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#C15F3C] text-white px-12 py-3 font-semibold hover:bg-[#a0502f] transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Subscribe Banner */}
        <div className="relative w-full min-h-[280px] bg-[#1a1a1a] flex items-center overflow-hidden -mx-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C15F3C]/30 to-[#1a1a1a]/80"></div>
          <div className="relative z-10 bg-white/95 mx-8 md:mx-16 p-10 max-w-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">
              Never miss an alert. Subscribe to be notified when new articles are published.
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Stay up to date with all the significant developments in Indian corporate and commercial law that impact the corporate ecosystem.
            </p>
            <button className="bg-[#C15F3C] text-white px-8 py-3 font-semibold hover:bg-[#a0502f] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </PageTemplate>
  );
}
