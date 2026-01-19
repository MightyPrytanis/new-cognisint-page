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
        "LexFiat is being built to align with principles of ethical AI technology and rigorous professional standards for stakeholder information security and privacy. Designed to integrate with practice management software like Clio, not replace it. Chronometric helps lawyers manage their greatest fear: time. It can reconstruct time for billing purposes using evidence and creating an audit trail to avoid inflation and underbilling, and can evaluate and project optimal uses of attorney time. Forecaster is designed to project financial outcomes across a range of scenarios, including tax implications, support calculations, bankruptcy analysis, contracts, property settlements, and more. GoodCounsel is integrated throughout the platform—an ethics, development, and relationship-centered engine that encourages strong professional relationships, individual health, and growth. Automation isn't truly intelligent without the clear values and emotional intelligence needed to promote professional ethics and development, foster strong relationships, and fight burnout before it happens. GoodCounsel puts that intelligence at the core of your practice, not an afterthought.",
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
        "Arkiver is designed to preserve personal and institutional memory and make knowledge accessible across an organization. With semantic knowledge graphs, version-controlled precedent libraries, workflow archaeology, and forensic timeframe reconstruction, Arkiver enables you to leverage collective expertise while maintaining role-based access controls and stakeholder confidentiality. Natural language discovery makes it easy to find what you need, when you need it.",
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
        "Modular MCP server with 70+ tools, multi-agent orchestration, and model agnosticism for auditable, explainable AI. Provides the backend support that makes LexFiat, Arkiver, and other apps now in development work and easy to upgrade.",
      detailedDescription:
        "Cyrano is our modular AI-enhancing MCP server. Built on the Model Context Protocol (MCP), Cyrano prioritizes user sovereignty and model agnosticism. It orchestrates multi-agent, multi-model reasoning through our Modular Agent Engine (MAE), currently includes 70+ specialized legal and information management tools (and growing), and is designed so that every AI recommendation can be made auditable, explainable, and within your control. Cyrano provides the backend support that makes LexFiat, Arkiver, and other apps now in development work and easy to upgrade.",
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
                className="bg-background border border-border border-l-4 border-l-slate-900 p-6 flex flex-col transition-all duration-300 hover:shadow-[0_0_40px_rgba(2,136,209,0.4)]"
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
