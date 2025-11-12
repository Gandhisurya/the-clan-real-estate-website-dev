"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";

const YOUTUBE_VIDEO_ID = "J3X4xwOClY0";

export default function VideoWalkthrough() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative w-full py-20"
      style={{
        backgroundImage: "url('./Icons/cream-bg.png')",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-[#6b8e5a] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A JOURNEY THROUGH YOUR FUTURE HOME
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="relative cursor-pointer group">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500">
                  <img
                    src="/Icons/video-walkthrough.png"
                    alt="Master Bedroom"
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-14 md:size-16 lg:size-24 rounded-full bg-[#436944] flex items-center justify-center shadow-2xl group-hover:bg-[#436944]/90 transition-all duration-300">
                      <Play
                        className="size-8 md:size-10 lg:size-12 text-[#aab576] ml-1 group-hover:text-[#aab576]/90 transition-colors duration-300"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-6xl w-full p-0 bg-black border-none">
              <div className="relative w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                  title="Video Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
