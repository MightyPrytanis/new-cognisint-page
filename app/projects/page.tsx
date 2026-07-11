import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type TechnologyConcept = {
  name: string
  label: string
  description: string
  src: string
  width: number
  height: number
  href?: string
  linkLabel?: string
}

const technologyConcepts: TechnologyConcept[] = [
  {
    name: "Cyrano",
    label: "Applied AI Workflow",
    description:
      "An in-progress agent-workflow system for coordinating specialized tools, structured work, and human review in applied professional settings.",
    src: "/cyrano-horizontal-lockup-approved.png",
    width: 280,
    height: 147,
  },
  {
    name: "MiCite",
    label: "Live Beta",
    description:
      "A Michigan-specific legal citation formatter built to reduce repetitive formatting friction. MiCite does not use AI; it is included here as practical legal technology rather than as an AI/User Integrity Framework example.",
    src: "/micite-wordmark-approved.png",
    width: 320,
    height: 180,
    href: "https://micite.online",
    linkLabel: "MiCite.online",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-8 rounded-sm bg-transparent">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <section className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Projects</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Selected Work
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A focused set of applied tools and systems with enough substance to show the direction of the work without
            padding the page with placeholders.
          </p>
        </section>

        <section className="mt-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Applied Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">Current Examples</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {technologyConcepts.map((concept) => {
              const card = (
                <article className="package-card flex min-h-64 flex-col justify-between p-6 transition group-hover:border-[var(--blue)]">
                  <div className="flex h-24 items-center">
                    <Image
                      src={concept.src}
                      alt={`${concept.name} logo`}
                      width={concept.width}
                      height={concept.height}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">
                      {concept.label}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">{concept.name}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{concept.description}</p>
                    {concept.linkLabel ? (
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">
                        {concept.linkLabel}
                      </p>
                    ) : null}
                  </div>
                </article>
              )

              return concept.href ? (
                <a key={concept.name} href={concept.href} target="_blank" rel="noreferrer" className="group block">
                  {card}
                </a>
              ) : (
                <div key={concept.name}>{card}</div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
