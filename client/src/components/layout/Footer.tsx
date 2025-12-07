import { Link } from "wouter";
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { companyInfo, contactInfo, socialLinks } from "@/lib/siteConfig";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/about" },
    { label: "Partners", href: "/about" },
  ],
  services: [
    { label: "AI Solutions", href: "/services" },
    { label: "Blockchain", href: "/services" },
    { label: "IoT Development", href: "/services" },
    { label: "Custom Software", href: "/services" },
  ],
  industries: [
    { label: "Financial Services", href: "/industries" },
    { label: "Healthcare", href: "/industries" },
    { label: "Manufacturing", href: "/industries" },
    { label: "Retail & Commerce", href: "/industries" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6" data-testid="link-footer-logo">
              <Globe className="w-8 h-8 text-primary" />
              <span className="font-semibold text-lg tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {companyInfo.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              {companyInfo.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.linkedin}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.twitter}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
                data-testid="link-social-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                data-testid="link-social-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.addresses[0].street}<br />{contactInfo.addresses[0].city}, {contactInfo.addresses[0].state} {contactInfo.addresses[0].zip}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
