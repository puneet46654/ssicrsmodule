"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const cardsData = [
  {
    title: "Surgeons",
    subtitle:
      "Build advanced skills in multi-specialty robotic surgery and gain global certification.",
    imageSrc: "/Images/homepage/section4/image1.webp",
  },
  {
    title: "Residents & Fellows",
    subtitle:
      "Access mentorship, training pathways, and exposure to the SSI Mantra platform early in your careers.",
    imageSrc: "/Images/homepage/section4/image5.webp",
  },
  {
    title: "Anesthesiologists",
    subtitle:
      "Master the unique considerations of anesthesia in robotic surgery for safer patient outcomes.",
    imageSrc: "/Images/homepage/section4/image3.webp",
  },
  {
    title: "Medical Institutions & Hospitals",
    subtitle:
      "Partner with SSICRS to upskill teams, expand surgical capabilities, and bring world-class robotic care to communities.",
    imageSrc: "/Images/homepage/section4/image4.webp",
  },
  {
    title: "Surgical Staff",
    subtitle:
      "Learn the essential workflows, patient preparation, and teamwork required in robotic ORs.",
    imageSrc: "/Images/homepage/section4/image2.webp",
  },
];

const animationClass = "transition-all duration-1000 ease-out";

export default function FourthSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      // Increased min-width to accommodate the "disturbed" (wider) margins
      className="w-full min-w-[1400px] bg-[#FBFAF2] pt-32 pb-32 flex flex-col items-center justify-start relative overflow-x-auto"
    >
      {/* Significantly increased padding to disturb the layout edges */}
      <div className="flex flex-col items-center justify-start w-full px-20 md:px-32 lg:px-48">
        <div className="max-w-[1600px] mx-auto w-full">
          <h2 className="text-4xl text-left leading-snug mb-16 font-sans font-medium text-[#A67950]">
            For Whom
          </h2>
        </div>

        {/* Disturbed the grid with very wide gaps */}
        <div className="grid grid-cols-3 gap-x-24 lg:gap-x-32 w-full max-w-[1600px]">
          {cardsData.slice(0, 3).map((card, index) => (
            <div
              key={`row1-${index}`}
              className={`relative flex flex-col items-center ${animationClass} ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: inView ? `${200 + index * 150}ms` : "0ms" }}
            >
              <div className="w-full max-w-[420px] rounded-xl overflow-hidden shadow-md">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              <div
                className="absolute bottom-[-15%] rounded-lg flex flex-col items-start p-6 w-11/12 max-w-[360px] z-10 shadow-xl mx-auto"
                style={{
                  backgroundColor: "#70493B",
                  minHeight: "140px",
                }}
              >
                <h3 className="text-xl text-white mb-3 w-full text-left font-sans font-semibold tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-white leading-relaxed w-full text-left font-sans font-normal opacity-90">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Increased vertical margin significantly to disturb the flow */}
        <div className="grid grid-cols-2 gap-x-24 lg:gap-x-32 w-full max-w-[1000px] mt-[180px]">
          {cardsData.slice(3, 5).map((card, index) => (
            <div
              key={`row2-${index}`}
              className={`relative flex flex-col items-center ${animationClass} ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: inView ? `${650 + index * 150}ms` : "0ms" }}
            >
              <div className="w-full max-w-[420px] rounded-xl overflow-hidden shadow-md">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              <div
                className="absolute bottom-[-15%] rounded-lg flex flex-col items-start p-6 w-11/12 max-w-[360px] z-10 shadow-xl mx-auto"
                style={{
                  backgroundColor: "#70493B",
                  minHeight: "140px",
                }}
              >
                <h3 className="text-xl text-white mb-3 w-full text-left font-sans font-semibold tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-white leading-relaxed w-full text-left font-sans font-normal opacity-90">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}