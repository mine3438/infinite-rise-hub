import { Link } from "react-router-dom";
import { Youtube, Instagram, Twitter, Facebook, Mail } from "lucide-react";

const socialLinks = [
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@infiniterisestudios" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/infiniterisestudios" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/infiniterise" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/infiniterisestudios" },
];

const footerLinks = {
  pages: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  resources: [
    { name: "Quote Library", path: "/quotes" },
    { name: "Free Wallpapers", path: "/wallpapers" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Disclaimer", path: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                <span className="text-primary font-display font-bold text-lg">IR</span>
              </div>
              <span className="font-display text-lg font-semibold text-foreground">
                Infinite Rise
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Inspiring millions to rise beyond their limitations and unlock their infinite potential.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-display text-foreground font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Infinite Rise Studios. All rights reserved.
          </p>
          <a
            href="mailto:hello@infiniterisestudios.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@infiniterisestudios.com
          </a>
        </div>
      </div>
    </footer>
  );
}
