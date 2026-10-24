"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const productCategories = [
  { name: "Home Dehumidifiers", href: "/products/home-dehumidifiers" },
  { name: "Industrial Dehumidifiers", href: "/products/industrial-dehumidifiers" },
  { name: "Ceiling Dehumidifiers", href: "/products/ceiling-dehumidifiers" },
  { name: "Portable AC", href: "/products/portable-ac" },
  { name: "Air Purifiers", href: "/products/air-purifiers" },
  { name: "Humidifiers", href: "/products/humidifiers" },
  { name: "Air to Water", href: "/products/air-to-water" },
];

const applicationCategories = [
  { name: "Hotels & Hospitality", href: "/applications/hotels" },
  { name: "Commercial Spaces", href: "/applications/commercial" },
  { name: "Warehouses & Logistics", href: "/applications/warehouses" },
  { name: "Pharmaceuticals", href: "/applications/pharma" },
  { name: "Healthcare & Labs", href: "/applications/healthcare" },
  { name: "Gyms & Wellness", href: "/applications/gyms" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [applicationsDropdownOpen, setApplicationsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileApplicationsOpen, setMobileApplicationsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef(null);
  const appsDropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setProductsDropdownOpen(false);
    setApplicationsDropdownOpen(false);
    setMobileMenuOpen(false);
  }

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 120);
  };

  const handleAppsMouseEnter = () => {
    if (appsDropdownTimeoutRef.current) {
      clearTimeout(appsDropdownTimeoutRef.current);
    }
    setApplicationsDropdownOpen(true);
  };

  const handleAppsMouseLeave = () => {
    appsDropdownTimeoutRef.current = setTimeout(() => {
      setApplicationsDropdownOpen(false);
    }, 120);
  };

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;
  const isProductsActive = pathname.startsWith("/products");
  const isApplicationsActive = pathname.startsWith("/applications");

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isTransparent
          ? "bg-transparent py-3.5 sm:py-4 md:py-6"
          : scrolled
          ? "bg-white/95 backdrop-blur-sm py-3 md:py-3.5 shadow-sm"
          : "bg-white/95 backdrop-blur-sm py-3.5 sm:py-4 md:py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 focus:outline-none">
          <span
            className={`text-[16px] sm:text-[20px] md:text-[26px] font-semibold uppercase tracking-tight transition-colors duration-200 ${
              isTransparent ? "text-white" : "text-[#111111]"
            }`}
          >
            Humidity Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {/* Products Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Link
                href="/products"
                className={`text-[15px] lg:text-[16px] tracking-[-0.01em] transition-colors duration-200 ${
                  isTransparent
                    ? isProductsActive
                      ? "font-semibold text-white"
                      : "font-medium text-white/80 hover:text-white"
                    : isProductsActive
                    ? "font-semibold text-[#111111]"
                    : "font-medium text-[#444444] hover:text-[#000000]"
                }`}
              >
                Products
              </Link>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsDropdownOpen ? "rotate-180" : ""
                } ${isTransparent ? "text-white/70" : "text-[#666666]"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {isProductsActive && (
              <span
                className={`absolute bottom-1 left-0 right-4 h-[1.5px] rounded-full ${
                  isTransparent ? "bg-white" : "bg-[#111111]"
                }`}
              />
            )}

            {/* Smooth Dropdown */}
            <AnimatePresence>
              {productsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-1 w-45 rounded-md shadow-xl py-1.5 z-50 border bg-black border-white/10 text-white"
                >
                  {productCategories.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="block px-4 py-2.5 text-[14px] text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Applications Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={handleAppsMouseEnter}
            onMouseLeave={handleAppsMouseLeave}
          >
            <div className="flex items-center gap-1.5 cursor-pointer">
              <Link
                href="/applications"
                className={`text-[15px] lg:text-[16px] tracking-[-0.01em] transition-colors duration-200 ${
                  isTransparent
                    ? isApplicationsActive
                      ? "font-semibold text-white"
                      : "font-medium text-white/80 hover:text-white"
                    : isApplicationsActive
                    ? "font-semibold text-[#111111]"
                    : "font-medium text-[#444444] hover:text-[#000000]"
                }`}
              >
                Applications
              </Link>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  applicationsDropdownOpen ? "rotate-180" : ""
                } ${isTransparent ? "text-white/70" : "text-[#666666]"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {isApplicationsActive && (
              <span
                className={`absolute bottom-1 left-0 right-4 h-[1.5px] rounded-full ${
                  isTransparent ? "bg-white" : "bg-[#111111]"
                }`}
              />
            )}

            {/* Smooth 2-Column Applications Dropdown */}
            <AnimatePresence>
              {applicationsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-1 w-[180px] rounded-md shadow-2xl p-2 z-50 border bg-black border-white/10 text-white"
                >
                  <div className="grid gap-1">
                    {applicationCategories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setApplicationsDropdownOpen(false)}
                        className="block px-3 py-2 rounded text-[13px] text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <span className="font-medium block tracking-tight leading-snug">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Nav Links */}
          {[
            { name: "About Us", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => {
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
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
            transition={{ duration: 0.2 }}
            className={`md:hidden border-b px-5 py-4 space-y-3.5 max-h-[82vh] overflow-y-auto no-scrollbar ${
              isTransparent
                ? "bg-[#111111]/98 backdrop-blur-md border-white/10 text-white"
                : "bg-white border-[#e8e8e8] text-[#111111]"
            }`}
          >
            <div className="flex flex-col space-y-1.5">
              {/* Products Item in Mobile */}
              <div>
                <div className="flex items-center justify-between py-1 px-1 rounded-md">
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-medium py-1"
                  >
                    Products
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen((prev) => !prev)}
                    className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-500/10 focus:outline-none"
                    aria-label="Toggle products submenu"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {mobileProductsOpen && (
                  <div className="mt-1 pl-3 space-y-1 border-l border-inherit/20 py-1">
                    {productCategories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[14px] opacity-85 hover:opacity-100 py-1.5 px-2 rounded-md hover:bg-neutral-500/10 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Applications Item in Mobile */}
              <div>
                <div className="flex items-center justify-between py-1 px-1 rounded-md">
                  <Link
                    href="/applications"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-medium py-1"
                  >
                    Applications
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileApplicationsOpen((prev) => !prev)}
                    className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-500/10 focus:outline-none"
                    aria-label="Toggle applications submenu"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileApplicationsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {mobileApplicationsOpen && (
                  <div className="mt-1 pl-3 space-y-1 border-l border-inherit/20 py-1">
                    {applicationCategories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[14px] opacity-85 hover:opacity-100 py-1.5 px-2 rounded-md hover:bg-neutral-500/10 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/applications"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-[12px] font-mono uppercase text-emerald-400 py-2 px-2"
                    >
                      View All Applications →
                    </Link>
                  </div>
                )}
              </div>

              {[
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-medium py-1.5 px-1 rounded-md opacity-90 hover:opacity-100 hover:bg-neutral-500/10 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-center text-[13px] font-medium tracking-[0.08em] uppercase py-3 rounded-lg shadow-sm transition-all active:scale-[0.98] ${
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
