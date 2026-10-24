import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandStatement from "@/components/BrandStatement";
import ProcessExpertise from "@/components/ProcessExpertise";
import { MotionReveal } from "@/components/MotionWrappers";

export const metadata = {
  title: "About Us | Humidity Solutions",
  description:
    "Learn about Humidity Solutions — industry leaders in commercial and industrial moisture control, psychrometric engineering, and sustainable climate systems.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-14 sm:pt-16 md:pt-20">
        {/* Narrative & Photo Split */}
        <section className="w-full bg-white py-8 sm:py-14 md:py-20 lg:py-24 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Text entering from LEFT */}
              <MotionReveal
                direction="left"
                duration={0.85}
                className="lg:col-span-6 space-y-4 sm:space-y-6 text-[14px] sm:text-base md:text-lg text-[#444444] leading-relaxed"
              >
                <h2 className="text-2xl sm:text-4xl font-light text-[#111111] tracking-tight">
                  Engineered from psychrometric fundamentals.
                </h2>
                <p>
                  Excess moisture is rarely an isolated symptom. It is the result of intricate thermodynamics: infiltration rates, occupant latent load, temperature stratification, and hygroscopic absorption.
                </p>
                <p>
                  At Humidity Solutions, our systems are not generic appliances pulled from an off-the-shelf catalog. Every unit is engineered with high-efficiency scroll compressors, hydrophilic fin coatings, and intelligent microprocessor controls configured to maintain exact relative humidity setpoints.
                </p>
                <div className="pt-3 sm:pt-4 grid grid-cols-2 gap-4 sm:gap-6 border-t border-[#eeeeee]">
                  <div>
                    <div className="text-2xl sm:text-4xl font-light text-[#111111]">15+</div>
                    <div className="text-[11px] sm:text-[12px] font-mono text-[#888888] uppercase tracking-wider mt-1">
                      Years of Engineering
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-light text-[#111111]">±2%</div>
                    <div className="text-[11px] sm:text-[12px] font-mono text-[#888888] uppercase tracking-wider mt-1">
                      RH Tolerance Accuracy
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Photo entering from RIGHT */}
              <MotionReveal
                direction="right"
                duration={0.85}
                delay={0.15}
                className="lg:col-span-6"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111] rounded-md shadow-md">
                  <Image
                    src="/images/intro-commercial.jpg"
                    alt="Humidity Solutions architectural installation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <BrandStatement />

        {/* 5-Step Process */}
        <ProcessExpertise />
      </main>

      <Footer />
    </div>
  );
}
