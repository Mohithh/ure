'use client';

import Image from 'next/image';
import Link from 'next/link';

// Key Contacts Data
const keyContacts = [
  {
    name: 'Yash J. Ashar',
    title: 'Senior Partner',
    email: 'yash.ashar@cyrilshroff.com',
    initials: 'YA',
  },
];

// Latest Updates
const updates = [
  {
    title: 'The Need for Speed – Fast Track Mergers Incremental Change or Next Gen Reform?',
    type: 'Alert',
    icon: '📄',
  },
  {
    title: 'SEBI\'s New Framework on Insider Trading: Key Changes and Implications',
    type: 'Alert',
    icon: '📄',
  },
  {
    title: 'RBI\'s Foreign Exchange Management (Non-debt Instruments) Amendment Rules 2025',
    type: 'Update',
    icon: '📋',
  },
  {
    title: 'SEBI Circular on Strengthening Corporate Governance Framework',
    type: 'Circular',
    icon: '📢',
  },
];

// Key Statistics
const stats = [
  {
    number: '10+',
    label: 'Dedicated Lawyers',
  },
  {
    number: '100+',
    label: 'Regulatory Engagements',
  },
  {
    number: '50+',
    label: 'Cross-Border Deals',
  },
  {
    number: '15+',
    label: 'Years Market Leadership',
  },
];

// Regulatory Bodies
const regulatoryBodies = [
  'Securities and Exchange Board of India (SEBI)',
  'Reserve Bank of India (RBI)',
  'Ministry of Corporate Affairs (MCA)',
  'Stock Exchanges (BSE, NSE)',
  'Depositories (NSDL, CDSL)',
  'International Organization of Securities Commissions (IOSCO)',
];

// Practice Areas
const practiceAreas = [
  'Regulatory Compliance & Advisory',
  'Risk Mitigation Strategies',
  'Regulatory Enforcement Actions',
  'Dispute Resolution (SEBI/RBI)',
  'Cross-Border Transaction Advisory',
  'Structuring & Approvals',
  'Reporting & Disclosures',
  'Insider Trading Regulations',
  'Takeover Code (SAST)',
  'Listing Obligations & Disclosures',
  'Foreign Portfolio Investors (FPI)',
  'Foreign Direct Investment (FDI)',
  'Investment Advisors Regulations',
  'Research Analysts Regulations',
];

// Why Choose Us Points
const whyChooseUs = [
  {
    icon: '🏆',
    title: 'Market Leaders',
    description: 'Pioneered strategies to protect clients from complex regulatory frameworks',
  },
  {
    icon: '⭐',
    title: 'Ex-Regulators',
    description: 'Senior ex-regulators add valuable insight and depth to our advice',
  },
  {
    icon: '🌍',
    title: 'Cross-Border Expertise',
    description: 'Pan-India presence anticipating domestic and international regulatory developments',
  },
  {
    icon: '🔄',
    title: 'End-to-End Solutions',
    description: 'Complete legal solutions across compliance, risk mitigation and disputes',
  },
];

// Key Regulatory Milestones
const milestones = [
  {
    year: '2024',
    title: 'Advised on first-ever green bond listing on IFSC',
    description: 'Pioneering sustainable finance regulatory framework',
  },
  {
    year: '2023',
    title: 'SEBI Insider Trading Amendments',
    description: 'Led industry consultation on key regulatory changes',
  },
  {
    year: '2022',
    title: 'Cross-border Merger Regulations',
    description: 'Advised on first cross-border merger under new framework',
  },
  {
    year: '2021',
    title: 'SPAC Listing Framework',
    description: 'Pioneering regulatory guidance for SPAC listings in India',
  },
];

