import PageTemplate from '@/app/components/pagetemplate';

export default function LegalTechALSPage() {
  return (
    <PageTemplate 
      title="URE Legaltech and Innovation Certification (ULIC)" 
      category="Innovation"
      heroImage="/images/innovation-hero.jpg"
      showHero={true}
    >
      <div className="space-y-12 pb-16">
        <p className="text-lg text-black leading-relaxed">
          Leveraging modern delivery processes and Alternative Legal Services (ALS) frameworks, URE Legal integrates technology seamlessly into our practice groups. We continuously identify operational bottlenecks and deploy cutting-edge legaltech to increase efficiency across all sectors.
        </p>

        {/* The specific vertical list diagram Placeholder Matching Screenshot */}
        <div className="flex flex-col md:flex-row gap-4 border border-dashed border-[#B1ADA1]/50 p-6 bg-[#F4F3EE]">
          <div className="w-40 bg-[#C15F3C] text-white p-4 flex flex-col justify-between items-center text-center font-bold">
            <div className="py-4 border-b border-white/30 w-full">Service Offerings</div>
            <div className="py-4 border-t border-white/30 w-full mt-32">Technology & Tools</div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1 */}
            <div className="bg-[#C15F3C]/10 border border-[#C15F3C]/30 p-4 space-y-4 text-sm text-[#1a1a1a]">
               <div className="bg-[#C15F3C] text-white text-center font-bold py-3 px-2 leading-tight">eDiscovery &<br/>Litigation Services</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Litigation & Investigations</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Document Review</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Predictive Coding</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Coding/ Categorisation</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Chronologies</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Deposition Summaries</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Statistics & Reporting</div>
               <div className="h-px bg-[#C15F3C]/30 my-4"></div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> Ringtail</div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> Relativity</div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> DISCO</div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> Others</div>
            </div>

            {/* Column 2 */}
            <div className="bg-[#C15F3C]/10 border border-[#C15F3C]/30 p-4 space-y-4 text-sm text-[#1a1a1a]">
               <div className="bg-[#C15F3C] text-white text-center font-bold py-3 px-2 leading-tight">Contract &<br/>Due Diligence Review</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Document Review & Abstraction</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Contract Drafting & Redlining</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Track Deal Points From Prior Deals</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Lease Abstractions</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Risk Management & Regulatory Compliance</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Statistics & Reporting</div>
               <div className="h-px bg-[#C15F3C]/30 my-4"></div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> Kira</div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> Ment</div>
            </div>

            {/* Column 3 */}
            <div className="bg-[#C15F3C]/10 border border-[#C15F3C]/30 p-4 space-y-4 text-sm text-[#1a1a1a]">
               <div className="bg-[#C15F3C] text-white text-center font-bold py-3 px-2 leading-tight">Legal &<br/>Commercial Research</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Primary Research</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Secondary Research</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Legislation Tracking</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Judgement Summaries</div>
               <div className="flex gap-2"><span className="text-[#C15F3C] text-xs">⌝</span> Litigation Research</div>
               <div className="h-px bg-[#C15F3C]/30 my-4" style={{marginTop: '3.5rem'}}></div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> CaseMine</div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> Manupatra</div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> LexisNexis</div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> Westlaw</div>
               <div className="flex gap-2 text-gray-500 font-medium"><span className="text-[#C15F3C]">⌝</span> Libero</div>
            </div>

          </div>
        </div>

        {/* Section matching screenshot exactly */}
        <section className="space-y-6 pt-10">
          <h3 className="text-2xl font-bold text-[#C15F3C]">Advanced Document Automation & Review</h3>
          <p className="text-lg text-black leading-relaxed">
            An integral part of modern legal practice is the rapid, accurate review of complex documents. URE Legal is committed to providing flawless deliverables by leveraging AI-driven review tools that help in:
          </p>
          <ul className="space-y-6 text-lg text-black pl-2">
             <li className="flex items-start gap-3">
               <span className="text-gray-400 font-bold text-xl mt-[-4px]">⌝</span> 
               Eliminating stylistic inconsistencies and drafting anomalies automatically;
             </li>
             <li className="flex items-start gap-3">
               <span className="text-gray-400 font-bold text-xl mt-[-4px]">⌝</span> 
               Drastically reducing the time spent on manual proofreading;
             </li>
             <li className="flex items-start gap-3">
               <span className="text-gray-400 font-bold text-xl mt-[-4px]">⌝</span> 
               Enhancing overall accuracy, empowering our attorneys to focus on high-value strategic counsel.
             </li>
          </ul>
        </section>
      </div>
    </PageTemplate>
  );
}
