"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RequestCallbackButton({ productName = "", className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = () => {
    setIsSubmitted(false);
    setError("");
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setError("");
    }, 200);
  };

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!phone.trim()) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setPhone("");
      setEmail("");
    }, 600);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={handleOpen}
        className={`bg-[#111111] text-white text-[13px] font-medium tracking-[0.08em] uppercase px-6 sm:px-8 py-3.5 rounded-md hover:bg-[#2c2c2c] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-xs ${className}`}
      >
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span>Request a Callback</span>
      </button>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="callback-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-[#eeeeee] p-6 sm:p-8 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#888888] hover:text-[#111111] hover:bg-[#f3f3f3] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              {isSubmitted ? (
                /* Success View */
                <div className="text-center py-4 space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold border border-emerald-200">
                    ✓
                  </div>
                  <h3 id="callback-modal-title" className="text-2xl font-light text-[#111111] tracking-tight">
                    Callback Requested
                  </h3>
                  <p className="text-[14px] text-[#555555] leading-relaxed">
                    Thank you! Our application engineering specialist will call you shortly
                    {productName ? ` regarding ${productName}` : ""}.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full bg-[#111111] hover:bg-[#2c2c2c] text-white text-[13px] font-medium tracking-[0.08em] uppercase py-3.5 rounded-md transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <div>
                  <div className="mb-6">
                    <h3 id="callback-modal-title" className="text-2xl font-light text-[#111111] tracking-tight">
                      Request a Callback
                    </h3>
                    <p className="text-[13px] text-[#666666] leading-relaxed mt-1.5">
                      {productName
                        ? `Interested in ${productName}? Leave your details and an engineer will call you right back.`
                        : "Leave your contact details and our humidity specialist will call you right back."}
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-md">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Phone Number Field */}
                    <div>
                      <label
                        htmlFor="callback-phone"
                        className="block text-[11px] font-mono text-[#555555] uppercase tracking-wider mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="callback-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-3 border border-[#cccccc] rounded-md text-base sm:text-[14px] text-[#111111] placeholder-[#999999] focus:outline-hidden focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-colors"
                      />
                    </div>

                    {/* Email ID Field */}
                    <div>
                      <label
                        htmlFor="callback-email"
                        className="block text-[11px] font-mono text-[#555555] uppercase tracking-wider mb-1.5"
                      >
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="callback-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@example.com"
                        className="w-full px-3.5 py-3 border border-[#cccccc] rounded-md text-base sm:text-[14px] text-[#111111] placeholder-[#999999] focus:outline-hidden focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#111111] hover:bg-[#2c2c2c] active:scale-[0.98] disabled:bg-[#666666] text-white text-[13px] font-medium tracking-[0.08em] uppercase py-3.5 rounded-md transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              />
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <span>Submit</span>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
