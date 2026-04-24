'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItem = {
  label: string;
  panelId: string;
  links: { label: string; href: string }[];
  mainHref?: string;
};

const menuItems: MenuItem[] = [
  {
    label: 'expertise',
    panelId: 'expertise',
    links: [],
  },
  {
    label: 'people',
    panelId: 'people',
    links: [
      { label: 'senior management/ practice leadership', href: '#' },
      { label: 'partners', href: '#' }
    ],
  },
  {
    label: 'innovation',
    panelId: 'innovation',
    mainHref: '/innovation',
    links: [
      { label: 'legaltech & als', href: '/innovation/legaltech-als' },
      { label: 'culture of innovation', href: '/innovation/culture-of-innovation' },
      { label: 'vichaar', href: '/innovation/vichaar' },
      { label: 'prarambh', href: '/innovation/prarambh' },
      { label: 'legaltech education', href: '/innovation/legaltech-education' }
    ],
  },
  {
    label: 'thought leadership',
    panelId: 'thought-leadership',
    mainHref: '/thought-leadership',
    links: [
      { label: 'cam publications', href: '/thought-leadership/cam-publications' },
      { label: 'the new labour codes', href: '/thought-leadership/new-labour-codes' },
      { label: 'newsletters', href: '/thought-leadership/newsletters' },
      { label: 'blogs', href: '/thought-leadership/blogs' },
      { label: 'videos', href: '/thought-leadership/videos' },
      { label: 'published articles', href: '/thought-leadership/published-articles' },
      { label: 'podcasts', href: '/thought-leadership/podcasts' }
    ],
  },
  {
    label: 'about us',
    panelId: 'about-us',
    mainHref: '/about-us',
    links: [
      { label: 'awards & accolades', href: '/about-us/awards-accolades' },
      { label: 'press release', href: '/about-us/press-release' },
      { label: 'cam in news', href: '/about-us/cam-in-news' },
      { label: 'cam middle east', href: '/about-us/cam-middle-east' },
      { label: 'cam singapore', href: '/about-us/cam-singapore' },
      { label: 'cam gift city', href: '/about-us/cam-gift-city' }
    ],
  },
  {
    label: 'careers',
    panelId: 'careers',
    links: [{ label: 'view opportunities', href: '/careers' }],
  },
  {
    label: 'contact us',
    panelId: 'contact-us',
    links: [{ label: 'get in touch', href: '/contactus' }],
  },
];

// ── Expertise data ────────────────────────────────────────────────────────────
// hrefs merged from both Code 1 and Code 2

const camCorporateLinks = [
  { label: 'competition/antitrust',                href: '/expertise/competition-antitrust' },
  { label: 'corporate governance',                 href: '/expertise/corporate-governance' },
  { label: 'employment',                           href: '/expertise/employment' },
  { label: 'esg',                                  href: '/expertise/esg' },
  { label: 'intellectual property',                href: '/expertise/intellectual-property' },
  { label: 'investment funds',                     href: '/expertise/investment-funds' },
  { label: 'mergers & acquisitions/joint venture', href: '/expertise/mergers-acquisitions' },
  { label: 'private client',                       href: '/expertise/private-client' },
  { label: 'private equity',                       href: '/expertise/private-equity' },
  { label: 'public policy',                        href: '/expertise/public-policy' },
  { label: 'real estate',                          href: '/expertise/real-estate' },
  { label: 'taxation',                             href: '/expertise/taxation' },
  { label: 'technology law',                       href: '#' },
  { label: 'data privacy & protection',            href: '#' },
  { label: 'telecommunications',                   href: '#' },
  { label: 'general corporate',                    href: '#' },
];

const camFinanceLinks = [
  { label: 'banking and finance',              href: '/banking_and_finance' },
  { label: 'financial regulatory',             href: '/financial_regulatory' },
  { label: 'infrastructure & project finance', href: '/infrastructure_project_finance' },
  { label: 'insolvency & bankruptcy',          href: '/insolvency_bankruptcy' },
];

const camDisputeLinks = [
  { label: 'arbitration',              href: '/arbitration' },
  { label: 'litigation',               href: '/litigation' },
  { label: 'white collar/investigations', href: '/white_collar' },
];

const camMarketsLinks = [
  { label: 'capital markets',               href: '/capital_markets' },
  { label: 'debt markets',                  href: '/Debt_Markets' },
  { label: 'security markets regulatory',   href: '/Security_Markets_Regulatory' },
];

const sectorLinks = [
  { label: 'aerospace & defence',                              href: '/aerospacedefence' },
  { label: 'energy',                                           href: '/energy' },
  { label: 'fintech',                                          href: '/fintech' },
  { label: 'insurance',                                        href: '/insurance' },
  { label: 'media & entertainment',                            href: '/media_entertainment' },
  { label: 'pharmaceuticals, healthcare & life sciences',      href: '/pharmaceuticals_healthcare' },
  { label: 'technology, media and telecommunications (tmt)',   href: '/tmt' },
];

// ─────────────────────────────────────────────────────────────────────────────

type Props = {
  isOpen: boolean;
  onCloseAction: () => void;
};

