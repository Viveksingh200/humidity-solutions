import ProductCatalogPage from "@/components/ProductCatalogPage";
import { getProductsByCategory } from "@/data/productsData";

export const metadata = {
  title: "Portable Air Conditioners | Spot Cooling Solutions | Humidity Solutions",
  description:
    "Explore our high-performance Portable Air Conditioners engineered for spot cooling, server rooms, bedrooms, and commercial spaces.",
};

const portableAcProducts = getProductsByCategory("portable-ac");

const capacityFilters = ["1.5 Ton"];

const applicationFilters = [
  "Server Rooms",
  "Data Labs",
  "Master Bedrooms",
  "Living Rooms",
  "Executive Offices",
  "Hospital Consult Rooms",
];

export default function PortableAcPage() {
  return (
    <ProductCatalogPage
      title="Portable Air Conditioners"
      products={portableAcProducts}
      capacityFilters={capacityFilters}
      applicationFilters={applicationFilters}
    />
  );
}
