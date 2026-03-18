import React from 'react';

export default function Careers() {
  return (
    <div className="bg-[#F4F3EE] text-[#C15F3C] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Side: Careers */}
        <div className="flex-1 lg:max-w-md">
          <h2 className="text-3xl font-medium mb-8">Careers</h2>
          <p className="leading-relaxed mb-6 font-medium text-sm text-black">
            We are committed to shaping the finest lawyers for a just world. As a full-service law firm, you will have opportunities and exposure to various Practices and Sectors, learning from the finest lawyers in the country as you work on challenging, sophisticated, and complex legal problems.
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <a href="#" className="font-bold underline text-sm hover:opacity-70 transition-opacity inline-block w-max">
              Life at cam
            </a>
            <a href="#" className="font-bold underline text-sm hover:opacity-70 transition-opacity inline-block w-max">
              Search for Opportunities
            </a>
          </div>
        </div>

        {/* Right Side: LinkedIn Feed inline */}
        <div className="flex-1">
          <h2 className="text-[#C15F3C] text-3xl font-medium mb-8">LinkedIn Feed</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            
            {/* Post 1 */}
            <div className="bg-[#F4F3EE] border-2 border-[#C15F3C] rounded-lg overflow-hidden flex-1 group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 border-b-2 border-[#C15F3C] relative flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop")' }}>
                 <div className="absolute inset-0 bg-black/50"></div>
                 <span className="text-sm text-center font-bold px-4 text-white relative z-10">
                   Supreme Court Gives Insolvency Claims a Fresh Lease of Life...
                 </span>
                 <div className="absolute -bottom-6 right-6 w-12 h-12 bg-[#F4F3EE] border-2 border-[#C15F3C] rounded-full flex items-center justify-center font-bold text-xl transition-colors group-hover:bg-[#C15F3C] group-hover:text-[#F4F3EE]">
                   C
                 </div>
              </div>
              <div className="p-6 pt-10">
                <h4 className="font-bold text-sm">Cyril Amarchand Mangaldas</h4>
                <div className="flex items-center gap-1 mb-4 mt-1 opacity-80">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                   <p className="text-[10px] font-semibold">@CyrilAmarchandMangaldas • 17 hours ago</p>
                </div>
                <p className="text-sm leading-relaxed line-clamp-4 text-black">
                  CAM Blog: The latest post on our blog by Anush Mathkar and Aman Patidar is on &apos;Supreme Court Gives Insolvency Claims a Fresh...
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-[#F4F3EE] border-2 border-[#C15F3C] rounded-lg overflow-hidden flex-1 group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 border-b-2 border-[#C15F3C] relative flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop")' }}>
                 <div className="absolute inset-0 bg-black/50"></div>
                 <span className="text-sm text-center font-bold px-4 text-white relative z-10">
                   Large Issuers, Easier Listings: MPO and MPS Norms Recast...
                 </span>
                 <div className="absolute -bottom-6 right-6 w-12 h-12 bg-[#F4F3EE] border-2 border-[#C15F3C] rounded-full flex items-center justify-center font-bold text-xl transition-colors group-hover:bg-[#C15F3C] group-hover:text-[#F4F3EE]">
                   C
                 </div>
              </div>
              <div className="p-6 pt-10">
                <h4 className="font-bold text-sm">Cyril Amarchand Mangaldas</h4>
                <div className="flex items-center gap-1 mb-4 mt-1 opacity-80">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                   <p className="text-[10px] font-semibold">@CyrilAmarchandMangaldas • 18 hours ago</p>
                </div>
                <p className="text-sm leading-relaxed line-clamp-4 text-black">
                  CAM Blog: The latest post on our blog by Ravi Dubey and Sajal Soni is on &apos;Large Issuers, Easier Listings: MPO and MPS...
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}