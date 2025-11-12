"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqs = [
  {
    q: "What is the total land area of Living Tree by Kalyani Developers?",
    a: "The total land area of LivingTree is 25 acres, out of which, 20 acres is open space.",
  },
  {
    q: "Where is LivingTree located?",
    a: "LivingTree is located at KIADB Aerospace Park, North Bangalore, and just 15 mins before the Bangalore International Airport.",
  },
  {
    q: "What are the key amenities at LivingTree?",
    a: "LivingTree has 60+ amenities. Some of the amenities at LivingTree by Kalyani Developers include 2 clubhouses, swimming pools, squash courts, co-working space, mini golf course, cricket maidan and much more.",
  },
  {
    q: "What is the completion date of LivingTree?",
    a: "Construction is in progress. The project is scheduled to be completed by September 2029.",
  },
  {
    q: "How many apartments are there in LivingTree by Kalyani Developers?",
    a: "LivingTree has a total of 2522 apartments.",
  },
  {
    q: "What type of configurations are there in LivingTree?",
    a: "LivingTree by Kalyani Developers has 1, 2, 2.5, and 3 BHK apartments.",
  },
  {
    q: "What is the RERA registration number of LivingTree by Kalyani Developers?",
    a: "The RERA registration number is PRM/KA/RERA/1251/309/PR/260924/007084.",
  },
  {
    q: "What makes LivingTree by Kalyani Developers stand out?",
    a: "LivingTree stands apart in the market because it redefines what a residential community can offer. The masterplan is meticulously designed to encourage exploration, interaction, and privacy, creating a harmonious flow throughout the project. Unlike conventional layouts, LivingTree offers a dynamic environment where residents can enjoy multiple zones for relaxation, recreation, and socializing. One of the key differentiators is our 'double of everything' approach. With two expansive clubhouses spanning 1 lakh sq. ft., we ensure that all residents have easy access to a wide range of amenities. Additionally, most of our outdoor amenities are repeated across the project, allowing residents to enjoy their favorite activities without facing availability issues. To elevate the living experience further, many of our units come with a complimentary Juliet balcony, providing a charming outdoor space that enhances both aesthetics and functionality. We have also ensured that the project adheres to Vastu principles, promoting positive energy flow and harmony within each home. LivingTree offers not just a home, but a thoughtful, well-designed community where every detail is crafted to enrich your lifestyle.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2
            className="text-[#2d5016] text-4xl md:text-5xl lg:text-6xl font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Questions, Elegantly Answered
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="max-w-7xl mx-auto space-y-5"
          defaultValue="faq-0"
        >
          {faqs.map((item, idx) => (
            <div key={item.q}>
              <AccordionItem
                value={`faq-${idx}`}
                className="border border-gray-200 rounded-lg mb-2 overflow-hidden hover:border-[#5a7a3c] transition-colors duration-300"
              >
                <AccordionTrigger className="text-[#144230] text-left text-base md:text-lg font-semibold px-4 md:px-6 py-4 hover:text-[#5a7a3c] transition-colors duration-300">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base md:text-lg px-4 md:px-6 pb-4 md:pb-6 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
