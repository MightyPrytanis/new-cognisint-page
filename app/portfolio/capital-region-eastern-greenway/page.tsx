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
}: {
  src: string
  alt: string
  width: number
  height: number
  caption: string
  priority?: boolean
}) {
  return (
    <figure>
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
                Capital Region Eastern Greenway
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
                Conceptual illustrations are planning aids, not engineering drawings, surveyed alignments, or findings
                of feasibility.
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
            <p className="mt-2 font-semibold text-foreground">Limited-access expressway</p>
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
            <p className="mt-2 font-semibold text-foreground">Mobility without induced sprawl</p>
          </div>
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
            caption="The Greenway is conceived as a divided, limited-access expressway embedded in a permanent conservation landscape. At-grade intersections provide selective permeability; the absence of driveways and frontage access preserves regional movement and prevents ribbon development."
          />
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
              The regional choice
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Build structure before fragmentation makes structure impossible.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Greater Lansing still possesses a coherent eastern landscape of farms, wetlands, woodlots, and open land.
              Growth from Okemos and Haslett toward Williamston and Bath is steadily consuming that coherence. Once the
              land is divided by scattered subdivisions, driveways, and utility extensions, both conservation and
              meaningful corridor planning become far more expensive.
            </p>
            <p>
              The Greenway responds before that pattern becomes irreversible. It combines a north–south regional
              mobility route with protected open space, natural water management, habitat continuity, recreation,
              nonmotorized transportation, and a framework for concentrating new development at planned nodes.
            </p>
            <p className="font-semibold text-foreground">
              The proposal is not anti-growth. It is a strategy for directing growth where infrastructure can support
              it without consuming the landscape that gives the region its identity and resilience.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
                A deliberately intermediate facility
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                Neither freeway nor stroad
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              Michigan usage has often blurred the terms, but a freeway and an expressway are not the same thing. The
              distinction is central to this concept.
            </p>
          </div>

          <div className="mt-10 grid border border-border bg-white md:grid-cols-3">
            <article className="p-7 sm:p-9">
              <h3 className="text-xl font-semibold text-foreground">Freeway</h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                Full control of access and complete grade separation. Traffic enters only through ramps and
                interchanges; streets, railroads, trails, and other crossings pass above or below the roadway.
              </p>
            </article>
            <article className="border-y-4 border-[var(--forest)] bg-[color-mix(in_srgb,var(--forest)_8%,white)] p-7 sm:p-9 md:border-x md:border-y-4">
              <div className="flex items-center gap-3">
                <Route className="h-6 w-6 text-[var(--forest)]" aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-[var(--navy)]">Expressway</h3>
              </div>
              <p className="mt-4 leading-7 text-foreground">
                Limited access without complete grade separation. Direct property access is prohibited, while selected
                roads meet the corridor at carefully designed, signalized or unsignalized at-grade intersections.
              </p>
            </article>
            <article className="p-7 sm:p-9">
              <h3 className="text-xl font-semibold text-foreground">Stroad</h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                A high-speed arterial burdened with driveways, turning conflicts, and continuous commercial frontage.
                It attempts to provide movement and local access simultaneously and performs both functions poorly.
              </p>
              <p className="mt-4 font-semibold text-foreground">The Greenway is not a stroad.</p>
            </article>
          </div>

          <div className="mt-8 border-l-4 border-[var(--blue)] bg-white px-6 py-5 text-lg leading-8 text-foreground shadow-sm">
            Only the I-69 and I-96 termini are conceived as grade-separated interchanges. Major intermediate roads
            remain selectively permeable through signals, roundabouts, Michigan Lefts, RCUTs, or other
            context-appropriate intersection forms. A new Red Cedar River bridge and likely railroad flyovers are
            separate crossing needs, not invitations to convert every intersection into an interchange.
          </div>
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
                A new eastern edge for the Capital Region
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-200">
              The conceptual alignment follows the Woodbury–Shoesmith–Burkley spine and adjoining property lines from
              I-69 to I-96, east of Haslett and Okemos and west of Williamston. Much of the southern half crosses
              farmland where no road exists today.
            </p>
          </div>

          <div className="mt-10">
            <Figure
              src={`${assetRoot}/definitive-route-map.png`}
              alt="Definitive conceptual route map for the Capital Region Eastern Greenway between I-69 and I-96"
              width={2048}
              height={1246}
              caption="Definitive conceptual route map. Exact alignment, intersection control, environmental impacts, right-of-way, and costs would require formal study. The concept assumes no direct frontage access and permanent conservation controls within the corridor."
            />
          </div>
        </div>
      </section>

      <section className="section-band bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
              The corridor as a public landscape
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              More than pavement with amenities
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The Greenway is organized as a sequence of functional zones. The road is one controlled subsystem within
              a wider environmental and civic corridor, not the organizing purpose to which everything else is added
              later.
            </p>
          </div>

          <div className="mt-10">
            <Figure
              src={`${assetRoot}/conceptual-cross-section.png`}
              alt="Conceptual cross section of the Capital Region Eastern Greenway showing conservation, trail, water management, ha-ha, safety, roadway, and median zones"
              width={1774}
              height={887}
              caption="Conceptual cross section. Widths illustrate a planning framework and are not final design criteria. The median reserve is not a third through lane; it preserves future flexibility for transit, managed lanes, carpool use, emergency operations, or other needs."
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="border-t-4 border-[var(--forest)] pt-6">
              <Leaf className="h-7 w-7 text-[var(--forest)]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Conservation and access control</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Public land, conservation easements, farmland-preservation agreements, development-rights acquisition,
                and limited-access rights establish a durable green edge without requiring public ownership of every
                adjoining parcel.
              </p>
            </article>
            <article className="border-t-4 border-[var(--blue)] pt-6">
              <Waves className="h-7 w-7 text-[var(--blue)]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Water and habitat infrastructure</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Naturalized ponds, wetlands, bioswales, rain gardens, culverts, and wildlife passages manage runoff and
                snowmelt while maintaining ecological continuity.
              </p>
            </article>
            <article className="border-t-4 border-[var(--navy)] pt-6">
              <Route className="h-7 w-7 text-[var(--navy)]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">Movement at several scales</h3>
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
            alt="Photorealistic concept detail showing a landscape-facing ha-ha edge between a nonmotorized trail and roadway safety zone"
            width={1698}
            height={926}
            caption="Conceptual ha-ha detail. The abrupt retaining face is oriented toward the landscape and trail side; from the roadway, the edge recedes into the landform rather than reading as a continuous wall."
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
              Separation without rupture
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              How a ha-ha works
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                A ha-ha is an abrupt, landscape-integrated vertical edge paired with a ditch or change in grade. It
                creates a physical boundary while preserving longer sightlines and avoiding continuous fencing or a
                conventional barrier wall.
              </p>
              <p>
                Here, the visible retaining face addresses the landscape side, discouraging people, deer, pets, and
                off-road vehicles from entering the traffic zone. The landform funnels movement toward designated
                crossings and regularly spaced wildlife underpasses.
              </p>
              <p>
                The roadway-side safety and runoff zone remains distinct. Its shallow ditch is shaped to capture water,
                store snow, and slow or contain an errant vehicle without forming a ramp toward the trail.
              </p>
              <p className="font-semibold text-foreground">
                Ha-has do some of the work normally assigned to fencing and full grade separation through landform,
                sightline, sound, and behavioral guidance.
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
                History as a design constraint
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                Lansing has already lived both outcomes.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                I-496 cut through Main Street and the heart of Black Lansing, removing homes, businesses, community
                institutions, and historic landmarks including the Ransom E. Olds mansion. Its costs were borne by a
                community with little power to alter the state&apos;s preferred alignment.
              </p>
              <p>
                The proposed Campus Freeway met a different fate. Michigan State University and President John A.
                Hannah could marshal political influence unavailable to Lansing&apos;s Black neighborhoods. The campus
                alignment was cancelled; its intended entrance is now the comparatively tranquil, green Trowbridge Road
                approach.
              </p>
              <p>
                The contrast is not an argument against regional mobility. It is an argument that transportation
                choices are also choices about power, land, and the future form of communities. The Greenway begins
                with those consequences rather than treating them as mitigation after a roadway decision has already
                been made.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Avoiding the all-or-nothing trap</h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                Michigan&apos;s historic preference for either full freeway construction or no meaningful improvement
                has obscured useful intermediate forms: expressways, super-twos, access-managed bypasses, and selective
                grade separation. The abandoned US-23 freeway proposal in northeast Lower Michigan illustrates the
                cost. When federal review required alternatives short of a full freeway, MDOT abandoned the project,
                leaving the region&apos;s mobility, safety, isolation, and economic disadvantages unresolved.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Designed for today, governed for tomorrow</h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                The Greenway is not designed for eventual freeway conversion, but neither is conversion made physically
                impossible. As with East Beltline, Old 27, Telegraph Road, or M-37, future generations could acquire
                more right-of-way and add grade separations. What permits or prevents that choice is public will. The
                present task is to meet present needs without paying now for a freeway the region may never require.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-band py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest-light)]">
              Read the complete proposal
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A practical framework for regional order, not a finished engineering plan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              The 23-page white paper develops the historical case, corridor concept, access model, conservation
              strategy, cross section, stakeholder framework, and questions requiring formal study.
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
