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
    <section className="relative w-full min-h-screen flex flex-col bg-[#f5f0e8] overflow-hidden py-16 lg:py-24">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('/Icons/cream-bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-[#6b8e5a] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            SPACES DESIGNED FOR YOUR UNIQUE LIFESTYLE
          </h2>
        </div>

        <div className="relative flex flex-col lg:flex-row">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d4c4a8]/60 hidden lg:block transform -translate-x-1/2 z-0" />

          {floorPlans.map((plan) => (
            <div
              key={plan.id}
              className={`w-full lg:w-1/2 flex flex-col ${
                plan.position === "left"
                  ? "lg:pr-12"
                  : "lg:pl-12 lg:flex-col-reverse"
              }`}
            >
              {plan.position === "left" ? (
                <>
                  <div className="relative mb-8 lg:mb-12">
                    <div className="relative w-full aspect-[4/3] bg-white rounded-lg shadow-md overflow-hidden border border-[#e8ddd0]">
                      <Image
                        src={plan.image}
                        alt={`${plan.type} Floor Plan - Unit ${plan.unitNo}`}
                        fill
                        className="object-contain p-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[#f5f0e8]">
                        <div className="text-center text-gray-500">
                          <p className="text-lg font-semibold mb-2">
                            {plan.type} Floor Plan
                          </p>
                          <p className="text-sm">UNIT NO: {plan.unitNo}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50"
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M30 30 L35 35 M65 35 L70 30 M30 70 L35 65 M65 65 L70 70"
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M35 30 L30 35 M70 30 L65 35 M35 70 L30 65 M70 70 L65 65"
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="50" cy="50" r="4" fill="#D4AF37" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-4 lg:pr-8">
                    <div>
                      <h3
                        className="text-[#6b8e5a] text-3xl md:text-4xl lg:text-5xl font-serif mb-1"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        the CLAN
                      </h3>
                      <p
                        className="text-[#2d5016] text-xs md:text-sm font-medium mb-6"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        ROOTED IN THE NEW LEGACY
                      </p>
                    </div>

                    <p
                      className="text-[#4a5c3a] text-base md:text-lg font-semibold mb-3"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {plan.type}, {plan.size}
                      {plan.status && (
                        <span className="text-[#8b7355] ml-2 font-normal">
                          - {plan.status}
                        </span>
                      )}
                    </p>

                    <p
                      className="text-[#5a6b4a] text-sm md:text-base leading-relaxed mb-6"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {plan.description}
                    </p>

                    <button
                      className="bg-[#1a3d0f] hover:bg-[#0f2510] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-sm md:text-base"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Check Prices
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4 mb-8 lg:mb-12 lg:pl-8">
                    <div>
                      <h3
                        className="text-[#6b8e5a] text-3xl md:text-4xl lg:text-5xl font-serif mb-1"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        the CLAN
                      </h3>
                      <p
                        className="text-[#2d5016] text-xs md:text-sm font-medium mb-6"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        ROOTED IN THE NEW LEGACY
                      </p>
                    </div>

                    <p
                      className="text-[#4a5c3a] text-base md:text-lg font-semibold mb-3"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {plan.type}, {plan.size}
                      {plan.status && (
                        <span className="text-[#8b7355] ml-2 font-normal">
                          - {plan.status}
                        </span>
                      )}
                    </p>

                    <p
                      className="text-[#5a6b4a] text-sm md:text-base leading-relaxed mb-6"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {plan.description}
                    </p>

                    <button
                      className="bg-[#1a3d0f] hover:bg-[#0f2510] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-sm md:text-base"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Check Prices
                    </button>
                  </div>

                  <div className="relative">
                    <div className="relative w-full aspect-[4/3] bg-white rounded-lg shadow-md overflow-hidden border border-[#e8ddd0]">
                      <Image
                        src={plan.image}
                        alt={`${plan.type} Floor Plan - Unit ${plan.unitNo}`}
                        fill
                        className="object-contain p-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[#f5f0e8]">
                        <div className="text-center text-gray-500">
                          <p className="text-lg font-semibold mb-2">
                            {plan.type} Floor Plan
                          </p>
                          <p className="text-sm">UNIT NO: {plan.unitNo}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50"
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M30 30 L35 35 M65 35 L70 30 M30 70 L35 65 M65 65 L70 70"
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M35 30 L30 35 M70 30 L65 35 M35 70 L30 65 M70 70 L65 65"
                          stroke="#D4AF37"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="50" cy="50" r="4" fill="#D4AF37" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

