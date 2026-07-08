import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-8 rounded-sm bg-transparent">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.72fr]">
          <article className="package-card p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Founder</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              David Towne
            </h1>
            <p className="mt-5 text-xl leading-8 text-muted-foreground">
              Founder and Principal of Cognisint LLC.
            </p>

            <div className="mt-10 space-y-6 text-lg leading-8 text-muted-foreground">
              <p className="font-medium text-foreground">
                David Towne is a Lansing-based consultant, economic development professional, and attorney with over 20
                years of experience across public service, private practice, and institutional governance. A former
                Assistant Attorney General and judicial clerk, he has handled civil litigation, real estate, public
                infrastructure, land use, consumer protection, contracts, and nonprofit governance matters. Through
                Cognisint LLC, he focuses on responsible legal technology, institutional trust, public-interest
                governance, and practical modernization of legal and related workflows. David is particularly interested
                in professional ethics, unauthorized practice of law, access to justice, attorney well-being, and
                strengthening public confidence in the legal profession.
              </p>
              <p>
                David Towne&apos;s professional path begins with Albion College, where a liberal arts foundation helped
                shape his interest in civic life, institutions, language, public responsibility, and the practical
                consequences of ideas.
              </p>
              <p>
                Legal education gave that interest a professional form. Entry into the legal profession added discipline
                in analysis, advocacy, procedure, evidence, and the careful translation of complex facts into decisions
                that institutions and people can act on.
              </p>
              <p>
                His work with courts and judicial/legal analysis strengthened a close attention to reasoning,
                legitimacy, and the systems that allow public decisions to be explained, reviewed, and trusted.
              </p>
              <p>
                Public-service experience in Michigan state government broadened that perspective beyond individual
                matters to the operational realities of agencies, public infrastructure, policy implementation,
                regulatory constraints, and institutional accountability.
              </p>
              <p>
                Private legal practice added client-facing problem solving: identifying risks, clarifying options,
                resolving disputes, and helping people and organizations navigate systems that can be technical,
                adversarial, and consequential.
              </p>
              <p>
                Over time, that work expanded across real estate, infrastructure, transportation, condemnation,
                regulatory, and governance matters. Those fields reinforced a practical lesson that now sits at the
                center of Cognisint: institutions succeed when judgment, process, public trust, and execution reinforce
                each other.
              </p>
              <p>
                David&apos;s nonprofit and fraternity governance experience added another dimension: mission stewardship,
                board responsibility, institutional memory, leadership development, and the need to make decisions that
                remain coherent after the meeting ends.
              </p>
              <p>
                Economic-development and community/institutional work further connected these themes to places,
                prosperity, public assets, redevelopment, and the long-term capacity of communities to adapt without
                losing identity or legitimacy.
              </p>
              <p className="font-medium text-foreground">
                Cognisint grew from that combined experience. It is the platform through which David develops work on
                institutional strategy, trust, technology governance, applied tools, and public-interest modernization.
              </p>
            </div>
          </article>

          <aside className="package-card h-fit p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Contact</p>
            <div className="mt-6 space-y-3 text-base leading-7 text-muted-foreground">
              <p className="text-xl font-semibold text-foreground">Cognisint LLC</p>
              <p>David Towne, Founder and Principal</p>
              <p>Lansing, MI 48910</p>
              <a href="tel:+15173914815" className="flex items-center gap-2 text-foreground hover:text-[var(--blue)]">
                <Phone className="h-4 w-4" />
                +1 (517) 391-4815
              </a>
              <a href="mailto:info@cognisint.com" className="flex items-center gap-2 text-foreground hover:text-[var(--blue)]">
                <Mail className="h-4 w-4" />
                info@cognisint.com
              </a>
            </div>
            <div className="mt-10 border-t border-border pt-8">
              <Button asChild className="rounded-sm">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
