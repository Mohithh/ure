import React from 'react';

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
    <div className="bg-[#F4F3EE] text-[#C15F3C] py-1 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl font-medium mb-6">Awards & Accolades</h2>
      <p className="mb-16 text-sm max-w-2xl mx-auto text-black">
        We have been consistently recognised for our commitment to delivering excellence for our clients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {awardsFeatures.map((award, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
            <div className="w-24 h-24 rounded-full border-2 border-[#C15F3C] flex items-center justify-center mb-6 group-hover:bg-[#C15F3C] group-hover:text-[#F4F3EE] transition-colors duration-300 shadow-sm">
              {award.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 max-w-50">
              {award.title}
            </h3>
            <p className="text-sm text-black">
              {award.subtitle}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-16 px-8 py-3 bg-[#C15F3C] text-[#F4F3EE] border-2 border-[#C15F3C] rounded text-sm font-semibold hover:bg-transparent hover:text-[#C15F3C] transition-colors shadow-sm">
        View More
      </button>
    </div>
  );
}