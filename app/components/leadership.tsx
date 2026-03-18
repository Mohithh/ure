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
    <div className="bg-[#F4F3EE] text-[#C15F3C] py-20 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-medium mb-12 text-center">Thought Leadership</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((vid, i) => (
          <div key={i} className="border-2 border-[#C15F3C] rounded flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white">
            {/* Video Thumbnail or Iframe */}
            {activeVideo === i ? (
              <div className="h-48 border-b-2 border-[#C15F3C] w-full">
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
                className="h-48 border-b-2 border-[#C15F3C] relative flex items-center justify-center cursor-pointer bg-cover bg-center" 
                style={{ backgroundImage: `url(${vid.image})` }}
                onClick={() => setActiveVideo(i)}
              >
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                 {/* Play Button */}
                 <div className="w-16 h-12 bg-[#F4F3EE] border-2 border-[#C15F3C] rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#C15F3C] group-hover:text-[#F4F3EE] relative z-10 shadow-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                     <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                   </svg>
                 </div>
              </div>
            )}
            
            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs mb-2 uppercase tracking-wide opacity-80">Video</span>
              <h3 className="text-xl font-bold mb-4 line-clamp-2 min-h-14 group-hover:opacity-70 transition-opacity">
                {vid.title}
              </h3>
              <p className="text-sm mb-6 line-clamp-4 flex-1 opacity-90 text-black">
                {vid.description}
              </p>
              
              <div className="mt-auto">
                <p className="text-[10px] mb-2 font-bold text-black/70">{vid.date}</p>
                <a href="#" className="font-bold underline text-xs uppercase tracking-wide hover:opacity-70 transition-opacity">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
         <button className="px-8 py-3 bg-[#C15F3C] text-[#F4F3EE] border-2 border-[#C15F3C] rounded text-sm font-bold hover:bg-transparent hover:text-[#C15F3C] transition-colors shadow-sm">
           View More
         </button>
      </div>
    </div>
  );
}