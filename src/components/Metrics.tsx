import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Metrics = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-primary">Metrics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key performance indicators that define success at each stage
            </p>
          </div>

          {/* Health Metrics */}
          <Card className="p-8 md:p-12 mb-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Health Metrics & Quality Indicators</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Ratio</th>
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Healthy Range</th>
                    <th className="text-left py-4 px-4 text-foreground font-semibold">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4 text-muted-foreground">Creators : Total WAU</td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="text-primary border-primary">20-40%</Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      Not everyone creates constantly – some just replay saved mixes
                    </td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4 text-muted-foreground">Listeners : Total WAU</td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="text-primary border-primary">80-100%</Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      Most engaged users should be listening regularly
                    </td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4 text-muted-foreground">Repeat Listeners</td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="text-primary border-primary">60-70%</Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      Strong habit signal – people coming back multiple times
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4 text-muted-foreground">Mixes Created : Mixes Played</td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="text-primary border-primary">1:5 to 1:10</Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      Mixes get replayed a bunch (means they're valuable)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Leading vs Lagging Indicators */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Leading Indicators */}
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary text-primary-foreground">Leading</Badge>
                <h3 className="text-xl font-bold text-foreground">Early Signals</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Metrics that predict future success and allow for quick course correction
              </p>

              <ul className="space-y-4">
                <li className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">Activation ≤48h</h4>
                    <Badge variant="outline" className="text-primary border-primary text-xs">≥30%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Users who make their first mix within 48 hours
                  </p>
                </li>

                <li className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">Weekly Starters</h4>
                    <Badge variant="outline" className="text-primary border-primary text-xs">≥40%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Users who engage 2+ times per week
                  </p>
                </li>

                <li className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">Mix Completion Rate</h4>
                    <Badge variant="outline" className="text-primary border-primary text-xs">≥60%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Users who listen to at least half the tracks
                  </p>
                </li>

                <li className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">WAU Penetration</h4>
                    <Badge variant="outline" className="text-primary border-primary text-xs">20-25%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Mood Mix users as % of total Spotify WAU (Month 6)
                  </p>
                </li>
              </ul>
            </Card>

            {/* Lagging Indicators */}
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="border-primary text-primary">Lagging</Badge>
                <h3 className="text-xl font-bold text-foreground">Long-term Impact</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Metrics that confirm sustained value and business impact
              </p>

              <ul className="space-y-4">
                <li className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">User Satisfaction</h4>
                    <Badge variant="outline" className="text-primary border-primary text-xs">≥70%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Users rating mixes as helpful/accurate
                  </p>
                </li>

                <li className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">Net Minutes Lift</h4>
                    <Badge variant="outline" className="text-primary border-primary text-xs">+15%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Extra listening time vs. before the feature
                  </p>
                </li>

                <li className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">7-Day Retention</h4>
                    <Badge variant="outline" className="text-primary border-primary text-xs">≥60%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Users who return after first use (Day 7)
                  </p>
                </li>

                <li className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">30-Day Retention</h4>
                    <Badge variant="outline" className="text-primary border-primary text-xs">≥40%</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Users who maintain engagement (Day 30)
                  </p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
