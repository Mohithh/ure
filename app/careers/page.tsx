// app/careers/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the type for a career section from the API
interface ApiCareerSection {
  title: string;
  description: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Define the type for tab data
interface TabContent {
  title: string;
  description: string;
}

export default function CareersPage() {
  const [careersData, setCareersData] = useState<ApiCareerSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('Leadership Academy');

  // Fetch careers data from API
  useEffect(() => {
    async function fetchCareers() {
      try {
        const res = await fetch('https://cms.urelegal.in/api/content/items/careers', {
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch careers data: ${res.status}`);
        }
        
        const data: ApiCareerSection[] = await res.json();
        setCareersData(data);
      } catch (error) {
        console.error('Error fetching careers data:', error);
        setCareersData([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchCareers();
  }, []);

  // Find specific sections by title
  const whyWorkSection = careersData.find(item => item.title === 'Why work with URE Legal');
  const leadershipSection = careersData.find(item => item.title === 'Leadership Academy');
  const learningSection = careersData.find(item => item.title === 'Knowledge & Learning');
  const lifeAtURE = careersData.find(item => item.title === 'Life at URE Legal');
  const diversitySection = careersData.find(item => item.title === 'Diversity and Inclusion');
  const cultureSection = careersData.find(item => item.title === 'Our Culture');

  // Format description with line breaks and bold text
  const formatDescription = (description: string) => {
    const paragraphs = description.split(/\n\s*\n/);
    
    return paragraphs.map((para, idx) => {
      let formattedText = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      return (
        <p 
          key={idx} 
          className="text-sm text-[#5a5651] leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  // Get tab content based on active tab
  const getTabContent = (): TabContent | null => {
    if (activeTab === 'Leadership Academy' && leadershipSection) {
      return {
        title: leadershipSection.title,
        description: leadershipSection.description
      };
    } else if (activeTab === 'Knowledge & Learning' && learningSection) {
      return {
        title: learningSection.title,
        description: learningSection.description
      };
    }
    return null;
  };

  const tabContent = getTabContent();

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#5a5651]">Loading careers data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F3EE]">
      {/* HERO SECTION - Centered like other pages */}
      <div className="relative w-full min-h-[400px] bg-gradient-to-br from-[#2d2926] to-[#4a3b35] flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#C15F3C] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#C15F3C] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            Careers
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Committed to shaping the finest lawyers for a just world.
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Why Work + Opportunities - Two Column */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Left - Why Work with URE Legal */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Why work with URE Legal
            </h2>
            {whyWorkSection ? (
              formatDescription(whyWorkSection.description)
            ) : (
              <p className="text-[#5a5651]">Loading content...</p>
            )}
          </div>

          {/* Right - Opportunities Box */}
          <div className="bg-white border border-[#e0dbd5] rounded-sm p-6 h-fit hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-[#C15F3C] mb-5 text-center">
              Opportunities
            </h3>
            {[
              { label: 'Legal Professionals', href: '/legal-professionals' },
              { label: 'Internship', href: '/internship' },
              { label: 'Business Services', href: '/business-services' },
            ].map(op => (
              <Link key={op.label} href={op.href} className="block mb-3">
                <div className="w-full bg-[#C15F3C] text-white py-3 px-4 text-sm font-semibold text-center rounded-sm hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md">
                  {op.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Culture of Continuous Learning Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Culture of Continuous Learning
          </h2>

          {/* Tab buttons */}
          <div className="flex border-b border-[#d8d3d3] mb-0">
            <button 
              onClick={() => setActiveTab('Leadership Academy')} 
              className={`px-6 py-3 text-sm font-semibold transition-all cursor-pointer
                ${activeTab === 'Leadership Academy' 
                  ? 'bg-[#C15F3C] text-white' 
                  : 'bg-[#F4F3EE] text-[#5a5651] hover:text-[#C15F3C]'
                }`}
            >
              Leadership Academy
            </button>
            <button 
              onClick={() => setActiveTab('Knowledge & Learning')} 
              className={`px-6 py-3 text-sm font-semibold transition-all cursor-pointer
                ${activeTab === 'Knowledge & Learning' 
                  ? 'bg-[#C15F3C] text-white' 
                  : 'bg-[#F4F3EE] text-[#5a5651] hover:text-[#C15F3C]'
                }`}
            >
              Knowledge & Learning
            </button>
          </div>

          {/* Tab content */}
          <div className="bg-white border border-[#e0dbd5] border-t-0 rounded-b-sm p-8">
            {tabContent ? (
              formatDescription(tabContent.description)
            ) : (
              <p className="text-[#5a5651]">Content not available.</p>
            )}
          </div>
        </div>

        {/* Life at URE Legal */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Life at URE Legal
          </h2>
          {lifeAtURE ? (
            <div className="bg-white border border-[#e0dbd5] rounded-sm p-8">
              {formatDescription(lifeAtURE.description)}
            </div>
          ) : (
            <p className="text-[#5a5651]">Loading content...</p>
          )}
        </div>

        {/* Team Photo Strip */}
        <div className="mb-16">
          <div className="grid grid-cols-5 h-[250px] gap-0 overflow-hidden rounded-sm">
            {[
              'from-[#C15F3C]/40 to-[#C15F3C]/20',
              'from-[#C15F3C]/35 to-[#C15F3C]/15',
              'from-[#C15F3C]/45 to-[#C15F3C]/25',
              'from-[#C15F3C]/30 to-[#C15F3C]/10',
              'from-[#C15F3C]/50 to-[#C15F3C]/30',
            ].map((gradient, i) => (
              <div 
                key={i} 
                className={`h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-105`}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all" />
                <svg width="56" height="110" viewBox="0 0 56 110" className="fill-[#C15F3C]/30 group-hover:fill-[#C15F3C]/50 transition-all">
                  <ellipse cx="28" cy="20" rx="15" ry="17"/>
                  <path d="M0 110 Q4 58 28 50 Q52 58 56 110Z"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Diversity and Inclusion Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#C15F3C]/10 to-transparent p-8 rounded-sm border border-[#e0dbd5]">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C15F3C] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                🤝
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2d2926] mb-2">Diversity and Inclusion</h3>
                {diversitySection ? (
                  <p className="text-sm text-[#5a5651] leading-relaxed">
                    {diversitySection.description}
                  </p>
                ) : (
                  <p className="text-sm text-[#5a5651]">Loading content...</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Our Culture Section */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-[#e0dbd5]">
            <div className="h-[320px] bg-gradient-to-br from-[#C15F3C]/20 to-[#B1ADA1]/25 flex items-center justify-center">
              <svg width="140" height="100" viewBox="0 0 120 80" fill="rgba(193,95,60,.35)">
                <ellipse cx="20" cy="25" rx="10" ry="12"/><path d="M2 80 Q6 50 20 44 Q34 50 38 80Z"/>
                <ellipse cx="45" cy="22" rx="11" ry="13"/><path d="M26 80 Q30 48 45 41 Q60 48 64 80Z"/>
                <ellipse cx="70" cy="25" rx="10" ry="12"/><path d="M52 80 Q56 50 70 44 Q84 50 88 80Z"/>
                <ellipse cx="95" cy="23" rx="11" ry="13"/><path d="M76 80 Q80 49 95 42 Q110 49 114 80Z"/>
              </svg>
            </div>
            <div className="bg-white p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-[#2d2926] mb-4">Our Culture</h2>
              {cultureSection ? (
                <p className="text-sm text-[#5a5651] leading-relaxed">
                  {cultureSection.description}
                </p>
              ) : (
                <p className="text-sm text-[#5a5651]">Loading content...</p>
              )}
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

      {/* Add animation styles */}
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