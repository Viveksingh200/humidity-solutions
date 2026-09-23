"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Applications", href: "/applications" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isTransparent
          ? "bg-transparent py-5 md:py-6"
          : scrolled
          ? "bg-white/95 backdrop-blur-sm py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-white/95 backdrop-blur-sm py-5 md:py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <span
            className={`text-[17px] md:text-[26px] font-semibold uppercase transition-colors duration-200 ${
              isTransparent ? "text-white" : "text-[#111111]"
            }`}
          >
            Humidity Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] lg:text-[16px] tracking-[-0.01em] relative py-1 transition-colors duration-200 ${
                  isTransparent
                    ? isActive
                      ? "font-semibold text-white"
                      : "font-medium text-white/80 hover:text-white"
                    : isActive
                    ? "font-semibold text-[#111111]"
                    : "font-medium text-[#444444] hover:text-[#000000]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${
                      isTransparent ? "bg-white" : "bg-[#111111]"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Far Right Action: ENQUIRY Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className={`text-[13px] font-medium tracking-[0.08em] uppercase px-6 py-2.5 rounded-md transition-all duration-200 active:scale-[0.98] ${
              isTransparent
                ? "bg-white text-[#111111] hover:bg-[#e6e6e6]"
                : "bg-[#111111] text-white hover:bg-[#2a2a2a]"
            }`}
          >
            ENQUIRY
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none transition-colors duration-200 ${
            isTransparent ? "text-white" : "text-[#111111]"
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden border-b px-6 py-8 space-y-6 overflow-hidden ${
              isTransparent
                ? "bg-[#111111]/98 backdrop-blur-md border-white/10 text-white"
                : "bg-white border-[#e8e8e8] text-[#111111]"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[17px] tracking-tight ${
                    isTransparent
                      ? pathname === link.href
                        ? "font-semibold text-white"
                        : "font-medium text-white/80 hover:text-white"
                      : pathname === link.href
                      ? "font-semibold text-[#111111]"
                      : "font-medium text-[#444444] hover:text-[#000000]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-center text-[13px] font-medium tracking-[0.08em] uppercase py-3 rounded-md transition-colors ${
                  isTransparent
                    ? "bg-white text-[#111111] hover:bg-[#e6e6e6]"
                    : "bg-[#111111] text-white hover:bg-[#2a2a2a]"
                }`}
              >
                ENQUIRY
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
