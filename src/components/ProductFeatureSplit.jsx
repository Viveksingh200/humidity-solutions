"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductFeatureSplit() {
  const featurePoints = [
    {
      index: "01",
      title: "Home & Residential Dehumidifiers",
      desc: "Compact and whisper-quiet units that protect basements, bedrooms, and living spaces from damp and mold.",
    },
    {
      index: "02",
      title: "Ceiling-Concealed Systems",
      desc: "Discreet overhead ducted units that save floor space in hotels, offices, and luxury residences.",
    },
    {
      index: "03",
      title: "Heavy Industrial Workhorses",
      desc: "High-capacity machines built for warehouses, factories, cleanrooms, and large storage spaces.",
    },
    {
      index: "04",
      title: "Simple & Precise Control",
      desc: "Easy automatic humidity control, energy-efficient operation, and reliable 24/7 moisture removal.",
    },
  ];

  return (
    <section className="w-full bg-[#0d0d0d] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[auto] lg:min-h-[680px]">
        {/* LEFT 50%: Large Photograph */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full h-[240px] sm:h-[380px] lg:h-full min-h-[240px] bg-[#1a1a1a]"
        >
          <Image
            src="/home/control.jpeg"
            alt="Technical commercial dehumidifier plant room installation with precision ductwork"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover brightness-[0.9] contrast-[1.05]"
          />
          {/* Subtle architectural overlay */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* RIGHT 50%: Black background, crisp typography */}
        <div className="flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-14 md:px-16 lg:px-20 xl:px-24 bg-[#0d0d0d]">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-[52px] font-light tracking-[-0.03em] leading-[1.12] text-white mb-3 sm:mb-6"
          >
            ENGINEERED FOR CONTROL
          </motion.h2>

          {/* Core Philosophy Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[15px] sm:text-xl text-white/80 font-normal leading-relaxed mb-6 sm:mb-10 max-w-xl"
          >
            &ldquo;Reliable moisture control for homes, commercial properties, and industrial spaces.&rdquo;
          </motion.p>

          {/* Clean Typographic List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            className="space-y-3.5 sm:space-y-6 mb-8 sm:mb-12 max-w-lg"
          >
            {featurePoints.map((item) => (
              <motion.div
                key={item.index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
                  },
                }}
                whileHover={{ x: 6 }}
                className="group border-b border-white/10 pb-3.5 sm:pb-5 transition-colors hover:border-white/30 cursor-pointer"
              >
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <span className="font-mono text-[11px] sm:text-[12px] text-white/40 tracking-wider group-hover:text-white/80 transition-colors">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="text-[15px] sm:text-[17px] font-medium text-white tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-[12px] sm:text-[14px] text-white/60 font-normal mt-0.5 sm:mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Button Link */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.a
              href="#products"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 text-[13px] sm:text-[14px] font-medium tracking-[0.08em] uppercase text-white group py-1"
            >
              <span className="border-b border-white pb-0.5 group-hover:text-white/80 transition-colors">
                VIEW PRODUCTS
              </span>
              <span className="text-lg transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
