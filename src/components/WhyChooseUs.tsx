import { Shield, Truck, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "১০০% অরিজিনাল পণ্য",
    description: "আমরা শুধুমাত্র অথেনটিক এবং জেনুইন প্রোডাক্ট বিক্রি করি। কোয়ালিটির গ্যারান্টি।",
  },
  {
    icon: Truck,
    title: "দ্রুত ডেলিভারি",
    description: "সারা বাংলাদেশে দ্রুত ডেলিভারি। ঢাকায় ২৪ ঘন্টা, ঢাকার বাইরে ২-৩ দিনে।",
  },
  {
    icon: CreditCard,
    title: "ক্যাশ অন ডেলিভারি",
    description: "পণ্য হাতে পেয়ে টাকা দিন। অগ্রিম পেমেন্টের ঝামেলা নেই।",
  },
  {
    icon: Headphones,
    title: "২৪/৭ সাপোর্ট",
    description: "যেকোনো সমস্যায় আমাদের কাস্টমার সাপোর্ট টিম সবসময় আপনার পাশে।",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            কেন <span className="text-gradient">আমাদের বেছে নেবেন</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            হাজারো গ্রাহকের বিশ্বাসের কারণ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-soft hover-lift text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
