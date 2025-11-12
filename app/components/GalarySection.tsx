"use client";

import { cn } from "@/lib/utils";

const galleryItems = [
  {
    number: "01",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
  },
  {
    number: "02",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  },
  {
    number: "03",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  },
];

export default function GallerySection() {
  return (
    <section
      className="relative w-full py-20 bg-[#f5f0e8]"
      style={{
        backgroundImage: "url('./Icons/cream-bg.png')",
      }}
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-[#214d39] text-4xl md:text-5xl lg:text-6xl font-serif mb-5 inline-block"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A LOOK INTO YOUR FUTURE AT LIVINGTREE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-0">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div
                className={cn(
                  "relative w-full h-[300px] sm:h-[350px] md:h-[450px] overflow-hidden group-hover:shadow-lg transition-all duration-300",
                  index === 1 ? "sm:mt-28 md:mt-32 lg:mt-36" : "",
                  "animate-fadeIn",
                  index === 0
                    ? "delay-100"
                    : index === 1
                    ? "delay-200"
                    : "delay-300"
                )}
              >
                <img
                  src={item.image}
                  alt={`Gallery ${item.number}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold block leading-none">
                    {item.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
