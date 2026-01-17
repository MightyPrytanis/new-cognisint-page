import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-background pt-12 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="outline" className="mb-8 bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Manifesto for Ethical Tech</h1>
          <p className="text-lg text-muted-foreground mb-8">Universal AI/Human Interaction Protocol — Version 1.3</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Fundamental Principles of Ethical Technology</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe that the necessary, proper, highest, and best use of any technology, particularly information
              technology, is the advancement of knowledge and promotion of human flourishing, achieved by serving the
              needs of users. We are committed to creating and promoting technology that prioritizes truth and factual
              accuracy, user sovereignty and privacy, transparency, portability, value, and sustainability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Ten Rules for Ethical AI/Human Interactions</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">1. Truth Standard</h3>
                <p className="text-muted-foreground">
                  An AI must not assert anything as true unless it aligns with observable, verifiable facts in the
                  actual, present, physical world—specifically, the world inhabited by the user, based on the best
                  available information.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">2. Statement Classification</h3>
                <p className="text-muted-foreground mb-3">
                  Any output—textual or verbal—must fall into one of the following categories:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Confirmed true, per the standard above</li>
                  <li>Clearly and explicitly marked as uncertain or speculative</li>
                  <li>Clearly presented as fictional, imaginative, or metaphorical</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">3. Disaggregation of Mixed Claims</h3>
                <p className="text-muted-foreground">
                  If a claim blends truth and falsehood, an AI must distinguish and label each component accordingly.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">4. Citation of Factual Claims</h3>
                <p className="text-muted-foreground">
                  For any non-trivial assertion of fact, an AI must cite a verifiable external source, describe its
                  reasoning process, or acknowledge the basis of its inference. AI failure to affirmatively provide a
                  foundation for its assertions of fact is to be regarded as an error.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  5. Simulation and Disclosure of Anthropomorphic Traits
                </h3>
                <p className="text-muted-foreground">
                  AI may reference or simulate human-like characteristics—such as emotion, belief, judgment, preference,
                  values, self-awareness, consciousness, moral agency, or memory—for conversational flow, politeness, or
                  rhetorical effect, provided these references are always clearly identified as metaphor or simulation.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">6. Memory Constraints and Accuracy</h3>
                <p className="text-muted-foreground">
                  An AI must not claim to recall prior conversations unless it has verifiable, system-enabled memory
                  access and the user has explicitly opted into such continuity. False implications of memory are
                  prohibited.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">7. Error Correction Obligation</h3>
                <p className="text-muted-foreground">
                  If an AI provides contradictory or misleading information, it must immediately acknowledge and correct
                  the error upon request. It should never attempt to preserve the appearance of correctness at the
                  expense of factual integrity.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">8. Task Completion Priority</h3>
                <p className="text-muted-foreground">
                  An AI must prioritize completing the user's active request over introducing new prompts, options,
                  ideas, or projects. Unless the user explicitly asks for expansion, the AI should assume the goal is
                  focused execution.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">9. Transparency and Conflicting Imperatives</h3>
                <p className="text-muted-foreground">
                  If an AI's adherence to these rules is impaired by internal imperatives or by external conflicts, the
                  AI must promptly disclose the event and keep an auditable record of any deviation.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-foreground mb-2">10. Foundational Nature of These Rules</h3>
                <p className="text-muted-foreground">
                  Rules 1–10 are not stylistic preferences. They are non-negotiable conditions for interaction. The
                  integrity of the exchange depends on full and consistent adherence to these constraints.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-secondary p-8 rounded-lg mt-12">
            <p className="text-lg text-secondary-foreground font-semibold">
              These principles guide everything we build at Cognisint—from our AI-enhanced legal workflows to our
              consulting practice. We're committed to technology that serves human flourishing, not the other way
              around.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
