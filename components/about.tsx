import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4 text-balance">
            Built by someone who knows.
          </h2>
        </div>

        {/* Founder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Cognisint is a one-person technology solutions studio with a legal and public-sector focus, leveraging
              lessons from more than two decades in law to develop practical solutions—software, workflows, and policy
              frameworks—not just bullet points on a resume.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Its products and patterns are active R&D: real code, real experiments, and real playbooks that can be
              brought into client work wherever there is a shared vision and values.
            </p>
          </div>

          {/* Founder Card */}
          <div>
            <Card className="bg-background border-border sticky top-20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider mb-2">Founder</p>
                    <h3 className="text-xl font-bold text-foreground">David Towne</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Attorney · Technologist · Legal workflow designer</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Focused on humane legal operations, AI ethics, and Model Context Protocol infrastructure for teams
                      committed to sustainable operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
