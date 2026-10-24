import ProductCatalogPage from "@/components/ProductCatalogPage";
import { getProductsByCategory } from "@/data/productsData";

export const metadata = {
  title: "Air Purifiers | True HEPA & Multi-Stage Filtration | Humidity Solutions",
  description:
    "Explore our premium range of True HEPA Air Purifiers engineered for allergen removal, smoke, odors, PM2.5, and pure indoor air quality.",
};

const airPurifierProducts = getProductsByCategory("purifier");

const capacityFilters = [
  "Up to 250 Sq feet",
  "Up to 350 Sq feet",
  "Up to 500 Sq feet",
  "450 - 500 Sq feet",
  "550 - 600 Sq feet",
];

const applicationFilters = [
  "Bedrooms",
  "Living Areas",
  "Private Office Cabins",
  "Study Rooms",
  "Clinics",
  "Conference Rooms",
  "Retail Shops",
  "Luxury Villa Basements",
];

export default function AirPurifiersPage() {
  return (
    <ProductCatalogPage
      title="Air Purifiers"
      products={airPurifierProducts}
      capacityFilters={capacityFilters}
      applicationFilters={applicationFilters}
    />
  );
}
