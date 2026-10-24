import ProductCatalogPage from "@/components/ProductCatalogPage";
import { getProductsByCategory } from "@/data/productsData";

export const metadata = {
  title: "Ceiling Dehumidifiers | Concealed Ducted Dehumidification | Humidity Solutions",
  description:
    "Explore our complete range of concealed Ceiling Mounted Dehumidifiers engineered for luxury hotels, commercial offices, museums, art galleries, and indoor wellness pools.",
};

const ceilingProducts = getProductsByCategory("ceiling");

const capacityFilters = [
  "20-30 Litres",
  "31-40 Litres",
  "50+ Litres",
];

const applicationFilters = [
  "Bedrooms",
  "Living Areas",
  "Boutiques",
  "Retail Spaces",
  "Indoor Pools",
  "Office Spaces",
  "Basements",
];

export default function CeilingDehumidifiersPage() {
  return (
    <ProductCatalogPage
      title="Ceiling Dehumidifiers"
      products={ceilingProducts}
      capacityFilters={capacityFilters}
      applicationFilters={applicationFilters}
    />
  );
}
