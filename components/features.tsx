import { Package, Brain } from "lucide-react"
import Image from "next/image"

export default function Features() {
  const features = [
    {
      icon: "ai",
      title: "Ethical AI",
      description:
        "Hallucinations, errors, or just plain old lies–no matter what you call AI fabrications, they're not just annoying; they create real dangers for you and your stakeholders. Our ethically-centered tools are designed to minimize risk and deliver a better AI experience no matter what model you use.",
    },
    {
      icon: "privacy",
      title: "Privacy-First Architecture",
      description:
        "Least-privilege access, auditable MCP infrastructure, and data boundaries that match real-world legal, regulatory, and organizational requirements.",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Modular Platform",
      description:
        "LexFiat for workflows, Arkiver for knowledge management, and Cyrano as the MCP backbone—a layered, robust stack that supports you and your mission.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Smart Workflows",
      description:
        "Reduce review from hours to minutes with intelligent routing, structured summaries, and document-aware flows built specifically for legal work.",
    },
  ]

  return (
    <section id="services" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Foundation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full workflows for in-house teams, government, and nonprofits—reducing manual review, surfacing what
            matters, and keeping legal operations coherent and humane.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background border border-border border-l-4 border-l-slate-900 p-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
            >
              <div className="h-12 w-12 bg-transparent flex items-center justify-center text-primary mb-4">
                {feature.icon === "ai" ? (
                  <Image
                    src="/images/screenshot-202026-01-17-20at-202.png"
                    alt="Ethical AI"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : feature.icon === "privacy" ? (
                  <Image
                    src="/images/screenshot-202026-01-17-20at-202.png"
                    alt="Privacy First"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : feature.icon === "deliverable" ? (
                  <Image
                    src="/images/screenshot-202026-01-17-20at-202.png"
                    alt="Deliverable"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  feature.icon
                )}
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
