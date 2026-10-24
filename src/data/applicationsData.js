export const applicationsData = [
  {
    id: "hotels",
    name: "Hotels & Hospitality",
    tag: "INDOOR POOLS & SPAS",
    headline: "Luxury Climate Comfort for Atriums, Spas & Suites",
    subtitle:
      "Eliminate heavy moisture, dripping condensation, and persistent mold in hotel lobbies, indoor pools, and wellness sanctuaries while preserving interior architecture.",
    image: "/images/app-hotels.jpg",
    idealRH: "50% – 55% RH",
    temperatureRange: "20°C – 28°C",
    targetMetric: "Zero Window Condensation",
    overview:
      "Luxury hospitality spaces demand an invisible balance of thermal comfort and moisture extraction. Indoor pool enclosures, steam rooms, and expansive glass atriums introduce thousands of litres of water vapour into the air daily. Left unchecked, this humidity degrades acoustic ceiling tiles, fogs architectural glazing, and creates stale odors that undermine the guest experience.",
    challenges: [
      {
        title: "Glazing & Structural Condensation",
        desc: "Severe moisture buildup on exterior windows and architectural skylights leading to rust, staining, and ceiling decay.",
      },
      {
        title: "Chloramine Odor & Air Heaviness",
        desc: "High moisture holding volatile chloramines in suspension, creating stinging eyes and damp, humid breathing conditions for guests.",
      },
      {
        title: "Sub-surface Mold & Mildew",
        desc: "Latent moisture seeping into wall cavities, acoustic backing, and luxury wood finishes causing rapid material rot.",
      },
    ],
    solutions: [
      {
        title: "Concealed Ceiling Extraction",
        desc: "Overhead ducted systems hidden entirely within false ceilings, maintaining acoustic silence below 44 dB(A).",
      },
      {
        title: "Corrosion-Resistant Gold-Fin Coils",
        desc: "Hydrophilic and epoxy-coated evaporator coils engineered specifically to withstand chlorinated and saline spa atmospheres.",
      },
      {
        title: "Smart Dewpoint Modulation",
        desc: "Automated sensors track outdoor ambient temperatures to continuously keep glass surfaces above the indoor dewpoint.",
      },
    ],
    recommendedModels: [
      {
        code: "AMF-GDHD-56L",
        name: "AMFAH AMF-GDHD-56L Ceiling Dehumidifier",
        capacity: "56 L / Day",
        type: "Concealed Overhead Ducted",
        href: "/products/amf-gdhd-56l",
        image: "/products/mf-gdhd-26l (1).png",
        airflow: "600 m³/h",
        noise: "56 dB(A) Low Noise",
        coverage: "Up to 2,500 sq.ft",
        description: "Zero floor footprint ceiling-mounted ducted dehumidifier engineered for silent moisture extraction in luxury suites, clinics, and commercial environments.",
      },
      {
        code: "Aquaria-Slim-10P",
        name: "Aquaria Slim 10P - Olimpia Splendid (Italy)",
        capacity: "10 L / Day",
        type: "Ultra-Quiet Mobile Unit",
        href: "/products/aquaria-slim-10p",
        image: "/products/AQUARIA_SLIM_10_P.png",
        airflow: "120 m³/h",
        noise: "36 dB(A) Whisper Quiet",
        coverage: "Up to 200 sq.ft",
        description: "Italian designed compact ultra-quiet dehumidifier engineered for executive cabins, private suites, and diagnostic rooms.",
      },
      {
        code: "FRAL-FDNP-96",
        name: "AMFAH - FRAL FDNP 96 (Italy)",
        capacity: "96 L / Day",
        type: "Heavy-Duty Industrial Extractor",
        href: "/products/fral-fdnp-96",
        image: "/products/fral-fdnp-96.png",
        airflow: "1000 m³/h",
        noise: "52 dB(A) Industrial Grade",
        coverage: "Up to 4,000 sq.ft",
        description: "Professional Italian heavy-duty industrial dehumidifier with hot gas defrost and zinc-plated steel frame for demanding commercial conditions.",
      },
    ],
    caseStudy: {
      location: "5-Star Waterfront Resort & Spa",
      result: "Reduced indoor pool hall RH from 82% to a steady 52%, eliminating window condensation completely and cutting HVAC energy costs by 24%.",
    },
  },
  {
    id: "commercial",
    name: "Commercial Spaces",
    tag: "CORPORATE HEADQUARTERS",
    headline: "Optimized Indoor Air Quality for High-Density Workplaces",
    subtitle:
      "Boost cognitive productivity, prevent sick building syndrome, and protect sensitive server rooms and IT infrastructure with precision humidity balancing.",
    image: "/images/app-commercial.jpg",
    idealRH: "45% – 50% RH",
    temperatureRange: "21°C – 24°C",
    targetMetric: "ASHRAE 55 Comfort Standard",
    overview:
      "In modern corporate offices and commercial real estate, high occupant density and energy-efficient building envelopes can trap latent moisture. High humidity makes spaces feel clammy, degrades air filter efficiency, and fosters dust mite colonies. Our commercial systems maintain stable moisture setpoints without over-cooling, maximizing energy efficiency and workplace health.",
    challenges: [
      {
        title: "Thermal Clamminess & Fatigue",
        desc: "Occupants feel overheated even at low thermostat temperatures due to restricted skin evaporation in high relative humidity.",
      },
      {
        title: "Server Room Electrostatic & Corrosion",
        desc: "Uncontrolled moisture fluctuations threaten mission-critical server hardware, circuit boards, and network racks.",
      },
      {
        title: "HVAC Over-Cooling Waste",
        desc: "Air conditioning systems forced to run at chilling temperatures purely to condense moisture, wasting substantial electrical power.",
      },
    ],
    solutions: [
      {
        title: "Dedicated Outdoor Air Dehumidification",
        desc: "Pre-treating fresh ventilation air before it enters the central ductwork, stripping moisture without subcooling.",
      },
      {
        title: "Central BMS Protocol Integration",
        desc: "Direct BACnet and Modbus connectivity providing real-time RH telemetry to the central building management system.",
      },
      {
        title: "Ultra-Low Noise Acoustic Isolation",
        desc: "Vibration-damped scroll compressors engineered to operate silently above conference halls and executive boardrooms.",
      },
    ],
    recommendedModels: [
      {
        code: "AMF-GDHD-56L",
        name: "AMFAH AMF-GDHD-56L Ceiling Dehumidifier",
        capacity: "56 L / Day",
        type: "Concealed Overhead Ducted",
        href: "/products/amf-gdhd-56l",
        image: "/products/amf-gdhd-56l.jpeg",
        airflow: "600 m³/h",
        noise: "56 dB(A) Low Noise",
        coverage: "Up to 2,500 sq.ft",
        description: "Zero floor footprint ceiling-mounted ducted dehumidifier engineered for silent moisture extraction in luxury suites, clinics, and commercial environments.",
      },
      {
        code: "FRAL-FDNP-62",
        name: "AMFAH - FRAL SUPERDRY 62 (Italy)",
        capacity: "62 L / Day",
        type: "Commercial Extractor Unit",
        href: "/products/fral-fdnp-62",
        image: "/products/fral-fdnp-62.png",
        airflow: "750 m³/h",
        noise: "51 dB(A) Low Noise",
        coverage: "Up to 3,000 sq.ft",
        description: "Italian commercial dehumidifier designed for high-turnover public spaces, corporate archives, and logistics hubs.",
      },
    ],
    caseStudy: {
      location: "Financial District Corporate Tower",
      result: "Stabilized 40 floors of open-plan offices at 48% RH, dropping occupant sick leave reports by 18% and optimizing chiller plant efficiency.",
    },
  },
  {
    id: "warehouses",
    name: "Warehouses & Logistics",
    tag: "BULK LOGISTICS",
    headline: "Protecting Inventory, Corrugated Packaging & Steel Assets",
    subtitle:
      "Prevent collapsed cardboard cartons, rusted machinery parts, and mold spores across high-cube distribution centers and ambient storage terminals.",
    image: "/images/app-warehouses.jpg",
    idealRH: "40% – 50% RH",
    temperatureRange: "10°C – 35°C",
    targetMetric: "100% Package Integrity",
    overview:
      "Corrugated cardboard cartons lose over 50% of their stacking compression strength when relative humidity exceeds 65%. In large logistics warehouses, nocturnal temperature drops cause condensation to settle onto stored metals, electronic parts, and dry goods. Humidity Solutions provides high-volume airflow dehumidifiers that stabilize vast cubic volumes efficiently.",
    challenges: [
      {
        title: "Hygroscopic Packaging Collapse",
        desc: "Cardboard boxes absorb airborne water vapor, causing pallet stacks to sag, buckle, and crush underlying inventory.",
      },
      {
        title: "Surface Oxidation & Corrosion",
        desc: "Unprotected steel components, automotive parts, and machinery develop micro-rust when exposed to humid ambient air.",
      },
      {
        title: "Floor Sweating & Slip Hazards",
        desc: "Warm moisture condensing on cold concrete slab floors, creating serious slip hazards for forklifts and personnel.",
      },
    ],
    solutions: [
      {
        title: "High-Throw Destratification Airflow",
        desc: "Long-range air delivery nozzles that circulate dry air uniformly through narrow aisle racks and high-bay ceilings.",
      },
      {
        title: "Hot-Gas Defrost Capability",
        desc: "Continuous moisture extraction even in unheated cold warehouses operating at ambient temperatures down to 3°C.",
      },
      {
        title: "Heavy-Gauge Steel Roll-Cage Casing",
        desc: "Impact-resistant industrial casings built to withstand tough warehouse logistics and forklift environments.",
      },
    ],
    recommendedModels: [
      {
        code: "FRAL-FDNP-96",
        name: "AMFAH - FRAL FDNP 96 (Italy)",
        capacity: "96 L / Day",
        type: "Heavy-Duty Industrial Extractor",
        href: "/products/fral-fdnp-96",
        image: "/products/fral-fdnp-96.png",
        airflow: "1000 m³/h",
        noise: "52 dB(A) Industrial Grade",
        coverage: "Up to 4,000 sq.ft",
        description: "Professional Italian heavy-duty industrial dehumidifier with hot gas defrost and zinc-plated steel frame for demanding commercial conditions.",
      },
      {
        code: "AMF-138DMP",
        name: "AMFAH AMF-138DMP Industrial Mobile",
        capacity: "138 L / Day",
        type: "Mobile Heavy-Duty Commercial",
        href: "/products/amf-138dmp",
        image: "/products/amf-138dmp.png",
        airflow: "1,200 m³/h",
        noise: "58 dB(A) Industrial Grade",
        coverage: "Up to 8,000 sq.ft",
        description: "High-capacity mobile industrial dehumidifier engineered for rapid moisture extraction across large warehouse bays and distribution centers.",
      },
    ],
    caseStudy: {
      location: "Regional FMCG Fulfillment Depot",
      result: "Maintained sub-50% RH across a 150,000 cu. ft. high-rack storage facility, eliminating packaging crush damage and wet slab sweating completely.",
    },
  },
  {
    id: "pharma",
    name: "Pharmaceuticals & Cleanrooms",
    tag: "GMP CLEANROOMS",
    headline: "Precision Psychrometric Control for Strict ISO Standards",
    subtitle:
      "Maintain stringent relative humidity setpoints for hygroscopic active pharmaceutical ingredients (APIs), tablet compression, and sterile packaging lines.",
    image: "/images/app-pharma.jpg",
    idealRH: "20% – 45% RH",
    temperatureRange: "18°C – 22°C",
    targetMetric: "±2% Setpoint Tolerance",
    overview:
      "Pharmaceutical production cannot tolerate humidity deviations. Active pharmaceutical ingredients are highly hygroscopic; excess moisture causes powder caking, inconsistent capsule filling, erratic dissolving rates, and reduced shelf stability. Our pharmaceutical climate systems deliver continuous ±2% RH regulation compliant with FDA, cGMP, and ISO cleanroom protocols.",
    challenges: [
      {
        title: "Powder Caking & Agglomeration",
        desc: "Hygroscopic powders clumping in tablet press hoppers, disrupting uniform dosage and shutting down high-speed production lines.",
      },
      {
        title: "Soft Gel Capsule Deformity",
        desc: "Gelatin capsules sweating or sticking together in packaging blister packs when drying room moisture is not strictly controlled.",
      },
      {
        title: "Microbial Proliferation Risks",
        desc: "Elevated cleanroom moisture levels encouraging microbial colonies in sterile pharmaceutical preparation areas.",
      },
    ],
    solutions: [
      {
        title: "Stainless Steel 304 Hygienic Housing",
        desc: "Smooth, non-shedding stainless steel enclosures designed for rigorous pharmaceutical washdown and sanitisation.",
      },
      {
        title: "Multi-Stage HEPA Air Filtration",
        desc: "Integrated H13/H14 HEPA and carbon filtration ensuring particle-free dry air delivery into Grade A/B cleanrooms.",
      },
      {
        title: "Validated IQ/OQ Documentation Support",
        desc: "Equipment supplied with complete technical qualification packages and traceable sensor calibration certificates.",
      },
    ],
    recommendedModels: [
      {
        code: "FRAL-FDNP-96",
        name: "AMFAH - FRAL FDNP 96 (Italy)",
        capacity: "96 L / Day",
        type: "Heavy-Duty Industrial Extractor",
        href: "/products/fral-fdnp-96",
        image: "/products/fral-fdnp-96.png",
        airflow: "1000 m³/h",
        noise: "52 dB(A) Industrial Grade",
        coverage: "Up to 4,000 sq.ft",
        description: "Professional Italian heavy-duty industrial dehumidifier with hot gas defrost and zinc-plated steel frame for demanding commercial conditions.",
      },
      {
        code: "AMF-SS-180L",
        name: "AMFAH AMF-SS-180L Cleanroom Stainless",
        capacity: "180 L / Day",
        type: "AISI 304 Sanitary Stainless",
        href: "/products/amf-ss-180l",
        image: "/products/amf-ss-180l.png",
        airflow: "1,800 m³/h",
        noise: "56 dB(A) Cleanroom Spec",
        coverage: "Up to 12,000 sq.ft",
        description: "Sanitary Grade AISI 304 stainless steel industrial dehumidifier engineered for pharmaceutical cleanrooms, API formulation suites, and GMP environments.",
      },
    ],
    caseStudy: {
      location: "Biotech Formulation Laboratory",
      result: "Engineered a closed-loop drying suite maintaining 28% ±1.5% RH for effervescent tablet compression, increasing batch yield by 34%.",
    },
  },
  {
    id: "food",
    name: "Food Processing",
    tag: "HYGIENIC PRODUCTION",
    headline: "Preventing Condensation Drips, Microbial Growth & Product Loss",
    subtitle:
      "Protect chocolate panning, bakeries, meat chilling rooms, and cheese curing cellars with sanitary, washdown-ready moisture control systems.",
    image: "/images/app-food.jpg",
    idealRH: "35% – 55% RH",
    temperatureRange: "4°C – 25°C",
    targetMetric: "HACCP & FDA Moisture Standards",
    overview:
      "In food and confectionery processing, hygiene and moisture management are inseparable. Steam from hot washdowns easily condenses on cold overhead pipes and ceilings, threatening food safety through dripping. At the same time, sugar and starch ingredients absorb moisture instantly. Humidity Solutions engineers sanitary dehumidifiers that ensure food safety and uniform quality.",
    challenges: [
      {
        title: "Overhead Ceiling Condensation Drips",
        desc: "Thermal vapor condensing on cold ceilings and dripping onto open processing lines, creating serious biological contamination risks.",
      },
      {
        title: "Sugar Bloom & Confectionery Sticking",
        desc: "Moisture dissolving surface sugars on chocolate, candies, and jellies, causing gray blooming and sticky, unsellable batches.",
      },
      {
        title: "Extended Sanitation Drying Downtime",
        desc: "Facilities waiting hours for floors, walls, and conveyor belts to dry after washdowns before restarting production shifts.",
      },
    ],
    solutions: [
      {
        title: "Sanitary Washdown Construction",
        desc: "Sloped internal drain pans and corrosion-proof components preventing stagnant water pooling inside the machinery.",
      },
      {
        title: "Rapid Post-Washdown Dehumidification",
        desc: "High-volume air turnover drying production halls within 45 minutes of washdown, drastically reducing operational downtime.",
      },
      {
        title: "Low-Temperature Operation",
        desc: "Effective water extraction down to 4°C for meat cutting rooms, cold curing cellars, and spiral freezer entry points.",
      },
    ],
    recommendedModels: [
      {
        code: "AMF-SS-180L",
        name: "AMFAH AMF-SS-180L Food-Grade Stainless",
        capacity: "180 L / Day",
        type: "AISI 304 Sanitary Washdown Unit",
        href: "/products/amf-ss-180l",
        image: "/products/amf-ss-180l.png",
        airflow: "1,800 m³/h",
        noise: "56 dB(A) Washdown Ready",
        coverage: "Up to 12,000 sq.ft",
        description: "Corrosion-resistant stainless steel dehumidifier designed to eliminate condensation drips and maintain strict hygiene in food and confectionery processing halls.",
      },
      {
        code: "AMF-50-DMC-SS",
        name: "AMFAH AMF-50 DMC-SS Stainless",
        capacity: "50 L / Day",
        type: "Compact Stainless Food Unit",
        href: "/products/amf-50-dmc-ss",
        image: "/products/amfah-50-dmc-ss(1).png",
        airflow: "450 m³/h",
        noise: "48 dB(A) Low Noise",
        coverage: "Up to 2,500 sq.ft",
        description: "Food-grade stainless steel dehumidifier engineered for chocolate cooling tunnels, meat curing rooms, and dairy packaging lines.",
      },
    ],
    caseStudy: {
      location: "Commercial Chocolate & Confectionery Plant",
      result: "Maintained 42% RH in the cooling and packaging tunnels, completely eliminating sugar bloom and reducing post-sanitation dry time by 65%.",
    },
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    tag: "PRECISION ENGINEERING",
    headline: "Guarding Precision Tooling, Electronics & Advanced Alloys",
    subtitle:
      "Prevent micro-oxidation on CNC machined components, solder bridge defects on printed circuit boards, and erratic lithium battery cell curing.",
    image: "/images/app-manufacturing.jpg",
    idealRH: "30% – 45% RH",
    temperatureRange: "18°C – 26°C",
    targetMetric: "Zero Surface Oxidation",
    overview:
      "Precision manufacturing requires absolute environmental repeatability. High ambient humidity leads to microscopic rust on polished metal surfaces within hours, compromises resin bond strengths in aerospace composites, and causes electrostatic volatility in electronics fabrication. Our industrial systems deliver rock-solid climate stability.",
    challenges: [
      {
        title: "Micro-Corrosion on Finished Metals",
        desc: "Invisible moisture film oxidizing ground steel bearings, automotive engine blocks, and optical tooling between machining steps.",
      },
      {
        title: "PCB Solder Defects & Delamination",
        desc: "Surface mount components absorbing ambient humidity that vaporizes explosively during reflow soldering (the 'popcorn' effect).",
      },
      {
        title: "Powder Coating & Adhesion Failures",
        desc: "Moisture trapped beneath primers and industrial coatings resulting in blistering, flaking, and premature warranty failures.",
      },
    ],
    solutions: [
      {
        title: "Continuous 24/7 Duty Cycle Engineering",
        desc: "Heavy-duty scroll compressors and industrial grade fans designed for non-stop annual operation in rigorous plants.",
      },
      {
        title: "Precision Microprocessor RH Triggers",
        desc: "Instant modulating controls that respond dynamically as ambient humidity rises during shift changes or monsoon weather.",
      },
      {
        title: "High-Static Pressure Ducted Capability",
        desc: "Fans capable of pushing dry air through extensive internal duct networks directly onto critical production machinery.",
      },
    ],
    recommendedModels: [
      {
        code: "FRAL-FDNP-96",
        name: "AMFAH - FRAL FDNP 96 (Italy)",
        capacity: "96 L / Day",
        type: "Heavy-Duty Industrial Extractor",
        href: "/products/fral-fdnp-96",
        image: "/products/fral-fdnp-96.png",
        airflow: "1000 m³/h",
        noise: "52 dB(A) Industrial Grade",
        coverage: "Up to 4,000 sq.ft",
        description: "Professional Italian heavy-duty industrial dehumidifier with hot gas defrost and zinc-plated steel frame for demanding commercial conditions.",
      },
      {
        code: "AMF-JYDH-60",
        name: "AMFAH AMF-JYDH-60 Heavy-Duty",
        capacity: "60 L / Day",
        type: "Industrial Precision Workshop Unit",
        href: "/products/amf-jydh-60",
        image: "/products/amf-jydh-60.png",
        airflow: "750 m³/h",
        noise: "52 dB(A) Heavy Duty",
        coverage: "Up to 3,500 sq.ft",
        description: "Heavy-duty continuous dehumidifier safeguarding precision CNC machinery, automotive tooling, and printed circuit board assembly lines from micro-oxidation.",
      },
    ],
    caseStudy: {
      location: "Aerospace Precision CNC Machining Facility",
      result: "Controlled relative humidity at 38% RH across 4 manufacturing bays, saving an estimated $180,000 annually in scrapped corroded components.",
    },
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tag: "CLINICAL & DIAGNOSTIC",
    headline: "Sterile Climate Safeguards for Diagnostic Labs & Surgical Suites",
    subtitle:
      "Protect sensitive MRI and CT imaging equipment, preserve sterile surgical pack inventory, and prevent mold growth in critical patient zones.",
    image: "/images/app-healthcare.jpg",
    idealRH: "40% – 50% RH",
    temperatureRange: "20°C – 23°C",
    targetMetric: "AAMI / Joint Commission Standards",
    overview:
      "In healthcare environments, relative humidity is a patient safety mandate. Sterile processing departments require sub-50% RH to prevent surgical instrument packs from absorbing moisture and becoming unsterile. Meanwhile, multi-million dollar MRI scanners and automated hematology analyzers produce substantial latent heat requiring constant psychrometric balancing.",
    challenges: [
      {
        title: "Sterile Pack Moisture Strike-Through",
        desc: "Sterilized surgical wraps absorbing ambient moisture, allowing bacteria to migrate into sterile trays and forcing costly re-sterilization.",
      },
      {
        title: "MRI & Medical Electronics Downtime",
        desc: "Condensation forming inside sensitive medical imaging magnet chillers and laser diagnostic systems, causing diagnostic shutdown.",
      },
      {
        title: "Airborne Microbial & Fungal Proliferation",
        desc: "Elevated humidity facilitating the reproduction of airborne Aspergillus and other opportunistic pathogens in patient wards.",
      },
    ],
    solutions: [
      {
        title: "Hospital-Grade Antimicrobial Coils",
        desc: "UV-C germicidal compatible coils with antimicrobial fin treatments preventing bio-film formation inside the unit.",
      },
      {
        title: "True Fail-Safe Redundant Systems",
        desc: "Dual-compressor modular units that maintain 50% capacity in the event of primary circuit servicing.",
      },
      {
        title: "Concealed Overhead Ducted Sizing",
        desc: "Quiet ceiling installation completely separated from the sterile field, accessible for filter changes outside clean rooms.",
      },
    ],
    recommendedModels: [
      {
        code: "AMF-GDHD-56L",
        name: "AMFAH AMF-GDHD-56L Ceiling Dehumidifier",
        capacity: "56 L / Day",
        type: "Concealed Overhead Ducted",
        href: "/products/amf-gdhd-56l",
        image: "/products/mf-gdhd-26l (1).png",
        airflow: "600 m³/h",
        noise: "56 dB(A) Low Noise",
        coverage: "Up to 2,500 sq.ft",
        description: "Zero floor footprint ceiling-mounted ducted dehumidifier engineered for silent moisture extraction in luxury suites, clinics, and commercial environments.",
      },
      {
        code: "Aquaria-Slim-10P",
        name: "Aquaria Slim 10P - Olimpia Splendid (Italy)",
        capacity: "10 L / Day",
        type: "Ultra-Quiet Mobile Unit",
        href: "/products/aquaria-slim-10p",
        image: "/products/AQUARIA_SLIM_10_P.png",
        airflow: "120 m³/h",
        noise: "36 dB(A) Whisper Quiet",
        coverage: "Up to 200 sq.ft",
        description: "Italian designed compact ultra-quiet dehumidifier engineered for executive cabins, private suites, and diagnostic rooms.",
      },
    ],
    caseStudy: {
      location: "Metropolitan Hospital Sterile Processing Center",
      result: "Maintained surgical wrap storage at a constant 44% RH year-round, achieving 100% compliance with Joint Commission sterilization guidelines.",
    },
  },
  {
    id: "gyms",
    name: "Gyms & Wellness",
    tag: "ATHLETIC CLUBS",
    headline: "Rapid Latent Moisture Extraction for Modern Fitness Centers",
    subtitle:
      "Extract thousands of litres of sweat and breath vapor from high-intensity training zones, spin studios, and locker rooms for fresh, odor-free air.",
    image: "/images/app-gyms.jpg",
    idealRH: "45% – 50% RH",
    temperatureRange: "18°C – 22°C",
    targetMetric: "Clean, High-Oxygen Atmosphere",
    overview:
      "A high-intensity workout releases up to 1.5 litres of moisture per athlete per hour into the room air. When dozens of members exercise simultaneously, gym air quickly becomes saturated, humid, and stale. Fog covers mirrors, sweat clings to rubber flooring, and rubber weights develop musty bacterial smells. Our high-airflow dehumidifiers create an energizing, crisp training climate.",
    challenges: [
      {
        title: "Saturated Heavy Air & Stale Odors",
        desc: "Persistent moisture trapping volatile body odors and perspiration aromas, making the gym feel suffocating and unpleasant.",
      },
      {
        title: "Fogged Mirrors & Slippery Rubber Mats",
        desc: "High dewpoint causing moisture to slick across weightlifting mats, dumbbell handles, and floor tiles, creating injury liability.",
      },
      {
        title: "Locker Room Mold & Tile Grout Rot",
        desc: "Showers running continuously in locker rooms breeding persistent black mold in ceiling corners and tile grout lines.",
      },
    ],
    solutions: [
      {
        title: "High-Volume Air Turnover Fans",
        desc: "Powerful EC fans designed to cycle gym air 8 to 12 times per hour, rapidly pulling perspiration vapor away from athletes.",
      },
      {
        title: "Continuous High-Lift Condensate Pumps",
        desc: "Built-in automated pumps lifting condensed water up to 6 meters into main building drainage without manual bucket emptying.",
      },
      {
        title: "Washable Anti-Odor Carbon Pre-Filters",
        desc: "High-porosity activated carbon filtration trapping airborne sweat particles and odors simultaneously with moisture removal.",
      },
    ],
    recommendedModels: [
      {
        code: "AMF-GDHD-56L",
        name: "AMFAH AMF-GDHD-56L Ceiling Dehumidifier",
        capacity: "56 L / Day",
        type: "Concealed Overhead Ducted",
        href: "/products/amf-gdhd-56l",
        image: "/products/amf-gdhd-56l.jpeg",
        airflow: "600 m³/h",
        noise: "56 dB(A) Low Noise",
        coverage: "Up to 2,500 sq.ft",
        description: "Zero floor footprint ceiling-mounted ducted dehumidifier engineered for silent moisture extraction in luxury suites, clinics, and commercial environments.",
      },
      {
        code: "AMF-AQUA-50",
        name: "AMFAH AMF-AQUA 50 (High Humidity & Spas)",
        capacity: "50 L / Day",
        type: "Corrosion-Resistant Pool & Spa Unit",
        href: "/products/amf-aqua-50",
        image: "/products/amf-aqua-50.png",
        airflow: "450 m³/h",
        noise: "46 dB(A) Low Noise",
        coverage: "Up to 2,500 sq.ft",
        description: "Corrosion-resistant high-capacity dehumidifier built with epoxy-coated coils for wet wellness clubs, indoor pools, and locker rooms.",
      },
    ],
    caseStudy: {
      location: "Premium 20,000 sq ft Athletic Club & Crossfit Arena",
      result: "Installed ducted ceiling units that dropped peak evening gym RH from 78% to 46%, eliminating mirror fogging and significantly enhancing member retention.",
    },
  },
];

export function getApplicationBySlug(slug) {
  if (!slug) return null;
  return applicationsData.find((app) => app.id.toLowerCase() === slug.toLowerCase()) || null;
}
