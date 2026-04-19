'use client';

import { useState } from 'react';
import PageTemplate from '../../components/pagetemplate';
import Link from 'next/link';
import ContactForm from '../../components/contact-form';

export default function ESGPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    {
      title: "Advisory & Reporting",
      desc: "We assist companies in non-financial reporting (including BRSR), carbon foot-printing, and implementing long-term sustainability frameworks aligned with global standards."
    },
    {
      title: "Sustainable Finance & Green M&A",
      desc: "Our team advises on green bonds, sustainability-linked loans, and ESG-driven mergers and acquisitions, helping clients capitalize on the low-carbon economy."
    },
    {
      title: "Litigation & Crisis Management",
      desc: "We provide strategic defense in ESG-related litigation, including greenwashing claims and environment-related disputes, across various judicial forums."
    }
  ];

  const highlights = [
    { title: "Interdisciplinary", value: "Approach", desc: "Combining legal expertise with technical insights into environmental science and social safeguards." },
    { title: "Forward", value: "Looking", desc: "Staying ahead of material ESG risks and emerging regulatory obligations in the Indian corporate landscape." },
    { title: "Impact", value: "Strategic", desc: "Helping businesses navigate the intersection of commercial profitability and long-term sustainability." },
  ];

  return (
    <PageTemplate
      title="ESG"
      subtitle="ESG intersects and influences all business operations and decisions. We help you navigate this transition sustainably."
      category="Expertise"
      breadcrumb="ESG"
      heroImage="/images/practice/esg-hero.png"
      showHero={true}
      showContactForm={false}
      sidebar={<PracticeContactHead onConnect={() => setIsModalOpen(true)} />}
    >
      <article className="space-y-12 transition-all duration-500">
        {/* ── Practice Overview ── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-[#C15F3C] uppercase tracking-tight">Practice Overview</h2>
            <div className="flex-1 h-px bg-[#B1ADA1]/30"></div>
          </div>
          <p className="text-lg text-black/80 leading-relaxed font-light">
            ESG (Environmental, Social, and Governance) intersects and influences all business operations and decisions. 
            Businesses and their supply chains face real and material ESG risks, while a low-carbon economy presents enormous opportunities. 
            Regulatory obligations in India are increasing, with non-financial reporting (like BRSR) becoming mandatory for many.
          </p>
          <p className="mt-4 text-lg text-black/80 leading-relaxed font-light">
            Our ESG practice leads from the front, providing an interdisciplinary approach that combines legal academic rigor with 
            practical commercial advice to help our clients manage transition risks and secure a sustainable future.
          </p>
        </section>

        {/* ── Key Highlights (Grid) ── */}
        <section className="bg-[#F4F3EE] p-8 lg:-mx-12 lg:px-12">
          <h2 className="text-xl font-bold text-[#C15F3C] uppercase tracking-tight mb-8">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-[#C15F3C]">{item.value}</span>
                <span className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">{item.title}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Service Pillars ── */}
        <section className="space-y-10">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-[#C15F3C] uppercase tracking-tight">Core Services</h2>
            <div className="flex-1 h-px bg-[#B1ADA1]/30"></div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="border-l-4 border-[#C15F3C] pl-6 py-2 hover:bg-[#F4F3EE]/50 transition-colors">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{pillar.title}</h3>
                <p className="text-black/70 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sustainability Thought Leadership ── */}
        <section className="bg-white border-y border-[#B1ADA1]/30 py-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
                <h2 className="text-2xl font-bold text-[#C15F3C] uppercase tracking-tight">Sustainability Insights</h2>
                <p className="text-black/80 leading-relaxed font-light">
                    Innovation and regulatory foresight are at the heart of our ESG practice. We provide periodic insights into BRSR reporting trends, 
                    net-zero pathways, and the evolving landscape of sustainable finance in India.
                </p>
                <Link href="#" className="inline-block border border-[#C15F3C] text-[#C15F3C] px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-[#C15F3C] hover:text-white transition-all">
                    View ESG Newsletter
                </Link>
            </div>
            <div className="w-full md:w-1/3 h-48 bg-[#F4F3EE] flex items-center justify-center border border-[#B1ADA1]/30">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B1ADA1]">ESG Compliance Hub</span>
            </div>
          </div>
        </section>

        {/* ── Key Contact Mobile ── */}
        <div className="lg:hidden mt-12 pt-12 border-t border-[#B1ADA1]/30">
           <PracticeContactHead onConnect={() => setIsModalOpen(true)} />
        </div>
      </article>

      {/* ── Contact Modal Overlay ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 lg:p-8">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-label="Close modal"
          />
          <div className="relative w-full max-w-4xl bg-white shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in duration-300">
             <button 
               onClick={() => setIsModalOpen(false)}
               className="absolute top-4 right-4 text-gray-500 hover:text-[#C15F3C] transition-colors z-[3001]"
             >
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
             <div className="p-0">
               <ContactForm />
             </div>
          </div>
        </div>
      )}
    </PageTemplate>
  );
}

function PracticeContactHead({ onConnect }: { onConnect: () => void }) {
  return (
    <div className="bg-[#cbc7bf]/30 p-8 flex flex-col items-center text-center rounded-sm">
      <div className="w-32 h-32 rounded-full bg-[#B1ADA1] mb-6 overflow-hidden border-4 border-white shadow-md">
        <img src="/images/people/pradeep-kumar.png" alt="Pradeep Kumar" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-[#1a1a1a]">Pradeep Kumar</h3>
      <p className="text-[#C15F3C] font-semibold text-sm mb-4">Partner (Head - ESG Practice)</p>
      <div className="flex flex-col gap-2 w-full mt-4">
        <a href="mailto:hq@urelegal.com" className="text-xs font-bold text-[#5a5651] hover:text-[#C15F3C] transition-colors border border-[#B1ADA1]/50 py-3 bg-white">
          EMAIL ME
        </a>
        <button 
          onClick={onConnect}
          className="text-xs font-bold text-white bg-[#C15F3C] hover:bg-[#a84e2e] transition-colors py-3 uppercase tracking-widest cursor-pointer shadow-sm hover:shadow-md"
        >
          CONNECT
        </button>
      </div>
    </div>
  );
}
