"use client";

import React from "react";
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const navigateTo = (path: string) => {
    console.log(`Navigating to ${path}`);
    // In a real Next.js app: router.push(path);
  };

  const handleAboutClick = () => navigateTo("/AboutUs");
  const handleProgramsClick = () => navigateTo("/Programs");
  const handleRegisterClick = () => navigateTo("/Register");
  const handleLoginClick = () => navigateTo("/login");

  // Legal Handlers
  const handleCookiesClick = () => navigateTo("/cookies");
  const handlePrivacyClick = () => navigateTo("/privacypolicy");
  const handleContactus = () => navigateTo("/contactus");
  const handleTermsofuse = () => navigateTo("/terms");

  const navLinks = [
    { name: "About", handler: handleAboutClick },
    { name: "Programs", handler: handleProgramsClick },
    { name: "Register Now", handler: handleRegisterClick },
    { name: "Log In", handler: handleLoginClick },
  ];

  return (
    <footer className="w-full bg-[#A67951] relative font-sans overflow-hidden">
      {/* Decorative Background Element - Adjusted to be less intrusive on mobile */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>

      {/* ---------------- Desktop View (md and up) ---------------- */}
      <div className="hidden md:block w-full py-20 px-4 xl:px-32 2xl:px-64 relative z-10">
        <div className="flex justify-between items-start">
          {/* Left Section */}
          <div className="flex flex-col items-start max-w-md">
            <div className="flex items-center mb-6 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src="/Logos/Header/ssicrshead2.png"
                alt="SSICRS Logo"
                className="object-contain h-24 w-auto"
              />
            </div>

            <p className="mt-2 text-white/90 text-base leading-relaxed tracking-wide">
              Democratizing excellence in robotic surgery through world-class
              training and mentorship. SSICRS empowers surgeons and healthcare
              teams to deliver advanced care everywhere.
            </p>
          </div>

          {/* Right Section - Navigation */}
          <div className="flex flex-col justify-start pt-8">
            <div className="flex gap-8 lg:gap-12 xl:gap-16 text-white font-light text-sm lg:text-base tracking-widest">
              {["ABOUT", "PROGRAMS", "OUR FACULTY", "REGISTER NOW"].map((item, index) => (
                <span
                  key={index}
                  onClick={() => navigateTo(`/${item.toLowerCase().replace(" ", "")}`)}
                  className="cursor-pointer relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* White line */}
        <div className="border-t border-white/30 w-full my-12"></div>

        {/* Bottom footer */}
        <div className="w-full text-white/80 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="mb-4 sm:mb-0 hover:text-white transition-colors duration-300">
            © 2025 SS International Center for Robotics Surgery | All Rights Reserved.
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm font-light tracking-wide">
            {[
              { label: "Cookies", handler: handleCookiesClick },
              { label: "Privacy Policy", handler: handlePrivacyClick },
              { label: "Contact us", handler: handleContactus },
              { label: "Terms of use", handler: handleTermsofuse },
            ].map((link, i, arr) => (
              <React.Fragment key={link.label}>
                <span
                  onClick={link.handler}
                  className="cursor-pointer hover:text-white hover:underline transition-all duration-200"
                >
                  {link.label}
                </span>
                {i < arr.length - 1 && <span className="opacity-40">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- Mobile View (Below md) ---------------- */}
      <div className="block md:hidden w-full py-12 px-6 relative z-10">
        <div className="max-w-md mx-auto flex flex-col items-start">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <img
              src="/Logos/Header/ssicrshead2.png"
              alt="SSICRS Logo"
              className="object-contain h-20 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="w-full mb-10 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onClick={link.handler}
                className="group w-full cursor-pointer py-4 border-b border-white/20 flex justify-between items-center 
                           text-white text-lg font-medium tracking-wide transition-all duration-300 hover:border-white hover:pl-2"
              >
                {link.name}
                <ChevronRight className="h-5 w-5 text-white/70 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            ))}
          </nav>

          {/* Motto */}
          <p className="text-white/80 text-sm leading-relaxed mb-8">
            Democratizing excellence in robotic surgery through world-class
            training and mentorship. SSICRS empowers surgeons and healthcare
            teams to deliver advanced care everywhere.
          </p>

          {/* Social / Extra Links */}
          <div className="flex gap-4 mb-8 text-white/80">
             <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"><Facebook size={18} /></div>
             <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"><Twitter size={18} /></div>
             <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"><Linkedin size={18} /></div>
             <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"><Instagram size={18} /></div>
          </div>

          {/* Legal Links */}
          <div className="w-full border-t border-white/20 pt-8 flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/70 text-xs font-light tracking-wider">
              <span onClick={handleCookiesClick} className="cursor-pointer hover:text-white">Cookies</span>
              <span onClick={handlePrivacyClick} className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span onClick={handleContactus} className="cursor-pointer hover:text-white">Contact us</span>
              <span onClick={handleTermsofuse} className="cursor-pointer hover:text-white">Terms of use</span>
            </div>

            {/* Copyright */}
            <p className="text-white/50 text-[10px] leading-tight">
              © 2025 SS International Center for Robotics Surgery <br /> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}