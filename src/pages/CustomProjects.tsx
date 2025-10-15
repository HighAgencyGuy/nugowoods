import { useState } from "react";
import { Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function CustomProjects() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    dimensions: "",
    budget: "",
    timeline: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const whatsappNumber = "2348000000000";
    const message = encodeURIComponent(
      `🛋️ CUSTOM PROJECT REQUEST\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Project Type: ${formData.projectType}\n` +
        `Dimensions: ${formData.dimensions}\n` +
        `Budget: ${formData.budget}\n` +
        `Timeline: ${formData.timeline}\n\n` +
        `Notes:\n${formData.notes}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    toast({
      title: "Request Sent!",
      description: "We'll continue the conversation on WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      dimensions: "",
      budget: "",
      timeline: "",
      notes: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      description: "Tell us about your space, style preferences, and functional requirements",
    },
    {
      number: "02",
      title: "Choose Materials",
      description: "Select from our range of premium woods, finishes, and upholstery options",
    },
    {
      number: "03",
      title: "Approve Design",
      description: "Review detailed drawings and transparent pricing before we begin",
    },
    {
      number: "04",
      title: "Build & Finish",
      description: "Watch your piece come to life with quality updates throughout the process",
    },
    {
      number: "05",
      title: "Deliver & Install",
      description: "Professional delivery and installation at your Abuja location",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Custom Projects</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From idea to installation—tailored furniture made around your space, style, and
              budget. Let's create something uniquely yours.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Custom Projects Work
          </h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card/50 border-border">
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your project and we'll get back to you with ideas and pricing
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone / WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 800 0000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type *
                    </label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, projectType: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="living">Living Room Furniture</SelectItem>
                        <SelectItem value="dining">Dining Set</SelectItem>
                        <SelectItem value="bedroom">Bedroom Furniture</SelectItem>
                        <SelectItem value="office">Office Furniture</SelectItem>
                        <SelectItem value="outdoor">Outdoor Furniture</SelectItem>
                        <SelectItem value="storage">Storage Solutions</SelectItem>
                        <SelectItem value="other">Other Custom Piece</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dimensions" className="block text-sm font-medium mb-2">
                        Dimensions / Space
                      </label>
                      <Input
                        id="dimensions"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        placeholder="e.g., 2m x 1.5m"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, budget: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-200k">Under ₦200,000</SelectItem>
                          <SelectItem value="200-500k">₦200,000 - ₦500,000</SelectItem>
                          <SelectItem value="500k-1m">₦500,000 - ₦1,000,000</SelectItem>
                          <SelectItem value="1m-plus">₦1,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Preferred Timeline
                    </label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, timeline: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">ASAP (Rush order)</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">
                      Additional Notes
                    </label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us more about your vision, preferred materials, colors, or any inspiration photos you have..."
                    />
                  </div>

                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Have photos or sketches? Share them via WhatsApp after submitting
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Request Quote via WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
