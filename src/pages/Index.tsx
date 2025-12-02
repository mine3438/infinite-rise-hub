import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeader } from "@/components/SectionHeader";
import { QuoteCard } from "@/components/QuoteCard";
import { BlogCard } from "@/components/BlogCard";
import { DownloadCard } from "@/components/DownloadCard";
import { Youtube, Users, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredQuotes = [
  { quote: "The only limit to your impact is your imagination and commitment.", author: "Tony Robbins" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Your potential is endless. Go do what you were created to do.", author: "Infinite Rise Studios" },
];

const latestPosts = [
  {
    title: "10 Morning Habits That Will Transform Your Life",
    excerpt: "Start your day with purpose and watch how everything changes. These proven habits have helped millions achieve their dreams.",
    date: "Dec 1, 2025",
    slug: "morning-habits-transform-life",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    category: "Habits",
  },
  {
    title: "The Power of Consistency: Small Steps, Big Results",
    excerpt: "Discover why consistency beats intensity every time and how to build lasting habits that compound over time.",
    date: "Nov 28, 2025",
    slug: "power-of-consistency",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&auto=format&fit=crop",
    category: "Mindset",
  },
  {
    title: "Overcoming Fear: A Guide to Fearless Living",
    excerpt: "Fear is the greatest obstacle to success. Learn practical strategies to overcome fear and step into your greatness.",
    date: "Nov 25, 2025",
    slug: "overcoming-fear-guide",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&auto=format&fit=crop",
    category: "Personal Growth",
  },
];

const featuredDownloads = [
  { title: "Rise & Grind", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop", category: "Motivation", downloads: "12.5K" },
  { title: "Limitless Mind", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop", category: "Mindset", downloads: "8.2K" },
  { title: "Golden Hour", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop", category: "Nature", downloads: "6.8K" },
  { title: "Peak Performance", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop", category: "Success", downloads: "5.4K" },
];

const missionPoints = [
  { icon: Target, title: "Purpose", description: "Helping you discover and pursue your true calling" },
  { icon: Heart, title: "Passion", description: "Fueling your journey with unwavering motivation" },
  { icon: Users, title: "Community", description: "Building a tribe of high achievers worldwide" },
];

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Infinite Rise Studios | Motivation & Inspiration to Rise Beyond Limits</title>
        <meta name="description" content="Infinite Rise Studios inspires millions to rise beyond their limitations. Daily motivation, success mindset, and the tools to unlock your infinite potential." />
        <meta property="og:title" content="Infinite Rise Studios | Rise Beyond Your Limitations" />
        <meta property="og:description" content="Your daily source of motivation, inspiration, and mindset tools to unlock your infinite potential." />
        <link rel="canonical" href="https://infiniterisestudios.com" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <HeroSection />

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Mission"
              title="Inspiring Millions to"
              highlight="Rise Higher"
              description="At Infinite Rise Studios, we believe everyone has infinite potential within them. Our mission is to unlock that potential through powerful content that motivates, educates, and transforms lives."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {missionPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="text-center p-6 rounded-xl bg-card border border-border card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Quotes */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Daily Inspiration"
              title="Featured"
              highlight="Quotes"
              description="Words that have the power to change your life. Let these quotes fuel your journey."
              link={{ text: "View All Quotes", href: "/quotes" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredQuotes.map((quote, index) => (
                <QuoteCard key={index} quote={quote.quote} author={quote.author} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Latest Articles"
              title="From the"
              highlight="Blog"
              description="Deep dives into mindset, success principles, and practical strategies for personal growth."
              link={{ text: "Read All Articles", href: "/blog" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Free Downloads */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Free Resources"
              title="Motivational"
              highlight="Wallpapers"
              description="Download stunning wallpapers to keep you inspired every time you look at your screen."
              link={{ text: "View All Downloads", href: "/wallpapers" }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {featuredDownloads.map((download, index) => (
                <DownloadCard key={index} {...download} />
              ))}
            </div>
          </div>
        </section>

        {/* YouTube CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
                <Youtube className="w-10 h-10 text-destructive" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Watch on <span className="text-gradient-gold">YouTube</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join over 500,000 subscribers and get your daily dose of motivation. 
                New videos every week to fuel your journey to greatness.
              </p>
              <a
                href="https://youtube.com/@infiniterisestudios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-8 py-6 text-base font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  <Youtube className="mr-2 w-5 h-5" />
                  Subscribe Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterForm />
      </Layout>
    </>
  );
}
