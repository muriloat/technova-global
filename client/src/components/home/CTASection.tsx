import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      data-testid="section-cta"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            data-testid="text-cta-title"
          >
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Let's discuss how our expertise in AI, Blockchain, and IoT can help you achieve
            your strategic objectives. Schedule a consultation with our solutions architects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-schedule-consultation">
                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              data-testid="button-call-us"
            >
              <Phone className="w-4 h-4 mr-2" /> Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
