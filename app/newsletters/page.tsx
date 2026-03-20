import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';

const latestNewsletters = [
  {
    series: "the employment quarterly",
    title: "Alert: Supreme Court to examine validity of the IW regime under Provident Fund Law",
    date: "March 2026",
    seriesColor: "#C15F3C"
  },
  {
    series: "case in point",
    title: "Judicial Developments under the Arbitration Act",
    date: "February 2026",
    seriesColor: "#C15F3C"
  },
  {
    series: "ure bulletin",
    title: "URE Bulletin: October – December 2025",
    date: "February 2026",
    seriesColor: "#1a1a1a"
  },
  {
    series: "insight",
    title: "Alert: Summary Note – Synthetic Information Related Amendments to Intermediary Guidelines",
    date: "February 2026",
    seriesColor: "#C15F3C"
  }
];

const newsletterSeries = [
  {
    name: "ure.ai",
    desc: "Insights on Artificial Intelligence (AI) in Legal Services",
    seriesColor: "#1a1a1a"
  },
  {
    name: "case in point",
    desc: "Quick alerts and updates on the latest happenings in dispute resolution and litigation.",
    seriesColor: "#C15F3C"
  },
  {
    name: "ure bulletin",
    desc: "A quarterly newsletter about regulatory updates from prominent Financial Institutions of the country.",
    seriesColor: "#1a1a1a"
  },
  {
    name: "insight",
    desc: "Get updates on key developments across various sectors and practices in corporate law.",
    seriesColor: "#C15F3C"
  },
  {
    name: "iprecis",
    desc: "A carefully curated quarterly roundup of significant events/cases in the IP sector in India.",
    seriesColor: "#1a1a1a"
  },
  {
    name: "prop digest",
    desc: "Get quarterly insights and updates from the latest developments in the real estate sector.",
    seriesColor: "#C15F3C"
  },
  {
    name: "synapse",
    desc: "A quarterly update on the pharmaceutical, life sciences and healthcare industry.",
    seriesColor: "#1a1a1a"
  },
  {
    name: "tax scout",
    desc: "Quarterly updates on the recent developments in direct and indirect tax laws.",
    seriesColor: "#C15F3C"
  },
  {
    name: "the employment quarterly",
    desc: "It covers key Central and State level legislative updates with respect to employment and labor laws.",
    seriesColor: "#1a1a1a"
  }
];

export default function NewslettersPage() {
  return (
    <PageTemplate
      title="Newsletters"
      subtitle="Update yourself with the latest in law"
      category="Thought Leadership"
      showHero={false}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="space-y-16 pb-20">

        {/* Intro Text */}
        <p className="text-xl font-semibold text-[#1a1a1a]">
          Review our periodic newsletters with detailed analysis and significant takeaways.
        </p>

        {/* Latest Newsletters Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-normal text-[#1a1a1a]">Latest Newsletters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNewsletters.map((item, idx) => (
              <div key={idx} className="border border-[#B1ADA1]/30 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow bg-white group">
                {/* Series Name */}
                <span
                  className="text-base font-bold italic"
                  style={{ color: item.seriesColor }}
                >
                  {item.series}
                </span>

                {/* Article Title */}
                <h3 className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors leading-snug flex-1">
                  {item.title}
                </h3>

                {/* Date */}
                <p className="text-gray-500 text-sm">{item.date}</p>

                {/* Download Icon */}
                <div>
                  <button className="w-9 h-9 rounded-full border-2 border-[#C15F3C]/60 hover:bg-[#C15F3C] hover:border-[#C15F3C] flex items-center justify-center transition-all group/btn">
                    <span className="text-[#C15F3C] group-hover/btn:text-white text-sm">↓</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe Banner */}
        <section className="relative w-full min-h-[260px] bg-[#1a1a1a] flex items-center overflow-hidden">
          {/* Background overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C15F3C]/30 to-[#1a1a1a]/80"></div>
          {/* Content box */}
          <div className="relative z-10 bg-white/95 mx-8 md:mx-16 p-10 max-w-2xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
              Join 10,000+ decision makers and subscribe to URE Legal newsletters
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Stay up to date with all the significant developments in Indian corporate and commercial law that impact the corporate ecosystem.
            </p>
            <button className="bg-[#C15F3C] text-white px-8 py-3 font-semibold hover:bg-[#a0502f] transition-colors">
              Subscribe
            </button>
          </div>
        </section>

        {/* All Newsletter Series Grid */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsletterSeries.map((series, idx) => (
              <div key={idx} className="bg-[#F4F3EE]/60 border border-[#B1ADA1]/20 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow group">
                {/* Series Name */}
                <span
                  className="text-xl font-bold italic"
                  style={{ color: series.seriesColor }}
                >
                  {series.name}
                </span>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {series.desc}
                </p>

                {/* CTA */}
                <Link
                  href="#"
                  className="inline-block bg-[#C15F3C] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#a0502f] transition-colors w-fit"
                >
                  Click here
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageTemplate>
  );
}
