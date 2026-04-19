'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FullscreenMenu from './fullscreenmenu';

type NavItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: 'expertise',
    href: '/expertise',
    dropdown: [
      { label: 'our practices', href: '/ourpractices' },
      { label: 'sectors', href: '/sectors' },
      { label: 'stand out deals', href: '/standoutdeals' },
    ],
  },
  {
    label: 'people',
    href: '/people',
    dropdown: [
      { label: 'senior management/ practice leadership', href: '/senior-management/practice-leadership' },
      { label: 'partners', href: '/partners' },
    ],
  },
  {
    label: 'innovation',
    href: '/innovation',
    dropdown: [
      { label: 'legaltech & als', href: '/legaltech-als' },
      { label: 'culture of innovation', href: '/culture-of-innovation' },
      { label: 'vichaar', href: '/vichaar' },
      { label: 'prarambh', href: '/prarambh' },
      { label: 'legaltech education', href: '/legaltech-education' },
    ],
  },
  {
    label: 'thought leadership',
    href: '/thought-leadership',
    dropdown: [
      { label: 'cam publications', href: '/cam-publications' },
      { label: 'the new labour codes', href: '/new-labour-codes' },
      { label: 'newsletters', href: '/newsletters' },
      { label: 'blogs', href: '/blogs' },
      { label: 'videos', href: '/videos' },
      { label: 'published articles', href: '/published-articles' },
      { label: 'podcasts', href: '/podcasts' },
    ],
  },
  {
    label: 'about us',
    href: '/about-us',
    dropdown: [
      { label: 'awards & accolades', href: '/awards-accolades' },
      { label: 'press release', href: '/press-release' },
      { label: 'cam in news', href: '/cam-in-news' },
      { label: 'cam middle east', href: '/cam-middle-east' },
      { label: 'cam singapore', href: '/cam-singapore' },
      { label: 'cam gift city', href: '/cam-gift-city' },
    ],
  },
  { label: 'careers', href: '/careers' },
  { label: 'contact us', href: '/contactus' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || '/';

  const suppressedPrefixes = [
    '/innovation',
    '/legaltech-als',
    '/culture-of-innovation',
    '/vichaar',
    '/prarambh',
    '/legaltech-education',
    '/thought-leadership',
    '/about-us',
    '/awards-accolades',
    '/press-release',
    '/cam-in-news',
    '/cam-middle-east',
    '/cam-singapore',
    '/cam-gift-city',
    '/cam-publications',
    '/podcasts',
    '/blogs',
    '/videos',
    '/published-articles',
    '/newsletters',
    '/new-labour-codes',
  ];

  const hideHeaderIcons = suppressedPrefixes.some((p) => {
    if (p.startsWith('/cam-')) {
      return pathname.startsWith('/cam-');
    }
    return pathname === p || pathname.startsWith(p + '/') || pathname.startsWith(p);
  });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F3EE] border-b border-cloudy/30 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl w-full mx-auto py-7 flex items-center justify-between">

          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4 lg:gap-8 shrink-0">
            {/* Hamburger */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen(true)}
              className="flex flex-col justify-between w-8 h-5.5 cursor-pointer shrink-0 gap-1.5"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-full bg-[#C15F3C] transition-all"></span>
              <span className="block h-0.5 w-full bg-[#C15F3C] transition-all"></span>
              <span className="block h-0.5 w-full bg-[#C15F3C] transition-all"></span>
            </button>

            {/* Logo - URE legal advocates */}
            <Link href="/" className="flex items-center gap-1 shrink-0 group">
              <div className="w-9 h-9 rounded-full bg-[#C15F3C] border-2 border-cloudy/30 flex items-center justify-center text-[#F4F3EE] text-xs font-bold transition-transform group-hover:scale-105"
                  style={{ fontFamily: "'EB Garamond', serif" }}>
                URE
              </div>
              <div className="flex flex-col">
                <span className="text-[#C15F3C] text-[14px] font-bold uppercase tracking-tight leading-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  URE <span className="lowercase font-normal">legal advocates</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden lg:flex flex-none justify-center px-4">
            <ul className="flex items-center gap-3 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href ?? '#'}
                    className="text-[#C15F3C] text-xs uppercase font-medium transition-all duration-300 hover:scale-105 hover:bg-[#B1ADA1]/30 px-3 py-2 rounded-md block whitespace-nowrap"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 bg-pampas border border-cloudy/30 min-w-55 shadow-md opacity-0 invisible translate-y-2.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 py-3 z-50">
                      <ul className="list-none">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              className="block px-6 py-2.5 text-[#C15F3C] text-[12px] capitalize hover:scale-105 hover:bg-[#B1ADA1]/30 transition-all duration-200"
                              style={{ fontFamily: "'Open Sans', sans-serif" }}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Social Icons + Search */}
          <div className="flex items-center gap-2 shrink-0">
            {!hideHeaderIcons && (
            <div className="hidden lg:flex items-center gap-2">
              {/* LinkedIn */}
              <Link href="#" className="text-[#C15F3C] p-2 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className="text-[#C15F3C] p-2 hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              {/* YouTube */}
              <Link href="#" className="text-[#C15F3C] p-2 hover:scale-110 transition-all duration-300" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="text-[#C15F3C] p-2 hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
            </div>
            )}
            {/* Search */}
            <Link href="#" className="text-[#C15F3C] p-2 hover:scale-110 transition-all duration-300" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <FullscreenMenu isOpen={menuOpen} onCloseAction={() => setMenuOpen(false)} />
    </>
  );
}
