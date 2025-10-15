import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroSofa from "@/assets/hero-sofa.jpg";
import heroDining from "@/assets/hero-dining.jpg";
import tvConsole from "@/assets/products/tv-console.jpg";
import bedFrame from "@/assets/products/bed-frame.jpg";
import officeDesk from "@/assets/products/office-desk.jpg";
import outdoorSet from "@/assets/products/outdoor-set.jpg";

gsap.registerPlugin(ScrollTrigger);

const collections = [
  { name: "Living Room", image: heroSofa, path: "/showroom?category=living" },
  { name: "Dining", image: heroDining, path: "/showroom?category=dining" },
  { name: "Bedroom", image: bedFrame, path: "/showroom?category=bedroom" },
  { name: "Office", image: officeDesk, path: "/showroom?category=office" },
  { name: "Outdoor", image: outdoorSet, path: "/showroom?category=outdoor" },
];

const testimonials = [
  {
    name: "Ada",
    location: "Wuse II",
    quote: "Flawless finish and timely delivery. Our living room has never looked better!",
    rating: 5,
  },
  {
    name: "Chinedu",
    location: "Maitama",
    quote: "Our boardroom looks world-class. The craftsmanship is exceptional.",
    rating: 5,
  },
  {
    name: "Mariam",
    location: "Gwarinpa",
    quote: "The sofa is a dream. Worth every naira. Highly recommend!",
    rating: 5,
  },
];

const valueProps = [
  {
    title: "Built to last",
    description: "Solid woods, precision joinery, and lasting quality you can feel",
  },
  {
    title: "Designed around you",
    description: "Custom sizes, finishes, and fabrics to match your vision",
  },
  {
    title: "Abuja-ready",
    description: "Fast delivery and careful installation across the capital",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Collection cards stagger
      gsap.from(".collection-card", {
        scrollTrigger: {
          trigger: ".collections-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Value props animation
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(0, 0%, 12%) 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroSofa}
            alt="Premium furniture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="hero-cta mb-6 bg-primary/20 text-primary border-primary/30">
            Handcrafted in Abuja
          </Badge>
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            BeePee Furniture Works
          </h1>
          <p className="hero-subtitle text-xl md:text-3xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crafted comfort. Designed for life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero-cta text-lg px-8" asChild>
              <Link to="/showroom">
                Shop Showroom
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hero-cta text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/custom">Start a Custom Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section ref={featuresRef} className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, idx) => (
              <Card key={idx} className="value-card bg-background/50 border-border/50 hover-lift">
                <CardContent className="pt-8">
                  <Check className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 collections-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From living spaces to outdoor sanctuaries—furniture that feels like home
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {collections.map((collection, idx) => (
              <Link
                key={idx}
                to={collection.path}
                className="collection-card group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover-lift"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-semibold">{collection.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by our customers
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real Abuja homes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-background/80 border-border/50">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something custom together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From initial concept to final installation—we'll create furniture that's uniquely yours
          </p>
          <Button size="lg" className="text-lg px-10" asChild>
            <Link to="/custom">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
