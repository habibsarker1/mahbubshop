import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Send, MapPin, Phone, User } from "lucide-react";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string().trim().min(3, "নাম কমপক্ষে ৩ অক্ষরের হতে হবে").max(100, "নাম ১০০ অক্ষরের মধ্যে হতে হবে"),
  address: z.string().trim().min(10, "সম্পূর্ণ ঠিকানা দিন").max(500, "ঠিকানা ৫০০ অক্ষরের মধ্যে হতে হবে"),
  phone: z.string().trim().regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন (যেমন: 01712345678)"),
});

type OrderFormData = z.infer<typeof orderSchema>;

const OrderForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      orderSchema.parse(formData);
      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      toast({
        title: "অর্ডার সফল হয়েছে!",
        description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", address: "", phone: "" });
      }, 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof OrderFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof OrderFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="order-form" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card text-center animate-scale-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                ধন্যবাদ!
              </h3>
              <p className="text-muted-foreground">
                আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient">অর্ডার ফর্ম</span>
            </h2>
            <p className="text-muted-foreground">
              নিচের ফর্মটি পূরণ করুন। আমরা দ্রুত আপনার সাথে যোগাযোগ করব।
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  পুরো নাম
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="আপনার পুরো নাম লিখুন"
                  value={formData.name}
                  onChange={handleChange}
                  className={`h-12 ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  সম্পূর্ণ ঠিকানা
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="বাসা নং, রোড, এলাকা, জেলা..."
                  value={formData.address}
                  onChange={handleChange}
                  className={`min-h-[100px] ${errors.address ? "border-destructive" : ""}`}
                />
                {errors.address && (
                  <p className="text-sm text-destructive">{errors.address}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  মোবাইল নম্বর
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`h-12 ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    প্রসেসিং...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    অর্ডার কনফার্ম করুন
                  </span>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                ক্যাশ অন ডেলিভারি সুবিধা পাবেন সারা বাংলাদেশে
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
