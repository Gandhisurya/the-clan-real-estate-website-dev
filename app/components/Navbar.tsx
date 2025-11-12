"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    "About",
    "Amenities",
    "Unit Plans",
    "Gallery",
    "Project Status",
    "Location",
    "Contact Us",
  ];

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 w-full bg-black px-4 md:px-12 flex items-center justify-between z-50">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
          radial-gradient(circle at center, #055e49, transparent)
        `,
          }}
        />
        <div className="relative z-10">
          <Image
            src="/logo-gold.png"
            alt="logo"
            width={100}
            height={100}
            className="m-5"
          />
        </div>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center relative z-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[#fed980] text-base font-sans font-medium hover:text-[#D4AF37] transition-colors whitespace-nowrap hover:underline hover:underline-offset-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block relative z-10">
          <Image src="/ge-logo.png" alt="logo" width={100} height={120} />
        </div>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="lg:hidden relative z-10 p-2 text-[#fed980] hover:text-[#D4AF37] transition-colors"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black z-[70] lg:hidden transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: `
            radial-gradient(circle at center, #055e49, transparent)
          `,
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-[#fed980]/20">
            <Image
              src="/logo-gold.png"
              alt="logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-[#fed980] hover:text-[#D4AF37] transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={handleLinkClick}
                  className="text-[#fed980] text-lg font-medium hover:text-[#D4AF37] transition-colors py-3 border-b border-[#fed980]/10 hover:border-[#D4AF37]/30"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          <div className="p-6 border-t border-[#fed980]/20">
            <Image
              src="/ge-logo.png"
              alt="GE logo"
              width={80}
              height={96}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
