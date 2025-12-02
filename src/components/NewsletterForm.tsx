import { useState } from "react";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setEmail("");
    toast({
      title: "Welcome to the Rise!",
      description: "You'll receive daily motivation in your inbox.",
    });
  };

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join the Rise — <span className="text-gradient-gold">Motivation Every Day</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get exclusive motivational quotes, success stories, and mindset tips delivered 
            straight to your inbox. No spam, just pure inspiration.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-muted border-border focus:border-primary"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold whitespace-nowrap"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Join 50,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
