"use client";

import React from "react";

const Colors = {
  background: "#FBFAF2",
  mainHeading: "#A67950",
  bodyText: "#401323",
  facilityHeading: "#5B102B",
  paragraphColor: "#401323",
};

interface FacilityBlockProps {
  title: string;
  description: string;
}

const FacilityBlock: React.FC<FacilityBlockProps> = ({ title, description }) => (
  <div className="mb-6 md:mb-8 last:mb-0">
    <h3
      style={{
        color: Colors.facilityHeading,
        fontFamily: '"DM Serif Text", serif',
      }}
      className="text-xl md:text-2xl font-normal leading-relaxed capitalize"
    >
      {title}:
    </h3>

    <p
      style={{
        color: Colors.mainHeading,
        fontFamily: "Lato, sans-serif",
      }}
      className="mt-1 text-base md:text-[1.05rem] leading-7"
    >
      {description}
    </p>
  </div>
);

const Section5: React.FC = () => {
  return (
    <section
      className="w-full py-8 md:py-12 lg:py-16"
      style={{ backgroundColor: Colors.background }}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px]">
        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-8 md:mb-10 lg:mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
              color: "#A67950",
            }}
          >
            Training Facilities
          </h2>
          <p
            style={{
              color: Colors.paragraphColor,
              fontFamily: "Lato, sans-serif",
            }}
            className="text-base md:text-lg font-normal leading-7 max-w-3xl lg:max-w-2xl"
          >
            Our institute mirrors the environment of a modern robotic operating room. Trainees gain confidence
            by practicing in facilities that replicate real-world surgical conditions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-center lg:items-start">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
            <FacilityBlock
              title="Simulated ORs"
              description="Fully equipped with SSI Mantra systems for mock procedures."
            />
            <FacilityBlock
              title="Dry Labs"
              description="Practice instrument handling, suturing, and dissection on synthetic models."
            />
            <FacilityBlock
              title="Wet Labs"
              description="Advanced practice on tissue models for realistic feedback and precision training."
            />
            <FacilityBlock
              title="Classrooms"
              description="Modern lecture halls for interactive sessions, case discussions, and expert talks."
            />
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div
              style={{
                background: `url("/Images/programs/section5/image1.webp") lightgray center / cover no-repeat`,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 5px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;