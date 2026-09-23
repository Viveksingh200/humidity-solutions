import Image from "next/image";

export default function IntroductionSection() {
  return (
    <section id="about" className="w-full bg-white py-20 md:py-28 lg:py-32 border-b border-[#eeeeee]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Realistic Photograph */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f0f0f0] group">
              <Image
                src="/images/intro-commercial.jpg"
                alt="Ceiling-mounted dehumidifier unit integrated into a luxury commercial hotel interior"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-center justify-between text-[12px] text-[#888888] pt-3">
              <span className="font-mono uppercase tracking-wider">REF / ARCHITECTURAL INTEGRATION</span>
              <span>COMMERCIAL HOSPITALITY SUITE</span>
            </div>
          </div>

          {/* Right Column: Clean Editorial Content (NOT inside a card) */}
          <div className="lg:col-span-5 lg:pl-4 space-y-6 md:space-y-8">
            {/* Small Label */}
            <div>
              <span className="text-[12px] font-medium tracking-[0.25em] uppercase text-[#777777] border-b border-[#cccccc] pb-1 inline-block">
                ABOUT HUMIDITY SOLUTIONS
              </span>
            </div>

            {/* Large Editorial Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light tracking-[-0.03em] text-[#111111] leading-[1.12]">
              Humidity control, designed around your environment.
            </h2>

            {/* Explanatory Paragraphs */}
            <div className="space-y-4 text-base md:text-[17px] text-[#4a4a4a] leading-relaxed font-normal">
              <p>
                Humidity Solutions provides high-capacity dehumidification equipment and precision environmental control systems designed for maintaining stable, controlled indoor humidity across commercial, industrial, and specialized environments.
              </p>
              <p>
                From luxury hospitality atriums and high-density offices to sensitive pharmaceutical laboratories and archival storage, our systems eliminate structural condensation, preserve raw inventory, protect sensitive mechanical infrastructure, and optimize occupant comfort.
              </p>
            </div>

            {/* Editorial Button Link */}
            <div className="pt-2">
              <a
                href="#applications"
                className="inline-flex items-center gap-3 text-[14px] font-medium tracking-[0.08em] uppercase text-[#111111] group transition-colors hover:text-[#555555]"
              >
                <span>ABOUT US</span>
                <span className="text-lg transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
