// Footer Component
// Generated: 2025-08-27T18:24:16.020Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Award
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Strategic Planning", href: "#services" },
        { name: "Business Transformation", href: "#services" },
        { name: "Operations Excellence", href: "#services" },
        { name: "Digital Strategy", href: "#services" },
        { name: "Change Management", href: "#services" },
        { name: "Performance Optimization", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Insights", href: "/insights" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Industry Reports", href: "/resources" },
        { name: "White Papers", href: "/resources" },
        { name: "Webinars", href: "/webinars" },
        { name: "Best Practices", href: "/resources" },
        { name: "Client Portal", href: "/portal" },
        { name: "Knowledge Base", href: "/knowledge" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Confidentiality", href: "/confidentiality" },
        { name: "Compliance", href: "/compliance" },
        { name: "Data Security", href: "/security" },
        { name: "Professional Standards", href: "/standards" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/apex-strategic" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/apexstrategic" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/apexstrategic" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/apexstrategic" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-background font-bold">A</span>
                </div>
                <span className="font-bold text-xl text-background">Apex Strategic Solutions</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Transforming businesses through strategic excellence and innovative solutions. 
                Partner with industry leaders who deliver measurable results and sustainable growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">contact@apexstrategic.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">500 Executive Plaza, New York, NY 10022</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background">Strategic Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-secondary">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Receive exclusive industry insights and strategic updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/70 hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© 2024 Apex Strategic Solutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Excellence in <Award className="size-3 text-accent fill-current" /> consulting
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/70 mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/70 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/sitemap" className="text-xs text-background/60 hover:text-accent transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-background/60 hover:text-accent transition-colors">
              Accessibility
            </Link>
            <Link href="/ethics" className="text-xs text-background/60 hover:text-accent transition-colors">
              Code of Ethics
            </Link>
            <Link href="/support" className="text-xs text-background/60 hover:text-accent transition-colors">
              Client Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}