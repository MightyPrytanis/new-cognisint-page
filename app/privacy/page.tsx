import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-6 rounded-sm bg-transparent">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <section className="package-card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Privacy</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Terms of Service and Privacy Policy
          </h1>
          <p className="mt-4 leading-7 text-muted-foreground">
            Cognisint&apos;s Privacy Policy is now combined with the Terms of Service on a single policy page.
          </p>
          <Button asChild className="mt-6 rounded-sm">
            <Link href="/terms">Read the Combined Policy</Link>
          </Button>
        </section>
      </div>
    </main>
  )
}
