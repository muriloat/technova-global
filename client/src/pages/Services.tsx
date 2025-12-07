import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Brain, Link2, Cpu, Code, Shield, Cloud, 
  Database, BarChart3, ArrowRight, CheckCircle2 
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Transform your business with intelligent automation, predictive analytics, and natural language processing solutions that learn and improve over time.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    features: [
      "Custom ML model development",
      "Computer vision systems",
      "NLP & chatbot solutions",
      "Predictive analytics platforms",
      "AI strategy consulting",
    ],
  },
  {
    icon: Link2,
    title: "Blockchain Solutions",
    description: "Build trust and transparency with enterprise blockchain implementations, smart contracts, and decentralized applications tailored to your industry.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    features: [
      "Private blockchain networks",
      "Smart contract development",
      "DeFi platform creation",
      "Supply chain tracking",
      "Digital asset management",
    ],
  },
  {
    icon: Cpu,
    title: "IoT Development",
    description: "Connect, monitor, and optimize your physical assets with end-to-end IoT solutions that deliver real-time insights and automated responses.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    features: [
      "Sensor integration & edge computing",
      "Real-time data streaming",
      "Predictive maintenance systems",
      "Smart facility management",
      "Industrial IoT platforms",
    ],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored applications built with modern architectures, designed for scalability, security, and seamless integration with your existing systems.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    features: [
      "Enterprise web applications",
      "Mobile app development",
      "API design & integration",
      "Legacy system modernization",
      "Microservices architecture",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security assessments, threat detection, and incident response services built for the modern threat landscape.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    features: [
      "Security audits & penetration testing",
      "Zero-trust architecture",
      "SOC-as-a-Service",
      "Compliance management",
      "Incident response planning",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Design, migrate, and optimize cloud environments across AWS, Azure, and GCP with focus on performance, cost efficiency, and resilience.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    features: [
      "Cloud migration strategies",
      "Multi-cloud architecture",
      "DevOps & CI/CD pipelines",
      "Kubernetes orchestration",
      "Cost optimization",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and analytics platforms that transform raw data into actionable intelligence for data-driven decision making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: [
      "Data lake architecture",
      "ETL pipeline development",
      "Real-time analytics",
      "Business intelligence",
      "Data governance frameworks",
    ],
  },
  {
    icon: BarChart3,
    title: "Digital Strategy Consulting",
    description: "Align technology investments with business objectives through comprehensive assessments, roadmaps, and change management programs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "Technology assessment",
      "Digital transformation roadmaps",
      "Vendor selection",
      "Change management",
      "ROI analysis",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-services">
      <Header />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Our Services</Badge>
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                data-testid="text-services-title"
              >
                Comprehensive Technology Solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From strategy to implementation, we deliver end-to-end technology services
                that transform how enterprises operate, compete, and create value.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background" data-testid="section-services-list">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="overflow-hidden border-border bg-card"
                  data-testid={`service-detail-${index}`}
                >
                  <CardContent className="p-0">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h2
                            className="text-2xl font-bold text-foreground"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact">
                          <Button className="w-fit">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Our Delivery Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A proven methodology that ensures successful outcomes at every stage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discover", desc: "Deep-dive into your business challenges and objectives" },
                { step: "02", title: "Design", desc: "Architect solutions aligned with your strategic goals" },
                { step: "03", title: "Develop", desc: "Build with agile sprints and continuous feedback" },
                { step: "04", title: "Deliver", desc: "Deploy, monitor, and optimize for lasting success" },
              ].map((phase, index) => (
                <Card key={phase.step} className="border-border bg-background" data-testid={`phase-${index}`}>
                  <CardContent className="p-6 text-center">
                    <span
                      className="text-4xl font-bold text-primary/30 mb-4 block"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {phase.step}
                    </span>
                    <h3
                      className="text-xl font-semibold text-foreground mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{phase.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background" data-testid="section-services-cta">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss which services best fit your business objectives and
              create a tailored roadmap for your digital transformation.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-request-consultation">
                Request a Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
