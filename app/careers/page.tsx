'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CR = '#C15F3C';
const OR = '#e87722';
const PA = '#F4F3EE';
const f  = "'Open Sans',sans-serif";

const tabData: Record<string, string[]> = {
  leadership: [
    'Leadership Academy at URE Legal enables firm members to be future-ready by becoming sound trusted advisors and entrepreneurs by <b>building expertise in leadership, business, and lawyering skills</b>.',
    "We offer bespoke 'by-invitation' <b>flagship programs</b> at career transition pivots, <b>open programs</b> that firm members can attend as per their roles and practice areas, and <b>location or target-specific programs</b>.",
    'Our programs are a mix of methodologies (virtual learning sessions, peer learning, role-plays, e-learning, self-learning, leaders teaching leaders etc.) and we actively leverage the <b>70:20:10 learning principle</b>.',
    'Through internal programs and strategic external tie-ups with reputed expert faculty, we have combined in-person and digital learning to build transformational and inspiring leaders who are ahead of the curve.',
  ],
  learning: [
    'Knowledge & Learning focuses on continuous development through structured training modules and mentoring.',
    'At <b>URE Legal</b>, we have a high voltage focus on Learning and Development (L&D) for our lawyers, and that is how we invest in keeping you Ahead of the Curve.',
    "Our L&D team conducts technical and non-technical learning sessions for our lawyers regularly through online and offline modules that aim to develop 'well rounded' lawyers with knowledge and expertise in a vast array of practice areas.",
    'This keeps them aware and up to date with the latest legal and industry developments, equipping them with the foresight and preparation required to stay Ahead of the Curve.',
  ],
};

const p: React.CSSProperties = { fontSize: 13, lineHeight: 1.85, color: '#555', marginBottom: '.65rem', fontFamily: f };

