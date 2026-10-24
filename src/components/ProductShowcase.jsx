"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: "home-dehumidifier",
    slug: "home-dehumidifiers",
    name: "Home Dehumidifiers",
    description:
      "Ultra-quiet, energy-efficient moisture removal engineered for basements, living spaces, bedrooms, and luxury modern residences.",
    image: "/home/home-dehumidifier.jpeg",
  },
  {
    id: "industrial-high-capacity",
    slug: "industrial-dehumidifiers",
    name: "Industrial Dehumidifiers",
    description:
      "Heavy-duty steel-cased dehumidifier delivering massive moisture removal for manufacturing plants, warehouses, and archival spaces.",
    image: "/home/industrial-dehumidifier.jpeg",
  },
  {
    id: "ceiling-mounted",
    slug: "ceiling-dehumidifiers",
    name: "Ceiling Dehumidifiers",
    description:
      "Concealed ducted system engineered for discreet, low-noise moisture extraction in luxury commercial and hospitality environments.",
    image: "/home/ceiling-dehumidifier.jpeg",
  },
  {
    id: "portable-ac",
    slug: "portable-ac",
    name: "Portable Air Conditioners",
    description:
      "High-performance 3-in-1 spot cooling, ventilation, and moisture extraction engineered for server rooms, bedrooms, and executive cabins.",
    image: "/home/portable-ac.jpeg",
  },
  {
    id: "air-purifiers",
    slug: "air-purifiers",
    name: "Air Purifiers",
    description:
      "Medical-grade True HEPA filtration, active carbon absorption, and negative ionizers engineered to eliminate allergens, PM2.5, and odors.",
    image: "/home/air-purifier.jpeg",
  },
  {
    id: "humidifiers",
    slug: "humidifiers",
    name: "Humidifiers",
    description:
      "Ultrasonic cool mist technology engineered to maintain optimal relative humidity levels for wellness, residential spaces, and cleanrooms.",
    image: "/home/humidifier.jpeg",
  },
  {
    id: "air-to-water",
    slug: "air-to-water",
    name: "Air to Water Generators",
    description:
      "Innovative atmospheric water generators extracting pure, mineralized drinking water directly from air humidity with multi-stage UV filtration.",
    image: "/home/air-to-water.jpeg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProductShowcase({ isStandalone = false }) {
  return (
    <section
      id="products"
      className={`w-full bg-white border-b border-[#eeeeee] overflow-hidden ${
        isStandalone ? "pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16 md:pb-24" : "py-10 sm:py-16 md:py-24"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Breadcrumb Navigation when Standalone Page */}
        {isStandalone && (
          <div className="pb-3 sm:pb-5">
            <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-mono uppercase text-[#777777]">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#111111] font-medium">Products</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 md:mb-16 pb-4 sm:pb-6 border-b border-[#eeeeee]">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#111111]">
              OUR PRODUCTS
            </h2>
          </div>
        </div>

        {/* Product Cards with Staggered Entrance Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              id={product.id}
              variants={cardVariants}
              className="flex flex-col h-full bg-white rounded-lg group"
            >
              {/* Clickable Image Container */}
              <Link
                href={`/products/${product.slug}`}
                className="relative aspect-[4/3] sm:aspect-[11/14] w-full overflow-hidden rounded-md block bg-[#f8f8f8]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`${
                    product.image.endsWith(".jpeg")
                      ? "object-cover"
                      : "object-contain p-4 sm:p-6"
                  } transition-transform duration-500 group-hover:scale-105`}
                />
              </Link>

              {/* Product Info */}
              <div className="pt-3 sm:pt-5 flex flex-col flex-grow justify-between">
                <div>
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#111111] tracking-tight group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-[13px] sm:text-[14px] text-[#666666] leading-relaxed mt-1 sm:mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 sm:pt-4 mt-auto">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium tracking-[0.08em] uppercase text-[#111111] group-hover:text-emerald-700 transition-colors py-1"
                  >
                    <span>VIEW DETAILS</span>
                    <span className="text-base transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
