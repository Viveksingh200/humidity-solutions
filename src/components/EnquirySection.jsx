"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    application: "Commercial Spaces",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="enquiry" className="w-full bg-white py-20 md:py-28 lg:py-32 border-b border-[#eeeeee] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-light tracking-[-0.035em] text-[#111111] leading-[1.06] mb-6"
          >
            LET'S FIND THE RIGHT
            <br />
            <span className="font-normal">HUMIDITY SOLUTION.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-lg sm:text-xl text-[#555555] font-normal max-w-2xl leading-relaxed"
          >
            "Tell us about your space, application and humidity requirements."
          </motion.p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Form Container (7 Columns) - Enters from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="p-10 border border-[#111111] bg-[#fafafa] space-y-4 rounded-md"
                >
                  <div className="w-8 h-8 bg-[#111111] text-white flex items-center justify-center text-sm font-bold rounded-md">
                    ✓
                  </div>
                  <h3 className="text-2xl font-light text-[#111111] tracking-tight">
                    Enquiry Received
                  </h3>
                  <p className="text-base text-[#555555] leading-relaxed">
                    Thank you for contacting Humidity Solutions. One of our senior application engineers will review your space dimensions and psychrometric requirements, and contact you within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          application: "Commercial Spaces",
                          message: "",
                        });
                      }}
                      className="text-[13px] font-medium tracking-wider uppercase text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#666666] transition-colors"
                    >
                      SEND ANOTHER ENQUIRY →
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="enquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-[12px] font-mono uppercase tracking-wider text-[#666666]"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-0 py-3 text-base text-[#111111] border-b border-[#d8d8d8] focus:border-[#111111] focus:outline-none transition-colors placeholder:text-[#bbbbbb] bg-transparent rounded-none"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="block text-[12px] font-mono uppercase tracking-wider text-[#666666]"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Acme Industrial Group"
                        className="w-full px-0 py-3 text-base text-[#111111] border-b border-[#d8d8d8] focus:border-[#111111] focus:outline-none transition-colors placeholder:text-[#bbbbbb] bg-transparent rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-[12px] font-mono uppercase tracking-wider text-[#666666]"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full px-0 py-3 text-base text-[#111111] border-b border-[#d8d8d8] focus:border-[#111111] focus:outline-none transition-colors placeholder:text-[#bbbbbb] bg-transparent rounded-none"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-[12px] font-mono uppercase tracking-wider text-[#666666]"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-0 py-3 text-base text-[#111111] border-b border-[#d8d8d8] focus:border-[#111111] focus:outline-none transition-colors placeholder:text-[#bbbbbb] bg-transparent rounded-none"
                      />
                    </div>
                  </div>

                  {/* Application Selector */}
                  <div className="space-y-2">
                    <label
                      htmlFor="application"
                      className="block text-[12px] font-mono uppercase tracking-wider text-[#666666]"
                    >
                      Application Sector
                    </label>
                    <select
                      id="application"
                      value={formData.application}
                      onChange={(e) =>
                        setFormData({ ...formData, application: e.target.value })
                      }
                      className="w-full px-0 py-3 text-base text-[#111111] border-b border-[#d8d8d8] focus:border-[#111111] focus:outline-none transition-colors bg-transparent rounded-none cursor-pointer"
                    >
                      <option value="Commercial Spaces">Commercial & Corporate Spaces</option>
                      <option value="Hotels & Hospitality">Hotels & Indoor Pool Atriums</option>
                      <option value="Warehouses & Logistics">Warehouses & Logistics Centers</option>
                      <option value="Pharmaceuticals & Cleanrooms">Pharmaceuticals & ISO Cleanrooms</option>
                      <option value="Food & Beverage">Food Processing & Cold Storage</option>
                      <option value="Manufacturing & Electronics">Precision Manufacturing</option>
                      <option value="Healthcare & Laboratories">Healthcare & Laboratories</option>
                      <option value="Gyms & Wellness">Athletic Clubs & Wellness Centers</option>
                      <option value="Other / Bespoke Engineering">Other / Custom Project</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-[12px] font-mono uppercase tracking-wider text-[#666666]"
                    >
                      Message / Space Specifications
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Provide space dimensions, current RH level, target RH %, ceiling height, and any existing HVAC setup..."
                      className="w-full px-0 py-3 text-base text-[#111111] border-b border-[#d8d8d8] focus:border-[#111111] focus:outline-none transition-colors placeholder:text-[#bbbbbb] bg-transparent rounded-none resize-y"
                    />
                  </div>

                  {/* Submit Button with Hover & Tap Spring Physics */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111111] text-white text-[14px] font-medium tracking-[0.08em] uppercase px-10 py-4 rounded-md transition-all duration-200 hover:bg-[#2b2b2b] disabled:opacity-50 cursor-pointer shadow-md shadow-black/10"
                    >
                      <span>{submitting ? "PROCESSING..." : "SEND ENQUIRY"}</span>
                      <span className="text-lg">→</span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Beside the form: Humidity Solutions Contact Info (5 Columns) - Enters from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 lg:pl-8 space-y-10 border-t lg:border-t-0 lg:border-l border-[#eeeeee] pt-10 lg:pt-0"
          >
            <div>
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#888888] mb-2">
                COMPANY
              </div>
              <h3 className="text-2xl font-light text-[#111111] tracking-tight">
                Humidity Solutions
              </h3>
              <p className="text-[14px] text-[#666666] mt-2 leading-relaxed">
                Specialized engineering and distribution of commercial, industrial, and architectural climate-control systems.
              </p>
            </div>

            <div className="space-y-6 text-[15px]">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  DIRECT PHONE
                </div>
                <a
                  href="tel:+18005558643"
                  className="font-normal text-[#111111] hover:text-[#666666] transition-colors"
                >
                  +1 (800) 555-8643
                </a>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  EMAIL INQUIRIES
                </div>
                <a
                  href="mailto:enquiries@humiditysolutions.com"
                  className="font-normal text-[#111111] hover:text-[#666666] transition-colors"
                >
                  enquiries@humiditysolutions.com
                </a>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  HEADQUARTERS & TECHNICAL CENTER
                </div>
                <div className="text-[#333333] leading-relaxed">
                  Humidity Solutions Engineering Hub
                  <br />
                  480 Innovation Way, Suite 300
                  <br />
                  Chicago, IL 60607
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  OPERATING HOURS
                </div>
                <div className="text-[#333333]">
                  Monday – Friday: 08:00 – 18:00 CST
                  <br />
                  24/7 Critical Facility Support
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
