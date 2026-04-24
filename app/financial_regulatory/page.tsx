'use client';

import Image from 'next/image';
import Link from 'next/link';

// Key Contacts Data
const keyContacts = [
  {
    name: 'L Viswanathan',
    title: 'Senior Partner',
    email: 'l.viswanathan@cyrilshroff.com',
    initials: 'LV',
  },
  {
    name: 'Anu Tiwari',
    title: 'Partner (Head – Fintech and Financial Services)',
    email: 'anu.tiwari@cyrilshroff.com',
    initials: 'AT',
  },
];

// Stand Out Deals
const deals = [
  {
    title: 'Cyril Amarchand Mangaldas represented Bybit Technology Limited.',
    date: '10/09/2025',
    categories: ['Financial Regulatory'],
  },
  {
    title: 'CAM acted as Indian legal counsel to Dr. Agarwal\'s Health Care Limited',
    date: '11/02/2025',
    categories: ['Capital Markets', 'Financial Regulatory'],
  },
  {
    title: 'CAM acted as legal advisors to Ashoka Buildcon Limited and Ashoka Concessions Limited',
    date: '20/01/2025',
    categories: ['Financial Regulatory', 'Corporate'],
  },
];

// Latest Updates
const updates = [
  {
    title: 'FIG Bulletin: October – December 2025',
    type: 'download',
    icon: '📥',
  },
  {
    title: 'Alert: Madras High Court Recognises Cryptocurrency as Property under Indian Law',
    type: 'download',
    icon: '📄',
  },
  {
    title: 'FIG Bulletin: April – September 2025',
    type: 'download',
    icon: '📥',
  },
  {
    title: 'Alert: RBI Introduces Consolidated Framework for Payment Aggregators',
    type: 'download',
    icon: '📄',
  },
];

// Core Services
const services = [
  'Regulatory Compliance',
  'Risk Mitigation',
  'Regulatory Enforcement',
  'Regulatory Disputes',
  'Fintech Advisory',
  'Financial Services Licensing',
  'Cross-border Regulations',
  'Policy Advocacy',
];

// Key Strengths
const strengths = [
  {
    title: '11+',
    subtitle: 'Dedicated Lawyers',
    description: 'An inimitable team of dedicated financial regulatory experts',
  },
  {
    title: 'Ex-Regulators',
    subtitle: 'Valuable Insight',
    description: 'Senior ex-regulators strengthen our sector proficiency',
  },
  {
    title: '360°',
    subtitle: 'Comprehensive Advice',
    description: 'Reliable end-to-end solutions across all regulatory matters',
  },
];

export default function FinancialRegulatoryPage() {
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
            Financial Regulatory
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Full-spectrum advice with end-to-end solutions
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Introduction Section - Different Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <p className="text-[#2d2926] text-lg leading-relaxed mb-4">
              CAM's Financial Regulatory Practice leverages its deep understanding of the risks and 
              opportunities that come with India's complex and ever-evolving regulatory environment to 
              provide clients with comprehensive and timely advice.
            </p>
            <p className="text-[#5a5651] leading-relaxed mb-4">
              As a key unit of India's leading law firm, we ensure our end-to-end legal solutions across 
              all stages help our clients achieve their business goals. Our integrated approach to financial 
              regulation – spanning contentious and non-contentious matters – helps us deliver well-rounded 
              and strategic advice.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              We integrate advisory with continued support and representation through regulatory and judicial 
              proceedings to help our clients anticipate, navigate, and mitigate their regulatory concerns 
              and risks.
            </p>
          </div>
          
          <div className="bg-[#C15F3C] p-6 rounded-sm flex flex-col justify-center items-center text-center text-white">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed">
              We advise on all aspects of regulatory compliance, risk mitigation, and regulatory enforcement 
              and disputes.
            </p>
          </div>
        </div>

        {/* Key Strengths - Stats Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Our Strengths
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((strength, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-8 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl font-bold text-[#C15F3C] mb-2 group-hover:scale-110 transition-transform">
                  {strength.title}
                </div>
                <div className="text-sm font-semibold text-[#2d2926] mb-3 uppercase tracking-wide">
                  {strength.subtitle}
                </div>
                <p className="text-xs text-[#5a5651]">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services We Offer - Alternating layout */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
                What We Do
              </h2>
              <p className="text-[#5a5651] mb-6 leading-relaxed">
                We are an inimitable team that draws on valuable insight, experience, and depth of senior 
                ex-regulators that strengthens our sector proficiency and helps deliver reliable 360-degree 
                advice. We ensure that our clients stay ahead in the involute, ever-transforming world of 
                equity and debt securities.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                    <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-8 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚖️</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2d2926] mb-2">Integrated Approach</h3>
                  <p className="text-sm text-[#5a5651] leading-relaxed">
                    Our integrated approach to financial regulation – spanning contentious and non-contentious 
                    matters – helps us deliver well-rounded and strategic advice. We integrate advisory with 
                    continued support and representation through regulatory and judicial proceedings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stand Out Deals + Latest Updates - Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Stand Out Deals */}
          <div>
            <hr className="border-[#d8d3d3] mb-8" />
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#2d2926] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
                Stand Out Deals
              </h2>
              <Link 
                href="/deals" 
                className="text-[#C15F3C] text-xs font-semibold hover:underline transition-all"
              >
                View All →
              </Link>
            </div>
            
            <div className="space-y-4">
              {deals.map((deal, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-[#e0dbd5] rounded-sm p-5 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                    <h3 className="text-[#2d2926] font-semibold text-sm leading-relaxed group-hover:text-[#C15F3C] transition-colors">
                      {deal.title}
                    </h3>
                    <span className="text-[#B1ADA1] text-xs whitespace-nowrap">{deal.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {deal.categories.map((cat, catIdx) => (
                      <span 
                        key={catIdx}
                        className="text-[9px] px-2 py-1 bg-[#F4F3EE] text-[#5a5651] rounded-sm font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Updates */}
          <div>
            <hr className="border-[#d8d3d3] mb-8" />
            <h2 className="text-xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Latest Updates
            </h2>
            
            <div className="space-y-3">
              {updates.map((update, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between bg-white border border-[#e0dbd5] rounded-sm p-4 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl">{update.icon}</div>
                    <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                      {update.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#C15F3C] font-semibold uppercase tracking-wider">
                      {update.type}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#C15F3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Print/Mail Icons */}
            <div className="flex justify-end gap-3 mt-6">
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
          </div>
        </div>

        {/* Key Contacts Section - Different layout */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-12" />
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
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

        {/* Newsletter CTA - Enhanced */}
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