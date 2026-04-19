// ─── FILE: app/expertise/page.tsx ────────────────────────────────────────────
// Expertise page: tabbed Practice Groups, Sectors tiles, Stand Out Deals list
'use client';
import { useState } from 'react';
import Link from 'next/link';

const tabs = [
    {
        id: 'corp', label: 'URE Corporate',
        head: 'ure Corporate',
        desc: 'End-to-end corporate advisory across M&A, governance, funds and regulatory matters.',
        items: ['Competition/Antitrust', 'Corporate Governance', 'Employment', 'ESG', 'Intellectual Property', 'Investment Funds', 'Mergers & Acquisitions/JV', 'Private Client', 'Private Equity', 'Public Policy', 'Real Estate', 'Taxation'],
    },
    {
        id: 'fin', label: 'URE Finance',
        head: 'ure Finance',
        desc: 'Comprehensive finance practice spanning banking, regulatory and project finance.',
        items: ['Banking and Finance', 'Financial Regulatory', 'Infrastructure & Project Finance', 'Insolvency & Bankruptcy'],
    },
    {
        id: 'dis', label: 'URE Dispute Resolution',
        head: 'ure Dispute Resolution',
        desc: 'Leading dispute resolution practice covering domestic and international matters.',
        items: ['Arbitration', 'Litigation', 'White Collar/Investigations'],
    },
    {
        id: 'mkt', label: 'URE Markets',
        head: 'ure Markets',
        desc: 'Full-spectrum capital markets practice for issuers, intermediaries and investors.',
        items: ['Capital Markets', 'Debt Markets', 'Security Markets Regulatory'],
    },
];

const sectors = [
    { icon: '✈', label: 'Aerospace & Defence' },
    { icon: '⚡', label: 'Energy' },
    { icon: '💳', label: 'Fintech' },
    { icon: '🛡', label: 'Insurance' },
    { icon: '🎬', label: 'Media & Entertainment' },
    { icon: '💊', label: 'Pharmaceuticals, Healthcare & Life Sciences' },
    { icon: '📡', label: 'Technology, Media and Telecommunications (TMT)' },
];

const deals = [
    { n: '01', title: 'Landmark Infrastructure Acquisition', tag: 'M&A', desc: 'Advised the acquirer in one of the largest infrastructure deals in India.', val: '₹18,500 Cr', year: '2024' },
    { n: '02', title: 'Cross-border Fintech Series C Funding', tag: 'Finance', desc: 'Led the transaction for a marquee fintech Series C round with international investors.', val: '$420 Mn', year: '2024' },
    { n: '03', title: 'IPO – Leading Pharma Company', tag: 'Capital Markets', desc: "Managed the full IPO process for one of India's fastest-growing pharmaceutical companies.", val: '₹4,200 Cr', year: '2023' },
    { n: '04', title: 'International Arbitration Win', tag: 'Dispute Resolution', desc: 'Secured a major arbitration award for a Fortune 500 client in a complex cross-border dispute.', val: '$280 Mn', year: '2023' },
    { n: '05', title: 'Real Estate Portfolio Restructuring', tag: 'Real Estate', desc: 'Advised on the restructuring and monetisation of a large commercial real estate portfolio.', val: '₹3,600 Cr', year: '2023' },
];

const subTabs = ['Our Practices', 'Sectors', 'Stand Out Deals'];

