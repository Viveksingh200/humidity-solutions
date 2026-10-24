"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStatement() {
  return (
    <section id="statement" className="w-full bg-white py-10 sm:py-16 md:py-24 lg:py-28 border-b border-[#eeeeee] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">

        {/* Large Editorial Heading Spanning Viewport */}
        <div className="max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal tracking-[-0.035em] text-[#111111] leading-[1.12] mb-6 sm:mb-12 md:mb-16"
          >
            Commercial Dehumidifiers{" "}
            <span className="stroke-text-dark font-normal">also available</span>{" "}
            on{" "}
            <span className="stroke-text-dark font-normal">rent.</span>
          </motion.h2>
        </div>

        {/* Asymmetric Image Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-end pt-2 sm:pt-4">
          {/* Image 1: Rental fleet deployed on-site */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-5 space-y-3 sm:space-y-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4] group rounded-md">
              <Image
                src="/home/warehouse.jpeg"
                alt="Commercial rental dehumidifiers deployed on-site for rapid moisture extraction"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between text-[12px] sm:text-[13px] text-[#777777] pt-0.5">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">01 / Rental Dehumidifiers</span>
              <span>Available In Mumbai (All Areas)</span>
            </div>
          </motion.div>

          {/* Center Whitespace / Context Column */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block md:col-span-2 pb-4 text-[13px] text-[#777777] leading-relaxed"
          >
            <p className="border-l border-[#dddddd] pl-4">
              Need temporary drying? We also provide high-capacity industrial dehumidifiers on daily, weekly, or seasonal hire with rapid dispatch and zero capital outlay.
            </p>
          </motion.div>

          {/* Image 2: Industrial humidity-control environment */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:col-span-5 md:translate-y-8 space-y-3 sm:space-y-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4] group rounded-md">
              <Image
                src="/images/statement-industrial.jpg"
                alt="Precision climate-controlled cleanroom industrial manufacturing facility"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between text-[12px] sm:text-[13px] text-[#777777] pt-0.5">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">02 / Industrial & Commercial Dehumidifiers</span>
              <span>Fast Service Available In Mumbai</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
