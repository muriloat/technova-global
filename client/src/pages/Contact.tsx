import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { 
  Mail, Phone, MapPin, Clock, Send, 
  Globe, Linkedin, Twitter, Upload 
} from "lucide-react";
import { SiGithub } from "react-icons/si";

const serviceOptions = [
  "AI & Machine Learning",
  "Blockchain Solutions",
  "IoT Development",
  "Custom Software Development",
  "Cybersecurity",
  "Cloud Infrastructure",
  "Data Engineering",
  "Digital Strategy Consulting",
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, Suite 400",
    region: "San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
  },
  {
    city: "London",
    address: "45 Finsbury Square",
    region: "London, EC2A 1HP, UK",
    phone: "+44 20 7123 4567",
  },
  {
    city: "Singapore",
    address: "1 Raffles Place, Tower 2",
    region: "Singapore 048616",
    phone: "+65 6123 4567",
  },
];

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll be in touch within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-contact">
      <Header />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Contact Us</Badge>
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                data-testid="text-contact-title"
              >
                Let's Build Something Extraordinary
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to transform your business with cutting-edge technology?
                Our team is here to help you navigate your digital journey.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background" data-testid="section-contact-form">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card className="border-border bg-card">
                  <CardContent className="p-8">
                    <h2
                      className="text-2xl font-bold mb-6 text-foreground"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Send Us a Message
                    </h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Smith"
                                    data-testid="input-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Work Email *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@company.com"
                                    data-testid="input-email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Company Name"
                                    data-testid="input-company"
                                    {...field}
                                    value={field.value || ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service Interest</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value || ""}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-service">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {serviceOptions.map((service) => (
                                      <SelectItem key={service} value={service}>
                                        {service}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                                  rows={6}
                                  data-testid="textarea-message"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="text-muted-foreground"
                            data-testid="button-attach-file"
                          >
                            <Upload className="w-4 h-4 mr-2" /> Attach Files
                          </Button>
                          <Button
                            type="submit"
                            disabled={contactMutation.isPending}
                            data-testid="button-submit"
                          >
                            {contactMutation.isPending ? (
                              "Sending..."
                            ) : (
                              <>
                                Send Message <Send className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3
                      className="text-lg font-semibold mb-4 text-foreground"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Quick Contact
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="mailto:contact@technova.global"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        data-testid="link-email"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="text-sm">contact@technova.global</span>
                      </a>
                      <a
                        href="tel:+15551234567"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        data-testid="link-phone"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="text-sm">+1 (555) 123-4567</span>
                      </a>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-sm">24/7 Global Support</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3
                      className="text-lg font-semibold mb-4 text-foreground"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Connect With Us
                    </h3>
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                        data-testid="link-linkedin"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Twitter"
                        data-testid="link-twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                        data-testid="link-github"
                      >
                        <SiGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3
                      className="text-lg font-semibold mb-4 text-foreground"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Response Time
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We typically respond to all inquiries within 24 hours during
                      business days. For urgent matters, please call our main line.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card" data-testid="section-offices">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Our Offices
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Visit us at one of our global locations or schedule a virtual meeting.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <Card key={office.city} className="border-border bg-background" data-testid={`office-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-5 h-5 text-primary" />
                      <h3
                        className="text-lg font-semibold text-foreground"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {office.city}
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>{office.address}</p>
                      <p>{office.region}</p>
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 hover:text-foreground transition-colors mt-3"
                        data-testid={`link-office-phone-${index}`}
                      >
                        <Phone className="w-4 h-4" />
                        {office.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
