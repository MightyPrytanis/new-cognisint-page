import { Button } from "@/components/ui/button"
import { ArrowLeft, BriefcaseBusiness, Cpu, PenTool, ShieldCheck } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Strategic Advisory",
    description:
      "Advisory support for institutions navigating modernization, governance, technology adoption, public trust, organizational change, and long-range strategy.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technology Governance and AI Policy",
    description:
      "Review and development of practical policies, decision frameworks, procurement questions, and governance approaches for responsible technology and AI use.",
    icon: ShieldCheck,
  },
  {
    title: "Custom App and Workflow Solutions",
    description:
      "Custom software concepts, workflow tools, and AI-enabled applications are in development for organizations that need practical systems aligned with human judgment, accountability, and institutional control.",
    icon: Cpu,
  },
  {
    title: "Writing, Research, and Proposals",
    description:
      "Essays, white papers, public-facing proposals, presentations, and applied research on governance, technology, economic development, public institutions, and civic strategy.",
    icon: PenTool,
  },
]

export default function ServicesPage() {
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Services</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Services and Applied Work
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Cognisint supports institutions through selected advisory, consulting, writing, research, and applied
            technology work. Engagements are shaped around the problem, not around a prefabricated package.
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="package-card p-6">
              <service.icon className="h-7 w-7 text-[var(--blue)]" aria-hidden="true" />
              <h2 className="mt-7 text-2xl font-semibold text-foreground">{service.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 bg-[var(--ink)] p-8 text-white">
          <h2 className="text-2xl font-semibold">Engagements Begin With Fit</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-200">
            Cognisint is suitable for serious institutional conversations where judgment, legitimacy, accountability,
            governance, and practical execution matter.
          </p>
          <Button asChild className="mt-6 rounded-sm bg-white text-[var(--ink)] hover:bg-slate-100">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </section>
      </div>
    </main>
  )
}
