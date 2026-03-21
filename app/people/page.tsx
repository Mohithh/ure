// ─── FILE: app/people/page.tsx ───────────────────────────────────────────────
// People page: Senior Management / Partners grid with search filter
'use client';
import { useState } from 'react';

type Person = { initials: string; name: string; role: string; practice: string };

const people: Person[] = [
    { initials: 'RN', name: 'Rajiv Nair', role: 'Managing Partner', practice: 'Corporate' },
    { initials: 'PS', name: 'Priya Sharma', role: 'Senior Partner', practice: 'Finance' },
    { initials: 'AM', name: 'Arjun Mehta', role: 'Senior Partner', practice: 'Dispute Resolution' },
    { initials: 'KM', name: 'Kavita Menon', role: 'Partner', practice: 'Markets' },
    { initials: 'AK', name: 'Ananya Krishnan', role: 'Partner', practice: 'Corporate' },
    { initials: 'SP', name: 'Suresh Patel', role: 'Partner', practice: 'Finance' },
    { initials: 'NR', name: 'Neha Reddy', role: 'Partner', practice: 'Dispute Resolution' },
    { initials: 'VK', name: 'Vikram Kumar', role: 'Partner', practice: 'Markets' },
];

const filters = ['All', 'Corporate', 'Finance', 'Dispute Resolution', 'Markets'];

export default function PeoplePage() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const filtered = people.filter(p =>
        (filter === 'All' || p.practice === filter) &&
        (p.name.toLowerCase().includes(search.toLowerCase()) || p.role.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-[#F4F3EE] py-12 px-[clamp(2.5rem,5vw,4rem)]">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-[2.5rem] font-medium text-[#C15F3C] mb-2">Our People</h1>
                <p className="text-[.875rem] text-[#555] mb-10 max-w-2xl">
                    Our lawyers have an unmatched combination of academic pedigree, technical skills and an ahead of the curve mindset.
                </p>

                {/* Search + filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <input
                        type="text" value={search} onChange={e => setSearch(e.target.value)}
                        placeholder="Search by name or role..."
                        className="border border-[#B1ADA1]/50 px-4 py-2.5 text-[13px] bg-white outline-none focus:border-[#C15F3C] w-full sm:w-72"
                    />
                    <div className="flex gap-2 flex-wrap">
                        {filters.map(f => (
                            <button key={f} onClick={() => setFilter(f)}
                                className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-wider border cursor-pointer transition-colors ${filter === f ? 'bg-[#C15F3C] text-white border-[#C15F3C]' : 'bg-white text-[#C15F3C] border-[#C15F3C] hover:bg-[#C15F3C] hover:text-white'
                                    }`}>
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* People grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filtered.map(p => (
                        <div key={p.name} className="bg-white border border-[#B1ADA1]/30 p-6 flex flex-col items-center text-center cursor-pointer hover:border-[#C15F3C] transition-colors group">
                            <div className="w-16 h-16 rounded-full bg-[#C15F3C]/12 text-[#C15F3C] flex items-center justify-center text-[14px] font-bold mb-4 border-2 border-[#C15F3C]/30 group-hover:bg-[#C15F3C] group-hover:text-white transition-all">
                                {p.initials}
                            </div>
                            <p className="text-[14px] font-semibold text-[#2d2926] group-hover:text-[#C15F3C] transition-colors leading-[1.3]">{p.name}</p>
                            <p className="text-[11px] text-[#B1ADA1] mt-1 uppercase tracking-wider">{p.role}</p>
                            <p className="text-[10px] text-[#C15F3C]/70 mt-1">{p.practice}</p>
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <p className="col-span-4 text-center text-[#B1ADA1] py-12">No results found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
