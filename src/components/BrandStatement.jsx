"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStatement() {
  return (
    <section id="statement" className="w-full bg-white py-20 md:py-28 lg:py-32 border-b border-[#eeeeee] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Large Editorial Heading Spanning Viewport - Enters from Bottom (Up) */}
        <div className="max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-light tracking-[-0.035em] text-[#111111] leading-[1.08] mb-14 md:mb-20"
          >
            Better humidity control{" "}
            <span className="stroke-text-dark font-normal">creates</span>{" "}
            better{" "}
            <span className="stroke-text-dark font-normal">environments.</span>
          </motion.h2>
        </div>

        {/* Asymmetric Image Composition with Generous Whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end pt-4">
          {/* Image 1: Dehumidifier installed in a commercial ceiling (Enters from LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-5 space-y-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4] group rounded-md">
              <Image
                src="/images/statement-ceiling.jpg"
                alt="Ceiling-mounted commercial dehumidifier unit installed in acoustic ceiling grid"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
            <div className="flex items-center justify-between text-[13px] text-[#777777] pt-1">
              <span className="font-mono text-[11px] tracking-widest uppercase">01 / ARCHITECTURE</span>
              <span>Ceiling-Concealed Installation</span>
            </div>
          </motion.div>

          {/* Center Whitespace / Context Column (Enters from TOP / Down) */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="hidden md:block md:col-span-2 pb-4 text-[13px] text-[#777777] leading-relaxed"
          >
            <p className="border-l border-[#dddddd] pl-4">
              Engineered systems that integrate unobtrusively into modern interiors while safeguarding air quality and equipment.
            </p>
          </motion.div>

          {/* Image 2: Industrial humidity-control environment (Enters from RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-5 md:translate-y-8 space-y-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4] group rounded-md">
              <Image
                src="/images/statement-industrial.jpg"
                alt="Precision climate-controlled cleanroom industrial manufacturing facility"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
            <div className="flex items-center justify-between text-[13px] text-[#777777] pt-1">
              <span className="font-mono text-[11px] tracking-widest uppercase">02 / INDUSTRY</span>
              <span>High-Specification Climate Control</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
