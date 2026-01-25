import { Award, Clock, Package, ShieldCheck } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "20+",
    label: "Years of Experience",
    description: "Serving the industry since 2002",
  },
  {
    icon: Package,
    value: "20+",
    label: "Chemical Products",
    description: "Wide range of quality solvents",
  },
  {
    icon: ShieldCheck,
    value: "ISO 9001:2015",
    label: "Certified",
    description: "Quality Management System",
  },
]

export function About() {
  return (
    <section id="about" className="bg-muted/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary mb-6">
              <Award className="h-4 w-4" />
              About Us
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-balance">
              Our Experience Supports Us
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">QUIMPRO</strong> is a Peruvian chemical company with a strong market presence since 2002, specialized in the manufacturing, commercialization, and distribution of high-quality chemical solvents for industrial, automotive, and commercial sectors.
              </p>
              <p>
                We are recognized for our commitment to quality, safety, and continuous improvement. Our products are developed under strict quality standards to ensure reliability and optimal performance.
              </p>
              <p>
                We provide personalized service and specialized technical support, becoming a strategic partner for our clients&apos; projects.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-4 rounded-xl bg-background p-6 shadow-sm border border-border"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="font-medium text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
