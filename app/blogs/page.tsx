// app/blogs/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  {
    name: "Dispute Resolution",
    slug: "dispute-resolution",
    recentPosts: [
      "From Ambiguity To Authority: Supreme Court Affirms Selective Capital Reduction",
      "Supreme Court Gives Insolvency Claims a Fresh Lease of Life: Debt Restructuring and Substantive Compliance"
    ]
  },
  {
    name: "India Corporate Law",
    slug: "india-corporate-law",
    recentPosts: [
      "Large Issuers, Easier Listings: MPO and MPS Norms Recast Under SCRR",
      "Arbitration Clauses v. NCLT's Jurisdiction in Shareholder Disputes: Legal Position in India"
    ]
  },
  {
    name: "Private Client",
    slug: "private-client",
    recentPosts: [
      "When Sudden Loss Meets Complex Wealth: Preserving Your Legacy Amidst The Unforeseen",
      "Identifying SBO in Pooled Investment Vehicles: Conundrum Continues"
    ]
  },
  {
    name: "Tax",
    slug: "tax",
    recentPosts: [
      "Benami Act versus IBC: NCLT can no longer override Benami statutes",
      "When Tax Chases Talent Across Borders: Huawei and the GST dilemma on secondments"
    ]
  },
  {
    name: "Competition Law",
    slug: "competition-law",
    recentPosts: [
      "Draft Lesser Penalty Regulations: Key Takeaways",
      "CCI's Draft (Combinations) Regulations: Key Takeaways"
    ]
  }
];

export default function BlogsPage() {
  const [email, setEmail] = useState('');
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSubscribeModal(true);
      setTimeout(() => setShowSubscribeModal(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="bg-[#F4F3EE]">
      {/* HERO SECTION - Centered like all other pages */}
      <div className="relative w-full min-h-[400px] bg-gradient-to-br from-[#2d2926] to-[#4a3b35] flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#C15F3C] blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#C15F3C] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            Blogs
          </h1>
          <p className="text-xl md:text-2xl text-[#F4F3EE]/90 font-light italic">
            A URE Legal Thought Leadership Initiative
          </p>
          <div className="w-20 h-[2px] bg-[#C15F3C] mx-auto mt-8"></div>
        </div>
      </div>

      {/* MAIN CONTENT - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Intro Text */}
            <div>
              <div className="w-12 h-[1px] bg-[#C15F3C]/40 mb-6" />
              <h2 className="text-2xl font-semibold text-[#2d2926] mb-4">
                Welcome to URE Legal Blogs
              </h2>
              <p className="text-sm text-[#5a5651] leading-relaxed mb-3">
                Below is a list of our blogs across selected practice areas.
              </p>
              <p className="text-sm text-[#5a5651] leading-relaxed mb-3">
                We have created these blogs as part of our thought leadership initiative and to share 
                key Indian legal developments and updates in an effective and user-friendly manner.
              </p>
              <p className="text-sm text-[#5a5651] leading-relaxed">
                You may click on the links below to read each of the blogs. The option to subscribe 
                is also available on the relevant blog.
              </p>
            </div>

            {/* Category Banners */}
            <div className="space-y-4 pt-4">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={`/blogs/${cat.slug}`}
                  className="flex items-center gap-0 w-full group border border-[#e0dbd5] bg-white hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Thumbnail Placeholder */}
                  <div className="w-48 h-28 flex-shrink-0 bg-gradient-to-br from-[#C15F3C]/20 to-[#B1ADA1]/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: 'linear-gradient(135deg, #C15F3C, #8B3A1E)' }}
                      >
                        {cat.name.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Category Name */}
                  <div className="flex-1 bg-white h-28 flex items-center px-8 group-hover:bg-[#F4F3EE] transition-colors">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#2d2926] group-hover:text-[#C15F3C] transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="pr-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#C15F3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar with Recent Posts */}
          <div className="space-y-8">
            <div className="bg-white border border-[#e0dbd5] rounded-sm p-6">
              <h2 className="text-xl font-semibold text-[#2d2926] mb-6 pb-3 border-b border-[#e0dbd5]">
                Recent Posts
              </h2>
              
              <div className="space-y-6">
                {categories.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-sm font-semibold text-[#C15F3C] uppercase tracking-wider">
                      {cat.name}
                    </h4>
                    <div className="space-y-2">
                      {cat.recentPosts.map((post, pidx) => (
                        <Link
                          key={pidx}
                          href="#"
                          className="block text-sm text-[#5a5651] hover:text-[#C15F3C] transition-colors leading-snug py-1 border-l-2 border-transparent hover:border-[#C15F3C] pl-3"
                        >
                          {post}
                        </Link>
                      ))}
                    </div>
                    {idx < categories.length - 1 && <div className="h-px bg-[#e8e4de] mt-3" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe to Newsletter Box */}
            <div className="bg-white border border-[#e0dbd5] rounded-sm p-6">
              <h3 className="text-lg font-semibold text-[#2d2926] mb-3">Subscribe to Our Blogs</h3>
              <p className="text-sm text-[#5a5651] mb-5 leading-relaxed">
                Get the latest insights and updates delivered directly to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 bg-[#F4F3EE] border border-[#d8d3d3] text-[#2d2926] text-sm focus:outline-none focus:ring-1 focus:ring-[#C15F3C] transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-[#C15F3C] text-white py-2.5 text-sm font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-[1.02] shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Print/Mail Icons */}
        <div className="flex justify-end gap-3 mt-16 mb-12">
          <div className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center cursor-pointer hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#5a5651] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-white border border-[#e0dbd5] flex items-center justify-center cursor-pointer hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#5a5651] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </div>
        </div>

        {/* Newsletter CTA - White background */}
        <div className="bg-white border border-[#e0dbd5] rounded-sm p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-[#2d2926] mb-3">
            Join 100,000+ decision makers
          </h3>
          <p className="text-[#5a5651] mb-6 max-w-2xl mx-auto text-sm">
            Subscribe to CAM newsletter and stay up to date with all the significant developments 
            in Indian corporate and commercial law that impact the corporate ecosystem.
          </p>
          <div className="flex max-w-md mx-auto gap-3 flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email ID" 
              className="flex-1 px-4 py-3 bg-[#F4F3EE] border border-[#d8d3d3] text-[#2d2926] outline-none focus:ring-2 focus:ring-[#C15F3C] transition-all rounded-sm"
            />
            <button className="bg-[#C15F3C] text-white px-6 py-3 font-semibold hover:bg-[#8B3A1E] transition-all hover:scale-105 shadow-md whitespace-nowrap rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Subscribe Success Modal */}
      {showSubscribeModal && (
        <div className="fixed bottom-8 right-8 bg-[#2d2926] text-white px-6 py-3 rounded-sm shadow-lg animate-fade-in-up z-50">
          <p className="text-sm">✓ Successfully subscribed to blog updates!</p>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}