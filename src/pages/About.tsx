import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Target, Heart, Zap, Award, Users, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Purpose-Driven", description: "Every piece of content we create has one goal: to help you become the best version of yourself." },
  { icon: Heart, title: "Authenticity", description: "We share real stories, real struggles, and real transformations. No fake motivation here." },
  { icon: Zap, title: "Impact", description: "We measure success by the lives we change, not the views we get." },
  { icon: Award, title: "Excellence", description: "We strive for the highest quality in everything we produce." },
];

const stats = [
  { value: "500K+", label: "YouTube Subscribers" },
  { value: "10M+", label: "Total Views" },
  { value: "1000+", label: "Videos Created" },
  { value: "150+", label: "Countries Reached" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Infinite Rise Studios | Our Mission & Story</title>
        <meta name="description" content="Learn about Infinite Rise Studios' mission to inspire millions to rise beyond their limitations through powerful motivational content." />
        <link rel="canonical" href="https://infiniterisestudios.com/about" />
      </Helmet>

      <Layout>
        <PageHeader
          title="About"
          highlight="Infinite Rise"
          description="The story behind the movement that's inspiring millions worldwide."
        />

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-muted-foreground mb-6">
                  Infinite Rise Studios was born from a simple belief: that everyone has untapped potential 
                  waiting to be unleashed. What started as a small YouTube channel sharing motivational 
                  speeches has grown into a global movement inspiring millions across the world.
                </p>
                <p className="text-muted-foreground mb-6">
                  We understand that life can be challenging. The obstacles, the doubts, the moments when 
                  giving up seems easier than pushing forward — we've been there. That's why we create 
                  content that meets you where you are and lifts you to where you need to be.
                </p>
                <p className="text-muted-foreground">
                  Our team is dedicated to curating and creating the most powerful motivational content 
                  on the internet. From speeches by legendary thinkers to original productions designed 
                  to ignite your inner fire, every video, article, and resource is crafted with one 
                  purpose: to help you rise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient-gold">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These principles guide everything we do at Infinite Rise Studios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4 p-6 bg-card border border-border rounded-xl card-hover">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-foreground font-display leading-relaxed">
                "To inspire one billion people to rise beyond their limitations, unlock their infinite 
                potential, and create lives of purpose, passion, and impact."
              </p>
            </div>
          </div>
        </section>

        <NewsletterForm />
      </Layout>
    </>
  );
}
