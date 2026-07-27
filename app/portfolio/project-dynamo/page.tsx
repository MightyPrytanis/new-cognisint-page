import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
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
    "An independent future-vehicle concept for a North American global automaker: seven specialized bodies, one electric-drive platform, and battery-electric or generator-extended energy strategies.",
}

const assetRoot = "/projects/project-dynamo"

const vehicles = [
  {
    name: "Dynamo Sedan",
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
    name: "Dynamo Fastback",
    role: "Five-door hatch",
    profile: "Low",
    src: `${assetRoot}/fastback.png`,
    length: "179.5 in",
    width: "72.4 in",
    weight: "3,630 / 3,710 lb",
    torque: "295 lb-ft",
    batteries: "32 / 72 kWh",
    generator: "80 kW",
    fuel: "38 mpg",
    acceleration: "6.2 sec",
    speed: "116 / 75 mph",
  },
  {
    name: "Dynamo Estate",
    role: "Compact wagon",
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
    name: "Dynamo Utility",
    role: "Compact crossover",
    profile: "Medium",
    src: `${assetRoot}/crossover.png`,
    length: "178.8 in",
    width: "73.4 in",
    weight: "3,880 / 3,940 lb",
    torque: "335 lb-ft",
    batteries: "38 / 78 kWh",
    generator: "90 kW",
    fuel: "35 mpg",
    acceleration: "6.2 sec",
    speed: "112 / 75 mph",
  },
  {
    name: "Dynamo Touring",
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
    name: "Dynamo Constellation",
    role: "CityVan",
    profile: "High",
    src: `${assetRoot}/cityvan.png`,
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
    name: "Dynamo Pickup",
    role: "Compact four-door pickup",
    profile: "High",
    src: `${assetRoot}/pickup.png`,
    length: "200.5 in",
    width: "76.8 in",
    weight: "4,650 / 4,760 lb",
    torque: "500 lb-ft",
    batteries: "45 / 100 kWh",
    generator: "120 kW",
    fuel: "27 mpg",
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
      "Only electric traction drives the wheels. One matched gasoline-, diesel-, biodiesel-, or future-energy module is engineered for each vehicle configuration.",
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
    type: "Efficient ICE",
    weight: "2,875 lb",
    energy: "36 mpg",
    battery: "—",
    torque: "~133 lb-ft",
    zeroToSixty: "~8.5 sec",
    maintenance: "$7,575",
    annualEnergy: "$1,167",
    best: "Low mass, mature infrastructure",
  },
  {
    type: "Mechanical hybrid",
    weight: "3,208 lb",
    energy: "49 mpg",
    battery: "~1–2 kWh",
    torque: "~232 lb-ft motor",
    zeroToSixty: "~6.2 sec",
    maintenance: "$7,050",
    annualEnergy: "$857",
    best: "Best gasoline-only efficiency",
  },
  {
    type: "Dynamo PE target",
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

export default function ProjectDynamoPage() {
  return (
    <main className="min-h-screen bg-[#050d17] text-white">
      <section className="relative min-h-[calc(100svh-81px)] overflow-hidden">
        <Image
          src={`${assetRoot}/family.png`}
          alt="The seven-vehicle Clark Project Dynamo family"
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
              Seven specialized vehicles. One electric-drive platform. Two energy strategies.
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

      <section className="border-y border-white/10 bg-[#071522] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">The product thesis</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Specialization without fragmentation.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-200">
            <p>
              Everything does not need to become the same crossover. A sedan, hatch, wagon, crossover, SUV,
              CityVan, and pickup can each serve a different life while sharing the expensive systems customers
              never see.
            </p>
            <p>
              Project Dynamo concentrates complexity in a common battery structure, electric drive units,
              electronics, controls, thermal backbone, software, and service logic. Visible components repeat,
              too: mirrors, switchgear, charging doors, latches, seat hardware, and a partially recessed
              fixed-grip door-handle cartridge. The result is a lineup with genuine variety without creating a
              parts and maintenance headache.
            </p>
            <p>
              It also creates a hedge against volatility. Consumers can lean harder on electricity when liquid
              fuel becomes expensive and retain onboard generation when charging access fails to keep pace.
              The automaker can change the factory mix between petro-electric (PE) and battery-electric (BEV)
              models as policy, incentives, fuel prices, infrastructure, and demand shift—without abandoning the
              vehicle family.
            </p>
            <blockquote className="border-l-4 border-[#ef6654] pl-6 text-2xl font-medium leading-9 text-white">
              This isn&apos;t a real 2027 vehicle lineup—but it should be.
            </blockquote>
            <p className="font-medium text-white">
              The relevant unit of comparison is therefore not one PE sedan against one hybrid sedan. It is the
              economics and resilience of the complete platform: seven bodies, two energy strategies, shared
              capital investment, shared service knowledge, and a production mix that can move without restarting
              the product program.
            </p>
          </div>
        </div>
      </section>

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
            tooling, training, and inventory while preserving the sedan&apos;s elegance, the wagon&apos;s utility,
            and the taller vehicles&apos; distinct proportions.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="grid lg:grid-cols-2">
          <article className="group relative min-h-[72vh] overflow-hidden">
            <Image
              src={`${assetRoot}/sedan.png`}
              alt="Copper Dynamo Sedan"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ef6654]">Design anchor</p>
              <h2 className="mt-3 text-4xl font-semibold">Dynamo Sedan</h2>
              <p className="mt-3 max-w-lg text-lg leading-7 text-slate-200">
                Low, long-wheelbase composure and quiet American confidence.
              </p>
            </div>
          </article>
          <article className="group relative min-h-[72vh] overflow-hidden">
            <Image
              src={`${assetRoot}/estate.png`}
              alt="Burgundy Dynamo Estate wagon"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ef6654]">Emotional center</p>
              <h2 className="mt-3 text-4xl font-semibold">Dynamo Estate</h2>
              <p className="mt-3 max-w-lg text-lg leading-7 text-slate-200">
                Proof that utility does not require crossover proportions.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#0a1725] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">One family, seven answers</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Different forms. Familiar bones.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              The crossover remains car-like. The SUV, pickup, and CityVan rise on visibly taller bodies with
              higher seating, greater clearance, and more upright, distinctly American greenhouses.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {vehicles.map((vehicle, index) => (
              <article key={vehicle.name} className={index === 0 || index === 1 ? "md:col-span-1" : ""}>
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <Image
                    src={vehicle.src}
                    alt={`${vehicle.name}, ${vehicle.role}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-x border-b border-white/10 bg-white/[0.03] p-5">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] overflow-hidden">
        <Image
          src={`${assetRoot}/suv.png`}
          alt="Midnight-navy Dynamo Touring three-row SUV"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-end px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ef6654]">High-profile flagship</p>
            <h2 className="mt-4 text-5xl font-semibold">Dynamo Touring</h2>
            <p className="mt-5 text-xl leading-8 text-slate-100">
              Three-row space, a higher sightline, and a useful squared greenhouse—without abandoning the family’s
              calm surfaces or electric-first proportions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[65vh]">
            <Image
              src={`${assetRoot}/cityvan.png`}
              alt="Champagne-gold Dynamo Constellation CityVan"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center bg-[#111d29] p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">A new category</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold sm:text-5xl">
                CityVan utility. Constellation hospitality.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                More upright and space-efficient than a conventional minivan; more refined, passenger-friendly,
                and garageable than a full commercial delivery van. Passenger, family, shuttle, trades, and
                last-mile configurations share the same tall body and flat electric floor.
              </p>
              <p className="mt-6 border-l-4 border-[#ef6654] pl-5 text-xl font-medium leading-8">
                A worthy successor to the Clark Constellation.
              </p>
            </div>
          </div>
        </div>
        <div className="relative min-h-[75vh]">
          <Image
            src={`${assetRoot}/cityvan-interior.png`}
            alt="Flexible flat-floor interior of the Dynamo Constellation CityVan"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <p className="absolute bottom-7 left-7 max-w-xl text-lg leading-7 text-slate-100 sm:bottom-10 sm:left-10">
            Dual sliding doors, a low step-in height, removable seating, integrated floor tracks, and a durable
            load deck turn one body into a family vehicle, urban shuttle, mobile workspace, or compact delivery van.
          </p>
        </div>
      </section>

      <section className="grid bg-[#071522] lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative min-h-[65vh]">
          <Image
            src={`${assetRoot}/sedan-interior.png`}
            alt="Project Dynamo sedan interior"
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center p-8 sm:p-12 lg:p-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ef6654]">Inside Dynamo</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold">Technology that knows when to disappear.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A low horizontal dashboard, clear instruments, useful storage, durable woven materials, and physical
              controls for frequent tasks. Digital where it helps; tactile where memory matters.
            </p>
          </div>
        </div>
      </section>

      <section id="architecture" className="bg-[#e9e6dc] py-16 text-[#071522] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9c2826]">The architecture</p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            The energy module changes. The propulsion system does not.
          </h2>
          <figure className="mt-10 overflow-hidden border border-black/15 bg-[#071522]">
            <Image
              src={`${assetRoot}/architecture.png`}
              alt="Project Dynamo battery-electric and petro-electric architecture"
              width={1672}
              height={941}
              loading="eager"
              className="h-auto w-full"
            />
          </figure>
          <div className="mt-8 grid gap-6 text-lg leading-8 text-slate-700 lg:grid-cols-2">
            <p>
              Battery-electric models devote the available package and mass budget to stored electricity.
              Petro-electric models carry a smaller traction battery plus a vehicle-specific Dynamo Module: a prime
              mover turning a generator, with no mechanical connection to the wheels.
            </p>
            <p>
              “Petro-electric” names the architecture, not a multi-fuel vehicle. Gasoline-electric,
              diesel/biodiesel-electric, hydrogen-electric, or future-energy versions require separately engineered
              modules, storage, safety, thermal, emissions, and certification systems.
            </p>
          </div>
          <div className="mt-8 border-l-4 border-[var(--forest)] bg-white p-6">
            <div className="flex items-start gap-4">
              <BatteryCharging className="mt-1 h-7 w-7 shrink-0 text-[var(--forest)]" />
              <div>
                <h3 className="text-2xl font-semibold">Regenerative braking is common to every Dynamo.</h3>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  During deceleration, the traction motor becomes a generator and returns motion to the battery.
                  Brake-by-wire blending prioritizes energy recovery, then adds conventional friction braking for
                  hard stops, low speeds, stability control, thermal limits, or a battery that cannot accept more
                  charge. Simulated peak recovery targets range from approximately 140 kW in the passenger cars to
                  220 kW in the SUV and pickup.
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
                [Factory, "Manufacturing", "One body and assembly logic supports both energy strategies instead of parallel vehicle programs."],
                [Boxes, "Parts commonality", "E-drives, electronics, battery structure, controls, mirrors, switches, latches, seat hardware, and a partially recessed fixed-grip door handle repeat across seven useful bodies."],
                [ShieldCheck, "Crash and packaging", "Battery, module bay, cooling paths, and structure are designed together instead of negotiated after the fact."],
                [Gauge, "Proportions", "Long wheelbases, short overhangs, flat floors, and usable cabins are architecture—not styling corrections."],
                [Wrench, "Energy recovery", "Shared e-drives and blended brake controls recover deceleration energy in every PE and BEV body while reducing friction-brake wear."],
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

      <section className="border-y border-white/10 bg-[#0d2632] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#72b49a]">A hedge against volatility</p>
          <h2 className="mt-4 max-w-5xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Do not make one policy reversal—or one fuel-price shock—obsolete the whole program.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="border border-white/12 bg-white/[0.04] p-7">
              <h3 className="text-2xl font-semibold">Protection for consumers</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Plug in more when gasoline or diesel prices rise. Use onboard generation when public charging is
                sparse, unreliable, expensive, or politically neglected. The electric driving experience remains
                the same while the household can shift its energy mix.
              </p>
            </article>
            <article className="border border-white/12 bg-white/[0.04] p-7">
              <h3 className="text-2xl font-semibold">Protection for the automaker</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Adjust PE and BEV production as incentives, emissions rules, fuel costs, charging investment, and
                consumer sentiment change. The bodies, e-drives, software, plants, suppliers, service training,
                and much of the capital investment remain useful.
              </p>
            </article>
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
            Plausible enough to interrogate. Not precise enough to pretend.
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
            Representative compact-sedan comparison
          </p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Competitive across the whole use case.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            Generator-mode mpg is only one operating condition. When the PE sedan is plugged in often enough to
            cover 70% of its annual mileage electrically, its modeled energy cost falls between the full EV and a
            49-mpg mechanical hybrid—while retaining rapid liquid-fuel refueling.
          </p>
          <div className="mt-10 overflow-x-auto border border-slate-200">
            <table className="min-w-[1050px] w-full border-collapse text-left text-sm">
              <thead className="bg-[#0a1725] text-white">
                <tr>
                  {["Architecture", "Curb weight", "Energy", "Battery", "Torque", "0–60 mph", "Annual energy", "75,000-mi maintenance", "Strongest case"].map(
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
                A good mechanical hybrid can beat a series generator on sustained gasoline highway mpg because it
                avoids converting mechanical energy to electricity and back again.
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
                At the stated energy prices, the PE sedan beats the 49-mpg hybrid’s annual energy cost when more
                than approximately 48% of its miles are plugged-in electric.
              </p>
            </article>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-600">
            Maintenance estimates use U.S. Department of Energy light-duty scheduled-maintenance benchmarks as
            anchors: 10.1¢/mi ICE, approximately 9.4¢/mi hybrid, 9.0¢/mi plug-in hybrid, and 6.1¢/mi BEV. The Dynamo
            PE figure is a simulated 8.0¢/mi target reflecting retained engine service but deletion of a mechanical
            traction transmission. Tires, collision repair, financing, depreciation, fuel, and electricity are
            excluded.
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
              "Occasional engine operation creates fuel-aging, catalyst-temperature, noise, vibration, and emissions challenges.",
              "A modular bay does not mean a literal one-for-one volume swap; crash, cooling, plumbing, and structure still differ.",
              "Cost, durability, repairability, certification, and real-world efficiency require full engineering validation.",
            ].map((item) => (
              <p key={item} className="border border-white/12 bg-white/[0.04] p-5 leading-7 text-slate-200">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e6dc] py-16 text-[#071522] sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9c2826]">
              Two factual Ford precedents
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold">Both halves have existed—just not together.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Ford’s 2019 Transit Custom and Tourneo Custom Plug-In Hybrids drove their front wheels exclusively
              with an electric motor. A 1.0-liter gasoline engine acted solely as a range extender, with no physical
              connection to the wheels. That series-hybrid architecture stayed within the Transit Custom family.
            </p>
            <p>
              Ford’s announced Universal EV Platform applies ground-up electric architecture and new assembly logic
              to a family of affordable vehicles, beginning with a roughly $30,000 midsize four-door electric pickup
              targeted for 2027.
            </p>
            <p className="border-l-4 border-[#9c2826] pl-5 font-medium text-[#071522]">
              Project Dynamo is the speculative “yes, and”: combine electric-only wheel drive with electric-first
              manufacturing, then extend that logic across a complete vehicle family.
            </p>
            <div className="flex flex-wrap gap-5 text-sm font-semibold">
              <a
                href="https://media.ford.com/content/fordmedia/feu/gb/en/news/2019/09/23/New-Ford-Transit-and-Tourneo-Custom-Plug-In-Hybrids-Deliver-Zero-Emission-Driving.html"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--blue)] underline underline-offset-4"
              >
                Transit Custom announcement
              </a>
              <a
                href="https://wwwqa.fromtheroad.ford.com/eur/en/articles/2025/ford-affordable-electric-vehicle-platform-midsize-truck"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--blue)] underline underline-offset-4"
              >
                Universal EV Platform announcement
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src={`${assetRoot}/family.png`}
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
          <p className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            “We found Clark for the twenty-first century—in a flash of imagination and creative engineering.”
          </p>
          <p className="mx-auto mt-10 max-w-4xl text-xs leading-6 text-slate-400">
            Independent concept study. Clark Motor Company is fictional and its red trapezoid logo is used as a
            stand-in. Ford Motor Company is named only as a factual precedent and point of comparison. This work was
            not created for, commissioned by, sponsored by, reviewed by, or endorsed by Ford or any other
            manufacturer. All Clark specifications, performance, costs, and efficiency figures are simulated design
            targets, not tested or certified claims. Vehicle and schematic imagery were produced with generative
            tools under human creative direction.
          </p>
        </div>
      </section>
    </main>
  )
}
