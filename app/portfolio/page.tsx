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
}

export const metadata: Metadata = {
  title: "Portfolio | Cognisint",
  description: "Selected Cognisint work in writing, governance, legal technology, and applied AI workflow design.",
}

const portfolioItems: PortfolioItem[] = [
  {
    label: "Essay",
    title: "Michigan's Public Sector Is Getting AI Wrong",
    description:
      "Part 1 of 3. A public-sector AI essay about why institutions need coherent strategies grounded in accountability and trust.",
    href: "/writing/michigan-public-sector-ai",
    linkLabel: "Read the essay",
  },
  {
    label: "Framework",
    title: "Cognisint AI/User Integrity Framework",
    description:
      "A developing statement of Standards of Trust for transparency, accountability, user sovereignty, and responsible AI-mediated interaction.",
    href: "/framework",
    linkLabel: "Read the framework",
  },
  {
    label: "Live Beta",
    title: "MiCite",
    description:
      "A Michigan-specific legal citation formatter built to reduce repetitive formatting friction. MiCite does not use AI; it is included here as practical legal technology rather than as an AI framework example.",
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
      "An in-progress agent-workflow system for coordinating specialized tools, structured work, and human review in applied professional settings.",
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
              Work You Can Read, Test, or Evaluate
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Selected examples of public analysis, governance principles, applied legal technology, and emerging AI
              workflow design.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {portfolioItems.map((item) => {
            const card = (
              <article className="selected-work-card flex h-full flex-col">
                {item.src && item.width && item.height ? (
                  <div className="mb-5 flex h-20 items-center">
                    <Image
                      src={item.src}
                      alt={`${item.title} logo`}
                      width={item.width}
                      height={item.height}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ) : null}
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">
                  {item.linkLabel}
                </p>
              </article>
            )

            return item.external ? (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group block">
                {card}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className="group block">
                {card}
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
