'use client';

import { useState } from 'react';
import PageTemplate from '../../components/pagetemplate';
import Link from 'next/link';
import ContactForm from '../../components/contact-form';

export default function CompetitionAntitrustPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    { title: "Market Share", value: "30%+", desc: "Advised on over 30% of merger notifications filed in 2024-25." },
    { title: "Client Base", value: "Global", desc: "Advisor to several Fortune 500 companies and major Indian conglomerates." },
    { title: "Policy Impact", value: "Strategic", desc: "Key insights provided to the regulator and Ministry on competition policy." },
  ];

  const servicePillars = [
    {
      title: "Merger Control",
      desc: "Our team has an enviable track record in obtaining merger control clearances for marquee transactions. We specialize in Phase II investigations, designing remedy packages, and integration planning."
    },
    {
      title: "Behavioural / Enforcement",
      desc: "Market-leading enforcement practice known for raising novel substantive and procedural issues. We represent clients in precedent-setting contentious matters before the CCI and the Supreme Court."
    },
    {
      title: "Risk Assessment & Compliance",
      desc: "Strategic advice on market entry, go-to-market strategy, and risk mitigation. We design and implement world-class compliance programmes and conduct mock dawn raids."
    }
  ];

  return (
    <PageTemplate
      title="Competition/Antitrust"
      subtitle="At the forefront of legal and regulatory developments, delivering pragmatic and bespoke solutions for complex antitrust issues."
      category="Expertise"
      breadcrumb="Competition/Antitrust"
      heroImage="/images/practice/competition-antitrust-hero.png"
      showHero={true}
      showContactForm={false}
      sidebar={<PracticeContactHead onConnect={() => setIsModalOpen(true)} />}
    >
      {/* ── SEO Structured Content ── */}
      <article className="space-y-12 transition-all duration-500">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-[#C15F3C] uppercase tracking-tight">Overview</h2>
            <div className="flex-1 h-px bg-[#B1ADA1]/30"></div>
          </div>
          <p className="text-lg text-black/80 leading-relaxed font-light">
            Our Competition/Antitrust team is deeply invested in devising innovative and practical solutions to address complex antitrust issues, 
            backed by years of experience, credibility, and active interface with regulators. We collaborate with reputed economists and senior litigators 
            to provide a holistic approach to every mandate.
          </p>
          <p className="mt-4 text-lg text-black/80 leading-relaxed font-light">
            The team has developed strong and nuanced expertise, advising domestic and international clients across traditional as well as 
            new-age digital and information technology sectors.
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
            <h2 className="text-2xl font-bold text-[#C15F3C] uppercase tracking-tight">Focus Areas</h2>
            <div className="flex-1 h-px bg-[#B1ADA1]/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {servicePillars.map((pillar, idx) => (
              <div key={idx} className="border-l-4 border-[#C15F3C] pl-6 py-2 hover:bg-[#F4F3EE]/50 transition-colors">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{pillar.title}</h3>
                <p className="text-black/70 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Representative Experience ── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#C15F3C] uppercase tracking-tight">Recent Matters</h2>
            <div className="flex-1 h-px bg-[#B1ADA1]/30"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-[#B1ADA1]/30 p-6 hover:shadow-lg transition-shadow">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C15F3C] mb-2 block">M&A / Competition</span>
              <h4 className="text-lg font-bold mb-3">Investment in Nxtra Data Limited</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Advised Nxtra Data Limited in securing USD 1 billion investment from Alpha Wave Ventures, Carlyle Group, and Anchorage Capital.
              </p>
              <Link href="#" className="text-[#C15F3C] font-bold text-xs uppercase tracking-wider hover:underline">Read Case Study →</Link>
            </div>
            <div className="bg-white border border-[#B1ADA1]/30 p-6 hover:shadow-lg transition-shadow">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C15F3C] mb-2 block">Behavioural / Litigation</span>
              <h4 className="text-lg font-bold mb-3">Landmark Supreme Court Judgment</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Represented a global tech major in a precedent-setting case regarding the imposition of CCI penalties based on 'relevant turnover'.
              </p>
              <Link href="#" className="text-[#C15F3C] font-bold text-xs uppercase tracking-wider hover:underline">Read Case Study →</Link>
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
      <p className="text-[#C15F3C] font-semibold text-sm mb-4">Partner (Head - Competition Law)</p>
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
