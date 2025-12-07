import { 
  SiGoogle, 
  SiAmazon, 
  SiOracle, 
  SiSalesforce, 
  SiSap, 
  SiCisco, 
  SiDell, 
  SiIntel, 
  SiNvidia, 
  SiVmware,
  SiRedhat,
  SiSlack
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Partner {
  name: string;
  Icon: IconType;
  color: string;
}

const partners: Partner[] = [
  { name: "Google Cloud", Icon: SiGoogle, color: "#4285F4" },
  { name: "Amazon AWS", Icon: SiAmazon, color: "#FF9900" },
  { name: "Red Hat", Icon: SiRedhat, color: "#EE0000" },
  { name: "Oracle", Icon: SiOracle, color: "#F80000" },
  { name: "Salesforce", Icon: SiSalesforce, color: "#00A1E0" },
  { name: "SAP", Icon: SiSap, color: "#0FAAFF" },
  { name: "Cisco", Icon: SiCisco, color: "#1BA0D7" },
  { name: "Dell", Icon: SiDell, color: "#007DB8" },
  { name: "Intel", Icon: SiIntel, color: "#0071C5" },
  { name: "NVIDIA", Icon: SiNvidia, color: "#76B900" },
  { name: "VMware", Icon: SiVmware, color: "#607078" },
  { name: "Slack", Icon: SiSlack, color: "#4A154B" },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-muted/30" data-testid="section-partners">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Trusted <span className="text-primary">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver best-in-class solutions for our clients
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-4 rounded-md hover-elevate transition-all duration-300"
              data-testid={`partner-logo-${partner.name.toLowerCase().replace(/\s/g, "-")}`}
            >
              <partner.Icon
                className="w-10 h-10 md:w-12 md:h-12 mb-2 opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: partner.color }}
              />
              <span className="text-xs text-muted-foreground text-center mt-1">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
