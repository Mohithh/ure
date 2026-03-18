import Link from 'next/link';

export default function NarrowBar() {
  const links = [
    { label: 'Our People', href: '#' },
    { label: 'About us', href: '#' },
    { label: 'Our Practices', href: '#' },
    { label: 'Sectors', href: '#' },
    { label: 'Awards & Accolades', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'LinkedIn Feed', href: '#' },
  ];

  return (
    <div className="bg-[#F4F3EE] text-[#C15F3C] w-full py-2 px-4 md:px-8 text-[13px] md:text-sm font-semibold tracking-wider uppercase border-b border-[#E5E0D8]">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-end items-center gap-4 md:gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:text-[#B1ADA1] transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
