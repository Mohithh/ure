import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';

export default function LaunchpadPage() {
  const startups = [
    {
      founders: "Alex Mercer, Sarah Jenkins",
      category: "Legal Research AI",
      stage: "Development",
      about: "A research and analytics platform that helps lawyers gain a competitive edge by identifying trends and patterns from millions of case laws.",
      website: "www.legalmind.tech.example"
    },
    {
      founders: "Michael Chang",
      category: "Managing Legal Talent",
      stage: "Development",
      about: "A talent management platform that connects pre-qualified law students with internship opportunities at law firms, advocate offices, and corporates.",
      website: "www.legalinterns.example.com"
    },
    {
      founders: "David Smith & Emma Patel",
      category: "Increasing Transactional Efficiencies",
      stage: "Ready to Scale",
      about: "SignaturesAI enables truly paperless operations by enabling businesses to digitize document execution through compliant eSign and Document Workflow Automation solutions.",
      website: "www.signaturesai.example.com"
    },
    {
      founders: "Conduct - A Product by EquityTech",
      category: "Culture Compliance / D&I Compliance",
      stage: "MVP and Customer Feedback Stage",
      about: "A SaaS tool for companies to ensure compliance on D&I laws and measure & monitor culture in a data-driven manner.",
      website: "www.equitytech.example/conduct"
    },
    {
      founders: "ResolveTech: Resolve & Evolve",
      category: "Online Dispute Resolution (ODR)",
      stage: "Ready to Scale",
      about: "An ODR platform that specializes in commercial dispute resolution with the aim of making it data-driven and inclusive.",
      website: "www.resolvetech-example.com"
    },
    {
      founders: "PropertyTrust",
      category: "Real Estate Title Legal Opinion",
      stage: "Ready to Scale",
      about: "India's first and fastest online provider of property title reports for banks and financial institutions to enable rapid loan processing.",
      website: "www.propertytrust-example.com"
    }
  ];

  const videos = [
    {
      title: "Prarambh Cohort Two: Jane Smith of LegalAI",
      desc: "Jane Smith, Co-Founder of LegalAI shares her experience as a part of the second cohort of our Legal Tech Incubator - Prarambh",
      date: "5th May 2023"
    },
    {
      title: "Prarambh Cohort Two: John Doe of PropTech",
      desc: "John Doe, Co-Founder of PropTech shares his experience as a part of the second cohort of our Legal Tech Incubator - Prarambh",
      date: "5th May 2023"
    }
  ];

  const sidebarContent = (
    <div className="space-y-6 pt-8 border-t border-[#B1ADA1]/30">
      <h3 className="text-xl font-bold text-[#C15F3C]">FAQs</h3>
      <Link href="#" className="block text-black hover:text-[#C15F3C] font-semibold transition-colors">› Click here for FAQs</Link>
      <Link href="#" className="block text-black hover:text-[#C15F3C] font-semibold transition-colors">› Download collateral</Link>
      <Link href="#" className="block text-black hover:text-[#C15F3C] font-semibold transition-colors mt-6 pt-6 border-t border-[#B1ADA1]/30">› Prarambh Gallery</Link>
    </div>
  );

  return (
    <PageTemplate 
      title="Prarambh" 
      subtitle="URE Legal's specialized incubator guiding legaltech startups as they shape the future of modern law."
      category="Innovation"
      heroImage="/images/innovation-hero.jpg"
      showHero={true}
      sidebar={sidebarContent}
    >
      <div className="space-y-12 pb-20">
        
        {/* Full Intro Section from Live Site transposed to URE Legal */}
        <section className="space-y-6">
          <p className="text-lg text-black leading-relaxed">
            Prarambh is our premier Legaltech incubator, launched with the aim of nurturing young entrepreneurs and developing bespoke legal technology solutions for the global legal market. A collaborative effort between industry experts, startups, developers, and other stakeholders, Prarambh is firmly focused on driving innovation and fostering a spirit of entrepreneurship. 
          </p>
          <div className="pt-6 space-y-4">
            <h4 className="text-2xl font-bold text-[#C15F3C]">Why Prarambh?</h4>
            <p className="text-lg text-black leading-relaxed">
              Prarambh is a pioneering initiative whereby our expertise regarding the legal market and the business of law is focused and directed towards a singular goal – optimum development of the selected startups. This is done by assisting in product development, helping them navigate legal and regulatory compliances, and fine-tuning business skills. We foster these startups by investing time, expertise, and providing market-specific insights.
            </p>
          </div>
          <div className="pt-6 space-y-4">
            <h4 className="text-2xl font-bold text-[#C15F3C]">What we do at Prarambh</h4>
            <p className="text-lg text-black leading-relaxed">
              Prarambh follows a structured flow. After a stringent selection process, every startup that becomes part of the ecosystem goes through a 12-stage program that offers end-to-end solutions, from helping them set up brand building to financial management planning, strategic planning, and networking. Once a market-ready solution is developed, startups are provided exposure to investors.
            </p>
          </div>
        </section>

        {/* Innovation Image Section */}
        <div className="w-full h-[500px] bg-[#F4F3EE] border border-dashed border-[#B1ADA1]/50 flex flex-col items-center justify-center mt-12 group hover:bg-gray-100 transition-colors rounded overflow-hidden">
          <img 
            src="/images/innovation-image.jpg" 
            alt="Innovation" 
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Startups Grid Section */}
        <section className="pt-12 border-t border-[#B1ADA1]/30">
          <h2 className="text-4xl font-normal text-[#1a1a1a] mb-2">Prarambh Success Stories</h2>
          <p className="text-lg text-gray-600 mb-10">Through the course of our cohorts, six startups have been incubated by URE Legal, operating in diverse domains of the ever-changing Legaltech market:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {startups.map((startup, idx) => (
              <div key={idx} className="bg-[#F4F3EE]/50 border-l-4 border-[#C15F3C] p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#1a1a1a]">{startup.founders}</h3>
                <div className="space-y-1 text-sm pt-2">
                  <p className="text-black"><span className="font-bold text-[#C15F3C]">Category:</span> {startup.category}</p>
                  <p className="text-black"><span className="font-bold text-[#C15F3C]">Product Stage:</span> {startup.stage}</p>
                </div>
                <p className="text-black text-sm leading-relaxed border-t border-[#B1ADA1]/20 pt-4 mt-2">
                  <span className="font-bold">About:</span> {startup.about}
                </p>
                <div className="pt-2">
                  <Link href="#" className="text-[#C15F3C] text-sm font-bold hover:underline">{startup.website}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Grid Section */}
        <section className="pt-16">
          <h2 className="text-4xl font-normal text-[#1a1a1a] mb-8">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videos.map((vid, idx) => (
              <div key={idx} className="bg-white border border-[#B1ADA1]/30 flex flex-col hover:shadow-lg transition-shadow">
                <div className="w-full h-[250px] bg-[#1a1a1a] relative flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center group-hover:bg-[#CC0000] transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2 items-center bg-black/70 px-3 py-1 text-white text-xs font-bold">
                    <span>Watch on</span>
                    <span className="bg-white text-black px-1 rounded-sm text-[10px]">YouTube</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 space-y-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] leading-tight hover:text-[#C15F3C] cursor-pointer transition-colors">{vid.title}</h3>
                  <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">{vid.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  );
}
