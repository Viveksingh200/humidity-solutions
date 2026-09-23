"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductFeatureSplit() {
  const featurePoints = [
    {
      index: "01",
      title: "Precise humidity control",
      desc: "Maintain relative humidity within ±2% RH tolerances for sensitive production lines and archives.",
    },
    {
      index: "02",
      title: "Space-efficient installation",
      desc: "Designed for overhead ceiling voids, plant rooms, and mezzanine floors without sacrificing floor area.",
    },
    {
      index: "03",
      title: "Commercial-grade performance",
      desc: "Continuous duty industrial compressors, hydrophilic-coated coils, and high-efficiency EC fan systems.",
    },
    {
      index: "04",
      title: "Flexible applications",
      desc: "Modular configurations adapted to bespoke ambient temperatures, airflows, and ducting topologies.",
    },
  ];

  return (
    <section className="w-full bg-[#0d0d0d] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[680px]">
        {/* LEFT 50%: Large Photograph entering from LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[400px] bg-[#1a1a1a]"
        >
          <Image
            src="/images/feature-installation.jpg"
            alt="Technical commercial dehumidifier plant room installation with precision ductwork"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover brightness-[0.9] contrast-[1.05]"
          />
          {/* Subtle architectural overlay */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-black/70 backdrop-blur-xs px-3.5 py-1.5 text-[11px] font-mono tracking-widest uppercase text-white/80 border border-white/20"
          >
            INSTALLATION SPEC / HIGH-CAPACITY CENTRAL PLANT
          </motion.div>
        </motion.div>

        {/* RIGHT 50%: Black background, crisp typography entering from RIGHT */}
        <div className="flex flex-col justify-center px-8 py-14 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-[#0d0d0d]">
          {/* Eyebrow entering from TOP (Down) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="text-[12px] font-medium tracking-[0.25em] uppercase text-white/60">
              ENGINEERING EXCELLENCE
            </span>
          </motion.div>

          {/* Heading entering from RIGHT */}
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light tracking-[-0.03em] leading-[1.1] text-white mb-6"
          >
            ENGINEERED FOR CONTROL
          </motion.h2>

          {/* Core Philosophy Statement entering from RIGHT */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-lg sm:text-xl text-white/80 font-normal leading-relaxed mb-10 max-w-xl"
          >
            "Reliable moisture removal for environments where humidity matters."
          </motion.p>

          {/* Clean Typographic List with Staggered Slide In from RIGHT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.25,
                },
              },
            }}
            className="space-y-6 mb-12 max-w-lg"
          >
            {featurePoints.map((item) => (
              <motion.div
                key={item.index}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
                  },
                }}
                whileHover={{ x: 6 }}
                className="group border-b border-white/10 pb-5 transition-colors hover:border-white/30 cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-white/40 tracking-wider group-hover:text-white/80 transition-colors">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="text-[16px] sm:text-[17px] font-medium text-white tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-white/60 font-normal mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Button Link entering from BOTTOM (Up) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="#products"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 text-[13px] sm:text-[14px] font-medium tracking-[0.08em] uppercase text-white group"
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
