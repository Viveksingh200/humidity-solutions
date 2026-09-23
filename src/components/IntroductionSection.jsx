"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroductionSection() {
  return (
    <section id="about" className="w-full bg-white py-20 md:py-28 lg:py-32 border-b border-[#eeeeee] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Realistic Photograph entering from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f0f0f0] group rounded-md">
              <Image
                src="/images/intro-commercial.jpg"
                alt="Ceiling-mounted dehumidifier unit integrated into a luxury commercial hotel interior"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-between text-[12px] text-[#888888] pt-3"
            >
              <span className="font-mono uppercase tracking-wider">REF / ARCHITECTURAL INTEGRATION</span>
              <span>COMMERCIAL HOSPITALITY SUITE</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Content entering from RIGHT */}
          <div className="lg:col-span-5 lg:pl-4 space-y-6 md:space-y-8">
            {/* Small Label entering from TOP (Down) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-[12px] font-medium tracking-[0.25em] uppercase text-[#777777] border-b border-[#cccccc] pb-1 inline-block">
                ABOUT HUMIDITY SOLUTIONS
              </span>
            </motion.div>

            {/* Large Editorial Heading entering from RIGHT */}
            <motion.h2
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light tracking-[-0.03em] text-[#111111] leading-[1.12]"
            >
              Humidity control, designed around your environment.
            </motion.h2>

            {/* Explanatory Paragraphs entering from RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-4 text-base md:text-[17px] text-[#4a4a4a] leading-relaxed font-normal"
            >
              <p>
                Humidity Solutions provides high-capacity dehumidification equipment and precision environmental control systems designed for maintaining stable, controlled indoor humidity across commercial, industrial, and specialized environments.
              </p>
              <p>
                From luxury hospitality atriums and high-density offices to sensitive pharmaceutical laboratories and archival storage, our systems eliminate structural condensation, preserve raw inventory, protect sensitive mechanical infrastructure, and optimize occupant comfort.
              </p>
            </motion.div>

            {/* Editorial Button Link entering from BOTTOM (Up) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="pt-2"
            >
              <motion.a
                href="#applications"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-3 text-[14px] font-medium tracking-[0.08em] uppercase text-[#111111] group transition-colors hover:text-[#555555]"
              >
                <span>ABOUT US</span>
                <span className="text-lg transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  →
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
