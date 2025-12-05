"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

const IMAGE_PATHS = [
  "/Images/aboutpage/section4/image1.webp",
  "/Images/aboutpage/section4/image2.webp",
  "/Images/aboutpage/section4/image3.webp",
  "/Images/aboutpage/section4/image4.webp",
  "/Images/aboutpage/section4/image5.webp",
];

const MOBILE_IMAGE_PATHS = [
  "/Images/aboutpage/section4/mobile/image1.webp",
  "/Images/aboutpage/section4/mobile/image2.webp",
  "/Images/aboutpage/section4/mobile/image3.webp",
  "/Images/aboutpage/section4/mobile/image4.webp",
  "/Images/aboutpage/section4/mobile/image5.webp",
];

const SCROLL_DURATION_STEPS = IMAGE_PATHS.length;
const WRAPPER_HEIGHT_VH = SCROLL_DURATION_STEPS * 50;
const IMAGE_CONTAINER_HEIGHT_PX = 502;
const MOBILE_BREAKPOINT = 640;
const GUIDANCE_TIMEOUT_MS = 3000;

const ScrollGuide: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) setShouldRender(true);
    else {
      setShouldRender(false);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed top-1/2 right-[10px] z-[9999] flex flex-col items-center p-2 border-2 border-black bg-white"
    >
      <div className="text-xs font-bold text-black mb-1">
        SCROLL NOW
      </div>
      <div className="flex flex-col items-center">
        <ChevronUp className="w-6 h-6 text-black" />
        <div className="text-sm font-bold text-red-600 my-1">
          SCROLL
        </div>
        <ChevronDown className="w-6 h-6 text-black" />
      </div>
    </div>
  );
};

export default function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const sectionTop = rect.top;
    
    if (showGuide) setShowGuide(false);

    const wrapperHeight = wrapperRef.current.offsetHeight;
    const scrollDistance = -sectionTop;
    const totalScrollRange = wrapperHeight - vh;

    if (totalScrollRange <= 0) return;

    const progress = Math.min(1, Math.max(0, scrollDistance / totalScrollRange));
    const newIndex = Math.min(
      SCROLL_DURATION_STEPS - 1,
      Math.floor(progress * SCROLL_DURATION_STEPS)
    );

    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  }, [currentIndex, showGuide]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    if (!isMobile) {
      setShowGuide(true);
      const guideTimer = setTimeout(() => setShowGuide(false), GUIDANCE_TIMEOUT_MS);

      const readyTimer = setTimeout(() => {
        setIsReady(true);
        handleScroll();
      }, 100);

      if (isReady) window.addEventListener("scroll", handleScroll);

      return () => {
        clearTimeout(readyTimer);
        clearTimeout(guideTimer);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      setShowGuide(false);
    };
  }, [handleScroll, isReady, isMobile, handleResize]);

  const Heading = () => (
    <h1
      style={{
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        color: "blue",
        fontSize: "24px",
        width: "100%",
        marginBottom: "20px",
        textAlign: "center",
        textDecoration: "underline",
        backgroundColor: "yellow"
      }}
    >
      WHY CHOOSE SSICRS
    </h1>
  );

  if (isMobile) {
    return (
      <div className="w-full py-5 px-2 border-b-4 border-black bg-gray-300">
        <Heading />
        <div className="flex flex-col space-y-2">
          {MOBILE_IMAGE_PATHS.map((path, idx) => (
            <div
              key={idx}
              className="relative w-full border-4 border-red-500"
              style={{ paddingBottom: "100%" }}
            >
              <Image
                src={path}
                alt={`Mobile reason image ${idx + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="relative w-full bg-gray-200 border-t-8 border-blue-800"
      style={{
        height: `${WRAPPER_HEIGHT_VH}vh`,
      }}
    >
      {showGuide && <ScrollGuide isVisible={showGuide} />}
      
      <div className="sticky top-0 h-screen flex flex-col justify-start items-center pt-10 px-0">
        <Heading />

        <div
          className="relative w-[80%] border-[10px] border-dashed border-black bg-white"
          style={{ height: `${IMAGE_CONTAINER_HEIGHT_PX}px` }}
        >
          {isReady &&
            IMAGE_PATHS.map((path, idx) => (
              <div
                key={idx}
                style={{
                    display: currentIndex === idx ? 'block' : 'none',
                    width: '100%',
                    height: '100%'
                }}
              >
              <Image
                src={path}
                alt={`Scroll image ${idx + 1}`}
                fill
                className="object-fill"
                sizes="100vw"
                priority
              />
              </div>
            ))}
        </div>
        <div className="mt-4 bg-white p-2 border border-black text-black font-mono">
            Image Index: {currentIndex + 1}
        </div>
      </div>
    </div>
  );
}