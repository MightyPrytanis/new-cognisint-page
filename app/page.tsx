import { Button } from "@/components/ui/button"
import type React from "react"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CircleCheck,
  Cpu,
  FileText,
  Handshake,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type SelectedWork = {
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

const principles = [
  {
    title: "Service",
    description:
      "Good modernization should leave people, institutions, and communities with more capacity than it takes from them.",
    icon: Handshake,
  },
  {
    title: "Integrity",
    description:
      "Policies, tools, and strategies should be honest about tradeoffs, clear about limits, and accountable to human judgment.",
    icon: ShieldCheck,
  },
  {
    title: "Fairness",
    description:
      "Durable markets and institutions need transparent rules, meaningful access, and procedures people can recognize as legitimate.",
    icon: Scale,
  },
  {
    title: "Flourishing",
    description:
      "The aim is practical abundance: stronger places, healthier professions, better tools, and more humane work.",
    icon: CircleCheck,
  },
]

const usefulFor = [
  {
    title: "Public and Civic Institutions",
    description:
      "For agencies, public bodies, and civic institutions modernizing services while protecting legitimacy, procurement discipline, and public trust.",
    icon: Landmark,
  },
  {
    title: "Legal and Professional Workflows",
    description:
      "For teams that need better tools and documentation without weakening confidentiality, quality control, or professional judgment.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Teams Facing AI Pressure",
    description:
      "For leaders who need an AI posture they can defend: practical policy, procurement questions, workflow guidance, and clear communication.",
    icon: Cpu,
  },
  {
    title: "Cross-Functional Problems",
    description:
      "For problems that cross law, policy, technology, governance, communication, and implementation without belonging neatly to one department.",
    icon: CircleCheck,
  },
]

const selectedWork: SelectedWork[] = [
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
      "A Michigan-specific legal citation formatter that reduces repetitive drafting friction. Its relevance is practical legal workflow design, not AI.",
    href: "https://micite.online",
    linkLabel: "Open MiCite",
    src: "/micite-wordmark-approved.png",
    width: 280,
    height: 158,
    external: true,
  },
  {
    label: "Applied AI Workflow",
    title: "Cyrano",
    description:
      "An in-progress agent-workflow system for coordinating specialized tools, structured work, and human review in professional settings.",
    href: "/portfolio",
    linkLabel: "View project notes",
    src: "/cyrano-horizontal-lockup-approved.png",
    width: 240,
    height: 126,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section id="top" className="relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
        <div className="absolute inset-0 packaging-grid opacity-35" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--metal)] to-transparent" />
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
              Trust, Integrity, and Strategy for the AI Age
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Institutions and organizations need to make sound, practical decisions about modernization, technology,
              and governance. Cognisint can help. Its work connects clear values with practical solutions while
              protecting institutional legitimacy, professional judgment, accountability, and public trust.
            </p>
            <p className="mt-8 text-xl font-semibold text-white sm:text-2xl">
              Real Intelligence. Real Judgment. Real Results.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-sm bg-white text-[var(--ink)] hover:bg-slate-100">
                <a href="#what-is-cognisint">Explore Cognisint</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/about">
                  Read Founder Bio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="package-panel mx-auto max-w-md p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Latest</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[var(--metal)] to-transparent" />
              <div className="divide-y divide-white/10">
                <Link href="/writing/michigan-public-sector-ai" className="group block py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">July 7, 2026</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-white group-hover:text-[var(--blue)]">
                    Michigan&apos;s Public Sector Is Getting AI Wrong
                  </h2>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Part 1 of 3: An unwinnable game of whack-a-mole
                  </p>
                </Link>

                <Link href="/framework" className="group block py-6">
                  <h2 className="text-2xl font-semibold leading-tight text-white group-hover:text-[var(--blue)]">
                    AI Responsiveness Is a Must-Have
                  </h2>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Read the Updated AI Trust Framework
                  </p>
                </Link>

                <a
                  href="https://www.linkedin.com/company/cognisint/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block py-6"
                >
                  <h2 className="text-2xl font-semibold leading-tight text-white group-hover:text-[var(--blue)]">
                    Connect on LinkedIn
                  </h2>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-is-cognisint" className="section-band relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div className="relative max-w-3xl">
            <div className="mb-8 hidden lg:block">
              <Image
                src="/institutional-system-field.png"
                alt=""
                width={1254}
                height={1254}
                aria-hidden="true"
                className="h-auto w-40 select-none xl:w-48"
              />
            </div>
            <h2 className="section-title">What Is Cognisint?</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Cognisint is an organizational advisory and applied technology practice for institutions facing real
                governance, technology, and modernization problems.
              </p>
              <p>
                It helps you clarify what is actually at stake, identify the constraints that matter, and choose a
                responsible next step before urgency turns into improvisation.
              </p>
              <p>
                The work combines legal and policy judgment, public-sector experience, applied technology, and original
                writing so strategy can become something usable.
              </p>
              <p className="font-medium text-foreground">
                The goal is durable improvement: better decisions, fairer systems, more trustworthy institutions, and
                work that leaves people with more capacity than it consumes.
              </p>
            </div>
          </div>

          <aside className="package-card h-fit p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">Founder</p>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">David Towne</h3>
            <div className="mt-4 space-y-4 text-sm leading-6 text-muted-foreground">
              <p>
                Lansing-based consultant, economic development professional, and attorney with over 20 years of
                experience across public service, private practice, and institutional governance.
              </p>
              <p>
                Former Assistant Attorney General and judicial clerk, with experience in civil litigation, real estate,
                public infrastructure, land use, consumer protection, contracts, and nonprofit governance.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-6 rounded-sm bg-transparent">
              <Link href="/about">Read Bio</Link>
            </Button>
          </aside>
        </div>
      </section>

      <section id="principles" className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionKicker>Issues and Principles</SectionKicker>
              <h2 className="section-title mt-4">What the Work Is About</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                The recurring issues are institutional trust, responsible modernization, fair systems, and the practical
                conditions that let people and organizations do good work.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <article key={item.title} className="disciplined-card">
                  <item.icon className="h-6 w-6 text-[var(--forest)]" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-band bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionKicker>Useful Situations</SectionKicker>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Where Cognisint Can Help
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                When a problem is tangled across policy, technology, operations, and trust, the useful first step is
                sharper framing: what is at stake, who is affected, what constraints matter, and what can responsibly
                happen next.
              </p>
              <Button asChild className="mt-8 rounded-sm bg-white text-[var(--ink)] hover:bg-slate-100">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {usefulFor.map((item) => (
                <article key={item.title} className="dark-package-card p-6">
                  <item.icon className="h-7 w-7 text-[var(--forest-light)]" aria-hidden="true" />
                  <h3 className="mt-7 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-band selected-work-band text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionKicker>Portfolio</SectionKicker>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Selected Work with Practical Stakes
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                These examples show how Cognisint turns ideas into usable analysis, governance frameworks, legal
                workflow tools, and applied AI concepts you can inspect.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-8 rounded-sm border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {selectedWork.map((item) => {
                const content = (
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
                    <h3 className="mt-4 text-2xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">
                      {item.linkLabel}
                    </p>
                  </article>
                )

                return item.external ? (
                  <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group block">
                    {content}
                  </a>
                ) : (
                  <Link key={item.title} href={item.href} className="group block">
                    {content}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">{children}</p>
}
