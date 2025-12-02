import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Logo with pulse animation */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <img
            src={logo}
            alt="Infinite Rise Studios"
            className="h-20 w-auto object-contain relative z-10 animate-pulse"
          />
        </div>
        
        {/* Spinner ring */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
        </div>
        
        {/* Loading text */}
        <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
