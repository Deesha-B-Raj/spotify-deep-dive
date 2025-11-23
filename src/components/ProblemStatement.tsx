import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown } from "lucide-react";

export const ProblemStatement = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Problem <span className="text-primary">Statement</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the core challenge behind music discovery fatigue
            </p>
          </div>

          {/* Main Challenge */}
          <Card className="p-8 md:p-12 mb-8 bg-gradient-to-br from-card to-secondary/20 border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-destructive/10 shrink-0">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">The User Problem</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">How do we help users discover music that matches their current mood while increasing engagement and platform stickiness?</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Despite Spotify's vast music library of over 100 million tracks, users consistently report feeling overwhelmed when trying to find music that matches their emotional state. They spend valuable time browsing playlists, skipping tracks, and searching for "the right vibe"—only to end up frustrated or settling for familiar favorites.
                </p>
              </div>
            </div>
          </Card>

          {/* Why It Matters */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Why This Matters for Users
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Time Wasted on Discovery</p>
                    <p className="text-sm text-muted-foreground">
                      Users spend 10-15 minutes per session just looking for music instead of listening
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Emotional Disconnect</p>
                    <p className="text-sm text-muted-foreground">
                      Generic playlists don't capture the nuance of how users actually feel in the moment
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Decision Paralysis</p>
                    <p className="text-sm text-muted-foreground">
                      Too many choices without clear guidance leads to fatigue and reduced satisfaction
                    </p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Why This Matters for Business
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Reduced Engagement</p>
                    <p className="text-sm text-muted-foreground">
                      Discovery friction leads to shorter sessions and fewer return visits
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Churn Risk</p>
                    <p className="text-sm text-muted-foreground">
                      Users frustrated with discovery may switch to competitors offering better personalization
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Missed Revenue Opportunity</p>
                    <p className="text-sm text-muted-foreground">
                      Less engagement means fewer ad impressions (Free tier) and lower retention (Premium)
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          {/* Target Audience */}
          <Card className="p-8 md:p-12 mt-8 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Target Audience</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              <strong className="text-foreground">Both Free and Premium Spotify users</strong> who experience music discovery fatigue—those who spend time searching for the right songs but struggle to find music that matches their emotional state. This includes:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Casual listeners</strong> seeking effortless discovery without spending time browsing
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Power users</strong> wanting personalized recommendations that adapt to their feelings in real-time
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Mood-driven listeners</strong> who want music that matches specific emotional states throughout their day
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};