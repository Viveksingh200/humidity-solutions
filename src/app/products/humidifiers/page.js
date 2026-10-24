import ProductCatalogPage from "@/components/ProductCatalogPage";
import { getProductsByCategory } from "@/data/productsData";

export const metadata = {
  title: "Humidifiers | Ultrasonic Cool Mist & Industrial Moisture Control | Humidity Solutions",
  description:
    "Explore our complete range of Ultrasonic Cool Mist and Industrial Humidifiers engineered for optimal indoor relative humidity and comfort.",
};

const humidifierProducts = getProductsByCategory("humidifier");

const capacityFilters = [
  "8 Liters / Day",
  "13 Liters / Day",
  "24 Liters / Day",
];

const applicationFilters = [
  "Bedrooms & Nurseries",
  "Private Office Cabins",
  "Study Rooms",
  "Master Bedrooms",
  "Residential Living Rooms",
  "Office Conference Suites",
  "Yoga & Spa Studios",
  "Commercial Offices",
  "Hospitals & Clinics",
  "Cleanrooms & Laboratories",
];

export default function HumidifiersPage() {
  return (
    <ProductCatalogPage
      title="Humidifiers"
      products={humidifierProducts}
      capacityFilters={capacityFilters}
      applicationFilters={applicationFilters}
    />
  );
}
