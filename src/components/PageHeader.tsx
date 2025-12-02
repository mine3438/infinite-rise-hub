interface PageHeaderProps {
  title: string;
  description?: string;
  highlight?: string;
}

export function PageHeader({ title, description, highlight }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-card border-b border-border">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
        </h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
