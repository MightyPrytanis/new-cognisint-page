import { Button } from "@/components/ui/button"
import InquiryForm from "@/components/inquiry-form"
import type React from "react"
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleCheck,
  Cpu,
  Handshake,
  Landmark,
  Scale,
  ShieldCheck,
  Sprout,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const principles = [
  {
    title: "Service",
    description:
      "Good modernization should leave people, institutions, and communities with more capacity than it takes from them.",
    icon: Handshake,
    accent: "var(--forest)",
    tint: "color-mix(in srgb, var(--forest) 11%, white)",
  },
  {
    title: "Integrity",
    description:
      "Policies, tools, and strategies should be honest about tradeoffs, clear about limits, and accountable to human judgment.",
    icon: ShieldCheck,
    accent: "var(--navy)",
    tint: "color-mix(in srgb, var(--navy) 9%, white)",
  },
  {
    title: "Fairness",
    description:
      "Durable markets and institutions need transparent rules, meaningful access, and procedures people can recognize as legitimate.",
    icon: Scale,
    accent: "var(--sapphire)",
    tint: "color-mix(in srgb, var(--sapphire) 9%, white)",
  },
  {
    title: "Flourishing",
    description: (
      <>
        The aim is not growth or wealth as ends in and of themselves, but{" "}
        <strong className="font-semibold text-foreground">abundance</strong>: stronger places, healthier professions,
        better tools, and more humane work.
      </>
    ),
    icon: Sprout,
    accent: "var(--blue)",
    tint: "color-mix(in srgb, var(--blue) 9%, white)",
  },
]

const expertiseAreas = [
  {
    title: "Institutional Strategy and Public Trust",
    description:
      "Strategy for agencies, public bodies, and civic institutions modernizing services while protecting legitimacy, accountability, and public trust.",
    icon: Landmark,
  },
  {
    title: "Legal and Professional Workflow Design",
    description:
      "Better tools, documentation, and processes that preserve confidentiality, quality control, and professional judgment.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technology Governance and AI Policy",
    description:
      "Defensible policies, procurement questions, workflow guidance, and clear communication for responsible technology adoption.",
    icon: Cpu,
  },
  {
    title: "Cross-Functional Problem Solving",
    description:
      "Work on problems that cross law, policy, technology, governance, communication, and implementation without fitting neatly into one department.",
    icon: CircleCheck,
  },
]

const potentialClients = [
  "State and municipal governments",
  "School districts and educational institutions",
  "Transportation and infrastructure agencies",
  "Public development authorities",
  "Nonprofit and civic organizations",
  "Professional and industry associations",
  "Law firms and legal departments",
  "Businesses operating in regulated or public-facing environments",
]

const advisorySubjects = [
  "Organizational governance and policy",
  "Communications and public engagement",
  "Technology adoption and integration",
  "AI governance and responsible technology use",
  "Legal and professional workflow modernization",
  "Economic and community development",
  "Infrastructure planning and finance",
  "Public-private partnerships",
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
              and governance. Cognisint can help. Its work turns clear values into workable solutions while
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

      <section id="what-is-cognisint" className="section-band relative scroll-mt-24 overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-start lg:gap-14 lg:px-8">
          <div className="hidden lg:block lg:pt-2">
            <Image
              src="/institutional-system-field.png"
              alt=""
              width={1254}
              height={1254}
              aria-hidden="true"
              className="h-auto w-full max-w-52 select-none"
            />
          </div>
          <div className="max-w-3xl">
            <h2 className="section-title">What Is Cognisint?</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Cognisint is an organizational advisory and applied technology practice for institutions facing
                governance, technology, and modernization challenges.
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
        </div>
      </section>

      <section id="principles" className="principles-band section-band text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionKicker light>Issues and Principles</SectionKicker>
              <h2 className="section-title mt-4 text-white">What the Work Is About</h2>
              <div className="mt-6 grid h-1.5 w-52 grid-cols-5" aria-hidden="true">
                <span className="bg-[var(--navy)]" />
                <span className="bg-[var(--sapphire)]" />
                <span className="bg-[var(--blue)]" />
                <span className="bg-[var(--forest)]" />
                <span className="bg-[var(--forest-light)]" />
              </div>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                The recurring issues are institutional trust, responsible modernization, fair systems, and the practical
                conditions that let people and organizations do good work.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className="principle-card"
                  style={
                    {
                      "--principle-accent": item.accent,
                      "--principle-tint": item.tint,
                    } as React.CSSProperties
                  }
                >
                  <div className="principle-icon" aria-hidden="true">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-band scroll-mt-24 bg-[var(--paper)] text-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionKicker>Advisory and Applied Work</SectionKicker>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Areas of Expertise
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Cognisint brings legal, policy, institutional, and applied technology experience to problems that do not
                fit neatly within a single professional lane.
              </p>
              <Button asChild className="mt-8 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#fit-and-contact">Start a Conversation</a>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {expertiseAreas.map((item) => (
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

      <section id="fit-and-contact" className="closing-band section-band scroll-mt-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionKicker light>Fit and Next Steps</SectionKicker>
            <h2 className="section-title mt-4 text-white">From Difficult Questions to Workable Next Steps</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Sound decisions begin with a clear understanding of the problem, the people affected, and the constraints
              that matter. If your organization is navigating change in governance, technology, infrastructure, or
              professional practice, Cognisint can help turn a difficult question into a workable next step. The goal is
              progress that strengthens judgment, accountability, legitimacy, and trust.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0">
              <section className="border-t-4 border-[var(--forest)] pt-6 sm:pr-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--forest-light)]">
                  Potential Clients
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Organizations Cognisint Can Serve</h3>
                <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-slate-200 marker:text-[var(--forest-light)]">
                  {potentialClients.map((client) => (
                    <li key={client} className="pl-1">
                      {client}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border-t-4 border-[var(--sapphire)] pt-6 sm:border-l sm:border-t-[4px] sm:pl-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sapphire)]">Areas of Work</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Subjects Cognisint Can Help Address</h3>
                <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-slate-200 marker:text-[var(--blue)]">
                  {advisorySubjects.map((subject) => (
                    <li key={subject} className="pl-1">
                      {subject}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="package-card h-fit p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">Contact</p>
              <h3 className="mt-3 text-3xl font-semibold text-foreground">Start a Conversation</h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                Share the question, opportunity, or institutional challenge you are working through.
              </p>
              <InquiryForm compact className="mt-6" />
            </aside>
          </div>
        </div>
      </section>

    </main>
  )
}

function SectionKicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.28em] ${
        light ? "text-[var(--forest-light)]" : "text-[var(--blue)]"
      }`}
    >
      {children}
    </p>
  )
}
