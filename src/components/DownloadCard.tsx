import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadCardProps {
  title: string;
  image: string;
  category: string;
  downloads: string;
}

export function DownloadCard({ title, image, category, downloads }: DownloadCardProps) {
  return (
    <div className="group card-hover bg-card border border-border rounded-xl overflow-hidden">
      {/* Image */}
      <div className="aspect-[9/16] sm:aspect-[3/4] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button size="icon" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/20">
            <Eye className="w-4 h-4" />
          </Button>
          <Button size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-medium text-primary">{category}</span>
        <h3 className="font-display text-sm font-semibold text-foreground mt-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">{downloads} downloads</p>
      </div>
    </div>
  );
}
