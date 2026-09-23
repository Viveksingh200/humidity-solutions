import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";

export const metadata = {
  title: "Contact & Technical Consultation | Humidity Solutions",
  description:
    "Get in touch with our application engineering team in Chicago for equipment sizing, psychrometric consultation, and custom project proposals.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-4 md:pt-8">
        {/* Contact Page Header & Enquiry Form Component */}
        <EnquirySection />
      </main>

      <Footer />
    </div>
  );
}
