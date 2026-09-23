"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: "home-dehumidifier",
    category: "RESIDENTIAL SERIES",
    name: "Home Dehumidifier",
    description:
      "Ultra-quiet, energy-efficient moisture removal engineered for basements, living spaces, bedrooms, and luxury modern residences.",
    image: "/images/prod-portable.jpg",
    specs: {
      capacity: "25 - 50 Litres / Day",
      airflow: "380 m³/h (225 CFM)",
      operatingRange: "5°C – 35°C (30% – 90% RH)",
      soundLevel: "38 dB(A) Ultra-quiet sleep mode",
      mobility: "Smooth-glide hidden casters and integrated carry handle",
      controls: "Smart Wi-Fi App & Digital Touch LED Interface with ambient RH ring",
      drainage: "Dual mode: 6.5L internal antimicrobial tank or continuous gravity hose",
    },
    applications: [
      "Finished basements & cellars",
      "Master bedrooms & living rooms",
      "Home cinemas & private libraries",
      "High-humidity residential suites",
    ],
  },
  {
    id: "ceiling-mounted",
    category: "CONCEALED SERIES",
    name: "Ceiling Mounted Dehumidifier",
    description:
      "Concealed ducted system engineered for discreet, low-noise moisture extraction in luxury commercial and hospitality environments.",
    image: "/images/prod-ceiling.jpg",
    specs: {
      capacity: "120 - 240 Litres / Day",
      airflow: "1,250 m³/h (735 CFM)",
      operatingRange: "5°C – 38°C (30% – 95% RH)",
      soundLevel: "46 dB(A) whisper-quiet operation",
      installation: "Overhead ceiling truss or ducted ceiling void",
      drainage: "Integrated internal condensate lift pump (6m head)",
    },
    applications: [
      "Hotel atriums and suites",
      "Executive commercial offices",
      "Museums and private galleries",
      "Indoor wellness pools",
    ],
  },
  {
    id: "industrial-high-capacity",
    category: "HEAVY DUTY SERIES",
    name: "Industrial Dehumidifier",
    description:
      "Heavy-duty steel-cased dehumidifier delivering massive moisture removal for manufacturing plants, warehouses, and archival spaces.",
    image: "/images/prod-industrial.jpg",
    specs: {
      capacity: "280 - 480 Litres / Day",
      airflow: "2,800 m³/h (1,650 CFM)",
      operatingRange: "3°C – 40°C (20% – 99% RH)",
      soundLevel: "58 dB(A) heavy-duty industrial grade",
      casing: "Heavy-gauge galvanised steel with powder-coat finish",
      mobility: "Industrial solid-rubber wheels and steel crash handle",
    },
    applications: [
      "Logistics and distribution warehouses",
      "Pharmaceutical cleanrooms",
      "Food and confectionery processing",
      "Cold storage and packaging facilities",
    ],
  },
];

export default function ProductShowcase() {
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  return (
    <section id="products" className="w-full bg-white py-20 md:py-28 lg:py-32 border-b border-[#eeeeee]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-6 border-b border-[#eeeeee]">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-[#111111]">
              OUR PRODUCTS
            </h2>
          </div>
          <p className="text-[14px] text-[#666666] max-w-sm mt-4 md:mt-0 font-normal">
            Precision home, commercial & industrial dehumidification systems engineered for uncompromising environmental control.
          </p>
        </div>

        {/* 3-Column Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => setActiveModalProduct(product)}
            >
              {/* Large Rectangular Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4] rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#333333] uppercase tracking-wider">
                  {product.category}
                </div>
              </div>

              {/* Product Info / Editorial Presentation */}
              <div className="pt-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl lg:text-[22px] font-medium text-[#111111] tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
                    {product.name}
                  </h3>
                  <p className="text-[14px] text-[#666666] leading-relaxed mt-2.5 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* VIEW PRODUCT Arrow Link */}
                <div className="pt-5 mt-auto">
                  <div className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.08em] uppercase text-[#111111] group-hover:text-[#555555] transition-colors">
                    <span>VIEW PRODUCT</span>
                    <span className="text-base transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Specification Modal */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 md:p-8 animate-fadeIn"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-md p-6 md:p-10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-6 right-6 p-2 text-[#777777] hover:text-[#111111] transition-colors"
              aria-label="Close product modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative aspect-[4/3] w-full bg-[#f4f4f4] border border-[#ebebeb]">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider block mb-1">
                  {activeModalProduct.category} • {activeModalProduct.code}
                </span>
                <h3 className="text-2xl font-light text-[#111111] tracking-tight mb-3">
                  {activeModalProduct.name}
                </h3>
                <p className="text-[14px] text-[#555555] leading-relaxed mb-6">
                  {activeModalProduct.description}
                </p>
                <a
                  href="#enquiry"
                  onClick={() => setActiveModalProduct(null)}
                  className="inline-block bg-[#111111] text-white text-[13px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-md hover:bg-[#2b2b2b] transition-colors"
                >
                  REQUEST SPEC SHEET / ENQUIRE
                </a>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="border-t border-[#eeeeee] pt-6">
              <h4 className="text-[12px] font-mono text-[#888888] uppercase tracking-widest mb-4">
                ENGINEERING SPECIFICATIONS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-[13px]">
                {Object.entries(activeModalProduct.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1.5 border-b border-[#f0f0f0]">
                    <span className="text-[#888888] capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-medium text-[#111111] text-right pl-4">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Applications */}
            <div className="border-t border-[#eeeeee] pt-6 mt-6">
              <h4 className="text-[12px] font-mono text-[#888888] uppercase tracking-widest mb-3">
                RECOMMENDED APPLICATIONS
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProduct.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f5f5f5] text-[#333333] text-[12px] px-3 py-1 rounded-md"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
