'use client';

import Image from 'next/image';
import { useState } from 'react';

const offices = [
  {
    city: 'Mumbai',
    address: 'Peninsula Chambers, Peninsula Corporate Park, GK Marg, Lower Parel, Mumbai – 400 013, India.',
    phone: '+91 22 66604455',
    img: '/images/map1.jpg',
    person: 'Paridhi Adani',
  },
  {
    city: 'Delhi - NCR',
    address: 'Level 1 & 2, Max Towers, Sector 16B, Noida – 201301, India.',
    phone: '+91 120 669 9000',
    img: '/images/map2.jpg',
    person: 'Rashmi Pradeep',
  },
  {
    city: 'Bengaluru',
    address: 'Prestige Falcon Tower, MG Road, Bengaluru – 560025, India.',
    phone: '+91 80 67922000',
    img: '/images/map3.jpg',
    person: 'Edward James',
  },
  {
    city: 'Ahmedabad',
    address: 'Navratna Corporate Park, Ahmedabad – 380058, India.',
    phone: '+91 79 35039999',
    img: '/images/map4.jpg',
    person: 'Paridhi Adani',
  },
  {
    city: 'Hyderabad',
    address: 'HITEC City, Hyderabad – 500081, India.',
    phone: '+91 40 40000000',
    img: '/images/map5.jpg',
    person: 'Rashmi Pradeep',
  },
  {
    city: 'Chennai',
    address: 'Egmore, Chennai – 600006, India.',
    phone: '+91 44 40000000',
    img: '/images/map6.jpg',
    person: 'Edward James',
  },
];

const fieldStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  maxWidth: 480,
  padding: '11px 14px',
  fontSize: 13,
  border: '1px solid #d8d3d3',
  borderBottom: 'none',
  background: '#ffffff',
  color: '#333333',
  fontFamily: 'inherit',
  outline: 'none',
};

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', email: '', jobTitle: '', company: '', message: '', privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string | boolean) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ firstName: '', email: '', jobTitle: '', company: '', message: '', privacy: false });
  };

  return (
    <div className="bg-[#F4F3EE]">

      {/* HERO */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/contact-hero.jpg"
          alt="contact"
          fill
          className="object-cover"
        />
      </div>

      {/* TITLE BAR */}
      <div className="bg-[#C15F3C] text-white px-10 py-6 text-3xl font-light tracking-wide">
        Contact
      </div>

      {/* ENQUIRY FORM */}
      <div className="px-6 md:px-16 py-10">
        <p className="text-[#C15F3C] text-base italic max-w-3xl mb-8 leading-relaxed">
          For inquiries, please fill in the form below and one of our experts will revert shortly.
        </p>

        {submitted ? (
          <div className="max-w-lg bg-white border border-[#B1ADA1] p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#C15F3C] flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#2d2926] mb-2">Enquiry Received</h3>
            <p className="text-sm text-[#5a5651] leading-relaxed mb-6">
              Thank you for reaching out. A member of our team will be in touch with you shortly.
            </p>
            <button
              onClick={resetForm}
              className="px-8 py-3 bg-[#C15F3C] text-white text-sm font-semibold hover:opacity-85 transition-opacity"
            >
              Send Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: 480, display: 'flex', flexDirection: 'column' }}>

            <input
              type="text" required placeholder="First Name *"
              value={form.firstName} onChange={(e) => set('firstName', e.target.value)}
              style={fieldStyle}
            />
            <input
              type="email" required placeholder="Email *"
              value={form.email} onChange={(e) => set('email', e.target.value)}
              style={fieldStyle}
            />
            <input
              type="text" placeholder="Job Title"
              value={form.jobTitle} onChange={(e) => set('jobTitle', e.target.value)}
              style={fieldStyle}
            />
            <input
              type="text" required placeholder="Company Name *"
              value={form.company} onChange={(e) => set('company', e.target.value)}
              style={fieldStyle}
            />
            <textarea
              required placeholder="Message *" rows={4}
              value={form.message} onChange={(e) => set('message', e.target.value)}
              style={{
                ...fieldStyle,
                borderBottom: '1px solid #d8d3d3',
                borderTop: 'none',
                resize: 'none',
              }}
            />

            {/* Privacy */}
            <div className="flex items-start gap-2.5 mt-3.5 max-w-[480px]">
              <input
                type="checkbox" id="privacy" required
                checked={form.privacy} onChange={(e) => set('privacy', e.target.checked)}
                className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 cursor-pointer accent-[#C15F3C]"
              />
              <label htmlFor="privacy" className="text-xs text-[#5a5651] leading-relaxed cursor-pointer">
                I have read and accept the{' '}
                <a href="#" className="text-[#C15F3C] underline">privacy statement</a>*
              </label>
            </div>

            {/* reCAPTCHA */}
            <div
              className="flex items-center gap-4 border border-[#d0cbc9] rounded-sm mt-3.5"
              style={{ background: '#ffffff', padding: '10px 16px', width: 'fit-content', minWidth: 270 }}
            >
              <div className="w-6 h-6 border-2 border-[#B1ADA1] rounded-sm flex-shrink-0" style={{ background: '#ffffff' }} />
              <span className="text-sm text-[#4a4a4a] flex-1">I&apos;m not a robot</span>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-9 h-9 rounded-full bg-[#4a8fd4] flex items-center justify-center text-white text-[10px] font-bold">
                  rC
                </div>
                <span className="text-[8px] text-[#888] leading-none">reCAPTCHA</span>
                <span className="text-[7px] text-[#bbb] leading-none">Privacy - Terms</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 px-7 py-2.5 bg-[#C15F3C] text-white text-sm font-semibold hover:opacity-85 transition-opacity tracking-wide"
              style={{ width: 'fit-content' }}
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {/* OFFICES */}
      <div className="px-6 md:px-16 pb-16">
        <h2 className="text-2xl text-[#C15F3C] font-light mb-8">Our Offices</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((item, i) => (
            <div key={i} className="bg-[#f4f3ee] shadow-sm">

              {/* MAP */}
              <div className="relative h-[200px]">
                <Image src={item.img} alt="map" fill className="object-cover" />
              </div>

              {/* DETAILS */}
              <div className="p-5">
                <h3 className="text-lg text-[#C15F3C] font-semibold mb-2">{item.city}</h3>
                <p className="text-sm text-gray-700 mb-2">{item.address}</p>
                <p className="text-sm mb-4">T {item.phone}</p>

                {/* KEY CONTACT */}
                <p className="text-[#C15F3C] mb-2">Key Contact</p>
                <div className="flex items-center gap-3 bg-[#eae3dc] p-3">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #C15F3C, #8B3A1E)' }}
                  >
                    {item.person.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.person}</p>
                    <p className="text-xs text-gray-600">Partner</p>
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
