import PageTemplate from '@/app/components/pagetemplate';

export default function NewLabourCodesPage() {
  return (
    <PageTemplate 
      title="The New Labour Codes" 
      category="Thought Leadership"
      heroImage="/images/thought-leadership-hero.jpg"
      showHero={true}
    >
      <div className="space-y-12 pb-16">
        <p className="text-lg text-black leading-relaxed">
          India's new labour codes represent a significant overhaul of the country's employment and labor regulation framework. These comprehensive reforms aim to streamline labor laws, improve ease of doing business, and enhance worker protection through simplified and rational provisions.
        </p>

        <p className="text-lg text-black leading-relaxed">
          URE Legal provides comprehensive legal guidance on navigating the complexities of the four new labour codes: The Code on Wages, The Industrial Relations Code, The Code on Social Security, and The Occupational Safety, Health and Working Conditions Code. Our experts help organizations understand compliance requirements and implement effective policies.
        </p>

        {/* Thought Leadership Image Section */}
        <div className="w-full h-[500px] bg-[#F4F3EE] border border-dashed border-[#B1ADA1]/50 flex flex-col items-center justify-center mt-12 group hover:bg-gray-100 transition-colors rounded overflow-hidden">
          <img 
            src="/images/thought-leadership-image.jpg" 
            alt="Thought Leadership" 
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold text-[#C15F3C]">Key Areas of Focus</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#C15F3C] font-bold">•</span>
              <span className="text-lg text-black">Wage and Salary Structure: Understanding minimum wages and allowance classifications under the new codes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C15F3C] font-bold">•</span>
              <span className="text-lg text-black">Industrial Relations: Compliance with trade union and dispute resolution requirements.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C15F3C] font-bold">•</span>
              <span className="text-lg text-black">Social Security: Mandatory provisions for employee benefits and insurance schemes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C15F3C] font-bold">•</span>
              <span className="text-lg text-black">Occupational Safety: Workplace health and safety standards and compliance procedures.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
