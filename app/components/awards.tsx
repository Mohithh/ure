import React from 'react';
import Link from "next/link";

const awardsFeatures = [
  {
    title: 'Law Firm of the Year 2025',
    subtitle: 'IBLJ Indian Law Firm Awards',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    )
  },
  {
    title: 'India Law Firm of the Year 2025',
    subtitle: 'ALB India Awards',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    )
  },
  {
    title: 'National Law Firm of the Year',
    subtitle: 'IFLR Asia-Pacific Awards 2023',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    )
  },
  {
    title: 'Innovation in Advancing Markets',
    subtitle: 'FT Innovative Lawyers Asia Pacific 2022 Awards',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    )
  }
];

export default function Awards() {
  return (
    <div className="bg-pampas text-[#C15F3C] py-20 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium mb-6 uppercase tracking-tight text-[#C15F3C]">Awards & Accolades</h2>
        <p className="mb-16 text-sm max-w-2xl mx-auto text-[#C15F3C] font-medium opacity-80">
          We have been consistently recognised for our commitment to delivering excellence for our clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {awardsFeatures.map((award, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default transition-all duration-300">
              <div className="w-20 h-20 rounded-full border border-cloudy/40 flex items-center justify-center mb-6 bg-white text-[#C15F3C] group-hover:bg-[#C15F3C] group-hover:text-pampas group-hover:border-[#C15F3C] transition-all duration-500 shadow-sm">
                <div className="scale-75">
                  {award.icon}
                </div>
              </div>
              <h3 className="text-base font-bold mb-2 leading-tight min-h-[3rem] flex items-center justify-center">
                {award.title}
              </h3>
              <p className="text-[12px] text-[#C15F3C] opacity-70 font-medium">
                {award.subtitle}
              </p>
            </div>
          ))}
        </div>
        <div className='mt-8'>
         <Link
              href="/awards-accolades"
              className="bg-[#C15F3C] text-white px-8 py-3 rounded text-sm font-bold border-2 border-[#C15F3C] hover:scale-105 transition-transform duration-300 shadow-md"
            >
              View All Recognitions
            </Link>
         </div>
      </div>
    </div>
  );
}