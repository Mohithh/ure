// app/newsletters/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const latestNewsletters = [
  {
    series: "the employment quarterly",
    title: "Alert: Supreme Court to examine validity of the IW regime under Provident Fund Law",
    date: "March 2026",
    seriesColor: "#C15F3C"
  },
  {
    series: "case in point",
    title: "Judicial Developments under the Arbitration Act",
    date: "February 2026",
    seriesColor: "#C15F3C"
  },
  {
    series: "ure bulletin",
    title: "URE Bulletin: October – December 2025",
    date: "February 2026",
    seriesColor: "#2d2926"
  },
  {
    series: "insight",
    title: "Alert: Summary Note – Synthetic Information Related Amendments to Intermediary Guidelines",
    date: "February 2026",
    seriesColor: "#C15F3C"
  }
];

const newsletterSeries = [
  {
    name: "ure.ai",
    desc: "Insights on Artificial Intelligence (AI) in Legal Services",
    seriesColor: "#2d2926"
  },
  {
    name: "case in point",
    desc: "Quick alerts and updates on the latest happenings in dispute resolution and litigation.",
    seriesColor: "#C15F3C"
  },
  {
    name: "ure bulletin",
    desc: "A quarterly newsletter about regulatory updates from prominent Financial Institutions of the country.",
    seriesColor: "#2d2926"
  },
  {
    name: "insight",
    desc: "Get updates on key developments across various sectors and practices in corporate law.",
    seriesColor: "#C15F3C"
  },
  {
    name: "iprecis",
    desc: "A carefully curated quarterly roundup of significant events/cases in the IP sector in India.",
    seriesColor: "#2d2926"
  },
  {
    name: "prop digest",
    desc: "Get quarterly insights and updates from the latest developments in the real estate sector.",
    seriesColor: "#C15F3C"
  },
  {
    name: "synapse",
    desc: "A quarterly update on the pharmaceutical, life sciences and healthcare industry.",
    seriesColor: "#2d2926"
  },
  {
    name: "tax scout",
    desc: "Quarterly updates on the recent developments in direct and indirect tax laws.",
    seriesColor: "#C15F3C"
  },
  {
    name: "the employment quarterly",
    desc: "It covers key Central and State level legislative updates with respect to employment and labor laws.",
    seriesColor: "#2d2926"
  }
];

export default function NewslettersPage() {
  const [email, setEmail] = useState('');
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

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
            Newsletters
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Update yourself with the latest in law
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Intro Text */}
        <div className="mb-12">
          <div className="w-12 h-[1px] bg-[#C15F3C]/40 mb-6" />
          <p className="text-base md:text-lg font-light text-[#2d2926] leading-relaxed">
            Review our periodic newsletters with detailed analysis and significant takeaways.
          </p>
        </div>

        {/* Latest Newsletters Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Latest Newsletters
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNewsletters.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-6 flex flex-col gap-4 hover:shadow-md transition-all duration-300 group"
              >
                <span
                  className="text-sm font-semibold italic uppercase tracking-wide"
                  style={{ color: item.seriesColor }}
                >
                  {item.series}
                </span>
                <h3 className="text-sm font-semibold text-[#2d2926] group-hover:text-[#C15F3C] transition-colors leading-snug flex-1">
                  {item.title}
                </h3>
                <p className="text-[#B1ADA1] text-xs">{item.date}</p>
                <button className="w-8 h-8 rounded-full border border-[#C15F3C]/30 hover:bg-[#C15F3C] hover:border-[#C15F3C] flex items-center justify-center transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#C15F3C] hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Banner - Elegant Design */}
        <div className="mb-20">
          <div className="relative w-full overflow-hidden bg-[#2d2926] rounded-sm">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-[#C15F3C] blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#C15F3C] blur-3xl"></div>
            </div>
            
            <div className="relative z-10 px-8 md:px-12 py-12 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
                Join 10,000+ decision makers
              </h2>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Subscribe to URE Legal newsletters and stay up to date with all the significant 
                developments in Indian corporate and commercial law that impact the corporate ecosystem.
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

        {/* All Newsletter Series Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            All Newsletter Series
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletterSeries.map((series, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-6 flex flex-col gap-4 hover:shadow-md transition-all duration-300 group"
              >
                <span
                  className="text-lg font-semibold italic tracking-wide"
                  style={{ color: series.seriesColor }}
                >
                  {series.name}
                </span>
                <p className="text-[#5a5651] text-sm leading-relaxed flex-1">
                  {series.desc}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#C15F3C] text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all w-fit"
                >
                  Subscribe
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
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
          <p className="text-sm">✓ Successfully subscribed to newsletter!</p>
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
      `}</style>
    </div>
  );
}