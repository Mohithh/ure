'use client';

import { useState } from 'react';
import PageTemplate from '../../components/pagetemplate';
import Link from 'next/link';
import ContactForm from '../../components/contact-form';

export default function MergersAcquisitionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    {
      title: "Public & Private M&A",
      desc: "We advise on the full spectrum of deal-making, from multi-billion dollar public takeovers to private acquisitions, disposals, and distressed M&A."
    },
    {
      title: "Strategic Joint Ventures",
      desc: "Structuring complex partnerships and technical collaborations across sectors, with a focus on robust governance and dispute resolution frameworks."
    },
    {
      title: "Cross-Border Transactions",
      desc: "Our team excels in managing outbound and inbound investments, navigating multi-jurisdictional challenges and foreign exchange regulations."
    }
  ];

  const highlights = [
    { title: "Signature", value: "Practice", desc: "Recognized as the gold standard for innovation and speed in executing the most complex transactions." },
    { title: "Deal", value: "Makers", desc: "Advising on many of India's 'first-ever' deal structures and industry-defining acquisitions." },
    { title: "Trusted", value: "Advisers", desc: "The firm of choice for global Fortune 500 companies and leading Indian conglomerates." },
  ];

  return (
    <PageTemplate
      title="Mergers & Acquisitions / JV"
      subtitle="Innovative deal-making and strategic advisory for India's most complex corporate transactions."
      category="Expertise"
      breadcrumb="M&A / Joint Venture"
      heroImage="/images/practice/mergers-acquisitions-hero.jpg"
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
            Our signature practice, Mergers & Acquisitions, has earned praise for its innovative approach to transactions. 
            We regularly advise on some of India's largest and most complex deals, providing solutions that are both legally sound and commercially focused.
          </p>
          <p className="mt-4 text-lg text-black/80 leading-relaxed font-light">
            Whether it's a strategic entry into the Indian market through a Joint Venture or a high-stakes competitive takeover bid, 
            our team brings unparalleled experience and an ahead-of-the-curve mindset to every negotiation.
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
      <p className="text-[#C15F3C] font-semibold text-sm mb-4">Partner (Head - M&A Practice)</p>
      <div className="flex flex-col gap-2 w-full mt-4">
        <a href="mailto:hq@urelegal.com" className="text-xs font-bold text-[#5a5651] hover:text-[#C15F3C] transition-colors border border-[#B1ADA1]/50 py-3 bg-white">EMAIL ME</a>
        <button onClick={onConnect} className="text-xs font-bold text-white bg-[#C15F3C] hover:bg-[#a84e2e] transition-colors py-3 uppercase tracking-widest shadow-sm">CONNECT</button>
      </div>
    </div>
  );
}
