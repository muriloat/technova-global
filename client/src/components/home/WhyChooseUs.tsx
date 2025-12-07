import { Shield, Zap, Users, Globe, Award, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption and continuous monitoring.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Agile methodologies and proven frameworks accelerate time-to-market by up to 40%.",
  },
  {
    icon: Users,
    title: "Expert Teams",
    description: "Senior engineers with 10+ years average experience in emerging technologies.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "24/7 operations across 5 continents with local expertise and cultural understanding.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "500+ successful projects with Fortune 500 clients and growing startups alike.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Round-the-clock technical support with guaranteed response times and escalation paths.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background" data-testid="section-why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              data-testid="text-why-title"
            >
              Why Leading Enterprises Choose TechNova
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We combine deep technical expertise with strategic business acumen to deliver
              solutions that drive measurable outcomes. Our commitment to excellence has
              earned the trust of industry leaders worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4"
                  data-testid={`benefit-${index}`}
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                alt="Team collaboration"
                className="w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
                alt="Modern office"
                className="w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80"
                alt="Technology workspace"
                className="w-full h-48 object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                alt="Team meeting"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
