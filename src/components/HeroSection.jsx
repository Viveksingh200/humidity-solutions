"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden bg-[#0d0d0d]">
      {/* Full-width Realistic Architectural Photograph Background with Smooth Entry Zoom */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/home/banner.jpeg"
          alt="Modern commercial office interior with ceiling-mounted commercial dehumidification system"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.90] contrast-[1.05]"
        />
        {/* Subtle vignette/gradient scrim for clean editorial legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-center items-center min-h-[65vh] md:min-h-[80vh]">
        {/* Central Editorial Typography Block */}
        <div className="max-w-4xl pt-6 sm:pt-12 md:pt-24 text-center flex flex-col items-center">
          {/* Main Heading - Animating from BOTTOM (Up) with Stagger */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-[86px] font-light tracking-[-0.035em] text-white leading-[1.08] mb-4 sm:mb-8 text-center"
          >
            CONTROL HUMIDITY.
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-normal text-white/95 inline-block"
            >
              PROTECT YOUR SPACE.
            </motion.span>
          </motion.h1>

          {/* Subtext - Animating from BOTTOM (Up) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[14px] sm:text-lg md:text-xl text-white/85 font-normal max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 text-center px-2"
          >
            Explore humidity control solutions for commercial, industrial, residential, and specialized applications, designed for effective moisture management.
          </motion.p>

          {/* Action Buttons - Full-width stacked on mobile, inline on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#111111] text-[13px] sm:text-[14px] font-medium tracking-[0.05em] uppercase px-7 py-3.5 rounded-lg shadow-lg shadow-black/20"
            >
              EXPLORE PRODUCTS
            </motion.a>
            <motion.a
              href="#enquiry"
              whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/60 text-white text-[13px] sm:text-[14px] font-medium tracking-[0.05em] uppercase px-7 py-3.5 rounded-lg backdrop-blur-xs"
            >
              GET AN ENQUIRY
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
