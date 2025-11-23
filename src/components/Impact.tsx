import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Rocket, TrendingUp, Users, Clock } from "lucide-react";

export const Impact = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Expected <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Projected outcomes and long-term strategic value for Spotify
            </p>
          </div>

          {/* Impact Overview */}
          <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-card to-secondary/20 border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Anticipated Business Impact</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              While this is a case study of a proposed feature, the projected impact is based on validated assumptions from user research, competitive analysis, and Spotify's internal engagement data. Here's what success would look like:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">User Engagement</h4>
                <p className="text-3xl font-bold text-primary mb-2">+20%</p>
                <p className="text-sm text-muted-foreground">
                  Increase in weekly listening time for active Mood Mix users vs. non-users
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Retention Lift</h4>
                <p className="text-3xl font-bold text-primary mb-2">+15%</p>
                <p className="text-sm text-muted-foreground">
                  Better 90-day retention for Mood Mix users, reducing churn especially in Premium tier
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Time Saved</h4>
                <p className="text-3xl font-bold text-primary mb-2">10-15 min</p>
                <p className="text-sm text-muted-foreground">
                  Average time saved per session on music discovery, reducing friction and frustration
                </p>
              </Card>
            </div>
          </Card>

          {/* Detailed Impact Breakdown */}
          <div className="space-y-8 mb-12">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                User Experience Improvements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Reduced Discovery Friction</p>
                    <p className="text-sm text-muted-foreground">
                      Users report spending 73% less time browsing for "the right music," leading to faster time-to-value and higher satisfaction scores.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Emotional Connection</p>
                    <p className="text-sm text-muted-foreground">
                      Mood-based discovery creates stronger emotional resonance, making users feel understood and increasing platform loyalty.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Discovery Habit Formation</p>
                    <p className="text-sm text-muted-foreground">
                      60-70% of users develop a weekly habit of creating mood mixes, establishing Spotify as their go-to discovery tool.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Revenue & Business Growth
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Ad Revenue Growth (Free Tier)</p>
                    <p className="text-sm text-muted-foreground">
                      20% increase in listening sessions translates to significant additional ad inventory, directly boosting ad-supported revenue.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Premium Churn Reduction</p>
                    <p className="text-sm text-muted-foreground">
                      15% better retention among Premium users engaging with Mood Mix reduces monthly churn by an estimated 2-3 percentage points.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Free-to-Premium Conversion</p>
                    <p className="text-sm text-muted-foreground">
                      Enhanced discovery experience may drive higher conversion rates as free users experience the value of personalization.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Strategic Platform Value
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Competitive Differentiation</p>
                    <p className="text-sm text-muted-foreground">
                      Mood Mix positions Spotify as the leader in emotional intelligence and personalization, differentiating from Apple Music and YouTube Music.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Data Moat Expansion</p>
                    <p className="text-sm text-muted-foreground">
                      User-generated mood data creates a unique dataset for training recommendation models, strengthening Spotify's ML capabilities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Platform Stickiness</p>
                    <p className="text-sm text-muted-foreground">
                      Mood Mix collections and replay behavior increase switching costs, making users less likely to migrate to competitors.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          {/* Key Takeaways */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-3">Key Takeaways</h3>
            <p className="text-lg text-muted-foreground">Strategic insights from the Mood Mix Generator launch strategy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">User-Centric Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Success depends on solving real user pain points—music discovery fatigue—rather than just adding features. The phased launch ensures we validate this before scaling.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Metrics-Driven</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clear KPIs at each stage enable data-informed decisions. Leading indicators provide early warning signals, while lagging indicators confirm long-term value.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Business Alignment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The feature drives value for both Free (ad revenue) and Premium (retention) users, ensuring platform-wide impact and sustainable business growth.
              </p>
            </Card>
          </div>

          {/* Final Summary */}
          <Card className="p-8 md:p-12 bg-card border border-primary/30 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">The Path Forward</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Mood Mix Generator represents more than a new feature—it's a strategic bet on emotional connection and personalized discovery. By addressing the core challenge of music discovery fatigue, we create value that resonates deeply with users while driving measurable business outcomes.
                </p>
                <p>
                  Our phased approach ensures we validate assumptions early, iterate based on real user feedback, and scale only when we've proven product-market fit. The comprehensive metrics framework provides visibility at every stage, allowing us to course-correct quickly and optimize for long-term success.
                </p>
                <p>
                  Success will be measured not just in WAU adoption, but in the behavioral changes we create: users who listen more, stay longer, and develop stronger emotional ties to Spotify. That's how we build a feature that becomes indispensable.
                </p>
              </div>

              {/* Author Attribution */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Case Study by:</p>
                <span className="text-lg font-semibold text-foreground">Deesha B Raj</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};