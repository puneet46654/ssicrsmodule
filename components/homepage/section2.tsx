"use client";

import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Section2Props {
  children?: React.ReactNode;
}

export default function Section2({ children }: Section2Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const logos = [
    {
      src: "/Images/homepage/section2/bottomlogo1.webp",
      text: (
        <>
          Learn from visionary surgeons and clinical <br /> leaders.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo2.webp",
      text: (
        <>
          Access world-class training,
          resources, <br /> and research.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo3.webp",
      text: (
        <>
          Join a global initiative shaping the future of<br /> robotic surgery.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo4.webp",
      text: (
        <>
          Lead the effort to make surgical excellence accessible to all.
        </>
      ),
    },
  ];

  const animationClass = "transition-all duration-1000 ease-out";

  return (
    <section
      ref={ref}
      className="w-full min-w-[1440px] relative pt-28 pb-4 overflow-x-auto"
      style={{ backgroundColor: "#FBFAF2" }}
    >
      <div className="w-full h-full">{children}</div>

      <div className="w-[1280px] mx-auto px-8">
        <div
          className={`flex flex-row justify-between gap-24 mb-24 ${animationClass} ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-2/5 mb-0">
            <div
              className="text-3xl leading-snug mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                fontStyle: "normal",
                color: "#A67950",
                whiteSpace: "pre-line",
              }}
            >
              <div className="ml-[-20px]">
                ‘Democratizing <br /> Excellence in Robotic <br /> Surgery’
              </div>
            </div>

            <div
              className="text-base leading-relaxed text-left"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                color: "#401323",
                whiteSpace: "pre-line",
              }}
            >
              <div className="transform translate-x-[310px] translate-y-[-127px] text-left">
                SSICRS is a pioneering center committed to<br /> transforming surgical education and innovation. Our<br /> mission is to empower healthcare professionals across <br />the globe with access to advanced knowledge, expert<br /> mentorship, and multi-specialty training on the SSI<br /> Mantra platform.<br/><br/>

                Through our programs, surgeons and surgical teams<br /> develop the expertise to drive a worldwide movement <br />in decentralizing robotic surgery—bringing advanced <br />care to every corner of the world, including<br /> underserved regions.
              </div>
            </div>
          </div>

          <div className="w-3/5 flex justify-end">
            <div
              className="relative rounded-[8px] overflow-hidden w-[460px] h-[280px] transform translate-x-12"
            >
              <Image
                src="/Images/homepage/section2/image1.webp"
                alt="Section 2 Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="w-full pt-10 transform translate-y-[-160px] px-8"
        >
          <h3
            className={`font-serif text-2xl font-semibold leading-tight mb-8 text-center text-[#A67950] ${animationClass} ${
              inView ? "opacity-100 translate-y-0 delay-[200ms]" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-left block ml-[-20px]">
              At SSICRS, you will:
            </span>
          </h3>

          <div 
            className="grid grid-cols-4 gap-x-6 gap-y-12 justify-items-center"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center group cursor-pointer
                            p-4 w-[200px]
                            bg-white rounded-lg shadow-xl transition-all duration-1000 ease-out ${
                              inView
                                ? `opacity-100 translate-y-0`
                                : "opacity-0 translate-y-10"
                            }
                          `}
                style={{ transitionDelay: inView ? `${400 + index * 150}ms` : '0ms' }}
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  width={48}
                  height={50}
                  className="w-12 h-auto mt-4 mb-4 relative z-10"
                />

                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 pointer-events-none">
                    <span className="absolute top-0 left-0 w-8 h-[2px] opacity-0 transition-all duration-500 ease-in-out"></span>
                    <span className="absolute top-0 right-0 w-8 h-[2px] opacity-0 transition-all duration-500 ease-in-out"></span>
                    <span className="absolute bottom-0 left-0 w-8 h-[2px] opacity-0 transition-all duration-500 ease-in-out"></span>
                    <span className="absolute bottom-0 right-0 w-8 h-[2px] opacity-0 transition-all duration-500 ease-in-out"></span>
                  </div>
                </div>

                <p className="font-lato font-normal text-xs leading-snug text-[#401323] mt-4 text-left w-full">
                  {logo.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}