export default function SecuritiesMarketsRegulatoryPage() {
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
            Securities Markets Regulatory
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Market leaders in navigating the regulatory maze
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
              In the complicated and ever-evolving regulatory landscape, our Financial Regulatory practice 
              has pioneered strategies to protect clients from the vagaries of a complex and constantly 
              expanding framework.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              With these strategies, we leverage our forte to provide end-to-end legal solutions to our 
              clients and advise on all aspects of compliance, risk mitigation, regulatory enforcement 
              and disputes.
            </p>
            <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-5 mt-4">
              <p className="text-sm text-[#2d2926] leading-relaxed">
                <span className="font-semibold text-[#C15F3C]">Our expertise</span> in handling big ticket 
                cross-border transactions, facilitated by our pan-India presence, allows us to anticipate 
                developments in regulatory and compliance framework in both domestic and international markets.
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
              Specialist advice on regulatory aspects of transactions including structuring, approvals, 
              reporting and disclosures
            </p>
          </div>
        </div>

        {/* Stats Section - Number Cards */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#C15F3C] mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xs text-[#5a5651] uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Areas - Full Width Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Practice Areas
          </h2>
          <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
            We advise on all aspects of securities markets regulation, including:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {practiceAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-pointer bg-white border border-[#e0dbd5] rounded-sm p-3 hover:shadow-md transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Bodies & Why Choose Us - Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Regulatory Bodies */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Key Regulatory Bodies
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              We regularly engage with and advise on matters before:
            </p>
            <div className="space-y-3">
              {regulatoryBodies.map((body, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-pointer bg-white border border-[#e0dbd5] rounded-sm p-3 hover:shadow-md transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#C15F3C] group-hover:w-3 group-hover:h-3 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {body}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Why Choose Us
            </h2>
            <div className="space-y-4">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#e0dbd5] rounded-sm p-4 hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#C15F3C] mb-1">{item.title}</h3>
                      <p className="text-xs text-[#5a5651] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Strength Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#C15F3C] to-[#8B3A1E] p-8 rounded-sm text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl shrink-0">
                  👥
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Inimitable Team with Ex-Regulators</h3>
                  <p className="text-white/80 text-sm">
                    Our sector proficiency is reinforced by senior ex-regulators who add valuable insight, 
                    experience and depth to the 360-degree advice we offer
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-white/80">Dedicated Lawyers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Regulatory Milestones */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Key Regulatory Milestones
          </h2>
          
          <div className="grid md:grid-cols-4 gap-5">
            {milestones.map((milestone, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-5 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-2xl font-bold text-[#C15F3C] mb-2 group-hover:scale-110 transition-transform inline-block">
                  {milestone.year}
                </div>
                <h3 className="text-sm font-semibold text-[#2d2926] mb-2 leading-tight">
                  {milestone.title}
                </h3>
                <p className="text-xs text-[#5a5651] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Updates Section */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#2d2926] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Latest Updates
            </h2>
            <Link 
              href="/publications" 
              className="text-[#C15F3C] text-sm font-semibold hover:underline transition-all"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {updates.map((update, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-5 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{update.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-[#2d2926] font-semibold text-sm leading-relaxed mb-2 group-hover:text-[#C15F3C] transition-colors">
                      {update.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#C15F3C] font-semibold uppercase tracking-wider">
                        {update.type}
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

        {/* Key Contacts Section - Single Contact Centered */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-12" />
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-10 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Key Contact
          </h2>
          
          <div className="max-w-md mx-auto">
            {keyContacts.map((contact, idx) => (
              <div key={idx} className="bg-white border border-[#e0dbd5] rounded-sm p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-5 group-hover:scale-105 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #C15F3C, #8B3A1E)' }}
                  >
                    {contact.initials}
                  </div>
                  <h3 className="text-[#2d2926] font-semibold text-2xl mb-2">{contact.name}</h3>
                  <p className="text-[#C15F3C] text-sm mb-5">{contact.title}</p>
                  <div className="flex items-center gap-2 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#5a5651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${contact.email}`} className="text-[#5a5651] text-sm hover:text-[#C15F3C] transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-[#C15F3C] text-sm font-semibold border-t border-[#f0e6e0] pt-5 w-full justify-center hover:gap-3 transition-all"
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