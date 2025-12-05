"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SafeTextRenderer: React.FC<{ text: string }> = ({ text }) => {
  return (
    // Changed to font-mono (Courier) for a "raw/code" look
    <p className="text-[#A67950] text-base font-mono font-normal max-w-lg tracking-tighter">
      {text.split(/<br\s*\/?>/i).map((line, idx) => (
        <React.Fragment key={idx}>
          {line.trim()}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

const slides = [
  {
    heading: "Multi Specialty Focus",
    text: "Gain exposure across cardiac, thoracic, <br/> urology gynecology, and general surgery, all on the SSI Mantra platform.",
    image: "/Images/homepage/section5/slider1.webp",
  },
  {
    heading: "Hands-On Experience",
    text: "Train directly on simulators and live systems, <br/> building confidence through immersive <br/> practice.",
    image: "/Images/homepage/section5/slider3.webp",
  },
  {
    heading: "Expert Mentorship",
    text: "Learn from pioneering robotic surgeons and <br/> clinical leaders who guide every step <br/> of your journey.",
    image: "/Images/homepage/section5/slider2.webp",
  },
  {
    heading: "Global Certification Pathways",
    text: "Gain exposure across cardiac, thoracic, <br/> urology, gynecology, and general surgery, <br/> all on the SSI Mantra platform.",
    image: "/Images/homepage/section5/slider4.webp",
  },
];

const animationClass = "transition-all duration-1000 ease-out";

const Slider: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = slides.length;
  const autoPlayInterval = 3000;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => setCurrentIndex(index % totalSlides);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [isHovered, handleNext]);

  const getTransformValue = () => {
    return `translateX(-${currentIndex * 100}%)`;
  };

  return (
    <div
      ref={ref}
      className="w-full min-w-[1440px] bg-[#FBFAF2] pt-28 pb-40 px-20 overflow-x-auto"
    >
      <div
        className={`max-w-[1280px] mx-auto ${animationClass} ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          className="text-4xl text-left leading-snug mb-6"
          style={{
            // Changed to basic Times New Roman for a "default HTML" look
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: 700,
            fontStyle: "normal",
            color: "#A67950",
            whiteSpace: "pre-line",
          }}
        >
          Our Comprehensive Training Program
        </h2>
      </div>

      <div
        className={`max-w-[1280px] mx-auto relative flex flex-row items-center gap-16 ${animationClass} ${
          inView ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-1/3 order-1 flex justify-start pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-left"
            >
              {/* Changed to Arial/Helvetica (basic sans) */}
              <h3 className="text-[#5B102B] text-2xl font-sans font-bold uppercase tracking-widest">
                {slides[currentIndex].heading}
              </h3>
              <SafeTextRenderer text={slides[currentIndex].text} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-2/3 order-2 overflow-hidden relative transition-transform duration-500">
          <div
            className="flex transition-transform duration-700 ease-in-out relative"
            style={{ transform: getTransformValue() }}
          >
            {slides.map((slide, idx) => {
              const offset = idx - currentIndex;
              const isCurrent = offset === 0;

              const zIndexClass = isCurrent ? "z-20" : `z-${10 - Math.abs(offset)}`;
              const scaleClass = isCurrent ? "scale-100" : "scale-[0.9]";
              const translateClass = isCurrent
                ? "translate-x-0"
                : offset > 0
                ? "translate-x-[30px]"
                : "-translate-x-[30px]";

              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-full px-6 flex justify-center relative transition-all duration-500 ease-in-out ${zIndexClass} ${scaleClass} ${translateClass}`}
                >
                  <div className="relative w-full max-w-3xl h-[500px] rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={slide.image}
                      alt={`Slide ${idx + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-opacity-90 transition z-30 opacity-70 hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-[#A67950]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-opacity-90 transition z-30 opacity-70 hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-[#A67950]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === idx ? "bg-[#5B102B] scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;