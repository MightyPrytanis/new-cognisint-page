import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The MCP-based workflow system saved our firm 15+ hours weekly on document research and analysis. Quality improved while costs decreased.",
      author: "David Chen",
      role: "General Counsel",
      company: "Fortune 500 Tech Corp",
      rating: 5,
    },
    {
      quote:
        "Working with Cognisint transformed how we approach stakeholder service. Their focus on humanizing practice helped us reduce burnout and increase stakeholder satisfaction simultaneously.",
      author: "Jennifer Mitchell",
      role: "Managing Partner",
      company: "Mitchell & Associates LLP",
      rating: 5,
    },
    {
      quote:
        "Their policy analysis work was instrumental in our legislative strategy. The depth of research combined with practical implementation guidance made all the difference.",
      author: "Rebecca Sullivan",
      role: "VP of Government Affairs",
      company: "National Trade Association",
      rating: 5,
    },
  ]

  return (
    <section id="insights" className="bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4 text-balance">
            What legal leaders say
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            See how Cognisint has helped firms and organizations reimagine their practice.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
