import React from 'react';

export default function Careers() {
  return (
    <div className="bg-white text-[#C15F3C] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        {/* Left Side: Careers */}
        <div className="flex-1 lg:max-w-sm">
          <h2 className="text-3xl font-medium mb-8 uppercase tracking-tight text-[#C15F3C]">Careers</h2>
          <p className="leading-relaxed mb-10 font-medium text-sm text-[#C15F3C] opacity-80">
            We are committed to shaping the finest lawyers for a just world. As a full-service law firm, you will have opportunities and exposure to various Practices and Sectors, learning from the finest lawyers in the country as you work on challenging, sophisticated, and complex legal problems.
          </p>
          <div className="flex flex-col gap-6 mt-6">
            <a href="#" className="font-bold underline text-xs uppercase tracking-widest hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2 text-[#C15F3C]">
              Life at cam
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <a href="#" className="font-bold underline text-xs uppercase tracking-widest hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2 text-[#C15F3C]">
              Search for Opportunities
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: LinkedIn Feed inline */}
        <div className="flex-1">
          <h2 className="text-[#C15F3C] text-3xl font-medium mb-8 uppercase tracking-tight">LinkedIn Feed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Post 1 */}
            <div className="bg-pampas/40 border border-cloudy/30 rounded-xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="h-44 border-b border-cloudy/30 relative flex items-center justify-center p-4 bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop")' }}>
                 <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                 <span className="text-xs text-center font-bold px-6 text-white relative z-10 leading-tight">
                   Supreme Court Gives Insolvency Claims a Fresh Lease of Life...
                 </span>
                 <div className="absolute -bottom-5 right-5 w-10 h-10 bg-pampas border border-[#C15F3C] rounded-full flex items-center justify-center font-bold text-base text-[#C15F3C] transition-all group-hover:bg-[#C15F3C] group-hover:text-pampas shadow-md">
                   C
                 </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <h4 className="font-bold text-[13px] text-[#C15F3C]">Cyril Amarchand Mangaldas</h4>
                <div className="flex items-center gap-1 mb-4 mt-1 opacity-50">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                   <p className="text-[9px] font-bold tracking-tight">17h • LinkedIn</p>
                </div>
                <p className="text-[13px] leading-relaxed line-clamp-3 text-[#C15F3C] opacity-80 mb-4">
                  CAM Blog: The latest post on our blog by Anush Mathkar and Aman Patidar is on &quot;Supreme Court Gives Insolvency Claims a Fresh...&quot;
                </p>
                <div className="mt-auto">
                    <span className="text-[#C15F3C] font-bold text-[11px] uppercase tracking-wider hover:scale-105 transition-transform duration-300">View Post</span>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-pampas/40 border border-cloudy/30 rounded-xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="h-44 border-b border-cloudy/30 relative flex items-center justify-center p-4 bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop")' }}>
                 <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                 <span className="text-xs text-center font-bold px-6 text-white relative z-10 leading-tight">
                   Large Issuers, Easier Listings: MPO and MPS Norms Recast...
                 </span>
                 <div className="absolute -bottom-5 right-5 w-10 h-10 bg-pampas border border-[#C15F3C] rounded-full flex items-center justify-center font-bold text-base text-[#C15F3C] transition-all group-hover:bg-[#C15F3C] group-hover:text-pampas shadow-md">
                   C
                 </div>
              </div>
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <h4 className="font-bold text-[13px] text-[#C15F3C]">Cyril Amarchand Mangaldas</h4>
                <div className="flex items-center gap-1 mb-4 mt-1 opacity-50">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                   <p className="text-[9px] font-bold tracking-tight">18h • LinkedIn</p>
                </div>
                <p className="text-[13px] leading-relaxed line-clamp-3 text-[#C15F3C] opacity-80 mb-4">
                  CAM Blog: The latest post on our blog by Ravi Dubey and Sajal Soni is on &quot;Large Issuers, Easier Listings: MPO and MPS...&quot;
                </p>
                <div className="mt-auto">
                    <span className="text-[#C15F3C] font-bold text-[11px] uppercase tracking-wider hover:scale-105 transition-transform duration-300">View Post</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}