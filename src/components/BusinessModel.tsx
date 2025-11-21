import { Card } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp } from "lucide-react";

export const BusinessModel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Business <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Mood Mix drives revenue across both Free and Premium user segments
            </p>
          </div>

          {/* Revenue Formulas */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Free Users */}
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Free Users (Ad-Supported)</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">Revenue Formula</p>
                  <p className="font-mono text-sm text-foreground">
                    Active Free Users × Sessions × Ad Impressions × eCPM
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Impact Drivers:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        More mood mixes → more sessions → more ad impressions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Better recommendations → longer sessions → more ad opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Increased satisfaction → Premium conversion potential
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Premium Users */}
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Premium Subscribers</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">Revenue Formula</p>
                  <p className="font-mono text-sm text-foreground">
                    Active Premium Subscribers × Monthly Fee
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Impact Drivers:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Easier discovery → reduced "what to listen to" fatigue
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Better personalization → emotional attachment to platform
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Regular mood-based listening → increased switching costs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* North Star Metric */}
          <Card className="p-8 md:p-12 bg-card border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">North Star Metric</p>
                  <h3 className="text-2xl font-bold text-foreground">Weekly Active Users (WAU)</h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 text-lg">
                Unique users who either create OR listen to mood mixes in any 7-day period
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Why This Metric?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Behavioral Change:</strong> Counts both creators and listeners
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Revenue Connection:</strong> More active users = more value
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Fast Feedback:</strong> Weekly check-ins for rapid iteration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Right Balance:</strong> Shows actual habit formation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
