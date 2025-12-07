import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Link2, Cpu, Code, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Deploy intelligent systems that transform data into actionable insights, automate processes, and drive innovation across your organization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
  },
  {
    icon: Link2,
    title: "Blockchain Solutions",
    description: "Build secure, transparent, and decentralized applications with enterprise-grade blockchain infrastructure and smart contracts.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
  },
  {
    icon: Cpu,
    title: "IoT Development",
    description: "Connect devices, collect data, and create intelligent ecosystems with our end-to-end IoT solutions and real-time analytics.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements and scale with growth.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-background" data-testid="section-services-overview">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            data-testid="text-services-title"
          >
            Our Core Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We specialize in emerging technologies that transform how businesses operate,
            compete, and deliver value to their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border bg-card hover-elevate"
              data-testid={`card-service-${index}`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 h-48 lg:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="lg:w-3/5 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3
                        className="text-xl font-semibold text-foreground"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link href="/services">
                      <Button variant="ghost" size="sm" className="w-fit p-0 h-auto text-primary">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" data-testid="button-view-all-services">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
