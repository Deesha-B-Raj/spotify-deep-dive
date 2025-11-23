import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Users, Code, Clock } from "lucide-react";

export const ExecutionTradeoffs = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Execution & <span className="text-primary">Tradeoffs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we navigated constraints, collaborated across teams, and made critical decisions under uncertainty
            </p>
          </div>

          {/* Launch Strategy Overview */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-card to-secondary/20 border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Phased Launch Strategy</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We adopted a two-phase approach to validate assumptions early, gather real user feedback, and scale responsibly. This allowed us to de-risk the launch while maximizing learning opportunities.
            </p>
          </Card>

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
          <Card className="p-8 md:p-12 mb-12 bg-card border-border">
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

          {/* Team Collaboration */}
          <Card className="p-8 md:p-12 mb-8 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Cross-Functional Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Successful execution required tight coordination between Product, Design, Engineering, Data Science, and Marketing teams. Here's how we worked together:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Design Partnership</h4>
                  <p className="text-sm text-muted-foreground">
                    Weekly design sprints to iterate on UI/UX, conduct user testing, and ensure the mood selection interface felt intuitive and delightful.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Engineering Alignment</h4>
                  <p className="text-sm text-muted-foreground">
                    Daily standups to address technical blockers, prioritize backend infrastructure work, and ensure API performance met latency requirements.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Data Science Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Bi-weekly model reviews to refine recommendation algorithms, analyze performance metrics, and incorporate user feedback into training data.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Marketing Coordination</h4>
                  <p className="text-sm text-muted-foreground">
                    Planned in-app messaging, email campaigns, and social media strategy to drive awareness and encourage trial during launch phases.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Constraints Faced */}
          <Card className="p-8 md:p-12 mb-8 bg-card border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-destructive/10 shrink-0">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Key Constraints</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every product launch faces limitations. Here are the major constraints we navigated:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Timeline Pressure</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong className="text-foreground">Challenge:</strong> Leadership wanted a Q2 launch to align with summer listening trends, giving us only 4 months from ideation to beta.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Decision:</strong> Prioritized MVP features ruthlessly. Cut natural language input and context-aware features to focus on core mood selection and playlist generation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-start gap-4">
                  <Code className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Technical Limitations</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong className="text-foreground">Challenge:</strong> Existing recommendation infrastructure wasn't optimized for real-time mood-based generation. Cold start problems for new users without listening history.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Decision:</strong> Built a hybrid model combining collaborative filtering with audio feature analysis. For new users, leaned more heavily on audio features until we had enough behavioral data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-secondary/30 border border-border/50">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Resource Constraints</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong className="text-foreground">Challenge:</strong> Limited engineering resources (2 backend, 1 frontend, 1 data scientist) competing with other roadmap priorities.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Decision:</strong> Leveraged existing Spotify infrastructure wherever possible. Reused audio analysis APIs, authentication systems, and storage solutions rather than building from scratch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Decisions Under Uncertainty */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/20 border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Critical Decisions Made Under Uncertainty</h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <Badge variant="outline" className="text-primary border-primary mb-3">Decision 1</Badge>
                <h4 className="font-bold text-foreground mb-3">Predefined Moods vs. Free-Form Input</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Option A: Predefined Categories</p>
                    <p className="text-sm text-muted-foreground">✅ Faster to build, easier to test, simpler UX</p>
                    <p className="text-sm text-muted-foreground">❌ Less personalized, limited emotional range</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Option B: Natural Language</p>
                    <p className="text-sm text-muted-foreground">✅ More personal, flexible, innovative</p>
                    <p className="text-sm text-muted-foreground">❌ Complex NLP, higher latency, harder to validate</p>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  <strong>Outcome:</strong> Chose Option A for MVP. Data showed 85% of users were satisfied with 8-10 predefined moods. Natural language added to roadmap for V2.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <Badge variant="outline" className="text-primary border-primary mb-3">Decision 2</Badge>
                <h4 className="font-bold text-foreground mb-3">Free vs. Premium Feature</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Option A: Premium-Only</p>
                    <p className="text-sm text-muted-foreground">✅ Adds Premium value, reduces server load</p>
                    <p className="text-sm text-muted-foreground">❌ Limits adoption, misses Free tier revenue</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Option B: Available to All</p>
                    <p className="text-sm text-muted-foreground">✅ Max adoption, benefits both segments</p>
                    <p className="text-sm text-muted-foreground">❌ Higher infrastructure costs</p>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  <strong>Outcome:</strong> Chose Option B. Free users drive ad revenue through increased engagement, while Premium users get enhanced retention value. Win-win for business model.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <Badge variant="outline" className="text-primary border-primary mb-3">Decision 3</Badge>
                <h4 className="font-bold text-foreground mb-3">Playlist Length & Refresh Strategy</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Option A: Short (10-15 tracks)</p>
                    <p className="text-sm text-muted-foreground">✅ Quick generation, easy to complete</p>
                    <p className="text-sm text-muted-foreground">❌ Users want longer sessions</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Option B: Long (50+ tracks)</p>
                    <p className="text-sm text-muted-foreground">✅ Supports extended listening</p>
                    <p className="text-sm text-muted-foreground">❌ Slower generation, harder to maintain quality</p>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  <strong>Outcome:</strong> Compromise—20-30 tracks for MVP with option to "Add More Songs" button. Balances generation speed with session length flexibility.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};