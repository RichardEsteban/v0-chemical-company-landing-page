import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Beaker, ArrowRight } from "lucide-react"
import { products } from "@/lib/products-data"

const categoryColors: Record<string, string> = {
  Industrial: "bg-primary/10 text-primary",
  Automotive: "bg-secondary/10 text-secondary",
  Commercial: "bg-primary/10 text-primary",
}

export function Products() {
  return (
    <section id="products" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Beaker className="h-4 w-4" />
            Nuestros productos
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
            Solventes químicos de calidad
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Descubre nuestra línea completa de solventes químicos diseñados para cumplir con los más altos estándares de calidad y rendimiento.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="group transition-all hover:shadow-lg hover:border-primary/20 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge 
                    variant="secondary" 
                    className={`absolute top-3 right-3 ${categoryColors[product.category]}`}
                  >
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {product.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent">
                  <Link href={`/products/${product.id}`}>
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas una formulación especial u ordenar al por mayor?
          </p>
          <Button asChild size="lg">
            <Link href="#contact">Contacta a nuestro equipo comercial</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
