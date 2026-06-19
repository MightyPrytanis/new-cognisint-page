import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-6 rounded-sm bg-transparent">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <article className="package-card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">Legal</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Terms of Service and Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            <strong>Effective Date:</strong> January 17, 2026
          </p>

          <div className="policy-page mt-7">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Cognisint LLC&apos;s website and services, you agree to be bound by these Terms of
              Service and Privacy Policy and all applicable laws and regulations.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Cognisint LLC provides services related to institutional strategy, technology governance, applied research,
              writing, advisory work, and workflow or software concepts. Cognisint is not a law firm and does not
              provide legal advice or legal representation.
            </p>

            <h2>3. Use License and Framework Materials</h2>
            <p>
              Unless otherwise noted, original Cognisint website materials may be viewed, quoted, and shared with
              attribution for lawful personal, educational, professional, or commercial purposes. You may not represent
              Cognisint materials as your own work or imply endorsement by Cognisint LLC or David Towne without written
              permission.
            </p>
            <p>
              The Cognisint AI/User Integrity Framework may be shared, quoted, adapted, and reused, including for
              commercial purposes, with attribution under the Creative Commons Attribution 4.0 International License,
              unless otherwise noted. Attribution should identify Cognisint LLC and David Towne and, where practical,
              link to the original framework page.
            </p>

            <h2>4. Disclaimer</h2>
            <p>
              The materials on Cognisint&apos;s website are provided &quot;as is.&quot; Cognisint makes no warranties,
              expressed or implied, and hereby disclaims all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h2>5. Limitations</h2>
            <p>
              In no event shall Cognisint or its suppliers be liable for any damages arising out of the use or inability
              to use the materials on Cognisint&apos;s website.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of Michigan, and you consent to the
              jurisdiction of courts located in Michigan for disputes arising from use of this website or Cognisint&apos;s
              services.
            </p>

            <h2>7. Information Cognisint May Collect</h2>
            <p>
              Cognisint may collect information you provide directly, including name, email address, organization, reason
              for contact, message content, and any other information you choose to provide when contacting Cognisint or
              using the site.
            </p>

            <h2>8. How Cognisint May Use Information</h2>
            <p>
              Cognisint may use this information to communicate with you, respond to inquiries, provide or improve
              services, maintain business records, and comply with legal obligations.
            </p>

            <h2>9. Information Sharing</h2>
            <p>
              Cognisint will not sell your personal information. Cognisint may share information when necessary to
              operate the website, respond to your inquiry, comply with law, protect rights or safety, or with your
              consent.
            </p>

            <h2>10. Security</h2>
            <p>
              Cognisint uses reasonable technical and organizational measures intended to protect information provided
              through the website, but no internet transmission or storage system can be guaranteed to be completely
              secure.
            </p>

            <h2>11. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of personal information you have provided by contacting
              Cognisint at info@cognisint.com.
            </p>

            <h2>12. Legal Services Notice</h2>
            <p>
              David Towne is an attorney licensed and in good standing with the State Bar of Michigan. Cognisint is not
              a law firm and does not provide legal services; any engagement for legal services must be made separately.
            </p>

            <h2>13. Changes and Contact</h2>
            <p>
              Cognisint may update these terms and privacy practices from time to time by posting revised language on
              this page. Questions may be directed to info@cognisint.com.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
