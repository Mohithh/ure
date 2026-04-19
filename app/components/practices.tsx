"use client";
import Link from "next/link";

export default function Practices() {
  return (
    <section className="w-full bg-pampas py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Our Practices (UPPER) */}
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-6 text-[#C15F3C] uppercase tracking-tight">Our Practices</h2>

          <div className="flex items-center mb-12">
            <div className="w-32 h-[3px] bg-[#C15F3C]" />
            <div className="flex-1 h-[1px] bg-cloudy/50" />
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-[#C15F3C]">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2 group cursor-default">
                <span className="text-[#C15F3C]">cam</span> corporate

              </h3>

              <div className="space-y-2.5 text-[13px] opacity-90 font-medium">
                <p>→ <Link href="/expertise/competition-antitrust" className="hover:text-[#cbc7bf] transition-colors">competition/antitrust</Link></p>
                <p>→ <Link href="/expertise/corporate-governance" className="hover:text-[#cbc7bf] transition-colors">corporate governance</Link></p>
                <p>→ <Link href="/expertise/employment" className="hover:text-[#cbc7bf] transition-colors">employment</Link></p>
                <p>→ <Link href="/expertise/esg" className="hover:text-[#cbc7bf] transition-colors">esg</Link></p>
                <p>→ <Link href="/expertise/intellectual-property" className="hover:text-[#cbc7bf] transition-colors">intellectual property</Link></p>
                <p>→ <Link href="/expertise/investment-funds" className="hover:text-[#cbc7bf] transition-colors">investment funds</Link></p>
                <p>→ <Link href="/expertise/mergers-acquisitions" className="hover:text-[#cbc7bf] transition-colors">mergers & acquisitions/joint venture</Link></p>
                <p>→ <Link href="/expertise/private-client" className="hover:text-[#cbc7bf] transition-colors">private client</Link></p>
                <p>→ <Link href="/expertise/private-equity" className="hover:text-[#cbc7bf] transition-colors">private equity</Link></p>
                <p>→ <Link href="/expertise/public-policy" className="hover:text-[#cbc7bf] transition-colors">public policy</Link></p>
                <p>→ <Link href="/expertise/real-estate" className="hover:text-[#cbc7bf] transition-colors">real estate</Link></p>
                <p>→ <Link href="/expertise/taxation" className="hover:text-[#cbc7bf] transition-colors">taxation</Link></p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2 group cursor-default">
                <span className="text-[#C15F3C]">cam</span> finance

              </h3>

              <div className="space-y-2.5 text-[13px] opacity-90 font-medium">
                <p>→ <Link href="/expertise/banking-finance" className="hover:text-[#cbc7bf] transition-colors">banking and finance</Link></p>
                <p>→ <Link href="/expertise/financial-regulatory" className="hover:text-[#cbc7bf] transition-colors">financial regulatory</Link></p>
                <p>→ <Link href="/expertise/infrastructure-projects" className="hover:text-[#cbc7bf] transition-colors">infrastructure & project finance</Link></p>
                <p>→ <Link href="/expertise/insolvency-bankruptcy" className="hover:text-[#cbc7bf] transition-colors">insolvency & bankruptcy</Link></p>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2 group cursor-default text-[#C15F3C]">
                cam dispute resolution
                {/* <span className="w-4 h-[2px] bg-orange-500 rounded-full" /> */}
              </h3>

              <div className="space-y-2.5 text-[13px] opacity-90 font-medium">
                <p>→ arbitration</p>
                <p>→ litigation</p>
                <p>→ white collar/investigations</p>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2 group cursor-default text-[#C15F3C]">
                cam markets

              </h3>

              <div className="space-y-2.5 text-[13px] opacity-90 font-medium">
                <p>→ capital markets</p>
                <p>→ debt markets</p>
                <p>→ security markets regulatory</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors (LOWER) */}
        <div>
          <h2 className="text-3xl font-medium mb-6 text-[#C15F3C] uppercase tracking-tight">Sectors</h2>

          <div className="flex items-center mb-10">
            <div className="w-32 h-[3px] bg-[#C15F3C]" />
            <div className="flex-1 h-[1px] bg-cloudy/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[#C15F3C] text-[15px] font-medium opacity-90">
            <div className="space-y-4">
              <p>→ aerospace & defence</p>
              <p>→ energy</p>
              <p>→ fintech</p>
              <p>→ insurance</p>
              <p>→ media & entertainment</p>
            </div>

            <div className="space-y-4">
              <p>→ pharmaceuticals, healthcare & life sciences</p>
              <p>→ technology, media and telecommunications (tmt)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
