import { Target, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Overview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-primary">Challenge</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              How can Spotify help users discover music that matches their current mood while increasing engagement and platform stickiness?
            </p>
            
          {/* Target Audience */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-3 text-foreground">Target Audience</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Both Free and Premium Spotify users</strong> who experience music discovery fatigue—those who spend time searching for the right songs but struggle to find music that matches their emotional state. This includes casual listeners seeking effortless discovery and power users wanting personalized recommendations that adapt to their feelings in real-time.
              </p>
            </Card>
          </div>

          {/* Product Description */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/20 border-border/50 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-foreground">What is Mood Mix Generator?</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mood Mix Generator is an intelligent feature that allows Spotify users to create personalized playlists based on their current emotional state. By combining user preferences with mood-based algorithms, it delivers a discovery experience that feels both personal and effortless.
              </p>
              <p>
                This product addresses a critical pain point: <strong className="text-foreground">music discovery fatigue</strong>. Rather than spending time searching for the right songs, users can instantly generate playlists that match how they're feeling—whether that's energetic, relaxed, focused, or anything in between.
              </p>
              <p>
                The challenge isn't just about recommendation accuracy—it's about creating an experience that feels intuitive and emotionally resonant. Users don't want another algorithm; they want a tool that understands them. Mood Mix bridges this gap by transforming abstract emotions into concrete playlists, making music discovery feel less like work and more like magic.
              </p>
            </div>
          </Card>

          {/* Success Metrics Header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-3">Success Metrics</h3>
            <p className="text-lg text-muted-foreground">Target metrics for making Mood Mix a game-changer</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-0">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground mb-2">20-25%</p>
                  <p className="text-sm text-muted-foreground">Target WAU adoption by month 6</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground mb-2">+20%</p>
                  <p className="text-sm text-muted-foreground">Increase in listening time for active users</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground mb-2">15%</p>
                  <p className="text-sm text-muted-foreground">Better retention vs non-users</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
