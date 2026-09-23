import Image from "next/image";

export default function ApplicationsMasonry() {
  const applications = [
    {
      id: "hotels",
      name: "HOTELS & HOSPITALITY",
      desc: "Preventing misted glazing, mold, and humidity damage in luxury atriums, wellness spas, and guest rooms.",
      image: "/images/app-hotels.jpg",
      tag: "INDOOR POOLS & SPAS",
    },
    {
      id: "commercial",
      name: "COMMERCIAL SPACES",
      desc: "Optimizing indoor air quality, thermal comfort, and HVAC efficiency across high-density corporate offices.",
      image: "/images/app-commercial.jpg",
      tag: "CORPORATE HEADQUARTERS",
    },
    {
      id: "warehouses",
      name: "WAREHOUSES",
      desc: "Eliminating hygroscopic cardboard softening, pallet condensation, and corrosion in massive logistics centers.",
      image: "/images/app-warehouses.jpg",
      tag: "BULK LOGISTICS",
    },
    {
      id: "pharma",
      name: "PHARMACEUTICALS",
      desc: "Maintaining strict ISO cleanroom tolerances for powder tableting, blister packaging, and compound stability.",
      image: "/images/app-pharma.jpg",
      tag: "GMP CLEANROOMS",
    },
    {
      id: "food",
      name: "FOOD PROCESSING",
      desc: "Preventing bacterial growth, condensation drip contamination, and hygroscopic ingredient clumping.",
      image: "/images/app-food.jpg",
      tag: "HYGIENIC PRODUCTION",
    },
    {
      id: "manufacturing",
      name: "MANUFACTURING",
      desc: "Guarding against electrostatic volatility, oxidation of precision alloys, and sensor calibration shifts.",
      image: "/images/app-manufacturing.jpg",
      tag: "PRECISION ENGINEERING",
    },
    {
      id: "healthcare",
      name: "HEALTHCARE",
      desc: "Safeguarding surgical suites, sterile storage rooms, MRI scanning bays, and clean diagnostic wards.",
      image: "/images/app-healthcare.jpg",
      tag: "CLINICAL & DIAGNOSTIC",
    },
    {
      id: "gyms",
      name: "GYMS & WELLNESS",
      desc: "Rapid latent heat and perspiration moisture extraction for fresh, energized, and odor-free fitness centers.",
      image: "/images/app-gyms.jpg",
      tag: "ATHLETIC CLUBS",
    },
  ];

  return (
    <section id="applications" className="w-full bg-white py-16 md:py-24 border-b border-[#eeeeee]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-[#111111] leading-[1.12]">
            WHERE HUMIDITY CONTROL MATTERS
          </h2>
        </div>

        {/* Row 1: Asymmetric Masonry (Large on Left [7 cols], Two Stacked on Right [5 cols]) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-8 lg:mb-10">
          {/* Large Left: Hotels & Hospitality */}
          <div className="lg:col-span-7">
            <ApplicationCard app={applications[0]} aspect="aspect-[16/11]" />
          </div>

          {/* Stacked Right: Commercial Spaces & Warehouses */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10 justify-between">
            <ApplicationCard app={applications[1]} aspect="aspect-[16/10]" />
            <ApplicationCard app={applications[2]} aspect="aspect-[16/10]" />
          </div>
        </div>

        {/* Row 2: Reversed Asymmetric Masonry (Two Stacked on Left [5 cols], Large on Right [7 cols]) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-8 lg:mb-10">
          {/* Stacked Left: Pharmaceuticals & Food Processing */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10 justify-between order-2 lg:order-1">
            <ApplicationCard app={applications[3]} aspect="aspect-[16/10]" />
            <ApplicationCard app={applications[4]} aspect="aspect-[16/10]" />
          </div>

          {/* Large Right: Manufacturing */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <ApplicationCard app={applications[5]} aspect="aspect-[16/11]" />
          </div>
        </div>

        {/* Row 3: Balanced Asymmetric Pair (Healthcare & Gyms) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-6">
            <ApplicationCard app={applications[6]} aspect="aspect-[16/10]" />
          </div>
          <div className="lg:col-span-6">
            <ApplicationCard app={applications[7]} aspect="aspect-[16/10]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationCard({ app, aspect }) {
  return (
    <a
      href="#enquiry"
      className={`group relative ${aspect} w-full overflow-hidden block bg-[#1a1a1a] cursor-pointer`}
    >
      {/* Real Photograph */}
      <Image
        src={app.image}
        alt={app.name}
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Subtle Default Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Hover Dark Subtle Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Simple Text Label & Arrow on Hover */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-widest uppercase text-white/70 bg-black/40 backdrop-blur-xs px-2.5 py-1">
            {app.tag}
          </span>
          <span className="text-white text-xl transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:translate-x-1">
            →
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-light text-white tracking-[-0.01em] uppercase">
            {app.name}
          </h3>
          <p className="text-[13px] text-white/80 max-w-md mt-2 line-clamp-2 transition-all duration-300 group-hover:text-white">
            {app.desc}
          </p>
        </div>
      </div>
    </a>
  );
}
