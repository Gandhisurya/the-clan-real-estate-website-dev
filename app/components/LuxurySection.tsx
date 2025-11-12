"use client";

import Image from "next/image";

export default function LuxurySection() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center bg-[#f5f0e8] overflow-hidden "
      style={{
        backgroundImage: "url('./Icons/cream-bg.png')",
      }}
    >
      <div className="absolute inset-0 opacity-20" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch min-h-screen">
        <div className="w-full lg:w-[45%] shrink-0 relative">
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-screen flex justify-center items-center animate-slide-right">
            <Image
              src="/Icons/life-style.png"
              alt="Luxury interior lifestyle"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-16 lg:py-24 relative animate-slide-left">
          <div className="max-w-5xl">
            <h2
              className="text-[#1a3d0f] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              ROOTED IN LUXURY,
              <br />
              BRANCHING INTO THE
              <br />
              FUTURE
            </h2>

            <p
              className="text-[#4a5c3a] text-base md:text-lg lg:text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              At LivingTree, we&apos;re designing more than just living spaces
              we&apos;re crafting the canvas for your life&apos;s most cherished
              memories. Nestled within a lush, 25-acre community, our
              residential property in Bangalore combines the best of nature and
              luxury, just 15 minutes from Bangalore International Airport. With
              ten 24-floored towers and over 60 amenities specially curated for
              four generations, we create a home that is a reflection of your
              dreams a place where you can truly belong.
            </p>
          </div>
        </div>

        {/* <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 lg:w-24 flex items-center justify-center bg-[#1a3d0f] cursor-pointer hover:bg-[#0f2510] transition-colors duration-300">
          <div className="writing-vertical-rl text-white uppercase font-semibold text-sm md:text-base tracking-widest">
            ENQUIRE NOW
          </div>
        </div> */}
      </div>
    </section>
  );
}
