"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";

export default function Section3() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/Register");
  };

  // Setup observer for the Header/Subtext block
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Setup observer for the main Content Card
  const { ref: cardRef, inView: cardInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Animation classes for fade-up effect
  const fadeUpClasses = (isInView: boolean) => 
    `transition-all duration-700 ease-out ${
      isInView 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-10"
    }`;

  return (
    <section 
      className="bg-[#FBFAF2] w-full min-h-[90vh] flex flex-col items-center pt-10 md:pt-0 overflow-x-auto lg:overflow-x-visible"
    >
      {/* Container: Fixed large width for mobile to create scroll effect, fluid for desktop */}
      <div className="w-[1000px] lg:w-full lg:max-w-7xl mx-auto p-4 md:p-8 lg:px-16 xl:px-32 2xl:px-48">
        
        {/* Main Heading and Subtext Block */}
        <div ref={headerRef} className={fadeUpClasses(headerInView)}>
            <div className="group relative cursor-pointer inline-block pt-10 md:pt-24 lg:pt-32">
                <h2
                    className="text-4xl text-left leading-snug mb-6 font-serif text-[#A67950] font-normal"
                >
                    Upcoming Training Batches
                </h2>
            </div>

            <p
                className="mt-4 md:mt-0 text-[#401323] font-sans text-base font-normal leading-relaxed md:leading-[44px]"
            >
                Limited seats per cohort. Reserve early to maximize hands-on time.
            </p>
        </div>

        {/* Main Content Card */}
        <div
          ref={cardRef}
          className={`
            flex flex-row justify-between items-start 
            p-12 mt-10 
            rounded-lg border border-[#A67950] bg-white w-full 
            min-h-[auto] shadow-lg
            transition-all duration-700 ease-out delay-150
            ${cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {/* Left Side: Text and Details */}
          <div className="flex flex-col gap-4 w-1/2 pr-8">
            <h2
              className="text-[#401323] font-serif text-[36px] font-normal leading-[150%] text-left"
            >
              Cardiac Robotic Surgery Training
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "Starting October 2025",
                "Duration: 5 Days",
                "Location: SSICRS Training Facility",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <path
                      d="M8.25 4.125L15.125 11L8.25 17.875"
                      stroke="#401323"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span
                    className="text-[#401323] font-sans text-base font-normal leading-6"
                  >
                    {text}
                  </span>
                </div>
              ))}

              <div className="mt-4">
                <span
                  className="text-[#401323] font-sans text-base font-medium leading-6 block text-left"
                >
                  Procedures Covered
                </span>
                <div className="flex flex-wrap gap-2 mt-2 justify-start">
                  {["LIMA", "ASD", "MVR"].map((proc) => (
                    <button
                      key={proc}
                      className="px-4 py-2 text-sm text-[#401323] border border-[#A67950] rounded-lg font-sans hover:bg-gray-50 transition duration-300"
                    >
                      {proc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Register Now button */}
              <button
                onClick={handleRegisterClick} 
                className="flex items-center justify-center 
                          rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(166,121,80,0.5)] 
                          mt-8 
                          w-48 h-12 
                          bg-[#A67950] font-sans font-normal text-base text-white mx-0"
              >
                Register Now
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side: Image Container */}
          <div className="w-1/2 flex justify-end">
            <div className="relative w-[456px] h-[400px] rounded-lg overflow-hidden">
                <img 
                    src="/Images/programs/section3/image1.webp" 
                    alt="Model of a human heart representing cardiac surgery"
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}