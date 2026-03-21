'use client';

import Link from 'next/link';
import { useState } from 'react';

const CR = '#C15F3C';
const OR = '#e87722';
const f = "'Open Sans',sans-serif";

const roles = [
    { title: 'HR Manager', desc: 'Human Resources · 5–8 years of experience in a law firm or professional services environment.', type: 'Full Time', location: 'Mumbai' },
    { title: 'Finance Analyst', desc: 'Finance & Accounts · 3–5 years of experience in financial reporting and analysis.', type: 'Full Time', location: 'Delhi' },
    { title: 'IT Infrastructure Lead', desc: 'Information Technology · 6+ years managing IT infrastructure in a large organisation.', type: 'Full Time', location: 'Bangalore' },
    { title: 'Marketing & BD Executive', desc: 'Marketing · 2–4 years of experience in business development or marketing in professional services.', type: 'Full Time', location: 'Mumbai' },
];

export default function BusinessServicesPage() {
    const [applyRole, setApplyRole] = useState<typeof roles[0] | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const p: React.CSSProperties = { fontSize: 13, lineHeight: 1.85, color: '#555', fontFamily: f };
    const inp: React.CSSProperties = { width: '100%', border: '1px solid rgba(177,173,161,.5)', padding: '9px 12px', fontSize: 13, fontFamily: f, outline: 'none', background: '#fff', marginBottom: 10 };

    return (
        <div style={{ background: '#fff', fontFamily: f, minHeight: '100vh', color: '#2b2b2b' }}>
            <div style={{ background: CR, color: '#fff', padding: '1.25rem clamp(1.5rem,5vw,4rem)', fontSize: '1.75rem', fontWeight: 300 }}>
                Business Services
            </div>
            <div style={{ padding: '2rem clamp(1.5rem,5vw,4rem)' }}>
                <p style={{ ...p, fontSize: 14, color: CR, fontWeight: 500, marginBottom: '2rem', maxWidth: 760 }}>
                    We are looking for talented business services professionals to support our legal teams across finance, HR, IT, marketing, and operations.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 860 }}>
                    {roles.map((role, i) => (
                        <div key={i} style={{ border: '1px solid #e5e0d8', padding: '1.4rem 1.75rem', background: '#fff' }}
                            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,.08)')}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2b2b2b', marginBottom: 5, fontFamily: f }}>{role.title}</h3>
                            <p style={{ ...p, marginBottom: 8 }}>{role.desc}</p>
                            <p style={{ fontSize: 12, color: '#999', marginBottom: 14 }}>Work Type&nbsp;<strong style={{ color: '#2b2b2b' }}>{role.type}</strong>&nbsp;&nbsp;|&nbsp;&nbsp;Location&nbsp;<strong style={{ color: '#2b2b2b' }}>{role.location}</strong></p>
                            <button onClick={() => { setApplyRole(role); setSubmitted(false); }} style={{ background: '#e87722', color: '#fff', border: 'none', padding: '7px 20px', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: f, letterSpacing: '.03em', transition: 'opacity .2s' }}
                                onMouseEnter={e => (e.currentTarget.style.opacity = '.82')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
                <Link href="/careers" style={{ display: 'inline-block', marginTop: '1.75rem', fontSize: 13, color: CR, textDecoration: 'underline', fontFamily: f }}>← Back to Careers</Link>
            </div>

            {applyRole && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} onClick={() => setApplyRole(null)}>
                    <div style={{ background: '#fff', maxWidth: 500, width: '100%', padding: '2rem', position: 'relative', fontFamily: f }} onClick={e => e.stopPropagation()}>
                        <button onClick={() => setApplyRole(null)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#B1ADA1' }}>×</button>
                        {!submitted ? (
                            <>
                                <div style={{ borderLeft: `3px solid ${CR}`, paddingLeft: '.75rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2b2b2b' }}>{applyRole.title}</div>
                                    <div style={{ fontSize: 11, color: '#B1ADA1', textTransform: 'uppercase', letterSpacing: '.06em' }}>{applyRole.location}</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                                    <input style={inp} type="text" placeholder="First Name *" />
                                    <input style={inp} type="text" placeholder="Last Name *" />
                                </div>
                                <input style={inp} type="email" placeholder="Email Address *" />
                                <input style={inp} type="tel" placeholder="Phone Number" />
                                <input style={inp} type="text" placeholder="Current Organisation" />
                                <input style={inp} type="text" placeholder="Years of Experience *" />
                                <div style={{ border: '1px dashed rgba(177,173,161,.6)', padding: '1rem', textAlign: 'center', marginBottom: 10, cursor: 'pointer', background: '#F4F3EE' }}>
                                    <div style={{ fontSize: 12, color: '#B1ADA1', fontWeight: 600 }}>📎 Upload CV / Resume</div>
                                    <div style={{ fontSize: 10, color: '#B1ADA1', marginTop: 4 }}>PDF, DOC or DOCX · Max 5MB</div>
                                </div>
                                <textarea style={{ ...inp, resize: 'none', height: 80 }} placeholder="Cover Note (optional)" />
                                <button onClick={() => setSubmitted(true)} style={{ width: '100%', background: CR, color: '#fff', border: 'none', padding: '11px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: f }}>Submit Application →</button>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <div style={{ fontSize: 40, marginBottom: '1rem' }}>✓</div>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: CR, marginBottom: '.5rem' }}>Application Submitted!</h3>
                                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>Thank you for applying. Our HR team will be in touch shortly.</p>
                                <button onClick={() => setApplyRole(null)} style={{ marginTop: '1.5rem', background: CR, color: '#fff', border: 'none', padding: '9px 24px', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: f }}>Close</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
