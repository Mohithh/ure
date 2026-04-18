'use client';

import Image from 'next/image';
import ContactForm from '../components/contact-form';

const offices = [
  {
    city: 'Mumbai',
    address: 'Peninsula Chambers, Peninsula Corporate Park, GK Marg, Lower Parel, Mumbai – 400 013, India.',
    phone: '+91 22 66604455',
    img: '/home1.jpeg',
    person: 'Paridhi Adani',
  },
  {
    city: 'Delhi - NCR',
    address: 'Level 1 & 2, Max Towers, Sector 16B, Noida – 201301, India.',
    phone: '+91 120 669 9000',
    img: '/home2.jpeg',
    person: 'Rashmi Pradeep',
  },
  {
    city: 'Bengaluru',
    address: 'Prestige Falcon Tower, MG Road, Bengaluru – 560025, India.',
    phone: '+91 80 67922000',
    img: '/home3.jpeg',
    person: 'Edward James',
  },
  {
    city: 'Ahmedabad',
    address: 'Navratna Corporate Park, Ahmedabad – 380058, India.',
    phone: '+91 79 35039999',
    img: '/home4.jpeg',
    person: 'Paridhi Adani',
  },
  {
    city: 'Hyderabad',
    address: 'HITEC City, Hyderabad – 500081, India.',
    phone: '+91 40 40000000',
    img: '/home5.jpeg',
    person: 'Rashmi Pradeep',
  },
  {
    city: 'Chennai',
    address: 'Egmore, Chennai – 600006, India.',
    phone: '+91 44 40000000',
    img: '/home6.jpeg',
    person: 'Edward James',
  },
];

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.046 11.046 0 005.516 5.516l1.154-2.308a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17.72V21a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 22 66604455',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'enquiries@camlaw.com',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Headquarters',
    value: 'Peninsula Chambers, Lower Parel, Mumbai – 400 013',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon – Fri: 9:00 AM – 6:30 PM IST',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F4F3EE]">

      {/* HERO */}
      <div className="relative w-full h-[280px]">
        <Image src="/images/contact_us.png" alt="contact" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-end pb-0">
        </div>
      </div>

      {/* TITLE BAR */}
      <div className="bg-crail text-white px-10 py-5 text-3xl font-light tracking-wide">
        Contact Us
      </div>

      {/* MAIN CONTENT — two columns */}
      <div className="px-6 md:px-16 py-14 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: Information Panel ── */}
          <div className="flex flex-col gap-10">

            <div>
              <h2 className="text-2xl font-semibold text-[#2d2926] mb-3">Get in Touch</h2>
              <p className="text-sm text-[#5a5651] leading-relaxed">
                We are always happy to hear from clients, prospective clients, and members of the
                legal community. Whether you have an urgent matter or a general enquiry, our team is
                ready to assist. Please fill out the form and a member of our team will be in touch
                within one business day.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-5">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-crail/10 flex items-center justify-center text-crail shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-crail uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#2d2926]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <hr className="border-[#d8d3d3]" />

            {/* Practice Areas We Handle */}
            <div>
              <h3 className="text-base font-semibold text-[#2d2926] mb-4">Practice Areas We Handle</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Mergers & Acquisitions', 'Banking & Finance', 'Corporate Law',
                  'Dispute Resolution', 'Capital Markets', 'Tax Advisory',
                  'Intellectual Property', 'Real Estate', 'Private Equity',
                ].map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1.5 bg-white border border-[#d8d3d3] text-[#5a5651] rounded-sm font-medium cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#fff8f5] border border-[#f0d9d0] rounded-sm p-5">
              <p className="text-xs text-[#6b5c55] leading-relaxed">
                <strong className="text-crail">Disclaimer:</strong> The information provided
                through this contact form is for general enquiry purposes only and does not
                constitute legal advice. Submitting this form does not create an attorney-client
                relationship. Please do not share any confidential information until a formal
                engagement has been established.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Form Panel ── */}
          <ContactForm />
        </div>
      </div>

      {/* OFFICES */}
      <div className="px-6 md:px-16 pb-16 max-w-7xl mx-auto">
        <hr className="border-[#d8d3d3] mb-12" />
        <h2 className="text-2xl text-crail font-light mb-8 tracking-wide">Our Offices</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((item, i) => (
            <div key={i} className="bg-white border border-[#e0dbd5] shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-[180px]">
                <Image src={item.img} alt="map" fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-base text-crail font-semibold mb-1.5">{item.city}</h3>
                <p className="text-xs text-gray-600 mb-1.5 leading-relaxed">{item.address}</p>
                <p className="text-xs text-gray-500 mb-4">T {item.phone}</p>
                <p className="text-[11px] text-crail uppercase font-semibold tracking-widest mb-2">Key Contact</p>
                <div className="flex items-center gap-3 bg-[#f4f0ea] p-3 rounded-sm">
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #C15F3C, #8B3A1E)' }}
                  >
                    {item.person.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2d2926]">{item.person}</p>
                    <p className="text-xs text-gray-500">Partner</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

