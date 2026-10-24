import ProductCatalogPage from "@/components/ProductCatalogPage";
import { getProductsByCategory } from "@/data/productsData";

export const metadata = {
  title: "Industrial Dehumidifiers | Heavy Duty High Capacity Extraction | Humidity Solutions",
  description:
    "Explore our complete range of heavy-duty Industrial Dehumidifiers built for warehouses, manufacturing, pharmaceuticals, cleanrooms, and food processing.",
};

const industrialProducts = getProductsByCategory("industrial");

const capacityFilters = [
  "30-50 Litres",
  "51-100 Litres",
  "101-200 Litres",
];

const applicationFilters = [
  "Warehouses",
  "Storage Facilities",
  "Cleanroom Labs",
  "Pharmaceutical",
  "Packaging",
  "Commercial Showrooms",
  "Basements",
];

export default function IndustrialDehumidifiersPage() {
  return (
    <ProductCatalogPage
      title="Industrial Dehumidifiers"
      products={industrialProducts}
      capacityFilters={capacityFilters}
      applicationFilters={applicationFilters}
    />
  );
}
