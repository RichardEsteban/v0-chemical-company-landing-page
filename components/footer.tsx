import Link from "next/link"
import { FlaskConical } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
  products: [
    { label: "Industrial Solvents", href: "#products" },
    { label: "Automotive Solvents", href: "#products" },
    { label: "Commercial Solvents", href: "#products" },
  ],
  support: [
    { label: "Technical Support", href: "#contact" },
    { label: "Safety Data Sheets", href: "#" },
    { label: "Quality Certifications", href: "#about" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <FlaskConical className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">QUIMPRO</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              Leading manufacturer and distributor of high-quality chemical solvents for industrial, automotive, and commercial applications.
            </p>
            <p className="mt-4 text-sm text-background/70">
              ISO 9001:2015 Certified
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-background/70">
              &copy; {new Date().getFullYear()} QUIMPRO. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
