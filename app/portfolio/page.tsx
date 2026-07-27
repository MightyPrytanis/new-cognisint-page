import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type PortfolioItem = {
  label: string
  title: string
  description: string
  href: string
  linkLabel: string
  src?: string
  width?: number
  height?: number
  external?: boolean
  featured?: boolean
}

export const metadata: Metadata = {
  title: "Portfolio | Cognisint",
  description:
    "Selected Cognisint work in public analysis, governance frameworks, legal workflow tools, and applied AI design.",
}

const portfolioItems: PortfolioItem[] = [
  {
    label: "Product & Platform Strategy",
    title: "Project Dynamo",
    description:
      "An independent proposal for an established North American–based global automaker: a ground-up electric-drive platform with battery-electric and generator-extended energy strategies.",
    href: "/portfolio/project-dynamo",
    linkLabel: "Explore the design study",
    src: "/projects/project-dynamo/estate.png",
    width: 1672,
    height: 941,
    featured: true,
  },
  {
    label: "Regional Planning Concept",
    title: "Capital Region Eastern Greenway",
    description:
      "A portfolio white paper proposing an integrated mobility, conservation, and development framework for the eastern edge of Greater Lansing.",
    href: "/portfolio/capital-region-eastern-greenway",
    linkLabel: "Explore the case study",
    src: "/projects/capital-region-eastern-greenway/aerial-overview.png",
    width: 1672,
    height: 941,
  },
  {
    label: "Essay",
    title: "Michigan's Public Sector Is Getting AI Wrong",
    description:
      "Part 1 of 3. A public-sector AI essay about moving from scattered restrictions to coherent, accountable strategy.",
    href: "/writing/michigan-public-sector-ai",
    linkLabel: "Read the essay",
  },
  {
    label: "Framework",
    title: "Cognisint AI/User Integrity Framework",
    description:
      "A standards framework for evaluating AI-mediated interactions through transparency, accountability, user sovereignty, and trust.",
    href: "/framework",
    linkLabel: "Read the framework",
  },
  {
    label: "Live Beta",
    title: "MiCite",
    description:
      "A Michigan-specific legal citation formatter that reduces repetitive drafting friction. MiCite does not use AI; it is included as practical legal workflow design.",
    href: "https://micite.online",
    linkLabel: "Open MiCite",
    src: "/micite-wordmark-approved.png",
    width: 320,
    height: 180,
    external: true,
  },
  {
    label: "Applied AI Workflow",
    title: "Cyrano",
    description:
      "An in-progress agent-workflow system for coordinating specialized tools, structured work, and human review in professional settings.",
    href: "/portfolio",
    linkLabel: "Project notes in development",
    src: "/cyrano-horizontal-lockup-approved.png",
    width: 280,
    height: 147,
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="selected-work-band py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="mb-10 rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--forest-light)]">Portfolio</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Selected Work with Practical Stakes
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              A few current examples you can use to assess how Cognisint approaches real institutional problems:
              regional planning, public AI policy, trust frameworks, legal workflow friction, and applied technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {portfolioItems.map((item) => {
            const card = (
              <article
                className={`selected-work-card flex h-full flex-col ${
                  item.featured ? "md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-8" : ""
                }`}
              >
                {item.src && item.width && item.height ? (
                  <div
                    className={
                      item.featured
                        ? "mb-6 overflow-hidden border border-border bg-[var(--surface)] md:mb-0"
                        : "mb-5 flex h-20 items-center"
                    }
                  >
                    <Image
                      src={item.src}
                      alt={item.featured ? `${item.title} conceptual aerial overview` : `${item.title} logo`}
                      width={item.width}
                      height={item.height}
                      sizes={item.featured ? "(min-width: 768px) 52vw, 100vw" : "320px"}
                      loading={item.featured ? "eager" : "lazy"}
                      className={
                        item.featured
                          ? "h-full min-h-64 w-full object-cover"
                          : "max-h-16 w-auto object-contain"
                      }
                    />
                  </div>
                ) : null}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">
                    {item.linkLabel}
                  </p>
                </div>
              </article>
            )

            return item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`group block ${item.featured ? "md:col-span-2" : ""}`}
              >
                {card}
              </a>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className={`group block ${item.featured ? "md:col-span-2" : ""}`}
              >
                {card}
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
