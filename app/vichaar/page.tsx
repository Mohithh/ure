// app/vichaar/page.tsx
import PageTemplate from '@/app/components/pagetemplate';

// Define the type for a Vichaar idea from the API
interface ApiVichaarIdea {
  "name "?: string;  // Note: space in the key name — optional for safety
  name?: string;     // ✅ FIX: Added `name` (without space) as optional fallback
  des?: string;      // ✅ FIX: Made optional to avoid undefined errors
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Define the type for display
interface VichaarIdea {
  title: string;
  text: string;
}

// This is a Server Component, so we can fetch data directly
async function getVichaarIdeas(): Promise<VichaarIdea[]> {
  try {
    const res = await fetch('https://cms.urelegal.in/api/content/items/InnovationVichaar', {
      cache: 'no-store', // Always get fresh data
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Vichaar ideas: ${res.status}`);
    }

    const data: ApiVichaarIdea[] = await res.json();
    console.log('Fetched Vichaar ideas:', data); // For debugging

    // ✅ FIX: Safely access "name " (with space) using bracket notation,
    //         with fallback to "name" (without space), then 'Untitled'
    const transformedData: VichaarIdea[] = data.map((item) => ({
      title: (item["name "] ?? item["name"] ?? 'Untitled').trim(),
      text: item.des ?? '',
    }));

    return transformedData;
  } catch (error) {
    console.error('Error fetching Vichaar ideas:', error);
    return [];
  }
}

export default async function VichaarPage() {
  // Fetch Vichaar ideas from API
  const winningIdeas = await getVichaarIdeas();

  return (
    <PageTemplate
      title="Vichaar"
      category="Innovation"
      heroImage="/images/innovation-hero.jpg"
      showHero={true}
    >
      <div className="space-y-12 pb-16">

        {/* Intro Text - Static content (not from API) */}
        <p className="text-lg text-black leading-relaxed">
          URE Legal&apos;s commitment to fostering a culture of innovation internally and at a fundamental level is demonstrated in the Vichaar initiative. Vichaar is an extension of our innovation agenda to empower each one of us to drive modernization. Vichaar aims at drawing upon the optimism, inspiration, ideas, and opinions of everyone to solve a problem together. Every problem comes with a solution and we, as legal professionals, are naturally inclined to solve problems.
        </p>
        <p className="text-lg text-black leading-relaxed">
          Vichaar actively celebrates creators, risk-takers, and innovators. True progress cannot happen without deep collaboration between stakeholders at every level. We have created an interactive environment at URE Legal, which offers an opportunity for EVERYONE to imagine and create an impact with seamless execution of ideas. The innovation team works closely with the ideators to implement the winning ideas and also with other stakeholders to execute all relevant ideas that originate from Vichaar.
          <br /><br />
          Since our inception, the following winning ideas have been implemented.
        </p>

        {/* Innovation Image Section */}
        <div className="w-full h-[500px] bg-[#F4F3EE] border border-dashed border-[#B1ADA1]/50 flex flex-col items-center justify-center mt-12 group hover:bg-gray-100 transition-colors rounded overflow-hidden">
          <img
            src="/images/innovation-image.jpg"
            alt="Innovation"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* The Tree Image Section */}
        <div className="w-full h-[600px] border border-dashed border-[#B1ADA1]/50 bg-[#F4F3EE]/50 flex items-center justify-center relative mt-16 mb-16 rounded overflow-hidden">
          <img
            src="/images/innovation-image.jpg"
            alt="Innovation Tree"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2-Column Cards Grid - DYNAMIC from API */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {winningIdeas.length > 0 ? (
            winningIdeas.map((idea, idx) => (
              <div
                key={idx}
                className="bg-white border text-center border-[#B1ADA1]/30 p-10 flex flex-col items-center justify-start shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Logo / Icon Placeholder */}
                <div className="w-24 h-24 mb-6 relative">
                  <div className="absolute inset-0 border-2 border-dashed border-[#C15F3C]/20 rounded-full flex items-center justify-center bg-[#C15F3C]/5">
                    <span className="text-[10px] text-[#C15F3C] font-bold uppercase">Icon</span>
                  </div>
                </div>
                <h4 className="text-[#C15F3C] font-bold text-lg mb-4">{idea.title}</h4>
                <p className="text-black text-lg leading-relaxed">
                  {idea.text}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-gray-500">
              No Vichaar ideas available at the moment.
            </div>
          )}
        </div>

      </div>
    </PageTemplate>
  );
}