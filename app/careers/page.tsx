"use client";

import Image from "next/image";
import { useState } from "react";

export default function Careers() {
  const [activeTab, setActiveTab] = useState("leadership");

  return (
    <div className="bg-white text-[#2b2b2b]">
      {/* HERO IMAGE */}
      <div className="w-full h-[320px] relative">
        <Image
          src="/images/career-hero.jpg"
          alt="careers"
          fill
          className="object-cover"
        />
      </div>

      {/* PURPLE BAR */}
      <div className="bg-[#6b2c5c] text-white px-10 py-6 text-3xl">Careers</div>

      {/* CONTENT */}
      <div className="px-6 md:px-16 py-10 grid md:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="md:col-span-2">
          <h2 className="text-xl text-[#6b2c5c] mb-4">
            Committed to shaping the finest lawyers for a just world.
          </h2>

          <h3 className="text-lg font-semibold mb-3">Why work with cam</h3>

          <p className="text-sm leading-7 mb-3">
            cam is India’s Leading Law Firm with a global reputation of being
            trusted advisors to our clients. As a full-service law firm, we
            advise a large and diverse set of clients such as domestic and
            foreign commercial enterprises, financial institutions, private
            equity funds, venture capital funds, start-ups, government, and
            regulatory bodies.
          </p>

          <p className="text-sm leading-7 mb-3">
            At cam, our identity is our <b>Ahead of the Curve</b> mindset
            defined by our relentless curiosity and inventiveness.
          </p>

          <p className="text-sm leading-7">
            With our global reputation and ties with international law firms, we
            work diligently to maintain a global outlook with local depth.
          </p>
        </div>

        {/* RIGHT BOX */}
        <div className="bg-[#eae3dc] p-6">
          <h3 className="text-lg font-semibold text-[#6b2c5c] mb-4">
            Opportunities
          </h3>

          <div className="space-y-4">
            <button className="w-full bg-[#6b2c5c] text-white py-3">
              Legal Professionals
            </button>
            <button className="w-full bg-[#6b2c5c] text-white py-3">
              Internship
            </button>
            <button className="w-full bg-[#6b2c5c] text-white py-3">
              Business Services
            </button>
          </div>
        </div>
      </div>

      {/* CULTURE SECTION */}
      <div className="px-6 md:px-16 py-10">
        <h2 className="text-2xl text-[#6b2c5c] mb-6">
          Culture of Continuous Learning
        </h2>

        {/* TABS */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("leadership")}
            className={`px-6 py-3 ${
              activeTab === "leadership"
                ? "bg-[#e87722] text-white"
                : "bg-[#f4f3ee]"
            }`}
          >
            Leadership Academy
          </button>

          <button
            onClick={() => setActiveTab("learning")}
            className={`px-6 py-3 ${
              activeTab === "learning"
                ? "bg-[#e87722] text-white"
                : "bg-[#f4f3ee]"
            }`}
          >
            Knowledge & Learning
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 bg-[#f4f3ee] p-6">
          <div className="text-sm leading-7">
            {activeTab === "leadership" ? (
              <>
                <p>
                  Leadership Academy at CAM enables firm members to be
                  future-ready by building expertise in leadership, business,
                  and lawyering skills.
                </p>
                <p className="mt-3">
                  Our programs combine learning, peer discussions and real-world
                  exposure.
                </p>
              </>
            ) : (
              <>
                <p>
                  Knowledge & Learning focuses on continuous development through
                  structured training modules and mentoring.
                </p>
              </>
            )}
          </div>

          <div className="relative h-[250px]">
            <Image
              src="/images/learning.jpg"
              alt="learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* LIFE SECTION */}
      <div className="px-6 md:px-16 py-10">
        <h2 className="text-xl text-[#6b2c5c] mb-4">Life at cam</h2>

        <p className="text-sm leading-7 mb-4">
          Our role as trusted advisors involves bringing our whole selves to the
          table and delivering practical insights and solutions to our clients.
        </p>

        <p className="text-sm leading-7 mb-4">
          As a full-service law firm, you will have opportunities and exposure
          to various practices and sectors.
        </p>

        {/* TEAM IMAGES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-[180px]">
              <Image
                src={`/images/team${i}.jpg`}
                alt="team"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DIVERSITY SECTION */}
      <div className="relative h-[300px] mt-10">
        <Image
          src="/images/diversity.jpg"
          alt="diversity"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/80 flex items-center">
          <div className="px-10 max-w-2xl">
            <h2 className="text-xl text-[#6b2c5c] mb-2">
              Diversity and Inclusion
            </h2>
            <p className="text-sm">
              We are proud of our people and our principles, ensuring diversity
              and inclusivity across all departments.
            </p>
          </div>
        </div>
      </div>

      {/* CULTURE IMAGE SECTION */}
      <div className="grid md:grid-cols-2 mt-10">
        <div className="relative h-[300px]">
          <Image
            src="/images/culture.jpg"
            alt="culture"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-10 bg-[#f4f3ee]">
          <h2 className="text-xl text-[#6b2c5c] mb-3">Our Culture</h2>
          <p className="text-sm leading-7">
            At cam, we have a transparent framework where meritocracy is placed
            above all, and young talent is mentored effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
