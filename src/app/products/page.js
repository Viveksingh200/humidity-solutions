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

      <main className="flex-grow pt-4 md:pt-8">

        {/* Product Showcase */}
        <ProductShowcase />

        {/* Technical Specification Comparison Table */}
        <section className="w-full bg-[#fafafa] py-20 md:py-28 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <MotionReveal direction="left" duration={0.8} className="mb-12">
              <span className="text-[12px] font-mono uppercase tracking-widest text-[#888888] block mb-2">
                COMPARATIVE ANALYSIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight">
                Model Comparison
              </h2>
            </MotionReveal>

            <MotionReveal direction="up" duration={0.85} delay={0.15}>
              <div className="overflow-x-auto bg-white rounded-md border border-[#ebebeb] p-4 sm:p-6 shadow-xs">
                <table className="w-full text-left border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b-2 border-[#111111] text-[#111111] font-mono text-[12px] tracking-wider uppercase">
                      <th className="py-4 pr-6">Specification</th>
                      <th className="py-4 px-6 bg-[#fafafa]">HS-HOM-050 (Home)</th>
                      <th className="py-4 px-6">HS-CMD-240 (Ceiling)</th>
                      <th className="py-4 pl-6 bg-[#fafafa]">HS-IND-480X (Industrial)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e5e5] text-[#444444]">
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Extraction Capacity</td>
                      <td className="py-4 px-6 bg-[#fafafa]">25 - 50 L / Day</td>
                      <td className="py-4 px-6">120 - 240 L / Day</td>
                      <td className="py-4 pl-6 bg-[#fafafa]">280 - 480 L / Day</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Airflow Rate</td>
                      <td className="py-4 px-6 bg-[#fafafa]">380 m³/h (225 CFM)</td>
                      <td className="py-4 px-6">1,250 m³/h (735 CFM)</td>
                      <td className="py-4 pl-6 bg-[#fafafa]">2,800 m³/h (1,650 CFM)</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Operating Range</td>
                      <td className="py-4 px-6 bg-[#fafafa]">5°C – 35°C (30%–90% RH)</td>
                      <td className="py-4 px-6">5°C – 38°C (30%–95% RH)</td>
                      <td className="py-4 pl-6 bg-[#fafafa]">3°C – 40°C (20%–99% RH)</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Acoustic Rating</td>
                      <td className="py-4 px-6 bg-[#fafafa]">38 dB(A) Ultra-quiet</td>
                      <td className="py-4 px-6">46 dB(A) Whisper-quiet</td>
                      <td className="py-4 pl-6 bg-[#fafafa]">58 dB(A) Commercial grade</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Installation Type</td>
                      <td className="py-4 px-6 bg-[#fafafa]">Freestanding / Hidden Casters</td>
                      <td className="py-4 px-6">Overhead Ceiling / Ducted</td>
                      <td className="py-4 pl-6 bg-[#fafafa]">Mezzanine / Plant Floor</td>
                    </tr>
                    <tr className="hover:bg-[#f9f9f9] transition-colors">
                      <td className="py-4 pr-6 font-medium text-[#111111]">Primary Use Case</td>
                      <td className="py-4 px-6 bg-[#fafafa]">Basements, Living Rooms, Luxury Homes</td>
                      <td className="py-4 px-6">Hotels, Offices, Indoor Pools</td>
                      <td className="py-4 pl-6 bg-[#fafafa]">Warehouses, Pharma, Food Plants</td>
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
