'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#C15F3C] text-[#F4F3EE] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="flex flex-col gap-4">
             <div className="bg-white p-2 rounded inline-block w-max">
               <Image src="/logo.png" alt="URE Legal Advocates" width={64} height={64} className="h-16 w-auto object-contain" />
             </div>
             <p className="opacity-80 text-sm mt-4">Top Law Firm in India</p>
          </div>
          
          {/* Links 1 */}
          <div>
            <ul className="flex flex-col gap-4 text-sm font-semibold">
              <li><a href="#" className="hover:opacity-70 transition-opacity">Expertise</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">People</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Innovation</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Thought Leadership</a></li>
            </ul>
          </div>
          
          {/* Links 2 */}
          <div>
            <ul className="flex flex-col gap-4 text-sm font-semibold">
              <li><a href="#" className="hover:opacity-70 transition-opacity">About Us</a></li>
              <li><a href="/careers" className="hover:opacity-70 transition-opacity">Careers</a></li>
            </ul>
          </div>
          
          {/* Subscribe & Social */}
          <div>
            <p className="font-bold mb-4">Subscribe to our latest articles</p>
            <div className="flex mb-8">
              <input 
                type="email" 
                placeholder="Enter your email ID" 
                className="px-4 py-2 w-full text-black bg-[#F4F3EE] outline-none"
              />
              <button className="bg-[#1a1a1a] text-[#F4F3EE] px-4 py-2 font-bold hover:bg-black transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="font-bold mb-4">Follow us</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-[#F4F3EE] text-[#C15F3C] flex items-center justify-center font-bold hover:scale-110 transition-transform">in</a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#F4F3EE] text-[#C15F3C] flex items-center justify-center font-bold hover:scale-110 transition-transform">f</a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#F4F3EE] text-[#C15F3C] flex items-center justify-center font-bold hover:scale-110 transition-transform">yt</a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#F4F3EE] text-[#C15F3C] flex items-center justify-center font-bold hover:scale-110 transition-transform">ig</a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-[#F4F3EE]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold">
          <p>© URE Legal</p>
          <ul className="flex flex-wrap gap-6 uppercase">
            <li><a href="#" className="hover:opacity-70 transition-opacity">Sitemap</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">Accessibility</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">Cookie Policy</a></li>
            <li><a href="#" className="hover:opacity-70 transition-opacity">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}