'use client';

import Image from 'next/image';
import Link from 'next/link';

// Key Contacts Data
const keyContacts = [
  {
    name: 'Cyril Shroff',
    title: 'Managing Partner',
    email: 'cyril.shroff@cyrilshroff.com',
    initials: 'CS',
  },
  {
    name: 'Shaneen Parikh',
    title: 'Partner (Head - International Arbitration)',
    email: 'shaneen.parikh@cyrilshroff.com',
    initials: 'SP',
  },
];

// Publications Data
const publications = [
  {
    title: 'Judicial Developments under the Arbitration Act',
    type: 'download',
    icon: '📘',
  },
  {
    title: 'Dispute Resolution Year Book: Navigating the Disputes Landscape in 2024',
    type: 'download',
    icon: '📕',
  },
  {
    title: 'Guide to Arbitration in India',
    type: 'download',
    icon: '📗',
  },
  {
    title: 'Institutional Arbitration Rules: A Comparative Analysis',
    type: 'download',
    icon: '📙',
  },
];

// Sectors We Serve
const sectors = [
  'Energy',
  'Banking & Finance',
  'Construction & Infrastructure',
  'Manufacturing',
  'Pharmaceuticals',
  'Technology & Telecommunications',
  'Joint Ventures',
  'Mergers & Acquisitions',
];

// Arbitration Institutions
const institutions = [
  'HKIAC (Hong Kong)',
  'ICC (International)',
  'ICSID (World Bank)',
  'LCIA (London)',
  'MCIA (Mumbai)',
  'SIAC (Singapore)',
  'Emergency Arbitrator Proceedings',
  'Ad Hoc Arbitrations',
];

// Key Strengths
const strengths = [
  {
    title: 'Most-Preferred',
    subtitle: 'Complex Arbitrations',
    description: 'India\'s most-preferred law firm for complex and commercially sensitive arbitrations',
  },
  {
    title: 'Landmark Rulings',
    subtitle: 'Jurisdiction Setters',
    description: 'Several landmark arbitration-related court rulings including 2015 amendments applicability',
  },
  {
    title: 'Thought Leaders',
    subtitle: 'Global Recognition',
    description: 'Associated with ICCA, IBA, ILA, ICC, HKIAC, LCIA, MCIA, and SIAC',
  },
];

// Why Choose Us Points
const whyChooseUs = [
  {
    icon: '⚡',
    title: 'Efficient Advice',
    description: 'Provide efficient advice on disputes across sectors',
  },
  {
    icon: '🚨',
    title: 'Urgent Proceedings',
    description: 'Represent clients in urgent and business-critical arbitration proceedings',
  },
  {
    icon: '🎯',
    title: 'Tailored Teams',
    description: 'Assemble fit-for-purpose and cross-practice teams tailored to client\'s needs',
  },
];

export default function ArbitrationPage() {
  return (
    <div className="bg-[#F4F3EE]">
      {/* HERO SECTION - Centered */}
      <div className="relative w-full min-h-[400px] bg-gradient-to-br from-[#2d2926] to-[#4a3b35] flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#C15F3C] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#C15F3C] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            Arbitration
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            India's most-preferred law firm for complex and commercially sensitive arbitrations
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Introduction Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[#2d2926] text-lg leading-relaxed">
              Our arbitration team comprises specialists with extensive multi-sector experience in domestic, 
              commercial, and investor-state arbitration.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              Leading firms across key industries and sectors, including energy, banking and finance, 
              construction and infrastructure, manufacturing, pharmaceuticals, technology and telecommunications, 
              turn to our team first for effective resolution in joint venture and M&A disputes and tough 
              bet-the-company cases.
            </p>
            <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-5 mt-4">
              <p className="text-sm text-[#2d2926] leading-relaxed">
                <span className="font-semibold text-[#C15F3C]">Our expertise</span> not only spans ad hoc 
                and institutional arbitrations before HKIAC, ICC, ICSID, LCIA, MCIA, and SIAC but also 
                emergency arbitrator proceedings.
              </p>
            </div>
          </div>
          
          <div className="bg-[#C15F3C] p-6 rounded-sm flex flex-col justify-center items-center text-center text-white">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed">
              Regularly appear before courts for arbitrator appointments, interim measures, evidence assistance, 
              award challenges, and enforcement
            </p>
          </div>
        </div>

        {/* Key Strengths - Three Column */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Our Distinction
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((strength, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-8 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl font-bold text-[#C15F3C] mb-3 group-hover:scale-110 transition-transform">
                  {strength.title}
                </div>
                <div className="text-sm font-semibold text-[#2d2926] mb-3 uppercase tracking-wide">
                  {strength.subtitle}
                </div>
                <p className="text-xs text-[#5a5651] leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors & Institutions - Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Sectors We Serve */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Sectors We Serve
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              We provide efficient advice on disputes across key sectors:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {sectors.map((sector, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Arbitration Institutions */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Institutions & Venues
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              Our expertise spans ad hoc and institutional arbitrations before:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {institutions.map((institution, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {institution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us - Three Icon Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-6 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#C15F3C] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5a5651] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thought Leaders Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#C15F3C]/10 to-transparent p-8 rounded-sm border border-[#e0dbd5]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C15F3C] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                ★
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#2d2926] mb-2">Well-established & Acclaimed Thought Leaders</h3>
                <p className="text-sm text-[#5a5651] leading-relaxed">
                  Our partners are associated with leading arbitral institutions and organisations, including the 
                  International Council for Commercial Arbitration (ICCA), the International Bar Association (IBA), 
                  the International Law Association (ILA), ICC, HKIAC, LCIA, MCIA, and SIAC.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#2d2926] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Latest Updates & Publications
            </h2>
            <Link 
              href="/publications" 
              className="text-[#C15F3C] text-sm font-semibold hover:underline transition-all"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-5 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{pub.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-[#2d2926] font-semibold text-sm leading-relaxed mb-2 group-hover:text-[#C15F3C] transition-colors">
                      {pub.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#C15F3C] font-semibold uppercase tracking-wider">
                        {pub.type}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#C15F3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                  </div>
                </div>
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

        {/* Key Contacts Section */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-12" />
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-10 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Key Contacts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {keyContacts.map((contact, idx) => (
              <div key={idx} className="bg-white border border-[#e0dbd5] rounded-sm p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-105 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #C15F3C, #8B3A1E)' }}
                  >
                    {contact.initials}
                  </div>
                  <h3 className="text-[#2d2926] font-semibold text-xl mb-1">{contact.name}</h3>
                  <p className="text-[#C15F3C] text-sm mb-4">{contact.title}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#5a5651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${contact.email}`} className="text-[#5a5651] text-sm hover:text-[#C15F3C] transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-[#C15F3C] text-sm font-semibold border-t border-[#f0e6e0] pt-4 w-full justify-center hover:gap-3 transition-all"
                  >
                    Get in touch
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
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
    </div>
  );
}