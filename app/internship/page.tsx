'use client';

import Link from 'next/link';
import { useState } from 'react';

const CR = '#C15F3C';
const OR = '#e87722';
const f = "'Open Sans',sans-serif";

function ApplyModal({ onClose }: { onClose: () => void }) {
    const [submitted, setSubmitted] = useState(false);
    const inp: React.CSSProperties = { width: '100%', border: '1px solid rgba(177,173,161,.5)', padding: '9px 12px', fontSize: 13, fontFamily: f, outline: 'none', background: '#fff', marginBottom: 10 };

    return (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} onClick={onClose}>
            <div style={{ background: '#fff', maxWidth: 500, width: '100%', padding: '2rem', position: 'relative', fontFamily: f }} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#B1ADA1' }}>×</button>
                {!submitted ? (
                    <>
                        <div style={{ borderLeft: `3px solid ${CR}`, paddingLeft: '.75rem', marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2b2b2b' }}>Internship Application</div>
                            <div style={{ fontSize: 11, color: '#B1ADA1', textTransform: 'uppercase', letterSpacing: '.06em' }}>URE Legal Advocates</div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                            <input style={inp} type="text" placeholder="First Name *" />
                            <input style={inp} type="text" placeholder="Last Name *" />
                        </div>
                        <input style={inp} type="email" placeholder="Email Address *" />
                        <input style={inp} type="tel" placeholder="Phone Number" />
                        <input style={inp} type="text" placeholder="College / University *" />
                        <input style={inp} type="text" placeholder="Year of Study *" />
                        <input style={inp} type="text" placeholder="Preferred Practice Area" />
                        <div style={{ border: '1px dashed rgba(177,173,161,.6)', padding: '1rem', textAlign: 'center', marginBottom: 10, cursor: 'pointer', background: '#F4F3EE' }}>
                            <div style={{ fontSize: 12, color: '#B1ADA1', fontWeight: 600 }}>📎 Upload CV / Resume</div>
                            <div style={{ fontSize: 10, color: '#B1ADA1', marginTop: 4 }}>PDF, DOC or DOCX · Max 5MB</div>
                        </div>
                        <textarea style={{ ...inp, resize: 'none', height: 80 }} placeholder="Why do you want to intern at URE Legal? (optional)" />
                        <button onClick={() => setSubmitted(true)} style={{ width: '100%', background: CR, color: '#fff', border: 'none', padding: '11px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: f, letterSpacing: '.04em' }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '.85')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                            Submit Application →
                        </button>
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ fontSize: 40, marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: CR, marginBottom: '.5rem' }}>Application Submitted!</h3>
                        <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>Thank you for your interest in the URE Legal Internship Programme. Our HR team will review your application and be in touch shortly.</p>
                        <button onClick={onClose} style={{ marginTop: '1.5rem', background: CR, color: '#fff', border: 'none', padding: '9px 24px', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: f }}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function InternshipPage() {
    const [showModal, setShowModal] = useState(false);
    const p: React.CSSProperties = { fontSize: 13, lineHeight: 1.85, color: '#555', fontFamily: f };

    return (
        <div style={{ background: '#fff', fontFamily: f, minHeight: '100vh', color: '#2b2b2b' }}>
            <div style={{ background: CR, color: '#fff', padding: '1.25rem clamp(1.5rem,5vw,4rem)', fontSize: '1.75rem', fontWeight: 300 }}>
                Internship
            </div>
            <div style={{ padding: '2rem clamp(1.5rem,5vw,4rem)' }}>
                <p style={{ ...p, fontSize: 14, color: CR, fontWeight: 500, marginBottom: '2rem', maxWidth: 700 }}>
                    The URE Legal Internship Programme is designed to provide students with a real understanding of working in a professional environment under guided supervision of partners and teams.
                </p>
                <div style={{ border: '1px solid #e5e0d8', padding: '1.4rem 1.75rem', background: '#fff', maxWidth: 680 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2b2b2b', marginBottom: 6, fontFamily: f }}>Internship</h3>
                    <p style={{ ...p, marginBottom: 14 }}>
                        Contact: For internship related queries, please write at{' '}
                        <a href="mailto:ure.internships@urelegal.com" style={{ color: CR }}>ure.internships@urelegal.com</a>
                    </p>
                    <button onClick={() => setShowModal(true)} style={{ background: '#e87722', color: '#fff', border: 'none', padding: '7px 20px', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: f, letterSpacing: '.03em', transition: 'opacity .2s' }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '.82')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                        Apply Now
                    </button>
                </div>
                <Link href="/careers" style={{ display: 'inline-block', marginTop: '1.75rem', fontSize: 13, color: CR, textDecoration: 'underline', fontFamily: f }}>
                    ← Back to Careers
                </Link>
            </div>
            {showModal && <ApplyModal onClose={() => setShowModal(false)} />}
        </div>
    );
}
