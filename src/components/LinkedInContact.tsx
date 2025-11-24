import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, X } from "lucide-react";

export const LinkedInContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-6 right-6 p-4 bg-card border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.3)] z-50 max-w-sm animate-fade-in">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Linkedin className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground mb-1">Let's Connect!</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Have questions about this case study? Reach out on LinkedIn.
          </p>
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            asChild
          >
            <a 
              href="https://www.linkedin.com/in/deesharaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              Connect with Deesha
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};
