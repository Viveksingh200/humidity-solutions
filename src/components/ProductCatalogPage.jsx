"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductCatalogPage({
  title,
  products = [],
  capacityFilters = [],
  applicationFilters = [],
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCapacities, setSelectedCapacities] = useState([]);
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);

  const toggleCapacity = (cap) => {
    setSelectedCapacities((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  };

  const toggleApplication = (app) => {
    setSelectedApplications((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    );
  };

  const clearAllFilters = () => {
    setSelectedCapacities([]);
    setSelectedApplications([]);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCapacities.length > 0) {
          const matchesCap = selectedCapacities.some((c) =>
            product.capacityTag?.toLowerCase().includes(c.toLowerCase())
          );
          if (!matchesCap) return false;
        }
        if (selectedApplications.length > 0) {
          const matchesApp = selectedApplications.some((a) =>
            product.applications?.some((app) =>
              app.toLowerCase().includes(a.toLowerCase())
            )
          );
          if (!matchesApp) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "capacity-asc") return a.capacityNum - b.capacityNum;
        if (sortBy === "capacity-desc") return b.capacityNum - a.capacityNum;
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        return 0;
      });
  }, [products, selectedCapacities, selectedApplications, sortBy]);

  const sortOptions = [
    { key: "featured", label: "Featured" },
    { key: "capacity-asc", label: "Capacity: Low to High" },
    { key: "capacity-desc", label: "Capacity: High to Low" },
    { key: "name-asc", label: "Alphabetical: A to Z" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.90,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col selection:bg-[#111111] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Breadcrumb Navigation */}
          <div className="pt-1 pb-2 sm:pb-4">
            <div className="flex items-center gap-2 text-[11px] sm:text-[13px] font-mono uppercase text-[#777777] flex-wrap">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-[#111111] transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-[#111111] font-medium">{title}</span>
            </div>
          </div>
          
          {/* Main Collection Title */}
          <div className="pb-2 sm:pb-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              {title}
            </h1>
          </div>

          {/* Action Toolbar: Filter Button + Product Count + Sort Dropdown */}
          <div className="flex items-center justify-between py-3 sm:py-5 relative z-20 flex-wrap gap-2">
            {/* Left: Filter Toggle Button & Count */}
            <div className="flex items-center gap-3 sm:gap-6">
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md border text-[12px] sm:text-[13px] font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                  showFilters || selectedCapacities.length > 0 || selectedApplications.length > 0
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-[#111111] border-[#d4d4d4] hover:border-[#111111]"
                }`}
                aria-label="Toggle filter sidebar"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>{showFilters ? "Hide filters" : "Show filters"}</span>
                {(selectedCapacities.length > 0 || selectedApplications.length > 0) && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                )}
              </button>

              <span className="text-[13px] sm:text-[14px] text-[#666666] font-normal">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </span>
            </div>

            {/* Right: Sort By Pill Dropdown */}
            <div className="relative">
              <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-[#555555]">
                <span className="hidden sm:inline">Sort by:</span>
                <button
                  type="button"
                  onClick={() => setSortOpen(!sortOpen)}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-md border border-[#d4d4d4] bg-white text-[#111111] font-medium text-[12px] sm:text-[13px] hover:border-[#111111] transition-colors focus:outline-none cursor-pointer"
                  aria-haspopup="listbox"
                  aria-expanded={sortOpen}
                >
                  <span className="truncate max-w-[130px] sm:max-w-none">
                    {sortOptions.find((o) => o.key === sortBy)?.label}
                  </span>
                  <svg className={`w-3.5 h-3.5 text-[#555555] transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Sort Menu */}
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                    className="absolute right-0 top-full mt-2 w-52 bg-white border border-[#e2e2e2] rounded-lg shadow-xl py-1 z-30"
                  >
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => {
                          setSortBy(opt.key);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[13px] flex items-center justify-between transition-colors ${
                          sortBy === opt.key
                            ? "bg-[#f5f5f5] text-[#111111] font-semibold"
                            : "text-[#444444] hover:bg-[#fafafa]"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {sortBy === opt.key && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Active Filter Chips */}
          {(selectedCapacities.length > 0 || selectedApplications.length > 0) && (
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pb-3 sm:pb-4">
              <span className="text-[11px] sm:text-[12px] font-mono text-[#888888] uppercase">Active:</span>
              {selectedCapacities.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleCapacity(c)}
                  className="inline-flex items-center gap-1.5 bg-[#f5f5f5] hover:bg-[#e9e9e9] text-[#222222] text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full transition-colors cursor-pointer"
                >
                  <span>{c}</span>
                  <span className="text-[13px] leading-none">×</span>
                </button>
              ))}
              {selectedApplications.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => toggleApplication(a)}
                  className="inline-flex items-center gap-1.5 bg-[#f5f5f5] hover:bg-[#e9e9e9] text-[#222222] text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full transition-colors cursor-pointer"
                >
                  <span>{a}</span>
                  <span className="text-[13px] leading-none">×</span>
                </button>
              ))}
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-[11px] sm:text-[12px] text-[#888888] hover:text-[#111111] underline ml-1 cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Mobile Filter Slide-up Bottom Sheet (md:hidden) */}
          <AnimatePresence>
            {showFilters && (
              <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowFilters(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs"
                />

                {/* Bottom Sheet Card */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  className="relative z-10 bg-white rounded-t-2xl shadow-2xl max-h-[82vh] flex flex-col overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-[#eeeeee]">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-[#111111]">Filter Products</h3>
                      {(selectedCapacities.length > 0 || selectedApplications.length > 0) && (
                        <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-full">
                          {selectedCapacities.length + selectedApplications.length} active
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowFilters(false)}
                      className="w-8 h-8 flex items-center justify-center text-[#666666] hover:text-[#111111] rounded-full hover:bg-neutral-100 cursor-pointer"
                      aria-label="Close filters"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-5 overflow-y-auto space-y-5 no-scrollbar">
                    {/* Capacity Filters */}
                    {capacityFilters.length > 0 && (
                      <div>
                        <h4 className="text-[12px] font-semibold text-[#111111] uppercase tracking-wider mb-2.5">
                          Extraction Capacity
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {capacityFilters.map((cap) => {
                            const checked = selectedCapacities.includes(cap);
                            return (
                              <button
                                key={cap}
                                type="button"
                                onClick={() => toggleCapacity(cap)}
                                className={`flex items-center justify-between p-2.5 rounded-lg border text-[13px] text-left transition-colors cursor-pointer ${
                                  checked
                                    ? "bg-[#111111] text-white border-[#111111]"
                                    : "bg-[#fafafa] text-[#333333] border-[#e5e5e5] hover:border-[#111111]"
                                }`}
                              >
                                <span>{cap}</span>
                                {checked && <span>✓</span>}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Application Filters */}
                    {applicationFilters.length > 0 && (
                      <div>
                        <h4 className="text-[12px] font-semibold text-[#111111] uppercase tracking-wider mb-2.5">
                          Recommended Use
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {applicationFilters.map((app) => {
                            const checked = selectedApplications.includes(app);
                            return (
                              <button
                                key={app}
                                type="button"
                                onClick={() => toggleApplication(app)}
                                className={`flex items-center justify-between p-2.5 rounded-lg border text-[13px] text-left transition-colors cursor-pointer ${
                                  checked
                                    ? "bg-[#111111] text-white border-[#111111]"
                                    : "bg-[#fafafa] text-[#333333] border-[#e5e5e5] hover:border-[#111111]"
                                }`}
                              >
                                <span>{app}</span>
                                {checked && <span>✓</span>}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Actions */}
                  <div className="p-4 border-t border-[#eeeeee] bg-[#fafafa] flex items-center gap-3">
                    <button
                      type="button"
                      onClick={clearAllFilters}
                      className="flex-1 py-3 text-center text-[13px] font-medium border border-[#cccccc] bg-white rounded-lg text-[#333333] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Clear All
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowFilters(false)}
                      className="flex-1 py-3 text-center text-[13px] font-medium bg-[#111111] text-white rounded-lg shadow-sm active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Apply ({filteredProducts.length})
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Main Layout Area: Optional Desktop Filter Sidebar + Responsive 2/4-Column Product Grid */}
          <div className="flex gap-8 pt-2 sm:pt-4">
            
            {/* Desktop Filter Sidebar (hidden on mobile, uses slide-up on mobile) */}
            <AnimatePresence>
              {showFilters && (
                <motion.aside
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="shrink-0 overflow-hidden hidden md:block"
                >
                  <div className="w-[240px] pr-6 space-y-6">
                    {/* Capacity Filters */}
                    {capacityFilters.length > 0 && (
                      <div>
                        <h4 className="text-[13px] font-semibold text-[#111111] uppercase tracking-wider mb-3">
                          Extraction Capacity
                        </h4>
                        <div className="space-y-2">
                          {capacityFilters.map((cap) => {
                            const checked = selectedCapacities.includes(cap);
                            return (
                              <label
                                key={cap}
                                className="flex items-center gap-2.5 text-[13px] text-[#444444] cursor-pointer hover:text-[#111111] select-none"
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleCapacity(cap)}
                                  className="w-4 h-4 rounded border-[#cccccc] text-[#111111] focus:ring-0 cursor-pointer"
                                />
                                <span>{cap}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Application Filters */}
                    {applicationFilters.length > 0 && (
                      <div className="pt-4">
                        <h4 className="text-[13px] font-semibold text-[#111111] uppercase tracking-wider mb-3">
                          Recommended Use
                        </h4>
                        <div className="space-y-2">
                          {applicationFilters.map((app) => {
                            const checked = selectedApplications.includes(app);
                            return (
                              <label
                                key={app}
                                className="flex items-center gap-2.5 text-[13px] text-[#444444] cursor-pointer hover:text-[#111111] select-none"
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleApplication(app)}
                                  className="w-4 h-4 rounded border-[#cccccc] text-[#111111] focus:ring-0 cursor-pointer"
                                />
                                <span>{app}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>

            {/* Product Grid (2 Columns on Mobile, 4 Columns on Desktop) */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="py-16 sm:py-20 text-center bg-[#fafafa] rounded-lg px-4">
                  <p className="text-[15px] sm:text-[16px] text-[#666666]">No models match the selected filter criteria.</p>
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="mt-4 inline-block text-[13px] font-medium uppercase tracking-wider underline text-[#111111] cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <motion.div
                  key={`grid-${sortBy}-${selectedCapacities.join(",")}-${selectedApplications.join(",")}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 gap-y-6 sm:gap-y-8 md:gap-y-10"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                      <motion.div
                        key={product.slug || product.id}
                        layout
                        variants={cardVariants}
                        className="flex flex-col h-full group"
                      >
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex flex-col cursor-pointer block h-full p-1.5 sm:p-2 rounded-lg hover:bg-neutral-50 active:bg-neutral-100 transition-colors"
                        >
                          {/* Image container */}
                          <div className="relative aspect-square sm:aspect-[2/2.2] w-full rounded-md overflow-hidden bg-[#f9f9f9] sm:bg-transparent">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-contain p-2"
                            />
                          </div>

                          {/* Brand & Model Name */}
                          <div className="pt-2 sm:pt-3 text-center">
                            <h3 className="text-[13px] sm:text-[15px] md:text-[16px] font-medium text-[#111111] leading-snug line-clamp-2">
                              {product.name}
                            </h3>

                            {product.capacity && (
                              <span className="text-[11px] sm:text-[12px] text-[#777777] font-mono mt-0.5 sm:mt-1 block">
                                {product.capacity}
                              </span>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Floating Quick Contact CTA Buttons (WhatsApp & Phone) */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2.5 sm:gap-3">
          {/* Phone Call Button */}
          <a
            href="tel:+919876543210"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#8bc34a] hover:bg-[#7cb342] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            aria-label="Call Us"
            title="Call Our Engineer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.49a1 1 0 01-1 1A17.93 17.93 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Humidity%20Solutions,%20I%20am%20interested%20in%20your%20dehumidifiers."
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            aria-label="WhatsApp Us"
            title="Chat on WhatsApp"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.164 8.164 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.21.89 2.39 1.01 2.55.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.31z" />
            </svg>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
