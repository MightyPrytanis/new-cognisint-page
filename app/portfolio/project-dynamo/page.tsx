import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ImageLightbox } from "@/components/image-lightbox"
import publication from "@/content/project-dynamo/publication.json"
import {
  ArrowLeft,
  ArrowUpRight,
  BatteryCharging,
  Boxes,
  Download,
  Factory,
  FileText,
  Gauge,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Project Dynamo | Future Vehicle Concept | Cognisint",
  description:
    "An independent future-vehicle concept for a North American global automaker: nine specialized models, one electric-drive platform, and battery-electric or generator-extended energy strategies.",
}

const assetRoot = "/projects/project-dynamo"

const vehicles = [
  {
    slug: "captain",
    name: "Dynamo Captain",
    role: "Compact sedan",
    profile: "Low",
    src: `${assetRoot}/sedan.png`,
    length: "181.8 in",
    width: "72.2 in",
    weight: "3,590 / 3,670 lb",
    torque: "295 lb-ft",
    batteries: "32 / 72 kWh",
    generator: "80 kW",
    fuel: "39 mpg",
    acceleration: "6.1 sec",
    speed: "118 / 75 mph",
  },
  {
    slug: "fastback",
    name: "Dynamo Fastback",
    role: "Five-door hatch",
    profile: "Low",
    src: `${assetRoot}/fastback.png`,
    length: "179.5 in",
    width: "72.4 in",
    weight: "3,520 / 3,600 lb",
    torque: "310 lb-ft",
    batteries: "32 / 72 kWh",
    generator: "80 kW",
    fuel: "38 mpg",
    acceleration: "5.7 sec",
    speed: "120 / 75 mph",
  },
  {
    slug: "estate",
    name: "Dynamo Estate",
    role: "Compact sport wagon",
    profile: "Low",
    src: `${assetRoot}/estate.png`,
    length: "186.2 in",
    width: "72.6 in",
    weight: "3,790 / 3,860 lb",
    torque: "315 lb-ft",
    batteries: "36 / 78 kWh",
    generator: "85 kW",
    fuel: "37 mpg",
    acceleration: "6.4 sec",
    speed: "115 / 75 mph",
  },
  {
    slug: "xtour",
    name: "Dynamo XTour",
    role: "Compact crossover",
    profile: "Medium",
    src: `${assetRoot}/crossover.png`,
    length: "178.8 in",
    width: "73.4 in",
    weight: "3,940 / 4,000 lb",
    torque: "335 lb-ft",
    batteries: "38 / 78 kWh",
    generator: "90 kW",
    fuel: "34 mpg",
    acceleration: "6.2 sec",
    speed: "112 / 75 mph",
  },
  {
    slug: "highroad",
    name: "Dynamo Highroad",
    role: "Three-row SUV",
    profile: "High",
    src: `${assetRoot}/suv.png`,
    length: "194.0 in",
    width: "77.4 in",
    weight: "4,740 / 4,860 lb",
    torque: "500 lb-ft",
    batteries: "45 / 105 kWh",
    generator: "120 kW",
    fuel: "28 mpg",
    acceleration: "5.8 sec",
    speed: "112 / 70 mph",
  },
  {
    slug: "constellation",
    name: "Dynamo Constellation",
    role: "Passenger minivan",
    profile: "High",
    src: `${assetRoot}/constellation.png`,
    length: "196.5 in",
    width: "76.5 in",
    weight: "4,480 / 4,560 lb",
    torque: "360 lb-ft",
    batteries: "42 / 95 kWh",
    generator: "105 kW",
    fuel: "31 mpg",
    acceleration: "7.1 sec",
    speed: "105 / 70 mph",
  },
  {
    slug: "taskvan",
    name: "Dynamo TaskVan",
    role: "Mid-size commercial van",
    profile: "High",
    src: `${assetRoot}/taskvan-commercial.png`,
    length: "196.5 in",
    width: "76.5 in",
    weight: "4,260 / 4,340 lb",
    torque: "360 lb-ft",
    batteries: "42 / 95 kWh",
    generator: "105 kW",
    fuel: "32 mpg",
    acceleration: "7.3 sec",
    speed: "105 / 70 mph",
  },
  {
    slug: "foreman",
    name: "Dynamo Foreman",
    role: "Mid-size four-door pickup",
    profile: "Medium",
    src: `${assetRoot}/foreman-v2.png`,
    length: "200.5 in",
    width: "76.8 in",
    weight: "4,450 / 4,560 lb",
    torque: "420 lb-ft",
    batteries: "42 / 90 kWh",
    generator: "105 kW",
    fuel: "30 mpg",
    acceleration: "6.3 sec",
    speed: "110 / 70 mph",
  },
  {
    slug: "ranch",
    name: "Dynamo Ranch",
    role: "Full-size four-door pickup",
    profile: "High",
    src: `${assetRoot}/ranch-v2.png`,
    length: "211.0 in",
    width: "79.2 in",
    weight: "5,060 / 5,200 lb",
    torque: "540 lb-ft",
    batteries: "52 / 115 kWh",
    generator: "130 kW",
    fuel: "25 mpg",
    acceleration: "5.9 sec",
    speed: "110 / 70 mph",
  },
]

const architectureTypes = [
  {
    title: "Conventional ICE",
    path: "Fuel → engine → transmission → wheels",
    description:
      "The engine must operate across changing speeds and loads, and a multispeed transmission keeps it within a usable range.",
  },
  {
    title: "Conventional hybrid",
    path: "Fuel + battery → engine/motor/transmission → wheels",
    description:
      "Efficient and proven, but it retains a mechanical engine-to-wheel path while adding motors, power electronics, and a battery.",
  },
  {
    title: "Dynamo petro-electric",
    path: "Fuel → Dynamo Module → electricity → battery/motor → wheels",
    description:
      "Project Dynamo’s product term for a plug-in series hybrid. Grid energy or a matched prime mover charges the battery, but only the traction motors drive the wheels.",
  },
  {
    title: "Battery electric",
    path: "Grid → battery → motor → wheels",
    description:
      "The simplest propulsion system and lowest scheduled maintenance, but every trip depends on stored battery energy and charging access.",
  },
]

