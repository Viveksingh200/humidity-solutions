import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import { MotionReveal, MotionImageReveal } from "@/components/MotionWrappers";
import { applicationsData, getApplicationBySlug } from "@/data/applicationsData";

export function generateStaticParams() {
  return applicationsData.map((app) => ({
    slug: app.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const app = getApplicationBySlug(resolvedParams?.slug);

  if (!app) {
    return {
      title: "Industry Applications | Humidity Solutions",
      description: "Custom moisture control and dehumidifier engineering for specialized commercial and industrial sectors.",
    };
  }

  return {
    title: `${app.name} Humidity Control & Dehumidifiers | Humidity Solutions`,
    description: `${app.subtitle} Learn how Humidity Solutions protects ${app.name} from condensation, mold, and humidity damage.`,
  };
}

export default async function ApplicationDetailPage({ params }) {
  const resolvedParams = await params;
  const app = getApplicationBySlug(resolvedParams?.slug);

  if (!app) {
    notFound();
  }

  const otherApplications = applicationsData.filter((item) => item.id !== app.id);

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col selection:bg-[#111111] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-16 sm:pt-20 md:pt-28">
        {/* Breadcrumb Navigation */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-2 pb-4">
          <MotionReveal direction="down" duration={0.6}>
            <div className="flex items-center gap-2 text-[11px] sm:text-[13px] font-mono uppercase text-[#777777] flex-wrap">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/applications" className="hover:text-[#111111] transition-colors">
                Applications
              </Link>
              <span>/</span>
              <span className="text-[#111111] font-medium">{app.name}</span>
            </div>
          </MotionReveal>
        </div>

        {/* Hero Section */}
        <section className="w-full bg-white pb-8 sm:pb-14 md:pb-20 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
              {/* Left Column: Headline, Subtitle, Metrics, and CTAs */}
              <div className="lg:col-span-7">
                {/* Editorial Main Headline */}
                <MotionReveal direction="left" duration={0.85} className="mb-4 sm:mb-6">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[62px] font-light tracking-[-0.035em] text-[#111111] leading-[1.12] mb-3 sm:mb-6">
                    {app.headline}
                  </h1>
                  <p className="text-[14px] sm:text-base md:text-lg text-[#555555] font-light leading-relaxed">
                    {app.subtitle}
                  </p>
                </MotionReveal>

                {/* Benchmark Metrics Strip */}
                <MotionReveal direction="up" delay={0.15} duration={0.75}>
                  <div className="grid grid-cols-2 gap-3 sm:gap-6 py-4 sm:py-6 border-y border-[#eeeeee] mb-6 sm:mb-8">
                    <div>
                      <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                        Target Humidity Setpoint
                      </span>
                      <span className="text-lg sm:text-3xl font-light text-[#111111] mt-0.5 sm:mt-1 block tracking-tight">
                        {app.idealRH}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                        Operational Temperature
                      </span>
                      <span className="text-lg sm:text-3xl font-light text-[#111111] mt-0.5 sm:mt-1 block tracking-tight">
                        {app.temperatureRange}
                      </span>
                    </div>
                  </div>
                </MotionReveal>

                {/* Action Buttons */}
                <MotionReveal direction="up" delay={0.25} duration={0.65}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <a
                      href="#enquiry"
                      className="inline-flex items-center justify-center bg-[#111111] text-white text-[13px] font-medium tracking-[0.05em] uppercase px-6 sm:px-11 py-3.5 rounded active:scale-[0.98] hover:bg-[#2a2a2a] transition-all duration-200 text-center"
                    >
                      REQUEST CONSULTATION →
                    </a>
                    <a
                      href="#models"
                      className="inline-flex items-center justify-center border border-[#cccccc] text-[#111111] text-[13px] font-medium tracking-[0.05em] uppercase px-6 sm:px-8 py-3.5 rounded active:scale-[0.98] hover:border-[#111111] hover:bg-[#fafafa] transition-all duration-200 text-center"
                    >
                      RECOMMENDED MACHINERY ↓
                    </a>
                  </div>
                </MotionReveal>
              </div>

              {/* Right Column: High-Res Application Image filling the space */}
              <MotionImageReveal direction="right" delay={0.15} duration={0.9} className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#111111] shadow-xl border border-[#e5e5e5] group">
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-[11px] font-mono tracking-wider uppercase flex justify-between z-10">
                    <span>{app.name}</span>
                    <span>Installed System</span>
                  </div>
                </div>
              </MotionImageReveal>
            </div>
          </div>
        </section>

        {/* Sector Overview & Case Study */}
        <section className="w-full bg-[#fafafa] py-8 sm:py-14 md:py-20 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <MotionReveal direction="left" duration={0.85} className="lg:col-span-7 space-y-4 sm:space-y-6">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#888888] block">
                  SECTOR OVERVIEW & PSYCHROMETRICS
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-[#111111] tracking-tight leading-snug">
                  Engineered specifically around the demands of {app.name}.
                </h2>
                <p className="text-[14px] sm:text-base md:text-[17px] text-[#444444] leading-relaxed">
                  {app.overview}
                </p>
              </MotionReveal>

              {app.caseStudy && (
                <MotionReveal direction="right" delay={0.18} duration={0.85} className="lg:col-span-5">
                  <div className="p-5 sm:p-8 bg-white border border-[#e0e0e0] rounded-md space-y-3 sm:space-y-4 shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold">
                      <span>✓ VERIFIED CASE STUDY</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-[#111111]">
                      {app.caseStudy.location}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-[#555555] leading-relaxed italic border-l-2 border-emerald-500 pl-3 sm:pl-4 py-1">
                      &ldquo;{app.caseStudy.result}&rdquo;
                    </p>
                  </div>
                </MotionReveal>
              )}
            </div>
          </div>
        </section>

        {/* Moisture Challenges vs Engineered Solutions */}
        <section className="w-full bg-white py-8 sm:py-14 md:py-20 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <MotionReveal direction="up" duration={0.75} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#111111] tracking-tight">
                Moisture Challenges & Engineered Solutions
              </h2>
            </MotionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column: Challenges */}
              <div className="space-y-4 sm:space-y-6">
                <MotionReveal direction="left" duration={0.65}>
                  <div className="flex items-center gap-3 pb-3 border-b border-[#111111]">
                    <h3 className="text-sm font-mono font-medium text-[#111111] uppercase tracking-wider">
                      CRITICAL SECTOR CHALLENGES
                    </h3>
                  </div>
                </MotionReveal>

                <div className="space-y-4 sm:space-y-6">
                  {app.challenges.map((challenge, idx) => (
                    <MotionReveal
                      key={challenge.title}
                      direction="up"
                      delay={idx * 0.1}
                      duration={0.65}
                    >
                      <div className="p-4 sm:p-6 bg-[#fafafa] border border-[#ebebeb] rounded-md space-y-1.5 sm:space-y-2 hover:border-[#cccccc] hover:bg-[#f5f5f5] hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#888888]">
                          <span>CHALLENGE 0{idx + 1}</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-medium text-[#111111]">
                          {challenge.title}
                        </h4>
                        <p className="text-[13px] sm:text-[14px] text-[#555555] leading-relaxed">
                          {challenge.desc}
                        </p>
                      </div>
                    </MotionReveal>
                  ))}
                </div>
              </div>

              {/* Right Column: Solutions */}
              <div className="space-y-4 sm:space-y-6">
                <MotionReveal direction="right" duration={0.65}>
                  <div className="flex items-center gap-3 pb-3 border-b border-[#111111]">
                    <h3 className="text-sm font-mono font-medium text-[#111111] uppercase tracking-wider">
                      OUR APPLIED SOLUTIONS
                    </h3>
                  </div>
                </MotionReveal>

                <div className="space-y-4 sm:space-y-6">
                  {app.solutions.map((solution, idx) => (
                    <MotionReveal
                      key={solution.title}
                      direction="up"
                      delay={0.08 + idx * 0.1}
                      duration={0.65}
                    >
                      <div className="p-4 sm:p-6 bg-[#f7f9f7] border border-emerald-100 rounded-md space-y-1.5 sm:space-y-2 hover:border-emerald-300 hover:bg-[#f0f6f0] hover:-translate-y-0.5 transition-all duration-300">
                        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-emerald-700">
                          <span>SOLUTION 0{idx + 1}</span>
                          <span>ENGINEERED FIX</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-medium text-[#111111]">
                          {solution.title}
                        </h4>
                        <p className="text-[13px] sm:text-[14px] text-[#444444] leading-relaxed">
                          {solution.desc}
                        </p>
                      </div>
                    </MotionReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Machinery Section */}
        <section id="models" className="w-full bg-[#fafafa] py-8 sm:py-14 md:py-20 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-[#e5e5e5] gap-3 sm:gap-4">
              <MotionReveal direction="left" duration={0.8}>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#777777] block mb-1.5 sm:mb-2">
                  RECOMMENDED EQUIPMENT
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#111111] tracking-tight">
                  Optimal Dehumidifiers for {app.name}
                </h2>
              </MotionReveal>
              <MotionReveal direction="right" delay={0.12} duration={0.8}>
                <p className="text-[13px] sm:text-[14px] text-[#555555] max-w-md font-normal leading-relaxed">
                  Pre-configured for the airflow, thermal load, and drainage requirements typical of {app.name.toLowerCase()} environments.
                </p>
              </MotionReveal>
            </div>

            <div
              className={`grid grid-cols-1 ${app.recommendedModels.length >= 3
                ? "md:grid-cols-2 lg:grid-cols-3"
                : "md:grid-cols-2 max-w-5xl mx-auto"
                } gap-6 sm:gap-8`}
            >
              {app.recommendedModels.map((model, idx) => {
                const isCeiling =
                  (model.code || "").includes("CMD") ||
                  (model.name || "").toLowerCase().includes("ceiling") ||
                  (model.type || "").toLowerCase().includes("ceiling");
                const isHome =
                  (model.code || "").includes("HOM") ||
                  (model.name || "").toLowerCase().includes("home") ||
                  (model.type || "").toLowerCase().includes("mobile") ||
                  (model.type || "").toLowerCase().includes("suite");

                const displayImage =
                  model.image ||
                  (isCeiling
                    ? "/products/mf-gdhd-26l (1).png"
                    : isHome
                      ? "/products/AQUARIA_SLIM_10_P.png"
                      : "/products/fral-fdnp-96.png");

                const displayAirflow =
                  model.airflow ||
                  (isCeiling ? "1,250 m³/h (735 CFM)" : isHome ? "380 m³/h (225 CFM)" : "2,800 m³/h (1,650 CFM)");

                const displayNoise =
                  model.noise ||
                  (isCeiling ? "46 dB(A) Silent" : isHome ? "38 dB(A) Sleep Mode" : "58 dB(A) Heavy Duty");

                const displayCoverage =
                  model.coverage ||
                  (isCeiling ? "Up to 5,000 sq.ft" : isHome ? "Up to 1,200 sq.ft" : "Up to 15,000 sq.ft");

                const displayDesc =
                  model.description ||
                  (isCeiling
                    ? "Concealed overhead ducted system engineered for silent, discreet moisture control."
                    : isHome
                      ? "Whisper-quiet intelligent dehumidifier with real-time ambient RH sensor and continuous drainage."
                      : "High-capacity continuous duty industrial dehumidifier for demanding moisture extraction.");

                return (
                  <MotionReveal
                    key={model.code}
                    direction="up"
                    delay={idx * 0.12}
                    duration={0.7}
                    className="h-full"
                  >
                    <div className="bg-white rounded-xl border border-[#e5e5e5] flex flex-col h-full overflow-hidden">
                      {/* Product Image Showcase */}
                      <Link
                        href={model.href}
                        className="relative aspect-[4/3] w-full bg-[#f6f6f6] overflow-hidden p-6 flex items-center justify-center border-b border-[#eeeeee] block"
                      >
                        <Image
                          src={displayImage}
                          alt={model.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </Link>

                      {/* Card Body */}
                      <div className="p-4 sm:p-7 flex flex-col flex-grow justify-between space-y-4 sm:space-y-6">
                        <div>
                          <Link href={model.href}>
                            <h3 className="text-lg sm:text-2xl font-light text-[#111111] tracking-tight hover:underline">
                              {model.name}
                            </h3>
                          </Link>
                          <p className="text-[13px] sm:text-[14px] text-[#666666] leading-relaxed line-clamp-2 mt-1 sm:mt-2">
                            {displayDesc}
                          </p>
                        </div>

                        {/* 4-Point Specifications Grid */}
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 py-3 sm:py-4 border-y border-[#f0f0f0] text-left">
                          <div>
                            <span className="block text-[9px] sm:text-[10px] font-mono uppercase text-[#888888] tracking-wider">
                              Daily Extraction
                            </span>
                            <span className="text-[13px] sm:text-[15px] font-medium text-[#111111] mt-0.5 block truncate">
                              {model.capacity}
                            </span>
                          </div>
                          <div>
                            <span className="block text-[9px] sm:text-[10px] font-mono uppercase text-[#888888] tracking-wider">
                              Airflow Rate
                            </span>
                            <span className="text-[13px] sm:text-[15px] font-medium text-[#111111] mt-0.5 block truncate">
                              {displayAirflow}
                            </span>
                          </div>
                          <div>
                            <span className="block text-[9px] sm:text-[10px] font-mono uppercase text-[#888888] tracking-wider">
                              Acoustic Rating
                            </span>
                            <span className="text-[13px] sm:text-[15px] font-medium text-[#111111] mt-0.5 block truncate">
                              {displayNoise}
                            </span>
                          </div>
                          <div>
                            <span className="block text-[9px] sm:text-[10px] font-mono uppercase text-[#888888] tracking-wider">
                              Coverage Area
                            </span>
                            <span className="text-[13px] sm:text-[15px] font-medium text-[#111111] mt-0.5 block truncate">
                              {displayCoverage}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 sm:pt-2">
                          <Link
                            href={model.href}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#111111] text-white text-[12px] font-medium tracking-[0.06em] uppercase py-3 px-3 rounded hover:bg-[#2a2a2a] active:scale-[0.98] transition-all duration-200 text-center"
                          >
                            <span>VIEW MODEL SPECS →</span>
                          </Link>
                          <a
                            href="#enquiry"
                            className="inline-flex items-center justify-center border border-[#cccccc] text-[#111111] text-[12px] font-medium tracking-[0.06em] uppercase py-3 px-4 rounded hover:border-[#111111] hover:bg-[#fafafa] active:scale-[0.98] transition-colors text-center"
                          >
                            REQUEST SIZING
                          </a>
                        </div>
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Explore Other Applications Grid */}
        <section className="w-full bg-white py-8 sm:py-14 md:py-20 border-b border-[#eeeeee] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-[#eeeeee]">
              <MotionReveal direction="left" duration={0.75}>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#888888] block mb-1.5 sm:mb-2">
                  CROSS-INDUSTRY EXPERTISE
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-[#111111] tracking-tight">
                  Explore Other Applications
                </h2>
              </MotionReveal>
              <MotionReveal direction="right" duration={0.75}>
                <Link
                  href="/applications"
                  className="text-[12px] sm:text-[13px] font-mono uppercase tracking-wider text-[#111111] hover:text-[#555555] transition-colors inline-flex items-center gap-2 mt-3 md:mt-0 group"
                >
                  <span>VIEW ALL 8 SECTORS</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </MotionReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherApplications.slice(0, 3).map((item, idx) => (
                <MotionReveal
                  key={item.id}
                  direction="up"
                  delay={idx * 0.12}
                  duration={0.65}
                >
                  <Link
                    href={`/applications/${item.id}`}
                    className="group relative aspect-[16/10] overflow-hidden rounded-md bg-[#1a1a1a] block shadow-xs hover:-translate-y-1 transition-transform duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 text-white">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded self-start">
                        {item.tag}
                      </span>
                      <div>
                        <h4 className="text-xl font-light tracking-tight uppercase group-hover:text-emerald-300 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[12px] text-white/70 line-clamp-1 mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Section pre-configured */}
        <EnquirySection />
      </main>

      <Footer />
    </div>
  );
}
