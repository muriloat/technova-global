/**
 * ============================================================
 * SITE CONFIGURATION
 * ============================================================
 * 
 * This file contains all the configurable content for the website.
 * Edit the values below to customize:
 * - Company information
 * - Navigation links
 * - Hero carousel images and content
 * - Services offered
 * - Industry expertise
 * - Team members
 * - Partner companies
 * - Testimonials
 * - Contact information
 * - Social media links
 * 
 * ============================================================
 */

// ============================================================
// COMPANY INFORMATION
// ============================================================
export const companyInfo = {
  name: "TechNova Global",
  tagline: "Transforming Ideas into Digital Reality",
  description: "We are a premier technology consulting firm specializing in AI, Blockchain, IoT, and custom software development solutions for enterprises worldwide.",
  foundedYear: 2015,
  employeeCount: "500+",
  clientCount: "200+",
  projectsCompleted: "1000+",
};

// ============================================================
// NAVIGATION LINKS
// ============================================================
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// ============================================================
// HERO CAROUSEL
// ============================================================
export const heroSlides = [
  {
    title: "Transform Your Business with AI",
    subtitle: "Harness the power of artificial intelligence and machine learning to drive innovation and efficiency across your organization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
    ctaText: "Explore AI Solutions",
    ctaLink: "/services",
  },
  {
    title: "Blockchain for Enterprise",
    subtitle: "Build trust and transparency with secure, decentralized solutions tailored for your industry's unique challenges.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    ctaText: "Discover Blockchain",
    ctaLink: "/services",
  },
  {
    title: "IoT & Smart Solutions",
    subtitle: "Connect, monitor, and optimize your operations with cutting-edge Internet of Things implementations.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2832&auto=format&fit=crop",
    ctaText: "Learn About IoT",
    ctaLink: "/services",
  },
  {
    title: "Custom Development",
    subtitle: "From concept to deployment, we build scalable software solutions that drive your business forward.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2832&auto=format&fit=crop",
    ctaText: "Start Your Project",
    ctaLink: "/contact",
  },
];

// ============================================================
// SERVICES
// ============================================================
export const services = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDescription: "Transform data into actionable insights with intelligent automation.",
    fullDescription: "Our AI and Machine Learning services help organizations harness the power of data to make smarter decisions, automate processes, and create innovative products and services.",
    icon: "Brain",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Automated Decision Making",
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain Solutions",
    shortDescription: "Build trust and transparency with decentralized technologies.",
    fullDescription: "We design and implement blockchain solutions that enhance security, streamline operations, and create new business opportunities through smart contracts and distributed ledger technology.",
    icon: "Link",
    features: [
      "Smart Contract Development",
      "DeFi Solutions",
      "Supply Chain Tracking",
      "Digital Identity Management",
      "Tokenization Services",
    ],
  },
  {
    id: "iot",
    title: "IoT & Connected Devices",
    shortDescription: "Connect and optimize your physical and digital worlds.",
    fullDescription: "Our IoT solutions enable real-time monitoring, predictive maintenance, and operational optimization across manufacturing, logistics, healthcare, and smart city applications.",
    icon: "Cpu",
    features: [
      "Sensor Integration",
      "Real-time Monitoring",
      "Predictive Maintenance",
      "Edge Computing",
      "Industrial IoT",
    ],
  },
  {
    id: "custom-dev",
    title: "Custom Development",
    shortDescription: "Tailored software solutions for your unique business needs.",
    fullDescription: "From web and mobile applications to enterprise systems, we build custom software that scales with your business and delivers measurable results.",
    icon: "Code",
    features: [
      "Web Applications",
      "Mobile Apps",
      "Enterprise Software",
      "API Development",
      "Legacy Modernization",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    shortDescription: "Scalable, secure cloud solutions for modern enterprises.",
    fullDescription: "We help organizations migrate to the cloud, optimize their infrastructure, and implement DevOps practices for faster, more reliable software delivery.",
    icon: "Cloud",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "DevOps Automation",
      "Multi-cloud Strategy",
      "Cost Optimization",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortDescription: "Protect your assets with comprehensive security solutions.",
    fullDescription: "Our cybersecurity experts help organizations identify vulnerabilities, implement robust security measures, and respond to threats effectively.",
    icon: "Shield",
    features: [
      "Security Assessments",
      "Penetration Testing",
      "Compliance Management",
      "Incident Response",
      "Security Training",
    ],
  },
];

// ============================================================
// INDUSTRIES
// ============================================================
export const industries = [
  {
    id: "financial",
    name: "Financial Services",
    description: "Digital transformation solutions for banks, insurance, and fintech companies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Innovative technology solutions for hospitals, clinics, and health tech startups.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Smart factory and Industry 4.0 solutions for modern manufacturing.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description: "Omnichannel solutions and customer experience optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2832&auto=format&fit=crop",
  },
];

