'use client';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

export default function Header() {
  // const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header  className="fixed  w-full h-16 max-w-lg -translate-x-1/2   rounded-full bottom-8 left-1/2  z-50">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2  sm:w-auto w-full">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-400  via-pink-500 to-purple-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-4 ">
           
            {/* Navigation Links */}
            <div className={" "}>
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hidden lg:gap-2 md:py-4 py-3  ">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    href={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3  py-1.5  rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 
                      ${
                        activeLink === id
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;  /* Hide scrollbar for Internet Explorer and Edge */
          scrollbar-width: none;  /* Hide scrollbar for Firefox */
        }
      `}</style>
    </header>
  );
}
