import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              গ্যাজেট স্টোর <span className="text-primary">বিডি</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("products")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              পণ্য
            </button>
            <button
              onClick={() => scrollToSection("order-form")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              অর্ডার করুন
            </button>
            <Button variant="hero" size="sm" onClick={() => scrollToSection("order-form")}>
              এখনই অর্ডার করুন
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("products")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                পণ্য
              </button>
              <button
                onClick={() => scrollToSection("order-form")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                অর্ডার করুন
              </button>
              <Button variant="hero" onClick={() => scrollToSection("order-form")}>
                এখনই অর্ডার করুন
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
