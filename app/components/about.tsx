export default function About() {
    return (
       <div className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* ABOUT US */}
          <div>
            <h2 className="text-3xl font-medium mb-6 text-[#C15F3C]">About us</h2>

            <p className="text-sm leading-7 text-[#C15F3C] mb-8">
              Cyril Amarchand Mangaldas (cam) is India's leading law firm with a
              global reputation of being trusted advisers to its clients. The
              Firm advises a large and diverse set of clients, including
              domestic and foreign commercial enterprises, financial
              institutions, private equity and venture capital funds, start-ups,
              government and regulatory bodies.
            </p>

            <button className="bg-[#C15F3C] text-white px-8 py-3 rounded text-sm font-bold border-2 border-[#C15F3C] hover:scale-105 transition-transform duration-300 shadow-md">
              Read More
            </button>
          </div>

          {/* OUR PEOPLE */}
          <div>
            <h2 className="text-3xl font-medium mb-6 text-[#C15F3C]">Our People</h2>

            <p className="text-sm leading-7 text-[#C15F3C] mb-8">
              Our lawyers have an unmatched combination of academic pedigree,
              technical skills and an ahead of the curve mindset, allowing them
              to deliver practical solutions to our clients in an ever changing
              market.
            </p>

            <button className="bg-[#C15F3C] text-white px-8 py-3 rounded text-sm font-bold border-2 border-[#C15F3C] hover:scale-105 transition-transform duration-300 shadow-md">
              Find A Lawyer
            </button>
          </div>
        </div>
      </div>
    );
}