'use client';

import Image from 'next/image';
import Link from 'next/link';

type PageTemplateProps = {
  title: string;
  subtitle?: string;
  category?: string;
  breadcrumb?: string;
  heroImage?: string;
  showHero?: boolean;
  showContactForm?: boolean;
  fullWidth?: boolean;
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
  bottomSection?: React.ReactNode;
};

export default function PageTemplate({ title, subtitle, category, breadcrumb, heroImage, showHero = true, showContactForm = true, fullWidth = false, sidebar, children, bottomSection }: PageTemplateProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-black">
      
      {/* 1. Top Navigation / Breadcrumb Bar space */}
      <div className="bg-[#F4F3EE]/50 h-[60px] w-full border-b border-[#B1ADA1]/30 flex items-center px-6 lg:px-24">
         <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <Link href="/" className="hover:text-[#C15F3C] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            {category && (
              <>
                <span className="hover:text-[#C15F3C] cursor-pointer">{category}</span>
                <span className="mx-2">/</span>
              </>
            )}
            <span className="text-[#1a1a1a]">{breadcrumb || title}</span>
         </span>
      </div>

      {/* 2. Full Width Hero Image Area */}
      {showHero && (
        <div className="w-full h-[300px] md:h-[450px] bg-gray-200 relative group overflow-hidden">
          {heroImage ? (
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 pattern-dots text-gray-300 opacity-50"></div>
              <span className="text-gray-500 font-bold uppercase tracking-widest text-sm relative z-10 group-hover:text-[#C15F3C] transition-colors bg-white/50 px-4 py-2 rounded">
                Hero Image Placement Area
              </span>
            </div>
          )}
        </div>
      )}

      {/* 3. Title Ribbon */}
      <div className="w-full bg-[#C15F3C] text-white py-10 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-xl text-[#F4F3EE]/80 font-medium max-w-3xl">{subtitle}</p>
          )}
        </div>
      </div>

      {/* 4. Main Two-Column Structure */}
      <div className="w-full bg-white text-black py-16 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN (Main Content) - full width if fullWidth=true */}
          <main className={fullWidth ? 'lg:col-span-12 space-y-12' : 'lg:col-span-8 space-y-12'}>
            {children || (
              <div className="space-y-8">
                <p className="text-lg text-black leading-relaxed">
                  URE Legal is India's leading law firm with a global reputation of being trusted advisers to its clients. 
                  The Firm advises a large and diverse set of clients, including domestic and foreign commercial enterprises, financial institutions, 
                  private equity and venture capital funds, start-ups, government and regulatory bodies.
                </p>
                <p className="text-lg text-black leading-relaxed">
                  Our dedicated legal professionals bring an unmatched combination of academic rigor, technical proficiency, and an ahead-of-the-curve mindset. 
                  We continuously integrate legal technology and best practices to deliver precise, practical solutions tailored to ever-changing market dynamics.
                </p>

                {/* Main Content Image Cards Placeholder */}
                <div className="w-full h-[500px] bg-[#F4F3EE] border border-dashed border-[#B1ADA1]/50 flex flex-col items-center justify-center mt-12 group hover:bg-gray-100 transition-colors">
                  <svg className="w-16 h-16 text-gray-400 mb-4 group-hover:text-[#C15F3C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Illustrative Cards Image Placement Area</span>
                </div>
              </div>
            )}
          </main>

          {/* RIGHT COLUMN (Sidebar) - hidden when fullWidth=true */}
          {!fullWidth && (
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Share Icons and Print */}
            <div className="flex items-center gap-6 border-b border-[#B1ADA1]/30 pb-6 text-[#1a1a1a]">
              <div className="flex gap-4 font-bold text-sm tracking-wider">
                <span className="hover:text-[#C15F3C] cursor-pointer transition-colors">in</span>
                <span className="hover:text-[#C15F3C] cursor-pointer transition-colors">X</span>
                <span className="hover:text-[#C15F3C] cursor-pointer transition-colors">f</span>
              </div>
              <div className="flex items-center gap-2 border-l border-[#B1ADA1]/50 pl-6 cursor-pointer hover:text-[#C15F3C] transition-colors group">
                <svg className="w-5 h-5 text-gray-500 group-hover:text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
              </div>
            </div>

            {/* Download Collateral Link */}
            <div className="flex items-center gap-3 text-[#C15F3C] font-semibold hover:text-[#1a1a1a] transition-colors cursor-pointer group w-max">
              <svg className="w-6 h-6 border border-[#C15F3C] rounded-full p-1 group-hover:border-[#1a1a1a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              <span className="text-sm">Download collateral</span>
            </div>

            {/* Contact Form - only shown if showContactForm is true */}
            {showContactForm && (
            <div className="pt-4">
              <h3 className="text-2xl font-medium text-[#C15F3C] mb-4">Contact Us</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                For inquiries, please fill in the form below and one of our experts will revert shortly.
              </p>
              
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="First Name *" 
                  required 
                  className="w-full border border-[#B1ADA1]/50 p-4 focus:outline-none focus:border-[#C15F3C] placeholder-gray-500 bg-transparent text-sm"
                />
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required 
                  className="w-full border border-[#B1ADA1]/50 p-4 focus:outline-none focus:border-[#C15F3C] placeholder-gray-500 bg-transparent text-sm"
                />
                <textarea 
                  placeholder="Message *" 
                  rows={4} 
                  required 
                  className="w-full border border-[#B1ADA1]/50 p-4 focus:outline-none focus:border-[#C15F3C] placeholder-gray-500 bg-transparent text-sm resize-none"
                ></textarea>
                
                {/* Simplified reCAPTCHA placeholder */}
                <div className="border border-gray-200 bg-gray-50 p-3 flex items-center justify-between w-[300px]">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-sm bg-white"></div>
                    <span className="text-sm text-gray-700">I&apos;m not a robot</span>
                  </div>
                  <div className="text-[9px] text-gray-400 text-center">
                    <div className="mb-1">reCAPTCHA</div>
                    <div>Privacy - Terms</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" className="bg-[#C15F3C] text-white px-8 py-3 text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            )}

            {sidebar}
          </aside>
          )}

        </div>
      </div>

      {/* 5. Optional Bottom Section (e.g., Awards, wide lists) */}
      {bottomSection && (
        <div className="w-full bg-white text-black pb-20 px-6 lg:px-24">
          <div className="max-w-6xl mx-auto">
            {bottomSection}
          </div>
        </div>
      )}
    </div>
  );
}
