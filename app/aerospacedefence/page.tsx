'use client';

import Image from 'next/image';
import Link from 'next/link';

// Key Contacts Data
const keyContacts = [
  {
    name: 'Anandita Kaushik',
    title: 'Partner',
    email: 'anandita.kaushik@cyrilshroff.com',
    initials: 'AK',
  },
];

// Latest Updates
const updates = [
  {
    title: 'New Defence Acquisition Procedure 2025: Key Changes and Implications',
    type: 'Alert',
    icon: '📄',
  },
  {
    title: 'Make in India: New Incentives for Defence Manufacturing',
    type: 'Update',
    icon: '📋',
  },
  {
    title: 'FDI Policy Reforms in Aerospace & Defence Sector',
    type: 'Alert',
    icon: '📄',
  },
  {
    title: 'Offset Guidelines for Defence Contracts – What\'s New?',
    type: 'Publication',
    icon: '📘',
  },
];

// Key Statistics
const stats = [
  {
    number: '20+',
    label: 'Years of Experience',
  },
  {
    number: '100+',
    label: 'Clients Advised',
  },
  {
    number: '50+',
    label: 'Cross-Border Deals',
  },
  {
    number: '₹10K+ Cr',
    label: 'Deal Value',
  },
];

// Services Offered
const services = [
  'Market Entry Strategies',
  'Regulatory Hurdles Advisory',
  'Licensing & Compliance',
  'Procurement Processes',
  'Offset Management',
  'Integrity Obligations',
  'Day-to-Day Business Operations',
  'FDI Approvals',
  'Joint Ventures',
  'Technology Collaborations',
  'Import-Export Authorisations',
  'Stake Sales & Listing',
  'R&D Support',
  'Manufacturing Set-up',
  'Make-in-India Qualification',
  'Fundraising & Expansion',
];

// Key Sectors
const sectors = [
  'Commercial Aerospace',
  'Defence Manufacturing',
  'Space Technology',
  'Unmanned Systems (Drones)',
  'Missile Systems',
  'Aircraft Manufacturing',
  'MRO (Maintenance, Repair & Overhaul)',
  'Avionics & Electronics',
  'Naval Defence Systems',
  'Land Defence Systems',
  'Cyber Defence',
  'Space Exploration',
];

// Why Choose Us Points
const whyChooseUs = [
  {
    icon: '✈️',
    title: 'Two Decades of Experience',
    description: 'Guidance on aerospace & defence sectors for over 20 years',
  },
  {
    icon: '🛡️',
    title: 'Policy Leadership',
    description: 'Spearheaded policy and advised on market entry strategies',
  },
  {
    icon: '🤝',
    title: 'Cross-Practice Integration',
    description: 'Members from corporate, litigation, IP, tax, employment, antitrust practices',
  },
  {
    icon: '🇮🇳',
    title: 'Make-in-India Expertise',
    description: 'End-to-end guidance on manufacturing set-up and qualification',
  },
];

// Growth Stages
const growthStages = [
  {
    stage: 'R&D & Manufacturing',
    description: 'Set-up, tender, and Make-in-India qualification',
    icon: '🔬',
  },
  {
    stage: 'Fundraising & Expansion',
    description: 'Capital raising and business growth support',
    icon: '💰',
  },
  {
    stage: 'Technology Collaborations',
    description: 'Import-export authorisations and partnerships',
    icon: '🤝',
  },
  {
    stage: 'Exit & Listing',
    description: 'Stake sales and public market listings',
    icon: '📈',
  },
];

export default function AerospaceDefencePage() {
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
            Aerospace & Defence
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Helping clients steer through complex and ever-changing legal regime
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
              CAM leverages the experience of lawyers providing guidance on the aerospace & defence sectors 
              for two decades. Our aerospace & defence team has spearheaded policy and advised international 
              and domestic clients on market entry strategies and collaborations.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              We provide comprehensive guidance on regulatory hurdles, licensing, procurement processes, 
              offsets, integrity obligations, and day-to-day business operations. With members from the 
              corporate, litigation, intellectual property, taxation, employment, and antitrust practices 
              on the team, we bring our clients additional value and a range of holistic and innovative 
              solutions.
            </p>
            <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-5 mt-4">
              <p className="text-sm text-[#2d2926] leading-relaxed">
                <span className="font-semibold text-[#C15F3C]">Our expertise</span> includes navigating 
                the complexities of FDI approvals, licensing and compliances, joint ventures and 
                procurement deals.
              </p>
            </div>
          </div>
          
          <div className="bg-[#C15F3C] p-6 rounded-sm flex flex-col justify-center items-center text-center text-white">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed">
              In-depth advice on regulatory matters, evolving policy landscape, transactions, and related matters
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

        {/* Growth Stages Banner */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Handholding Through Every Stage of Growth
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {growthStages.map((stage, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-5 text-center hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {stage.icon}
                </div>
                <h3 className="text-base font-semibold text-[#C15F3C] mb-2">{stage.stage}</h3>
                <p className="text-xs text-[#5a5651] leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Sectors - Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Services We Offer
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              Comprehensive legal guidance across the aerospace & defence value chain:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-pointer bg-white border border-[#e0dbd5] rounded-sm p-2 hover:shadow-md transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Sectors */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Key Sectors We Cover
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              Specialized expertise across diverse aerospace & defence segments:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {sectors.map((sector, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-pointer bg-white border border-[#e0dbd5] rounded-sm p-2 hover:shadow-md transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us - Four Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-4 gap-5">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-5 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#C15F3C] mb-2">{item.title}</h3>
                <p className="text-xs text-[#5a5651] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Practice Team Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#C15F3C]/10 to-transparent p-8 rounded-sm border border-[#e0dbd5]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C15F3C] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                👥
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#2d2926] mb-2">Integrated Cross-Practice Team</h3>
                <p className="text-sm text-[#5a5651] leading-relaxed">
                  With members from Corporate, Litigation, Intellectual Property, Taxation, Employment, 
                  and Antitrust practices, we bring our clients additional value and a range of holistic 
                  and innovative solutions tailored to the unique challenges of the aerospace & defence sector.
                </p>
              </div>
            </div>
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