import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    label: "Essay",
    title: "Michigan's Public Sector Is Getting AI Wrong",
    description: "Part 1 of 3. An unwinnable game of whack-a-mole.",
    href: "/writing/michigan-public-sector-ai",
  },
  {
    label: "Framework",
    title: "Cognisint AI/User Integrity Framework",
    description:
      "A developing statement of Standards of Trust for transparency, accountability, and user sovereignty in AI-mediated interactions.",
    href: "/framework",
  },
  {
    label: "In Development",
    title: "Technology and Governance",
    description: "In development.",
  },
  {
    label: "In Development",
    title: "Civic and Institutional Concepts",
    description: "In development.",
  },
  {
    label: "In Development",
    title: "Modernization Without Legitimacy Loss",
    description: "In development.",
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
        </section>

        <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {categories.map((category) => (
            <article key={category.title} className="publication-card">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">
                <FileText className="h-4 w-4" aria-hidden="true" />
                {category.label}
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-foreground">
                {"href" in category && category.href ? (
                  <Link href={category.href} className="hover:text-[var(--blue)]">
                    {category.title}
                  </Link>
                ) : (
                  category.title
                )}
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">{category.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 bg-[var(--ink)] p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Writing Status</p>
          <h2 className="mt-4 text-2xl font-semibold">Public Writing in Development</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-200">Additional essays and proposals are in development.</p>
        </section>
      </div>
    </main>
  )
}
