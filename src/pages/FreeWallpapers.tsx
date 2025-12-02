import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { DownloadCard } from "@/components/DownloadCard";
import { NewsletterForm } from "@/components/NewsletterForm";

const wallpapers = [
  { title: "Rise & Grind", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop", category: "Motivation", downloads: "12.5K" },
  { title: "Limitless Mind", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop", category: "Mindset", downloads: "8.2K" },
  { title: "Golden Hour", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop", category: "Nature", downloads: "6.8K" },
  { title: "Peak Performance", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop", category: "Success", downloads: "5.4K" },
  { title: "Dream Big", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&auto=format&fit=crop", category: "Dreams", downloads: "9.1K" },
  { title: "Never Give Up", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop", category: "Perseverance", downloads: "7.3K" },
  { title: "Focus Mode", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop", category: "Productivity", downloads: "4.9K" },
  { title: "Inner Strength", image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&auto=format&fit=crop", category: "Strength", downloads: "6.2K" },
  { title: "Sunrise Hustle", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop", category: "Morning", downloads: "8.7K" },
  { title: "Calm Mind", image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&auto=format&fit=crop", category: "Peace", downloads: "5.8K" },
  { title: "Champion Mindset", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop", category: "Victory", downloads: "7.9K" },
  { title: "Path to Greatness", image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=600&auto=format&fit=crop", category: "Journey", downloads: "4.5K" },
];

const categories = ["All", "Motivation", "Mindset", "Nature", "Success", "Dreams"];

export default function FreeWallpapers() {
  return (
    <>
      <Helmet>
        <title>Free Motivational Wallpapers | Infinite Rise Studios Downloads</title>
        <meta name="description" content="Download free high-quality motivational wallpapers for your phone and desktop. Stay inspired with Infinite Rise Studios." />
        <link rel="canonical" href="https://infiniterisestudios.com/wallpapers" />
      </Helmet>

      <Layout>
        <PageHeader
          title="Free"
          highlight="Wallpapers"
          description="Download stunning motivational wallpapers to keep you inspired every time you look at your screen."
        />

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Wallpapers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {wallpapers.map((wallpaper, index) => (
                <DownloadCard key={index} {...wallpaper} />
              ))}
            </div>
          </div>
        </section>

        <NewsletterForm />
      </Layout>
    </>
  );
}
