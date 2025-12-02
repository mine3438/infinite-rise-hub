import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Infinite Rise Studios</title>
        <meta name="description" content="Read the terms and conditions for using Infinite Rise Studios website and services." />
        <link rel="canonical" href="https://infiniterisestudios.com/terms" />
      </Helmet>

      <Layout>
        <PageHeader title="Terms &" highlight="Conditions" />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-sm mb-8">Last updated: December 1, 2025</p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">
                By accessing and using the Infinite Rise Studios website, you accept and agree to be bound by these Terms 
                and Conditions. If you do not agree to these terms, please do not use our website.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">2. Use of Content</h2>
              <p className="text-muted-foreground mb-6">
                All content on this website, including text, graphics, logos, images, videos, and software, is the property 
                of Infinite Rise Studios and is protected by copyright laws. You may not reproduce, distribute, or create 
                derivative works without our express written permission.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">3. User Conduct</h2>
              <p className="text-muted-foreground mb-4">When using our website, you agree not to:</p>
              <ul className="text-muted-foreground mb-6 space-y-2 list-disc list-inside">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated means to access our content without permission</li>
                <li>Post or transmit harmful, offensive, or illegal content</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">4. Free Downloads</h2>
              <p className="text-muted-foreground mb-6">
                Our free wallpapers and resources are provided for personal, non-commercial use only. You may not sell, 
                redistribute, or claim ownership of any downloadable content from our website.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">5. Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                By subscribing to our newsletter, you consent to receive promotional emails from us. You can unsubscribe 
                at any time using the link provided in each email.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6">
                Infinite Rise Studios shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from your use of this website or any content provided herein.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify these terms at any time. Your continued use of the website after any changes 
                constitutes your acceptance of the new terms.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">8. Contact</h2>
              <p className="text-muted-foreground mb-6">
                For questions about these Terms and Conditions, contact us at:{" "}
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
