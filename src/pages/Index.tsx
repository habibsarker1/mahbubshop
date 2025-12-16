import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustSection from "@/components/TrustSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      <TrustSection />
      <OrderForm />
      <Footer />
    </main>
  );
};

export default Index;
