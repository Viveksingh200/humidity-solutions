import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import EnquirySection from "@/components/EnquirySection";
import MarqueeSection from "@/components/MarqueeSection";
import ProductGallery from "@/components/ProductGallery";
import RequestCallbackButton from "@/components/RequestCallbackButton";
import { getProductBySlug, getAllProducts } from "@/data/productsData";

const categoryAliases = {
  "home-dehumidifiers": "/products/home-dehumidifiers",
  "industrial-dehumidifiers": "/products/industrial-dehumidifiers",
  "ceiling-dehumidifiers": "/products/ceiling-dehumidifiers",
  "home-dehumidifier": "/products/home-dehumidifiers",
  "industrial-dehumidifier": "/products/industrial-dehumidifiers",
  "ceiling-dehumidifier": "/products/ceiling-dehumidifiers",
  "portable-ac": "/products/portable-ac",
  "air-purifiers": "/products/air-purifiers",
  "air-purifier": "/products/air-purifiers",
  "humidifiers": "/products/humidifiers",
  "humidifier": "/products/humidifiers",
  "air-to-water": "/products/air-to-water",
};

export async function generateStaticParams() {
  const all = getAllProducts();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug?.toLowerCase();

  if (categoryAliases[rawSlug]) {
    return {
      title: "Dehumidifiers | Humidity Solutions",
      description: "Explore our range of commercial, industrial, ceiling and home dehumidifiers.",
    };
  }

  const product = getProductBySlug(rawSlug);

  if (!product) {
    return {
      title: "Product Not Found | Humidity Solutions",
      description: "Explore our complete range of dehumidifiers.",
    };
  }

  return {
    title: `${product.name} | Humidity Solutions`,
    description: product.subtitle || product.tech || product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug?.toLowerCase();

  if (categoryAliases[rawSlug]) {
    redirect(categoryAliases[rawSlug]);
  }

  const product = getProductBySlug(rawSlug);

  if (!product) {
    notFound();
  }

  const getCategoryHref = (prod) => {
    switch (prod.categoryId) {
      case "home":
      case "residential":
        return "/products/home-dehumidifiers";
      case "ceiling":
        return "/products/ceiling-dehumidifiers";
      case "industrial":
        return prod.slug?.includes("gdhd") || prod.subtitle?.toLowerCase().includes("ceiling")
          ? "/products/ceiling-dehumidifiers"
          : "/products/industrial-dehumidifiers";
      case "portable-ac":
        return "/products/portable-ac";
      case "purifier":
        return "/products/air-purifiers";
      case "humidifier":
        return "/products/humidifiers";
      case "air-to-water":
        return "/products/air-to-water";
      default:
        return "/products";
    }
  };

  const categoryHref = getCategoryHref(product);

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col selection:bg-[#111111] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-20 sm:pt-24 md:pt-28">
        {/* Breadcrumb Navigation */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-2 pb-4">
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] font-mono uppercase text-[#777777] flex-wrap">
            <Link href="/" className="hover:text-[#111111] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#111111] transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:text-[#111111] transition-colors">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">{product.name}</span>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="w-full bg-white pb-8 sm:pb-12 md:pb-20 border-b border-[#eeeeee]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
              {/* Product Visual Gallery */}
              <div className="lg:col-span-6">
                <ProductGallery images={product.images || [product.image]} name={product.name} />
              </div>

              {/* Product Details & Purchase/Enquiry Actions */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Subtitle placed above Name and highlighted as primary heading */}
                {product.subtitle ? (
                  <>
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-[-0.025em] text-[#111111] leading-[1.2] mb-2 sm:mb-2.5">
                      {product.subtitle}
                    </h1>
                    <h2 className="text-sm sm:text-lg md:text-xl font-normal text-[#666666] tracking-tight mb-3 sm:mb-4">
                      {product.name}
                    </h2>
                  </>
                ) : (
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-[-0.03em] text-[#111111] mb-3 sm:mb-4">
                    {product.name}
                  </h1>
                )}

                {/* Product Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-5 sm:mb-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-2.5">
                      {product.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#444444] leading-snug"
                        >
                          <span className="text-emerald-700 text-xs mt-0.5 shrink-0 font-bold">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 sm:py-4 mb-6 sm:mb-8 border-y border-[#eeeeee]">
                  <div className="bg-[#fafafa] p-2.5 sm:p-4 rounded-md border border-[#f0f0f0]">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#888888] uppercase tracking-wider block">
                      Extraction
                    </span>
                    <span className="text-[13px] sm:text-[17px] font-medium text-[#111111] mt-0.5 sm:mt-1 block truncate">
                      {product.extraction || "Standard"}
                    </span>
                  </div>

                  <div className="bg-[#fafafa] p-2.5 sm:p-4 rounded-md border border-[#f0f0f0]">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#888888] uppercase tracking-wider block">
                      Airflow
                    </span>
                    <span className="text-[13px] sm:text-[17px] font-medium text-[#111111] mt-0.5 sm:mt-1 block truncate">
                      {product.airflow || "High Output"}
                    </span>
                  </div>

                  <div className="bg-[#fafafa] p-2.5 sm:p-4 rounded-md border border-[#f0f0f0]">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#888888] uppercase tracking-wider block">
                      Coverage
                    </span>
                    <span className="text-[13px] sm:text-[17px] font-medium text-[#111111] mt-0.5 sm:mt-1 block truncate">
                      {product.coverage || "Engineered"}
                    </span>
                  </div>
                </div>

                {/* Actions & Brochure */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <RequestCallbackButton productName={product.name} className="w-full sm:w-auto" />

                  {product.brochure && (
                    <a
                      href={product.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:scale-[0.98] text-[13px] font-medium tracking-[0.08em] uppercase px-6 py-3.5 rounded-md transition-all inline-flex items-center justify-center gap-2 text-center"
                    >
                      <span>PDF Brochure</span>
                      <span>↓</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Engineering Specifications Table */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <section className="w-full bg-white py-8 sm:py-14 md:py-20 border-b border-[#eeeeee]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
              <div className="mb-6 sm:mb-10">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#888888] block mb-1.5 sm:mb-2">
                  TECHNICAL DATA
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-[#111111] tracking-tight">
                  Engineering Specifications
                </h2>
              </div>

              <div className="border border-[#e8e8e8] rounded-lg overflow-hidden">
                <div className="divide-y divide-[#eeeeee]">
                  {Object.entries(product.specifications).map(([label, value], idx) => (
                    <div
                      key={label}
                      className={`grid grid-cols-1 md:grid-cols-3 p-3 sm:p-4 md:p-5 text-[13px] sm:text-[14px] ${
                        idx % 2 === 0 ? "bg-[#fafafa]" : "bg-white"
                      }`}
                    >
                      <span className="font-medium text-[#111111] md:col-span-1">{label}</span>
                      <span className="text-[#555555] md:col-span-2 mt-1 md:mt-0 font-mono text-[12px] sm:text-[13px]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="mt-8 sm:mt-12 bg-[#f8f8f8] p-4 sm:p-6 md:p-8 rounded-lg border border-[#eaeaea]">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#888888] block mb-2.5 sm:mb-3">
                    RECOMMENDED APPLICATIONS
                  </span>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-[#dedede] text-[#222222] text-[12px] sm:text-[13px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Moving Marquee */}
        <MarqueeSection />

        {/* Enquiry Section */}
        <div id="enquiry">
          <EnquirySection prefilledModel={product.name} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
