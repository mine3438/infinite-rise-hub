import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  category: string;
}

export function BlogCard({ title, excerpt, date, slug, image, category }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="group block">
      <article className="card-hover bg-card border border-border rounded-xl overflow-hidden">
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
              {category}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {date}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {excerpt}
          </p>

          {/* Read More */}
          <span className="inline-flex items-center text-sm font-medium text-primary">
            Read More
            <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
