import PageTemplate from '@/app/components/pagetemplate';

export default function InnovationPage() {
  return (
    <PageTemplate 
      title="Innovation" 
      category="Innovation"
      subtitle="Refining the practice of law through a culture of relentless curiosity and technological excellence."
      bottomSection={
        <div className="space-y-6">
          <h2 className="text-4xl font-normal text-[#1a1a1a]">Innovation Awards</h2>
          <ul className="space-y-3 mt-8">
            <li className="flex gap-2">
              <span className="text-gray-400">⌝</span>
              <span className="text-[#1a1a1a] text-lg font-medium">ET Legal Awards 2023 for Excellence in Legal Tech Implementation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">⌝</span>
              <span className="text-[#1a1a1a] text-lg font-medium">ALITA Awards 2023 for Outstanding Legal Innovator (Law Firm) Award</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">⌝</span>
              <span className="text-[#1a1a1a] text-lg font-medium">CII Industrial Innovation Awards 2023 (Only law firm to get recognised as Top 50 Innovative Companies in India)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">⌝</span>
              <span className="text-[#1a1a1a] text-lg font-medium">Legal Era Indian Legal Awards 2021 for Law firm of the year – Innovation, Strategies and Continuous growth</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">⌝</span>
              <span className="text-[#1a1a1a] text-lg font-medium">ALITA Solia People's Choice Award 2021 for Collaborate</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400">⌝</span>
              <span className="text-[#1a1a1a] text-lg font-medium">CII Industrial Innovation Awards 2020 (Only law firm to get recognised as Top 25 Innovative Companies in India)</span>
            </li>
          </ul>
        </div>
      }
    />
  );
}
