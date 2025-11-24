import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, TrendingUp, Target, CheckCircle2, Rocket } from "lucide-react";
import moodMixHome from "@/assets/mood-mix-home.jpg";
import moodMixPlaylist from "@/assets/mood-mix-playlist.jpg";
import moodMixDesktop from "@/assets/mood-mix-desktop.jpg";

export const MetricsSuccess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Metrics & Success <span className="text-primary">Criteria</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive framework for measuring impact and driving accountability
            </p>
          </div>

          {/* Prototype Mockups */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-card to-secondary/20 border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Prototype Mockups</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Visual concepts showing how the Mood Mix Generator would integrate into Spotify's existing interface across mobile and desktop platforms.
            </p>

            <div className="space-y-8">
              {/* Mobile Home Screen */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Mobile: Mood Selection Interface
                </h4>
                <div className="rounded-lg overflow-hidden border border-border">
                  <img 
                    src={moodMixHome} 
                    alt="Mood Mix Generator mobile home screen showing mood selection tiles"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Users select from 8-10 predefined mood categories, each with distinct visual identity and color coding for quick emotional recognition.
                </p>
              </div>

              {/* Mobile Playlist View */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Mobile: Generated Mix Playlist
                </h4>
                <div className="rounded-lg overflow-hidden border border-border">
                  <img 
                    src={moodMixPlaylist} 
                    alt="Generated mood mix playlist showing song list with play controls"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  After mood selection, users receive a personalized playlist with curated tracks that match their emotional state and listening preferences.
                </p>
              </div>

              {/* Desktop View */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Desktop: Home Screen Integration
                </h4>
                <div className="rounded-lg overflow-hidden border border-border">
                  <img 
                    src={moodMixDesktop} 
                    alt="Spotify desktop app showing Mood Mix Generator in main content area"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Desktop experience features prominent placement on the home screen with larger mood cards and quick access to recently created mood mixes.
                </p>
              </div>
            </div>
          </Card>

          {/* North Star Metric */}
          <Card className="p-8 md:p-12 mb-12 bg-card border border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">North Star Metric</p>
                  <h3 className="text-3xl font-bold text-foreground">Weekly Active Users (WAU)</h3>
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

          {/* Phased Launch Strategy */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Phased Launch Strategy</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A three-phase rollout approach to validate assumptions early, gather real user feedback, and scale responsibly while maximizing learning opportunities.
            </p>

            {/* Alpha/Beta Phase */}
            <Card className="p-8 mb-8 bg-background/50 border-border">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="text-primary border-primary px-4 py-1">
                  Phase 1: Alpha/Beta
                </Badge>
                <span className="text-sm text-muted-foreground">Invite-Only Testing</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Testing the core hypothesis: Does Mood Mix actually resonate with users, and will they come back?
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-primary" />
                    Key Success Metrics
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">30%+</strong> create their first mix within 48 hours
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">40%+</strong> return 2+ times per week
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">60%+</strong> listen to at least half the tracks
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">70%+</strong> rate mixes as helpful/accurate
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    What We're Learning
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">
                        Does the feature resonate emotionally with users?
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">
                        Are recommendations accurate enough to drive repeat usage?
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">
                        What friction points prevent activation?
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground">
                        Which mood categories resonate most?
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* GA Phase */}
            <Card className="p-8 bg-background/50 border-border">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="text-primary border-primary px-4 py-1">
                  Phase 2: General Availability
                </Badge>
                <span className="text-sm text-muted-foreground">Full Rollout</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Making Mood Mix a go-to way people discover music on Spotify, driving measurable business impact.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Adoption Targets
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Month 3:</strong> 10-15% WAU penetration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Month 6:</strong> 20-25% WAU penetration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Month 12:</strong> 30-35% WAU penetration
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Business Impact Goals
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        15% better retention for Mood Mix users
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        20% increase in weekly listening time
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        Reduced churn for Premium subscribers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        Increased ad revenue for Free tier users
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Card>

          {/* KPI Tree */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-card to-secondary/20 border-border">
            <h3 className="text-2xl font-bold mb-8 text-foreground">KPI Tree: Leading & Lagging Indicators</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Leading Indicators */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Leading Indicators</Badge>
                  <p className="text-sm text-muted-foreground">Early signals for quick course correction</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">Activation ≤48h</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">≥30%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      % of users who make their first mix within 48 hours of discovering the feature
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">Feature Utilization Rate</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">≥15%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      % of invited users who create at least one mix during beta
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">Weekly Starters</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">≥40%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      % of users who engage 2+ times per week
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">Mix Completion Rate</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">≥60%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      % of mixes where users listen to at least half the tracks
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">WAU Penetration</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">20-25%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Mood Mix users as % of total Spotify WAU by Month 6
                    </p>
                  </div>
                </div>
              </div>

              {/* Lagging Indicators */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">Lagging Indicators</Badge>
                  <p className="text-sm text-muted-foreground">Long-term impact confirmation</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">User Satisfaction</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">≥70%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      % of users rating mixes as helpful/accurate
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">Net Minutes Lift</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">+15%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Extra listening time compared to before the feature
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">7-Day Retention</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">≥60%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Users who return to feature after first use (Day 7)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">30-Day Retention</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">≥40%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Users who maintain engagement after 30 days
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground text-sm">Feature Stickiness</h4>
                      <Badge variant="outline" className="text-primary border-primary text-xs">≥50%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      (Weekly Active Users / Monthly Active Users) ratio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Health Metrics */}
          <Card className="p-8 md:p-12 mb-12 bg-card border-border">
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
                      Mixes get replayed multiple times (means they're valuable)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Business Model & Revenue Impact */}
          <Card className="p-8 md:p-12 mb-8 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Business Model & Revenue Impact</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Free Users */}
              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">Free Users (Ad-Supported)</h4>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded bg-background/50 border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1">Revenue Formula</p>
                    <p className="font-mono text-xs text-foreground">
                      Active Free Users × Sessions × Ad Impressions × eCPM
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Impact Drivers:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">
                          More mood mixes → more sessions → more ad impressions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">
                          Better recommendations → longer sessions → more opportunities
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Premium Users */}
              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground">Premium Subscribers</h4>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded bg-background/50 border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1">Revenue Formula</p>
                    <p className="font-mono text-xs text-foreground">
                      Active Premium Subscribers × Monthly Fee
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Impact Drivers:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">
                          Easier discovery → reduced listening fatigue
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">
                          Better personalization → emotional platform attachment
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* A/B Testing Plan */}
          <Card className="p-8 md:p-12 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Experimentation & A/B Testing Strategy</h3>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We'll run controlled experiments throughout both launch phases to validate hypotheses and optimize the experience:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                  <Badge variant="outline" className="text-primary border-primary mb-3">Test 1</Badge>
                  <h4 className="font-bold text-foreground mb-3">Mood Selection UI</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Hypothesis:</strong> Visual mood cards drive higher engagement than text list
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Variants:</strong> A) Icon cards B) Text dropdown C) Emoji grid
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Success Metric:</strong> Activation rate within 48h
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                  <Badge variant="outline" className="text-primary border-primary mb-3">Test 2</Badge>
                  <h4 className="font-bold text-foreground mb-3">Onboarding Flow</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Hypothesis:</strong> Tutorial increases feature understanding and adoption
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Variants:</strong> A) No tutorial B) 3-step guide C) Video demo
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Success Metric:</strong> Feature utilization rate
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                  <Badge variant="outline" className="text-primary border-primary mb-3">Test 3</Badge>
                  <h4 className="font-bold text-foreground mb-3">Playlist Length</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Hypothesis:</strong> Optimal length balances completion rate and session time
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Variants:</strong> A) 15 tracks B) 25 tracks C) 40 tracks
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Success Metric:</strong> Mix completion rate & listening time
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                  <Badge variant="outline" className="text-primary border-primary mb-3">Test 4</Badge>
                  <h4 className="font-bold text-foreground mb-3">Entry Point Placement</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Hypothesis:</strong> Homepage placement drives more discovery than buried menu
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Variants:</strong> A) Homepage hero B) Library tab C) Search integration
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Success Metric:</strong> Feature discovery rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};