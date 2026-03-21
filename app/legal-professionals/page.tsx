'use client';

import Link from 'next/link';
import { useState } from 'react';

const CR = '#C15F3C';
const OR = '#e87722';
const PA = '#F4F3EE';
const f  = "'Open Sans',sans-serif";

const jobs = [
  {
    id: 1,
    title: 'Mid-Associate / Senior Associate',
    practice: 'Banking and Finance',
    desc: 'Senior Associate – Banking and Finance practice : 4 – 5 years of Experience',
    type: 'Full Time',
    location: 'Mumbai',
  },
  {
    id: 2,
    title: 'Associate',
    practice: 'Corporate & M&A',
    desc: 'Corporate & M&A practice : 2 – 3 years of Experience',
    type: 'Full Time',
    location: 'Delhi',
  },
  {
    id: 3,
    title: 'Senior Associate',
    practice: 'Dispute Resolution',
    desc: 'Dispute Resolution practice : 5 – 7 years of Experience',
    type: 'Full Time',
    location: 'Bangalore',
  },
  {
    id: 4,
    title: 'Partner – Practice Head',
    practice: 'Capital Markets',
    desc: 'Capital Markets practice : 15+ years of Experience',
    type: 'Full Time',
    location: 'Mumbai',
  },
  {
    id: 5,
    title: 'Associate – Intellectual Property',
    practice: 'Intellectual Property',
    desc: 'Intellectual Property practice : 2 – 4 years of Experience',
    type: 'Full Time',
    location: 'Bangalore',
  },
  {
    id: 6,
    title: 'Senior Associate – Private Equity',
    practice: 'Private Equity',
    desc: 'Private Equity practice : 4 – 6 years of Experience',
    type: 'Full Time',
    location: 'Mumbai',
  },
];

// ── APPLY MODAL ──────────────────────────────────────────────────────────────
function ApplyModal({ job, onClose }: { job: typeof jobs[0]; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const inp: React.CSSProperties = {
    width: '100%', border: '1px solid rgba(177,173,161,.5)',
    padding: '9px 12px', fontSize: 13, fontFamily: f,
    outline: 'none', background: '#fff', marginBottom: 10,
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)',
      zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }} onClick={onClose}>
      <div style={{
        background: '#fff', maxWidth: 520, width: '100%',
        padding: '2rem', position: 'relative',
        fontFamily: f,
      }} onClick={e => e.stopPropagation()}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 12, right: 16,
          background: 'none', border: 'none', fontSize: 20,
          cursor: 'pointer', color: '#B1ADA1', lineHeight: 1,
        }}>×</button>

        {!submitted ? (
          <>
            <div style={{ borderLeft: `3px solid ${CR}`, paddingLeft: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2b2b2b', marginBottom: 2 }}>{job.title}</div>
              <div style={{ fontSize: 11, color: '#B1ADA1', textTransform: 'uppercase', letterSpacing: '.06em' }}>{job.practice} · {job.location}</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 0 }}>
              <input style={inp} type="text" placeholder="First Name *" />
              <input style={inp} type="text" placeholder="Last Name *" />
            </div>
            <input style={inp} type="email" placeholder="Email Address *" />
            <input style={inp} type="tel" placeholder="Phone Number" />
            <input style={inp} type="text" placeholder="Current Organisation" />
            <input style={inp} type="text" placeholder="Years of Experience *" />

            {/* File upload */}
            <div style={{
              border: '1px dashed rgba(177,173,161,.6)',
              padding: '1rem', textAlign: 'center',
              marginBottom: 14, cursor: 'pointer', background: PA,
            }}>
              <div style={{ fontSize: 12, color: '#B1ADA1', fontWeight: 600 }}>📎 Upload CV / Resume</div>
              <div style={{ fontSize: 10, color: '#B1ADA1', marginTop: 4 }}>PDF, DOC or DOCX · Max 5MB</div>
            </div>

            <textarea style={{ ...inp, resize: 'none', height: 80 }} placeholder="Cover Note (optional)" />

            <button onClick={() => setSubmitted(true)} style={{
              width: '100%', background: CR, color: '#fff',
              border: 'none', padding: '11px', fontSize: 13,
              fontWeight: 700, cursor: 'pointer', fontFamily: f,
              letterSpacing: '.04em', transition: 'opacity .2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Submit Application →
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: 40, marginBottom: '1rem' }}>✓</div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: CR, marginBottom: '.5rem' }}>Application Submitted!</h3>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7 }}>
              Thank you for applying for <strong>{job.title}</strong>. Our HR team will review your application and be in touch shortly.
            </p>
            <button onClick={onClose} style={{
              marginTop: '1.5rem', background: CR, color: '#fff',
              border: 'none', padding: '9px 24px', fontSize: 12,
              fontWeight: 700, cursor: 'pointer', fontFamily: f,
            }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function LegalProfessionalsPage() {
  const [applyJob, setApplyJob] = useState<typeof jobs[0] | null>(null);

  const p: React.CSSProperties = { fontSize: 13, lineHeight: 1.85, color: '#555', fontFamily: f };

  return (
    <div style={{ background: '#fff', fontFamily: f, minHeight: '100vh', color: '#2b2b2b' }}>

      {/* ── CRAIL RIBBON — exact like screenshot 4 ── */}
      <div style={{ background: CR, color: '#fff', padding: '1.25rem clamp(1.5rem,5vw,4rem)', fontSize: '1.75rem', fontWeight: 300 }}>
        Legal Professionals
      </div>

      <div style={{ padding: '2rem clamp(1.5rem,5vw,4rem)' }}>

        {/* ── INTRO — exact like screenshot 4 ── */}
        <p style={{ ...p, fontSize: 14, color: CR, fontWeight: 500, marginBottom: '2rem', maxWidth: 780 }}>
          We are always looking for experienced, high-quality lawyers with an innovative outlook towards problem solving and delivering results.
        </p>

        {/* ── JOB CARDS — exact like screenshot 4 ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 860 }}>
          {jobs.map(job => (
            <div key={job.id} style={{
              border: '1px solid #e5e0d8',
              padding: '1.4rem 1.75rem',
              background: '#fff',
              transition: 'box-shadow .2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,.08)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2b2b2b', marginBottom: 5, fontFamily: f }}>
                {job.title}
              </h3>
              <p style={{ ...p, marginBottom: 8 }}>{job.desc}</p>
              <p style={{ fontSize: 12, color: '#999', marginBottom: 14, fontFamily: f }}>
                Work Type&nbsp;<strong style={{ color: '#2b2b2b' }}>{job.type}</strong>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                Location&nbsp;<strong style={{ color: '#2b2b2b' }}>{job.location}</strong>
              </p>
              <button
                onClick={() => setApplyJob(job)}
                style={{
                  background: OR, color: '#fff', border: 'none',
                  padding: '7px 20px', fontSize: 12, fontWeight: 700,
                  cursor: 'pointer', fontFamily: f,
                  letterSpacing: '.03em', transition: 'opacity .2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '.82')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* ── BACK LINK ── */}
        <Link href="/careers" style={{
          display: 'inline-block', marginTop: '1.75rem',
          fontSize: 13, color: CR, textDecoration: 'underline', fontFamily: f,
        }}>
          ← Back to Careers
        </Link>
      </div>

      {/* ── APPLY MODAL ── */}
      {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
    </div>
  );
}
