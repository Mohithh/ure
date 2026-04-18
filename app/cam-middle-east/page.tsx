// app/cam-middle-east/page.tsx
import PageTemplate from '@/app/components/pagetemplate';

// Define the type for an offering item from the API
interface ApiOffering {
  name: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// This is a Server Component, so we can fetch data directly
async function getOfferingsData(): Promise<ApiOffering[]> {
  try {
    const res = await fetch('https://cms.urelegal.in/api/content/items/Offeringmiddleeast', {
      cache: 'no-store', // Always get fresh data
      // OR use: next: { revalidate: 3600 } for periodic updates
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch offerings: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Fetched Middle East offerings:', data); // For debugging
    return data;
  } catch (error) {
    console.error('Error fetching Middle East offerings data:', error);
    return [];
  }
}

export default async function CAMMiddleEastPage() {
  // Fetch offerings data from API
  const apiOfferings = await getOfferingsData();
  
  const sidebar = (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-sm">
        <a href="#" className="w-8 h-8 bg-[#F4F3EE] rounded flex items-center justify-center hover:bg-[#C15F3C]/10">in</a>
        <a href="#" className="w-8 h-8 bg-[#F4F3EE] rounded flex items-center justify-center hover:bg-[#C15F3C]/10">x</a>
        <a href="#" className="w-8 h-8 bg-[#F4F3EE] rounded flex items-center justify-center hover:bg-[#C15F3C]/10">f</a>
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
      title="cam middle east"
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
            <strong>cam middle east</strong> is headquartered in the Abu Dhabi Global Market (ADGM). Our strategic location provides access to world-class infrastructure and competitive outreach in one of the most vibrant and high growth-potential markets globally, including in the neighbouring Emirate of Dubai as well.
          </p>
          <p>
            cam middle east is fully integrated with CAM's team in India, fostering cross-border and cross-practice collaboration. Our attorneys have a rich history of representing high-profile clients in complex transactions across energy, corporate transactions, M&A, and investment funds.
          </p>
        </div>

        <div className="w-full border-t pt-6">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Our Offering</h3>

          <div className="relative">
            <div className="border-4 border-[#4a1532] p-8">
              {apiOfferings.length > 0 ? (
                <ul className="space-y-3 text-sm text-[#1a1a1a] list-none">
                  {apiOfferings.map((offering, index) => (
                    <li key={offering._id || index}>
                      {offering.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No offerings data available at the moment.
                </p>
              )}
            </div>
            <div className="absolute -right-6 -top-6 w-8 h-12 bg-[#D4A464]" />
          </div>
        </div>

        <p className="text-sm text-gray-700">
          CAM Middle East resident partners are <a href="#" className="text-[#C15F3C] hover:underline">Subhojit Sadhu</a> and <a href="#" className="text-[#C15F3C] hover:underline">Himanshu Chahar</a>.
        </p>
      </div>
    </PageTemplate>
  );
}