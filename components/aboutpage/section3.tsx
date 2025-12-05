"use client";

import React from "react";
import Image from "next/image";

export default function Section8() {
  const mobileBoxesData = [
    "Deliver specialized training across surgical specialties for true proficiency.",
    "Blend theory with hands-on practice using the SSI Mantra system.",
    "Make robotic surgery education accessible worldwide, with focus on underserved regions.",
    "Create continuous learning pathways to keep professionals at the forefront of innovation.",
  ];

  return (
    <section
      className="w-full min-h-[70vh] bg-[#FBFAF2] flex flex-col justify-center"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-4 lg:py-12">
        <div
          className="flex flex-col md:flex-row items-start w-full"
        >
          <div
            className="relative w-full md:w-1/2 lg:w-[650px] mb-8 md:mb-0"
          >
            <Image
              src="/Images/aboutpage/section3/image1.png"
              alt="Our Vision"
              width={650}
              height={550}
              className="w-full h-auto"
            />

            <div className="absolute top-10 left-6 md:top-20 md:left-8 text-white max-w-[80%]">
              <h2 className="font-serif text-3xl lg:text-[40px] font-normal leading-[1.5]">
                Our Vision
              </h2>
              <p className="mt-4 text-sm sm:text-base lg:text-[16px] font-sans font-normal leading-6 whitespace-pre-line">
                To become the global leader in robotic surgery
                <br />
                education by providing comprehensive, cutting-edge
                <br />
                training that equips healthcare professionals with the
                <br />
                skills needed to excel in robotic-assisted surgery using
                <br />
                the SSI Mantra.
              </p>
            </div>

            <Image
              src="/Images/aboutpage/section3/image2.png"
              alt="Image 2"
              width={85}
              height={60}
              className="absolute top-0 left-[calc(100%-85px)]"
            />
          </div>

          <div className="flex-1 md:ml-8 lg:ml-0 space-y-6 lg:space-y-10 w-full mt-4">
            {mobileBoxesData.map((text, idx) => (
              <div
                key={idx}
                className="w-full h-auto min-h-[95px] bg-white border border-black p-4 cursor-default flex items-center"
              >
                <p className="text-[#724B3C] font-sans font-medium text-base sm:text-lg leading-5 sm:leading-6 w-full">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}