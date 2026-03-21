import PageTemplate from '@/app/components/pagetemplate';

export default function CultureInnovationPage() {
  return (
    <PageTemplate 
      title="Culture of Innovation" 
      category="Innovation"
      heroImage="/images/innovation-hero.jpg"
      showHero={true}
    >
      <div className="space-y-12 pb-16">
        <h2 className="text-3xl font-bold text-[#C15F3C] mb-6">Fostering a Culture of Legal Innovation</h2>
        
        <p className="text-lg text-black leading-relaxed">
          <span className="font-bold">URE Legal's</span> position as a forward-thinking pioneer in the legal services market is bolstered by various strategic initiatives aimed at modernizing the practice of law. Our fundamental endeavor is to remain consistently ahead of the curve. It is imperative that each member understands that the development and innovation at the firm are directly linked to their individual growth.
        </p>

        <p className="text-lg text-black leading-relaxed">
          To realize this vision, our specialized <span className="text-[#C15F3C] font-medium">Innovation Taskforce</span> has adopted a diversified approach to cultivating a creative workplace. Through internal incubation programs and dedicated legaltech training weeks, we empower every member of URE Legal to contribute ideas that refine our workflows. The firm actively disseminates awareness via regular digital workshops, focusing on Legal Design Thinking and smart resource utilization. While curiosity is a crucial catalyst for a dynamic culture, it is important to acknowledge that initiatives aimed at fostering curiosity are just a fraction of the many elements contributing to a thriving legal practice.
        </p>

        {/* Innovation Image Section */}
        <div className="w-full h-[500px] bg-[#F4F3EE] border border-dashed border-[#B1ADA1]/50 flex flex-col items-center justify-center mt-12 group hover:bg-gray-100 transition-colors rounded overflow-hidden">
          <img 
            src="/images/innovation-image.jpg" 
            alt="Innovation" 
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </PageTemplate>
  );
}
