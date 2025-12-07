import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TechNova's AI solution transformed our underwriting process, reducing decision time by 60% while improving accuracy. Their team understood our regulatory requirements from day one.",
    author: "Sarah Chen",
    role: "CTO, GlobalFinance Corp",
    initials: "SC",
  },
  {
    quote: "The blockchain supply chain solution they delivered gave us unprecedented visibility across our global operations. Implementation was smooth and the ROI exceeded our projections.",
    author: "Marcus Johnson",
    role: "VP Operations, LogiTech Industries",
    initials: "MJ",
  },
  {
    quote: "Working with TechNova on our IoT platform was exceptional. Their expertise in edge computing and real-time analytics helped us achieve predictive maintenance goals 3 months early.",
    author: "Dr. Elena Rodriguez",
    role: "Director of Innovation, MedTech Solutions",
    initials: "ER",
  },
  {
    quote: "The custom ERP system TechNova built handles our complex multi-currency operations flawlessly. Their post-deployment support has been equally impressive.",
    author: "Thomas Weber",
    role: "CFO, European Trade Holdings",
    initials: "TW",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            data-testid="text-testimonials-title"
          >
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from executives who have partnered with us to drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border bg-background"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
