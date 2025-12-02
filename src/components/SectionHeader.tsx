import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  link?: {
    text: string;
    href: string;
  };
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  link,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
          {badge}
        </span>
      )}
      <div className={`flex ${centered ? "flex-col items-center" : "items-end justify-between"} gap-4`}>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
          </h2>
          {description && (
            <p className={`text-muted-foreground mt-3 ${centered ? "max-w-2xl" : "max-w-xl"}`}>
              {description}
            </p>
          )}
        </div>
        {link && (
          <Link
            to={link.href}
            className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {link.text}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
}
