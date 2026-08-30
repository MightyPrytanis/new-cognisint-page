import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, Download, FileText, Leaf, Route, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const assetRoot = "/projects/capital-region-eastern-greenway"

export const metadata: Metadata = {
  title: "Capital Region Eastern Greenway | Cognisint",
  description:
    "A regional planning and policy framework for mobility, conservation, and deliberate growth east of Meridian Township.",
  openGraph: {
    title: "Capital Region Eastern Greenway",
    description:
      "A regional planning and policy framework for mobility, conservation, and deliberate growth east of Meridian Township.",
    images: [`${assetRoot}/aerial-overview.png`],
  },
}

function Figure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  className = "",
}: {
  src: string
  alt: string
  width: number
  height: number
  caption: string
  priority?: boolean
  className?: string
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden border border-border bg-white shadow-[0_24px_65px_rgba(7,21,34,0.12)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4 text-lg leading-8 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--forest)]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CapitalRegionEasternGreenwayPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[var(--ink)] text-white">
        <div className="absolute inset-0 packaging-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Button
            asChild
            variant="outline"
            className="mb-12 rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--forest-light)]">
                Regional planning and policy framework
              </p>
              <h1 className="mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl">
                Proposal: The Capital Region Eastern Greenway
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-200">
                An integrated mobility, conservation, and development strategy for the eastern edge of Greater Lansing.
              </p>
            </div>

            <div className="border-l-4 border-[var(--forest-light)] pl-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Status</p>
              <p className="mt-3 text-lg leading-7 text-white">
                Independent concept paper prepared as a sample of Cognisint&apos;s public-works and institutional
                strategy practice.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Conceptual illustrations are planning aids requiring engineering, surveying, cost, and feasibility
                review.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-sm bg-white text-[var(--ink)] hover:bg-slate-100">
              <a
                href={`${assetRoot}/capital-region-eastern-greenway-white-paper.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Read the White Paper
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`${assetRoot}/capital-region-eastern-greenway-white-paper.pdf`} download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-4 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
          <div className="px-4 py-5 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">Facility</p>
            <p className="mt-2 font-semibold text-foreground">Limited-access expressway*</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">Roadway</p>
            <p className="mt-2 font-semibold text-foreground">Two through lanes each way</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">Access</p>
            <p className="mt-2 font-semibold text-foreground">No parcel driveways or frontage</p>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">Purpose</p>
            <p className="mt-2 font-semibold text-foreground">Mobility with binding anti-sprawl controls</p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-3 text-sm leading-6 text-muted-foreground sm:px-6 lg:px-8">
          <strong className="text-foreground">* Expressway And Freeway.</strong> An expressway limits direct property
          access and may include selected at-grade intersections. A freeway uses full access control and grade
          separation. The terms are often used interchangeably in Michigan and elsewhere in the United States. The
          Greenway combines limited parcel access with selected at-grade public-road intersections; only its I-69 and
          I-96 termini are conceived as grade-separated interchanges.
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Figure
            src={`${assetRoot}/aerial-overview.png`}
            alt="Photorealistic aerial concept of the Capital Region Eastern Greenway passing through protected farmland and wetlands, with a signalized intersection and a roundabout"
            width={1672}
            height={941}
            priority
            caption="The Greenway combines a divided, limited-access roadway with a permanent conservation landscape. Selected roads meet it at carefully designed at-grade intersections; the absence of driveways and frontage access preserves regional movement and prevents ribbon development."
          />
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
                Regional Context
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                The Missing Eastern Connection
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                I-69 arcs across the north of Greater Lansing, I-96 across the south, and US-127 and I-496 carry much
                of the central north-south and east-west movement. The regional system has no comparable eastern leg
                between I-69 and I-96.
              </p>
              <p>
                The Greenway tests whether that missing connection can be supplied inside a permanent conservation
                corridor while avoiding the land-consumption pattern of a conventional beltway.
              </p>
            </div>
          </div>
          <Figure
            src={`${assetRoot}/lansing-regional-road-context.png`}
            alt="Simplified regional road map showing Greater Lansing's existing major roads and a dashed conceptual eastern connection"
            width={1220}
            height={680}
            className="mx-auto mt-10 max-w-2xl"
            caption="Simplified regional context. Existing major roads wrap around Lansing and East Lansing on the north, west, and south; the dashed green line shows the missing eastern connection as a planning concept. Existing road geometry is from U.S. Census Bureau TIGER/Line 2025."
          />
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
              Consequences The Design Must Address
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Does Regional Mobility Require Harsh Tradeoffs?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              High-volume roads were built to connect places, shorten trips, carry freight, and open access to jobs.
              They did those things. They also displaced residents, divided neighborhoods, made automobile travel the
              easiest or only practical choice in many places, and extended development into land that required ever
              more roads, utilities, and public services.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The consequences differ with context. When high-volume roads were built through established urban
              neighborhoods, acquisition and the roadway itself displaced people and divided the communities that
              remained. When the same road-building model extended into suburban and rural land, it encouraged
              automobile-dependent development and spread infrastructure, environmental, and service costs across a
              larger area.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="border-t-4 border-[var(--blue)] pt-6">
              <h3 className="text-2xl font-semibold">When High Volume Roads Cut Through Developed Communities</h3>
              <BulletList
                items={[
                  "Acquisition can remove homes, businesses, institutions, and historic places. Compensation cannot re-create the resulting customer bases, social networks, or neighborhood economy.",
                  "The roadway can sever vehicle and pedestrian connections, turn local streets into dead ends, and isolate parts of a neighborhood. The Olds Freeway/I-496 did this in Lansing.",
                  "Urban freeway and urban-renewal programs often cut through racial and ethnic minority, low-income, immigrant, and working-class neighborhoods where land was cheaper or political resistance was weaker.",
                ]}
              />
            </div>
            <div className="border-t-4 border-[var(--forest)] pt-6">
              <h3 className="text-2xl font-semibold">When High Volume Roads Extend Through Suburban And Rural Areas</h3>
              <BulletList
                items={[
                  "Fast roads, stroads, and dispersed development can make walking and bicycling indirect, encourage automobile trips, and make fixed-route transit difficult to support.",
                  "Roads and the development they enable can consume farmland and green space, fragment habitat, alter water systems, and increase wildlife-vehicle collision risks.",
                  "Dispersed growth extends roads, utilities, emergency response, and other public services across a larger area, creating long-term maintenance and operating obligations.",
                ]}
              />
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-2xl font-semibold">Effects In Either Setting</h3>
            <BulletList
              items={[
                "New capacity can attract diverted, longer, shifted, or entirely new trips; evidence and modeling must establish any congestion relief.",
                "More driving creates more crash exposure, higher speeds increase severity, and construction and maintenance consume substantial land, materials, and energy.",
              ]}
            />
          </div>

          <div className="mt-12 border-l-4 border-[var(--forest)] bg-[color-mix(in_srgb,var(--forest)_8%,white)] px-6 py-6">
            <h3 className="text-xl font-semibold text-foreground">The Greenway&apos;s Response</h3>
            <BulletList
              items={[
                "Control access through strict frontage limits and selected crossings, with development concentrated at compact nodes.",
                "Protect land while providing a separated trail, transit reservation, and integrated water and wildlife systems.",
                "Compare the proposal with a genuine no-build alternative and account for its full lifecycle costs.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
              The regional choice
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Build Infrastructure Before Fragmentation Makes It Cost-Prohibitive
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Greater Lansing, including many areas within a short distance of suburbanized or even fully urbanized
              areas, still possesses a coherent eastern landscape of farms, wetlands, woodlots, and open land. Growth
              from Okemos and Haslett toward Williamston and Bath is steadily consuming that coherence. Once the land is
              divided by scattered subdivisions, driveways, and utility extensions, both conservation and meaningful
              corridor planning become far more expensive.
            </p>
            <p>
              The Greenway responds before that pattern becomes irreversible. It combines a north–south regional
              mobility route with protected open space, natural water management, habitat continuity, recreation,
              nonmotorized transportation, and a framework for concentrating new development at planned nodes.
            </p>
            <p className="font-semibold text-foreground">
              The Greenway offers a potential response to transportation, green space, conservation, and growth
              management needs by combining the regional connectivity of a beltway, the landscape integration of a
              parkway, and the land protection of a greenbelt while accounting for the problems associated with each.
              It directs growth toward places where infrastructure can support it while preserving the landscape that
              gives the region its identity and resilience.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
                Road Design
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                The Greenway&apos;s Design
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              A four-lane, limited-access roadway with two through lanes in each direction, a wide future transit and
              managed-flex reserve, selected at-grade junctions, and grade-separated I-69 and I-96 termini.
            </p>
          </div>

          <BulletList
            items={[
              "Only the I-69 and I-96 termini are conceived as grade-separated interchanges.",
              "Major intermediate roads remain selectively permeable through signals, roundabouts, Michigan Lefts, RCUTs, or other forms selected for the specific location.",
              "The Red Cedar River bridge and likely railroad flyovers are separate crossings.",
            ]}
          />
        </div>
      </section>

      <section className="bg-[var(--forest-slate)] py-16 text-white sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest-light)]">
                Corridor geography
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                A New Eastern Edge For The Capital Region
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-200">
              The conceptual route follows a north-south alignment along Woodbury, Shoesmith, and Burkley roads and
              property lines from I-69 to I-96, east of Haslett and Okemos and west of Williamston. Much of the
              southern half crosses farmland where no road exists today.
            </p>
          </div>

          <div className="mt-10">
            <Figure
              src={`${assetRoot}/definitive-route-map.png`}
              alt="Conceptual route map for the Capital Region Eastern Greenway between I-69 and I-96"
              width={2048}
              height={1246}
              caption="Conceptual route map. Exact alignment, intersection control, environmental impacts, right-of-way, and costs require formal study. The concept assumes no direct frontage access and permanent conservation controls within the corridor."
            />
          </div>
        </div>
      </section>

      <section className="section-band bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
              The Corridor As A Public Landscape
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              How The Corridor Fits Together
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The Greenway is organized as a sequence of functional zones. The road functions as one integrated
              subsystem within a wider environmental and civic corridor whose optional features can be adapted by
              location.
            </p>
          </div>

          <div className="mt-10">
            <Figure
              src={`${assetRoot}/conceptual-cross-section.png`}
              alt="Conceptual cross section of the Capital Region Eastern Greenway showing conservation, trail, water management, ha-ha, safety, roadway, and median zones"
              width={1774}
              height={887}
              caption="Conceptual cross section. The sequence of roadway, recovery, water, trail, landscape, and conservation areas illustrates how the corridor's functions fit together. Dimensions remain subject to engineering and environmental study."
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="border-t-4 border-[var(--forest)] pt-6">
              <Leaf className="h-7 w-7 text-[var(--forest)]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Conservation And Access Control</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Public land, conservation easements, farmland-preservation agreements, development-rights acquisition,
                and limited-access rights establish a durable green edge without requiring public ownership of every
                adjoining parcel.
              </p>
            </article>
            <article className="border-t-4 border-[var(--blue)] pt-6">
              <Waves className="h-7 w-7 text-[var(--blue)]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Water And Habitat Infrastructure</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Naturalized ponds, wetlands, bioswales, rain gardens, culverts, and wildlife passages manage runoff and
                snowmelt while maintaining ecological continuity.
              </p>
            </article>
            <article className="border-t-4 border-[var(--navy)] pt-6">
              <Route className="h-7 w-7 text-[var(--navy)]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Movement At Several Scales</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Regional traffic, transit, walking, cycling, recreation, and local crossings occupy distinct but
                connected spaces. The design preserves safety and legibility without turning the corridor into a wall.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
          <Figure
            src={`${assetRoot}/ha-ha-detail.png`}
            alt="Conceptual landscape-facing Ha-Ha edge between a nonmotorized trail and roadway safety zone"
            width={1698}
            height={926}
            caption="The landscape-facing “Ha-Ha” is one possible boundary treatment within the larger water, safety, trail, and conservation system."
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
              Design Detail
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              A Landscape-facing “Ha-Ha”
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                A “Ha-Ha”—a short, abrupt retaining edge paired with a ditch or change in grade—is one possible boundary
                tool. Here, its visible face would address the landscape and trail side while the roadway side rises
                gradually. It could discourage entry and help guide people or animals toward designed crossings while
                preserving open views.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
                History As A Design Constraint
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                Black Lansing And MSU: Same Region, Unequal Result
              </h2>
              <Figure
                src={`${assetRoot}/main-street-logan-pre-496.png`}
                alt="Historic view north on Logan Street across Main Street and St. Joseph Highway before I-496"
                width={1940}
                height={1564}
                className="mt-8"
                caption="Logan Street looking north across Main Street and St. Joseph Highway before I-496. Undated photograph published in City Pulse, December 5, 2018, p. 12; the photographer and rights holder are unidentified."
              />
            </div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                In the 1960s, I-496, also known as the Ransom E. Olds Freeway, cut through Main Street and the heart of
                Black Lansing, removing homes, businesses, community institutions, and historic landmarks,
                including—ironically—the Ransom E. Olds mansion. Its costs were borne by a community with little power
                to alter the state&apos;s preferred alignment.
              </p>
              <p>
                The proposed cross-campus freeway—the eastern half of the same crosstown route, intended to connect
                where I-496 meets US-127—met a different fate. John A. Hannah, MSU&apos;s president from 1941 to 1969,
                oversaw the university&apos;s rise to national prominence. In 1971, after sustained student, faculty,
                neighborhood, and municipal opposition, the MSU Board of Trustees rejected the route and East Lansing
                withdrew support.
              </p>
              <p>
                MSU possessed leverage unavailable to Black Lansing. The university built during Hannah&apos;s presidency
                controlled a consolidated campus, had a powerful governing board, substantial wealth and political
                standing, and benefited from the racial and institutional privilege accorded a major public university.
                Black residents and merchants along Main Street—already constrained by discriminatory housing,
                lending, and real-estate systems—lacked a comparable institution able to force reconsideration.
              </p>
              <p>
                Transportation choices distribute power as well as movement. The Greenway begins with those
                consequences in view.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">Facility Type</p>
              <h3 className="mt-4 text-2xl font-semibold">Rethinking Michigan&apos;s Road Strategy</h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                Michigan&apos;s historic preference for either full freeway construction or no meaningful improvement
                has obscured useful middle forms: expressways, super-twos, access-managed bypasses, and selective grade
                separation. The Greenway is one example of innovative thinking outside a freeway-or-nothing binary.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">Future Governance</p>
              <h3 className="mt-4 text-2xl font-semibold">
                A Design Adaptable To The Needs Of The Community Now And In The Future
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                The Greenway is designed to meet present needs while preserving room for future transit, managed
                operations, revised intersection treatments, and other mobility technologies when evidence and funding
                support them. Future communities retain authority to modify the corridor to address new needs or
                choices. Later freeway conversion would require new right-of-way, overpasses, ramps, environmental
                review, funding, and public authorization. The present design directs current investment toward current
                needs while leaving that future decision open.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-band py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest-light)]">
              Read The Complete Proposal
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              What The White Paper Covers
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              The revised white paper develops the historical case, corridor concept, access model, known
              transportation and land-use risks, conservation strategy, cross section, stakeholder framework, and
              questions requiring formal study.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="rounded-sm bg-white text-[var(--ink)] hover:bg-slate-100">
              <a
                href={`${assetRoot}/capital-region-eastern-greenway-white-paper.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Open White Paper
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`${assetRoot}/capital-region-eastern-greenway-white-paper.pdf`} download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
