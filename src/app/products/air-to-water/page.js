import ProductCatalogPage from "@/components/ProductCatalogPage";
import { getProductsByCategory } from "@/data/productsData";

export const metadata = {
  title: "Air to Water Generators | Atmospheric Water Generation | Humidity Solutions",
  description:
    "Explore Atmospheric Water Generators extracting pure, mineralized drinking water directly from air humidity with multi-stage filtration and UV sterilization.",
};

const airToWaterProducts = getProductsByCategory("air-to-water");

const capacityFilters = ["10 Liters / Day"];

const applicationFilters = [
  "Residential Living Rooms & Kitchens",
  "Small Office Conference Rooms",
  "Cabins and areas with poor clean water access",
  "Eco-conscious workspaces",
];

export default function AirToWaterPage() {
  return (
    <ProductCatalogPage
      title="Air to Water Generators"
      products={airToWaterProducts}
      capacityFilters={capacityFilters}
      applicationFilters={applicationFilters}
    />
  );
}
