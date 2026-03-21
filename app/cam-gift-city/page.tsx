import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';

export default function CAMGiftCityPage() {
  const sidebar = (
    <div className="space-y-6">
      <div className="flex items-center gap-3 justify-end">
        <Link href="#" className="w-8 h-8 rounded-full bg-[#F4F3EE] border border-[#C15F3C] flex items-center justify-center text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white transition-colors" aria-label="LinkedIn">in</Link>
        <Link href="#" className="w-8 h-8 rounded-full bg-[#F4F3EE] border border-[#C15F3C] flex items-center justify-center text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white transition-colors" aria-label="X">X</Link>
        <Link href="#" className="w-8 h-8 rounded-full bg-[#F4F3EE] border border-[#C15F3C] flex items-center justify-center text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white transition-colors" aria-label="Facebook">f</Link>
        <Link href="#" className="w-8 h-8 rounded-full bg-[#F4F3EE] border border-[#C15F3C] flex items-center justify-center text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white transition-colors" aria-label="YouTube">yt</Link>
      </div>
    </div>
  );

  return (
    <PageTemplate
      title="cam gift city"
      category="about us"
      breadcrumb="cam gift city"
      heroImage="/images/about-us-hero.jpg"
      showHero={true}
      sidebar={sidebar}
    >
      <div className="space-y-8">
        <p className="text-base text-gray-700">
          The Government of India has established IFSC in Gujarat namely Gujarat International Finance Tec-City (GIFT) in Gandhinagar, Gujarat. GIFT is being developed as a global financial and IT Services hub, a first of its kind in India, designed to be at or above par with globally benchmarked financial centres. GIFT IFSC has the potential to become an investment gateway for India as apart from providing a global financial platform, it also provides an easy access to the fast-growing Indian economy to global investors.
        </p>

        <p className="text-base text-gray-700">
          cam gift city has a team of 5+ lawyers, with 2 resident partners. In addition to this, various team members of the Firm have been advising an array of stakeholders vis-à-vis the IFSC, GIFT City including the IFSC Authority, we also have a team of erstwhile regulators with expertise in the financial services sector bringing with them indispensable knowledge and understanding of the sector.
        </p>

        <h3 className="text-2xl font-semibold text-[#5b1744]">Our Offering</h3>

        <div className="relative">
          <div className="border-4 border-[#5b1744] p-8 bg-white">
            <ol className="list-decimal list-inside space-y-2 text-gray-800">
              <li><strong>End-to-end assistance in setting and structuring</strong>
                <ul className="list-none pl-4 mt-2 space-y-1 text-sm text-gray-700">
                  <li>i. AMC</li>
                  <li>ii. AIFs</li>
                  <li>iii. IFSC Banking Units (IBUs)</li>
                  <li>iv. Foreign university and education institutions</li>
                  <li>v. Insurance/reinsurance offices</li>
                </ul>
              </li>
              <li>Documentation for financial products and services to be provided out of IFSC</li>
              <li>Advice on structuring and availment of various tax incentives and other benefits and concessions</li>
              <li>Procuring regulatory approvals, if any</li>
              <li>Real Estate and structuring investments for HNIs</li>
              <li>Dispute resolution and policy advocacy</li>
            </ol>
          </div>

          <div className="absolute -right-4 -top-4 w-8 h-8 border-4 border-[#d6a36b] bg-white"></div>
        </div>

        <p className="text-base text-gray-700">
          CAM Gift City resident partners are <Link href="#" className="text-[#C15F3C]">Ketaki Gor Mehta</Link> and <Link href="#" className="text-[#C15F3C]">Alok Sonkar</Link>.
        </p>
      </div>
    </PageTemplate>
  );
}
