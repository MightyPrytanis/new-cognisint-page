import { Button } from "@/components/ui/button"
import InquiryForm from "@/components/inquiry-form"
import { ArrowLeft, CreditCard, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
          <section className="package-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground">Start a Conversation</h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Reach out about leadership opportunities, advisory work, consulting engagements, custom app solutions,
              institutional strategy, technology governance, public-sector modernization, civic proposals, speaking,
              workshops, or related conversations.
            </p>

            <InquiryForm className="mt-8" />
          </section>

          <aside className="package-card h-fit p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Direct Details</p>
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
              <Link href="/payment" className="flex items-center gap-2 text-foreground hover:text-[var(--blue)]">
                <CreditCard className="h-4 w-4" />
                Make a payment
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
