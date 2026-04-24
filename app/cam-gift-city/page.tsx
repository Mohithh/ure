// app/cam-gift-city/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the type for an offering item from the API
interface ApiOffering {
  name: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Helper function to check if an offering item contains the special AMC/AIFs structure
function isComplexOffering(name: string): boolean {
  const complexKeywords = ['End-to-end assistance', 'AMC', 'AIFs', 'IFSC Banking Units', 'Foreign university'];
  return complexKeywords.some(keyword => name.includes(keyword));
}

// Helper function to parse complex offering items into main point + sub-points
function parseComplexOffering(name: string): { main: string; subItems: string[] } | null {
  if (name.includes('End-to-end assistance') && name.includes('i.')) {
    const subItems: string[] = [];
    const patterns = [
      /i\.\s*([^i.]+)/,
      /ii\.\s*([^i.]+)/,
      /iii\.\s*([^i.]+)/,
      /iv\.\s*([^i.]+)/,
      /v\.\s*([^i.]+)/
    ];
    
    patterns.forEach(pattern => {
      const match = name.match(pattern);
      if (match && match[1]) {
        subItems.push(match[1].trim());
      }
    });
    
    if (subItems.length > 0) {
      return {
        main: 'End-to-end assistance in setting and structuring',
        subItems: subItems
      };
    }
  }
  return null;
}

// Helper function to format offering text for display
function formatOfferingText(name: string): string {
  let formatted = name.replace(/\s*[ivx]+\.\s*/gi, '');
  formatted = formatted.replace(/\s*\d+\.\s*/g, '');
  return formatted.trim();
}

export default function CAMGiftCityPage() {
  const [offerings, setOfferings] = useState<ApiOffering[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOfferings() {
      try {
        const res = await fetch('https://cms.urelegal.in/api/content/items/Offeringcamgiftcity', {
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch offerings: ${res.status}`);
        }
        
        const data = await res.json();
        setOfferings(data);
      } catch (error) {
        console.error('Error fetching offerings data:', error);
        setOfferings([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchOfferings();
  }, []);

  const renderOfferings = () => {
    return offerings.map((offering, index) => {
      const complexData = parseComplexOffering(offering.name);
      
      if (complexData) {
        return (
          <div key={offering._id || index} className="mb-6">
            <p className="text-sm font-semibold text-[#2d2926] mb-2">{complexData.main}</p>
            <ul className="space-y-1 pl-4">
              {complexData.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="text-sm text-[#5a5651] flex items-start gap-2">
                  <span className="text-[#C15F3C]">{String.fromCharCode(97 + subIndex)}.</span>
                  <span>{subItem}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      } else {
        return (
          <div key={offering._id || index} className="flex items-center gap-2 group">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all" />
            <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
              {formatOfferingText(offering.name)}
            </span>
          </div>
        );
      }
    });
  };

  if (loading) {
    return (
      <div className="bg-[#F4F3EE] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#C15F3C] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#5a5651]">Loading...</p>
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
            CAM GIFT City
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            India's first International Financial Services Centre
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Introduction */}
            <div>
              <div className="w-12 h-[1px] bg-[#C15F3C]/40 mb-5" />
              <p className="text-[#2d2926] text-base leading-relaxed mb-4">
                The Government of India has established IFSC in Gujarat namely{' '}
                <span className="font-semibold text-[#C15F3C]">Gujarat International Finance Tec-City (GIFT)</span>{' '}
                in Gandhinagar, Gujarat. GIFT is being developed as a global financial and IT Services hub, 
                a first of its kind in India, designed to be at or above par with globally benchmarked 
                financial centres.
              </p>
              <p className="text-[#5a5651] text-sm leading-relaxed">
                GIFT IFSC has the potential to become an investment gateway for India as apart from providing 
                a global financial platform, it also provides an easy access to the fast-growing Indian 
                economy to global investors.
              </p>
            </div>

            {/* Team Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
                Our Team
              </h2>
              <p className="text-[#5a5651] text-sm leading-relaxed">
                CAM GIFT City has a team of <span className="font-semibold text-[#2d2926]">5+ lawyers</span>, 
                with <span className="font-semibold text-[#2d2926]">2 resident partners</span>. In addition 
                to this, various team members of the Firm have been advising an array of stakeholders 
                vis-à-vis the IFSC, GIFT City including the IFSC Authority. We also have a team of erstwhile 
                regulators with expertise in the financial services sector bringing with them indispensable 
                knowledge and understanding of the sector.
              </p>
            </div>

            {/* Our Offering Section */}
            <div>
              <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
                Our Offering
              </h2>
              
              <div className="bg-white border border-[#e0dbd5] rounded-sm p-8">
                {offerings.length > 0 ? (
                  <div className="space-y-4">
                    {renderOfferings()}
                  </div>
                ) : (
                  <p className="text-[#5a5651] text-center py-8">No offerings data available at the moment.</p>
                )}
              </div>
            </div>

            {/* Resident Partners */}
            <div>
              <p className="text-sm text-[#5a5651]">
                CAM GIFT City resident partners are{' '}
                <Link href="#" className="text-[#C15F3C] hover:underline font-medium">
                  Ketaki Gor Mehta
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-[#C15F3C] hover:underline font-medium">
                  Alok Sonkar
                </Link>.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar */}
          <div className="space-y-8">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link href="#" className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
                <span className="text-xs text-[#5a5651] group-hover:text-white">in</span>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
                <span className="text-xs text-[#5a5651] group-hover:text-white">X</span>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
                <span className="text-xs text-[#5a5651] group-hover:text-white">f</span>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
                <span className="text-xs text-[#5a5651] group-hover:text-white">yt</span>
              </Link>
              <div className="flex-1" />
              <button className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#5a5651] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </button>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-[#e0dbd5] rounded-sm p-6">
              <h3 className="text-lg font-semibold text-[#2d2926] mb-3">Contact Us</h3>
              <p className="text-sm text-[#5a5651] mb-5 leading-relaxed">
                For inquiries, please fill in the form below and one of our experts will revert shortly.
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  className="w-full px-4 py-2 bg-[#F4F3EE] border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email ID *" 
                  className="w-full px-4 py-2 bg-[#F4F3EE] border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                />
                <textarea 
                  placeholder="Your Message *" 
                  rows={4}
                  className="w-full px-4 py-2 bg-[#F4F3EE] border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all resize-none"
                />
                <button className="w-full bg-[#C15F3C] text-white py-2.5 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-[1.02] shadow-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

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

      {/* Animation styles */}
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