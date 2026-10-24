"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images = [], name = "Product" }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = images[selectedIndex] || images[0] || "/products/fral-fdnp-44.png";

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start w-full">
      {/* Main Image on Top (Mobile) / Left (Desktop) */}
      <div className="relative flex-1 aspect-[4/3] md:aspect-[5/4] w-full rounded-xl overflow-hidden p-2 sm:p-6 flex items-center justify-center bg-[#fafafa] sm:bg-transparent">
        <Image
          src={activeImage}
          alt={`${name} - View ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-contain p-2 sm:p-4"
        />
      </div>

      {/* Thumbnails Gallery - Horizontal scroll on mobile, Vertical on desktop */}
      {images.length > 1 && (
        <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 shrink-0 w-full sm:w-auto max-h-[480px] overflow-x-auto sm:overflow-y-auto pb-1 sm:pb-0 pr-0 sm:pr-1 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-14 h-14 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden border-2 bg-[#f8f8f8] p-1 transition-all cursor-pointer ${
                selectedIndex === idx
                  ? "border-[#111111] ring-2 ring-[#111111]/10"
                  : "border-[#e0e0e0] hover:border-[#999999]"
              }`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 56px, 80px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