// ============================================================
// TEAM / LEADERSHIP
// ============================================================
export const leadership = [
  {
    name: "Sarah Chen",
    title: "Chief Executive Officer",
    bio: "20+ years of experience in technology leadership, previously at Microsoft and Google.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Michael Torres",
    title: "Chief Technology Officer",
    bio: "Former VP of Engineering at a Fortune 500 tech company, AI and blockchain expert.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Emily Johnson",
    title: "Chief Operations Officer",
    bio: "Specializes in scaling technology organizations and operational excellence.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "David Kim",
    title: "VP of Client Solutions",
    bio: "Expert in enterprise digital transformation with 15+ years of consulting experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================
export const testimonials = [
  {
    quote: "TechNova transformed our data analytics capabilities. Their AI solutions helped us increase operational efficiency by 40%.",
    author: "James Wilson",
    role: "CTO, Global Manufacturing Corp",
    company: "Global Manufacturing Corp",
  },
  {
    quote: "The blockchain solution they implemented has revolutionized our supply chain transparency. Outstanding work!",
    author: "Maria Garcia",
    role: "VP of Operations, Retail Giant Inc",
    company: "Retail Giant Inc",
  },
  {
    quote: "Their team's expertise in IoT helped us build a smart factory that reduced downtime by 60%. Highly recommended.",
    author: "Robert Chang",
    role: "Director of Innovation, TechManufacture",
    company: "TechManufacture",
  },
];

// ============================================================
// PARTNER COMPANIES
// To add/remove partners, edit this array.
// Available icons from react-icons/si:
// SiGoogle, SiAmazon, SiOracle, SiSalesforce, SiSap, SiCisco, 
// SiDell, SiIntel, SiNvidia, SiVmware, SiRedhat, SiSlack, etc.
// ============================================================
export const partners = [
  { name: "Google Cloud", iconName: "SiGoogle", color: "#4285F4" },
  { name: "Amazon AWS", iconName: "SiAmazon", color: "#FF9900" },
  { name: "Red Hat", iconName: "SiRedhat", color: "#EE0000" },
  { name: "Oracle", iconName: "SiOracle", color: "#F80000" },
  { name: "Salesforce", iconName: "SiSalesforce", color: "#00A1E0" },
  { name: "SAP", iconName: "SiSap", color: "#0FAAFF" },
  { name: "Cisco", iconName: "SiCisco", color: "#1BA0D7" },
  { name: "Dell", iconName: "SiDell", color: "#007DB8" },
  { name: "Intel", iconName: "SiIntel", color: "#0071C5" },
  { name: "NVIDIA", iconName: "SiNvidia", color: "#76B900" },
  { name: "VMware", iconName: "SiVmware", color: "#607078" },
  { name: "Slack", iconName: "SiSlack", color: "#4A154B" },
];

// ============================================================
// CONTACT INFORMATION
// ============================================================
export const contactInfo = {
  email: "info@technova.global",
  phone: "+1 (555) 123-4567",
  addresses: [
    {
      name: "Headquarters",
      street: "123 Innovation Drive",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States",
    },
    {
      name: "East Coast Office",
      street: "456 Tech Avenue",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    {
      name: "European Office",
      street: "789 Digital Lane",
      city: "London",
      state: "",
      zip: "EC1A 1BB",
      country: "United Kingdom",
    },
  ],
};

// ============================================================
// SOCIAL MEDIA LINKS
// ============================================================
export const socialLinks = {
  linkedin: "https://linkedin.com/company/technova-global",
  twitter: "https://twitter.com/technova",
  github: "https://github.com/technova",
  facebook: "https://facebook.com/technovaglobal",
};

// ============================================================
// COMPANY VALUES
// ============================================================
export const companyValues = [
  {
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions.",
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
  },
  {
    title: "Integrity",
    description: "We build trust through transparency and ethical practices.",
  },
  {
    title: "Collaboration",
    description: "We work as one team with our clients to achieve shared success.",
  },
];

// ============================================================
// SEO / META INFORMATION
// ============================================================
export const seoConfig = {
  defaultTitle: "TechNova Global - Enterprise Technology Consulting",
  titleTemplate: "%s | TechNova Global",
  description: "Premier technology consulting firm specializing in AI, Blockchain, IoT, and custom software development for enterprises worldwide.",
  keywords: [
    "technology consulting",
    "AI solutions",
    "blockchain development",
    "IoT implementation",
    "custom software",
    "digital transformation",
    "enterprise technology",
  ],
};
