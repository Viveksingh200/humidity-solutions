"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] text-white pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Grid: Brand, Navigation, Contact with Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-12 md:pb-16 border-b border-white/15"
        >
          {/* Brand & Mission (5 Columns) - Enters from BOTTOM / UP */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className="md:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-3">
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
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight uppercase">
                Humidity Solutions
              </h2>
            </div>

            <p className="text-[14px] sm:text-[15px] text-white/60 font-normal leading-relaxed max-w-md">
              Dehumidification and humidity-control solutions for commercial, industrial and specialized environments. Protecting structural integrity, indoor comfort, and sensitive manufacturing processes.
            </p>

            <div className="pt-2">
              <motion.button
                whileHover={{ y: -2 }}
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[12px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <span>BACK TO TOP</span>
                <span>↑</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Navigation Links (3 Columns) - Enters from BOTTOM / UP */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className="md:col-span-3 space-y-4"
          >
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
              NAVIGATION
            </div>
            <ul className="space-y-3 text-[14px]">
              {["Products", "About Us", "Applications", "Contact"].map((item) => {
                const href = item === "Products" ? "/products" : item === "About Us" ? "/about" : item === "Applications" ? "/applications" : "/contact";
                return (
                  <li key={item}>
                    <Link
                      href={href}
                      className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact Information (4 Columns) - Enters from BOTTOM / UP */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className="md:col-span-4 space-y-4"
          >
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
              CONTACT INFORMATION
            </div>
            <div className="space-y-3 text-[14px] text-white/70">
              <p>
                <span className="text-white/40 block text-[11px] font-mono uppercase">PHONE</span>
                <a href="tel:+18005558643" className="hover:text-white transition-colors">
                  +1 (800) 555-8643
                </a>
              </p>
              <p>
                <span className="text-white/40 block text-[11px] font-mono uppercase">EMAIL</span>
                <a href="mailto:enquiries@humiditysolutions.com" className="hover:text-white transition-colors">
                  enquiries@humiditysolutions.com
                </a>
              </p>
              <p>
                <span className="text-white/40 block text-[11px] font-mono uppercase">HEADQUARTERS</span>
                <span>480 Innovation Way, Suite 300, Chicago, IL 60607</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright & Legal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/40"
        >
          <div>
            © 2026 Humidity Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
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
