"use client";

import Image from "next/image";

export default function LifestyleSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#f5f0e8] overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/Icons/cream-bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch min-h-screen">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-24 relative">
          <div className="max-w-xl">
            <h2
              className="text-[#2d5016] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              ENHANCING LIFESTYLES,
              <br />
              TRANSFORMING SKYLINES.
            </h2>

            <p
              className="text-[#4a5c3a] text-base md:text-lg lg:text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
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

        <div className="w-full lg:w-1/2 shrink-0 relative">
          <div className="relative w-full h-full min-h-[500px] lg:min-h-screen flex justify-center items-center p-4">
            <Image
              src="/Icons/life-style.png"
              alt="Modern residential building"
              fill
              className="object-contain max-w-full max-h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
