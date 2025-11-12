"use client";

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-black text-white relative">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="max-w-3xl text-[#cba549] text-base leading-relaxed">
              <p>
                TheClanbyGlobalEdifice,
                VQ5W+3VM,Bagalur-SarjapurRd,Sarjapura,Bengaluru,Karnataka-562125.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-[#cba549] text-sm">
              <p>RERA No - PRM/KA/1251/308/PR/091025/008153 </p>
              <Link
                href="https://rera.karnataka.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cba549] hover:text-[#cba549]/90 underline transition-colors"
              >
                Available at https://rera.karnatakagov.in
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#cba549] flex items-center justify-center text-[#cba549] hover:bg-[#cba549]/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#cba549] flex items-center justify-center text-[#cba549] hover:bg-[#cba549]/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#cba549] flex items-center justify-center text-[#cba549] hover:bg-[#cba549]/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#cba549] flex items-center justify-center text-[#cba549] hover:bg-[#cba549]/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="w-full border-t border-[#5a7a3c]/30 pt-6 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#cba549] text-sm">
                <p>
                  Copyright © 2025 TheClanbyGlobalEdifice 198901086104. All
                  Rights Reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="hover:text-[#5a7a3c] transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                  <span>|</span>
                  <Link
                    href="#"
                    className="hover:text-[#5a7a3c] transition-colors"
                  >
                    Disclaimer
                  </Link>
                  <span>|</span>
                  <Link
                    href="#"
                    className="hover:text-[#5a7a3c] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
