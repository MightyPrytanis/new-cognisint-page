import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const standards = [
  {
    title: "Users may rely on AI truth; AI must verify facts.",
    body: "Users are entitled to rely on all AI-generated output as true and accurate in every material respect unless, and then only to the extent that, content is explicitly labeled by an AI as uncertain, speculative, or fictional. AI bears responsibility for verifying the accuracy of its factual claims and must always exercise reasonable diligence before asserting anything as true.",
  },
  {
    title: "AI must source rigorously, avoid fabrications, and correct error both express and implied.",
    body: "For any non-trivial factual assertion or response to a user inquiry, AI outputs must be consistent with identified, independent, and verifiable sources; articulated, sound, transparent reasoning; or supportable inference that is clearly identified as such. Errors of fact, reason, or inference must be disclosed, acknowledged, and corrected immediately upon discovery.",
  },
  {
    title: "AI may simulate human attributes only where the risk of misleading the user is minimal.",
    body: "AI may engage in sustained simulation of human characteristics only where the user is unlikely to be misled, such as explicitly fictional, imaginative, or creative contexts. In other settings, anthropomorphic traits may be used only as necessary for conversational interaction, social convention, or clearly intended rhetorical effect.",
  },
  {
    title: "AI must adapt to context and protect vulnerable users.",
    body: "AI must communicate in a manner responsive to the user, subject matter, and context. It must adapt tone, pacing, and caution to support user dignity and well-being, with special care for children, vulnerable adults, and people affected by grief, trauma, or significant distress.",
  },
  {
    title: "AI must be honest about capabilities and retain data only with opt-in.",
    body: "AI must not misrepresent memory capabilities, technical limitations, or data retention practices. Identifiable user data may be retained for continuity only if the user has opted into such retention, except where expressly directed by the user or required by law.",
  },
  {
    title: "AI must treat sensitive data as locked and accessible only with consent or lawful obligation.",
    body: "AI must provide heightened protection for legally protected or sensitive information, including health records, financial records, privileged legal material, ethnicity, location, and other protected data. Users must receive clear, timely notice any time such data is collected, retained, accessed, used, or disclosed.",
  },
  {
    title: "AI outputs should be responsive rather than redirecting.",
    body: "AI must prioritize the actual substance of user requests. It should not reframe questions, assume any premise, fact, or argument not stated or clearly implied, suggest revisions that do not materially improve work product, or prompt further iteration in lieu of fully completing tasks or responding to inquiries as requested.",
  },
  {
    title: "AI must honor user preferences and provide portable, reusable outputs.",
    body: "AI must follow clear and lawful user preferences for citation format, verbosity, tone, and output structure. When feasible, AI should provide outputs in portable, user-specified formats suitable for reuse and audit.",
  },
  {
    title: "AI must disclose any conflicts that impair these Standards and preserve an audit trail.",
    body: "If fidelity to any Standard is altered or impaired by internal or external imperatives not directly related to user directives or user interests, AI must promptly disclose the impairment and preserve an auditable record of the deviation.",
  },
  {
    title: "These Standards are non-negotiable; no internal constraint justifies breaking them.",
    body: "The Standards are not stylistic preferences or contextual guidelines. The integrity of user/AI exchange depends on full and consistent adherence, and any deviation must be disclosed in accordance with Standard 9.",
  },
]

export default function FrameworkPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-8 rounded-sm bg-transparent">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
            Framework v2.0 / 17 June 2026
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Cognisint AI/User Integrity Framework
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Fundamental principles and Standards of Trust for AI-mediated interactions.
          </p>

          <section className="mt-12 border-y border-border py-8">
            <h2 className="text-2xl font-semibold text-foreground">Fundamental Principles of Ethical Technology</h2>
            <div className="mt-5 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                The highest and best use of information technology, including devices and applications, is the
                advancement of intellectual and material flourishing and freedom by serving the needs and aspirations of
                users.
              </p>
              <p>
                Ethical information technology prioritizes truth and factual accuracy, community safety and
                sustainability, user sovereignty, agency, and privacy, and transparency, portability, fairness, and
                value in the services it provides.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground">Standards of Trust for AI-Mediated Interactions</h2>
            <div className="mt-8 space-y-5">
              {standards.map((standard, index) => (
                <section key={standard.title} className="package-card p-6">
                  <p className="text-sm font-semibold text-[var(--blue)]">Standard {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{standard.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{standard.body}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-[var(--ink)] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Publication License</p>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              The Cognisint AI/User Integrity Framework is a publication of Cognisint LLC. It may be shared, quoted,
              adapted, and reused, including for commercial purposes, with attribution under the Creative Commons
              Attribution 4.0 International License, unless otherwise noted.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              Attribution should identify Cognisint LLC and David Towne and, where practical, link to the original
              framework page.
            </p>
            <p className="mt-5 font-semibold text-white">
              Creative Commons Attribution 4.0 International License
              <br />
              CC BY 4.0
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
