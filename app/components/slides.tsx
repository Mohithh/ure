"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,

    image: "/home1.jpeg",
    link: "/new-labour-codes",
  },
  {
    id: 2,

    image: "/home2.jpeg",
    link: "/expertise",
  },
  {
    id: 3,

    image: "/home6.jpeg",
    link: "/legaltech-als",
  },
  {
    id: 4,

    image: "/home3.jpeg",
    link: "/legaltech-als",
  },
  {
    id: 5,

    image: "/home4.jpeg",
    link: "/legaltech-als",
  },
  {
    id: 6,

    image: "/home5.jpeg",
    link: "/legaltech-als",
  },

];

export default function Slides() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // AUTO SLIDE
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      {/* ================= HERO SLIDER ================= */}
      <div
        className="relative w-full h-[500px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
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
                <div className="w-full h-full bg-transparent flex items-center">
                  <div className="max-w-6xl px-10 text-white ml-24">
                    {/* TEXT */}
                    <div>
                      <Link href={slide.link}>
                        <button className="mt-6 bg-[#C15F3C] text-white px-10 py-3 rounded text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-md">
                          Read More
                        </button>
                      </Link>
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
              className={`h-1 w-10 cursor-pointer transition ${current === index ? "bg-[#e87722]" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>

      {/* ================= ABOUT + PEOPLE ================= */}

    </div>
  );
}