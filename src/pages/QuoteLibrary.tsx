import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { QuoteCard } from "@/components/QuoteCard";
import { NewsletterForm } from "@/components/NewsletterForm";

const quotes = [
  { quote: "The only limit to your impact is your imagination and commitment.", author: "Tony Robbins" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Your potential is endless. Go do what you were created to do.", author: "Infinite Rise Studios" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { quote: "The mind is everything. What you think you become.", author: "Buddha" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
];

const categories = ["All", "Success", "Mindset", "Leadership", "Perseverance", "Self-Belief"];

export default function QuoteLibrary() {
  return (
    <>
      <Helmet>
        <title>Quote Library | Infinite Rise Studios - Motivational Quotes</title>
        <meta name="description" content="Browse our collection of powerful motivational quotes to inspire your journey to greatness. Daily inspiration from Infinite Rise Studios." />
        <link rel="canonical" href="https://infiniterisestudios.com/quotes" />
      </Helmet>

      <Layout>
        <PageHeader
          title="Quote"
          highlight="Library"
          description="Words that have the power to change your life. Find your daily dose of inspiration."
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

        {/* Quotes Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quotes.map((quote, index) => (
                <QuoteCard key={index} quote={quote.quote} author={quote.author} />
              ))}
            </div>
          </div>
        </section>

        <NewsletterForm />
      </Layout>
    </>
  );
}
