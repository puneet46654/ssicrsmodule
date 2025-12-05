"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const logos = [
  "/Logos/Programs/section2/bottomlogo1.png",
  "/Logos/Programs/section2/bottomlogo2.png",
  "/Logos/Programs/section2/bottomlogo3.png",
  "/Logos/Programs/section2/bottomlogo4.png",
];

const containers = [
  {
    logoIndex: 0,
    title: "Surgeon Training",
    paragraph:
      "Master advanced robotic techniques across cardiac, urology, gynecology, thoracic, GI, colorectal, oncology, and head & neck specialties.",
  },
  {
    logoIndex: 1,
    title: "Residents & Fellows",
    paragraph:
      "Early exposure to robotic platforms with structured mentorship and research opportunities — shaping tomorrow's surgical leaders.",
  },
  {
    logoIndex: 2,
    title: "Surgical Staff Training",
    paragraph:
      "Learn essential OR workflows, system setup, and patient preparation.",
  },
  {
    logoIndex: 3,
    title: "Anesthesia Training",
    paragraph:
      "Specialized modules cover patient positioning, insufflation, and safety protocols unique to robotic-assisted surgery.",
  },
];

const fadeUpClasses = (isInView: boolean) =>
  `transition-all duration-700 ease-out ${
    isInView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`;

interface ProgramCardProps {
  item: typeof containers[0];
  logoSrc: string;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ item, logoSrc, index }) => {
  const { ref: cardRef, inView: cardInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const delay = index * 150;

  return (
    <div
      key={index}
      ref={cardRef}
      className={`flex-shrink-0 rounded-[8px] border-2 border-transparent
                  bg-white shadow-md hover:shadow-lg
                  relative cursor-pointer transform transition duration-400 ease-out
                  hover:scale-[1.03] sm:hover:scale-105 p-6
                  min-h-[241px] w-full max-w-[400px]
                  transition-all duration-700 ease-out
                  ${cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  `}
      style={{ transitionDelay: cardInView ? `${delay}ms` : '0ms' }}
    >
      <div className="w-[58px] h-[58px] relative mb-2">
        <Image
          src={logoSrc}
          alt={`Logo for ${item.title}`}
          fill
          sizes="58px"
          className="object-contain"
        />
      </div>

      <p className="mt-2 text-[20px] font-serif text-[#5B102B] capitalize font-normal leading-[150%]">
        {item.title}
      </p>

      <p className="mt-2 text-[#A67950] font-sans text-[16px] font-normal leading-[24px]">
        {item.paragraph}
      </p>
    </div>
  );
};

export default function Section2() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      className="bg-[#FBFAF2] relative pt-[130px] pb-12 overflow-x-auto lg:overflow-x-visible"
    >
      <div className="w-[1000px] lg:w-full lg:max-w-7xl mx-auto flex flex-col items-start px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">

        <div ref={headerRef} className={`${fadeUpClasses(headerInView)} w-full`}>
            <div className="group relative cursor-pointer inline-block text-left">
                <h2
                    className="text-4xl text-left leading-snug mb-6 font-serif text-[#A67950] font-normal"
                >
                    Training Pathways
                </h2>
            </div>

            <p
                className="text-lg font-normal leading-7 mb-14 mt-0 text-[#401323] font-sans text-left"
            >
                A Balanced Approach: Theory, Practice, and Innovation.
            </p>
        </div>

        <div className="mt-[20px] flex flex-row gap-[40px] items-start">

          <div
            ref={imageRef}
            className={`relative w-[465px] h-auto rounded-[8px] overflow-hidden flex-shrink-0
                        ${fadeUpClasses(imageInView)}`}
          >
            <Image
              src="/Images/programs/section2/image1.webp"
              alt="Surgeon operating with robotic-assisted surgery tools."
              width={465}
              height={632}
              priority
              className="object-cover"
            />
          </div>

          <div
            className="grid flex-grow grid-cols-2 gap-[40px] mt-8"
          >
            {containers.map((item, index) => (
                <ProgramCard
                    key={index}
                    item={item}
                    logoSrc={logos[item.logoIndex]}
                    index={index}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}