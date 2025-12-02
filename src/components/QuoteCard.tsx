import { Quote } from "lucide-react";

interface QuoteCardProps {
  quote: string;
  author: string;
  className?: string;
}

export function QuoteCard({ quote, author, className = "" }: QuoteCardProps) {
  return (
    <div className={`group card-hover bg-card border border-border rounded-xl p-6 md:p-8 ${className}`}>
      <Quote className="w-8 h-8 text-primary/50 mb-4 group-hover:text-primary transition-colors" />
      <blockquote className="font-display text-lg md:text-xl text-foreground mb-4 leading-relaxed">
        "{quote}"
      </blockquote>
      <cite className="text-sm text-muted-foreground not-italic">— {author}</cite>
    </div>
  );
}
