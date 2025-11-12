"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const sections = [
  {
    title: "Tech Parks/ Work Spaces",
    items: [
      "Wipro Aerospace",
      "Manyata Tech Park",
      "L&T Tech Park",
      "Boeing",
      "Brigade Magnum",
    ],
  },
  {
    title: "Schools and Colleges",
    items: [
      "Delhi Public School",
      "National Public School",
      "Presidency School",
      "Presidency University",
      "CRM University",
    ],
  },
  {
    title: "Hospitals",
    items: ["Aster Hospital", "Regal Hospital", "Columbia Asia"],
  },
  {
    title: "Shopping Malls",
    items: [
      "Mall of Asia",
      "Elements Mall",
      "Bhartiya Mall",
      "Galleria Mall",
      "Lulu Value Mart",
    ],
  },
  {
    title: "Others",
    items: [
      "Bangalore International Airport",
      "Byg Brewski",
      "Decathlon",
      "Hebbal Flyover",
    ],
  },
];

export default function LocationAdvantages() {
  return (
    <section
      className="w-full py-16 md:py-20 lg:py-24 bg-[#5a7b3c]"
      style={{
        backgroundImage: "url('./Icons/green-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-[#d5b56c] text-2xl sm:text-3xl md:text-4xl font-serif mb-5 uppercase"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Location Advantages
        </h2>
        <p className="max-w-4xl mb-6 md:mb-8 text-white text-sm sm:text-base md:text-lg leading-relaxed">
          Located in the thriving KIADB Aerospace Park, LivingTree offers the
          perfect blend of urban convenience and serene living with easy access
          to Bangalore&apos;s major tech hubs, educational institutions,
          healthcare facilities and more.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <Accordion
            type="single"
            collapsible
            defaultValue="adv-0"
            className="space-y-5"
          >
            {sections.map((sec, idx) => (
              <div key={sec.title}>
                <AccordionItem
                  value={`adv-${idx}`}
                  className="border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-white font-semibold text-base md:text-lg px-4 md:px-6 py-4 hover:text-[#d5b56c] transition-colors duration-300 cursor-pointer">
                    {sec.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 pb-4">
                    <ul className="list-disc pl-5 space-y-2 text-white text-base md:text-lg">
                      {sec.items.map((item) => (
                        <li key={item} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
          <div className="relative group w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              src="/Icons/clan-map.png"
              alt="Map"
              className="w-full h-full object-cover rounded-xl group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
