import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";
import ProductFeatureSplit from "@/components/ProductFeatureSplit";
import MarqueeSection from "@/components/MarqueeSection";
import { MotionReveal } from "@/components/MotionWrappers";

export const metadata = {
  title: "Commercial, Industrial & Home Dehumidifiers | Humidity Solutions",
  description:
    "Explore our complete catalogue of home dehumidifiers, ceiling-mounted concealed systems, and industrial high-capacity units engineered for precision moisture extraction.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Product Showcase with integrated breadcrumbs & proper alignment */}
        <ProductShowcase isStandalone />

        {/* Technical Specification Comparison Table */}
        <section className="w-full bg-[#fafafa] py-8 sm:py-14 md:py-20 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <MotionReveal direction="left" duration={0.8} className="mb-4 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#888888] block mb-1">
                  TECHNICAL BENCHMARKS
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-[#111111] tracking-tight">
                  Model Comparison
                </h2>
              </div>
              <span className="sm:hidden text-[11px] font-mono text-[#888888]">
                ← Swipe table horizontally to compare →
              </span>
            </MotionReveal>

            <MotionReveal direction="up" duration={0.85} delay={0.15}>
              <div className="overflow-x-auto bg-white rounded-md border border-[#ebebeb] p-3 sm:p-6 shadow-xs">
                <table className="w-full text-left border-collapse text-[13px] sm:text-[14px] min-w-[620px]">
                  <thead>
                    <tr className="border-b-2 border-[#111111] text-[#111111] font-mono text-[11px] sm:text-[12px] tracking-wider uppercase">
                      <th className="py-3 sm:py-4 pr-4 sm:pr-6">Specification</th>
                      <th className="py-3 sm:py-4 px-4 sm:px-6">Home Dehumidifiers</th>
                      <th className="py-3 sm:py-4 px-4 sm:px-6">Ceiling Dehumidifiers</th>
                      <th className="py-3 sm:py-4 pl-4 sm:pl-6">Industrial Dehumidifiers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e5e5] text-[#444444]">
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Extraction Capacity</td>
                      <td className="py-4 px-6">10 - 50 L / Day</td>
                      <td className="py-4 px-6">26 - 56 L / Day</td>
                      <td className="py-4 pl-6">30 - 180 L / Day</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Airflow Rate</td>
                      <td className="py-4 px-6">120 - 340 m³/h</td>
                      <td className="py-4 px-6">250 - 600 m³/h</td>
                      <td className="py-4 pl-6">450 - 1,600 m³/h</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Operating Range</td>
                      <td className="py-4 px-6">5°C – 35°C (30%–90% RH)</td>
                      <td className="py-4 px-6">5°C – 38°C (30%–90% RH)</td>
                      <td className="py-4 pl-6">1°C – 35°C (30%–98% RH)</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Acoustic Rating</td>
                      <td className="py-4 px-6">36 - 42 dB(A) Whisper quiet</td>
                      <td className="py-4 px-6">35 - 56 dB(A) Low noise</td>
                      <td className="py-4 pl-6">46 - 59 dB(A) Heavy duty</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Installation Type</td>
                      <td className="py-4 px-6">Portable / Hidden Casters</td>
                      <td className="py-4 px-6">Concealed Overhead / Ducted</td>
                      <td className="py-4 pl-6">Heavy-Duty Floor Mobile / Fixed</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Primary Use Case</td>
                      <td className="py-4 px-6">Bedrooms, Closets, Living Rooms, Basements</td>
                      <td className="py-4 px-6">Hotel Suites, Boutiques, Spas, Pools</td>
                      <td className="py-4 pl-6">Warehouses, Cleanrooms, Pharma & Food Plants</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* Feature Split */}
        <ProductFeatureSplit />

        {/* Moving Marquee */}
        <MarqueeSection />
      </main>

      <Footer />
    </div>
  );
}
