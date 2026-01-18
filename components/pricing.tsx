import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Handshake, FileText, CheckSquare, Star } from "lucide-react"
import Image from "next/image"

export default function Pricing() {
  const engagementModels = [
    {
      icon: CheckSquare,
      title: "Project-Based",
      description:
        "Defined scope, clear deliverables. Ideal for specific challenges like workflow design, policy development, or technology assessment.",
    },
    {
      icon: Clock,
      title: "Hourly Advisory",
      description:
        "Flexible, on-demand guidance for questions as they arise. Perfect for ongoing strategic input without long-term commitment.",
    },
    {
      icon: Handshake,
      title: "Retained Consulting",
      description:
        "Ongoing partnership with dedicated availability. Best for organizations seeking sustained transformation and continuous improvement.",
    },
    {
      icon: Star,
      title: "Deliverable-Based",
      description: "Priced per specific output—reports, assessments, training materials, or custom tool development.",
    },
  ]

  return (
    <section id="engagement" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Bespoke Consulting Engagements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Every organization faces unique challenges. Instead of a one-size-fits-us fee schedule and billing for time in 12-minute increments (no matter how wisely or productively the time is used) Cognisint uses tailored engagement modes—from a single focused project to an ongoing advisory relationship. Pricing is structured to match
            your scope, timeline, and goals.
          </p>
        </div>

        {/* Engagement Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {engagementModels.map((model, index) => (
            <Card
              key={index}
              className="border-border border-l-4 border-l-slate-900 transition-all hover:shadow-[0_8px_30px_rgba(2,136,209,0.25)]"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-transparent">
                    {typeof model.icon === "string" ? (
                      <Image
                        src={model.icon || "/placeholder.svg"}
                        alt={model.title}
                        width={24}
                        height={24}
                        className="text-primary bg-transparent"
                      />
                    ) : (
                      <model.icon className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <CardTitle className="text-foreground">{model.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{model.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Design Your Engagement</h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Every engagement begins with a complimentary discovery conversation to understand your challenges, goals,
            and constraints. From there, we'll propose a structure and scope that makes sense for you.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-[#0288D1] hover:shadow-[0_0_20px_rgba(2,136,209,0.5)] rounded-md"
          >
            Schedule a Conversation
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground border-t border-border pt-8 max-w-3xl mx-auto">
            <strong>Important Notice:</strong> Cognisint LLC is not a law firm. Cognisint does not practice law or
            provide legal advice. Services focus on practice management consulting, technology strategy, policy
            research, and workflow optimization—not legal representation or attorney-client services.
          </p>
        </div>
      </div>
    </section>
  )
}
