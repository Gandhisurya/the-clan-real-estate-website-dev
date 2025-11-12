"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const countryCodes = [
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+1", flag: "🇺🇸", country: "United States" },
  { code: "+1", flag: "🇨🇦", country: "Canada" },
  { code: "+44", flag: "🇬🇧", country: "United Kingdom" },
  { code: "+971", flag: "🇦🇪", country: "UAE" },
  { code: "+966", flag: "🇸🇦", country: "Saudi Arabia" },
  { code: "+65", flag: "🇸🇬", country: "Singapore" },
  { code: "+60", flag: "🇲🇾", country: "Malaysia" },
  { code: "+61", flag: "🇦🇺", country: "Australia" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+82", flag: "🇰🇷", country: "South Korea" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+39", flag: "🇮🇹", country: "Italy" },
  { code: "+34", flag: "🇪🇸", country: "Spain" },
  { code: "+31", flag: "🇳🇱", country: "Netherlands" },
  { code: "+32", flag: "🇧🇪", country: "Belgium" },
  { code: "+41", flag: "🇨🇭", country: "Switzerland" },
  { code: "+46", flag: "🇸🇪", country: "Sweden" },
  { code: "+47", flag: "🇳🇴", country: "Norway" },
  { code: "+45", flag: "🇩🇰", country: "Denmark" },
  { code: "+358", flag: "🇫🇮", country: "Finland" },
  { code: "+7", flag: "🇷🇺", country: "Russia" },
  { code: "+55", flag: "🇧🇷", country: "Brazil" },
  { code: "+52", flag: "🇲🇽", country: "Mexico" },
  { code: "+54", flag: "🇦🇷", country: "Argentina" },
  { code: "+27", flag: "🇿🇦", country: "South Africa" },
  { code: "+20", flag: "🇪🇬", country: "Egypt" },
  { code: "+90", flag: "🇹🇷", country: "Turkey" },
  { code: "+92", flag: "🇵🇰", country: "Pakistan" },
  { code: "+880", flag: "🇧🇩", country: "Bangladesh" },
  { code: "+94", flag: "🇱🇰", country: "Sri Lanka" },
  { code: "+977", flag: "🇳🇵", country: "Nepal" },
  { code: "+95", flag: "🇲🇲", country: "Myanmar" },
  { code: "+66", flag: "🇹🇭", country: "Thailand" },
  { code: "+84", flag: "🇻🇳", country: "Vietnam" },
  { code: "+62", flag: "🇮🇩", country: "Indonesia" },
  { code: "+63", flag: "🇵🇭", country: "Philippines" },
  { code: "+64", flag: "🇳🇿", country: "New Zealand" },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact-us"
      className="relative w-full py-20 overflow-hidden"
      style={{
        backgroundImage: "url('./Icons/green-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-32 h-32 rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-200">
            <path
              d="M50 5 Q20 25, 15 50 Q20 75, 50 95 Q80 75, 85 50 Q80 25, 50 5"
              fill="currentColor"
            />
            <path
              d="M50 15 Q30 30, 25 50 Q30 70, 50 85 Q70 70, 75 50 Q70 30, 50 15"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 -rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-200">
            <path
              d="M50 5 Q20 25, 15 50 Q20 75, 50 95 Q80 75, 85 50 Q80 25, 50 5"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 w-28 h-28 rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-200">
            <path
              d="M50 5 Q20 25, 15 50 Q20 75, 50 95 Q80 75, 85 50 Q80 25, 50 5"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute top-60 right-40 w-20 h-20 -rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-200">
            <path
              d="M50 5 Q20 25, 15 50 Q20 75, 50 95 Q80 75, 85 50 Q80 25, 50 5"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-16 w-16 h-16 rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-200">
            <path
              d="M50 5 Q20 25, 15 50 Q20 75, 50 95 Q80 75, 85 50 Q80 25, 50 5"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="absolute top-32 right-32 w-20 h-20 opacity-25 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-100">
          <path
            d="M30 50 Q40 30, 50 35 Q60 30, 70 50 Q60 70, 50 65 Q40 70, 30 50"
            fill="currentColor"
          />
          <circle cx="50" cy="50" r="6" fill="currentColor" />
          <path d="M50 30 L45 20 L55 20 Z" fill="currentColor" />
          <path
            d="M70 50 Q75 45, 80 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="sm:max-w-[70%] mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative z-10">
              <Image
                src="/logo-gold.png"
                alt="logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-24 h-px bg-[#d5b56c]"></div>

            <div className="flex flex-col items-center space-y-3 w-full">
              <h2 className="text-[#d5b56c] text-4xl md:text-5xl font-serif uppercase tracking-wider">
                CONTACT US
              </h2>
            </div>

            <p className="text-white text-center text-base sm:w-[80%] leading-relaxed">
              Complete this form, and our team of experts will reach out with
              personalized information and exclusive offers, making your
              home-buying experience truly memorable.
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full space-y-4 mt-8 text-base"
            >
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5a7a3c] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5a7a3c] transition-all"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="relative group">
                    <div className="w-[100px] flex items-center bg-white rounded-l-lg px-3 border-r border-gray-200 text-base">
                      <span className="text-xl mr-2">
                        {
                          countryCodes.find(
                            (c) => c.code === formData.countryCode
                          )?.flag
                        }
                      </span>
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="appearance-none bg-transparent text-gray-800 focus:outline-none pr-6 cursor-pointer py-3 text-base"
                      >
                        {countryCodes.map((country, index) => (
                          <option
                            key={`${country.code}-${country.country}-${index}`}
                            value={country.code}
                          >
                            {country.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-600 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="flex-1 px-4 py-3 rounded-r-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5a7a3c] transition-all"
                  />
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-12 py-3 bg-[#f5f5dc] text-[#144230] font-semibold uppercase tracking-wider rounded-lg hover:bg-[#e8e8d0] transition-colors shadow-lg w-full"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
