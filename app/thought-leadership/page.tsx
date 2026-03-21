import PageTemplate from '@/app/components/pagetemplate';
import Image from 'next/image';

export default function ThoughtLeadershipPage() {
  return (
    <PageTemplate 
      title="Thought Leadership" 
      category="Thought Leadership"
      subtitle="Driving industry discourse through deep legal expertise and strategic insights."
      heroImage="/images/thought-leadership-hero.jpg"
      children={
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-lg text-black leading-relaxed">
              URE Legal drives industry discourse through deep legal expertise and strategic insights. Our thought leaders contribute to shaping legal industry conversations and providing innovative perspectives on emerging challenges.
            </p>
            <p className="text-lg text-black leading-relaxed">
              We participate in industry forums, publish research, and engage in meaningful dialogue to advance legal practice and contribute to regulatory evolution.
            </p>
          </div>

          {/* Thought Leadership Image Section */}
          <div className="w-full h-[500px] bg-[#F4F3EE] border border-dashed border-[#B1ADA1]/50 flex flex-col items-center justify-center mt-12 group hover:bg-gray-100 transition-colors rounded overflow-hidden">
            <img 
              src="/images/thought-leadership-image.jpg" 
              alt="Thought Leadership" 
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      }
    />
  );
}
