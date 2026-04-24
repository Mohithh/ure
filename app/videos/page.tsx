'use client';

import { useState } from 'react';
import Link from 'next/link';

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
  const [visibleCount, setVisibleCount] = useState(6);
  const [email, setEmail] = useState('');
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const filtered = activeTab === 'All' ? allVideos : allVideos.filter(v => v.tag === activeTab);
  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSubscribeModal(true);
      setTimeout(() => setShowSubscribeModal(false), 3000);
      setEmail('');
    }
  };

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
            Videos
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Benefit from expert opinions
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
            Stay informed as we share our expertise on key legal issues that matter the most to businesses.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-6 border-b border-[#d8d3d3] pb-0">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setVisibleCount(6); }}
                className={`pb-3 text-sm font-medium tracking-wide border-b-2 -mb-px transition-all ${
                  activeTab === tab
                    ? 'border-[#C15F3C] text-[#C15F3C]'
                    : 'border-transparent text-[#5a5651] hover:text-[#2d2926]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayed.map((video, idx) => (
            <div key={idx} className="bg-white border border-[#e0dbd5] rounded-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300">
              {/* Video Thumbnail */}
              <div className="relative w-full h-[220px] bg-gradient-to-br from-[#2d2926] to-[#4a3b35] flex items-center justify-center">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#C15F3C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-sm">
                  15:32
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-[10px] font-semibold text-[#C15F3C] uppercase tracking-wider">
                  {video.tag}
                </span>
                <h3 className="text-base font-semibold text-[#2d2926] mt-2 mb-2 group-hover:text-[#C15F3C] transition-colors leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-[#5a5651] text-sm leading-relaxed line-clamp-2 mb-3">
                  {video.desc}
                </p>
                <p className="text-[#B1ADA1] text-xs">{video.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mb-16">
            <button
              onClick={() => setVisibleCount(visibleCount + 6)}
              className="bg-[#C15F3C] text-white px-8 py-3 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md"
            >
              Load More
            </button>
          </div>
        )}

        {/* Subscribe Banner - Elegant Design */}
        <div className="mb-16">
          <div className="relative w-full overflow-hidden bg-[#2d2926] rounded-sm">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-[#C15F3C] blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#C15F3C] blur-3xl"></div>
            </div>
            
            <div className="relative z-10 px-8 md:px-12 py-12 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
                Never miss an alert
              </h2>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Subscribe to be notified when new articles and videos are published. Stay up to date 
                with all the significant developments in Indian corporate and commercial law.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email ID" 
                  className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-[#C15F3C] transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#C15F3C] text-white px-8 py-3 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
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

      {/* Subscribe Success Modal */}
      {showSubscribeModal && (
        <div className="fixed bottom-8 right-8 bg-[#2d2926] text-white px-6 py-3 rounded-sm shadow-lg animate-fade-in-up z-50">
          <p className="text-sm">✓ Successfully subscribed to updates!</p>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}