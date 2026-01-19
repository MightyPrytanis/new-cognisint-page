import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-background pt-12 pb-20 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary rounded-full">
            <p className="text-sm font-medium text-secondary-foreground">Human scale, enterprise scope</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Change the system, not the symptom.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            If you want systems that work for humans, you have to design systems for humans.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            Cognisint designs human-scale solutions to enterprise-size challenges powered by innovative, intelligent,
            ethical tech.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            We are building intelligent workflows powered by ethics-first AI, privacy by design, and a focus on user satisfaction, retention, and sustainability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/manifesto">
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-transparent text-foreground hover:shadow-[0_0_20px_rgba(2,136,209,0.4)] transition-all duration-300"
              >
                Our Manifesto for Ethical Tech
              </Button>
            </Link>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover:text-white transition-all duration-300"
            >
              <Link href="/beta">
                Request LexFiat Beta Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <p className="mt-12 text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
            Cognisint designs ethical tech infrastructure that reduces burnout instead of amplifying it.
          </p>
        </div>
      </div>
    </section>
  )
}
