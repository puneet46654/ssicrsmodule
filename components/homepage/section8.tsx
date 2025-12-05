"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SeventhSection() {
  // Default to false initially to prevent hydration mismatch, 
  // or handle the check inside useEffect. 
  // Here we default to true, then check storage.
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const mobileImageSrc = "/Images/homepage/section8/image1.webp";

  useEffect(() => {
    // 1. Check if the section was previously dismissed/hidden
    const hasViewed = localStorage.getItem("intro_viewed");

    if (hasViewed) {
      setIsVisible(false);
      return;
    }

    // 2. If not viewed yet, set the timer
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      // 3. Save state to localStorage so it doesn't come back on refresh
      localStorage.setItem("intro_viewed", "true");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleRegisterClick = () => {
    router.push("/Register");
  };

  // If invisible, render nothing
  if (!isVisible) return null;

  return (
    <section
      ref={ref}
      className="w-full h-auto md:min-h-[90vh] bg-[#FBFAF2] flex justify-center items-center overflow-hidden py-12 md:py-0 transition-opacity duration-1000 ease-out"
    >
      {/* ---------------- Mobile & Tablet View ---------------- */}
      <div className="md:hidden w-[95%] max-w-xl mx-auto relative rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center my-4">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={mobileImageSrc}
            alt="Next Step Background"
            fill
            priority
            className="object-cover object-center scale-110"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Content Container */}
        <div
          className={`relative z-20 text-center flex flex-col items-center px-6 py-16 w-full transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-2xl sm:text-3xl font-normal text-[#EFE8D6] mb-4 leading-snug drop-shadow-md"
            style={{ fontFamily: "DM Serif Text, serif" }}
          >
            Join the Robotic Surgery Revolution
          </h2>

          <p
            className="text-sm sm:text-base font-medium text-[#FBFAF2] mb-8 leading-relaxed drop-shadow-sm max-w-sm mx-auto"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            SSICRS invites you to be part of the movement that is transforming the future of surgery. Whether you&apos;re a surgeon looking to master robotic-assisted techniques, a nurse preparing to assist in robotic procedures, or an anesthesiologist ensuring robotic surgery patient safety—SSICRS is your gateway to expertise.
          </p>

          <button
            onClick={handleRegisterClick}
            className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0_0_20px_rgba(255,234,210,0.3)] px-8 py-3 w-full max-w-[240px]"
            style={{
              background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
              fontFamily: "Lato, sans-serif",
              fontWeight: "600",
              fontSize: "16px",
              color: "#401323",
            }}
          >
            Register Now
            <FiArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>

      {/* ---------------- Desktop View ---------------- */}
      <div className="hidden md:flex relative flex-col justify-center items-center w-full max-w-[1306px] px-4">
        
        {/* The Image container */}
        <div className="relative w-full h-auto">
          <Image
            src="/Images/homepage/section8/image1.webp"
            alt="Seventh Section Image"
            width={1306}
            height={724}
            className="object-contain w-full h-auto rounded-lg"
            priority
          />
        </div>

        {/* Content Overlay */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-8 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-4xl lg:text-5xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] whitespace-nowrap mb-6"
            style={{ fontFamily: "DM Serif Text, serif" }}
          >
            Join the Robotic Surgery Revolution
          </h2>

          <p
            className="text-lg md:text-xl font-medium text-[#FBFAF2] max-w-2xl mb-12 leading-relaxed drop-shadow-md"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            SSICRS invites you to be part of the movement that is transforming the future of surgery. Whether you&apos;re a surgeon looking to master robotic-assisted techniques, a nurse preparing to assist in robotic procedures, or an anesthesiologist ensuring robotic surgery patient safety—SSICRS is your gateway to expertise in the most advanced form of surgery today.
          </p>

          <button
            onClick={handleRegisterClick}
            className="absolute flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,234,210,0.4)]"
            style={{
              top: "75%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "180px",
              height: "48px",
              background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
              fontFamily: "Lato, sans-serif",
              fontWeight: "600",
              fontSize: "16px",
              color: "#401323",
            }}
          >
            Register Now
            <FiArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}