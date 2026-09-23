import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import BrandStatement from "@/components/BrandStatement";
import IntroductionSection from "@/components/IntroductionSection";
import ProductShowcase from "@/components/ProductShowcase";
import ProductFeatureSplit from "@/components/ProductFeatureSplit";
import MarqueeSection from "@/components/MarqueeSection";
import ApplicationsMasonry from "@/components/ApplicationsMasonry";
import WhyHumidityMatters from "@/components/WhyHumidityMatters";
import ProcessExpertise from "@/components/ProcessExpertise";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white flex flex-col">
      {/* Sticky Clean Editorial Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Client Marquee Strip */}
        <ClientMarquee />

        {/* Product Showcase (OUR PRODUCTS) */}
        <ProductShowcase />

        {/* Section: Brand / Statement */}
        <BrandStatement />

        {/* Section: Introduction */}
        <IntroductionSection />

        {/* Section 5: Product Feature (50/50 Split Screen) */}
        <ProductFeatureSplit />

        {/* Section 6: Marquee / Moving Typography */}
        <MarqueeSection />

        {/* Section 7: Applications (Where Humidity Control Matters) */}
        <ApplicationsMasonry />

        {/* Section 8: Why Humidity Matters */}
        <WhyHumidityMatters />

        {/* Section 9: Solutions / Expertise (01 - 05 Process) */}
        <ProcessExpertise />

        {/* Section 10: Enquiry */}
        <EnquirySection />
      </main>

      {/* Minimal Black Footer */}
      <Footer />
    </div>
  );
}
