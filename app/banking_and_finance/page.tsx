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
    name: 'Amey Pathak',
    title: 'Partner (Head - Banking)',
    email: 'amey.pathak@cyrilshroff.com',
    initials: 'AP',
  },
];

// Deals Data
const deals = [
  {
    title: 'Cyril Amarchand Mangaldas advised SBI on debt availed by JSW Sambalpur Steel Limited for part financing its purchase of the steel business undertaking of Bhushan Power & Steel Limited',
    date: '07/04/2026',
    categories: ['Projects', 'Banking and Finance'],
  },
  {
    title: 'Cyril Amarchand Mangaldas advised RMZ in setting up a JV with Signature Global for a mixed use development project in Gurugram',
    date: '05/03/2026',
    categories: ['Corporate', 'Real Estate', 'Competition/Antitrust', 'Banking and Finance', 'Mergers & Acquisitions/Joint Venture'],
  },
  {
    title: 'Cyril Amarchand Mangaldas advises IFC on Strategic Housing Investment in TVS Emerald Projects',
    date: '09/02/2026',
    categories: ['Banking and Finance'],
  },
];

// Practice Areas / Services
const services = [
  'Rupee & Foreign Currency Financings',
  'Structured Financing (Co-obligor, Cross Collateralisation)',
  'Guarantee Backed & Corporate Funding',
  'Loan Against Shares',
  'Mezzanine Finance',
  'Acquisition Finance',
  'Real Estate Finance',
  'Export Finance',
  'Hybrid Debt & Securitisation',
  'Bond Issuances & Private Placements',
  'Masala & Dollar-Denominated Bonds',
  'Debt Restructuring & Resolution',
  'Stressed Assets Financing',
  'Last Mile & ARC Financing',
  'Insolvency Financing',
];

// Key Strengths
const strengths = [
  {
    title: 'Industry Leaders',
    subtitle: 'Pioneering Expertise',
    description: 'Years of pioneering work done in the field of banking and finance',
  },
  {
    title: 'Bespoke',
    subtitle: 'Tailored Solutions',
    description: 'Suite of bespoke services earned lasting trust of our clients',
  },
  {
    title: 'First-of-its-kind',
    subtitle: 'Market Hallmark',
    description: 'Ground-breaking deals and go-to advisers for key financial players',
  },
];

export default function BankingFinancePage() {
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
            Banking & Finance
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            A powerhouse in the financing space
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
              Our Banking & Finance team brings industry-leading expertise on the table and intrinsically 
              understands the diverse needs of our clients to provide both legal and commercial solutions.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              We are ideally positioned to respond to changing market conditions and to offer pragmatic 
              solutions with our innovative thinking. Our team of lawyers are hands on with the evolving 
              legal landscape and work alongside our financial regulatory, insolvency, litigation and 
              other specialists to offer bespoke solutions.
            </p>
          </div>
          
          <div className="bg-[#C15F3C] p-6 rounded-sm flex flex-col justify-center items-center text-center text-white">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed">
              Domestic & Cross-border lending transactions for lenders, investors and borrowers across the credit spectrum
            </p>
          </div>
        </div>

        {/* Key Strengths - Three Column */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Why Choose Us
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

        {/* Expertise Grid - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Services List */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Our Expertise
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              We advise on a broad range of domestic and cross-border lending transactions, including:
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

          {/* Right Column - Stats / Key Numbers */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-[#e0dbd5] rounded-sm p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#C15F3C]">500+</div>
                <div className="text-xs text-[#5a5651] mt-1">Transactions Completed</div>
              </div>
              <div className="bg-white border border-[#e0dbd5] rounded-sm p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#C15F3C]">₹50B+</div>
                <div className="text-xs text-[#5a5651] mt-1">Deal Value</div>
              </div>
              <div className="bg-white border border-[#e0dbd5] rounded-sm p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#C15F3C]">100+</div>
                <div className="text-xs text-[#5a5651] mt-1">Active Clients</div>
              </div>
              <div className="bg-white border border-[#e0dbd5] rounded-sm p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#C15F3C]">25+</div>
                <div className="text-xs text-[#5a5651] mt-1">Years of Excellence</div>
              </div>
            </div>
            <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-4">
              <p className="text-sm text-[#2d2926] leading-relaxed">
                <span className="font-semibold">Market leading 'first-of-a-kind' transactions</span> are our hallmark. 
                We are at the forefront of most of the ground-breaking deals.
              </p>
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