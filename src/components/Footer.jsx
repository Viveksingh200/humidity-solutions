"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] text-white pt-10 sm:pt-16 md:pt-24 lg:pt-28 pb-8 sm:pb-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Top Grid: Brand, Navigation, Contact with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pb-8 sm:pb-12 md:pb-16 border-b border-white/15"
        >
          {/* Brand & Mission (5 Columns) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="md:col-span-5 space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-6 h-6 bg-white text-[#111111] flex items-center justify-center rounded-md">
                <svg
                  className="w-3.5 h-3.5 text-[#111111]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-tight uppercase">
                Humidity Solutions
              </h2>
            </div>

            <p className="text-[13px] sm:text-[15px] text-white/60 font-normal leading-relaxed max-w-md">
              Dehumidification and humidity-control solutions for commercial, industrial and specialized environments. Protecting structural integrity, indoor comfort, and sensitive manufacturing processes.
            </p>

            <div className="pt-1">
              <motion.button
                whileHover={{ y: -2 }}
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors cursor-pointer py-1"
              >
                <span>BACK TO TOP</span>
                <span>↑</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Navigation Links (3 Columns) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="md:col-span-3 space-y-3 sm:space-y-4"
          >
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/40 mb-2 sm:mb-3">
              NAVIGATION
            </div>
            <ul className="space-y-2 sm:space-y-3 text-[14px]">
              {["Products", "About Us", "Applications", "Contact"].map((item) => {
                const href = item === "Products" ? "/products" : item === "About Us" ? "/about" : item === "Applications" ? "/applications" : "/contact";
                return (
                  <li key={item}>
                    <Link
                      href={href}
                      className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200 py-0.5"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact Information (4 Columns) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="md:col-span-4 space-y-3 sm:space-y-4"
          >
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/40 mb-2 sm:mb-3">
              CONTACT INFORMATION
            </div>
            <div className="space-y-3 text-[13px] sm:text-[14px] text-white/70">
              <div>
                <span className="text-white/40 block text-[10px] sm:text-[11px] font-mono uppercase">PHONE & TOLL FREE</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                  <a href="tel:02240107074" className="hover:text-white transition-colors">
                    Toll Free: 022 40-107-074
                  </a>
                  <span className="text-white/30">•</span>
                  <a href="tel:+919321991812" className="hover:text-white transition-colors">
                    +91 93219 91812
                  </a>
                  <span className="text-white/30">•</span>
                  <a href="tel:+919324516323" className="hover:text-white transition-colors">
                    +91 93245 16323
                  </a>
                </div>
              </div>

              <div>
                <span className="text-white/40 block text-[10px] sm:text-[11px] font-mono uppercase">WHATSAPP</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                  <a
                    href="https://wa.me/919004663226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    +91 90046 63226
                  </a>
                  <span className="text-white/30">/</span>
                  <a
                    href="https://wa.me/919321991814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    +91 93219 91814
                  </a>
                </div>
              </div>

              <div>
                <span className="text-white/40 block text-[10px] sm:text-[11px] font-mono uppercase">EMAIL</span>
                <div className="flex flex-col gap-0.5 mt-0.5">
                  <a href="mailto:info.india@amfah.com" className="hover:text-white transition-colors">
                    info.india@amfah.com
                  </a>
                  <a href="mailto:amfahair@gmail.com" className="hover:text-white transition-colors">
                    amfahair@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <span className="text-white/40 block text-[10px] sm:text-[11px] font-mono uppercase">HEADQUARTERS</span>
                <span className="text-white/80 leading-relaxed block mt-0.5">
                  AMFAH INDIA TRADING PVT LTD.
                  <br />
                  153/C, Oshiwara Industrial Centre Premises CHS Ltd, Near Link Road, Opp. Oshiwara Bus Depot, Goregaon (West), Mumbai - 400104
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright & Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-[12px] text-white/40 text-center sm:text-left"
        >
          <div>
            © 2026 AMFAH INDIA TRADING PVT LTD. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white/80 transition-colors">
              ISO 9001 Certified
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
