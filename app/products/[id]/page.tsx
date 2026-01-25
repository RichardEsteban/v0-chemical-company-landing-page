import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductImageCarousel } from "@/components/product-image-carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProductById, products } from "@/lib/products-data"
import {
  Check,
  MessageCircle,
  ArrowLeft,
  Sparkles,
  Zap,
  Factory,
  Layers,
  Droplets,
  Shield,
  Award,
} from "lucide-react"

const characteristicIcons: Record<string, React.ElementType> = {
  "High Purity": Sparkles,
  "Ultra Pure": Sparkles,
  "Fast Drying": Zap,
  "Fast Evaporating": Zap,
  "Fast Evaporation": Zap,
  "Fast Acting": Zap,
  "Industrial Use": Factory,
  "Professional Grade": Factory,
  "Lab Grade": Factory,
  "Compatibility": Layers,
  "Compatible": Layers,
  "Solvent Power": Droplets,
  "High Power": Droplets,
  "No Residue": Shield,
  "Low Residue": Shield,
  "Residue-free": Shield,
  "Eco-Friendly": Shield,
  "Safe": Shield,
  "Safe Storage": Shield,
  "Concentrated": Layers,
  "Versatile": Layers,
  "Low Odor": Shield,
  "UV Protection": Shield,
  "Excellent Flow": Droplets,
  "Refined": Sparkles,
  "Economical": Award,
  "Medical Grade": Award,
  "Disinfectant": Shield,
  "Quality Assured": Award,
  "Consistent": Award,
  "Quality Certified": Award,
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: "Product Not Found - Quimpro",
    }
  }

  return {
    title: `${product.name} - Quimpro Chemical Solvents`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Image Carousel */}
              <div>
                <ProductImageCarousel
                  images={product.images}
                  productName={product.name}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Presentations */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Available Presentations</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.presentations.map((presentation) => (
                      <Badge
                        key={presentation}
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium"
                      >
                        {presentation}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  <a
                    href={`https://wa.me/1234567890?text=Hello, I'm interested in ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact via WhatsApp
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/#products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Applications - YouTube Video Section */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-3">
                Main Applications
              </h2>
              <p className="text-muted-foreground">
                Discover how to use {product.name} in different industrial applications
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${product.youtubeVideoId}`}
                  title={`${product.name} Applications`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="bg-amber-500 text-amber-950 px-4 py-3 text-sm">
                <strong>Note:</strong> Replace the URL of this video with the real one of your product. You can upload it to YouTube and paste the embed link here.
              </div>
            </div>
          </div>
        </section>

        {/* Complete Characteristics */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-3">
                Complete Characteristics
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.characteristics.map((characteristic, index) => {
                const IconComponent = characteristicIcons[characteristic.title] || Sparkles
                const colors = [
                  "text-primary",
                  "text-orange-500",
                  "text-secondary",
                  "text-blue-500",
                  "text-amber-500",
                  "text-cyan-500",
                ]
                const color = colors[index % colors.length]

                return (
                  <div
                    key={characteristic.title}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className={`flex-shrink-0 ${color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${color} mb-1`}>
                        {characteristic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {characteristic.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Product Description
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Interested in {product.name}?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today to get a quote or learn more about our products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <a
                  href={`https://wa.me/1234567890?text=Hello, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
