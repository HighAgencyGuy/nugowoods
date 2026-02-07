import { useEffect, useRef } from "react";
import { Hammer, Heart, Leaf, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroAbout from "@/assets/hero-about.jpg";
import processCrafting from "@/assets/worker.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.15,
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
          <img src={heroAbout} alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Sancraft Furniture</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Master craftsmen specializing in bespoke furniture. We create stunning pieces that bring your vision to life with exceptional craftsmanship. Based in Abuja, we transform spaces with quality that lasts.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Sancraft Furniture, we craft exceptional furniture pieces that transform spaces. Our mission is to deliver beautifully designed, expertly crafted furniture solutions that stand the test of time. Every piece is made with care, precision, and a passion for quality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From elegant living room sets to functional office furniture, every project reflects our dedication to craftsmanship, innovation, and timeless design. We work closely with you to bring your vision to life.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={processCrafting}
                alt="Craftsmanship"
                className="w-full h-auto scale-75 border-2 border-primary rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={cardsRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="about-card bg-background/80 border-border/50">
              <CardContent className="pt-8 text-center">
                <Hammer className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Every joint, every finish—executed with precision and care by skilled artisans
                </p>
              </CardContent>
            </Card>

            <Card className="about-card bg-background/80 border-border/50">
              <CardContent className="pt-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Your vision guides everything we do, from design to delivery
                </p>
              </CardContent>
            </Card>

            <Card className="about-card bg-background/80 border-border/50">
              <CardContent className="pt-8 text-center">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Responsibly sourced materials and eco-friendly finishes for a better tomorrow
                </p>
              </CardContent>
            </Card>

            <Card className="about-card bg-background/80 border-border/50">
              <CardContent className="pt-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Supporting local artisans and contributing to Abuja's creative economy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Behind every piece is a dedicated team of designers, craftspeople, and finishing
              specialists who bring decades of combined experience to your project.
            </p>
            <p className="text-lg text-muted-foreground">
              From the initial consultation to final installation, you'll work with passionate
              professionals who care about getting every detail right.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Sustainability</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We're committed to responsible forestry and eco-friendly practices. Our hardwoods
                are sourced from suppliers who practice sustainable harvesting, ensuring forests
                remain healthy for future generations.
              </p>
              <p>
                We use water-based finishes and low-VOC stains whenever possible, protecting both
                our craftspeople and your indoor air quality. Our workshop minimizes waste through
                careful planning and repurposing of offcuts.
              </p>
              <p>
                When you choose Sancraft Furniture, you're choosing craftsmanship that's kind to both your space
                and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
