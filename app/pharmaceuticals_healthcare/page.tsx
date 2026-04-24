'use client';

import Image from 'next/image';
import Link from 'next/link';

// Key Contacts Data
const keyContacts = [
  {
    name: 'Aarushi Jain',
    title: 'Partner, Technology Head - Media, Education & Gaming',
    email: 'aarushi.j@cyrilshroff.com',
    initials: 'AJ',
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
    title: 'CAM acted as legal counsel to leading pharmaceutical company on cross-border acquisition valued at USD 750 million',
    date: '15/03/2026',
    categories: ['Mergers & Acquisitions', 'Pharmaceuticals'],
  },
  {
    title: 'Cyril Amarchand Mangaldas advised global biotech firm on clinical trial regulatory approvals and compliance',
    date: '20/02/2026',
    categories: ['Healthcare', 'Regulatory'],
  },
  {
    title: 'CAM represented major hospital chain on expansion and joint venture with international partner',
    date: '10/01/2026',
    categories: ['Healthcare', 'Joint Venture'],
  },
];

// Latest Updates
const updates = [
  {
    title: 'Regulatory Updates, News Updates, Litigation Updates and Transactions Updates',
    type: 'Update',
    icon: '📋',
  },
  {
    title: 'Regulatory Updates, News Updates, Litigation Updates and Transactions Updates',
    type: 'Update',
    icon: '📋',
  },
  {
    title: 'Regulatory Updates, News Updates, Litigation Updates and Transactions Updates',
    type: 'Update',
    icon: '📋',
  },
];

// Publications
const publications = [
  {
    title: 'Doing Justice in Post – COVID World',
    type: 'Publication',
    icon: '📘',
  },
  {
    title: 'Pharmaceutical Pricing and Control in India: A Comprehensive Guide',
    type: 'Guide',
    icon: '📕',
  },
  {
    title: 'Clinical Trial Regulations in India: Navigating the Framework',
    type: 'Publication',
    icon: '📗',
  },
  {
    title: 'Biosimilars Approval Pathway in India',
    type: 'White Paper',
    icon: '📄',
  },
];

// Key Statistics
const stats = [
  {
    number: '1.3B+',
    label: 'Population Served',
  },
  {
    number: '100+',
    label: 'Healthcare Deals',
  },
  {
    number: '50+',
    label: 'Clinical Trials',
  },
  {
    number: '25+',
    label: 'Years of Expertise',
  },
];

// Services Offered
const services = [
  'Drug Manufacturing Facility Set-up',
  'Regulatory Approvals & Compliance',
  'Drug Price Control Advisory',
  'Safety & Efficacy Compliance',
  'Biosimilars Approval',
  'Import-Export of Drugs & Ingredients',
  'Drug Marketing & Promotion',
  'Clinical Trials Management',
  'Bioequivalence/Bioavailability Trials',
  'Hospital Operations Advisory',
  'Nutraceuticals & Supplements',
  'Health & Beauty Products',
  'Medical Device Regulation',
  'Telemedicine & Digital Health',
  'Pharmaceutical Licensing',
  'Intellectual Property Protection',
];

// Key Regulatory Areas
const regulatoryAreas = [
  {
    title: 'Drug Price Control',
    description: 'Expertise in NPPA regulations and price control mechanisms',
    icon: '💰',
  },
  {
    title: 'Clinical Trials',
    description: 'End-to-end guidance on clinical trial approvals and compliance',
    icon: '🔬',
  },
  {
    title: 'Biosimilars',
    description: 'Specialized knowledge in biosimilars approval pathway',
    icon: '💊',
  },
  {
    title: 'Import-Export',
    description: 'Cross-border drug and ingredient trade compliance',
    icon: '🌍',
  },
];

// Sectors Covered
const sectors = [
  'Pharmaceutical Manufacturing',
  'Biotechnology & Biosimilars',
  'Hospital & Healthcare Providers',
  'Clinical Research Organizations',
  'Medical Devices & Equipment',
  'Nutraceuticals & Dietary Supplements',
  'Health & Beauty Products',
  'Telemedicine & Digital Health',
  'API Manufacturing',
  'Contract Research & Manufacturing',
  'Pharmaceutical Retail & Distribution',
  'Diagnostics & Pathology Labs',
];

