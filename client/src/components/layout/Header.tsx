import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, User, LogIn } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { companyInfo, navItems } from "@/lib/siteConfig";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <Globe className="w-8 h-8 text-primary" />
            <span className="font-semibold text-lg tracking-tight text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {companyInfo.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-sm font-medium ${
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            {user ? (
              <Link href="/dashboard">
                <Button size="sm" variant="outline" className="ml-4" data-testid="button-dashboard">
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button size="sm" className="ml-4" data-testid="button-login-nav">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background" data-testid="nav-mobile">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-sm font-medium ${
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-nav-mobile-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              {user ? (
                <Link href="/dashboard">
                  <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
