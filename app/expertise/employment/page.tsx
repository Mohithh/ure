'use client';

import { useState } from 'react';
import PageTemplate from '../../components/pagetemplate';
import Link from 'next/link';
import ContactForm from '../../components/contact-form';

export default function EmploymentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    {
      title: "Transactional Support",
      desc: "We specialize in employee-related aspects of large-scale M&A, business transfers, and restructuring, ensuring seamless transitions and risk mitigation."
    },
    {
      title: "Advisory & Compliance",
      desc: "From employee handbooks to complex executive compensation and social security, we provide nuanced advice on the ever-evolving regulatory framework."
    },
    {
      title: "Contentious & Crisis Support",
      desc: "Our experts appear before various labour forums, courts, and regulators to handle individual disputes, daw raids, and workplace investigations."
    }
  ];

  const highlights = [
    { title: "National", value: "Presence", desc: "Dedicated team of specialists spread across all major industrial hubs in India." },
    { title: "Strategic", value: "360° View", desc: "Pragmatic and speedy solutions tailored to unique sector-specific requirements." },
    { title: "Focus", value: "Labour Codes", desc: "Deep expertise in the new compliance matrix and the upcoming Labour Codes." },
  ];

  return (
    <PageTemplate
      title="Employment"
      subtitle="Leading from the front to navigate the ever-evolving legal framework of modern workplace dynamics."
      category="Expertise"
      breadcrumb="Employment"
      heroImage="/images/practice/employment-hero.png"
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
            As one of India’s top-most Employment Practices with a truly national presence, we understand how employee matters can expose businesses 
            to significant risks. Our Employment practice leads from the front, working with industry and government bodies on the ever-evolving legal framework.
          </p>
          <p className="mt-4 text-lg text-black/80 leading-relaxed font-light">
            From individual employee disputes, workplace or policy issues, to investigations and employee retention, we help clients across sectors 
            to identify, plan and implement effective risk minimisation strategies.
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

        {/* ── Relevant Matters ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#C15F3C] uppercase tracking-tight">Recent Insights</h2>
            <div className="flex-1 h-px bg-[#B1ADA1]/30"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-[#B1ADA1]/30 p-6 hover:shadow-lg transition-shadow">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C15F3C] mb-2 block">Policy / Advisory</span>
              <h4 className="text-lg font-bold mb-3">Guide to the New Labour Codes</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Analysis of the key changes proposed in the four Labour Codes and their practical impact on industrial relations.
              </p>
              <Link href="#" className="text-[#C15F3C] font-bold text-xs uppercase tracking-wider hover:underline">Read Publication →</Link>
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
      <p className="text-[#C15F3C] font-semibold text-sm mb-4">Partner (Head - Employment Law)</p>
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
