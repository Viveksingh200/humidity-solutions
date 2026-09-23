"use client";

import { motion } from "framer-motion";

export default function ProcessExpertise() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      detail:
        "Comprehensive intake of space dimensions, building envelope materials, operating hours, and hygroscopic load variables.",
    },
    {
      num: "02",
      title: "Assess",
      detail:
        "Psychrometric calculation of moisture extraction rates (litres/24hr), air exchange requirements, and ambient dew points.",
    },
    {
      num: "03",
      title: "Select",
      detail:
        "Specifying precise equipment topology — ducted ceiling concealed, high-capacity freestanding industrial, or mobile units.",
    },
    {
      num: "04",
      title: "Install",
      detail:
        "Seamless mechanical mounting, condensate drainage management, duct balancing, and building management integration.",
    },
    {
      num: "05",
      title: "Support",
      detail:
        "Preventative maintenance schedules, sensor calibration, filter replacements, and technical performance assurance.",
    },
  ];

  return (
    <section className="w-full bg-[#0d0d0d] text-white py-20 md:py-28 lg:py-32 border-b border-[#222222] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[12px] font-medium tracking-[0.25em] uppercase text-white/50 mb-4"
          >
            METHODOLOGY & EXPERTISE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-light tracking-[-0.035em] text-white leading-[1.08]"
          >
            FROM REQUIREMENT
            <br />
            <span className="font-normal text-white/95">TO SOLUTION.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-base sm:text-lg text-white/70 font-normal max-w-xl mt-6 leading-relaxed"
          >
            Engineering a dry, controlled environment requires rigorous psychrometric modeling, not guesswork. Our end-to-end process guarantees quantifiable performance.
          </motion.p>
        </div>

        {/* Horizontal Editorial Process (01 - 05) with Staggered Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
                },
              }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
              transition={{ duration: 0.3 }}
              className="py-10 md:py-12 px-0 md:px-6 lg:px-8 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-light font-mono text-white/40 tracking-tight mb-6 group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.01em] mb-4">
                  {step.title}
                </h3>
              </div>
              <p className="text-[13px] sm:text-[14px] text-white/60 leading-relaxed font-normal mt-4">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
