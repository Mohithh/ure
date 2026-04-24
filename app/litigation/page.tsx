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
    name: 'Dhananjay Kumar',
    title: 'Partner (Head - Litigation)',
    email: 'dhananjay.kumar@cyrilshroff.com',
    initials: 'DK',
  },
  {
    name: 'Gaurav Gupte',
    title: 'Partner',
    email: 'gaurav.gupte@cyrilshroff.com',
    initials: 'GG',
  },
];

// Publications Data
const publications = [
  {
    title: 'Alert: PMLA Snapshot 2025: Know your Rights',
    type: 'download',
    icon: '📄',
  },
  {
    title: 'A Guide to Prosecutions under the Drugs and Cosmetics Act, 1940',
    type: 'Publications',
    icon: '📘',
  },
  {
    title: 'Cyber Incident Response',
    type: 'Publications',
    icon: '📕',
  },
  {
    title: 'Primer: Navigating FSSAI Proceedings in India',
    type: 'Publications',
    icon: '📗',
  },
];

// Key Strengths
const strengths = [
  {
    title: 'Go-to Firm',
    subtitle: 'Global Corporations',
    description: 'Defend the world\'s largest corporations against serious commercial and reputational risks in India',
  },
  {
    title: 'Multi-Forum',
    subtitle: 'Expertise',
    description: 'Multi-forum expertise in providing legal and strategic advice in corporate and commercial disputes',
  },
  {
    title: 'Seamless Service',
    subtitle: 'Pan-India Presence',
    description: 'Quick, seamless, and integrated service through our offices and beyond',
  },
];

// Practice Areas
const practiceAreas = [
  'Corporate Commercial Litigation',
  'Regulatory Disputes',
  'White Collar Crime',
  'Arbitration Related Litigation',
  'Insolvency Litigation',
  'Banking & Finance Disputes',
  'Real Estate Litigation',
  'Intellectual Property Disputes',
  'Tax Litigation',
  'Employment Disputes',
  'Environment Litigation',
  'Constitutional Matters',
];

// Forums & Jurisdictions
const forums = [
  'Supreme Court of India',
  'High Courts (All Jurisdictions)',
  'National Company Law Tribunal (NCLT)',
  'National Company Law Appellate Tribunal (NCLAT)',
  'Debt Recovery Tribunal (DRT)',
  'Securities Appellate Tribunal (SAT)',
  'Competition Commission of India (CCI)',
  'Consumer Disputes Redressal Forums',
  'Arbitration Tribunals',
  'Regulatory Authorities',
];

// Why Choose Us Points
const whyChooseUs = [
  {
    icon: '🎯',
    title: 'Strategic Counselling',
    description: 'Unmatched strategic counselling and result-oriented solutions',
  },
  {
    icon: '🏛️',
    title: 'Top-Notch Representation',
    description: 'Expert advocacy across all forums and jurisdictions',
  },
  {
    icon: '🌟',
    title: 'Outstanding Results',
    description: 'Proven track record of delivering outstanding outcomes',
  },
  {
    icon: '🤝',
    title: 'Senior Counsel Network',
    description: 'Excellent relationships with leading senior counsel nationwide',
  },
];

export default function LitigationPage() {
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
            Litigation
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            The go-to law firm for unmatched strategic counselling, top-notch representation and outstanding results
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
              Renowned for the efficient handling of corporate and commercial litigations and disputes 
              in multiple proceedings across different forums, our litigation team is the go-to solutions' 
              provider for the world's largest corporations.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              Our team offers clients practical, creative, and result-oriented solutions in the most complex 
              and contentious situations and commercially sensitive litigations. Our strength lies in our 
              business savvy and strategic acumen and our expertise in guiding our clients to solutions 
              consistent with their ethos, values, and business goals.
            </p>
            <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-5 mt-4">
              <p className="text-sm text-[#2d2926] leading-relaxed">
                <span className="font-semibold text-[#C15F3C]">Our disputes portfolio</span> includes advising 
                court-appointed committees and government-appointed directors designated to perform functions 
                in public interest.
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
              Our partners go beyond jurisdictions with office presence to ensure seamless representation 
              through a wide network of local counsel
            </p>
          </div>
        </div>

        {/* Key Strengths - Three Column */}
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
                <div className="text-2xl font-bold text-[#C15F3C] mb-3 group-hover:scale-110 transition-transform">
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

        {/* Practice Areas & Forums - Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Practice Areas */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Practice Areas
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              We handle a wide range of corporate and commercial disputes:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {practiceAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Forums & Jurisdictions */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Forums & Jurisdictions
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              Our advocacy experience spans across all major forums:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {forums.map((forum, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] group-hover:w-2 group-hover:h-2 transition-all"></div>
                  <span className="text-sm text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                    {forum}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us - Four Icon Cards */}
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

        {/* Partner Network Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#C15F3C]/10 to-transparent p-8 rounded-sm border border-[#e0dbd5]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C15F3C] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                🤝
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#2d2926] mb-2">Extensive Partner Network</h3>
                <p className="text-sm text-[#5a5651] leading-relaxed">
                  Our excellent relationships with leading senior counsel/advocates in all major jurisdictions 
                  allows us to offer our clients end-to-end solutions and cost-effective and time-efficient 
                  services in contentious situations, with higher quality and transparency.
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