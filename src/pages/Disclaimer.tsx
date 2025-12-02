import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Infinite Rise Studios</title>
        <meta name="description" content="Read the disclaimer for Infinite Rise Studios website and motivational content." />
        <link rel="canonical" href="https://infiniterisestudios.com/disclaimer" />
      </Helmet>

      <Layout>
        <PageHeader title="Disclaimer" />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-sm mb-8">Last updated: December 1, 2025</p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">General Information</h2>
              <p className="text-muted-foreground mb-6">
                The information provided on Infinite Rise Studios is for general informational and motivational purposes 
                only. All content is provided in good faith, and we make no representation or warranty of any kind, 
                express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any 
                information on the site.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Not Professional Advice</h2>
              <p className="text-muted-foreground mb-6">
                Our content is intended to motivate and inspire. It should not be construed as professional advice in 
                any field, including but not limited to medical, psychological, financial, or legal matters. Always 
                seek the advice of qualified professionals for specific guidance related to your situation.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">External Links</h2>
              <p className="text-muted-foreground mb-6">
                Our website may contain links to external websites that are not provided or maintained by us. We do 
                not guarantee the accuracy, relevance, timeliness, or completeness of any information on these 
                external websites.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Affiliate Disclaimer</h2>
              <p className="text-muted-foreground mb-6">
                Some links on our website may be affiliate links. This means if you click on the link and purchase 
                an item, we may receive an affiliate commission at no extra cost to you. All opinions remain our own.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">YouTube Content</h2>
              <p className="text-muted-foreground mb-6">
                Our YouTube channel features motivational speeches and content that may include licensed material 
                from various sources. All credit goes to the original creators and speakers. If you are a copyright 
                holder and have concerns, please contact us directly.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Results Disclaimer</h2>
              <p className="text-muted-foreground mb-6">
                Personal results will vary. The success stories and testimonials shared are individual experiences 
                and are not intended to represent or guarantee that anyone will achieve the same or similar results. 
                Your success depends on many factors, including your effort, dedication, and circumstances.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Disclaimer, please contact us at:{" "}
                <a href="mailto:legal@infiniterisestudios.com" className="text-primary hover:underline">
                  legal@infiniterisestudios.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
