"use client";

import React from "react";

export default function Footer() {
  const navigateTo = (path: string) => {
    console.log(`Navigating to ${path}`);
  };

  const handleAboutClick = () => navigateTo("/");
  const handleProgramsClick = () => navigateTo("/");
  const handleRegisterClick = () => navigateTo("/");
  const handleLoginClick = () => navigateTo("/");

  const handleCookiesClick = () => navigateTo("/");
  const handlePrivacyClick = () => navigateTo("/");
  const handleContactus = () => navigateTo("/");
  const handleTermsofuse = () => navigateTo("/");

  return (
    <footer className="w-full min-w-[1280px] bg-[#A67951] relative font-serif overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>

      <div className="w-full py-20 px-32 relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start max-w-md">
            <div className="flex items-center mb-6 cursor-pointer">
              <img
                src="/Logos/Header/ssicrshead2.png"
                alt="SSICRS Logo"
                className="object-contain h-24 w-auto"
              />
            </div>

            <p className="mt-2 text-white text-base">
              Democratizing excellence in robotic surgery through world-class
              training and mentorship. SSICRS empowers surgeons and healthcare
              teams to deliver advanced care everywhere.
            </p>
          </div>

          <div className="flex flex-col justify-start pt-8">
            <div className="flex gap-16 text-white text-base">
              {["ABOUT", "PROGRAMS", "OUR FACULTY", "REGISTER NOW"].map((item, index) => (
                <span
                  key={index}
                  onClick={() => navigateTo(`/${item.toLowerCase().replace(" ", "")}`)}
                  className="cursor-pointer py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 w-full my-12"></div>

        <div className="w-full text-white flex flex-row justify-between items-center text-sm">
          <div>
            © 2025 SS International Center for Robotics Surgery | All Rights Reserved.
          </div>

          <div className="flex items-center gap-6 text-sm">
            {[
              { label: "Cookies", handler: handleCookiesClick },
              { label: "Privacy Policy", handler: handlePrivacyClick },
              { label: "Contact us", handler: handleContactus },
              { label: "Terms of use", handler: handleTermsofuse },
            ].map((link, i, arr) => (
              <React.Fragment key={link.label}>
                <span
                  onClick={link.handler}
                  className="cursor-pointer"
                >
                  {link.label}
                </span>
                {i < arr.length - 1 && <span className="opacity-40">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}