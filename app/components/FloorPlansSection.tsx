"use client";

import Image from "next/image";

const floorPlans = [
  {
    id: 1,
    type: "1 BHK",
    size: "576 Sq. Ft. Onwards",
    status: "Sold Out",
    unitNo: "208-908",
    description:
      "Elegant spaces with Juliet balconies in most units offering compact luxury perfect for young professionals or couples seeking comfort and convenience.",
    image: "/Icons/floor-plan-1bhk.png",
    position: "left",
  },
  {
    id: 2,
    type: "3 BHK",
    size: "1316 Sq. Ft. Onwards",
    status: null,
    unitNo: "208-908",
    description:
      "Expansive spaces with Juliet balconies in most units promising functionality, luxury and unmatched comfort to larger families with stunning views and our signature amenities.",
    image: "/Icons/floor-plan-3bhk.png",
    position: "right",
  },
];

export default function FloorPlansSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#f5f0e8] overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-[#6b8e5a] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            SPACES DESIGNED FOR YOUR UNIQUE LIFESTYLE
          </h2>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-6 sm:gap-8 lg:gap-12">
            <div className="relative w-full lg:w-auto shrink-0">
              <Image
                src="/Icons/space1.png"
                alt="img"
                width={600}
                height={600}
                className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto mx-auto lg:mx-0"
                priority
              />
            </div>
            <div className="space-y-4 lg:pr-8 w-full lg:w-auto">
              <div className="flex flex-col items-center justify-center">
                <div className="relative z-10">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={120}
                    height={120}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] object-contain"
                  />
                </div>
                <p
                  className="text-[#2d5016] text-xs sm:text-sm md:text-base font-medium my-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  3 BHK, 1316 Sq. Ft. Onwards
                </p>
                <p className="w-full max-w-[550px] text-center text-sm sm:text-base md:text-lg font-medium text-[#5a7a3c] mb-5 px-4 sm:px-0">
                  Expansive spaces with Juliet balconies in most units promising
                  functionality, luxury and unmatched comfort to larger families
                  with stunning views and our signature amenities.
                </p>
                <button className="bg-[#31806a] hover:bg-[#31806a]/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base md:text-lg cursor-pointer">
                  Check Prices
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full border-t border-[#d4c4a8]/60 my-8 sm:my-12 lg:my-16" />
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between w-full gap-6 sm:gap-8 lg:gap-12">
            <div className="relative w-full lg:w-auto shrink-0">
              <Image
                src="/Icons/space2.png"
                alt="img"
                width={600}
                height={600}
                className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto mx-auto lg:mx-0"
                priority
              />
            </div>
            <div className="space-y-4 lg:pr-8 w-full lg:w-auto">
              <div className="flex flex-col items-center justify-center">
                <div className="relative z-10">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={120}
                    height={120}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] object-contain"
                  />
                </div>
                <p
                  className="text-[#2d5016] text-xs sm:text-sm md:text-base font-medium my-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  1 BHK, 576 Sq. Ft. Onwards - Sold Out
                </p>
                <p className="w-full max-w-[550px] text-center text-sm sm:text-base md:text-lg font-medium text-[#5a7a3c] mb-5 px-4 sm:px-0">
                  Elegant spaces with Juliet balconies in most units offering
                  compact luxury perfect for young professionals or couples
                  seeking comfort and convenience.
                </p>
                <button className="bg-[#31806a] hover:bg-[#31806a]/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base md:text-lg cursor-pointer">
                  Check Prices
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
