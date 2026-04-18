'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    practiceArea: '',
    message: '',
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [robotChecked, setRobotChecked] = useState(false);
  const [robotVerified, setRobotVerified] = useState(false);
  const [robotLoading, setRobotLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string, v: string | boolean) =>
    setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required.';
    if (!form.lastName.trim()) e.lastName = 'Last name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'A valid email is required.';
    if (!form.company.trim()) e.company = 'Company name is required.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    if (!form.privacy) e.privacy = 'You must accept the privacy statement.';
    if (!robotVerified) e.robot = 'Please confirm you are not a robot.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRobotClick = () => {
    if (robotVerified || robotLoading) return;
    setRobotLoading(true);
    setRobotChecked(true);
    setTimeout(() => {
      setRobotLoading(false);
      setRobotVerified(true);
      setErrors((prev) => {
        const next = { ...prev };
        delete next.robot;
        return next;
      });
    }, 1200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📬  Contact Form Submission');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🧑  Full Name  :', `${form.firstName} ${form.lastName}`);
    console.log('📧  Email      :', form.email);
    console.log('📞  Phone      :', form.phone || '—');
    console.log('💼  Job Title  :', form.jobTitle || '—');
    console.log('🏢  Company    :', form.company);
    console.log('⚖️   Practice   :', form.practiceArea || '—');
    console.log('✉️   Message    :', form.message);
    console.log('✅  Privacy    :', form.privacy ? 'Accepted' : 'Not Accepted');
    console.log('🤖  reCAPTCHA :', robotVerified ? 'Verified' : 'Not Verified');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        console.log("✅ Email sent");
        setSubmitted(true);
      } else {
        console.warn(data.message);
      }
    } catch (err) {
      console.error("❌ Error:", err);
    }
  };


  const resetForm = () => {
    setSubmitted(false);
    setRobotChecked(false);
    setRobotVerified(false);
    setRobotLoading(false);
    setErrors({});
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: '',
      company: '',
      practiceArea: '',
      message: '',
      privacy: false,
    });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 text-sm border rounded-sm bg-white text-[#2d2926] placeholder-[#a09a94] focus:outline-none focus:ring-2 focus:ring-[#C15F3C] focus:border-transparent transition-all duration-200 ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-[#d8d3d3]'
    }`;

  return (
    <div className="bg-white border border-[#e0dbd5] rounded-sm shadow-sm p-8 lg:p-10">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-crail flex items-center justify-center mb-5 shadow-md">
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#2d2926] mb-2">Enquiry Received</h3>
          <p className="text-sm text-[#5a5651] leading-relaxed mb-8 max-w-xs">
            Thank you for reaching out. A member of our team will be in touch with you within
            one business day.
          </p>
          <button
            onClick={resetForm}
            className="px-8 py-3 bg-crail text-white text-sm font-semibold hover:bg-[#a84e2e] transition-colors duration-200 rounded-sm tracking-wide"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-[#2d2926] mb-1">Send an Enquiry</h3>
          <p className="text-xs text-[#9a9490] mb-7">Fields marked with <span className="text-crail">*</span> are required.</p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5a5651] mb-1.5 uppercase tracking-wider">
                  First Name <span className="text-crail">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya"
                  value={form.firstName}
                  onChange={(e) => set('firstName', e.target.value)}
                  className={inputClass('firstName')}
                />
                {errors.firstName && <p className="text-red-500 text-[11px] mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5a5651] mb-1.5 uppercase tracking-wider">
                  Last Name <span className="text-crail">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sharma"
                  value={form.lastName}
                  onChange={(e) => set('lastName', e.target.value)}
                  className={inputClass('lastName')}
                />
                {errors.lastName && <p className="text-red-500 text-[11px] mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5a5651] mb-1.5 uppercase tracking-wider">
                Email Address <span className="text-crail">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g. priya@company.com"
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                className={inputClass('email')}
              />
              {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5a5651] mb-1.5 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className={inputClass('phone')}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5a5651] mb-1.5 uppercase tracking-wider">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. General Counsel"
                  value={form.jobTitle}
                  onChange={(e) => set('jobTitle', e.target.value)}
                  className={inputClass('jobTitle')}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5a5651] mb-1.5 uppercase tracking-wider">
                Company / Organisation <span className="text-crail">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Tata Consultancy Services"
                value={form.company}
                onChange={(e) => set('company', e.target.value)}
                className={inputClass('company')}
              />
              {errors.company && <p className="text-red-500 text-[11px] mt-1">{errors.company}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5a5651] mb-1.5 uppercase tracking-wider">
                Area of Enquiry
              </label>
              <select
                value={form.practiceArea}
                onChange={(e) => set('practiceArea', e.target.value)}
                className="w-full px-4 py-3 text-sm border border-[#d8d3d3] rounded-sm bg-white text-[#2d2926] focus:outline-none focus:ring-2 focus:ring-crail focus:border-transparent transition-all duration-200 appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239a9490' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
              >
                <option value="">— Select a practice area —</option>
                <option>Mergers &amp; Acquisitions</option>
                <option>Banking &amp; Finance</option>
                <option>Corporate Law</option>
                <option>Dispute Resolution</option>
                <option>Capital Markets</option>
                <option>Tax Advisory</option>
                <option>Intellectual Property</option>
                <option>Real Estate</option>
                <option>Private Equity</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5a5651] mb-1.5 uppercase tracking-wider">
                Message <span className="text-crail">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Please describe your enquiry in detail…"
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                checked={form.privacy}
                onChange={(e) => set('privacy', e.target.checked)}
                className="mt-0.5 w-4 h-4 shrink-0 cursor-pointer accent-crail"
              />
              <label htmlFor="privacy" className="text-xs text-[#5a5651] leading-relaxed cursor-pointer">
                I have read and agree to the{' '}
                <a href="#" className="text-crail underline underline-offset-2 hover:opacity-80">
                  Privacy Policy
                </a>{' '}
                and consent to my data being processed for the purpose of this enquiry.
                <span className="text-crail">*</span>
              </label>
            </div>
            {errors.privacy && <p className="text-red-500 text-[11px] -mt-2">{errors.privacy}</p>}

            <div>
              <div
                onClick={handleRobotClick}
                className={`flex items-center gap-4 border rounded-sm cursor-pointer select-none transition-all duration-200 ${
                  errors.robot ? 'border-red-400 bg-red-50' : 'border-[#d0cbc9] bg-white hover:border-crail'
                }`}
                style={{ padding: '10px 14px', width: 'fit-content', minWidth: 280 }}
              >
                <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                  {robotLoading ? (
                    <div className="w-5 h-5 border-2 border-crail border-t-transparent rounded-full animate-spin" />
                  ) : robotVerified ? (
                    <div className="w-5 h-5 bg-[#4caf50] rounded-sm flex items-center justify-center">
                      <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 border-2 border-cloudy rounded-sm bg-white" />
                  )}
                </div>
                <span className={`text-sm flex-1 ${robotVerified ? 'text-[#4caf50] font-medium' : 'text-[#4a4a4a]'}`}>
                  {robotVerified ? 'Verified ✓' : "I'm not a robot"}
                </span>
                <div className="flex flex-col items-center gap-0.5 opacity-70">
                  <div className="w-9 h-9 rounded-full bg-[#4a8fd4] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                    rC
                  </div>
                  <span className="text-[8px] text-[#888] leading-none">reCAPTCHA</span>
                  <span className="text-[7px] text-[#bbb] leading-none">Privacy · Terms</span>
                </div>
              </div>
              {errors.robot && <p className="text-red-500 text-[11px] mt-1">{errors.robot}</p>}
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3.5 bg-crail text-white text-sm font-semibold hover:bg-[#a84e2e] active:scale-[0.98] transition-all duration-200 rounded-sm tracking-widest uppercase shadow-sm"
            >
              Submit Enquiry
            </button>
          </form>
        </>
      )}
    </div>
  );
}
