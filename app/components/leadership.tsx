"use client";
import React, { useState } from 'react';

const videos = [
  {
    title: 'The Thought League Season 03 \u2013 EP 11',
    description: 'Our Managing Partner Cyril Shroff and Uday Shankar, Founder-Director, Bodhi Tree Systems, come together to unpack what India\'s AI moment really means...',
    date: 'FEBRUARY 12, 2026',
    youtubeId: 'JxNYGfDpcFU',
    image: 'https://img.youtube.com/vi/JxNYGfDpcFU/maxresdefault.jpg'
  },
  {
    title: 'The Thought League S3 \u2013 EP 10',
    description: 'In this episode of The Thought League \u2013 Season 03, our Managing Partner Cyril Shroff & Mallika Srinivasan, Chairman & Managing Director, TAFE come together...',
    date: 'JANUARY 13, 2026',
    youtubeId: '704FD4zlcdU',
    image: 'https://img.youtube.com/vi/704FD4zlcdU/maxresdefault.jpg'
  },
  {
    title: 'The Thought League S3 \u2013 EP 9',
    description: 'In the latest episode of The Thought League Season 3 on CNBC TV18, our Managing Partner Cyril Shroff and Sajjan Jindal, Chairman & Managing Director, JSW Group...',
    date: 'DECEMBER 30, 2025',
    youtubeId: 'l_xVa4IMW5Y',
    image: 'https://img.youtube.com/vi/l_xVa4IMW5Y/maxresdefault.jpg'
  }
];

export default function Leadership() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <div className="bg-white text-[#C15F3C] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium mb-12 text-center uppercase tracking-tight text-[#C15F3C]">Thought Leadership</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((vid, i) => (
            <div key={i} className="border border-cloudy/30 rounded-lg flex flex-col group hover:-translate-y-1 transition-all duration-300 bg-pampas/30 overflow-hidden shadow-sm hover:shadow-md">
              {/* Video Thumbnail or Iframe */}
              {activeVideo === i ? (
                <div className="h-48 border-b border-cloudy/30 w-full bg-[#C15F3C]">
                  <iframe 
                    className="w-full h-full" 
                    src={`https://www.youtube.com/embed/${vid.youtubeId}?autoplay=1`} 
                    title={vid.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div 
                  className="h-48 border-b border-cloudy/30 relative flex items-center justify-center cursor-pointer bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${vid.image})` }}
                  onClick={() => setActiveVideo(i)}
                >
                   <div className="absolute inset-0 bg-[#C15F3C]/40 group-hover:bg-[#C15F3C]/20 transition-colors"></div>
                   {/* Play Button */}
                   <div className="w-14 h-10 bg-pampas/90 text-[#C15F3C] rounded-lg flex items-center justify-center transition-all group-hover:bg-[#C15F3C] group-hover:text-pampas relative z-10 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                       <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                     </svg>
                   </div>
                </div>
              )}
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] mb-2 uppercase tracking-widest font-bold opacity-60">Video Insight</span>
                <h3 className="text-lg font-bold mb-4 line-clamp-2 min-h-[3.5rem] leading-tight text-[#C15F3C] group-hover:opacity-80 transition-opacity">
                  {vid.title}
                </h3>
                <p className="text-xs leading-relaxed mb-6 line-clamp-4 flex-1 text-[#C15F3C] opacity-80">
                  {vid.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-cloudy/20">
                  <p className="text-[9px] mb-3 font-bold text-[#C15F3C]/50 tracking-wider font-sans">{vid.date}</p>
                  <a href="#" className="font-bold underline text-[11px] uppercase tracking-wide hover:text-cloudy transition-colors inline-flex items-center gap-1">
                    Watch Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <button className="px-10 py-3.5 bg-[#C15F3C] text-white border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md">
             View All Insights
           </button>
        </div>
      </div>
    </div>
  );
}