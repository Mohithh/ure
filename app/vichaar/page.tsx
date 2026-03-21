import PageTemplate from '@/app/components/pagetemplate';

export default function VichaarPage() {
  const winningIdeas = [
    {
      title: "Directory of Professionals",
      text: "Creation of a curated database and dynamic directory which is available on our portal for local counsels and other service providers across the country along with name, contact detail, area of expertise, feedback, etc."
    },
    {
      title: "URE Share",
      text: "Coordination and collaboration amongst co-workers to explore an environmentally smarter, financially conscious, and a less stressful daily travel option in each city."
    },
    {
      title: "Collaborate",
      text: "Encourages collaboration by sharing of resources across practices and locations to address the peaks and troughs of business."
    },
    {
      title: "The Deal Analytics Tool",
      text: "A dynamic internal tool designed for the GC practice to provide deal trends on a confidential and real-time basis. It provides flexibility to fine tune the output to the type of deal, the deal size, the deal period and various other parameters. Results are easy to interpret and include helpful features like exportable pie-charts."
    },
    {
      title: "urePlead",
      text: "An internal repository of state wise and court-wise formats for pleadings, along with specific practice notes for lawyers on procedures and lessons learnt."
    },
    {
      title: "FitURE",
      text: "Aims at improving the physical and mental health of Associates and Business Services professionals. The idea involves organising an \"Annual Wellness Week\" along with a program that runs throughout the year."
    },
    {
      title: "one URE",
      text: "A mobile app created for employees to stay connected with the activities at the firm and perform tasks on the go."
    },
    {
      title: "Directory of Arbitrators",
      text: "A duly curated database and dynamic directory of Arbitrators across the country along with name, contact detail, area of expertise, feedback, etc."
    },
    {
      title: "URE Alumni Network",
      text: "Stems from the vision of our Managing Partner to create a strong alumni network. It involves creation of a LinkedIn and Facebook community to foster continuous engagement."
    }
  ];

  return (
    <PageTemplate 
      title="Vichaar" 
      category="Innovation"
      heroImage="/images/innovation-hero.jpg"
      showHero={true}
    >
      <div className="space-y-12 pb-16">
        
        {/* Intro Text customized for URE Legal */}
        <p className="text-lg text-black leading-relaxed">
          URE Legal's commitment to fostering a culture of innovation internally and at a fundamental level is demonstrated in the Vichaar initiative. Vichaar is an extension of our innovation agenda to empower each one of us to drive modernization. Vichaar aims at drawing upon the optimism, inspiration, ideas, and opinions of everyone to solve a problem together. Every problem comes with a solution and we, as legal professionals, are naturally inclined to solve problems.
        </p>
        <p className="text-lg text-black leading-relaxed">
          Vichaar actively celebrates creators, risk-takers, and innovators. True progress cannot happen without deep collaboration between stakeholders at every level. We have created an interactive environment at URE Legal, which offers an opportunity for EVERYONE to imagine and create an impact with seamless execution of ideas. The innovation team works closely with the ideators to implement the winning ideas and also with other stakeholders to execute all relevant ideas that originate from Vichaar. 
          <br /><br />
          Since our inception, the following winning ideas have been implemented.
        </p>

        {/* Innovation Image Section */}
        <div className="w-full h-[500px] bg-[#F4F3EE] border border-dashed border-[#B1ADA1]/50 flex flex-col items-center justify-center mt-12 group hover:bg-gray-100 transition-colors rounded overflow-hidden">
          <img 
            src="/images/innovation-image.jpg" 
            alt="Innovation" 
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* The Tree Image Section */}
        <div className="w-full h-[600px] border border-dashed border-[#B1ADA1]/50 bg-[#F4F3EE]/50 flex items-center justify-center relative mt-16 mb-16 rounded overflow-hidden">
          <img 
            src="/images/innovation-image.jpg" 
            alt="Innovation Tree" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2-Column Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {winningIdeas.map((idea, idx) => (
            <div key={idx} className="bg-white border text-center border-[#B1ADA1]/30 p-10 flex flex-col items-center justify-start shadow-sm hover:shadow-md transition-shadow">
              {/* Logo / Icon Placeholder */}
              <div className="w-24 h-24 mb-6 relative">
                 <div className="absolute inset-0 border-2 border-dashed border-[#C15F3C]/20 rounded-full flex items-center justify-center bg-[#C15F3C]/5">
                    <span className="text-[10px] text-[#C15F3C] font-bold uppercase">Icon</span>
                 </div>
              </div>
              <h4 className="text-[#C15F3C] font-bold text-lg mb-4">{idea.title}</h4>
              <p className="text-black text-lg leading-relaxed">
                {idea.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </PageTemplate>
  );
}
