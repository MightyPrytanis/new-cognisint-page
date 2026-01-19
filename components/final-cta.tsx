import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-2">
          Your work is <strong>important</strong>.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-2">
          <em>Transform</em> how you work.
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
          Make your work <strong><em>Transformative</em></strong>.
        </p>
        <Button
          size="lg"
          className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300"
        >
          Schedule Your Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
