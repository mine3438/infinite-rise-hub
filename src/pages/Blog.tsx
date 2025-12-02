import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterForm } from "@/components/NewsletterForm";

const blogPosts = [
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
  {
    title: "The Art of Goal Setting: Dreams to Reality",
    excerpt: "Transform your dreams into achievable goals with this comprehensive guide to effective goal setting and planning.",
    date: "Nov 22, 2025",
    slug: "art-of-goal-setting",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    category: "Success",
  },
  {
    title: "Building Mental Resilience in Tough Times",
    excerpt: "Life will test you. Here's how to build the mental toughness you need to weather any storm and come out stronger.",
    date: "Nov 18, 2025",
    slug: "building-mental-resilience",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&auto=format&fit=crop",
    category: "Resilience",
  },
  {
    title: "The Compound Effect: How Small Actions Lead to Massive Change",
    excerpt: "Understanding the compound effect and how to harness its power to create extraordinary results in every area of life.",
    date: "Nov 15, 2025",
    slug: "compound-effect",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop",
    category: "Growth",
  },
];

const categories = ["All", "Mindset", "Habits", "Personal Growth", "Success", "Resilience"];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Infinite Rise Studios - Motivation & Personal Growth Articles</title>
        <meta name="description" content="Read inspiring articles on motivation, mindset, personal growth, and success strategies from Infinite Rise Studios." />
        <link rel="canonical" href="https://infiniterisestudios.com/blog" />
      </Helmet>

      <Layout>
        <PageHeader
          title="The"
          highlight="Blog"
          description="Deep dives into mindset, success principles, and practical strategies for personal growth."
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

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>

        <NewsletterForm />
      </Layout>
    </>
  );
}