export default function FullscreenMenu({ isOpen, onCloseAction }: Props) {
  const [activePanel, setActivePanel] = useState('expertise');
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onCloseAction();
  }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const activeItem = menuItems.find(m => m.panelId === activePanel);

  return (
    <div
      style={{ zIndex: 9999 }}
      className={`fixed inset-0 flex flex-col bg-[#F4F3EE] transition-all duration-400 ${
        isOpen
          ? 'opacity-100 visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="flex items-center px-12 py-5 bg-[#F4F3EE] border-b-2 border-[#B1ADA1]/40 gap-8">
        <button
          onClick={onCloseAction}
          className="text-[#C15F3C] text-2xl w-10 shrink-0 cursor-pointer hover:text-[#B1ADA1] transition-colors"
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-1">
          <div
            className="w-12 h-12 rounded-full bg-[#C15F3C] border-2 border-[#B1ADA1] flex items-center justify-center text-[#F4F3EE] text-lg font-bold shrink-0"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            URE
          </div>
          <span
            className="text-[#C15F3C] text-[14px] font-bold uppercase tracking-tight"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            URE <span className="lowercase">legal advocates</span>
          </span>
        </div>

        <div className="ml-auto">
          <input
            type="text"
            placeholder="type to search"
            className="border-0 border-b border-[#C15F3C] bg-transparent py-1 text-sm text-[#C15F3C] outline-none w-60 placeholder-[#B1ADA1]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-y-auto">
        {/* Sidebar */}
        <nav className="w-64 bg-[#F4F3EE] py-10 shrink-0 border-r border-[#B1ADA1]/30">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.panelId}>
                <button
                  onClick={() => setActivePanel(item.panelId)}
                  className={`w-full text-left px-10 py-3 lowercase text-base transition-all duration-200 border-l-4 ${
                    activePanel === item.panelId
                      ? 'bg-[#B1ADA1]/50 text-[#C15F3C] font-semibold border-l-[#C15F3C]'
                      : 'text-[#C15F3C] border-l-transparent hover:bg-[#B1ADA1]/30 hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Panels */}
        <div className="flex-1 px-16 py-12 max-w-5xl">

          {/* ── Expertise panel ── */}
          {activePanel === 'expertise' && (
            <div className="flex gap-20 flex-wrap">

              {/* Column 1 — cam corporate */}
              <div className="min-w-[180px]">
                <h3 className="text-[#C15F3C] text-lg font-semibold lowercase mb-6">expertise</h3>
                <h4 className="text-[#C15F3C] text-base font-semibold lowercase mb-5">our practices</h4>
                <div className="flex items-center justify-between mb-4">
                  <h4
                    className="text-[#C15F3C] text-lg font-semibold lowercase"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    cam corporate
                  </h4>
                  <span className="text-[#B1ADA1] text-2xl font-light ml-4">−</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {camCorporateLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onCloseAction}
                        className="lowercase text-[13px] font-semibold text-[#C15F3C] hover:bg-[#B1ADA1]/30 px-2 py-1 rounded-sm transition-all whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 — cam finance / dispute / markets */}
              <div className="min-w-[180px] mt-14">

                <div className="flex items-center justify-between mb-4">
                  <h4
                    className="text-[#C15F3C] text-lg font-semibold lowercase"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    cam finance
                  </h4>
                  <span className="text-[#B1ADA1] text-2xl font-light ml-4">−</span>
                </div>
                <ul className="flex flex-col gap-3 mb-8">
                  {camFinanceLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onCloseAction}
                        className="lowercase text-[13px] font-semibold text-[#555] hover:text-[#C15F3C] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4">
                  <h4
                    className="text-[#C15F3C] text-lg font-semibold lowercase"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    cam dispute resolution
                  </h4>
                  <span className="text-[#B1ADA1] text-2xl font-light ml-4">−</span>
                </div>
                <ul className="flex flex-col gap-3 mb-8">
                  {camDisputeLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onCloseAction}
                        className="lowercase text-[13px] font-semibold text-[#555] hover:text-[#C15F3C] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4">
                  <h4
                    className="text-[#C15F3C] text-lg font-semibold lowercase"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    cam markets
                  </h4>
                  <span className="text-[#B1ADA1] text-2xl font-light ml-4">−</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {camMarketsLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onCloseAction}
                        className="lowercase text-[13px] font-semibold text-[#555] hover:text-[#C15F3C] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 — sectors */}
              <div className="min-w-[180px]">
                <h4 className="text-[#C15F3C] text-base font-semibold lowercase mb-5">sectors</h4>
                <ul className="flex flex-col gap-3 mb-8">
                  {sectorLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onCloseAction}
                        className="lowercase text-[13px] font-semibold text-[#555] hover:text-[#C15F3C] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h4 className="text-[#C15F3C] text-base font-semibold lowercase mb-5">stand out deals</h4>
              </div>
            </div>
          )}

          {/* ── Other panels ── */}
          {activePanel !== 'expertise' && activeItem && (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-[#C15F3C] text-lg font-semibold lowercase">{activeItem.label}</h3>
                {activeItem.mainHref && (
                  <Link
                    href={activeItem.mainHref}
                    onClick={onCloseAction}
                    className="text-[11px] uppercase bg-[#C15F3C] text-white px-2 py-0.5 rounded-sm hover:bg-[#B1ADA1]/30 transition-colors"
                  >
                    view page
                  </Link>
                )}
              </div>
              <ul className="flex flex-col gap-3">
                {activeItem.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onCloseAction}
                      className="lowercase text-[13px] font-semibold text-[#555] hover:text-[#C15F3C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}