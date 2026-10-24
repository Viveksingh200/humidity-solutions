"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquirySection({ prefilledModel = "" } = {}) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    application: "Commercial Spaces",
    message: prefilledModel
      ? `I would like to inquire about specifications and pricing for ${prefilledModel}.`
      : "",
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
    <section id="enquiry" className="w-full bg-white py-10 sm:py-16 md:py-24 lg:py-28 border-b border-[#eeeeee] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-4xl mb-6 sm:mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-[76px] font-light tracking-[-0.035em] text-[#111111] leading-[1.08] mb-3 sm:mb-6"
          >
            LET&apos;S FIND THE RIGHT
            <br />
            <span className="font-normal">HUMIDITY SOLUTION.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-[15px] sm:text-lg md:text-xl text-[#555555] font-normal max-w-2xl leading-relaxed"
          >
            &ldquo;Tell us about your space, application and humidity requirements.&rdquo;
          </motion.p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Form Container (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
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
                      Message
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
                  <div className="pt-2 sm:pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111111] text-white text-[13px] sm:text-[14px] font-medium tracking-[0.08em] uppercase px-8 py-3.5 sm:px-10 sm:py-4 rounded-lg transition-all duration-200 hover:bg-[#2b2b2b] disabled:opacity-50 cursor-pointer shadow-md shadow-black/10 active:scale-[0.98]"
                    >
                      <span>{submitting ? "PROCESSING..." : "SEND ENQUIRY"}</span>
                      <span className="text-lg">→</span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Beside the form: Humidity Solutions Contact Info (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 lg:pl-8 space-y-6 sm:space-y-10 border-t lg:border-t-0 lg:border-l border-[#eeeeee] pt-8 sm:pt-10 lg:pt-0"
          >
            <div>
              <div className="text-[12px] font-mono uppercase tracking-widest text-[#888888] mb-2">
                COMPANY
              </div>
              <h3 className="text-2xl font-light text-[#111111] tracking-tight">
                AMFAH INDIA TRADING PVT LTD.
              </h3>
              <p className="text-[14px] text-[#666666] mt-2 leading-relaxed">
                Specialized engineering and distribution of premium dehumidifiers, air purifiers, and industrial climate-control systems.
              </p>
            </div>

            <div className="space-y-6 text-[15px]">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  PHONE & TOLL FREE
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:02240107074"
                    className="font-normal text-[#111111] hover:text-[#666666] transition-colors"
                  >
                    Toll Free: 022 40-107-074
                  </a>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[14px]">
                    <a
                      href="tel:+919321991812"
                      className="text-[#333333] hover:text-[#111111] transition-colors"
                    >
                      Call: +91 93219 91812
                    </a>
                    <span className="text-[#cccccc]">•</span>
                    <a
                      href="tel:+919324516323"
                      className="text-[#333333] hover:text-[#111111] transition-colors"
                    >
                      Mobile: +91 93245 16323
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  WHATSAPP SUPPORT
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <a
                    href="https://wa.me/919004663226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>+91 90046 63226</span>
                  </a>
                  <span className="text-[#cccccc]">/</span>
                  <a
                    href="https://wa.me/919321991814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>+91 93219 91814</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  EMAIL INQUIRIES
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:info.india@amfah.com"
                    className="font-normal text-[#111111] hover:text-[#666666] transition-colors"
                  >
                    info.india@amfah.com
                  </a>
                  <a
                    href="mailto:amfahair@gmail.com"
                    className="font-normal text-[#111111] hover:text-[#666666] transition-colors"
                  >
                    amfahair@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  HEADQUARTERS & TECHNICAL CENTER
                </div>
                <div className="text-[#333333] leading-relaxed text-[14px]">
                  <strong>AMFAH INDIA TRADING PVT LTD.</strong>
                  <br />
                  153/C, Oshiwara Industrial Centre Premises CHS Ltd,
                  <br />
                  Near Link Road, Opp. Oshiwara Bus Depot,
                  <br />
                  Goregaon (West), Mumbai - 400104
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-1">
                  OPERATING HOURS
                </div>
                <div className="text-[#333333] text-[14px]">
                  Monday – Saturday: 09:30 – 18:30 IST
                  <br />
                  Dedicated Technical Support & Consultation
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
