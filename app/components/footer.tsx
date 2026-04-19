'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = [
  {
    heading: 'Expertise',
    links: [
      { label: 'Our Practices', href: '/expertise' },
      { label: 'Sectors', href: '/sectors' },
      { label: 'Stand Out Deals', href: '/stand-out-deals' },
    ],
  },
  {
    heading: 'People',
    links: [
      { label: 'Senior Management', href: '/senior-management' },
      { label: 'Partners', href: '/partners' },
    ],
  },
  {
    heading: 'Innovation',
    links: [
      { label: 'Legaltech & ALS', href: '/legaltech-als' },
      { label: 'Culture of Innovation', href: '/culture-of-innovation' },
      { label: 'Vichaar', href: '/vichaar' },
      { label: 'Prarambh', href: '/prarambh' },
    ],
  },
  {
    heading: 'About Us',
    links: [
      { label: 'Awards & Accolades', href: '/awards-accolades' },
      { label: 'Press Release', href: '/press-release' },
      { label: 'CAM in News', href: '/cam-in-news' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contactus' },
    ],
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5EDEA] text-[#2C1A12] border-t border-[#C15F3C]/20">

      {/* ── Top band: tagline + newsletter ── */}
      <div className="border-b border-[#C15F3C]/15">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C15F3C] mb-1">Stay Informed</p>
            <h2 className="text-xl font-bold text-[#2C1A12]" style={{ fontFamily: "'EB Garamond', serif" }}>
              Subscribe to our latest insights
            </h2>
          </div>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex w-full md:w-auto md:min-w-[420px]"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 text-sm bg-white border border-[#C15F3C]/30 text-[#2C1A12] placeholder-[#9E8880] outline-none focus:border-[#C15F3C] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#C15F3C] text-white text-[11px] uppercase tracking-widest font-semibold px-6 py-3 hover:bg-[#a84e2e] transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Brand column */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 w-max group">
            <div
              className="w-11 h-11 rounded-full bg-[#C15F3C] flex items-center justify-center text-white text-sm font-bold shrink-0 transition-transform group-hover:scale-105"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              URE
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[13px] font-bold uppercase tracking-tight text-[#2C1A12]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                URE
              </span>
              <span className="text-[11px] font-normal text-[#7A5E52]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Legal Advocates
              </span>
            </div>
          </Link>

          <p className="text-[13px] text-[#6B4F44] leading-relaxed">
            A premier full-service law firm committed to delivering precise, 
            principled legal counsel across practice areas and jurisdictions.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-1">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center border border-[#C15F3C]/30 text-[#C15F3C] hover:bg-[#C15F3C] hover:text-white hover:border-[#C15F3C] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {footerLinks.map(col => (
            <div key={col.heading}>
              <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#C15F3C] mb-4 pb-3 border-b border-[#C15F3C]/20">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#5A3D33] hover:text-[#C15F3C] transition-colors duration-200 leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#C15F3C]/15">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#8C6B60]">
            © {new Date().getFullYear()} URE Legal Advocates. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {['Sitemap', 'Accessibility', 'Privacy Policy', 'Cookie Policy', 'Terms of Use'].map(item => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[11px] text-[#8C6B60] hover:text-[#C15F3C] transition-colors duration-200 uppercase tracking-wide"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  );
}