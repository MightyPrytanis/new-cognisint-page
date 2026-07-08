import type { Metadata } from "next"
import { ArrowLeft, CreditCard, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Make a Payment | Cognisint",
  description: "Make a payment to Cognisint LLC.",
}

const squarePaymentUrl = process.env.NEXT_PUBLIC_SQUARE_PAYMENT_URL

export default function PaymentPage() {
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
          <section className="package-card p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Payment</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Make a Payment
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Use this page to make a payment to Cognisint LLC for an invoice, engagement, or agreed project expense.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {squarePaymentUrl ? (
                <Button asChild size="lg" className="rounded-sm">
                  <a href={squarePaymentUrl} target="_blank" rel="noreferrer">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay with Square
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg" className="rounded-sm">
                  <a href="mailto:info@cognisint.com?subject=Cognisint%20payment%20link%20request">
                    <Mail className="mr-2 h-4 w-4" />
                    Request Payment Link
                  </a>
                </Button>
              )}
              <Button asChild size="lg" variant="outline" className="rounded-sm bg-transparent">
                <Link href="/contact">Contact Cognisint</Link>
              </Button>
            </div>
          </section>

          <aside className="package-card h-fit p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Payment Note</p>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                Payments should correspond to an existing invoice, written agreement, or other confirmed arrangement
                with Cognisint LLC.
              </p>
              <p>
                If you are unsure what to pay or need an invoice resent, contact Cognisint before submitting payment.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
