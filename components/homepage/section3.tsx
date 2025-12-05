"use client";

import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function ThirdSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const animationClass = "transition-all duration-1000 ease-out";

  return (
    <section 
      ref={ref} 
      className="relative w-full min-w-[1440px] min-h-screen overflow-hidden"
    >
      <Image
        src="/Images/homepage/section3/section3image.webp"
        alt="Section 3 Background"
        fill
        priority
        className="object-cover object-center"
      />

      <div
        className={`absolute inset-0 z-10 flex items-center justify-end pr-20 
        ${animationClass} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="w-[672px]">
          <h2
            className="text-[#F2F0E4] text-4xl leading-snug mb-6"
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
            }}
          >
            Empowering the next generation of <br />surgeons to transform healthcare
            with innovation and compassion
          </h2>

          <p
            className="text-[#F2F0E4] text-lg leading-relaxed"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
            }}
          >
            Dr. Sudhir Srivastava leads a global mission to democratize robotic
            surgery. His vision is shaping the future of healthcare—making
            advanced surgical techniques accessible worldwide and equipping
            surgeons to deliver precision and excellence in every procedure.
          </p>
        </div>
      </div>
    </section>
  );
}