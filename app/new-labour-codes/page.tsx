// app/new-labour-codes/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NewLabourCodesPage() {
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
            The New Labour Codes
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            Navigating India's comprehensive employment law reforms
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        
        {/* Introduction Section */}
        <div className="mb-12">
          <div className="w-12 h-[1px] bg-[#C15F3C]/40 mb-6" />
          <p className="text-[#2d2926] text-base md:text-lg leading-relaxed mb-6">
            India's new labour codes represent a significant overhaul of the country's employment and 
            labor regulation framework. These comprehensive reforms aim to streamline labor laws, 
            improve ease of doing business, and enhance worker protection through simplified and 
            rational provisions.
          </p>
          <p className="text-[#5a5651] text-sm leading-relaxed">
            URE Legal provides comprehensive legal guidance on navigating the complexities of the four 
            new labour codes: The Code on Wages, The Industrial Relations Code, The Code on Social Security, 
            and The Occupational Safety, Health and Working Conditions Code. Our experts help organizations 
            understand compliance requirements and implement effective policies.
          </p>
        </div>

        {/* Four Labour Codes Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            The Four Labour Codes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Code on Wages",
                description: "Consolidates laws relating to wages, bonus, and remuneration",
                icon: "💰",
                color: "#C15F3C"
              },
              {
                title: "Industrial Relations Code",
                description: "Governs trade unions, standing orders, and dispute resolution",
                icon: "🤝",
                color: "#4a3728"
              },
              {
                title: "Code on Social Security",
                description: "Covers employee benefits, insurance, and welfare schemes",
                icon: "🛡️",
                color: "#2d4a6e"
              },
              {
                title: "Occupational Safety Code",
                description: "Addresses workplace health, safety, and working conditions",
                icon: "🏗️",
                color: "#1a5c5c"
              }
            ].map((code, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#e0dbd5] rounded-sm p-6 text-center hover:shadow-md transition-all duration-300 group"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${code.color}15`, color: code.color }}
                >
                  {code.icon}
                </div>
                <h3 className="text-base font-semibold text-[#2d2926] mb-2 group-hover:text-[#C15F3C] transition-colors">
                  {code.title}
                </h3>
                <p className="text-xs text-[#5a5651] leading-relaxed">
                  {code.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Areas of Focus */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#2d2926] mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#C15F3C]">
            Key Areas of Focus
          </h2>
          
          <div className="space-y-4">
            {[
              "Wage and Salary Structure: Understanding minimum wages and allowance classifications under the new codes.",
              "Industrial Relations: Compliance with trade union and dispute resolution requirements.",
              "Social Security: Mandatory provisions for employee benefits and insurance schemes.",
              "Occupational Safety: Workplace health and safety standards and compliance procedures."
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C15F3C] mt-2 group-hover:w-2 group-hover:h-2 transition-all" />
                <p className="text-sm text-[#5a5651] leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-16">
          <div className="w-full h-[400px] bg-gradient-to-br from-[#C15F3C]/10 to-[#B1ADA1]/10 flex items-center justify-center overflow-hidden rounded-sm">
            <img 
              src="/images/thought-leadership-image.jpg" 
              alt="Thought Leadership" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>

        {/* How We Can Help */}
        <div className="mb-16">
          <div className="bg-white border border-[#e0dbd5] rounded-sm p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C15F3C] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                ⚖️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2d2926] mb-3">How URE Legal Can Help</h3>
                <p className="text-sm text-[#5a5651] leading-relaxed mb-4">
                  Our team of employment law experts provides end-to-end advisory services to help 
                  organizations understand, adapt to, and comply with the new labour codes. We offer:
                </p>
                <ul className="space-y-2">
                  {[
                    "Comprehensive gap analysis of current policies vs. new code requirements",
                    "Strategic advisory on wage structuring and compliance frameworks",
                    "Policy and contract documentation review and updates",
                    "Employee communication and change management support",
                    "Training programs for HR and management teams"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#5a5651]">
                      <span className="text-[#C15F3C]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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

      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}