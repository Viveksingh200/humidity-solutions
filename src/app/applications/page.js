import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationsMasonry from "@/components/ApplicationsMasonry";
import WhyHumidityMatters from "@/components/WhyHumidityMatters";

export const metadata = {
  title: "Industry Applications | Humidity Solutions",
  description:
    "Explore tailored humidity-control solutions across hotels, commercial offices, warehouses, pharmaceuticals, food processing, manufacturing, healthcare, and athletic clubs.",
};

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16 md:pt-24">

        {/* Applications Masonry Gallery */}
        <ApplicationsMasonry />

        {/* Why Humidity Matters Section */}
        <WhyHumidityMatters />
      </main>

      <Footer />
    </div>
  );
}
