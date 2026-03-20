import PageTemplate from '@/app/components/pagetemplate';

export default function LegalTechEducationPage() {
  return (
    <PageTemplate 
      title="Education: Legaltech, Innovation and Design Thinking" 
      category="Innovation"
      showHero={true}
    >
      <div className="space-y-16 pb-20">
        
        {/* Main Introduction */}
        <section className="space-y-6">
          <p className="text-xl text-black leading-relaxed font-medium">
            Education is the quickest route to overhaul or bring about a change in a system, irrespective of its size. For lawyers, education is a constant aspect of their professional journey.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By introducing modern Legaltech education to the firm's lawyers and law students alike, URE Legal is not only modernising Legal Service within the firm today, but also helping create a generation of lawyers ready for the challenges of tomorrow.
          </p>
        </section>

        {/* Program 1: ULIC */}
        <section className="space-y-6 pt-10 border-t border-[#B1ADA1]/30">
          <h2 className="text-3xl font-bold text-[#C15F3C]">URE Legaltech and Innovation Certification (ULIC)</h2>
          <div className="space-y-4">
            <p className="text-lg text-black leading-relaxed">
              URE Legal's commitment to cutting-edge advancement has been brought to life with ULIC, a path-breaking initiative which offers a first-of-its-kind learning experience. It focuses both on theoretical and practical aspects of Legaltech and participative modules on New Law and Design Thinking.
            </p>
            <p className="text-lg text-black leading-relaxed">
              ULIC represents the culmination of years of thought leadership that has been designed to foster an innovative mindset and encourage a willingness to challenge the status quo among future lawyers. ULIC is a customised program for law students and legal professionals (including clients) across the country.
            </p>
            <p className="text-lg text-black leading-relaxed">
              We at URE Legal believe that we have to shape the future we envision. ULIC is a step in this direction, and the course is specifically tailored for lawyers who want to deliver cutting-edge legal services to their clients and change the landscape of Legal Service Delivery.
            </p>
          </div>
          
          {/* Feedback CTA Box */}
          <div className="mt-8 bg-[#F4F3EE]/50 border-l-4 border-[#1a1a1a] p-6 hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
            <span className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors">ULIC Feedback Excerpts</span>
            <span className="text-[#C15F3C] text-2xl font-light">→</span>
          </div>
        </section>

        {/* Program 2: AILP */}
        <section className="space-y-6 pt-10 border-t border-[#B1ADA1]/30">
          <h2 className="text-3xl font-bold text-[#C15F3C]">Associate Innovation and Legaltech Program (AILP)</h2>
          <div className="space-y-4">
            <p className="text-lg text-black leading-relaxed">
              We at URE Legal believe in holistically nurturing our homegrown talent to maximise their potential. This specially designed program for newly inducted associates is a significant step in that direction. The program is focused on interacting with each associate, training them in the usage of the array of Legaltech tools available to them, along with modules tailored to challenge their thought process to come up with innovative solutions using design thinking methodologies.
            </p>
            <p className="text-lg text-black leading-relaxed">
              This program enables us to train our associates right at the beginning of their career with us, in a manner where the benefits percolate directly to the practice areas. This serves our vision for the future, wherein Modern and Futuristic Lawyers practice and guide the teams from within, instead of being an external guiding force.
            </p>
          </div>
          
          {/* Feedback CTA Box */}
          <div className="mt-8 bg-[#F4F3EE]/50 border-l-4 border-[#1a1a1a] p-6 hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
            <span className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors">AILP Feedback Excerpts</span>
            <span className="text-[#C15F3C] text-2xl font-light">→</span>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
}
