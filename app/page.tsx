import { Button } from "@/components/ui/button"
import type React from "react"
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  CircleCheck,
  Cpu,
  FileText,
  Handshake,
  Landmark,
  PenTool,
  Scale,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ConceptLogo = {
  name: string
  status: string
  src: string
  width: number
  height: number
  href?: string
  linkLabel?: string
}

const focusAreas = [
  {
    title: "Technology Governance",
    description: "Helping organizations evaluate emerging technologies responsibly.",
    icon: ShieldCheck,
  },
  {
    title: "Institutional Trust",
    description: "Building systems that people can understand, trust, and support.",
    icon: Landmark,
  },
  {
    title: "Strategic Modernization",
    description: "Improving outcomes without sacrificing mission or accountability.",
    icon: Building2,
  },
  {
    title: "Public Service and Civic Institutions",
    description: "Supporting organizations that exist to serve communities.",
    icon: Handshake,
  },
  {
    title: "Ethics and Human Judgment",
    description: "Understanding where technology helps and where human judgment remains indispensable.",
    icon: Scale,
  },
  {
    title: "Economic and Community Development",
    description: "Helping places become stronger, more prosperous, and more resilient.",
    icon: CircleCheck,
  },
  {
    title: "Applied Tools and Workflow Systems",
    description:
      "Developing practical software concepts, custom app solutions, and workflow tools that support institutional judgment rather than replacing it.",
    icon: Wrench,
  },
]

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

const conceptLogos: ConceptLogo[] = [
  {
    name: "Cyrano",
    status: "MCP agent platform concept in development",
    src: "/cyrano-horizontal-lockup-approved.png",
    width: 240,
    height: 126,
  },
  {
    name: "LexFiat",
    status: "Legal and workflow concept in development",
    src: "/lexfiat-wordmark-approved.png",
    width: 260,
    height: 99,
  },
  {
    name: "Arkiver",
    status: "Knowledge architecture concept in development",
    src: "/arkiver-wordmark-approved.png",
    width: 250,
    height: 58,
  },
  {
    name: "MiCite",
    status: "Michigan legal citation formatter in live beta testing",
    src: "/micite-wordmark-approved.png",
    width: 280,
    height: 158,
    href: "https://micite.online",
    linkLabel: "MiCite.online",
  },
]

const writing = [
  {
    label: "Frameworks",
    title: "Cognisint AI/User Integrity Framework",
    description:
      "A developing statement of Standards of Trust for transparency, accountability, and user sovereignty in AI-mediated interactions.",
  },
  {
    label: "Writing Status",
    title: "Essays and Proposals in Development",
    description: "Additional writing will be added as pieces are completed and ready for public release.",
  },
]

