import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";

export const metadata = {
  title: "Contact & Technical Consultation | AMFAH India Trading",
  description:
    "Get in touch with AMFAH INDIA TRADING PVT LTD. in Mumbai for equipment sizing, psychrometric consultation, and custom project proposals.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-14 sm:pt-16">
        {/* Contact Page Header & Enquiry Form Component */}
        <EnquirySection />
      </main>

      <Footer />
    </div>
  );
}
