"use client";

import Image from "next/image";

const offices = [
  {
    city: "Mumbai",
    address:
      "Peninsula Chambers, Peninsula Corporate Park, GK Marg, Lower Parel, Mumbai – 400 013, India.",
    phone: "+91 22 66604455",
    img: "/images/map1.jpg",
    person: "Paridhi Adani",
  },
  {
    city: "Delhi - NCR",
    address: "Level 1 & 2, Max Towers, Sector 16B, Noida – 201301, India.",
    phone: "+91 120 669 9000",
    img: "/images/map2.jpg",
    person: "Rashmi Pradeep",
  },
  {
    city: "Bengaluru",
    address: "Prestige Falcon Tower, MG Road, Bengaluru – 560025, India.",
    phone: "+91 80 67922000",
    img: "/images/map3.jpg",
    person: "Edward James",
  },
  {
    city: "Ahmedabad",
    address: "Navratna Corporate Park, Ahmedabad – 380058, India.",
    phone: "+91 79 35039999",
    img: "/images/map4.jpg",
    person: "Paridhi Adani",
  },
  {
    city: "Hyderabad",
    address: "HITEC City, Hyderabad – 500081, India.",
    phone: "+91 40 40000000",
    img: "/images/map5.jpg",
    person: "Rashmi Pradeep",
  },
  {
    city: "Chennai",
    address: "Egmore, Chennai – 600006, India.",
    phone: "+91 44 40000000",
    img: "/images/map6.jpg",
    person: "Edward James",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/contact-hero.jpg"
          alt="contact"
          fill
          className="object-cover"
        />
      </div>

      {/* PURPLE BAR */}
      <div className="bg-[#6b2c5c] text-white px-10 py-6 text-3xl">Contact</div>

      {/* TEXT */}
      <div className="px-6 md:px-16 py-10">
        <p className="text-[#6b2c5c] text-lg max-w-3xl">
          For inquiries, please fill in the form below and one of our experts
          will revert shortly.
        </p>
      </div>

      {/* OFFICES */}
      <div className="px-6 md:px-16 pb-16">
        <h2 className="text-2xl text-[#6b2c5c] mb-8">Our Offices</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((item, i) => (
            <div key={i} className="bg-[#f4f3ee] shadow-sm">
              {/* MAP */}
              <div className="relative h-[200px]">
                <Image src={item.img} alt="map" fill className="object-cover" />
              </div>

              {/* DETAILS */}
              <div className="p-5">
                <h3 className="text-lg text-[#6b2c5c] font-semibold mb-2">
                  {item.city}
                </h3>

                <p className="text-sm text-gray-700 mb-2">{item.address}</p>

                <p className="text-sm mb-4">T {item.phone}</p>

                {/* KEY CONTACT */}
                <p className="text-[#6b2c5c] mb-2">Key Contact</p>

                <div className="flex items-center gap-3 bg-[#eae3dc] p-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

                  <div>
                    <p className="text-sm font-semibold">{item.person}</p>
                    <p className="text-xs text-gray-600">Partner</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
