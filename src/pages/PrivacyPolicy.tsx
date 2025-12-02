import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Infinite Rise Studios</title>
        <meta name="description" content="Learn how Infinite Rise Studios collects, uses, and protects your personal information." />
        <link rel="canonical" href="https://infiniterisestudios.com/privacy" />
      </Helmet>

      <Layout>
        <PageHeader title="Privacy" highlight="Policy" />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-sm mb-8">Last updated: December 1, 2025</p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-6">
                Infinite Rise Studios ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect information about you in various ways:</p>
              <ul className="text-muted-foreground mb-6 space-y-2 list-disc list-inside">
                <li>Personal Data: Name, email address when you subscribe to our newsletter</li>
                <li>Usage Data: Browser type, IP address, pages visited, time spent on pages</li>
                <li>Cookies: We use cookies to enhance your experience on our site</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="text-muted-foreground mb-6 space-y-2 list-disc list-inside">
                <li>Send you our newsletter and promotional materials</li>
                <li>Improve our website and content</li>
                <li>Analyze usage patterns and trends</li>
                <li>Respond to your inquiries and support needs</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">4. Third-Party Services</h2>
              <p className="text-muted-foreground mb-6">
                We may use third-party services such as Google Analytics to help us understand how visitors use our site. 
                These services may collect information sent by your browser as part of a web page request.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">5. Advertising</h2>
              <p className="text-muted-foreground mb-6">
                We may display advertisements on our website through third-party advertising networks, including Google AdSense. 
                These networks may use cookies to serve ads based on your prior visits to our website or other websites.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-6">
                You have the right to access, correct, or delete your personal information. You can unsubscribe from our 
                newsletter at any time by clicking the unsubscribe link in any email we send.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@infiniterisestudios.com" className="text-primary hover:underline">
                  privacy@infiniterisestudios.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
