import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export const LaunchStrategy = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Launch <span className="text-primary">Strategy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A phased approach to validate, iterate, and scale the Mood Mix Generator
            </p>
          </div>

          {/* Alpha/Beta Phase */}
          <Card className="p-8 md:p-12 mb-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="text-primary border-primary px-4 py-1">
                Phase 1
              </Badge>
              <h3 className="text-2xl font-bold text-foreground">Alpha/Beta (Invite-Only)</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 text-lg">
              Testing the core hypothesis: Does Mood Mix actually resonate with users, and will they come back?
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Key Success Metrics
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">30%+</strong> create their first mix within 48 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">40%+</strong> return 2+ times per week
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">60%+</strong> listen to at least half the tracks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">70%+</strong> rate mixes as helpful/accurate
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  What We're Learning
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                    <span className="text-muted-foreground">
                      Does the feature resonate emotionally with users?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                    <span className="text-muted-foreground">
                      Are recommendations accurate enough to drive repeat usage?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                    <span className="text-muted-foreground">
                      What friction points prevent activation?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                    <span className="text-muted-foreground">
                      Which mood categories resonate most?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* GA Phase */}
          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="text-primary border-primary px-4 py-1">
                Phase 2
              </Badge>
              <h3 className="text-2xl font-bold text-foreground">General Availability</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 text-lg">
              Making Mood Mix a go-to way people discover music on Spotify, driving measurable business impact.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Adoption Targets
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Month 3:</strong> 10-15% WAU penetration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Month 6:</strong> 20-25% WAU penetration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Month 12:</strong> 30-35% WAU penetration
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Business Impact
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      15% better retention for Mood Mix users
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      20% increase in weekly listening time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Reduced churn for Premium subscribers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Increased ad revenue for Free tier users
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
