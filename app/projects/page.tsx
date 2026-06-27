import { Button } from "@/components/ui/button"
import { ArrowLeft, Cpu, FileText, Landmark, Map } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type TechnologyConcept = {
  name: string
  status: string
  src: string
  width: number
  height: number
  href?: string
  linkLabel?: string
}

const projectGroups = [
  {
    label: "Selected Concepts",
    title: "Civic and Institutional Proposals",
    description: "Selected civic and institutional concepts will be added as they are prepared for publication.",
    icon: Landmark,
  },
  {
    label: "In Development",
    title: "Technology Concepts",
    description: "Custom app solutions, workflow systems, AI-enabled tools, and applied software concepts in development.",
    icon: Cpu,
  },
  {
    label: "Published Framework",
    title: "Governance Frameworks",
    description: "The AI/User Integrity Framework is the first public framework in this area.",
    icon: FileText,
  },
  {
    label: "Forthcoming",
    title: "Economic and Community Development",
    description: "Additional concepts and analysis will be added as the project record develops.",
    icon: Map,
  },
]

const technologyConcepts: TechnologyConcept[] = [
  {
    name: "Cyrano",
    status: "MCP agent platform concept in development",
    src: "/cyrano-horizontal-lockup-approved.png",
    width: 280,
    height: 147,
  },
  {
    name: "LexFiat",
    status: "Legal and workflow concept in development",
    src: "/lexfiat-wordmark-approved.png",
    width: 300,
    height: 114,
  },
  {
    name: "Arkiver",
    status: "Knowledge architecture concept in development",
    src: "/arkiver-wordmark-approved.png",
    width: 290,
    height: 68,
  },
  {
    name: "MiCite",
    status: "Michigan-specific legal citation formatting app coming soon",
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
            Projects and Concepts
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            This page gathers selected applied concepts, civic proposals, governance frameworks, and technology
            experiments connected to Cognisint's work. It will expand as individual projects are ready for public
            presentation.
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projectGroups.map((project) => (
            <article key={project.title} className="publication-card">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">
                <project.icon className="h-4 w-4" aria-hidden="true" />
                {project.label}
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-foreground">{project.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Technology Concepts
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">Selected App and Workflow Concepts</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              These concepts represent applied technology directions currently in development. More detail will be
              added as each item matures.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {technologyConcepts.map((concept) => {
              const card = (
                <article className="package-card flex min-h-48 flex-col justify-between p-5 transition group-hover:border-[var(--blue)]">
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
                    <h3 className="text-lg font-semibold text-foreground">{concept.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{concept.status}</p>
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