const comparison = [
  {
    type: "Dynamo PE target",
    status: "Concept",
    basis: "Simulated design target",
    weight: "3,590 lb",
    energy: "39 mpg generator-running",
    battery: "32 kWh",
    torque: "295 lb-ft",
    zeroToSixty: "6.1 sec",
    maintenance: "$6,000",
    annualEnergy: "$759",
    best: "105 mi electric target + rapid refueling",
  },
  {
    type: "Dynamo BEV target",
    status: "Concept",
    basis: "Simulated design target",
    weight: "3,670 lb",
    energy: "28 kWh / 100 mi",
    battery: "72 kWh",
    torque: "295 lb-ft",
    zeroToSixty: "5.9 sec",
    maintenance: "$4,575",
    annualEnergy: "$571",
    best: "Lowest energy and maintenance burden",
  },
]

const particleStreams = [
  {
    color: "#0288D1",
    particles: Array.from({ length: 230 }, (_, index) => {
      const x = -20 + index * (1240 / 229)
      const envelope = 0.48 + 0.52 * Math.sin((index / 229) * Math.PI)
      const y = 178 + Math.sin(index * 0.092) * 76 * envelope + Math.sin(index * 0.027) * 18
      return { x, y, radius: 0.8 + (index % 9 === 0 ? 1.15 : index % 4 === 0 ? 0.45 : 0), opacity: 0.24 + envelope * 0.58 }
    }),
  },
  {
    color: "#6AA58E",
    particles: Array.from({ length: 210 }, (_, index) => {
      const x = -20 + index * (1240 / 209)
      const envelope = 0.38 + 0.62 * Math.sin((index / 209) * Math.PI)
      const y = 208 + Math.sin(index * 0.071 + 1.4) * 48 * envelope + Math.cos(index * 0.021) * 14
      return { x, y, radius: 0.7 + (index % 11 === 0 ? 0.9 : index % 5 === 0 ? 0.35 : 0), opacity: 0.18 + envelope * 0.48 }
    }),
  },
  {
    color: "#0F6EDB",
    particles: Array.from({ length: 190 }, (_, index) => {
      const x = -20 + index * (1240 / 189)
      const envelope = 0.32 + 0.68 * Math.sin((index / 189) * Math.PI)
      const y = 155 + Math.sin(index * 0.112 + 2.2) * 28 * envelope + Math.cos(index * 0.037) * 10
      return { x, y, radius: 0.6 + (index % 13 === 0 ? 0.85 : 0), opacity: 0.14 + envelope * 0.4 }
    }),
  },
]

