"use client";

import { motion } from "framer-motion";

export default function MarqueeSection() {
  const marqueeItems = [
    { text: "HUMIDITY CONTROL", isStroke: false },
    { text: "DEHUMIDIFICATION", isStroke: true },
    { text: "INDOOR COMFORT", isStroke: false },
    { text: "MOISTURE PROTECTION", isStroke: true },
    { text: "PRECISION CLIMATE", isStroke: false },
    { text: "ASSET INTEGRITY", isStroke: true },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white py-14 sm:py-20 md:py-24 border-b border-[#eeeeee] overflow-hidden select-none"
    >
      <div className="relative w-full overflow-hidden no-scrollbar">
        {/* Continuous Looping Track */}
        <div className="animate-marquee-slow flex items-center whitespace-nowrap">
          {/* First loop */}
          <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16">
            {marqueeItems.map((item, idx) => (
              <div key={`loop1-${idx}`} className="flex items-center gap-10 md:gap-16">
                <span
                  className={`text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-light tracking-[-0.03em] uppercase ${
                    item.isStroke ? "stroke-text-dark font-normal" : "text-[#111111]"
                  }`}
                >
                  {item.text}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/30 flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* Second duplicate loop for seamless infinite wrap */}
          <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <div key={`loop2-${idx}`} className="flex items-center gap-10 md:gap-16">
                <span
                  className={`text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-light tracking-[-0.03em] uppercase ${
                    item.isStroke ? "stroke-text-dark font-normal" : "text-[#111111]"
                  }`}
                >
                  {item.text}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#111111]/30 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
