import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Lightbulb, Users, Globe, Award, TrendingUp } from "lucide-react";

const leadership = [
  {
    name: "Alexandra Mitchell",
    role: "Chief Executive Officer",
    initials: "AM",
    bio: "Former McKinsey partner with 20+ years leading digital transformations for Fortune 100 companies.",
  },
  {
    name: "Dr. James Park",
    role: "Chief Technology Officer",
    initials: "JP",
    bio: "AI researcher from MIT with patents in machine learning and 15 years in enterprise technology.",
  },
  {
    name: "Maria Santos",
    role: "Chief Operations Officer",
    initials: "MS",
    bio: "Ex-Amazon VP who scaled global operations across 40+ countries and 5,000+ team members.",
  },
  {
    name: "David Chen",
    role: "Chief Innovation Officer",
    initials: "DC",
    bio: "Serial entrepreneur with 3 successful exits, pioneer in blockchain enterprise solutions.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in every solution we deliver, never compromising on quality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore emerging technologies to solve complex challenges in new ways.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with clients, becoming trusted advisors in their success.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We operate with openness and honesty in all our communications and deliverables.",
  },
];

const milestones = [
  { year: "2015", event: "Founded in San Francisco with a mission to democratize enterprise AI" },
  { year: "2017", event: "Opened European headquarters in London, expanded to 100+ employees" },
  { year: "2019", event: "Launched blockchain practice, completed first $10M enterprise contract" },
  { year: "2021", event: "Established Asia-Pacific presence in Singapore, reached 500+ employees" },
  { year: "2023", event: "Named Leader in Gartner Magic Quadrant for AI Services, IPO preparation" },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "150+", label: "Enterprise Clients" },
  { value: "800+", label: "Team Members" },
  { value: "5", label: "Global Offices" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-about">
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
              <Badge variant="secondary" className="mb-4">About TechNova Global</Badge>
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                data-testid="text-about-title"
              >
                Pioneering the Future of Enterprise Technology
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2015, we've been at the forefront of technological innovation,
                helping organizations worldwide harness the power of AI, Blockchain,
                and IoT to transform their operations and achieve unprecedented growth.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
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

        <section className="py-24 bg-background" data-testid="section-mission">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To empower enterprises with transformative technology solutions that drive
                  innovation, efficiency, and sustainable growth in an increasingly digital world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that every organization deserves access to cutting-edge technology.
                  Our mission is to bridge the gap between emerging innovations and practical
                  business applications, delivering solutions that create measurable value.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                  alt="Team strategy session"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80"
                  alt="Global operations"
                  className="w-full h-48 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card" data-testid="section-values">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide every decision, project, and relationship.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={value.title} className="border-border bg-background" data-testid={`value-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-lg font-semibold text-foreground mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background" data-testid="section-leadership">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Leadership Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Experienced executives driving our vision and delivering results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((leader, index) => (
                <Card key={leader.name} className="border-border bg-card" data-testid={`leader-${index}`}>
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                        {leader.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3
                      className="text-lg font-semibold text-foreground mb-1"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {leader.name}
                    </h3>
                    <p className="text-primary text-sm mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card" data-testid="section-timeline">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg">
                Key milestones in our growth story.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    data-testid={`milestone-${index}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                      <Badge variant="secondary" className="mb-2">{milestone.year}</Badge>
                      <p className="text-foreground leading-relaxed">{milestone.event}</p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 border-2 border-background" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background" data-testid="section-offices">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Global Presence
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Strategic locations enabling 24/7 global delivery and local expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["San Francisco", "London", "Singapore", "Dubai", "Tokyo"].map((city, index) => (
                <Card key={city} className="border-border bg-card" data-testid={`office-${index}`}>
                  <CardContent className="p-4 text-center">
                    <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-medium text-foreground text-sm">{city}</p>
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
