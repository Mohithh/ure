// app/cam-gift-city/page.tsx
import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';

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

// Helper function to check if an offering item contains the special AMC/AIFs structure
function isComplexOffering(name: string): boolean {
  const complexKeywords = ['End-to-end assistance', 'AMC', 'AIFs', 'IFSC Banking Units', 'Foreign university'];
  return complexKeywords.some(keyword => name.includes(keyword));
}

// Helper function to parse complex offering items into main point + sub-points
function parseComplexOffering(name: string): { main: string; subItems: string[] } | null {
  // Check for the specific complex offering pattern
  if (name.includes('End-to-end assistance') && name.includes('i.')) {
    // Extract sub-points using regex
    const subItems: string[] = [];
    const patterns = [
      /i\.\s*([^i.]+)/,
      /ii\.\s*([^i.]+)/,
      /iii\.\s*([^i.]+)/,
      /iv\.\s*([^i.]+)/,
      /v\.\s*([^i.]+)/
    ];
    
    patterns.forEach(pattern => {
      const match = name.match(pattern);
      if (match && match[1]) {
        subItems.push(match[1].trim());
      }
    });
    
    if (subItems.length > 0) {
      return {
        main: 'End-to-end assistance in setting and structuring',
        subItems: subItems
      };
    }
  }
  
  return null;
}

// Helper function to format offering text for display
function formatOfferingText(name: string): string {
  // Remove any numbering patterns like "i.", "ii.", etc. from display
  let formatted = name.replace(/\s*[ivx]+\.\s*/gi, '');
  formatted = formatted.replace(/\s*\d+\.\s*/g, '');
  return formatted.trim();
}

// This is a Server Component, so we can fetch data directly
async function getOfferingsData(): Promise<ApiOffering[]> {
  try {
    const res = await fetch('https://cms.urelegal.in/api/content/items/Offeringcamgiftcity', {
      cache: 'no-store', // Always get fresh data
      // OR use: next: { revalidate: 3600 } for periodic updates
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch offerings: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Fetched offerings:', data); // For debugging
    return data;
  } catch (error) {
    console.error('Error fetching offerings data:', error);
    return [];
  }
}

export default async function CAMGiftCityPage() {
  // Fetch offerings data from API
  const apiOfferings = await getOfferingsData();
  
  // Transform API data for display
  const renderOfferings = () => {
    return apiOfferings.map((offering, index) => {
      const complexData = parseComplexOffering(offering.name);
      
      if (complexData) {
        // Render complex offering with sub-points
        return (
          <li key={index} className="mb-4">
            <strong>{complexData.main}</strong>
            <ul className="list-none pl-4 mt-2 space-y-1 text-sm text-gray-700">
              {complexData.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  {String.fromCharCode(97 + subIndex)}. {subItem}
                </li>
              ))}
            </ul>
          </li>
        );
      } else {
        // Render regular offering item
        return (
          <li key={index} className="mb-2">
            {formatOfferingText(offering.name)}
          </li>
        );
      }
    });
  };
  
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
            {apiOfferings.length > 0 ? (
              <ol className="list-decimal list-inside space-y-3 text-gray-800">
                {renderOfferings()}
              </ol>
            ) : (
              <p className="text-gray-500 text-center py-8">
                No offerings data available at the moment.
              </p>
            )}
          </div>

          <div className="absolute -right-4 -top-4 w-8 h-8 border-4 border-[#d6a36b] bg-white"></div>
        </div>

        <p className="text-base text-gray-700">
          CAM Gift City resident partners are <Link href="#" className="text-[#C15F3C] hover:underline">Ketaki Gor Mehta</Link> and <Link href="#" className="text-[#C15F3C] hover:underline">Alok Sonkar</Link>.
        </p>
      </div>
    </PageTemplate>
  );
}