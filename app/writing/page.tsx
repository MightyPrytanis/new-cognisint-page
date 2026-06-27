import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    label: "Published Framework",
    title: "Cognisint AI/User Integrity Framework",
    description:
      "A developing statement of Standards of Trust for transparency, accountability, and user sovereignty in AI-mediated interactions.",
  },
  {
    label: "Forthcoming",
    title: "Technology and Governance",
    description: "Analysis on ethical technology adoption, institutional trust, and governance design is in development.",
  },
  {
    label: "Forthcoming",
    title: "Civic and Institutional Concepts",
    description: "Proposals and commentary on civic identity, public assets, and institutional design will be added later.",
  },
  {
    label: "Forthcoming",
    title: "Modernization Without Legitimacy Loss",
    description: "Essays on institutional modernization, judgment, accountability, and public confidence are being drafted.",
  },
]

export default function WritingPage() {
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Writing</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Writing and Thought
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            This page will collect essays, analysis, proposals, and commentary as they are completed. For now, it
            serves as a working index for the writing areas Cognisint is developing.
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {categories.map((category) => (
            <article key={category.title} className="publication-card">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">
                <FileText className="h-4 w-4" aria-hidden="true" />
                {category.label}
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-foreground">{category.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{category.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 bg-[var(--ink)] p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Writing Status</p>
          <h2 className="mt-4 text-2xl font-semibold">Developing Public Writing</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-200">
            Public writing is under development. New essays, proposals, frameworks, and project materials will be
            added as they are ready for publication.
          </p>
        </section>
      </div>
    </main>
  )
}
