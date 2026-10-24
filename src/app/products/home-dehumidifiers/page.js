import ProductCatalogPage from "@/components/ProductCatalogPage";
import { getProductsByCategory } from "@/data/productsData";

export const metadata = {
  title: "Home Dehumidifiers | Buy Premium Residential Dehumidifiers | Humidity Solutions",
  description:
    "Explore our complete range of Home Dehumidifiers engineered for quiet luxury, bedrooms, basements, walk-in closets, and living spaces.",
};

const homeProducts = getProductsByCategory("home");

const capacityFilters = [
  "10-15 Litres",
  "16-20 Litres",
  "21-30 Litres",
  "31-50 Litres",
];

const applicationFilters = [
  "Bedrooms",
  "Living Areas",
  "Closets",
  "Basements",
  "Office Cabins",
  "Boutiques",
];

export default function HomeDehumidifiersPage() {
  return (
    <ProductCatalogPage
      title="Home Dehumidifiers"
      products={homeProducts}
      capacityFilters={capacityFilters}
      applicationFilters={applicationFilters}
    />
  );
}
