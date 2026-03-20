import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';

const articles = [
  {
    title: "A Guide to the New Labour Codes",
    date: "December 2025",
  },
  {
    title: "Labour Code Capsule",
    date: "December 2025",
  },
  {
    title: "The Labour Codes: A New Compliance Matrix",
    date: "December 2025",
  },
  {
    title: "Tax Implications of the New Labour Codes",
    date: "December 2025",
  },
  {
    title: "60 Days of the Labour Codes",
    date: "January 2026",
  }
];

export default function LabourCodesPage() {
  return (
    <PageTemplate
      title="The New Labour Codes"
      subtitle="Legal Updates on the New Labour Codes"
      category="Thought Leadership"
      showHero={false}
      showContactForm={false}
      fullWidth={true}
    >
      <div className="pb-20">

        {/* 3-Column Article Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="flex flex-col group">
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#C15F3C] transition-colors leading-snug mb-3">
                {article.title}
              </h3>

              {/* Date */}
              <p className="text-gray-500 text-sm mb-4">{article.date}</p>

              {/* Image Placeholder */}
              <div className="w-full h-[200px] bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center">
                {/* Simulated dark-tinted image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C15F3C]/40 to-[#1a1a1a]/90"></div>
                <div className="relative z-10 text-center px-4">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    Image Placeholder
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-0">
                <Link
                  href="#"
                  className="inline-block bg-[#C15F3C] text-white text-sm font-semibold px-6 py-3 hover:bg-[#a0502f] transition-colors"
                >
                  Click here to read
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </PageTemplate>
  );
}
