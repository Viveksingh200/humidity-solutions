"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyHumidityMatters() {
  const impactItems = [
    {
      title: "Materials",
      impact:
        "Structural deterioration, wood warp, gypsum degradation, and pervasive mold proliferation in building envelopes.",
    },
    {
      title: "Equipment",
      impact:
        "Surface oxidation, electrical short circuits, sensor drift, and costly downtime on sensitive manufacturing equipment.",
    },
    {
      title: "Inventory",
      impact:
        "Corrugated cardboard box collapse, label peeling, hygroscopic ingredient caking, and packaging spoilage.",
    },
    {
      title: "Indoor comfort",
      impact:
        "Heavy air, muggy ambient conditions, stale musty odors, and impaired occupant thermal satisfaction.",
    },
    {
      title: "Product quality",
      impact:
        "Inconsistent pharmaceutical tablet hardness, confectionery blooming, and adhesive curing failures.",
    },
    {
      title: "Storage conditions",
      impact:
        "Non-compliance with strict regulatory storage standards and premature degradation of archived assets.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-16 md:py-24 lg:py-28 border-b border-[#eeeeee] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: Large Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111] group rounded-md">
              <Image
                src="/images/why-condensation.jpg"
                alt="Moisture condensation glistening on industrial window overlooking machinery floor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#888888] uppercase tracking-wider pt-2.5"
            >
              <span>FIG. 04 / MOISTURE ACCUMULATION</span>
              <span>SURFACE CONDENSATION RISK</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Explanation */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 sm:space-y-8">
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.25em] uppercase text-[#777777] border-b border-[#cccccc] pb-0.5 inline-block mb-2 sm:mb-3">
                  RISK MITIGATION
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#111111] leading-[1.12]"
              >
                WHY HUMIDITY MATTERS
              </motion.h2>
            </div>

            {/* Explanatory Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-[14px] sm:text-base md:text-lg text-[#555555] leading-relaxed font-normal"
            >
              Uncontrolled relative humidity is an invisible liability. Even a temporary shift above critical dew-point thresholds triggers irrevocable chemical, physical, and microbial damage across commercial spaces and industrial plants.
            </motion.p>

            <div className="pt-1 sm:pt-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[11px] sm:text-[12px] font-mono tracking-widest uppercase text-[#999999] mb-3 sm:mb-4"
              >
                EXCESS MOISTURE CRITICALLY AFFECTS:
              </motion.div>

              {/* Typography List */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.25,
                    },
                  },
                }}
                className="divide-y divide-[#ebebeb] border-y border-[#ebebeb]"
              >
                {impactItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
                      },
                    }}
                    whileHover={{ x: 6 }}
                    className="py-2.5 sm:py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 transition-colors hover:bg-[#fafafa] px-1 sm:px-2 rounded-xs cursor-pointer"
                  >
                    <span className="font-medium text-[14px] sm:text-[16px] text-[#111111] min-w-[130px] sm:min-w-[150px]">
                      {item.title}
                    </span>
                    <span className="text-[12px] sm:text-[14px] text-[#666666] leading-normal font-normal">
                      {item.impact}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
