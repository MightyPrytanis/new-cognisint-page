import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Michigan's Public Sector Is Getting AI Wrong | Cognisint",
  description: "Institutional postures are often incoherent and serve no one's interest.",
}

export default function MichiganPublicSectorAiArticle() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-8 rounded-sm bg-transparent">
          <Link href="/writing">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Writing
          </Link>
        </Button>

        <article className="package-card bg-white p-6 sm:p-10 lg:p-12">
          <header className="border-b border-[var(--border)] pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Analysis</p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Michigan&apos;s Public Sector Is Getting AI Wrong
            </h1>
            <p className="mt-5 text-2xl leading-snug text-muted-foreground">
              Institutional postures are often incoherent and serve no one&apos;s interest.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--forest)]">
              By David W. Towne
            </p>
          </header>

          <div className="article-body mt-8 space-y-6 text-lg leading-8 text-foreground">
            <p>
              In early 2025, I encountered a high school English teacher at the dog park, someone I have known for many
              years, who was lamenting the educational crisis of the moment: artificial intelligence and the epidemic
              of students passing off AI-generated work as their own.
            </p>

            <p>
              “These kids don&apos;t have any interest in learning anything,” she fumed. “Even ones who should know better.
              They all tell me &apos;why bother, in a few years AI will just do it all anyway.&apos;” She seemed not just
              aggravated, but despondent.
            </p>

            <p>
              I knew this person to be an engaged, caring, thoughtful educator. Both of her parents were teachers; she
              has an elite academic pedigree, professional IT expertise, and a wealth of hard-earned experience in the
              classroom. On the subject of AI, however, she was sounding as jaded and burned out as Springfield
              Elementary&apos;s Edna Krabappel (may she-and the actor who voiced her-rest in peace).
            </p>

            <p>
              Thinking I could help, I offered observations from the work I had been doing with generative AI in the
              legal profession: the hazards of relying on large language models without checking their outputs, the
              importance of clear operational constraints, the value of retrieval-augmented systems, and so on.
            </p>

            <p>
              None of it made a dent. She remained focused on her understandable worries: that a whole cohort of
              students was passing through high school learning mainly how to game the system; and that the time she
              spent chasing down AI-generated content was time she couldn&apos;t spend teaching, giving meaningful feedback,
              or just having a normal weeknight (a reasonable request for both teachers and students alike).
            </p>

            <p>
              After a few minutes, it was clear that we were talking past each other and my “helpful” suggestions were
              only adding to her irritation, so I let it drop.
            </p>

            <p>
              I was reminded of this conversation recently when looking at a State of Michigan job posting sent to me by
              a colleague. I navigated to the state&apos;s talent acquisition portal hosted by Neogov, a vendor whose
              homepage advertises its product as “AI-Enabled Government HR Software” and invites prospective clients to
              “Streamline everyday government HR processes with an AI-supported platform.” There, plastered prominently
              across the job posting was the following:
            </p>

            <blockquote>
              <p>
                <strong>
                  The use of artificial intelligence (AI) software of any kind is prohibited in all areas of the
                  selection process; including, but not limited to, responses to application questions, and responses to
                  interview questions or exercises. Any applicant suspected of using AI software for any portion of the
                  selection process may be screened out.
                </strong>
              </p>
            </blockquote>

            <p>(Emphasis in the original.)</p>

            <p>
              One wonders if the irony of this boldfaced, one-sided warning crossed the minds of whoever made the policy
              or approved the posting-to say nothing of its probable inaccuracy. It is hard to believe that AI is
              “prohibited in all areas of the selection process” by the department in question; in practice, it is more
              likely to be prohibited only for applicants. The human resources office, I would venture, is free to use at
              least some of the AI-supported tools available under the state&apos;s contract with Neogov.
            </p>

            <p>
              Aside from being taken aback by the rather glaring hypocrisy, I had to wonder: why was this department—one
              which has a major role to play in Michigan&apos;s legal and economic systems—so eager to play the unwinnable
              game of AI whack-a-mole that was burning out my teacher friend?
            </p>

            <p>
              Narratives that treat AI&apos;s future omnipresence as a <em>fait accompli</em> are justifiably becoming
              unpopular outside of the tech world. I am sympathetic to those who have called for industry to stop treating
              every new AI advance as an inevitability, and start thinking about how it benefits society beyond
              “enhancing shareholder value.” To ask, in other words, not only whether they can, but if they should.
            </p>

            <p>
              Nonetheless, it is hard to ignore the strategic value proposition of AI when it performs as advertised.
              Moreover, the likelihood that multinational corporations (or foreign adversaries, or students, or job
              applicants) will unilaterally disarm themselves is vanishingly small.
            </p>

            <p>
              Prohibition is therefore not a strategy. As a policy, it functions as a temporary avoidance mechanism,
              creates a futile administrative burden, and makes a poor substitute for clear, enforceable norms. A better
              approach for all of us, including government agencies, is to figure out how to use and enhance AI as a tool
              for good, rather than as an end in itself.
            </p>

            <p>
              <em>
                The author has been a licensed Michigan attorney since 2002, with professional experience in multiple
                public sector roles. This is Part One of a three-part series on how Michigan&apos;s public sector is
                responding to AI. Part Two will look at the legal profession-closely tied to the public sector, already
                forced to wrestle with AI&apos;s impacts, and perhaps pointing the way to better policy approaches.
              </em>
            </p>

            <p>
              <em>Full disclosure: AI didn&apos;t write this piece, but it did help refine it.</em>
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
