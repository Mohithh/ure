import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';

export default function PodcastsPage() {
  const sidebarContent = (
    <div className="space-y-10">
      <div className="bg-[#1a1a1a] text-white p-8 rounded-sm border-t-4 border-[#C15F3C]">
        <h3 className="text-xl font-bold text-[#C15F3C] mb-4 uppercase tracking-wider">Listen on</h3>
        <div className="space-y-4 text-sm font-bold">
          <Link href="#" className="flex items-center gap-3 hover:text-[#C15F3C] transition-colors">
            <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">S</span> Spotify
          </Link>
          <Link href="#" className="flex items-center gap-3 hover:text-[#C15F3C] transition-colors">
            <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">A</span> Apple Podcasts
          </Link>
          <Link href="#" className="flex items-center gap-3 hover:text-[#C15F3C] transition-colors">
            <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">G</span> Google Podcasts
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-black uppercase border-b border-[#B1ADA1]/30 pb-2">Recent Series</h3>
        <ul className="space-y-4 text-sm font-medium">
          <li><Link href="#" className="hover:text-[#C15F3C] flex items-center gap-2"><span>›</span> The Digital Edge</Link></li>
          <li><Link href="#" className="hover:text-[#C15F3C] flex items-center gap-2"><span>›</span> M&A Insights</Link></li>
          <li><Link href="#" className="hover:text-[#C15F3C] flex items-center gap-2"><span>›</span> Dispute Resolution Hub</Link></li>
        </ul>
      </div>
    </div>
  );

  return (
    <PageTemplate 
      title="Podcasts" 
      subtitle="Engaging conversations with legal experts on the trends shaping the future of business and law."
      showHero={false}
      sidebar={sidebarContent}
    >
      <div className="space-y-12 text-black font-sans">
        <div className="w-full h-1 bg-[#C15F3C] opacity-20" /> {/* "that line" */}
        
        <section className="space-y-8">
          <div className="border-l-4 border-[#C15F3C] pl-6 py-2">
            <h2 className="text-4xl font-bold text-black uppercase tracking-tight">Expert Perspectives</h2>
          </div>
          <p className="text-xl leading-relaxed text-gray-800">
            Our podcast series brings together leading legal practitioners and industry visionaries to discuss complex legal matters, 
            regulatory updates, and strategic business trends.
          </p>
        </section>

        <section className="space-y-10">
          <div className="group border border-[#B1ADA1]/30 p-8 hover:bg-[#F4F3EE] transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-[#C15F3C] shrink-0 flex items-center justify-center text-white text-5xl font-bold italic">
                P
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold group-hover:text-[#C15F3C] transition-colors uppercase">Episode 42: The AI Revolution in Legal Services</h3>
                <p className="text-gray-600">Join our experts as they discuss the impact of Generative AI on legal practice and client delivery models.</p>
                <div className="flex gap-4 items-center justify-center md:justify-start pt-2">
                  <span className="text-xs font-bold uppercase tracking-widest bg-[#C15F3C]/10 text-[#C15F3C] px-3 py-1">24 Min</span>
                  <button className="text-[#C15F3C] font-bold text-sm uppercase hover:underline">Play Episode ›</button>
                </div>
              </div>
            </div>
          </div>

          <div className="group border border-[#B1ADA1]/30 p-8 hover:bg-[#F4F3EE] transition-all opacity-80">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-black shrink-0 flex items-center justify-center text-white text-5xl font-bold italic">
                P
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold group-hover:text-[#C15F3C] transition-colors uppercase">Episode 41: Navigating Global ESG Frameworks</h3>
                <p className="text-gray-600">A deep dive into the evolving environmental, social, and governance standards for international corporations.</p>
                <div className="flex gap-4 items-center justify-center md:justify-start pt-2">
                  <span className="text-xs font-bold uppercase tracking-widest bg-black/10 text-black px-3 py-1">32 Min</span>
                  <button className="text-black font-bold text-sm uppercase hover:underline">Play Episode ›</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-1 bg-[#C15F3C] opacity-20 mt-12" />
      </div>
    </PageTemplate>
  );
}
