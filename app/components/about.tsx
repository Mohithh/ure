export default function About() {
    return (
       <div className="w-full bg-white py-16 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* ABOUT US */}
          <div>
            <h2 className="text-3xl text-[#6a1b5d] mb-4">About us</h2>

            <p className="text-sm leading-7 text-gray-700">
              Cyril Amarchand Mangaldas (cam) is India's leading law firm with a
              global reputation of being trusted advisers to its clients. The
              Firm advises a large and diverse set of clients, including
              domestic and foreign commercial enterprises, financial
              institutions, private equity and venture capital funds, start-ups,
              government and regulatory bodies.
            </p>

            <button className="mt-6 bg-[#6a1b5d] text-white px-6 py-2">
              Read More
            </button>
          </div>

          {/* OUR PEOPLE */}
          <div>
            <h2 className="text-3xl text-[#6a1b5d] mb-4">Our People</h2>

            <p className="text-sm leading-7 text-gray-700">
              Our lawyers have an unmatched combination of academic pedigree,
              technical skills and an ahead of the curve mindset, allowing them
              to deliver practical solutions to our clients in an ever changing
              market.
            </p>

            <button className="mt-6 bg-[#6a1b5d] text-white px-6 py-2">
              Find A Lawyer
            </button>
          </div>
        </div>
      </div>
    );
}