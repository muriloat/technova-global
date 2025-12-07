import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Heart, Factory, ShoppingCart, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Secure trading platforms, fraud detection, and digital banking solutions.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&q=80",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Patient management systems, telemedicine, and medical AI diagnostics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Smart factory automation, predictive maintenance, and supply chain optimization.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Commerce",
    description: "E-commerce platforms, inventory AI, and personalized customer experiences.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-card" data-testid="section-industries">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            data-testid="text-industries-title"
          >
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep domain expertise across sectors that demand precision,
            security, and innovation at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={industry.title}
              className="group overflow-hidden border-border bg-background hover-elevate"
              data-testid={`card-industry-${index}`}
            >
              <CardContent className="p-0">
                <div className="h-40 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <industry.icon className="w-5 h-5 text-primary" />
                    <h3
                      className="text-lg font-semibold text-foreground"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/industries">
            <Button variant="outline" size="lg" data-testid="button-explore-industries">
              Explore All Industries <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
