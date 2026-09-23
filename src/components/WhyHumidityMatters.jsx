import Image from "next/image";

export default function WhyHumidityMatters() {
  const impactItems = [
    {
      title: "Materials",
      impact:
        "Structural deterioration, wood warp, gypsum degradation, and pervasive mold proliferation in building envelopes.",
    },
    {
      title: "Equipment",
      impact:
        "Surface oxidation, electrical short circuits, sensor drift, and costly downtime on sensitive manufacturing equipment.",
    },
    {
      title: "Inventory",
      impact:
        "Corrugated cardboard box collapse, label peeling, hygroscopic ingredient caking, and packaging spoilage.",
    },
    {
      title: "Indoor comfort",
      impact:
        "Heavy air, muggy ambient conditions, stale musty odors, and impaired occupant thermal satisfaction.",
    },
    {
      title: "Product quality",
      impact:
        "Inconsistent pharmaceutical tablet hardness, confectionery blooming, and adhesive curing failures.",
    },
    {
      title: "Storage conditions",
      impact:
        "Non-compliance with strict regulatory storage standards and premature degradation of archived assets.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-32 border-b border-[#eeeeee]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Photograph of Condensation / Moisture Contrast */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111] group">
              <Image
                src="/images/why-condensation.jpg"
                alt="Moisture condensation glistening on industrial window overlooking machinery floor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] uppercase tracking-wider pt-3">
              <span>FIG. 04 / MOISTURE ACCUMULATION</span>
              <span>SURFACE CONDENSATION RISK</span>
            </div>
          </div>

          {/* Right Column: Clean Editorial Explanation (NO ICON GRID) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-[12px] font-medium tracking-[0.25em] uppercase text-[#777777] border-b border-[#cccccc] pb-1 inline-block mb-3">
                RISK MITIGATION
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-[#111111] leading-[1.1]">
                WHY HUMIDITY MATTERS
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              Uncontrolled relative humidity is an invisible liability. Even a temporary shift above critical dew-point thresholds triggers irrevocable chemical, physical, and microbial damage across commercial spaces and industrial plants.
            </p>

            <div className="pt-2">
              <div className="text-[12px] font-mono tracking-widest uppercase text-[#999999] mb-4">
                EXCESS MOISTURE CRITICALLY AFFECTS:
              </div>

              {/* Simple Typography List (No Icon Grid) */}
              <div className="divide-y divide-[#ebebeb] border-y border-[#ebebeb]">
                {impactItems.map((item, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="font-medium text-[15px] sm:text-[16px] text-[#111111] min-w-[150px]">
                      {item.title}
                    </span>
                    <span className="text-[13px] sm:text-[14px] text-[#666666] leading-normal font-normal">
                      {item.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
