"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const isRegisterPage = pathname === "/Register";
  const loginPath = "/Login";

  useEffect(() => {
    if (isRegisterPage) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isRegisterPage]);

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  const handleNavClick = (path: string) => {
    navigateTo(path);
  };

  const checkIsActive = (path: string) => {
    if (path === "/Home" && pathname === "/") return true;
    return pathname === path;
  };

  const headerBgColor = isRegisterPage
    ? "bg-white"
    : scrolled
    ? "bg-[#FBFAF2]"
    : "bg-gradient-to-b from-black/50 to-transparent";

  const headerShadow = isRegisterPage
    ? "shadow-md"
    : scrolled
    ? "shadow-md"
    : "shadow-none";

  const headerTextColor = isRegisterPage
    ? "text-gray-800"
    : scrolled
    ? "text-gray-800"
    : "text-white";

  const logoSrc =
    isRegisterPage || scrolled
      ? "/Logos/Header/ssicrshead1.png"
      : "/Logos/Header/ssicrshead2.png";

  const navItems = [
    { label: "Home", path: "/Home" },
    { label: "About Us", path: "/AboutUs" },
    { label: "Programs", path: "/Programs" },
  ];

  return (
    <header
      className={`w-[1920px] py-4 flex items-center justify-between fixed top-0 left-0 z-50
        ${headerBgColor} ${headerShadow} ${className}
        px-[290px]
      `}
    >
      <button
        onClick={() => navigateTo("/Home")}
        className="flex-shrink-0 flex items-center h-12 focus:outline-none"
        aria-label="Go to Home"
      >
        <img
          src={logoSrc}
          alt="SSI CRS Logo"
          width={220}
          height={80}
          className="w-auto h-16 object-contain"
        />
      </button>

      <nav
        className="flex items-center space-x-10 ml-8"
      >
        {navItems.map((item) => {
          const isActive = checkIsActive(item.path);
          return (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.path)}
              className={`
                ${isActive
                  ? "text-[#C59D73]"
                  : `${headerTextColor}`
                }
              `}
            >
              {item.label}
            </button>
          );
        })}

        <button
          onClick={() => navigateTo(loginPath)}
          className={`px-6 py-2 rounded-[5px] border
            ${isRegisterPage || scrolled
              ? "bg-transparent text-[#A67950] border-[#A67950]"
              : "bg-transparent text-[#A67950] border-[#A67950]"
            }
          `}
        >
          Log In
        </button>

        <div className="relative flex items-center">
          <div
            className="absolute top-[-20] left-0 w-full"
            style={{
              height: "140%",
              backgroundColor: "#A67950",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              zIndex: 0,
            }}
          ></div>
          <button
            onClick={() => navigateTo("/Register")}
            className={`relative z-10 px-3 py-2 rounded-full cursor-pointer text-white`}
            style={{ backgroundColor: "transparent" }}
          >
            Register Now
          </button>
        </div>
      </nav>
    </header>
  );
}