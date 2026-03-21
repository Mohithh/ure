import PageTemplate from '@/app/components/pagetemplate';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <PageTemplate 
      title="About Us" 
      category="About Us"
      subtitle="A legacy of over 100 years, built on a foundation of trust, excellence, and visionary leadership."
      heroImage="/images/about-us-hero.jpg"
      children={
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-lg text-black leading-relaxed">
              With over a century of distinguished service, URE Legal has established itself as India's leading law firm with a global reputation. We are trusted advisers to a diverse range of clients spanning commercial enterprises, financial institutions, and regulatory bodies.
            </p>
            <p className="text-lg text-black leading-relaxed">
              Our firm is built on a foundation of trust, unwavering excellence, and visionary leadership. We combine academic rigor, technical expertise, and innovative thinking to deliver practical solutions in an ever-evolving legal landscape.
            </p>
          </div>

          {/* About Us Image Section */}
          <div className="w-full h-[500px] bg-[#F4F3EE] border border-dashed border-[#B1ADA1]/50 flex flex-col items-center justify-center mt-12 group hover:bg-gray-100 transition-colors rounded overflow-hidden">
            <img 
              src="/images/about-us-image.jpg" 
              alt="About Us" 
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      }
    />
  );
}
