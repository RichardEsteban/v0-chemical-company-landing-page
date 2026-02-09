import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Award } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit">
              <Shield className="h-4 w-4" />
              Certificación ISO 9001:2015
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Solventes químicos de alta calidad al mejor precio
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Fabricamos y distribuimos solventes químicos diseñados para garantizar seguridad, desempeño y resultados profesionales para los sectores industrial, automotriz y comercial.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base">
                <Link href="#contact">Contáctanos</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                <Link href="#products">Ver productos</Link>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Beaker className="h-5 w-5 text-primary" />
                <span>20+ productos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                <span>20+ años de experiencia</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl bg-muted p-8 shadow-xl">
              <Image
                src="/hero-image.jpg"
                alt="Solventes químicos de alta calidad"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
