import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Building2, Heart, Factory, ShoppingCart, 
  Plane, GraduationCap, Zap, Landmark,
  ArrowRight, CheckCircle2
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Transform banking, insurance, and investment operations with secure, compliant technology solutions that enhance customer experience and operational efficiency.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80",
    useCases: [
      "AI-powered fraud detection reducing false positives by 70%",
      "Blockchain-based trade settlement cutting processing time from days to minutes",
      "Robo-advisory platforms managing $2B+ in assets",
      "Real-time risk analytics for regulatory compliance",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description: "Improve patient outcomes and accelerate research with HIPAA-compliant solutions for diagnostics, patient engagement, and clinical operations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
    useCases: [
      "Medical imaging AI with 95%+ diagnostic accuracy",
      "Telemedicine platforms serving 1M+ patients",
      "Clinical trial management reducing enrollment time by 40%",
      "IoT patient monitoring preventing 30% of readmissions",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production, reduce downtime, and enhance quality with smart factory solutions that connect equipment, processes, and people.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    useCases: [
      "Predictive maintenance reducing unplanned downtime by 45%",
      "Computer vision quality inspection at 99.8% accuracy",
      "Digital twin simulations cutting prototyping costs by 60%",
      "Supply chain visibility across 500+ suppliers",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description: "Create seamless omnichannel experiences with AI-driven personalization, inventory optimization, and customer engagement platforms.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    useCases: [
      "Recommendation engines increasing conversions by 35%",
      "Demand forecasting improving inventory turns by 25%",
      "Unified commerce platforms processing $500M+ annually",
      "Computer vision checkout eliminating queue times",
    ],
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Elevate guest experiences and streamline operations with intelligent booking systems, personalized services, and operational analytics.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    useCases: [
      "Dynamic pricing optimization improving RevPAR by 18%",
      "AI concierge services handling 80% of guest inquiries",
      "Predictive fleet maintenance for airline partners",
      "Loyalty platforms with 50M+ active members",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description: "Transform learning experiences with adaptive platforms, virtual classrooms, and analytics that drive student success at scale.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    useCases: [
      "Adaptive learning platforms improving outcomes by 40%",
      "Virtual lab environments for STEM education",
      "AI tutoring systems supporting 2M+ students",
      "Credential verification on blockchain",
    ],
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Modernize grid operations, optimize asset performance, and accelerate the transition to sustainable energy with smart infrastructure solutions.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    useCases: [
      "Smart grid analytics reducing outages by 30%",
      "IoT sensor networks monitoring 100K+ assets",
      "AI-optimized renewable energy forecasting",
      "Blockchain-enabled peer-to-peer energy trading",
    ],
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description: "Deliver citizen-centric services, enhance transparency, and improve operational efficiency with secure, scalable public sector solutions.",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80",
    useCases: [
      "Digital identity platforms serving 10M+ citizens",
      "Fraud detection saving $100M+ in benefits",
      "Smart city IoT reducing traffic congestion by 25%",
      "Secure voting systems with blockchain audit trails",
    ],
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-industries">
      <Header />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Industries</Badge>
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                data-testid="text-industries-title"
              >
                Deep Expertise Across Sectors
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the unique challenges, regulations, and opportunities in your industry.
                Our solutions are tailored to deliver measurable impact in your specific context.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background" data-testid="section-industries-list">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={industry.title}
                  className="overflow-hidden border-border bg-card group hover-elevate"
                  data-testid={`industry-detail-${index}`}
                >
                  <CardContent className="p-0">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                          <industry.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2
                          className="text-xl font-bold text-foreground"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {industry.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {industry.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {industry.useCases.slice(0, 2).map((useCase, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/contact">
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                          See case studies <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card" data-testid="section-industry-stats">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Proven Impact Across Industries
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our solutions deliver measurable results that transform operations and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "40%", label: "Average efficiency gain" },
                { value: "$2.5B+", label: "Client revenue impact" },
                { value: "99.9%", label: "System uptime achieved" },
                { value: "150+", label: "Industry certifications" },
              ].map((stat, index) => (
                <div key={index} className="text-center" data-testid={`industry-stat-${index}`}>
                  <p
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background" data-testid="section-industries-cta">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Let's Discuss Your Industry Challenges
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our industry specialists are ready to share insights and explore how
              we can help you achieve your transformation goals.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-speak-specialist">
                Speak With a Specialist <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
