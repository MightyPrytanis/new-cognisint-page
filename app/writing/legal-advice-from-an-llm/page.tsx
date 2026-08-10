import { Button } from "@/components/ui/button"
import ShareButton from "@/components/share-button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Legal Advice From an LLM? Better Call a J.D. | Cognisint",
  description:
    "AI-assisted work must still be owned by someone with actual duties, actual judgment, and actual accountability.",
  openGraph: {
    title: "Legal Advice From an LLM? Better Call a J.D.",
    description:
      "AI-assisted work must still be owned by someone with actual duties, actual judgment, and actual accountability.",
    url: "/writing/legal-advice-from-an-llm",
    siteName: "Cognisint",
    type: "article",
    publishedTime: "2026-08-09",
    authors: ["David W. Towne"],
  },
  twitter: {
    card: "summary",
    title: "Legal Advice From an LLM? Better Call a J.D.",
    description:
      "AI-assisted work must still be owned by someone with actual duties, actual judgment, and actual accountability.",
  },
}

const sourceLinkClass =
  "font-medium text-[var(--blue)] underline decoration-[var(--blue)]/40 underline-offset-4 hover:decoration-[var(--blue)]"

export default function LegalAdviceFromAnLlmArticle() {
  return (
    <main className="writing-article-page min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Button
          asChild
          variant="outline"
          className="mb-8 rounded-sm bg-transparent"
        >
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        <article className="writing-article-shell overflow-hidden">
          <header className="writing-article-masthead border-b border-white/20 p-6 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--forest-light)]">
              Analysis · Part 2 of 3
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Legal Advice From an LLM? Better Call a J.D.
            </h1>
            <p className="mt-5 text-2xl leading-snug text-white/80">
              AI can assist professional work. It cannot become the professional.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--forest-light)]">
              By David W. Towne
            </p>
            <div className="mt-6 flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Published August 9, 2026
              </p>
              <ShareButton
                title="Legal Advice From an LLM? Better Call a J.D."
                className="w-full border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
                withLinkedIn
              />
            </div>
          </header>

          <div className="article-body space-y-6 px-6 py-8 text-lg leading-8 sm:px-10 lg:px-12">
            <p>
              As most readers probably know, a <em>Juris Doctor</em> (Latin for “Doctor of Law”), or J.D., is the
              standard professional degree for lawyers in the U.S. Fortunately, most lawyers do not, without further
              education, walk around insisting that they be called “doctor.” A small mercy from a profession that tends
              to attract big egos.
            </p>

            <p>
              In addition to J.D.s, many American law schools grant the academic degree of “Master of Laws,” or LL.M.,
              shorthand for the Latin <em>Legum Magister</em>. J.D. holders who wish to specialize and foreign-trained
              lawyers who want additional grounding in American law often opt for this degree. While scholarly and
              respectable, the LL.M. itself is not ordinarily enough to make someone a lawyer in the United States.
            </p>

            <p>
              In one of those marvelous little coincidences, “LLM” also happens to be the abbreviation for “large
              language model,” the currently dominant form of consumer-facing generative AI. But neither you nor the
              models themselves should be fooled: being an LLM isn’t the same as having an LL.M., or a J.D. for that
              matter.
            </p>

            <p>
              You might think that last point was so obvious that it need not be said, but my direct personal experience
              suggests that is not so. Twice within the last nine months, one particular AI assistant has framed outputs
              delivered to me as if it were qualified to dispense legal argument or advice: the first time, when it
              referred to me chummily as a “fellow J.D.,” and the second when it was waxing philosophical and making
              observations about the things that “we lawyers” do in “our” professional lives.
            </p>

            <p>
              <em>Excuse me,</em> I thought, <em>but who the hell is &apos;we&apos;?</em>
            </p>

            <p>
              This was not merely an annoying stylistic tic. Michigan law has long prohibited{" "}
              <a
                href="https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-450-681"
                target="_blank"
                rel="noreferrer"
                className={sourceLinkClass}
              >
                corporations
              </a>{" "}
              and{" "}
              <a
                href="https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-600-916"
                target="_blank"
                rel="noreferrer"
                className={sourceLinkClass}
              >
                unlicensed persons
              </a>{" "}
              from holding themselves out as entitled to practice, or furnishing legal advice in a way that crosses
              into the practice of law. The point of those restrictions is not to protect lawyers’ famously delicate
              egos. It is to protect the public from untrained legal counsel, unreliable legal advice, and confusion
              about who is actually accountable for the advice being given.
            </p>

            <p>
              To be clear, I am not suggesting that every chatbot’s awkward turn of phrase is a clean
              unauthorized-practice-of-law case. The statutory framework was not written with large language models in
              mind, and no Michigan court has yet had occasion to apply it to a general-purpose AI assistant that starts
              talking like it belongs in the lawyers’ lounge. But the instinct behind the statute matters. When an AI
              system tells a user “as lawyers, we tend to…” it is not simply being friendly. It is borrowing professional
              identity, and with it some of the trust that belongs to actual human beings with legal education,
              licensure, duties, discipline exposure, and accountability.
            </p>

            <aside className="writing-article-pullquote my-10">
              <p className="text-balance text-2xl font-semibold italic leading-snug">
                A model can sound like a lawyer without acquiring a lawyer’s education, duties, or accountability.
              </p>
            </aside>

            <p>That is the vendor-side problem. There is also the lawyer-side problem.</p>

            <p>
              In recent years, more than a few attorneys have given in to the temptation to rely upon AI outputs without
              thoroughly vetting the content before submitting it to a court, and some of them have paid a heavy
              professional price. On June 17, the{" "}
              <a
                href="https://www.courts.michigan.gov/siteassets/case-documents/uploads/OPINIONS/FINAL/COA/20260617_C374773_42_374773.opn.pdf"
                target="_blank"
                rel="noreferrer"
                className={sourceLinkClass}
              >
                Michigan Court of Appeals
              </a>{" "}
              sanctioned an attorney who had built an appellate brief on citations his AI research tool invented. That
              alone would be an unremarkable entry in a growing genre—American courts have now sanctioned numerous
              lawyers for versions of the same thing—except for what happened next.
            </p>

            <p>
              Confronted with the problem, the attorney filed a “Notice of Correction,” which was—you guessed it—also
              written with the aid of AI, and also contained fabrications.
            </p>

            <p>
              The panel’s opinion was almost blasé about the situation: “Artificial intelligence may be a useful tool
              for legal research and drafting, but the use of such technology does not alter an attorney’s professional
              obligations.” No new rule was needed. The old one—the duty of reasonable inquiry under MCR 1.109(E)(5)—already
              covered it. Lawyers remain responsible for the filings they sign and submit. They must verify that
              cited authorities exist, read the authorities on which they rely, and ensure that those authorities
              support the propositions asserted.
            </p>

            <p>
              That is the easy case. Fake cases are fake cases. A competent lawyer should catch them. A court does not
              need a new philosophical framework to sanction an attorney who files invented authorities, then responds
              to the problem with more invented authorities.
            </p>

            <p>The harder problem is what happens when the AI does not hallucinate.</p>

            <p>
              While I was writing the first draft of this article, an LLM confidently told me that a throwaway
              parenthetical comment I made about AI misrepresentations and consumer protection law was wrong. The
              model’s facial analysis of the case law was accurate, but it was done without the benefit of nearly 25
              years of practicing law or firsthand knowledge of the political context of the cases it was quoting—things
              that I possessed and that it could never discover with legal research alone.
            </p>

            <p>
              Despite not having any lived experience, a legal education, or credentials, the AI doubled down, saying
              that my inference was wrong and insisting that I defend my position.
            </p>

            <p>“Shut up,” I explained.</p>

            <p>
              I exaggerate, but only slightly. I did in fact articulate the basis for my view in more detail. When I was
              finished, the model agreed that it had been overconfident about its assertions. It had not known what it
              did not know.
            </p>

            <p>
              That episode is more interesting to me than the familiar fake-citation cases. The model had not simply
              invented law. Its analysis was facially plausible. Its authorities were real. Its reasoning had a certain
              lawyerly shape. But it lacked context, judgment, and the professional humility to recognize when a licensed
              attorney was identifying a problem that could not be solved by reading the next case in the chain.
            </p>

            <p>
              This is where AI risk in law becomes more subtle. The danger is not only that a model may fabricate a
              case, quotation, or statute. The danger is that it may accurately summarize real authorities, arrange them
              into a persuasive argument, and still be wrong in the way that matters. That kind of error is harder to
              detect because it does not look like nonsense. It looks like research.
            </p>

            <p>
              The legal profession’s emerging response to this problem is not especially glamorous, but it is much
              better than panic. The answer is not “never use AI.” Nor is it “confess that AI touched the document.” The
              answer is that AI-assisted work remains the responsibility of the human professional who uses it.
            </p>

            <p>
              The{" "}
              <a
                href="https://www.michbar.org/opinions/ethics/AIFAQs"
                target="_blank"
                rel="noreferrer"
                className={sourceLinkClass}
              >
                State Bar of Michigan’s AI guidance
              </a>{" "}
              takes this approach. Lawyers must understand the technology they use. They must protect client
              confidences. They must check citations and source materials. They must not mislead courts, clients, or
              opposing parties. They remain responsible for all legal documentation, whether drafted by their own hand,
              by staff, or through a technological program. In other words, AI does not create a separate ethical
              universe. It enters the one lawyers already occupy.
            </p>

            <p>
              New York’s court system has moved in a similar direction through{" "}
              <a
                href="https://www.nycourts.gov/rules/part-161-use-artificial-intelligence-technology"
                target="_blank"
                rel="noreferrer"
                className={sourceLinkClass}
              >
                Part 161 of its statewide court rules
              </a>. Effective June 1, 2026, Part 161 says that AI use in preparing court papers should not be prohibited,
              and that attorneys and parties should not have to disclose it merely because AI was used. The rule then
              supplies a model provision that individual courts may adopt. Under that model, AI users are expected to
              understand the tool’s capabilities and limitations. They must carefully review the work and independently
              ensure that the paper contains no fabricated or fictitious cases, statutes, or other material; by signing,
              they certify that this review was conducted.
            </p>

            <p>
              That is the right frame. If a junior associate drafts a brief, the signing lawyer is still responsible. If
              a paralegal prepares a filing, the lawyer is still responsible. If a search engine, treatise, template,
              citation tool, or AI assistant helps produce the work, the lawyer is still responsible. The tool may
              change the workflow. It does not move the duty.
            </p>

            <aside className="writing-article-pullquote my-10">
              <p className="text-balance text-2xl font-semibold italic leading-snug">
                AI may change how professional work gets done. It does not transfer responsibility for the result.
              </p>
            </aside>

            <p>
              That principle matters beyond law. In{" "}
              <a
                href="https://www.cognisint.com/writing/michigan-public-sector-ai"
                className={sourceLinkClass}
              >
                Part One of this essay series
              </a>, I discussed a State of Michigan job posting that appeared to prohibit applicants from using AI anywhere
              in the selection process, even as the state’s hiring portal was hosted by a vendor advertising AI-enabled
              government HR software. That kind of posture asks the wrong first question. It treats the use of AI by
              individuals as inherently suspect while accepting, or at least tolerating, AI use by institutions and
              vendors.
            </p>

            <p>
              The legal profession points toward a better question: not “did AI touch this?” but “who owns the final
              work, and what process makes that ownership meaningful?”
            </p>

            <p>
              For lawyers, ownership means professional judgment, verification, candor, confidentiality, and
              accountability. For government agencies, it should mean transparent rules, human review, clear lines of
              responsibility, and a meaningful ability to challenge automated or AI-assisted outcomes. For schools in
              particular, as I shall discuss in Part Three, it should mean something similar: not detector-driven
              whack-a-mole, but a renewed focus on whether students understand, can explain, and can stand behind the
              work submitted under their names.
            </p>

            <p>
              Law’s emerging answer is not that AI can never be used. It is that AI-assisted work must still be owned by
              someone with actual duties, actual judgment, and actual accountability.
            </p>

            <p>
              That is not a perfect solution. But it is a much better starting point than pretending the tool does not
              exist, outsourcing judgment to the tool, or treating every use of the tool as misconduct. AI can assist
              professional work. It cannot become the professional. And when it forgets that, someone with a J.D.—preferably
              one who has read the cases—still needs to be in the room.
            </p>
          </div>

          <footer className="writing-article-endnote border-t border-white/20 p-6 text-sm leading-6 text-white/75 sm:p-10 lg:p-12">
            <p>
              Copyright Cognisint LLC and David W. Towne. This article may be shared with attribution to Cognisint LLC
              and David W. Towne, preferably with a link to the original.
            </p>
            <p className="mt-3">
              This article is commentary and analysis. It is not legal advice and does not create an attorney-client
              relationship.
            </p>
          </footer>
        </article>
      </div>
    </main>
  )
}
