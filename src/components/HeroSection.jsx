"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0d0d0d]">
      {/* Full-width Realistic Architectural Photograph Background with Smooth Entry Zoom */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-ceiling-dehumidifier.jpg"
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
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between items-center min-h-[75vh] md:min-h-[80vh]">
        {/* Top Spacer */}
        <div />

        {/* Central Editorial Typography Block */}
        <div className="max-w-4xl pt-12 md:pt-16 text-center flex flex-col items-center">
          {/* Eyebrow Label - Animating from TOP (Down) */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-4 md:mb-6 flex justify-center"
          >
            <span className="text-[12px] md:text-[13px] font-medium tracking-[0.25em] uppercase text-white/85 border-b border-white/30 pb-1">
              HUMIDITY CONTROL SOLUTIONS
            </span>
          </motion.div>

          {/* Main Heading - Animating from BOTTOM (Up) with Stagger */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[86px] font-light tracking-[-0.035em] text-white leading-[1.05] mb-6 md:mb-8 text-center"
          >
            CONTROL HUMIDITY.
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-normal text-white/95 inline-block"
            >
              PROTECT YOUR SPACE.
            </motion.span>
          </motion.h1>

          {/* Subtext - Animating from BOTTOM (Up) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-base sm:text-lg md:text-xl text-white/80 font-normal max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 text-center"
          >
            Dehumidification solutions designed for commercial, industrial and
            specialized environments. Engineered for precise relative humidity
            control and reliable asset protection.
          </motion.p>

          {/* Action Buttons - Animating from BOTTOM with interactive hover physics */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center justify-center bg-white text-[#111111] text-[13px] sm:text-[14px] font-medium tracking-[0.05em] uppercase px-8 py-3.5 rounded-md shadow-lg shadow-black/20"
            >
              EXPLORE PRODUCTS
            </motion.a>
            <motion.a
              href="#enquiry"
              whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center justify-center border border-white/60 text-white text-[13px] sm:text-[14px] font-medium tracking-[0.05em] uppercase px-8 py-3.5 rounded-md backdrop-blur-xs"
            >
              GET AN ENQUIRY
            </motion.a>
          </motion.div>
        </div>

        {/* Ambient Bottom Scroll Indicator with gentle floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="pb-4 pt-8 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
