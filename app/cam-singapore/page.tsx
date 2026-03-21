import PageTemplate from '@/app/components/pagetemplate';

export default function CAMSingaporePage() {
  const sidebar = (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-sm">
        <a href="#" className="w-8 h-8 bg-[#F4F3EE] rounded flex items-center justify-center hover:bg-[#C15F3C]/10">in</a>
        <a href="#" className="w-8 h-8 bg-[#F4F3EE] rounded flex items-center justify-center hover:bg-[#C15F3C]/10">f</a>
        <a href="#" className="w-8 h-8 bg-[#F4F3EE] rounded flex items-center justify-center hover:bg-[#C15F3C]/10">y</a>
        <a href="#" className="ml-auto text-gray-400">🖨️</a>
      </div>

      <div className="border-t pt-6">
        <h4 className="text-lg font-bold text-[#1a1a1a]">Contact Us</h4>
        <p className="text-sm text-gray-600">For inquiries, please fill in the form below and one of our experts will revert shortly.</p>
        <form className="space-y-3 mt-4">
          <input placeholder="Full Name*" className="w-full border p-3" />
          <input placeholder="Email ID*" className="w-full border p-3" />
          <textarea placeholder="Your Message*" className="w-full border p-3 h-28" />
          <button className="bg-[#1a1a1a] text-white px-6 py-2">Submit</button>
        </form>
      </div>
    </div>
  );

  return (
    <PageTemplate
      title="cam singapore"
      subtitle={undefined}
      category="Innovation"
      heroImage="/images/innovation-hero.jpg"
      showHero={true}
      showContactForm={false}
      fullWidth={false}
      sidebar={sidebar}
    >
      <div className="space-y-10">
        <div className="prose max-w-none text-gray-700">
          <p>
            Cyril Amarchand Mangaldas (CAM) announced the opening of its new foreign law practice in Singapore (CAM Singapore). CAM Singapore operates as a licensed foreign law practice offering Indian law expertise including International Arbitration.
          </p>
          <p>
            Singapore is one of the leading business hubs in the world and enjoys a key role as a gateway to India. CAM aims to assist companies in Singapore and the region in navigating through the Indian legal and regulatory framework.
          </p>
        </div>

        <div className="w-full border-t pt-6">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Our Offering</h3>

          <div className="relative">
            <div className="border-4 border-[#4a1532] p-8">
              <ul className="space-y-3 text-sm text-[#1a1a1a] list-none">
                <li>International Arbitration</li>
                <li>Fintech</li>
                <li>Investment Funds</li>
                <li>Corporate Advisory</li>
                <li>Private Equity</li>
                <li>Capital Markets</li>
                <li>Banking & Finance</li>
                <li>Technology & Data Protection</li>
                <li>Cross Border Insolvency</li>
                <li>Private Client</li>
              </ul>
            </div>
            <div className="absolute -right-6 -top-6 w-8 h-12 bg-[#D4A464]" />
          </div>
        </div>

        <p className="text-sm text-gray-700">CAM Singapore resident Partner is <a className="text-[#C15F3C]">Adarsh Saxena</a>.</p>
      </div>
    </PageTemplate>
  );
}