export default function CareersPage() {
  const [tab, setTab] = useState<'leadership'|'learning'>('leadership');

  return (
    <div style={{ background: '#fff', fontFamily: f, color: '#2b2b2b' }}>

      {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
      <div style={{ width: '100%', height: 280, position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,rgba(193,95,60,.2),rgba(177,173,161,.25))', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        {/* Replace div below with: <Image src="/images/career-hero.jpg" alt="careers" fill style={{objectFit:'cover',filter:'sepia(0.4) hue-rotate(290deg)'}}/> */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(193,95,60,.15)' }} />
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 0, position: 'relative', zIndex: 1, height: 220 }}>
          {[110,125,140,120,130,115].map((h, i) => (
            <svg key={i} width="90" height={h} viewBox="0 0 90 180" style={{ fill: `rgba(${80+i*5},${20+i*3},${45+i*4},${0.45+i*0.03})` }}>
              <ellipse cx="45" cy="28" rx="18" ry="20"/>
              <path d="M5 180 Q12 95 45 88 Q78 95 85 180Z"/>
            </svg>
          ))}
        </div>
      </div>

      {/* ── CRAIL RIBBON ────────────────────────────────────────────────── */}
      <div style={{ background: CR, color: '#fff', padding: '1.25rem clamp(1.5rem,5vw,4rem)', fontSize: '1.75rem', fontWeight: 300, letterSpacing: '-.01em' }}>
        Careers
      </div>

      {/* ── WHY WORK + OPPORTUNITIES ─────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: '2.5rem', padding: '2rem clamp(1.5rem,5vw,4rem)' }}>

        {/* LEFT */}
        <div>
          <p style={{ fontSize: 13, color: CR, fontWeight: 600, marginBottom: '1rem', fontFamily: f }}>
            Committed to shaping the finest lawyers for a just world.
          </p>
          <h3 style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.65rem' }}>Why work with URE Legal</h3>
          <p style={p}><strong>URE Legal</strong> is India's Leading Law Firm with a global reputation of being trusted advisors to our clients. As a full-service law firm, we advise a large and diverse set of clients such as domestic and foreign commercial enterprises, financial institutions, private equity funds, venture capital funds, start-ups, government, and regulatory bodies.</p>
          <p style={p}>At URE Legal, our identity is our <strong>Ahead of the Curve</strong> mindset defined by our relentless curiosity and inventiveness. Our ambition, culture of collaboration and inclusivity keeps us constantly on the move.</p>
          <p style={p}>With our global reputation and ties with international law firms, we work diligently to maintain a global outlook with local depth.</p>
        </div>

        {/* RIGHT — Opportunities box with real Links */}
        <div style={{ background: '#eae3dc', padding: '1.25rem', height: 'fit-content' }}>
          <h3 style={{ fontSize: '.9rem', fontWeight: 700, color: CR, marginBottom: '1rem', textAlign: 'center', fontFamily: f }}>
            Opportunities
          </h3>
          {[
            { label: 'Legal Professionals', href: '/legal-professionals' },
            { label: 'Internship',          href: '/internship' },
            { label: 'Business Services',   href: '/business-services' },
          ].map(op => (
            <Link key={op.label} href={op.href} style={{ display: 'block', marginBottom: 10 }}>
              <div style={{
                width: '100%', background: CR, color: '#fff',
                padding: '10px 12px', fontSize: 12, fontWeight: 600,
                textAlign: 'center', cursor: 'pointer', fontFamily: f,
                transition: 'opacity .2s', letterSpacing: '.02em',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '.82')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                {op.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── CULTURE OF CONTINUOUS LEARNING ──────────────────────────────── */}
      <div style={{ padding: '0 clamp(1.5rem,5vw,4rem) 2rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 300, color: CR, marginBottom: '1.25rem' }}>
          Culture of Continuous Learning
        </h2>

        {/* Tab buttons */}
        <div style={{ display: 'flex', borderBottom: '1px solid #ddd' }}>
          {(['leadership','learning'] as const).map((t, i) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '8px 20px', border: 'none', cursor: 'pointer',
              fontSize: 12, fontWeight: 500, fontFamily: f,
              background: tab === t ? OR : PA,
              color: tab === t ? '#fff' : '#2b2b2b',
              transition: 'all .18s',
            }}>
              {['Leadership Academy','Knowledge & Learning'][i]}
            </button>
          ))}
        </div>

        {/* Tab body — text left, image right */}
        <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', background: PA, border: '1px solid #e5e0d8', borderTop: 'none' }}>
          <div style={{ padding: '1.5rem' }}>
            {tabData[tab].map((txt, i) => (
              <p key={i} style={{ ...p, marginBottom: i < tabData[tab].length - 1 ? '.75rem' : 0 }}
                dangerouslySetInnerHTML={{ __html: txt }}
              />
            ))}
          </div>
          <div style={{ minHeight: 260, background: 'linear-gradient(135deg,rgba(193,95,60,.12),rgba(177,173,161,.2))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Replace with: <Image src="/images/learning.jpg" alt="learning" fill style={{objectFit:'cover'}}/> */}
            <svg width="80" height="80" fill="none" stroke="rgba(193,95,60,.4)" strokeWidth="1.2" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="13" rx="1"/><path d="M0 19h24M8 21h8"/>
            </svg>
          </div>
        </div>

        {/* Life at URE Legal */}
        <div style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 300, color: CR, marginBottom: '1rem' }}>Life at URE Legal</h2>
          <p style={p}>Our role as trusted advisors to our clients involves more than offering legal advice. It is about bringing our whole selves to the table and delivering practical insights and solutions to our clients. We focus on the big picture, rejecting pedantic constraints to work towards significant, pioneering solutions that keep our clients ahead in their business goals.</p>
          <p style={p}>As a full-service law firm, you will have opportunities and exposure to various Practices and Sectors, learning from the finest lawyers in the country as you work on challenging, sophisticated, and complex legal problems.</p>
          <p style={p}>At <strong>URE Legal</strong>, we have a high voltage focus on Learning and Development (L&D) for our lawyers, and that is how we invest in keeping you Ahead of the Curve. Our L&D team conducts technical and non-technical learning sessions regularly through online and offline modules that aim to develop well rounded lawyers with knowledge and expertise in a vast array of practice areas.</p>
        </div>
      </div>

      {/* ── TEAM PHOTO STRIP ─────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', height: 200 }}>
        {[
          'hsl(330,45%,68%)','hsl(340,35%,72%)','hsl(325,50%,65%)','hsl(335,40%,70%)','hsl(328,42%,67%)'
        ].map((bg, i) => (
          <div key={i} style={{ height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(193,95,60,.2)' }} />
            <svg width="56" height="110" viewBox="0 0 56 110" style={{ position: 'relative', zIndex: 1, fill: 'rgba(80,20,40,.5)' }}>
              <ellipse cx="28" cy="20" rx="15" ry="17"/>
              <path d="M0 110 Q4 58 28 50 Q52 58 56 110Z"/>
            </svg>
            {/* Replace with: <Image src={`/images/team${i+1}.jpg`} alt="team" fill style={{objectFit:'cover'}}/> */}
          </div>
        ))}
      </div>

      {/* ── DIVERSITY & INCLUSION ────────────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        <div style={{
          background: 'rgba(255,255,255,.93)',
          padding: '1.25rem 1.75rem',
          maxWidth: 500,
          borderLeft: `3px solid ${CR}`,
          margin: '0 clamp(1.5rem,5vw,4rem)',
          transform: 'translateY(-50px)',
        }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 500, color: CR, marginBottom: '.5rem' }}>
            Diversity and Inclusion
          </h2>
          <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.75, fontFamily: f }}>
            We are proud of our people and our principles, and as an equal opportunity employer, we have a zero-tolerance policy towards gender bias and religious discrimination. At URE Legal people can be themselves, regardless of their age, gender, race, disability, religious belief, sexual orientation, gender identity and expression.
          </p>
        </div>
      </div>

      {/* ── OUR CULTURE ──────────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
        {/* Left — photo */}
        <div style={{ height: 280, background: 'linear-gradient(135deg,rgba(193,95,60,.2),rgba(177,173,161,.25))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Replace with: <Image src="/images/culture.jpg" alt="culture" fill style={{objectFit:'cover'}}/> */}
          <svg width="120" height="80" viewBox="0 0 120 80" fill="rgba(193,95,60,.35)">
            <ellipse cx="20" cy="25" rx="10" ry="12"/><path d="M2 80 Q6 50 20 44 Q34 50 38 80Z"/>
            <ellipse cx="45" cy="22" rx="11" ry="13"/><path d="M26 80 Q30 48 45 41 Q60 48 64 80Z"/>
            <ellipse cx="70" cy="25" rx="10" ry="12"/><path d="M52 80 Q56 50 70 44 Q84 50 88 80Z"/>
            <ellipse cx="95" cy="23" rx="11" ry="13"/><path d="M76 80 Q80 49 95 42 Q110 49 114 80Z"/>
          </svg>
        </div>
        {/* Right — text */}
        <div style={{ background: PA, padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 300, color: CR, marginBottom: '.85rem' }}>Our Culture</h2>
          <p style={p}>At URE Legal, we have a Contribution and Assessment Framework in place that is unique among Indian Law Firms. It enables us to be an open, transparent employer where meritocracy is placed above all, and bright young talent is mentored effectively through opportunities for learning with the senior lawyers. We also offer alternate career paths to lawyers with flexi-working arrangements.</p>
        </div>
      </div>

    </div>
  );
}