const collaborationGroups = [
  {
    title: "Leadership and Institutional Roles",
    description: "Employment, leadership, board, fellowship, and public-interest institutional opportunities.",
  },
  {
    title: "Advisory and Consulting Work",
    description: "Selected consulting engagements, strategic advisory work, workshops, and technology governance support.",
  },
  {
    title: "Custom Apps and Applied Technology",
    description: "Custom app solutions, workflow tools, and practical systems aligned with human judgment and institutional control.",
  },
  {
    title: "Writing, Speaking, and Public Projects",
    description: "Speaking engagements, publications, civic proposals, economic-development initiatives, and applied research.",
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
              Cognisint is an ethically focused, technology-conscious platform for helping institutions modernize
              responsibly without sacrificing legitimacy, judgment, accountability, or public trust.
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
                <a href="#founder">
                  About the Founder
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
                    An unwinnable game of whack-a-mole
                  </p>
                </Link>

                <Link href="/framework" className="group block py-6">
                  <h2 className="text-2xl font-semibold leading-tight text-white group-hover:text-[var(--blue)]">
                    AI Responsiveness Is a Must-Have
                  </h2>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Read Our Updated AI Trust Framework
                  </p>
                </Link>

                <a
                  href="https://www.linkedin.com/company/cognisint/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block py-6"
                >
                  <h2 className="text-2xl font-semibold leading-tight text-white group-hover:text-[var(--blue)]">
                    Connect With Us on LinkedIn!
                  </h2>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-is-cognisint" className="section-band relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div className="relative">
            <Image
              src="/institutional-system-field.png"
              alt=""
              width={1254}
              height={1254}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-8 hidden h-auto w-[17.25rem] max-w-none select-none opacity-100 lg:block xl:top-2 xl:w-[21.75rem]"
            />
          </div>
          <div className="max-w-3xl">
            <h2 className="section-title">What Is Cognisint?</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Cognisint is a platform for institutional strategy, ethical technology adoption, applied governance, and
                public-interest modernization.
              </p>
              <p>
                It brings together writing, frameworks, advisory work, and developing technology concepts to help
                institutions think clearly about change.
              </p>
              <p>
                Some Cognisint work takes the form of essays, proposals, frameworks, and public analysis. Some takes the
                form of advisory or consulting engagements. Some takes the form of custom app concepts and workflow
                tools in development.
              </p>
              <p className="font-medium text-foreground">
                The objective is not technology for its own sake. The objective is helping institutions become more
                effective, trustworthy, resilient, and capable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="section-band bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <SectionKicker>Founder</SectionKicker>
            <h2 className="section-title mt-4">Founder and Principal</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                David Towne is a Michigan attorney, strategist, economic-development practitioner, and institutional
                problem-solver.
              </p>
              <p>
                His background spans law, public infrastructure, governance, transportation, economic development,
                nonprofit leadership, real estate, regulatory matters, and organizational strategy.
              </p>
              <p>
                He has served courts, government agencies, nonprofit organizations, businesses, and public institutions
                in legal, advisory, and governance-related capacities.
              </p>
              <p>
                Cognisint is the platform through which David develops and shares work on technology, institutional
                trust, public service, ethical modernization, and practical governance.
              </p>
              <p className="font-medium text-foreground">
                His current work centers on a durable question: How can organizations benefit from technological change
                without sacrificing legitimacy, accountability, public trust, or human judgment?
              </p>
            </div>
            <Button asChild className="mt-8 rounded-sm">
              <Link href="/about">
                Read Founder Bio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <aside className="package-card h-fit p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">Contact</p>
            <div className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
              <p className="text-xl font-semibold text-foreground">Cognisint LLC</p>
              <p>David Towne, Founder and Principal</p>
              <p>Lansing, MI 48910</p>
              <p>
                <a href="tel:+15173914815" className="text-foreground hover:text-[var(--blue)]">
                  +1 (517) 391-4815
                </a>
              </p>
              <p>
                <a href="mailto:info@cognisint.com" className="text-foreground hover:text-[var(--blue)]">
                  info@cognisint.com
                </a>
              </p>
            </div>
            <p className="mt-8 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
              Cognisint reflects the work and judgment of its founder while supporting a range of serious institutional
              conversations, including leadership, advisory, consulting, writing, and applied project opportunities.
            </p>
          </aside>
        </div>
      </section>

      <section id="focus" className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionKicker>Areas of Focus</SectionKicker>
            <h2 className="section-title mt-4">Current Questions. Big Ideas. Practical Details.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="package-card group p-6">
                <area.icon className="h-7 w-7 text-[var(--blue)]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold text-foreground">{area.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-band bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionKicker>Services and Applied Work</SectionKicker>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Services and Applied Work
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Cognisint supports institutions through selected advisory, consulting, writing, research, and applied
                technology work. Engagements are shaped around the problem, not around a prefabricated package.
              </p>
              <Button asChild className="mt-8 rounded-sm bg-white text-[var(--ink)] hover:bg-slate-100">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="dark-package-card p-6">
                  <service.icon className="h-7 w-7 text-[var(--forest-light)]" aria-hidden="true" />
                  <h3 className="mt-7 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="framework" className="framework-hero bg-[var(--ink)] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Framework</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">The Cognisint AI/User Integrity Framework</h2>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-8 text-slate-200">
              <p>
                The Cognisint AI/User Integrity Framework is a developing body of work exploring what trustworthy
                human-AI interactions should look like.
              </p>
              <p>
                Its purpose is to establish Standards of Trust for transparency, accountability, user sovereignty, and
                responsible technological development.
              </p>
            </div>
            <Button asChild className="mt-8 rounded-sm bg-white text-[var(--ink)] hover:bg-slate-100">
              <Link href="/framework">
                Read the Framework
                <BookOpenText className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="section-band">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionKicker>Projects and Concepts</SectionKicker>
              <h2 className="section-title mt-4">Selected Concepts in Development</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Cognisint uses applied concepts, civic proposals, governance frameworks, and technology experiments to
                test ideas in concrete settings. The current set is selective and developing, with additional detail
                added as each project becomes ready for public presentation.
              </p>
              <Button asChild variant="outline" className="mt-8 rounded-sm bg-transparent">
                <Link href="/projects">View Current Concepts</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {conceptLogos.map((concept) => {
                const card = (
                  <article className="package-card flex min-h-44 flex-col justify-between p-5 transition group-hover:border-[var(--blue)]">
                    <div className="flex h-20 items-center">
                      <Image
                        src={concept.src}
                        alt={`${concept.name} logo`}
                        width={concept.width}
                        height={concept.height}
                        className="max-h-16 w-auto object-contain"
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
          </div>
        </div>
      </section>

      <section id="writing" className="section-band bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionKicker>Writing and Thought</SectionKicker>
              <h2 className="section-title mt-4">Writing and Thought</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Public writing is being developed gradually. For now, the framework is the principal published item,
                with essays, proposals, and commentary to follow as they are completed.
              </p>
              <Button asChild variant="outline" className="mt-8 rounded-sm bg-transparent">
                <Link href="/writing">View Writing Notes</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {writing.map((item) => (
                <article key={item.title} className="publication-card">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collaboration" className="section-band">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionKicker>Working Together</SectionKicker>
            <h2 className="section-title mt-4">Opportunities for Collaboration</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Cognisint is open to conversations about opportunities where institutional judgment, modernization, public
              trust, and practical execution matter, whether that means a consulting engagement, leadership role,
              advisory relationship, board or fellowship role, design concept, custom app project, workshop, speaking
              engagement, or focused conversation that clarifies the next responsible step.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {collaborationGroups.map((group) => (
              <article key={group.title} className="package-card p-5">
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">{children}</p>
}