// Why Choose Us Points
const whyChooseUs = [
  {
    icon: '⚕️',
    title: 'Regulatory Expertise',
    description: 'Deep understanding of India\'s complex pharmaceutical regulatory landscape',
  },
  {
    icon: '🔄',
    title: 'Multidisciplinary Approach',
    description: 'Integrated services across M&A, IP, data privacy, dispute resolution',
  },
  {
    icon: '🌐',
    title: 'Global Standing',
    description: 'Cross-border capabilities across multiple geographic and legal landscapes',
  },
  {
    icon: '🎯',
    title: 'Business Savvy',
    description: 'Commercially oriented, legally sound approach to complex matters',
  },
];

export default function PharmaHealthcarePage() {
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
            Pharmaceuticals, Healthcare & Life Sciences
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Traversing an extremely complex regulatory landscape
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
              With the dual objective of caring for its 1.3 billion (and counting) people, and providing 
              the world with a continuous supply of essential drugs, Indian laws have placed special focus 
              on drug price control, regulatory approvals, safety and efficacy issues, approval of biosimilars, 
              import-export of drugs and ingredients, drug marketing, clinical trials and hospital operations.
            </p>
            <p className="text-[#5a5651] leading-relaxed">
              Be it setting up or acquiring a drug manufacturing facility, importing specialised ingredients 
              to manufacture health and beauty products, conducting clinical / bioequivalence / bioavailability 
              trials or simply marketing nutraceuticals, supplements or health foods – there are multiple 
              legal and business considerations unique to India.
            </p>
            <div className="bg-[#fff8f5] border-l-4 border-[#C15F3C] p-5 mt-4">
              <p className="text-sm text-[#2d2926] leading-relaxed">
                <span className="font-semibold text-[#C15F3C]">Our practice specialists</span> are here to 
                guide our clients through every nuance of the law and compliances thereunder. Our commercially 
                savvy, business oriented and legally sound approach is balanced, as evidenced by our involvement 
                in some of the biggest and most complex matters in this sector.
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
              A multidisciplinary approach to counsel clients at all stages of their business lifecycle
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

        {/* Key Regulatory Areas - Four Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 text-center relative inline-block w-full after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#C15F3C]">
            Key Regulatory Areas
          </h2>
          
          <div className="grid md:grid-cols-4 gap-5">
            {regulatoryAreas.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-5 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#C15F3C] mb-2">{item.title}</h3>
                <p className="text-xs text-[#5a5651] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Sectors - Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Our Services
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              Comprehensive legal services across the pharmaceutical and healthcare value chain:
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

          {/* Sectors Covered */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2d2926] mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Sectors We Cover
            </h2>
            <p className="text-[#5a5651] mb-6 leading-relaxed text-sm">
              Specialized expertise across diverse healthcare segments:
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

        {/* Multidisciplinary Practice Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#C15F3C]/10 to-transparent p-8 rounded-sm border border-[#e0dbd5]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C15F3C] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                🏥
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#2d2926] mb-2">Multidisciplinary Practice Support</h3>
                <p className="text-sm text-[#5a5651] leading-relaxed">
                  Our practice is further supported by the multidisciplinary practices of the firm such as 
                  M&A, intellectual property, technology & data privacy, dispute resolution, taxation and 
                  employment. This, coupled with our global standing and reach enables us to provide clients 
                  with specialist advisory services across multiple geographic and legal landscapes seamlessly 
                  under one roof.
                </p>
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

        {/* Latest Updates Section */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#2d2926] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Latest Updates
            </h2>
            <Link 
              href="/updates" 
              className="text-[#C15F3C] text-sm font-semibold hover:underline transition-all"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
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

        {/* Publications Section */}
        <div className="mb-16">
          <hr className="border-[#d8d3d3] mb-10" />
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-[#2d2926] relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
              Publications & Resources
            </h2>
            <Link 
              href="/publications" 
              className="text-[#C15F3C] text-sm font-semibold hover:underline transition-all"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {publications.map((pub, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#e0dbd5] rounded-sm p-5 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex flex-col items-start gap-3">
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