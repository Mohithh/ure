"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Decoding India's\nNew Labour Codes",
    subtitle: "Access expert commentary, FAQs, and actionable insights.",
    image: "/slider1.png",
  },
  {
    id: 2,
    title: "Corporate Law Insights",
    subtitle: "Stay ahead with legal updates and expert analysis.",
    image: "/slider2.png",
  },
  {
    id: 3,
    title: "Future of Legal Tech",
    subtitle: "Innovation shaping tomorrow's legal ecosystem.",
    image: "/slider3.png",
  },
];

export default function Slides() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      {/* ================= HERO SLIDER ================= */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* SLIDER TRACK */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-full relative">
              {/* BACKGROUND */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* OVERLAY */}
                <div className="w-full h-full bg-gradient-to-r from-[#6a1b5d]/90 to-[#1a1a40]/70 flex items-center">
                  <div className="max-w-6xl px-10 text-white">
                    <div className="flex items-start gap-4">
                      {/* ORANGE BAR */}
                      <div className="w-2 h-20 bg-[#e87722] rounded"></div>

                      {/* TEXT */}
                      <div>
                        <h1 className="text-4xl md:text-5xl font-bold whitespace-pre-line leading-tight">
                          {slide.title}
                        </h1>

                        <p className="mt-4 text-lg opacity-90">
                          {slide.subtitle}
                        </p>

                        <button className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition z-20"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition z-20"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${slide.id}`}
              className={`h-1 w-10 cursor-pointer transition ${
                current === index ? "bg-[#e87722]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= ABOUT + PEOPLE ================= */}
      
    </div>
  );
}