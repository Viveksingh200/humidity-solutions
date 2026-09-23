import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0d0d0d]">
      {/* Full-width Realistic Architectural Photograph Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ceiling-dehumidifier.jpg"
          alt="Modern commercial office interior with ceiling-mounted commercial dehumidification system"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.90] contrast-[1.05]"
        />
        {/* Subtle vignette/gradient scrim for clean editorial legibility without overpowering image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between items-center min-h-[75vh] md:min-h-[80vh]">
        {/* Top Spacer */}
        <div />

        {/* Central Editorial Typography Block */}
        <div className="max-w-4xl pt-12 md:pt-16 text-center flex flex-col items-center">
          {/* Small Eyebrow Label */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <span className="text-[12px] md:text-[13px] font-medium tracking-[0.25em] uppercase text-white/85 border-b border-white/30 pb-1">
              HUMIDITY CONTROL SOLUTIONS
            </span>
          </div>

          {/* Main Heading: Large thin/medium weight */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[86px] font-light tracking-[-0.035em] text-white leading-[1.05] mb-6 md:mb-8 text-center">
            CONTROL HUMIDITY.
            <br />
            <span className="font-normal text-white/95">PROTECT YOUR SPACE.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-normal max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 text-center">
            Dehumidification solutions designed for commercial, industrial and
            specialized environments. Engineered for precise relative humidity
            control and reliable asset protection.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-white text-[#111111] text-[13px] sm:text-[14px] font-medium tracking-[0.05em] uppercase px-8 py-3.5 rounded-md transition-all duration-200 hover:bg-[#e6e6e6] active:scale-[0.98]"
            >
              EXPLORE PRODUCTS
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center border border-white/60 text-white text-[13px] sm:text-[14px] font-medium tracking-[0.05em] uppercase px-8 py-3.5 rounded-md backdrop-blur-xs transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-[0.98]"
            >
              GET AN ENQUIRY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
