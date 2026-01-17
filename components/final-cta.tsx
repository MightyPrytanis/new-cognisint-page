import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
          Ready to transform your practice?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Connect with our team to explore how Cognisint can help humanize your legal practice and drive sustainable
          growth.
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
