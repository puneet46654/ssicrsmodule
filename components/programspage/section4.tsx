"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const fadeUpClasses = (isInView: boolean, delay = 0) =>
  `transition-all duration-700 ease-out ${
    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  } ${delay > 0 ? `delay-${delay}` : ""}`;

const cardData = [
  {
    src: "/Images/programs/section4/image1.webp",
    title: "Classroom Learning",
    text: "Interactive sessions led by expert faculty build strong foundations in robotic surgery.",
  },
  {
    src: "/Images/programs/section4/image2.webp",
    title: "Lab-Based Practice",
    text: "From dry labs to wet labs, participants develop hands-on skills in realistic surgical conditions.",
  },
  {
    src: "/Images/programs/section4/image3.webp",
    title: "Online Modules",
    text: "Flexible, self-paced learning with pre-training modules, recorded lectures, quizzes, and ongoing support.",
  },
  {
    src: "/Images/programs/section4/image4.webp",
    title: "Certification & Mentorship",
    text: "Graduates earn globally recognized certification with CME credits, plus continued access to mentors for long-term growth.",
  },
];

interface TrainingCardProps {
  item: (typeof cardData)[0];
  index: number;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ item, index }) => {
  const { ref: cardRef, inView: cardInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const delay = index * 150;

  return (
    <div
      key={index}
      ref={cardRef}
      className={`relative overflow-hidden cursor-pointer shadow-lg w-full md:rounded-xl
                  ${fadeUpClasses(cardInView)}`}
      style={{ transitionDelay: cardInView ? `${delay}ms` : "0ms" }}
    >
      <div
        className="w-full relative overflow-hidden"
        style={{
          paddingBottom: "72.71%",
        }}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 
                   w-[95%] sm:w-[90%] max-w-[534px]
                   rounded-lg p-4 sm:p-5 md:p-6 
                   flex flex-col items-start justify-center"
        style={{
          background: "rgba(56, 18, 5, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h3
          className="text-lg sm:text-xl md:text-2xl mb-2 font-bold"
          style={{
            color: "#FFF",
            lineHeight: "1.2",
          }}
        >
          {item.title}
        </h3>
        <p
          className="text-xs sm:text-sm md:text-base line-clamp-3 md:line-clamp-none"
          style={{
            color: "#E5E5E5",
            lineHeight: "1.5",
          }}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default function Section4() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      className="w-full bg-[#FBFAF2] flex flex-col items-center px-0 md:px-8 lg:px-12 xl:px-20"
      style={{
        minHeight: "100vh",
        paddingTop: "60px",
        paddingBottom: "120px",
      }}
    >
      <div className="w-full max-w-7xl px-0">
        <div 
          ref={headerRef} 
          className={`flex flex-col items-center md:items-start mb-10 px-4 md:px-0 ${fadeUpClasses(headerInView)}`}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left mb-4 font-bold"
            style={{
              color: "#A67950",
            }}
          >
            How We Train
          </h2>

          <p
            className="text-base sm:text-lg text-center md:text-left max-w-2xl"
            style={{
              color: "#401323",
              lineHeight: "1.6",
            }}
          >
            A Balanced Approach: Theory, Practice, and Innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-10 w-full">
          {cardData.map((item, index) => (
            <TrainingCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}