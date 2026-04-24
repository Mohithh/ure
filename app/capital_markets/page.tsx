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
  {
    name: 'Manan Lahoty',
    title: 'Partner (Head - Capital Markets)',
    email: 'manan.lahoty@cyrilshroff.com',
    initials: 'ML',
  },
];

// Stand Out Deals
const deals = [
  {
    title: 'Cyril Amarchand Mangaldas advised Healthcare Global Enterprises Limited on their rights issue of equity shares',
    date: '09/04/2026',
    categories: ['Capital Markets', 'Pharmaceuticals, Healthcare & Life Sciences'],
  },
  {
    title: 'Cyril Amarchand Mangaldas acted as the Indian legal counsel to Powerica Limited on its IPO of INR 11,000 million',
    date: '07/04/2026',
    categories: ['Capital Markets'],
  },
  {
    title: 'Cyril Amarchand Mangaldas acted in relation to fifth round of fundraiser by NHIT through institutional placement of units to eligible investors aggregating to an amount of INR 24,688.08 million, and through a preferential allotment of its units aggregating to an amount of INR 6,172.02 million',
    date: '31/03/2026',
    categories: ['Capital Markets'],
  },
];

// Latest Updates & Publications
const updates = [
  {
    title: 'Unlocking IPOs: SEBI\'s ICDR Alert: Amendments on Encumbered Share Lock-ins and Streamlined Abridged Prospectus',
    type: 'Alert',
    icon: '📄',
  },
  {
    title: 'The Need for Speed – Fast Track Mergers Incremental Change or Next Gen Reform?',
    type: 'Alert',
    icon: '📄',
  },
  {
    title: 'Digital Handbook on Listing in India',
    type: 'Publications',
    icon: '📘',
  },
  {
    title: 'De\'constructing InvITs and REITs',
    type: 'Publications',
    icon: '📕',
  },
  {
    title: 'Handbook on Listing in India',
    type: 'Publications',
    icon: '📗',
  },
];

// Capital Markets Products
const products = [
  'Initial Public Offerings (IPO)',
  'Follow-on Public Offers (FPO)',
  'Rights Issues',
  'Qualified Institutional Placements (QIP)',
  'Preferential Allotments',
  'Offer for Sale (OFS)',
  'American Depository Receipts (ADR)',
  'Global Depository Receipts (GDR)',
  'Foreign Currency Convertible Bonds (FCCB)',
  'Real Estate Investment Trusts (REITs)',
  'Infrastructure Investment Trusts (InvITs)',
  'Private Placements',
  'Bonus Issues & Stock Splits',
  'Buybacks & Delisting',
];

// Key Statistics
const stats = [
  {
    number: '30+',
    label: 'Years of Leadership',
  },
  {
    number: '500+',
    label: 'Capital Raisings',
  },
  {
    number: '₹2L+ Cr',
    label: 'Total Deal Value',
  },
  {
    number: '#1',
    label: 'Ranked Practice',
  },
];

// Why Choose Us Points
const whyChooseUs = [
  {
    icon: '🏆',
    title: 'Top-Tier Ranking',
    description: 'Consistently ranked in the top-most band of capital markets practitioners in India',
  },
  {
    icon: '🚀',
    title: 'Pioneering Structures',
    description: 'Pioneering novel structures for sophisticated client base',
  },
  {
    icon: '📋',
    title: 'Regulatory Expertise',
    description: 'Actively contributed to evolution of Indian securities laws with SEBI, RBI, MCA',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Expertise in ADRs, GDRs, foreign listings and cross-border transactions',
  },
];

// Client Types
const clientTypes = [
  'Unlisted Corporates (First-time Issuers)',
  'Listed Corporates',
  'Merchant Bankers',
  'Stock Brokers',
  'Portfolio Managers',
  'Investment Banks',
  'Private Equity Firms',
  'Venture Capital Funds',
  'Family Offices',
  'Anchor Investors',
];

// Regulatory Bodies Collaborated With
const regulatoryBodies = [
  'Securities and Exchange Board of India (SEBI)',
  'Reserve Bank of India (RBI)',
  'Competition Commission of India (CCI)',
  'Ministry of Corporate Affairs (MCA)',
  'Ministry of Finance',
];

export default function CapitalMarketsPage() {
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
            Capital Markets
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            The vocabulary of fund-raising techniques we set today, are followed by markets tomorrow
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
              Our Capital Markets team comprises specialized securities lawyers who are regarded as the 
              best in India, with an outstanding reputation for handling a broad spectrum of transactions 
              and clients.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              Our core clientele includes issuers from a variety of sectors as well as securities market 
              intermediaries such as merchant bankers, stock brokers and portfolio managers. Through our 
              Capital Markets practice, we offer our clients — whether they are unlisted corporates tapping 
              markets for the first time or a listed corporate exploring more complex, multi-source solutions 
              — structures and flexibility to raise any form of finance they need.
            </p>
            <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-5 mt-4">
              <p className="text-sm text-[#2d2926] leading-relaxed">
                <span className="font-semibold text-[#C15F3C]">Over the years</span>, our lawyers have had 
                a prominent role in many of the developments that have transformed Indian capital markets, 
                most notably, growth of the public markets, development of niche products such as REITs 
                and InvITs and globalization of capital markets through depository receipts and foreign listing.
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
              Raising of capital, both equity and debt, combined with comprehensive financial regulatory practice
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

        {/* Capital Markets Products - Full Width Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Products & Services
          </h2>
          <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
            Our Markets practice spans raising of capital, both equity and debt, including:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-pointer bg-white border border-[#e0dbd5] rounded-sm p-3 hover:shadow-md transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                  {product}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Types & Why Choose Us - Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Client Types */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Clients We Serve
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              Trusted by a diverse range of market participants:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {clientTypes.map((client, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {client}
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

        {/* Regulatory Collaboration Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#C15F3C]/10 to-transparent p-8 rounded-sm border border-[#e0dbd5]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C15F3C] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                🤝
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#2d2926] mb-2">Active Regulatory Collaborators</h3>
                <p className="text-sm text-[#5a5651] leading-relaxed mb-3">
                  Having been in the industry for close to three decades, we have regularly collaborated 
                  with the securities market regulator, the SEBI, as well as the RBI, the CCI, the MCA 
                  and the Ministry of Finance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {regulatoryBodies.map((body, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-1 bg-white border border-[#e0dbd5] text-[#5a5651] rounded-sm">
                      {body}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stand Out Deals Section */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#2d2926] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Stand Out Deals
            </h2>
            <Link 
              href="/deals" 
              className="text-[#C15F3C] text-sm font-semibold hover:underline transition-all"
            >
              View All →
            </Link>
          </div>
          
          <div className="space-y-5">
            {deals.map((deal, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-6 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                  <h3 className="text-[#2d2926] font-semibold text-base leading-relaxed group-hover:text-[#C15F3C] transition-colors">
                    {deal.title}
                  </h3>
                  <span className="text-[#B1ADA1] text-sm whitespace-nowrap">{deal.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {deal.categories.map((cat, catIdx) => (
                    <span 
                      key={catIdx}
                      className="text-[10px] px-2 py-1 bg-[#F4F3EE] text-[#5a5651] rounded-sm font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Updates & Publications Section */}
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