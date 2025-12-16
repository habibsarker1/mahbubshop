import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingBag } from "lucide-react";

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 right-1/4 w-16 h-16 bg-primary/15 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">বাংলাদেশের #১ গ্যাজেট স্টোর</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              সেরা মানের{" "}
              <span className="text-gradient">গ্যাজেট পণ্য</span>
              <br />
              সাশ্রয়ী মূল্যে
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              আমাদের কাছে পাবেন সেরা মানের গ্যাজেট পণ্য। দ্রুত ডেলিভারি, ক্যাশ অন ডেলিভারি সুবিধা এবং সেরা কাস্টমার সাপোর্ট।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" onClick={scrollToOrder}>
                <ShoppingBag className="w-5 h-5" />
                অর্ডার করুন এখনই
              </Button>
              <Button variant="outline" size="xl" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
                পণ্য দেখুন
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">১০,০০০+</div>
                <div className="text-sm text-muted-foreground">সন্তুষ্ট গ্রাহক</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">৫০০+</div>
                <div className="text-sm text-muted-foreground">পণ্য সমূহ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">৬৪</div>
                <div className="text-sm text-muted-foreground">জেলায় ডেলিভারি</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
                  alt="গ্যাজেট পণ্য"
                  className="w-full h-auto rounded-2xl object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
