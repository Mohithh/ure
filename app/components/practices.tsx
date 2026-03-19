"use client";

export default function Practices() {
  return (
    <section className=" px-20 py-16 text-[#5a2a55]">
      {/* Our Practices (UPPER) */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Practices</h2>

        <div className="flex items-center mb-12">
          <div className="w-48 h-[2px] bg-[#5a2a55]" />
          <div className="flex-1 h-[1px] bg-[#5a2a55]" />
        </div>

        <div className="grid grid-cols-4 gap-12 text-gray-600">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              cam corporate
              <span className="inline-block w-4 h-[3px] bg-blue-400 ml-2" />
            </h3>

            <div className="space-y-2">
              <p>¬ competition/antitrust</p>
              <p>¬ corporate governance</p>
              <p>¬ employment</p>
              <p>¬ esg</p>
              <p>¬ intellectual property</p>
              <p>¬ investment funds</p>
              <p>¬ mergers & acquisitions/joint venture</p>
              <p>¬ private client</p>
              <p>¬ private equity</p>
              <p>¬ public policy</p>
              <p>¬ real estate</p>
              <p>¬ taxation</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              cam finance
              <span className="inline-block w-4 h-[3px] bg-yellow-400 ml-2" />
            </h3>

            <div className="space-y-2">
              <p>¬ banking and finance</p>
              <p>¬ financial regulatory</p>
              <p>¬ infrastructure & project finance</p>
              <p>¬ insolvency & bankruptcy</p>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              cam dispute resolution
              <span className="inline-block w-4 h-[3px] bg-orange-400 ml-2" />
            </h3>

            <div className="space-y-2">
              <p>¬ arbitration</p>
              <p>¬ litigation</p>
              <p>¬ white collar/investigations</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              cam markets
              <span className="inline-block w-4 h-[3px] bg-green-400 ml-2" />
            </h3>

            <div className="space-y-2">
              <p>¬ capital markets</p>
              <p>¬ debt markets</p>
              <p>¬ security markets regulatory</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sectors (LOWER) */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Sectors</h2>

        <div className="flex items-center mb-10">
          <div className="w-48 h-[2px] bg-[#5a2a55]" />
          <div className="flex-1 h-[1px] bg-[#5a2a55]" />
        </div>

        <div className="grid grid-cols-2 gap-20 text-gray-600 text-lg">
          <div className="space-y-4">
            <p>¬ aerospace & defence</p>
            <p>¬ energy</p>
            <p>¬ fintech</p>
            <p>¬ insurance</p>
            <p>¬ media & entertainment</p>
          </div>

          <div className="space-y-4">
            <p>¬ pharmaceuticals, healthcare & life sciences</p>
            <p>¬ technology, media and telecommunications (tmt)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
