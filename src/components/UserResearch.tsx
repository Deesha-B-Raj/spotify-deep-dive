import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, TrendingUp, MapPin } from "lucide-react";

export const UserResearch = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              User <span className="text-primary">Research</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep insights into user behavior, pain points, and music discovery patterns
            </p>
          </div>

          {/* Research Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border text-center">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">User Interviews</h3>
              <p className="text-sm text-muted-foreground">15 in-depth interviews with diverse Spotify users</p>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Usage Analytics</h3>
              <p className="text-sm text-muted-foreground">Analysis of 50K+ user sessions and discovery patterns</p>
            </Card>

            <Card className="p-6 bg-card border-border text-center">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Surveys</h3>
              <p className="text-sm text-muted-foreground">500+ responses on music discovery habits and pain points</p>
            </Card>
          </div>

          {/* User Personas */}
          <Card className="p-8 md:p-12 mb-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-8 text-foreground">User Personas</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Persona 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Persona 1</Badge>
                  <h4 className="text-xl font-bold text-foreground">The Casual Explorer</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground min-w-[80px]">Profile:</div>
                    <div className="text-muted-foreground">Free tier user, 25-35 years old, listens 1-2 hours daily during commutes and work</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground min-w-[80px]">Goals:</div>
                    <div className="text-muted-foreground">Find background music quickly without thinking too hard; discover new artists occasionally</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground min-w-[80px]">Pain Points:</div>
                    <div className="text-muted-foreground">
                      <ul className="space-y-1">
                        <li>• Overwhelmed by too many playlist options</li>
                        <li>• Spends 10+ minutes finding the "right vibe"</li>
                        <li>• Ends up playing the same favorites repeatedly</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground min-w-[80px]">Quote:</div>
                    <div className="text-muted-foreground italic">"I just want something that matches my mood right now, but I don't have time to search."</div>
                  </div>
                </div>
              </div>

              {/* Persona 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Persona 2</Badge>
                  <h4 className="text-xl font-bold text-foreground">The Mood-Driven Curator</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground min-w-[80px]">Profile:</div>
                    <div className="text-muted-foreground">Premium subscriber, 20-40 years old, listens 3-5 hours daily, creates custom playlists</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground min-w-[80px]">Goals:</div>
                    <div className="text-muted-foreground">Perfect soundtrack for every moment; wants deep personalization and emotional resonance</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground min-w-[80px]">Pain Points:</div>
                    <div className="text-muted-foreground">
                      <ul className="space-y-1">
                        <li>• Manual playlist curation takes too much time</li>
                        <li>• Discover Weekly misses emotional context</li>
                        <li>• Wants AI that "gets" their feelings</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground min-w-[80px]">Quote:</div>
                    <div className="text-muted-foreground italic">"I love discovering music, but I wish Spotify understood how I'm feeling, not just what I've listened to."</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Pain Points */}
          <Card className="p-8 md:p-12 mb-8 bg-gradient-to-br from-card to-secondary/20 border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Uncovered Pain Points</h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="text-destructive border-destructive">Critical</Badge>
                  Music Discovery Fatigue
                </h4>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">73% of surveyed users</strong> reported feeling overwhelmed by choice and spending significant time browsing without finding satisfying music.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "I end up scrolling through playlists for 15 minutes and just give up and play my liked songs again."
                </p>
              </div>

              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="text-primary border-primary">High Priority</Badge>
                  Emotional Context Missing
                </h4>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">68% of users</strong> said existing recommendations don't account for their current emotional state, leading to mismatched suggestions.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Discover Weekly is great, but sometimes I'm sad and it gives me upbeat songs."
                </p>
              </div>

              <div className="p-6 rounded-lg bg-background/50 border border-border/50">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="text-primary border-primary">Medium Priority</Badge>
                  Repetitive Listening Patterns
                </h4>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">81% of users</strong> admitted they frequently fall back to the same playlists or albums because discovery feels like too much work.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "I know I'm missing out on great music, but it's easier to just replay what I know I like."
                </p>
              </div>
            </div>
          </Card>

          {/* User Journey Map */}
          <Card className="p-8 md:p-12 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Current User Journey (Without Mood Mix)</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Opens Spotify</h4>
                  <p className="text-sm text-muted-foreground">User has a specific mood or activity in mind (e.g., "I want something energetic for my workout")</p>
                  <Badge variant="outline" className="mt-2 text-xs">Emotional State: Motivated</Badge>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Browses Options</h4>
                  <p className="text-sm text-muted-foreground">Scrolls through homepage, explores playlists, checks Discover Weekly, searches keywords</p>
                  <Badge variant="outline" className="mt-2 text-xs text-yellow-600 border-yellow-600">Time Spent: 5-15 min</Badge>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 text-destructive font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Experiences Friction</h4>
                  <p className="text-sm text-muted-foreground">None of the recommendations feel quite right; starts second-guessing choices; feels decision paralysis</p>
                  <Badge variant="outline" className="mt-2 text-xs text-destructive border-destructive">Emotional State: Frustrated</Badge>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Settles or Gives Up</h4>
                  <p className="text-sm text-muted-foreground">Either picks a "good enough" playlist that's not perfect, or returns to familiar favorites they've heard many times</p>
                  <Badge variant="outline" className="mt-2 text-xs">Outcome: Suboptimal experience</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};