function ParticleWaveform({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute overflow-hidden opacity-20 ${className}`}>
      <svg viewBox="0 0 1200 360" fill="none" preserveAspectRatio="none" className="h-full w-full">
        {particleStreams.map((stream) => (
          <g key={stream.color} fill={stream.color}>
            {stream.particles.map((particle, index) => (
              <circle
                key={index}
                cx={particle.x}
                cy={particle.y}
                r={particle.radius}
                opacity={particle.opacity}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}

function ArchitectureSequence() {
  return (
    <>
      <section id="architecture" className="bg-[#e9e6dc] py-16 text-[#071522] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9c2826]">The architecture</p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            The energy module changes. The propulsion system does not.
          </h2>
          <p className="mt-5 text-2xl font-medium italic text-[#3A6B5C]">
            Technological innovation that fairly crackles with electricity.
          </p>
          <figure className="mt-10 overflow-hidden border border-black/15 bg-[#071522]">
            <ImageLightbox
              src={`${assetRoot}/architecture.png`}
              alt="Project Dynamo battery-electric and petro-electric architecture"
              caption="Project Dynamo battery-electric and petro-electric architecture"
            >
              <Image
                src={`${assetRoot}/architecture.png`}
                alt="Project Dynamo battery-electric and petro-electric architecture"
                width={1672}
                height={941}
                loading="eager"
                className="h-auto w-full"
              />
            </ImageLightbox>
          </figure>
          <div className="mt-8 grid gap-6 text-lg leading-8 text-slate-700 lg:grid-cols-2">
            <p>
              Battery-electric models devote the available package and mass budget to stored electricity.
              Petro-Electric models carry a smaller plug-in traction battery plus a vehicle-specific Dynamo Module:
              a prime mover turning a generator, with no mechanical connection to the wheels. Grid recharging can
              supply routine electric travel in either energy strategy.
            </p>
            <p>
              Project Dynamo uses “Petro-Electric” as its product term for a series hybrid. It names the
              architecture, not a multi-fuel vehicle. Gasoline-electric,
              diesel/biodiesel-electric, hydrogen-electric, or future-energy versions require separately engineered
              modules, storage, safety, thermal, emissions, and certification systems.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              [
                Boxes,
                "Two energy bays",
                "The Forward Energy Bay accepts the generator cassette or supplemental BEV battery and power electronics. The Amidships Energy Bay, protected ahead of the rear axle and below the second-row cushion line, carries PE fuel storage or vehicle-specific BEV battery capacity while preserving the rear drive and suspension zone.",
              ],
              [
                Zap,
                "One electrical handshake",
                "A regulated high-voltage junction gives either front module the same connection to the traction bus. The battery remains the immediate power buffer, so only the electric drive units propel the wheels.",
              ],
              [
                Gauge,
                "Separate thermal jobs",
                "The PE cassette uses its own high-temperature engine circuit. Battery, inverter, and drive-unit loops remain independently controlled at the lower temperatures those components require.",
              ],
              [
                Wrench,
                "Condition-aware operation",
                "A sealed fuel system and software-supervised maintenance cycles address long battery-only intervals. Route preview can preserve charge before grades, while staged generator loading aims to make sound and response feel intentional rather than disconnected.",
              ],
            ].map(([Icon, title, text]) => {
              const IconComponent = Icon as typeof Boxes
              return (
                <article key={title as string} className="border border-black/10 bg-[#f6f4ee] p-6">
                  <IconComponent className="h-7 w-7 text-[#3A6B5C]" />
                  <h3 className="mt-4 text-xl font-semibold">{title as string}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text as string}</p>
                </article>
              )
            })}
          </div>
          <div className="mt-8 border border-slate-200 bg-[#f6f4ee] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9c2826]">
              The locomotive comparison
            </p>
            <p className="mt-3 max-w-5xl text-lg leading-8 text-slate-700">
              Conceptually, Dynamo follows the diesel-electric locomotives used across North America on
              non-electrified rail lines: a liquid-fueled prime mover turns a generator, an electrical bus carries
              the power, and traction motors provide propulsion. Every Petro-Electric Dynamo is a plug-in series
              hybrid: its traction battery can recharge from the grid, buffer power, recover braking energy, and
              cover routine miles without running the prime mover.
            </p>
          </div>
          <div className="mt-8 border-l-4 border-[var(--forest)] bg-white p-6">
            <div className="flex items-start gap-4">
              <BatteryCharging className="mt-1 h-7 w-7 shrink-0 text-[var(--forest)]" />
              <div>
                <h3 className="text-2xl font-semibold">
                  All-wheel drive, traction control, and regenerative braking are common to every Dynamo.
                </h3>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  Front and rear electric drive units provide electronically managed all-wheel drive, while
                  traction and stability controls continuously allocate wheel torque. During deceleration, the
                  traction motors become generators and return motion to the battery. Brake-by-wire blending
                  prioritizes energy recovery, then adds conventional friction braking for hard stops, low speeds,
                  stability control, thermal limits, or a battery that cannot accept more charge. Simulated peak
                  recovery targets range from approximately 140 kW in the passenger cars to 220 kW in the Highroad
                  SUV and Ranch pickup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-[#071522] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
            Four ways to move a car
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            The difference is not the fuel. It is the path to the wheels.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {architectureTypes.map((item, index) => (
              <article key={item.title} className="border border-slate-200 bg-[#f6f4ee] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9c2826]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 font-mono text-sm leading-6 text-[var(--blue)]">{item.path}</p>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071522] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">Why ground-up wins</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight">
                Stop asking an ICE platform to pretend it was born electric.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Factory, "Manufacturing", "Common interfaces and assembly logic support both energy strategies instead of two unrelated vehicle programs."],
                [Boxes, "Parts commonality", "E-drives, electronics, battery structure, controls, mirrors, switches, latches, seat hardware, and a partially recessed fixed-grip door handle repeat across nine useful models."],
                [ShieldCheck, "Crash and packaging", "The structural battery, Forward and Amidships Energy Bays, cooling paths, and crash structure are designed together instead of negotiated after the fact."],
                [Gauge, "Proportions", "Long wheelbases, short overhangs, flat floors, and usable cabins are architecture—not styling corrections."],
                [Wrench, "AWD and energy recovery", "Shared front and rear e-drives provide all-wheel drive, traction control, and regenerative braking in every PE and BEV body."],
                [Zap, "Volatility protection", "Policy reversals, fuel-price shocks, charging delays, or demand changes alter the PE/BEV factory mix rather than invalidating the vehicle program."],
              ].map(([Icon, title, text]) => {
                const IconComponent = Icon as typeof Factory
                return (
                  <article key={title as string} className="border border-white/12 bg-white/[0.04] p-6">
                    <IconComponent className="h-7 w-7 text-[#72b49a]" />
                    <h3 className="mt-5 text-xl font-semibold">{title as string}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{text as string}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FuturePossibilitiesSection() {
  return (
    <section className="bg-[#e9e6dc] py-16 text-[#071522] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9c2826]">
              One platform. Many possible markets.
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              A starting lineup, not a closed catalog.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-700">
            <p>
              Project Dynamo begins with a balanced, North American-oriented nine-model family. A truly global
              automaker could choose a different mix for different markets while retaining shared platform hard
              points, propulsion, electronics, production logic, and service knowledge.
            </p>
            <p>
              These design studies suggest only a few branches—a city car, compact crossover, roadster, and rugged
              4×4. {publication.future_note} The unfilled space is part of the platform&apos;s value.
            </p>
          </div>
        </div>
        <figure className="mt-10 overflow-hidden border border-black/15 bg-[#071522]">
          <ImageLightbox
            src={`${assetRoot}/dynamo-global-possibilities-v2.png`}
            alt="Four exploratory global-market Dynamo vehicle studies in an automotive design studio"
            caption="Illustrative platform possibilities · not announced products"
          >
            <Image
              src={`${assetRoot}/dynamo-global-possibilities-v2.png`}
              alt="Four exploratory global-market Dynamo vehicle studies in an automotive design studio"
              width={1672}
              height={941}
              className="h-auto w-full"
            />
          </ImageLightbox>
          <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-300">
            Exploratory studies only. Different regions could emphasize different bodies without redefining the
            platform beneath them.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default function ProjectDynamoPage() {
  return (
    <main className="min-h-screen bg-[#050d17] text-white">
      <section className="relative min-h-[calc(100svh-81px)] overflow-hidden">
        <Image
          src={`${assetRoot}/family-v2.png`}
          alt="The nine-model Clark Project Dynamo family"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020812]/95 via-[#020812]/58 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-transparent to-[#020812]/25" />
        <div className="relative mx-auto flex min-h-[calc(100svh-81px)] max-w-7xl flex-col px-4 pb-12 pt-8 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex w-fit items-center gap-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <div className="mt-auto max-w-3xl pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ef6654]">Future vehicle concept</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              Project Dynamo
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-100 sm:text-2xl sm:leading-9">
              {publication.hero_line}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`${assetRoot}/project-dynamo-auto-show-brochure.pdf`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#071522] transition hover:bg-slate-200"
              >
                <FileText className="mr-2 h-4 w-4" />
                Read the brochure
              </a>
              <a
                href={`${assetRoot}/project-dynamo-auto-show-brochure.pdf`}
                download
                className="inline-flex items-center justify-center border border-white/35 bg-black/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-white/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
          <p className="max-w-3xl text-xs leading-5 text-slate-400">
            Self-initiated, independent concept. The fictional Clark Motor Company and its distinctive red
            trapezoid logo are visual stand-ins for an established North American-based global automaker.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#071522] py-16 sm:py-24">
        <ParticleWaveform className="inset-x-0 top-3 h-72 w-full" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">The product thesis</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Not every vehicle needs to be shaped like an expensive basketball shoe.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-200">
            <p>
              There is room for more choice in the market: sedans, hatches, sport wagons, crossovers, SUVs,
              passenger vans, work vans, and pickups that serve genuinely different lives. The hard part is
              giving people that choice without over-specializing, creating a new platform for every body,
              retooling every facility, and then throwing it all away when energy prices, tax credits, or
              regulatory policies change.
            </p>
            <p>
              Consumers face the same uncertainty from the other side. They want to buy confidently, but it is
              difficult to know what energy will cost, which incentives will remain, and what charging or fueling
              infrastructure will be available over the life of a vehicle.
            </p>
            <p>
              {publication.platform_definition}
            </p>
            <blockquote className="border-l-4 border-[#ef6654] pl-6 text-2xl font-medium leading-9 text-white">
              This isn&apos;t a real 2027 vehicle lineup—but it should be.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1d28] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">
              Two energy strategies, one platform architecture, endless possibilities
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Same Dynamo fundamentals: PE series hybrid or fully electric BEV.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Every Dynamo model is designed around the same chemistry-flexible structural battery enclosure,
              electric drive units, controls, thermal backbone, and safety interfaces. The concept anticipates
              solid-state cells as they mature without making the vehicle architecture depend on one battery
              chemistry. Any model can be built as a Petro-Electric (PE) plug-in series hybrid or as a fully
              battery-electric vehicle (BEV).
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The Forward Energy Bay receives either a compact generator cassette or supplemental BEV battery and
              power electronics. A protected Amidships Energy Bay adds liquid-fuel storage in a PE or
              vehicle-specific battery capacity in a BEV. Most of the vehicle architecture remains common while
              each body keeps the package, cooling, crash structure, and capacity its mission requires.
            </p>
            <p className="mt-6 border-l-4 border-[#ef6654] pl-5 text-xl font-medium leading-8 text-white">
              Consumer choice, enterprise flexibility.
            </p>
          </div>
          <ImageLightbox
            src={`${assetRoot}/dynamo-pe-bev-architecture-v3.png`}
            alt="Two Clark Captain sedans with their hoods open, comparing Petro-Electric and battery-electric front modules"
            caption="A shared electric-drive architecture supports both PE plug-in series hybrid and BEV Captains."
            className="relative mt-10 aspect-[16/9] overflow-hidden border border-white/10"
          >
            <Image
              src={`${assetRoot}/dynamo-pe-bev-architecture-v3.png`}
              alt="Two Clark Captain sedans with their hoods open, comparing Petro-Electric and battery-electric front modules"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </ImageLightbox>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold">PE · Petro-Electric plug-in series hybrid</h3>
              <p className="mt-3 leading-7 text-slate-300">
                The PE can run fully on stored battery energy for routine driving. When needed, a matched onboard
                generator starts and makes electricity for the battery and motors; only the electric motors drive
                the wheels.
              </p>
            </article>
            <article className="border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold">BEV · Battery-electric vehicle</h3>
              <p className="mt-3 leading-7 text-slate-300">
                The same body, controls, thermal backbone, and electric drive use the Forward and Amidships Energy
                Bays for supplemental battery capacity and power electronics, with no onboard prime mover.
              </p>
            </article>
          </div>
          <div className="mt-12 max-w-5xl border-l-4 border-[#ef6654] pl-6">
            <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Petro-Electric: an idea whose time has come &ndash; again.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              {publication.petro_electric_definition}
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-[34rem] w-full overflow-hidden bg-[#07131d] sm:aspect-[16/9] sm:max-h-[52rem] sm:min-h-[24rem]">
        <Image
          src={`${assetRoot}/highroad-locomotive.png`}
          alt="Dynamo Highroad SUV beside a locomotive at a working intermodal yard"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07131d]/95 via-[#07131d]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 max-w-4xl p-6 text-white sm:p-10">
          <p className="text-lg font-medium leading-7 sm:text-2xl sm:leading-9">
            One platform can scale from everyday mobility to serious work.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
            Beside a modern diesel-electric locomotive, the principle becomes immediately legible. A conventional
            diesel-electric locomotive generates its traction electricity onboard from diesel fuel: its diesel
            engine drives an alternator, and electric traction motors turn the wheels.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
            The Highroad&mdash;pictured in Midnight Blue metallic&mdash;and other Dynamo PE vehicles add a plug-in
            traction battery for routine battery-only driving, regenerative braking, and power buffering. The
            onboard generator can therefore remain off during ordinary trips, starting only when additional energy
            or system conditioning requires it.
          </p>
        </div>
      </section>

      <ArchitectureSequence />

      <section className="bg-[#0a1d28] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">
            Common parts, deliberate variety
          </p>
          <h2 className="mt-4 max-w-5xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Share what customers touch. Modularize what each body must shape differently.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              [
                "Exact shared parts",
                "Visors, console modules, switchgear, charge-port hardware, latches, sensors, seat mechanisms, and the partially recessed fixed-grip door-handle cartridge.",
              ],
              [
                "Shared modules, tailored housings",
                "Headlamp projectors, taillamp elements, mirror motors and cameras, fascia sensors, and window-trim profiles repeat inside body-specific outer forms.",
              ],
              [
                "Scaled component families",
                "One wheel design spans a few load-rated diameters. Low-, medium-, and high-profile front clips share lamps, badge, radar, tow-eye, cooling modules, and service logic.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="border border-white/12 bg-white/[0.04] p-7">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-200">
            The objective is not to make every body wear the same skin. It is to reduce unique part numbers,
            tooling, training, and inventory while preserving the Captain sedan&apos;s elegance, the Estate sport
            wagon&apos;s utility, and the taller vehicles&apos; distinct proportions.
          </p>
        </div>
      </section>

      <section id="family" className="scroll-mt-24 bg-[#0a1725] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">One family, nine answers</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Legendary family. Strong DNA.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              The XTour CUV and Foreman pickup establish a true medium profile above the Estate sport wagon. The
              Highroad SUV, Ranch pickup, Constellation passenger van, and TaskVan commercial van rise again with
              higher seating, greater clearance or cargo height, and more upright, distinctly American greenhouses.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {vehicles.map((vehicle) => (
              <article key={vehicle.name} className="relative">
                <Link
                  href={`/portfolio/project-dynamo/${vehicle.slug}`}
                  className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72b49a]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <Image
                      src={vehicle.src}
                      alt={`${vehicle.name}, ${vehicle.role}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="border-x border-b border-white/10 bg-white/[0.03] p-5 transition group-hover:border-white/25 group-hover:bg-white/[0.07]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#72b49a]">
                          {vehicle.role}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold">{vehicle.name}</h3>
                      </div>
                      <span className="border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300">
                        {vehicle.profile} profile
                      </span>
                    </div>
                    <p className="mt-4 inline-flex items-center text-sm font-semibold text-slate-200">
                      View model portfolio
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </p>
                  </div>
                </Link>
                <ImageLightbox
                  src={vehicle.src}
                  alt={`${vehicle.name}, ${vehicle.role}`}
                  caption={`${vehicle.name} · ${vehicle.role}`}
                  trigger="icon"
                  className="absolute right-3 top-3 z-20"
                />
              </article>
            ))}
          </div>
          <div className="mt-12 border-t border-white/12 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">
              Three kinds of versatility
            </p>
            <h3 className="mt-3 max-w-3xl text-balance text-3xl font-semibold">
              No vehicle should have to be all things to all people.
            </h3>
            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {[
                {
                  name: "XTour",
                  promise: "Compact adaptability",
                  text: "Sedan-friendly dimensions, a higher hip point, a liftgate, and a flat-folding second row add useful cargo flexibility without SUV bulk.",
                },
                {
                  name: "Constellation / TaskVan",
                  promise: "Maximum enclosed flexibility",
                  text: "A boxier body, low floor, removable second-row chairs, and a stowable third row prioritize passenger access, cargo volume, and reconfiguration.",
                },
                {
                  name: "Highroad",
                  promise: "Capability first",
                  text: "Greater clearance, suspension travel, thermal capacity, towing ability, and three-row space trade some packaging efficiency for ruggedness and reach.",
                },
              ].map((choice) => (
                <article key={choice.name} className="border border-white/12 bg-white/[0.04] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ef6654]">{choice.name}</p>
                  <h4 className="mt-2 text-xl font-semibold">{choice.promise}</h4>
                  <p className="mt-3 leading-7 text-slate-300">{choice.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071522]">
        <div className="relative min-h-[78vh]">
          <Image
            src={`${assetRoot}/captain-cabin-safe.png`}
            alt="Dog resting safely in a copper Dynamo Captain sedan while its owner returns with treats"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d17]/96 via-[#050d17]/45 to-transparent" />
          <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ef6654]">
                Dynamo Cabin Intelligence
              </p>
              <h2 className="mt-4 text-balance text-5xl font-semibold leading-tight sm:text-6xl">
                The vehicle keeps thinking after you park.
              </h2>
              <p className="mt-6 text-xl leading-8 text-slate-100">
                One shared sensing and decision framework can protect someone left inside, prepare an empty vehicle
                for your return, or close forgotten windows when the weather changes.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                src: `${assetRoot}/captain-cabin-safe.png`,
                alt: "Dog comfortable inside a copper Captain sedan while its owner returns from a bakery",
                title: "Cabin Safe",
                vehicle: "Captain sedan",
                text: "A dog waits safely in a climate-controlled copper Captain sedan while his owner buys treats. Cabin Safe detects living occupants and makes their actual thermal risk—not a timer—the governing priority.",
              },
              {
                src: `${assetRoot}/xtour-cabin-comfort.png`,
                alt: "Hikers returning from the Carolina woods to their pre-cooled arctic-blue XTour CUV",
                title: "Cabin Comfort",
                vehicle: "XTour CUV",
                text: "Tired hikers return from the Carolina woods to a pre-cooled arctic-blue XTour CUV, ready for a relaxed drive back to Charlotte. Cabin Comfort prepares the vehicle around real conditions and return time.",
              },
              {
                src: `${assetRoot}/highroad-rain-guard.png`,
                alt: "Blue Highroad SUV closing its own windows during a sudden cloudburst at a lake cabin",
                title: "Rain Guard",
                vehicle: "Highroad SUV",
                text: "At the lake, a Highroad SUV takes care of its own windows during a sudden cloudburst while everyone seeks cover in the cabin. Rain Guard verifies every closure and reports any obstruction or fault.",
              },
            ].map((feature) => (
              <article key={feature.title} className="border border-white/12 bg-white/[0.04]">
                <ImageLightbox
                  src={feature.src}
                  alt={feature.alt}
                  caption={`${feature.title} · ${feature.vehicle}`}
                  className="aspect-[16/10] overflow-hidden"
                >
                  <Image src={feature.src} alt={feature.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </ImageLightbox>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#72b49a]">{feature.vehicle}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{feature.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 border border-white/12 bg-[#0a1725] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#72b49a]">
              Sense → Understand → Protect
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <p className="border-l-2 border-[#0288D1] pl-4 text-slate-300">
                Occupants, movement, temperature, humidity, sunlight, rain, air quality, time, location, battery,
                and vehicle status.
              </p>
              <p className="border-l-2 border-[#6AA58E] pl-4 text-slate-300">
                Onboard AI combines signals, detects contradictions, estimates risk, and predicts what is likely
                to happen next.
              </p>
              <p className="border-l-2 border-[#ef6654] pl-4 text-slate-300">
                A safety-certified controller selects bounded actions: monitor, heat, cool, close or open, notify,
                unlock, or request help.
              </p>
            </div>
            <blockquote className="mt-8 border-l-4 border-[#ef6654] pl-5 text-xl font-medium">
              AI interprets the situation. Safety-certified controls govern the response.
            </blockquote>
            <p className="mt-6 text-xs leading-5 text-slate-400">
              Dynamo Cabin Intelligence is a technology concept combining capabilities in varying stages of
              development and testing. Individual functions, sensing methods, and intervention strategies would
              require vehicle-specific validation and safety certification.
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-[82vh] overflow-hidden">
        <Image
          src={`${assetRoot}/performance-low-photoreal.png`}
          alt="Performance-tuned Dynamo Fastback, Captain, and Estate on a wet proving ground"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-black/20" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ef6654]">
              {publication.specialization_label}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-6xl">
              Room for the vehicles enthusiasts thought the market had forgotten.
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-100">
              Higher-output drive units, brakes, suspension tuning, cooling, wheels, and software create credible
              performance derivatives of the Captain sedan, Fastback five-door hatch, and Estate sport wagon.
              Progressive controls and predictable responses make the additional capability useful to ordinary
              drivers. {publication.specialization_claim}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1725] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">
            Utility without uniformity
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Shared architecture does not mean one shape fits all.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              A taller van body can use Dynamo&apos;s low floor and common structural battery to prioritize passenger
              room, cargo volume, and reconfiguration. The propulsion, controls, thermal systems, and service logic
              remain familiar—even when the vehicle above them is designed for maximum utility rather than another
              variation on the same crossover silhouette.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <figure className="relative min-h-[65vh] overflow-hidden">
              <ImageLightbox
                src={`${assetRoot}/constellation-liftgate-v2.png`}
                alt="Passenger van cargo area with its rear liftgate raised"
                caption="A low load floor and meaningful cargo depth behind a fully upright third row"
                className="relative min-h-[65vh]"
              >
                <Image
                  src={`${assetRoot}/constellation-liftgate-v2.png`}
                  alt="Passenger van cargo area with its rear liftgate raised"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </ImageLightbox>
              <div className="absolute right-4 top-4 z-30 w-[44%] min-w-44 border border-white/25 bg-[#071522] p-2 shadow-2xl sm:right-6 sm:top-6 sm:w-[38%]">
                <ImageLightbox
                  src={`${assetRoot}/constellation-third-row-inset-v3.png`}
                  alt="Cargo deck with the third-row bench raised slightly above the battery floor and second-row captain’s chairs stowed as work surfaces"
                  caption="Third row stows above the battery floor"
                  className="relative aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={`${assetRoot}/constellation-third-row-inset-v3.png`}
                    alt="Cargo deck with the third-row bench raised slightly above the battery floor and second-row captain’s chairs stowed as work surfaces"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </ImageLightbox>
                <p className="px-1 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
                  Third row stows above the battery floor
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-7 text-lg leading-7 text-slate-100 sm:p-10">
                A low load floor and meaningful cargo depth behind a fully upright third row.
              </figcaption>
            </figure>
            <figure className="relative min-h-[65vh] overflow-hidden">
              <ImageLightbox
                src={`${assetRoot}/constellation-removable-seat-v11.png`}
                alt="A woman lifting a removable captain’s chair from a passenger van’s floor tracks"
                caption="Reconfigurable seating turns generous passenger space into useful cargo space"
                className="relative min-h-[65vh]"
              >
                <Image
                  src={`${assetRoot}/constellation-removable-seat-v11.png`}
                  alt="A woman lifting a removable captain’s chair from a passenger van’s floor tracks"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </ImageLightbox>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-7 text-lg leading-7 text-slate-100 sm:p-10">
                Folding work surfaces and removable second-row seating make flexibility part of ordinary use.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ef6654]">
            One architecture. Different work.
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            From last-mile delivery to skilled trades and mobile enterprise.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Shared structure and systems do not require identical outcomes. Modular cargo equipment, power export,
            durable finishes, and task-specific storage let a common Dynamo van architecture support very different
            businesses without creating a different vehicle program for each one.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                src: `${assetRoot}/taskvan-delivery.png`,
                title: "Last-mile delivery",
                text: "A low step, one credible sliding aperture, and modular parcel shelving for frequent curbside stops.",
              },
              {
                src: `${assetRoot}/taskvan-inclusive-trade.png`,
                title: "Skilled trades",
                text: "Organized tools, credible access, and a durable load floor serve the people whose skill turns a van into a livelihood.",
              },
              {
                src: `${assetRoot}/taskvan-market.png`,
                title: "Mobile enterprise",
                text: "Washable modules, refrigeration, power export, and tie-downs support small businesses beyond parcel work.",
              },
            ].map((use) => (
              <article key={use.title} className="border border-white/10 bg-white/[0.03]">
                <ImageLightbox
                  src={use.src}
                  alt={use.title}
                  caption={`Dynamo platform flexibility · ${use.title}`}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image src={use.src} alt={use.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </ImageLightbox>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{use.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{use.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[#071522] lg:grid-cols-[1.12fr_0.88fr]">
        <ImageLightbox
          src={`${assetRoot}/sedan-interior-v2.png`}
          alt="Dynamo Captain sedan interior"
          caption="Dynamo Captain interior"
          className="relative min-h-[65vh]"
        >
          <Image
            src={`${assetRoot}/sedan-interior-v2.png`}
            alt="Dynamo Captain sedan interior"
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
          />
        </ImageLightbox>
        <div className="flex items-center p-8 sm:p-12 lg:p-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ef6654]">Inside Dynamo</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold">Technology that knows when to disappear.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A low horizontal dashboard, clear instruments, useful storage, durable woven materials, and physical
              controls for frequent tasks. Anthracite forms the glare-resistant lower structure and mechanical
              housings; Sandstone provides a warm, easy-care light foundation; Nantucket Fog keeps headliners,
              pillars, and upper trim calm and airy.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Brushed Aluminum marks switches and touchpoints without the fingerprints or glare of broad piano-black
              surfaces. Digital where it helps; tactile where memory matters.
            </p>
            <Link
              href="/portfolio/project-dynamo/colors-materials"
              className="mt-8 inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Explore colors and materials
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#0d2632] py-16 sm:py-24">
        <ParticleWaveform className="inset-x-0 top-0 h-80 w-full opacity-25" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">
            The core value proposition
          </p>
          <h2 className="mt-4 max-w-5xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Competitive products for customers. A resilient product system for the company.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="border border-white/14 bg-[#071522]/85 p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#55a9d6]">Value to consumers</p>
              <h3 className="mt-3 text-3xl font-semibold">Choose the energy strategy. Keep the electric drive.</h3>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
                <li>Petro-Electric series hybrid and battery-electric versions target competitive performance, cost, utility, and ownership burden.</li>
                <li>Every PE vehicle can plug in for routine electric miles, then refuel quickly when distance or charging access demands it.</li>
                <li>BEV versions remove the prime mover entirely for the lowest energy use and scheduled maintenance.</li>
                <li>Both retain instant electric torque, all-wheel drive, traction control, regenerative braking, and the same familiar vehicle character.</li>
              </ul>
            </article>
            <article className="border border-white/14 bg-[#071522]/85 p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#72b49a]">Value to the company</p>
              <h3 className="mt-3 text-3xl font-semibold">Change the mix without restarting the program.</h3>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
                <li>The electric-first architecture is designed around battery, e-drives, crash structure, cooling, and assembly—not retrofitted from ICE.</li>
                <li>Shared hard points, electronics, software, tooling, parts, service knowledge, and suppliers support nine profiled models and additional derivatives.</li>
                <li>Production can rebalance between PE and BEV as customer preference, incentives, regulations, fuel prices, charging access, and market conditions move.</li>
                <li>Specialty bodies and performance versions can be added without abandoning the manufacturing and service logic beneath them.</li>
              </ul>
            </article>
          </div>
          <div className="mt-7 border-y border-white/12 py-6 text-center">
            <p className="text-lg font-semibold tracking-wide text-white">
              1 electric-drive core <span className="text-[#55a9d6]">→</span> 2 energy strategies{" "}
              <span className="text-[#72b49a]">→</span> 9+ specialized models
            </p>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-400">
            Platform flexibility occurs in engineering and production. Project Dynamo does not assume that an
            individual owner can exchange a generator module for supplemental batteries after purchase.
          </p>
        </div>
      </section>

      <section className="bg-[#e9e6dc] py-16 text-[#071522] sm:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9c2826]">
            Simulated 2027 design targets
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Simulated dimensions and performance. Grounded enough to evaluate.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            These figures are concept-level estimates derived from current comparable vehicles, package arithmetic,
            and explicit assumptions. PE / BEV values are shown in that order. Generator-running mpg assumes the
            gasoline-electric module; other module families are not modeled.
          </p>
          <div className="mt-10 overflow-x-auto border border-black/15 bg-white">
            <table className="min-w-[1180px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#071522] text-white">
                <tr>
                  {[
                    "Model",
                    "Length",
                    "Width",
                    "Curb weight PE / BEV",
                    "Torque",
                    "Battery PE / BEV",
                    "Generator",
                    "PE fuel economy",
                    "0–60 mph",
                    "Top / sustained cruise",
                  ].map((label) => (
                    <th key={label} className="border-r border-white/10 px-4 py-4 font-semibold">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.name} className="border-b border-slate-200 even:bg-[#f7f5f0]">
                    <th className="px-4 py-4 font-semibold">{vehicle.name}</th>
                    <td className="px-4 py-4">{vehicle.length}</td>
                    <td className="px-4 py-4">{vehicle.width}</td>
                    <td className="px-4 py-4">{vehicle.weight}</td>
                    <td className="px-4 py-4">{vehicle.torque}</td>
                    <td className="px-4 py-4">{vehicle.batteries}</td>
                    <td className="px-4 py-4">{vehicle.generator}</td>
                    <td className="px-4 py-4">{vehicle.fuel}</td>
                    <td className="px-4 py-4">{vehicle.acceleration}</td>
                    <td className="px-4 py-4">{vehicle.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            “Sustained cruise” is a conservative, level-road target while the generator carries the continuous load;
            grades, towing, heat, cold, payload, battery state, and wind alter the result. Top speed is
            battery-supported and electronically limited.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 text-[#071522] sm:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
            Internal Captain calibration
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Two energy strategies, evaluated on the same vehicle.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            The public calibration stays deliberately restrained: PE and BEV Captain targets share the same body,
            mission, and electric drive. Status and basis are explicit; no production vehicle is presented as an
            exact analogue.
          </p>
          <div className="mt-10 overflow-x-auto border border-slate-200">
            <table className="min-w-[1150px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#0a1725] text-white">
                <tr>
                  {["Architecture", "Status", "Basis", "Curb weight", "Energy", "Battery", "Torque", "0–60 mph", "Annual energy", "75,000-mi maintenance", "Strongest case"].map(
                    (label) => (
                      <th key={label} className="border-r border-white/10 px-4 py-4 font-semibold">
                        {label}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {comparison.map((item) => (
                  <tr key={item.type} className="border-b border-slate-200 even:bg-[#f6f4ee]">
                    <th className="px-4 py-4 font-semibold">{item.type}</th>
                    <td className="px-4 py-4">{item.status}</td>
                    <td className="px-4 py-4">{item.basis}</td>
                    <td className="px-4 py-4">{item.weight}</td>
                    <td className="px-4 py-4">{item.energy}</td>
                    <td className="px-4 py-4">{item.battery}</td>
                    <td className="px-4 py-4">{item.torque}</td>
                    <td className="px-4 py-4">{item.zeroToSixty}</td>
                    <td className="px-4 py-4">{item.annualEnergy}</td>
                    <td className="px-4 py-4">{item.maintenance}</td>
                    <td className="px-4 py-4">{item.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="border-t-4 border-[#9c2826] bg-[#f6f4ee] p-6">
              <h3 className="text-xl font-semibold">Where PE gives ground</h3>
              <p className="mt-3 leading-7 text-slate-650">
                Generator-running efficiency is only one condition, and a PE remains more complex than a BEV. Its
                case depends on routine charging and the value of rapid liquid-fuel refueling when needed.
              </p>
            </article>
            <article className="border-t-4 border-[#9c2826] bg-[#f6f4ee] p-6">
              <h3 className="text-xl font-semibold">Where BEV leads</h3>
              <p className="mt-3 leading-7 text-slate-650">
                The full-electric version is simpler, more efficient, and cheaper to maintain because it carries no
                engine, fuel, exhaust, or emissions hardware.
              </p>
            </article>
            <article className="border-t-4 border-[var(--forest)] bg-[#f6f4ee] p-6">
              <h3 className="text-xl font-semibold">Where PE becomes competitive</h3>
              <p className="mt-3 leading-7 text-slate-650">
                In the stated scenario, 70% plugged-in electric mileage keeps most routine travel quiet and electric
                while the generator protects long-distance flexibility.
              </p>
            </article>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-600">
            Maintenance estimates use U.S. Department of Energy light-duty scheduled-maintenance benchmarks as
            anchors. The Dynamo PE and BEV figures remain simulated design targets. Tires, collision repair,
            financing, depreciation, fuel, and electricity are excluded.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Annual energy model: 12,000 miles, $0.17/kWh electricity, $3.50/gallon gasoline, and 70% electric
            mileage for Dynamo PE. It is a scenario—not a forecast. Drivers who rarely plug in surrender the PE
            advantage; drivers who cover most routine travel electrically improve upon it.
          </p>
          <p className="mt-6 border-l-4 border-[var(--forest)] pl-5 text-lg font-medium leading-8 text-[#071522]">
            The individual vehicle only needs to be competitive. The platform creates the larger advantage by
            spreading investment, components, service systems, and policy risk across the entire family.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071522] py-16 sm:py-24">
        <ParticleWaveform className="inset-x-0 bottom-0 h-72 w-full" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">
              The value a platform preserves
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              A durable product strategy protects more than invested capital.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-200">
            <p>
              Policy, fuel prices, charging access, and customer confidence can change faster than a vehicle
              program. Dynamo lets an established manufacturer change the source of onboard energy without
              discarding the electric-drive architecture, the factory knowledge, the supplier relationships, or
              the service system built around it.
            </p>
            <p>
              That continuity preserves skilled work, dealer and technician competence, useful products for
              households and small businesses, and the trust earned when a company supports what it builds. It
              also leaves room for thoughtful details—the hidden badge beneath a liftgate, a real physical
              control, a lower loading height—that tell customers cost discipline did not become indifference.
            </p>
            <blockquote className="border-l-4 border-[#ef6654] pl-6 text-2xl font-medium leading-9 text-white">
              Engineered to benchmarks, not down to a price point.
            </blockquote>
            <p>
              Shareholder value is one kind of corporate value. It is not the only kind, nor the source from which
              all the others flow. A resilient platform can create financial value precisely because it also
              protects human, productive, institutional, and civic value over time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111d29] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ef6654]">The honest engineering brief</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold">What still has to be proved.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "A PE vehicle remains more complex and maintenance-intensive than a pure BEV.",
              "The generator, fuel, exhaust, cooling, and battery can erase weight savings if the module is not aggressively optimized.",
              "Sustained towing and mountain-grade performance depend on generator output, battery buffer, and thermal capacity.",
              "Occasional engine operation creates fuel-aging, oil-conditioning, catalyst-temperature, noise, vibration, and emissions challenges that require condition-based controls and validation.",
              "Common Forward and Amidships Energy Bay interfaces do not mean a literal one-for-one volume swap; crash, cooling, plumbing, capacity, and structure still differ by model and energy strategy.",
              "Cost, durability, repairability, certification, and real-world efficiency require full engineering validation.",
            ].map((item) => (
              <p key={item} className="border border-white/12 bg-white/[0.04] p-5 leading-7 text-slate-200">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e9e6dc] py-16 text-[#071522] sm:py-24">
        <ParticleWaveform className="inset-x-0 bottom-0 h-72 w-full opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9c2826]">
            Series electric and scalable architecture precedents
          </p>
          <h2 className="mt-4 max-w-5xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            The building blocks are real. Dynamo organizes them differently.
          </h2>
          <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-700">{publication.precedent_conclusion}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {publication.precedents.map((precedent) => (
              <article key={precedent.name} className="flex h-full flex-col border border-black/12 bg-white p-6">
                <div className="flex flex-wrap gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
                  <span className="bg-[#071522] px-2.5 py-1 text-white">{precedent.category}</span>
                  <span className="border border-black/15 px-2.5 py-1 text-slate-600">{precedent.status}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{precedent.name}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-700">{precedent.summary}</p>
                <a
                  href={precedent.source_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--blue)] underline underline-offset-4"
                >
                  {precedent.source_label}
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FuturePossibilitiesSection />

      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src={`${assetRoot}/family-v2.png`}
          alt="Project Dynamo vehicle family at an auto-show pavilion"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ef6654]">Take the concept with you</p>
            <h2 className="mt-4 text-balance text-5xl font-semibold leading-tight">The Project Dynamo brochure.</h2>
            <p className="mt-5 text-xl leading-8 text-slate-100">
              A full-bleed, auto-show-style presentation of the vehicle family, interiors, architecture, simulated
              specifications, comparisons, and open engineering questions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`${assetRoot}/project-dynamo-auto-show-brochure.pdf`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#071522]"
              >
                Open brochure
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={`${assetRoot}/project-dynamo-auto-show-brochure.pdf`}
                download
                className="inline-flex items-center justify-center border border-white/35 bg-black/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-8 border-[#9c2826] bg-[#050d17] py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <Image
            src={`${assetRoot}/clark-trapezoid-floating.png`}
            alt="Red and chrome Clark Trapezoid badge"
            width={1536}
            height={1024}
            className="mx-auto mb-8 w-full max-w-2xl object-contain drop-shadow-[0_22px_30px_rgba(0,0,0,0.32)]"
          />
          <p className="mt-7 text-xl font-medium italic text-[#ef6654]">
            {publication.closing}
          </p>
          <p className="mx-auto mt-10 max-w-4xl text-xs leading-6 text-slate-400">
            {publication.disclaimer}
          </p>
        </div>
      </section>
    </main>
  )
}
