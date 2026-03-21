import PageTemplate from '@/app/components/pagetemplate';
import Link from 'next/link';

const categories = [
  {
    name: "Dispute Resolution",
    recentPosts: [
      "From Ambiguity To Authority: Supreme Court Affirms Selective Capital Reduction",
      "Supreme Court Gives Insolvency Claims a Fresh Lease of Life: Debt Restructuring and Substantive Compliance"
    ]
  },
  {
    name: "India Corporate Law",
    recentPosts: [
      "Large Issuers, Easier Listings: MPO and MPS Norms Recast Under SCRR",
      "Arbitration Clauses v. NCLT's Jurisdiction in Shareholder Disputes: Legal Position in India"
    ]
  },
  {
    name: "Private Client",
    recentPosts: [
      "When Sudden Loss Meets Complex Wealth: Preserving Your Legacy Amidst The Unforeseen",
      "Identifying SBO in Pooled Investment Vehicles: Conundrum Continues"
    ]
  },
  {
    name: "Tax",
    recentPosts: [
      "Benami Act versus IBC: NCLT can no longer override Benami statutes",
      "When Tax Chases Talent Across Borders: Huawei and the GST dilemma on secondments"
    ]
  },
  {
    name: "Competition Law",
    recentPosts: [
      "Draft Lesser Penalty Regulations: Key Takeaways",
      "CCI's Draft (Combinations) Regulations: Key Takeaways"
    ]
  }
];

// Sidebar with Recent Posts
const sidebarContent = (
  <div className="space-y-6">
    <h2 className="text-3xl font-light text-[#1a1a1a] border-b border-[#B1ADA1]/30 pb-4">Recent Posts</h2>
    {categories.map((cat, idx) => (
      <div key={idx} className="border border-[#B1ADA1]/30 p-5 space-y-3">
        <h4 className="text-base font-bold text-[#C15F3C]">{cat.name}</h4>
        {cat.recentPosts.map((post, pidx) => (
          <Link
            key={pidx}
            href="#"
            className="block text-sm text-[#1a1a1a] hover:text-[#C15F3C] transition-colors leading-snug border-t border-[#B1ADA1]/20 pt-2 first:border-t-0 first:pt-0"
          >
            {post}
          </Link>
        ))}
      </div>
    ))}
  </div>
);

export default function BlogsPage() {
  return (
    <PageTemplate
      title="Blogs"
      subtitle="A URE Legal Thought Leadership Initiative"
      category="Thought Leadership"
      heroImage="/images/thought-leadership-hero.jpg"
      showHero={true}
      showContactForm={false}
      sidebar={sidebarContent}
    >
      <div className="space-y-4 pb-20">

        {/* Intro text */}
        <div className="space-y-3 pb-8 border-b border-[#B1ADA1]/30">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Welcome to URE Legal Blogs</h2>
          <p className="text-gray-600 text-sm">Below is a list of our blogs across selected practice areas.</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            We have created these blogs as part of our thought leadership initiative and to share key Indian legal developments and updates in an effective and user-friendly manner.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            You may click on the links below to read each of the blogs. The option to subscribe is also available on the relevant blog.
          </p>
        </div>

        {/* Category Banners */}
        <div className="space-y-4 pt-4">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href="#"
              className="flex items-center gap-0 w-full group hover:shadow-md transition-shadow cursor-pointer border border-[#B1ADA1]/20"
            >
              {/* Thumbnail */}
              <div className="w-48 h-28 flex-shrink-0 bg-[#C15F3C]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C15F3C]/40 to-[#1a1a1a]/60 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{cat.name[0]}</span>
                  </div>
                </div>
              </div>

              {/* Category Name */}
              <div className="flex-1 bg-[#F4F3EE]/70 h-28 flex items-center px-8 group-hover:bg-[#C15F3C]/5 transition-colors">
                <h3 className="text-3xl font-bold text-[#C15F3C] group-hover:text-[#a0502f] transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </PageTemplate>
  );
}
