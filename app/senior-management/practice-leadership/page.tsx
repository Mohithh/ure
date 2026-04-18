// app/senior-management/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Award, 
  Briefcase, 
  Mail, 
  Linkedin, 
  Phone,
  ArrowRight,
  GraduationCap,
  Globe,
  BookOpen,
  Star,
  MapPin,
  Calendar
} from 'lucide-react';

// Define the type for a leadership team member from the API
interface ApiLeadershipMember {
  name: string;
  role: string;
  since: string;
  des: string;
  practice: string;
  bio: string;
  Recognitions: string;
  _state?: number;
  _modified?: number;
  _mby?: string;
  _created?: number;
  _cby?: string;
  _id?: string;
}

// Define the type for display
interface LeadershipMember {
  name: string;
  designation: string;
  email: string;
  linkedin: string;
  phone: string;
  location: string;
  education: string;
  yearJoined: string;
  practice: string;
  bio: string;
  imageInitials: string;
  awards: string[];
}

// Helper function to extract year from "Mumbai Joined 2000" format
function extractYearJoined(since: string): string {
  const match = since?.match(/(\d{4})/);
  return match ? match[1] : 'N/A';
}

// Helper function to extract location from "Mumbai Joined 2000" format
function extractLocation(since: string): string {
  return since?.split(' Joined')[0] || 'N/A';
}

// Helper function to parse recognitions string into array
function parseRecognitions(recognitions: string): string[] {
  if (!recognitions) return [];
  return recognitions.split('•').map(item => item.trim()).filter(item => item.length > 0);
}

// Helper function to generate email from name (fallback)
function generateEmail(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '.') + '@ure-legal.com';
}

