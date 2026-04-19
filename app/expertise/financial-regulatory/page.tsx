'use client';

import { useState } from 'react';
import PageTemplate from '../../components/pagetemplate';
import Link from 'next/link';
import ContactForm from '../../components/contact-form';

export default function FinancialRegulatoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    {
      title: "Licensing & Registrations",
      desc: "We assist clients with license applications for banks, NBFCs, payment aggregators, and other regulated entities before the RBI, SEBI, and IRDAI."
    },
    {
      title: "Compliance & Advisory",
      desc: "On-going advisory on the evolving regulatory landscape, including digital lending norms, data privacy in finance, and capital adequacy requirements."
    },
    {
      title: "Investigations & Enforcement",
      desc: "Defending clients in regulatory investigations and enforcement actions, providing strategic counsel on administrative proceedings and show-cause notices."
    }
  ];

  const highlights = [
    { title: "Specialised", value: "Knowledge", desc: "Expertise in navigating the intersecting mandates of multi-sectoral financial regulators in India." },
    { title: "Fintech", value: "Pioneers", desc: "A leading practice in advising on the legal frontiers of digital payments, neo-banking, and insurtech." },
    { title: "Regulatory", value: "Foresight", desc: "Helping businesses anticipate material policy shifts and stay ahead of emerging compliance obligations." },
  ];

  return (
    <PageTemplate
      title="Financial Regulatory"
      subtitle="Strategic advisory and compliance solutions for the complex landscape of financial services in India."
      category="Expertise"
      breadcrumb="Financial Regulatory"
      heroImage="/images/practice/financial-regulatory-hero.jpg"
      showHero={true}
      showContactForm={false}
      sidebar={<PracticeContactHead onConnect={() => setIsModalOpen(true)} />}
    >
      <article className="space-y-12 transition-all duration-500">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-[#C15F3C] uppercase tracking-tight">Practice Overview</h2>
            <div className="flex-1 h-px bg-[#B1ADA1]/30"></div>
          </div>
          <p className="text-lg text-black/80 leading-relaxed font-light">
            Our Financial Regulatory practice provides specialized advice to a broad spectrum of domestic and international financial institutions. 
            In a sector defined by rapid technological change and heightening regulatory scrutiny, we provide the clarity needed to operate with confidence.
          </p>
          <p className="mt-4 text-lg text-black/80 leading-relaxed font-light">
            We work closely with banks, insurers, and fintech innovators to ensure their business models are not only compliant with current RBI 
            and SEBI mandates but are also resilient against future policy shifts.
          </p>
        </section>

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

        <div className="lg:hidden mt-12 pt-12 border-t border-[#B1ADA1]/30">
           <PracticeContactHead onConnect={() => setIsModalOpen(true)} />
        </div>
      </article>

      {/* Modal Overlay Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 lg:p-8">
          <button onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-4xl bg-white shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in duration-300">
             <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-[#C15F3C] z-[3001]">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
             <ContactForm />
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
      <p className="text-[#C15F3C] font-semibold text-sm mb-4">Partner (Head - Financial Regulatory)</p>
      <div className="flex flex-col gap-2 w-full mt-4">
        <a href="mailto:hq@urelegal.com" className="text-xs font-bold text-[#5a5651] hover:text-[#C15F3C] transition-colors border border-[#B1ADA1]/50 py-3 bg-white">EMAIL ME</a>
        <button onClick={onConnect} className="text-xs font-bold text-white bg-[#C15F3C] hover:bg-[#a84e2e] transition-colors py-3 uppercase tracking-widest shadow-sm">CONNECT</button>
      </div>
    </div>
  );
}
