import { useEffect, useRef } from "react";
import { Ruler, Palette, Hammer, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import processCrafting from "@/assets/process-crafting.jpg";
import heroProcess from "@/assets/hero-process.jpg";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Ruler,
    title: "1. Measure & Consult",
    description:
      "Share your space dimensions, style preferences, and functional needs. We'll guide you through wood types, finishes, and design options.",
  },
  {
    icon: Palette,
    title: "2. Design & Quote",
    description:
      "Receive detailed drawings and a transparent quote. We'll refine the design until it's exactly what you envision.",
  },
  {
    icon: Hammer,
    title: "3. Craft & Finish",
    description:
      "Our skilled craftspeople bring your design to life using premium materials and time-tested techniques. Quality checks at every stage.",
  },
  {
    icon: Truck,
    title: "4. Deliver & Install",
    description:
      "Careful delivery to your Abuja location and professional installation. We ensure everything is perfect before we leave.",
  },
];

export default function Process() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 70%",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroProcess} alt="Our Process" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">How We Craft</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From initial consultation to final installation—our proven process ensures your
              custom furniture exceeds expectations at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section ref={stepsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Card
                  key={idx}
                  className="process-step bg-card/50 border-border hover-lift"
                >
                  <CardContent className="pt-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6">In Our Workshop</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Our Abuja workshop combines traditional woodworking techniques with modern
                  precision tools. Each piece goes through multiple stages of crafting, sanding,
                  and finishing.
                </p>
                <p>
                  We use only kiln-dried hardwoods to prevent warping, and our joinery methods
                  ensure structural integrity that lasts for decades. Every surface is hand-sanded
                  to a silky finish before applying eco-friendly stains and protective coatings.
                </p>
                <p>
                  Quality control checkpoints throughout the process guarantee that your furniture
                  meets our exacting standards before it reaches your home.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={processCrafting}
                alt="Workshop craftsmanship"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Project Timeline</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="bg-background/80 border-border/50">
                <CardContent className="pt-8">
                  <p className="text-4xl font-bold text-primary mb-2">1-3 days</p>
                  <p className="text-muted-foreground">Design & Quote</p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 border-border/50">
                <CardContent className="pt-8">
                  <p className="text-4xl font-bold text-primary mb-2">2-4 weeks</p>
                  <p className="text-muted-foreground">Crafting</p>
                </CardContent>
              </Card>
              <Card className="bg-background/80 border-border/50">
                <CardContent className="pt-8">
                  <p className="text-4xl font-bold text-primary mb-2">1-2 days</p>
                  <p className="text-muted-foreground">Delivery & Install</p>
                </CardContent>
              </Card>
            </div>
            <p className="mt-8 text-muted-foreground">
              *Timelines vary based on project complexity and current workload. Rush orders
              available for an additional fee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
