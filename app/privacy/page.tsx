import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> January 17, 2026
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information you provide directly to us, including name, email address, and any other information
            you choose to provide when contacting us or using our services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you,
            and to comply with legal obligations.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your
            consent, except as required by law or to protect our rights.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal
            information.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to access, correct, or delete your personal information. Contact us at
            hello@cognisint.com to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            policy on this page.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about this privacy policy, please contact us at hello@cognisint.com.
          </p>
        </div>
      </div>
    </div>
  )
}
