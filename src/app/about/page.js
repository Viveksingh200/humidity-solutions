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

      <main className="flex-grow pt-16 md:pt-24">
        {/* Narrative & Photo Split */}
        <section className="w-full bg-white py-16 md:py-24 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text entering from LEFT */}
              <MotionReveal
                direction="left"
                duration={0.85}
                className="lg:col-span-6 space-y-6 text-base md:text-lg text-[#444444] leading-relaxed"
              >
                <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight">
                  Engineered from psychrometric fundamentals.
                </h2>
                <p>
                  Excess moisture is rarely an isolated symptom. It is the result of intricate thermodynamics: infiltration rates, occupant latent load, temperature stratification, and hygroscopic absorption.
                </p>
                <p>
                  At Humidity Solutions, our systems are not generic appliances pulled from an off-the-shelf catalog. Every unit is engineered with high-efficiency scroll compressors, hydrophilic fin coatings, and intelligent microprocessor controls configured to maintain exact relative humidity setpoints.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#eeeeee]">
                  <div>
                    <div className="text-3xl sm:text-4xl font-light text-[#111111]">15+</div>
                    <div className="text-[12px] font-mono text-[#888888] uppercase tracking-wider mt-1">
                      Years of Engineering
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-light text-[#111111]">±2%</div>
                    <div className="text-[12px] font-mono text-[#888888] uppercase tracking-wider mt-1">
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
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
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
