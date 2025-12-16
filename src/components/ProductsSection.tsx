import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "ওয়্যারলেস ইয়ারবাড",
    description: "প্রিমিয়াম সাউন্ড কোয়ালিটি, ৩০ ঘন্টা ব্যাটারি",
    price: 1299,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    badge: "সেরা বিক্রি",
  },
  {
    id: 2,
    name: "স্মার্ট ওয়াচ",
    description: "হার্ট রেট মনিটর, ফিটনেস ট্র্যাকার",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    badge: "৩০% ছাড়",
  },
  {
    id: 3,
    name: "পাওয়ার ব্যাংক",
    description: "২০,০০০mAh, ফাস্ট চার্জিং সাপোর্ট",
    price: 999,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "ব্লুটুথ স্পিকার",
    description: "৩৬০° সাউন্ড, ওয়াটারপ্রুফ ডিজাইন",
    price: 1799,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    badge: "নতুন",
  },
  {
    id: 5,
    name: "ফোন হোল্ডার",
    description: "৩৬০° রোটেশন, গাড়ি ও বাইকের জন্য",
    price: 349,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1586953208270-767889fa9b86?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "LED রিং লাইট",
    description: "১০ ইঞ্চি, ট্রাইপড সহ",
    price: 899,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=400&fit=crop",
    badge: "জনপ্রিয়",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {product.badge}
          </Badge>
        )}
        {discount > 0 && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
            -{discount}%
          </Badge>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">৳{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ৳{product.originalPrice}
              </span>
            )}
          </div>
          <Button variant="hero" size="sm" onClick={scrollToOrder}>
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আমাদের <span className="text-gradient">জনপ্রিয় পণ্য</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            সেরা মানের গ্যাজেট পণ্য সবচেয়ে সাশ্রয়ী মূল্যে। আজই অর্ডার করুন!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
