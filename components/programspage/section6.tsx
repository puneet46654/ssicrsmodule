"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SeventhSection() {
  const router = useRouter();
  // We initialize as null to avoid hydration mismatches, or true if you want default visibility
  const [isVisible, setIsVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // 1. Check if we have already hidden it in the past
    const isAlreadyHidden = localStorage.getItem("promoSectionHidden");

    if (isAlreadyHidden) {
      setIsVisible(false);
      return;
    }

    // 2. If not hidden yet, wait 2 seconds, then hide it and save to localStorage
    const timer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("promoSectionHidden", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRegisterClick = () => {
    router.push("/Register");
  };

  // Prevent hydration mismatch by waiting for mount
  if (!hasMounted) return null;

  // If invisible, render nothing
  if (!isVisible) return null;

  return (
    <section className="w-full bg-[#FBFAF2] py-12 md:py-20 flex justify-center items-center animate-fade-in">
      <div className="relative w-full max-w-[1306px] mx-4 md:mx-auto aspect-[4/5] sm:aspect-square md:aspect-[16/9] lg:aspect-[1.8/1] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/Images/homepage/section8/image1.webp"
          alt="Journey Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40 md:bg-black/20" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] mb-4 md:mb-6 leading-tight"
            style={{ fontFamily: "DM Serif Text, serif" }}
          >
            Ready to Begin Your Journey?
          </h2>

          <p
            className="text-base sm:text-lg md:text-2xl font-medium text-[#FBFAF2] mb-8 md:mb-12 max-w-lg md:max-w-4xl leading-relaxed"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Take the next step toward transforming your surgical practice. Explore
            our programs and secure your seat in an upcoming training batch.
          </p>

          <button
            onClick={handleRegisterClick}
            className="flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,234,210,0.4)] active:scale-95 px-8 py-3 md:px-10 md:py-4"
            style={{
              background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
              color: "#000",
            }}
          >
            <span className="md:text-lg">Register Now</span>
            <FiArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}