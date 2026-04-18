// app/careers/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CR = '#C15F3C';
const OR = '#e87722';
const PA = '#F4F3EE';
const f = "'Open Sans',sans-serif";

// Define the type for a career section from the API
interface ApiCareerSection {
  title: string;
  description: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Define the type for tab data
interface TabContent {
  title: string;
  description: string;
}

const p: React.CSSProperties = { fontSize: 13, lineHeight: 1.85, color: '#555', marginBottom: '.65rem', fontFamily: f };

export default function CareersPage() {
  const [careersData, setCareersData] = useState<ApiCareerSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('Leadership Academy');

  // Fetch careers data from API
  useEffect(() => {
    async function fetchCareers() {
      try {
        const res = await fetch('https://cms.urelegal.in/api/content/items/careers', {
          cache: 'no-store'
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch careers data: ${res.status}`);
        }
        
        const data: ApiCareerSection[] = await res.json();
        setCareersData(data);
      } catch (error) {
        console.error('Error fetching careers data:', error);
        setCareersData([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchCareers();
  }, []);

  // Find specific sections by title
  const whyWorkSection = careersData.find(item => item.title === 'Why work with URE Legal');
  const leadershipSection = careersData.find(item => item.title === 'Leadership Academy');
  const learningSection = careersData.find(item => item.title === 'Knowledge & Learning');
  const lifeAtURE = careersData.find(item => item.title === 'Life at URE Legal');
  const diversitySection = careersData.find(item => item.title === 'Diversity and Inclusion');
  const cultureSection = careersData.find(item => item.title === 'Our Culture');

  // Format description with line breaks and bold text
  const formatDescription = (description: string) => {
    // Split by double newlines for paragraphs
    const paragraphs = description.split(/\n\s*\n/);
    
    return paragraphs.map((para, idx) => {
      // Check if paragraph contains bold indicators (the API has ** in some descriptions)
      let formattedText = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      return (
        <p 
          key={idx} 
          style={p} 
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  // Get tab content based on active tab
  const getTabContent = (): TabContent | null => {
    if (activeTab === 'Leadership Academy' && leadershipSection) {
      return {
        title: leadershipSection.title,
        description: leadershipSection.description
      };
    } else if (activeTab === 'Knowledge & Learning' && learningSection) {
      return {
        title: learningSection.title,
        description: learningSection.description
      };
    }
    return null;
  };

  const tabContent = getTabContent();

  if (loading) {
    return (
      <div style={{ background: '#fff', fontFamily: f, color: '#2b2b2b', minHeight: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, border: `4px solid ${CR}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
            <p style={{ color: '#666' }}>Loading careers data...</p>
          </div>
        </div>
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', fontFamily: f, color: '#2b2b2b' }}>

      {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
      <div style={{ 
        width: '100%', 
        height: 280, 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'linear-gradient(135deg,rgba(193,95,60,.2),rgba(177,173,161,.25))', 
        display: 'flex', 
        alignItems: 'flex-end', 
        justifyContent: 'center' 
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(193,95,60,.15)' }} />
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 0, position: 'relative', zIndex: 1, height: 220 }}>
          {[110,125,140,120,130,115].map((h, i) => (
            <svg key={i} width="90" height={h} viewBox="0 0 90 180" style={{ fill: `rgba(${80 + i * 5},${20 + i * 3},${45 + i * 4},${0.45 + i * 0.03})` }}>
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

        {/* LEFT - Dynamic from API */}
        <div>
          <p style={{ fontSize: 13, color: CR, fontWeight: 600, marginBottom: '1rem', fontFamily: f }}>
            Committed to shaping the finest lawyers for a just world.
          </p>
          <h3 style={{ fontSize: '.95rem', fontWeight: 700, marginBottom: '.65rem' }}>Why work with URE Legal</h3>
          {whyWorkSection ? (
            formatDescription(whyWorkSection.description)
          ) : (
            <p style={p}>Loading content...</p>
          )}
        </div>

        {/* RIGHT — Opportunities box with real Links */}
        <div style={{ background: '#eae3dc', padding: '1.25rem', height: 'fit-content' }}>
          <h3 style={{ fontSize: '.9rem', fontWeight: 700, color: CR, marginBottom: '1rem', textAlign: 'center', fontFamily: f }}>
            Opportunities
          </h3>
          {[
            { label: 'Legal Professionals', href: '/legal-professionals' },
            { label: 'Internship', href: '/internship' },
            { label: 'Business Services', href: '/business-services' },
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
          <button onClick={() => setActiveTab('Leadership Academy')} style={{
            padding: '8px 20px', border: 'none', cursor: 'pointer',
            fontSize: 12, fontWeight: 500, fontFamily: f,
            background: activeTab === 'Leadership Academy' ? OR : PA,
            color: activeTab === 'Leadership Academy' ? '#fff' : '#2b2b2b',
            transition: 'all .18s',
          }}>
            Leadership Academy
          </button>
          <button onClick={() => setActiveTab('Knowledge & Learning')} style={{
            padding: '8px 20px', border: 'none', cursor: 'pointer',
            fontSize: 12, fontWeight: 500, fontFamily: f,
            background: activeTab === 'Knowledge & Learning' ? OR : PA,
            color: activeTab === 'Knowledge & Learning' ? '#fff' : '#2b2b2b',
            transition: 'all .18s',
          }}>
            Knowledge & Learning
          </button>
        </div>

        {/* Tab body — text left, image right - Dynamic from API */}
        <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', background: PA, border: '1px solid #e5e0d8', borderTop: 'none' }}>
          <div style={{ padding: '1.5rem' }}>
            {tabContent ? (
              formatDescription(tabContent.description)
            ) : (
              <p style={p}>Content not available.</p>
            )}
          </div>
          <div style={{ 
            minHeight: 260, 
            background: 'linear-gradient(135deg,rgba(193,95,60,.12),rgba(177,173,161,.2))', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <svg width="80" height="80" fill="none" stroke="rgba(193,95,60,.4)" strokeWidth="1.2" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="13" rx="1"/><path d="M0 19h24M8 21h8"/>
            </svg>
          </div>
        </div>

        {/* Life at URE Legal - Dynamic from API */}
        <div style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 300, color: CR, marginBottom: '1rem' }}>Life at URE Legal</h2>
          {lifeAtURE ? (
            formatDescription(lifeAtURE.description)
          ) : (
            <p style={p}>Loading content...</p>
          )}
        </div>
      </div>

      {/* ── TEAM PHOTO STRIP ─────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', height: 200 }}>
        {[
          'hsl(330,45%,68%)', 'hsl(340,35%,72%)', 'hsl(325,50%,65%)', 'hsl(335,40%,70%)', 'hsl(328,42%,67%)'
        ].map((bg, i) => (
          <div key={i} style={{ height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(193,95,60,.2)' }} />
            <svg width="56" height="110" viewBox="0 0 56 110" style={{ position: 'relative', zIndex: 1, fill: 'rgba(80,20,40,.5)' }}>
              <ellipse cx="28" cy="20" rx="15" ry="17"/>
              <path d="M0 110 Q4 58 28 50 Q52 58 56 110Z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* ── DIVERSITY & INCLUSION - Dynamic from API ──────────────────────── */}
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
          {diversitySection ? (
            <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.75, fontFamily: f }}>
              {diversitySection.description}
            </p>
          ) : (
            <p style={{ fontSize: 12.5, color: '#444', lineHeight: 1.75, fontFamily: f }}>
              Loading content...
            </p>
          )}
        </div>
      </div>

      {/* ── OUR CULTURE - Dynamic from API ──────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
        {/* Left — photo */}
        <div style={{ 
          height: 280, 
          background: 'linear-gradient(135deg,rgba(193,95,60,.2),rgba(177,173,161,.25))', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <svg width="120" height="80" viewBox="0 0 120 80" fill="rgba(193,95,60,.35)">
            <ellipse cx="20" cy="25" rx="10" ry="12"/><path d="M2 80 Q6 50 20 44 Q34 50 38 80Z"/>
            <ellipse cx="45" cy="22" rx="11" ry="13"/><path d="M26 80 Q30 48 45 41 Q60 48 64 80Z"/>
            <ellipse cx="70" cy="25" rx="10" ry="12"/><path d="M52 80 Q56 50 70 44 Q84 50 88 80Z"/>
            <ellipse cx="95" cy="23" rx="11" ry="13"/><path d="M76 80 Q80 49 95 42 Q110 49 114 80Z"/>
          </svg>
        </div>
        {/* Right — text - Dynamic from API */}
        <div style={{ background: PA, padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 300, color: CR, marginBottom: '.85rem' }}>Our Culture</h2>
          {cultureSection ? (
            <p style={p}>{cultureSection.description}</p>
          ) : (
            <p style={p}>Loading content...</p>
          )}
        </div>
      </div>

    </div>
  );
}