import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Rocket } from "lucide-react";

export const Conclusion = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Key <span className="text-primary">Takeaways</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic insights from the Mood Mix Generator launch strategy
            </p>
          </div>

          {/* Key Insights */}
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

              {/* Team Attribution */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Case Study by:</p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-foreground">Kevin He</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-foreground">Shazeem Kudchiwala</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-foreground">Haiyi Xiao</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-foreground">Tamara Eliscovich Sigal</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-foreground">Deesha Basavaraju Raj</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
