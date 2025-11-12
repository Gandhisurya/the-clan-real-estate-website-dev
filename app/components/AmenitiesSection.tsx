"use client";

import Image from "next/image";

const amenities = [
  {
    id: 1,
    name: "Lawns & Gardens",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 70 L35 60 L40 65 L45 55 L50 70 L55 60 L60 65 L70 70"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="35" cy="60" r="3" fill="#D4AF37" />
        <circle cx="45" cy="55" r="3" fill="#D4AF37" />
        <circle cx="55" cy="60" r="3" fill="#D4AF37" />
        <rect x="25" y="70" width="50" height="5" fill="#D4AF37" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Bus Bay",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="50"
          width="60"
          height="25"
          rx="2"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="25"
          y="55"
          width="8"
          height="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="35"
          y="55"
          width="8"
          height="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="45"
          y="55"
          width="8"
          height="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="55"
          y="55"
          width="8"
          height="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="30"
          cy="80"
          r="6"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="70"
          cy="80"
          r="6"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="25"
          y="40"
          width="50"
          height="10"
          rx="2"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M35 40 L35 30 M40 40 L40 30 M45 40 L45 30 M50 40 L50 30 M55 40 L55 30"
          stroke="#D4AF37"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Pet Park",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="35"
          cy="45"
          r="12"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="35" cy="45" r="4" fill="#D4AF37" />
        <ellipse cx="30" cy="42" rx="2" ry="3" fill="#D4AF37" />
        <ellipse cx="40" cy="42" rx="2" ry="3" fill="#D4AF37" />
        <path
          d="M30 50 Q35 55 40 50"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M25 60 L30 70 L40 70 L45 60"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="65"
          cy="50"
          r="10"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="65" cy="50" r="3" fill="#D4AF37" />
        <ellipse cx="62" cy="48" rx="1.5" ry="2" fill="#D4AF37" />
        <ellipse cx="68" cy="48" rx="1.5" ry="2" fill="#D4AF37" />
        <path
          d="M60 55 Q65 58 70 55"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M58 62 L62 70 L68 70 L72 62"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <rect x="20" y="75" width="60" height="3" fill="#D4AF37" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Bicycle Lane & Jogging Track",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 50 Q30 40, 40 50 Q50 60, 60 50 Q70 40, 80 50"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="30"
          cy="50"
          r="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="30" cy="50" r="2" fill="#D4AF37" />
        <circle
          cx="70"
          cy="50"
          r="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="70" cy="50" r="2" fill="#D4AF37" />
        <path d="M30 50 L70 50" stroke="#D4AF37" strokeWidth="2" />
        <path
          d="M35 45 L40 50 L35 55"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M25 45 L20 50 L25 55"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Plazas & Community Spaces",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30"
          cy="40"
          r="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="30" cy="40" r="3" fill="#D4AF37" />
        <circle
          cx="50"
          cy="35"
          r="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="50" cy="35" r="3" fill="#D4AF37" />
        <circle
          cx="70"
          cy="40"
          r="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="70" cy="40" r="3" fill="#D4AF37" />
        <path d="M30 40 L50 35 L70 40" stroke="#D4AF37" strokeWidth="2" />
        <rect
          x="25"
          y="60"
          width="50"
          height="20"
          rx="2"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M35 60 L35 80 M45 60 L45 80 M55 60 L55 80"
          stroke="#D4AF37"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Swimming Pools & Jacuzzi",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="45"
          width="60"
          height="30"
          rx="5"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M30 50 Q35 55, 40 50 Q45 55, 50 50 Q55 55, 60 50 Q65 55, 70 50"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M30 60 Q35 65, 40 60 Q45 65, 50 60 Q55 65, 60 60 Q65 65, 70 60"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="25"
          y="35"
          width="8"
          height="10"
          rx="1"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="67"
          y="35"
          width="8"
          height="10"
          rx="1"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="29" cy="40" r="2" fill="#D4AF37" />
        <circle cx="71" cy="40" r="2" fill="#D4AF37" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Event Areas & Amphitheatre",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 70 L50 30 L80 70"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M25 70 L50 40 L75 70"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="45"
          y="70"
          width="10"
          height="15"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="50" cy="25" r="3" fill="#D4AF37" />
        <path
          d="M30 60 L35 65 M40 55 L45 60 M55 60 L60 65 M65 55 L70 60"
          stroke="#D4AF37"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Multiple Courts",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="30"
          width="60"
          height="40"
          stroke="#D4AF37"
          strokeWidth="3"
          fill="none"
        />
        <path d="M50 30 L50 70" stroke="#D4AF37" strokeWidth="2" />
        <circle
          cx="50"
          cy="50"
          r="8"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M25 50 L35 50 M65 50 L75 50"
          stroke="#D4AF37"
          strokeWidth="2"
        />
        <rect
          x="22"
          y="32"
          width="8"
          height="8"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="70"
          y="32"
          width="8"
          height="8"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="22"
          y="60"
          width="8"
          height="8"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="70"
          y="60"
          width="8"
          height="8"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function AmenitiesSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden py-12 lg:py-16"
      style={{
        backgroundImage: "url('./Icons/green-bg.jpg')",
      }}
    >
      <div className="relative z-10 w-full mx-auto">
        <div className="text-center mb-8 lg:mb-10">
          <h2
            className="text-[#cbb26f] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {" "}
            DESIGNED FOR FOUR GENERATIONS
          </h2>
        </div>

        <div className="w-[70%] mx-auto mb-12 lg:mb-16 space-y-2">
          <p
            className="text-white text-sm sm:text-base md:text-lg text-center"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            At LivingTree, we believe in nurturing a holistic lifestyle. Our
            thoughtfully crafted amenities cater to all ages, fostering a
            vibrant and fulfilling community. From serene gardens and pet park
            to swimming pools, jogging tracks and play areas, there&apos;s
            something for everyone. We offer quiet retreats like yoga zones and
            reading nooks, along with active spaces for sports and events.
          </p>

          <p
            className="text-white text-sm lg:text-base leading-relaxed text-center"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Sustainability is at our core, with pollution filtration, renewable
            energy and EV charging stations. LivingTree ensures a balanced
            lifestyle for every generation, whether for work, play or
            relaxation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.id}
              className="flex flex-col items-center animate-fadeInUp delay-[0.1s]"
            >
              <div className="size-12 sm:size-14 md:size-16 lg:size-20 rounded-full border-2 border-[#c9b480] flex items-center justify-center p-2 mb-4 text-[#c9b480]">
                <div className="w-full h-full text-[#c9b480]">
                  {amenity.icon}
                </div>
              </div>
              <p
                className="text-white text-sm sm:text-base text-center font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {amenity.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