export default function ExpertisePage() {
    const [sub, setSub] = useState(0);
    const [active, setActive] = useState('corp');
    const current = tabs.find(t => t.id === active)!;

    return (
        <div className="min-h-screen bg-[#F4F3EE]">
            {/* Sub-tab nav */}
            <nav className="border-b border-[#B1ADA1]/30 bg-white px-[clamp(2.5rem,5vw,4rem)]">
                <div className="max-w-screen-xl mx-auto flex gap-0">
                    {subTabs.map((s, i) => (
                        <button key={s} onClick={() => setSub(i)}
                            className={`px-6 py-4 text-[12px] font-semibold uppercase tracking-wider border-b-2 transition-colors cursor-pointer bg-transparent border-l-0 border-r-0 border-t-0 ${sub === i ? 'border-[#C15F3C] text-[#C15F3C]' : 'border-transparent text-[#B1ADA1] hover:text-[#C15F3C]'
                                }`}>
                            {s}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="max-w-screen-xl mx-auto px-[clamp(2.5rem,5vw,4rem)] py-12">

                {/* ── Tab 0: Our Practices ── */}
                {sub === 0 && (
                    <div className="flex gap-0 border border-[#B1ADA1]/30 bg-white">
                        {/* Left sidebar tabs */}
                        <div className="w-[220px] flex-shrink-0 border-r border-[#B1ADA1]/20 py-6">
                            <p className="px-8 text-[10px] uppercase tracking-widest text-[#B1ADA1] font-bold mb-4">Practice Groups</p>
                            {tabs.map(t => (
                                <button key={t.id} onClick={() => setActive(t.id)}
                                    className={`w-full text-left px-8 py-3 text-[13px] bg-transparent border-none cursor-pointer transition-colors ${active === t.id ? 'text-[#C15F3C] font-semibold' : 'text-[#5a5651] hover:text-[#C15F3C]'
                                        }`}>
                                    {t.label}
                                </button>
                            ))}
                        </div>
                        {/* Right panel */}
                        <div className="flex-1 bg-[#cbc7bf] p-6">
                            <h2 className="text-[1.5rem] font-light text-[#2d2926] mb-2">
                                <em className="not-italic font-light">{current.head.split(' ')[0]} </em>
                                <strong className="font-bold">{current.head.split(' ').slice(1).join(' ')}</strong>
                            </h2>
                            <p className="text-[13px] text-[#2d2926]/70 mb-6">{current.desc}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {current.items.map(item => (
                                    <div key={item} className="flex items-center justify-between bg-white/20 hover:bg-white/40 px-4 py-2.5 cursor-pointer group transition-colors">
                                        {item === 'Competition/Antitrust' ? (
                                            <Link href="/expertise/competition-antitrust" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Corporate Governance' ? (
                                            <Link href="/expertise/corporate-governance" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Employment' ? (
                                            <Link href="/expertise/employment" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'ESG' ? (
                                            <Link href="/expertise/esg" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Intellectual Property' ? (
                                            <Link href="/expertise/intellectual-property" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Investment Funds' ? (
                                            <Link href="/expertise/investment-funds" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Mergers & Acquisitions/Joint Venture' ? (
                                            <Link href="/expertise/mergers-acquisitions" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Private Client' ? (
                                            <Link href="/expertise/private-client" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Private Equity' ? (
                                            <Link href="/expertise/private-equity" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Public Policy' ? (
                                            <Link href="/expertise/public-policy" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Real Estate' ? (
                                            <Link href="/expertise/real-estate" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Taxation' ? (
                                            <Link href="/expertise/taxation" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Banking & Finance' ? (
                                            <Link href="/expertise/banking-finance" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Financial Regulatory' ? (
                                            <Link href="/expertise/financial-regulatory" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Infrastructure & Project Finance' ? (
                                            <Link href="/expertise/infrastructure-projects" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : item === 'Insolvency & Bankruptcy' ? (
                                            <Link href="/expertise/insolvency-bankruptcy" className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</Link>
                                        ) : (
                                            <span className="text-[11.5px] text-[#2D2926]/80 group-hover:text-[#C15F3C] transition-colors">{item}</span>
                                        )}
                                        <svg className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Tab 1: Sectors ── */}
                {sub === 1 && (
                    <div>
                        <h2 className="text-[1.9rem] font-medium text-[#C15F3C] mb-2">Sectors</h2>
                        <div className="w-44 h-[2px] bg-[#5a5651] mb-2" />
                        <p className="text-[.875rem] text-[#555] mb-8">We advise clients across key industries, understanding the regulatory landscape and commercial nuances unique to each sector.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {sectors.map(s => (
                                <div key={s.label} className="bg-white border border-[#B1ADA1]/30 p-6 flex flex-col items-center text-center gap-3 cursor-pointer hover:border-[#C15F3C] hover:bg-[#F4F3EE] transition-all group">
                                    <span className="text-2xl">{s.icon}</span>
                                    <span className="text-[13px] font-semibold text-[#5a5651] group-hover:text-[#C15F3C] transition-colors">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Tab 2: Stand Out Deals ── */}
                {sub === 2 && (
                    <div>
                        <h2 className="text-[1.9rem] font-medium text-[#C15F3C] mb-2">Stand Out Deals</h2>
                        <div className="w-44 h-[2px] bg-[#5a5651] mb-2" />
                        <p className="text-[.875rem] text-[#555] mb-8">A selection of our most significant and complex mandates — reflecting the breadth and depth of our capabilities.</p>
                        <div className="flex flex-col">
                            {deals.map((d, i) => (
                                <div key={d.n} className={`flex items-center gap-6 py-5 border-b border-[#B1ADA1]/30 hover:bg-white/50 transition-colors px-4 ${i === 0 ? 'border-t border-[#B1ADA1]/30' : ''}`}>
                                    <span className="text-[10px] text-[#B1ADA1] w-5 flex-shrink-0">{d.n}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-[14px] font-semibold text-[#2d2926]">{d.title}</span>
                                            <span className="text-[9px] bg-[#C15F3C]/10 text-[#C15F3C] px-2 py-0.5 font-bold uppercase tracking-wider">{d.tag}</span>
                                        </div>
                                        <p className="text-[12px] text-[#555]">{d.desc}</p>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <p className="text-[1.1rem] font-bold text-[#C15F3C]">{d.val}</p>
                                        <p className="text-[11px] text-[#B1ADA1]">{d.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
