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
    name: 'Santosh Janakiram',
    title: 'Senior Partner',
    email: 'santosh.janakiram@cyrilshroff.com',
    initials: 'SJ',
  },
  {
    name: 'Subhalakshmi Naskar',
    title: 'Partner (Co-Head - Projects (Infrastructure))',
    email: 'subhalakshmi.naskar@cyrilshroff.com',
    initials: 'SN',
  },
];

// Stand Out Deals
const deals = [
  {
    title: 'Cyril Amarchand Mangaldas through separate deal teams on a Chinese wall basis, acted as counsel for Cerberus Capital Management and International Finance Corporation',
    date: '13/10/2025',
    categories: ['Infrastructure & Project Finance'],
  },
  {
    title: 'Cyril Amarchand Mangaldas acted as legal counsel to DBS Bank Ltd., The Hongkong and Shanghai Banking Corporation Limited, Citicorp Investment Bank (Singapore) Limited, and Mizuho Bank Ltd, Singapore Branch',
    date: '08/10/2025',
    categories: ['Projects', 'Infrastructure & Project Finance'],
  },
  {
    title: 'Cyril Amarchand Mangaldas acted as the legal counsel to Jindal Steel and Power Limited',
    date: '03/11/2025',
    categories: ['Infrastructure & Project Finance'],
  },
];

// Project Sectors
const sectors = [
  'Power (Renewable & Non-renewable)',
  'Ports & Maritime',
  'Roads & Highways',
  'Telecom & Digital Infrastructure',
  'Airports & Aviation',
  'Oil & Gas',
  'Urban Infrastructure',
  'Railways & Metro',
];

// Key Expertise Areas
const expertiseAreas = [
  'Vanilla Financings',
  'Project Contracting',
  'Highly Nuanced Structured Finance',
  'Innovative Stressed Asset Financing Structures',
  'Insolvency',
  'Cross-jurisdictional Project Contracts',
  'Public-Private Partnerships (PPP)',
  'Concession Agreements',
];

// Key Strengths
const strengths = [
  {
    title: 'First-of-its-kind',
    subtitle: 'Market Leaders',
    description: 'Advised on first inter-lender dispute between Indian and international lenders',
  },
  {
    title: 'Pioneering',
    subtitle: 'Unmatched Expertise',
    description: 'Years of pioneering work in infrastructure and finance',
  },
  {
    title: 'Full Lifecycle',
    subtitle: 'End-to-end Solutions',
    description: 'Advise on every possible aspect of infrastructure project lifecycle',
  },
];

export default function InfrastructureProjectFinancePage() {
  return (
    <div className="bg-[#F4F3EE]">
      {/* HERO SECTION - Centered (matching Financial Regulatory) */}
      <div className="relative w-full min-h-[400px] bg-gradient-to-br from-[#2d2926] to-[#4a3b35] flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#C15F3C] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#C15F3C] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            Infrastructure & Project Finance
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Creating the trajectory for the most innovative and complex infrastructure deals and ideas
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Introduction Section - Three column layout variant */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-[#2d2926] text-lg leading-relaxed">
              Our Infrastructure & Projects Finance practice team is truly ahead of the curve, consisting 
              of market leading Finance and Infrastructure lawyers as well as distinguished sector and 
              product specialists.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              This helps us provide effective legal and business solutions to cater to our clients' diverse 
              needs. From vanilla financings, project contracting, highly nuanced structured finance, 
              innovative stressed asset financing structures and insolvency, our team has extensive experience 
              advising a diverse set of clients which includes foreign, private and institutional investors, 
              domestic and international banks and financial institutions, project developers, owners and 
              contractors.
            </p>
          </div>
          
          <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-6 rounded-sm">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🏗️</div>
              <div>
                <p className="text-sm text-[#5a5651] leading-relaxed">
                  Through the years, our team has earned the distinction of advising on many 
                  <span className="font-semibold text-[#C15F3C]"> 'first-of-its-kind' </span> 
                  matters such as the first inter-lender dispute between Indian and international lenders 
                  and the first Indian project financing by international lenders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Strengths - Stats Cards */}
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

        {/* Sectors We Serve + Expertise - Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Sectors */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Sectors We Serve
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              We offer specialised expertise in projects across diverse infrastructure sectors:
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

          {/* Expertise Areas */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Our Expertise
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              We have extensive experience advising contractors, developers as well as governmental 
              agencies in the project contracting space:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {expertiseAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#C15F3C]/10 to-transparent p-8 rounded-sm border border-[#e0dbd5]">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-[#C15F3C] mb-2">✓</div>
                <p className="text-sm text-[#2d2926] font-semibold">Unmatched Expertise</p>
                <p className="text-xs text-[#5a5651] mt-1">The expertise of our team of lawyers is hitherto unmatched</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-[#C15F3C] mb-2">⟳</div>
                <p className="text-sm text-[#2d2926] font-semibold">Full Lifecycle Support</p>
                <p className="text-xs text-[#5a5651] mt-1">We advise on every possible aspect of infrastructure projects</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-[#C15F3C] mb-2">★</div>
                <p className="text-sm text-[#2d2926] font-semibold">Lasting Trust</p>
                <p className="text-xs text-[#5a5651] mt-1">In-depth sector knowledge earned us lasting client trust</p>
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

        {/* Key Contacts Section - Three cards */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-12" />
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-10 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Key Contacts
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
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

        {/* Newsletter CTA - White background as requested */}
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