// Helper function to get initials from name
function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// This is a Server Component, so we can fetch data directly
async function getLeadershipData(): Promise<LeadershipMember[]> {
  try {
    // Try the correct API endpoint pattern
    const res = await fetch('https://cms.urelegal.in/api/content/items/peoplepracticeleadership', {
      cache: 'no-store', // Always get fresh data
      // OR use: next: { revalidate: 3600 } for periodic updates
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch leadership data: ${res.status}`);
    }
    
    const data: ApiLeadershipMember[] = await res.json();
    console.log('Fetched leadership data:', data); // For debugging
    
    // Transform API data to match component format
    const transformedData: LeadershipMember[] = data.map((item) => ({
      name: item.name || '',
      designation: item.role || '',
      email: generateEmail(item.name || ''),
      linkedin: '#', // LinkedIn not provided in API, using placeholder
      phone: '+91 22 1234 5678', // Phone not provided in API, using placeholder
      location: extractLocation(item.since || ''),
      education: item.bio || '',
      yearJoined: extractYearJoined(item.since || ''),
      practice: item.practice || '',
      bio: item.des || '',
      imageInitials: getInitials(item.name || ''),
      awards: parseRecognitions(item.Recognitions || '')
    }));
    
    return transformedData;
  } catch (error) {
    console.error('Error fetching leadership data:', error);
    return [];
  }
}

// Static regional leaders data (not from API - keeping as is)
const regionalLeaders = [
  {
    name: "Michael D'Souza",
    designation: "Managing Partner - Middle East",
    location: "Dubai",
    email: "michael.dsouza@ure-legal.com",
    practice: "Cross-Border Investment, Real Estate",
    imageInitials: "MD"
  },
  {
    name: "Sarah Tan",
    designation: "Managing Partner - Singapore",
    location: "Singapore",
    email: "sarah.tan@ure-legal.com",
    practice: "International Arbitration, Corporate",
    imageInitials: "ST"
  },
  {
    name: "Rajesh Patel",
    designation: "Managing Partner - GIFT City",
    location: "GIFT City",
    email: "rajesh.patel@ure-legal.com",
    practice: "Fintech, Banking & Finance",
    imageInitials: "RP"
  }
];

export default async function SeniorManagementPage() {
  // Fetch leadership data from API
  const leadershipTeam = await getLeadershipData();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-16 bg-[#C15F3C] rounded-full mt-2" />
            <div>
              <p className="text-[#C15F3C] font-semibold text-sm uppercase tracking-wider mb-2">
                Our Leadership
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Senior Management
              </h1>
            </div>
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed pl-5">
            Meet the visionary leaders who drive our firm's strategic direction, 
            combining decades of legal expertise with innovative thinking to deliver 
            exceptional client outcomes.
          </p>
        </div>
      </section>

      {/* Leadership Team Grid - DYNAMIC from API */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Practice Leadership
            </h2>
            <div className="w-16 h-1 bg-[#C15F3C] mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our partners bring unparalleled expertise and a track record of excellence 
              across key practice areas
            </p>
          </div>

          {leadershipTeam.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <div 
                  key={index}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Profile Image Placeholder */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C15F3C]/20 to-[#C15F3C]/10 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold text-[#C15F3C]">{leader.imageInitials}</span>
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <p className="text-[#C15F3C] font-semibold text-sm">{leader.designation}</p>
                      <div className="flex items-center justify-center gap-1 mt-2 text-gray-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{leader.location}</span>
                        <Calendar className="w-3 h-3 ml-2" />
                        <span>Joined {leader.yearJoined}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 mb-4">
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {leader.bio}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                          {leader.practice}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 flex items-start gap-2">
                          <GraduationCap className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{leader.education}</span>
                        </p>
                      </div>
                    </div>

                    {/* Awards Preview */}
                    {leader.awards.length > 0 && (
                      <div className="border-t border-gray-100 pt-4 mb-4">
                        <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                          <Award className="w-3 h-3 text-[#C15F3C]" /> Key Recognitions
                        </p>
                        <div className="space-y-1">
                          {leader.awards.slice(0, 2).map((award, idx) => (
                            <p key={idx} className="text-xs text-gray-500">• {award}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contact Links */}
                    <div className="flex items-center justify-between pt-2">
                      <a 
                        href={`mailto:${leader.email}`}
                        className="text-gray-400 hover:text-[#C15F3C] transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a 
                        href={leader.linkedin}
                        className="text-gray-400 hover:text-[#C15F3C] transition-colors duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={`tel:${leader.phone}`}
                        className="text-gray-400 hover:text-[#C15F3C] transition-colors duration-200"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <Link 
                        href={`/people/${leader.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[#C15F3C] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all duration-300"
                      >
                        View Profile <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No leadership data available at the moment.
            </div>
          )}
        </div>
      </section>

      {/* Regional Leaders Section - Static */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-10">
            <div className="w-1 h-12 bg-[#C15F3C] rounded-full mt-1" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Regional Leadership
              </h2>
              <p className="text-gray-600 mt-2">
                Our global footprint is supported by experienced leaders across key international offices
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {regionalLeaders.map((leader, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C15F3C]/20 to-[#C15F3C]/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-[#C15F3C]">{leader.imageInitials}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-[#C15F3C] text-sm font-semibold">{leader.designation}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C15F3C]" />
                    {leader.location}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#C15F3C]" />
                    {leader.practice}
                  </p>
                  <div className="flex items-center gap-3 pt-3">
                    <a href={`mailto:${leader.email}`} className="text-gray-400 hover:text-[#C15F3C] transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                    <Link href="#" className="text-[#C15F3C] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all duration-300">
                      View Profile <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section - Static */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 h-12 bg-[#C15F3C] rounded-full mt-1" />
                <div>
                  <p className="text-[#C15F3C] font-semibold text-sm uppercase tracking-wider">
                    Our Approach
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Leadership Philosophy
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 pl-5">
                At URE Legal, our leadership team embodies a culture of excellence, 
                innovation, and client-centricity. We believe in leading by example 
                and fostering an environment where talent thrives.
              </p>
              <div className="space-y-4 pl-5">
                {[
                  "Commitment to legal excellence and continuous learning",
                  "Client-first approach with deep industry understanding",
                  "Mentorship and development of next-generation legal talent",
                  "Innovation through legal technology and alternative solutions",
                  "Diversity and inclusion as core organizational values"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[#C15F3C] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#C15F3C]/5 to-[#C15F3C]/10 rounded-2xl p-8 border border-[#C15F3C]/20">
              <BookOpen className="w-12 h-12 text-[#C15F3C] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Thought Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our partners are frequent contributors to leading legal publications 
                and speak at premier industry conferences worldwide.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Publications", "Podcasts", "Webinars", "Conference Speakers"].map((item, idx) => (
                  <span key={idx} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
              <Link 
                href="/thought-leadership"
                className="inline-flex items-center gap-2 mt-6 text-[#C15F3C] font-semibold text-sm hover:gap-3 transition-all duration-300"
              >
                Explore Thought Leadership <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Static */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-12 h-12 text-[#C15F3C] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work With Our Leadership Team
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our senior partners are actively involved in client matters, ensuring 
            that you benefit from their expertise and strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contactus"
              className="px-10 py-3.5 bg-[#C15F3C] text-white border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/people"
              className="px-10 py-3.5 bg-transparent text-[#C15F3C] border-2 border-[#C15F3C] rounded text-xs font-bold uppercase tracking-widest hover:scale-105 hover:bg-[#C15F3C] hover:text-white transition-all duration-300 shadow-md inline-block"
            >
              Meet All Partners
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}