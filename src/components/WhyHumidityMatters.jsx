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
    <section className="w-full bg-white py-20 md:py-28 lg:py-32 border-b border-[#eeeeee] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Photograph entering from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111] group rounded-md">
              <Image
                src="/images/why-condensation.jpg"
                alt="Moisture condensation glistening on industrial window overlooking machinery floor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-between text-[11px] font-mono text-[#888888] uppercase tracking-wider pt-3"
            >
              <span>FIG. 04 / MOISTURE ACCUMULATION</span>
              <span>SURFACE CONDENSATION RISK</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Explanation entering from RIGHT */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <div>
              {/* Eyebrow entering from TOP (Down) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-[12px] font-medium tracking-[0.25em] uppercase text-[#777777] border-b border-[#cccccc] pb-1 inline-block mb-3">
                  RISK MITIGATION
                </span>
              </motion.div>

              {/* Heading entering from RIGHT */}
              <motion.h2
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-[#111111] leading-[1.1]"
              >
                WHY HUMIDITY MATTERS
              </motion.h2>
            </div>

            {/* Explanatory Paragraph entering from RIGHT */}
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal"
            >
              Uncontrolled relative humidity is an invisible liability. Even a temporary shift above critical dew-point thresholds triggers irrevocable chemical, physical, and microbial damage across commercial spaces and industrial plants.
            </motion.p>

            <div className="pt-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[12px] font-mono tracking-widest uppercase text-[#999999] mb-4"
              >
                EXCESS MOISTURE CRITICALLY AFFECTS:
              </motion.div>

              {/* Simple Typography List with Staggered Slide In from RIGHT */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.35,
                    },
                  },
                }}
                className="divide-y divide-[#ebebeb] border-y border-[#ebebeb]"
              >
                {impactItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: 35 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
                      },
                    }}
                    whileHover={{ x: 6 }}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 transition-colors hover:bg-[#fafafa] px-2 rounded-xs cursor-pointer"
                  >
                    <span className="font-medium text-[15px] sm:text-[16px] text-[#111111] min-w-[150px]">
                      {item.title}
                    </span>
                    <span className="text-[13px] sm:text-[14px] text-[#666666] leading-normal font-normal">
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
