"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import CyranoWordmark from "@/components/cyrano-wordmark"

export default function Products() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  const products = [
    {
      id: "lexfiat",
      name: "LexFiat",
      tagline: "Change the system, not the symptom.",
      logo: "/lexfiat-wordmark.png",
      description:
        "Intelligent legal workflow automation. Orchestrates multiple and multi-modal AIs via our sophisticated Multi Agent Engine and gives them tools to make your practice hum.",
      detailedDescription:
        "Built to align with ethical AI principles and rigorous professional standards, LexFiat integrates seamlessly with existing practice management software like Clio. The platform combines three specialized systems: Chronometric reconstructs billable time using evidence and audit trails to ensure accuracy; Forecaster projects financial outcomes across tax, bankruptcy, support, and settlement scenarios; and GoodCounsel—woven throughout the platform—provides ethics guidance, professional development support, and relationship management tools. True automation requires not just technical capability, but the emotional intelligence to promote professional ethics, foster strong relationships, and prevent burnout.",
      features: [
        "Ten Rules-compliant AI architecture",
        "Multi Agent Engine orchestrating multiple and multi-modal AIs",
        "Chronometric: Evidence-based time reconstruction and billing optimization",
        "Forecaster: Financial projections for tax, bankruptcy, support, settlements",
        "GoodCounsel: Integrated ethics, development, and emotional intelligence engine",
        "Designed to integrate with practice management software like Clio",
      ],
    },
    {
      id: "arkiver",
      name: "Arkiver",
      tagline: "Enterprise Knowledge Architecture",
      logo: "/arkiver-wordmark.png",
      description:
        "Preserve personal and institutional memory with semantic knowledge graphs, version control, and natural language discovery.",
      detailedDescription:
        "Organizations lose critical knowledge when employees leave, projects evolve, or institutional memory fades. Arkiver prevents this by creating semantic knowledge graphs that map relationships between documents, decisions, and expertise across your organization. Version-controlled precedent libraries track how policies and procedures evolve over time, while workflow archaeology reconstructs the history and rationale behind past decisions. Role-based access ensures confidentiality while making collective expertise discoverable through natural language search.",
      features: [
        "Semantic knowledge graph construction",
        "Cross-referenced precedent libraries",
        "Workflow archaeology and forensic timeframe reconstruction",
        "Policy and procedure management with version control",
        "Natural language discovery across your knowledge base",
      ],
    },
    {
      id: "cyrano",
      name: "Cyrano",
      tagline: "Modular MCP server for AI-enhanced legal workflows.",
      logo: null,
      component: CyranoWordmark,
      description:
        "Modular MCP server providing the backend infrastructure that powers LexFiat, Arkiver, and other apps in development.",
      detailedDescription:
        "Built on the Model Context Protocol (MCP), Cyrano serves as the intelligent infrastructure layer for the entire Cognisint platform. It prioritizes user sovereignty—you choose your AI providers and maintain full control over how and when AI is used. The Modular Agent Engine (MAE) coordinates multiple AI models simultaneously, each with access to over 70 specialized legal and information management tools. Every recommendation includes a complete reasoning chain, making AI decisions auditable and explainable. As the backend foundation for LexFiat, Arkiver, and future applications, Cyrano ensures the ecosystem remains upgradeable and interoperable.",
      features: [
        "Model Context Protocol (MCP) infrastructure",
        "Model agnosticism—choose your AI providers",
        "Multi-agent, multi-model orchestration via MAE",
        "70+ specialized legal tools and growing",
        "Auditable, explainable AI reasoning chains",
        "Backend support for LexFiat, Arkiver, and apps in development",
      ],
    },
  ]

  return (
    <section id="products" className="bg-muted/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Cutting-Edge Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modular, integrated platform in active development for automating critical legal operations while
            centering human judgment and relationships. Each product works independently or as part of the ecosystem.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                id={product.id}
                className="bg-background border border-border border-l-4 border-l-slate-900 p-6 flex flex-col transition-all duration-300 hover:shadow-[0_0_40px_rgba(2,136,209,0.5)]"
              >
                <div className="mb-4 h-12 relative">
                  {product.component ? (
                    <product.component />
                  ) : (
                    <Image
                      src={product.logo || "/placeholder.svg"}
                      alt={product.name}
                      height={48}
                      width={200}
                      className="object-contain object-left bg-transparent"
                    />
                  )}
                </div>

                <h3 className="text-foreground text-2xl font-bold">{product.name}</h3>
                <p className="text-sm font-semibold text-muted-foreground mb-4">{product.tagline}</p>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">{product.description}</p>

                <Button
                  onClick={() => setExpandedProduct(expandedProduct === product.name ? null : product.name)}
                  className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground hover:text-[#0288D1] hover:shadow-[0_0_30px_rgba(2,136,209,0.5)] transition-all duration-300"
                >
                  <span>{expandedProduct === product.name ? "Hide Details" : "Learn More"}</span>
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      expandedProduct === product.name ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </div>
            ))}
          </div>

          {expandedProduct && (
            <div className="bg-background border border-border border-l-4 border-l-slate-900 p-8 animate-in fade-in duration-300">
              {products
                .filter((p) => p.name === expandedProduct)
                .map((product) => (
                  <div key={product.name}>
                    <div className="mb-6 h-16 relative">
                      {product.component ? (
                        <product.component />
                      ) : (
                        <Image
                          src={product.logo || "/placeholder.svg"}
                          alt={product.name}
                          height={64}
                          width={280}
                          className="object-contain object-left bg-transparent"
                        />
                      )}
                    </div>

                    <h3 className="text-3xl font-bold text-foreground mb-4">{product.name}</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{product.detailedDescription}</p>

                    <h4 className="font-semibold text-foreground mb-4 text-lg">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1 text-xl">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to explore the code? Visit our Codebase repository for detailed documentation and source.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground hover:text-[#0288D1]">
            <a href="https://github.com/cognisint/codebase" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
