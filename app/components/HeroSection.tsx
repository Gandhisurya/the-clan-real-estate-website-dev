"use client";

import { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "./icons/bg-img1.jpeg",
    title: "Golden Beginnings",
  },
  {
    id: 2,
    url: "./icons/bg-img2.jpeg",
    title: "Premium Living",
  },
  {
    id: 3,
    url: "./icons/bg-img3.jpeg",
    title: "Urban Lifestyle",
  },
];

const AUTO_SCROLL_INTERVAL = 5000;

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduceMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener?.("change", handleChange);
    return () => mediaQuery.removeEventListener?.("change", handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex: number) => (prevIndex + 1) % CAROUSEL_IMAGES.length
      );
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? CAROUSEL_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex: number) => (prevIndex + 1) % CAROUSEL_IMAGES.length
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = endX - touchStartXRef.current;
    const threshold = 40;
    if (deltaX > threshold) handlePrev();
    if (deltaX < -threshold) handleNext();
    touchStartXRef.current = null;
  };
  return (
    <section
      className="relative w-full h-screen sm:h-[80vh] md:h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />

      <div
        key={currentIndex}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]"
        style={{
          backgroundImage: `url('${CAROUSEL_IMAGES[currentIndex].url}')`,
        }}
      />

      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-[#436944] hover:bg-[#436944]/80 text-[#aab576] p-2 md:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:scale-105 active:scale-95 backdrop-blur-sm cursor-pointer opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <MoveLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-[#436944] hover:bg-[#436944]/80 text-[#aab576] p-2 md:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:scale-105 active:scale-95 backdrop-blur-sm cursor-pointer opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]"
        aria-label="Next slide"
        title="Next slide"
      >
        <MoveRight size={20} />
      </button>

      <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-6 md:left-12 z-20 max-w-4xl">
        <h1
          className="text-[#D4AF37] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          LIVE THE LEGACY OF
          <br />
          COMMUNITY LIVING.
        </h1>
      </div>
    </section>
  );
}
