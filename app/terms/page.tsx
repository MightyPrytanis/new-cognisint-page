import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> January 17, 2026
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing or using Cognisint LLC's website and services, you agree to be bound by these Terms of Service
            and all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services Description</h2>
          <p className="text-muted-foreground mb-4">
            Cognisint LLC provides consulting services related to practice management, technology strategy, and workflow
            optimization. Cognisint is not a law firm and does not provide legal advice or legal representation.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Use License</h2>
          <p className="text-muted-foreground mb-4">
            Permission is granted to temporarily access the materials on Cognisint's website for personal,
            non-commercial use only. This license shall automatically terminate if you violate any of these
            restrictions.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Disclaimer</h2>
          <p className="text-muted-foreground mb-4">
            The materials on Cognisint's website are provided "as is." Cognisint makes no warranties, expressed or
            implied, and hereby disclaims all other warranties including, without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or non-infringement.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitations</h2>
          <p className="text-muted-foreground mb-4">
            In no event shall Cognisint or its suppliers be liable for any damages arising out of the use or inability
            to use the materials on Cognisint's website.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Governing Law</h2>
          <p className="text-muted-foreground mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of Michigan, and you
            irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms of Service, please contact us at hello@cognisint.com.
          </p>
        </div>
      </div>
    </div>
  )
}
