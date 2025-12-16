import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "রাফিউল ইসলাম",
    location: "ঢাকা",
    rating: 5,
    comment: "অনেক ভালো পণ্য পেয়েছি। ডেলিভারি অনেক দ্রুত ছিল। অবশ্যই আবার অর্ডার করব।",
  },
  {
    name: "সাদিয়া আক্তার",
    location: "চট্টগ্রাম",
    rating: 5,
    comment: "প্রোডাক্টের কোয়ালিটি অসাধারণ। দামও অনেক সাশ্রয়ী। সবাইকে রেকমেন্ড করছি।",
  },
  {
    name: "মোহাম্মদ করিম",
    location: "সিলেট",
    rating: 5,
    comment: "ক্যাশ অন ডেলিভারি সুবিধা অনেক ভালো। বিশ্বাসযোগ্য সেলার। ধন্যবাদ!",
  },
];

const trustBadges = [
  { value: "১০,০০০+", label: "সন্তুষ্ট গ্রাহক" },
  { value: "৯৯%", label: "পজিটিভ রিভিউ" },
  { value: "২৪ ঘন্টা", label: "ঢাকায় ডেলিভারি" },
  { value: "৭ দিন", label: "রিটার্ন পলিসি" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-soft animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {badge.value}
              </div>
              <div className="text-sm text-muted-foreground">{badge.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আমাদের <span className="text-gradient">গ্রাহকদের মতামত</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-soft hover-lift relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
