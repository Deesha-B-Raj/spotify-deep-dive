import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Sparkles, Target, TrendingUp } from "lucide-react";

export const SolutionRequirements = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Solution & Product <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Introducing Mood Mix Generator—personalized playlists based on emotional state
            </p>
          </div>

          {/* Product Description */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/20 border-border mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">What is Mood Mix Generator?</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mood Mix Generator is an intelligent feature that allows Spotify users to create personalized playlists based on their current emotional state. By analyzing each user's unique listening history—including favorite genres, artists, audio preferences (tempo, energy, acousticness), and skip patterns—the algorithm generates mood-based playlists that feel deeply personal.
                  </p>
                  <p>
                    This product addresses a critical pain point: <strong className="text-foreground">music discovery fatigue</strong>. Rather than spending time searching for the right songs, users can instantly generate playlists that match how they're feeling—whether that's energetic, relaxed, focused, or anything in between.
                  </p>
                  <p>
                    <strong className="text-foreground">How Personalization Works:</strong> When a user selects a mood (e.g., "Relaxed"), the algorithm doesn't just pull generic relaxing songs. Instead, it filters for tracks with low energy and high acousticness that align with that user's listening habits. If someone frequently listens to indie folk, their "Relaxed" mix will lean toward acoustic indie. If they prefer electronic music, it might include ambient electronic tracks. This ensures every mood mix feels tailored to the individual.
                  </p>
                  <p>
                    The challenge isn't just about recommendation accuracy—it's about creating an experience that feels intuitive and emotionally resonant. Users don't want another generic algorithm; they want a tool that understands their unique taste. Mood Mix bridges this gap by transforming abstract emotions into concrete, personalized playlists, making music discovery feel less like work and more like magic.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Success Metrics Overview */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-3">Success Metrics</h3>
            <p className="text-lg text-muted-foreground">Target metrics for making Mood Mix a game-changer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground mb-2">15%</p>
                  <p className="text-sm text-muted-foreground">Better retention vs non-users</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Features */}
          <Card className="p-8 md:p-12 mb-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Key Features</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Mood-Based Playlist Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Users select from predefined mood categories (Happy, Sad, Energetic, Relaxed, Focused, etc.) or use natural language to describe how they're feeling. The algorithm instantly generates a personalized playlist.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Smart Audio Analysis Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Leverages Spotify's audio analysis (tempo, energy, valence, acousticness) combined with individual listening history—including favorite artists, genres, skip behavior, and track completion rates—to ensure accurate mood matching and deep personalization. Each user's mood mix is unique to their taste profile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">One-Tap Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Simple, frictionless UI—select mood, tap generate, start listening. No complicated forms or decision fatigue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Save & Replay</h4>
                  <p className="text-sm text-muted-foreground">
                    Users can save mood mixes to their library and replay them anytime, building a personal collection of emotional soundtracks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    The algorithm continuously improves personalization by learning from each user's interactions—skip rates, track completion, save behavior, and explicit feedback. Over time, it becomes increasingly accurate at predicting what each individual wants to hear in any given mood.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Why These Features Were Prioritized */}
          <Card className="p-8 md:p-12 mb-8 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Why These Features Were Prioritized</h3>
            
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Speed Over Perfection</h4>
                <p className="text-sm text-muted-foreground">
                  Users value instant gratification. A "good enough" playlist delivered in 2 seconds beats a "perfect" playlist after 30 seconds of customization. The strategy prioritizes speed and simplicity.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Emotional Resonance</h4>
                <p className="text-sm text-muted-foreground">
                  Research showed users care more about how music makes them feel than technical accuracy. Mood-based discovery taps into this emotional connection, making Spotify feel more personal.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">Low Barrier to Entry</h4>
                <p className="text-sm text-muted-foreground">
                  One-tap generation ensures even casual users can benefit without learning complex features. This maximizes adoption potential across both Free and Premium tiers.
                </p>
              </div>
            </div>
          </Card>

          {/* MVP vs Future Roadmap */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary text-primary-foreground">MVP (Launch)</Badge>
                <h3 className="text-xl font-bold text-foreground">Minimum Viable Product</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    8-10 predefined mood categories
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Basic algorithm using audio features + listening history
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    One-tap playlist generation (20-30 tracks)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Save to library functionality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Basic feedback mechanism (thumbs up/down)
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="text-primary border-primary">Future Roadmap</Badge>
                <h3 className="text-xl font-bold text-foreground">Post-Launch Features</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Natural language mood input ("I feel anxious and need to relax")
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Context-aware recommendations (time of day, weather, location)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Social sharing—send mood mixes to friends
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Mood tracking over time (insights dashboard)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Advanced customization (adjust energy, tempo, familiarity)
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};