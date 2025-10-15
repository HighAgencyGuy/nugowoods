import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import heroSofa from "@/assets/hero-sofa.jpg";
import heroDining from "@/assets/hero-dining.jpg";
import processCrafting from "@/assets/process-crafting.jpg";
import tvConsole from "@/assets/products/tv-console.jpg";
import bedFrame from "@/assets/products/bed-frame.jpg";
import officeDesk from "@/assets/products/office-desk.jpg";

const projects = [
  {
    title: "Wuse II Penthouse Fit-Out",
    location: "Wuse II, Abuja",
    category: "Residential",
    description:
      "Complete living and dining room transformation with custom modular sofa, entertainment console, and 8-seater dining table in warm oak. Modern Nigerian luxury aesthetic.",
    image: heroSofa,
    tags: ["Living Room", "Dining", "Oak"],
  },
  {
    title: "Maitama Boardroom",
    location: "Maitama, Abuja",
    category: "Commercial",
    description:
      "Executive 12-seater conference table in mahogany with integrated cable management and matching credenza. Professional finish that reflects corporate excellence.",
    image: heroDining,
    tags: ["Office", "Mahogany", "Commercial"],
  },
  {
    title: "Gwarinpa Family Home",
    location: "Gwarinpa, Abuja",
    category: "Residential",
    description:
      "TV console with custom storage solutions and bedroom wardrobes. Space-efficient design maximizing storage while maintaining clean lines.",
    image: tvConsole,
    tags: ["Storage", "Living Room", "Bedroom"],
  },
  {
    title: "Asokoro Master Suite",
    location: "Asokoro, Abuja",
    category: "Residential",
    description:
      "Luxury king bed frame with upholstered headboard, matching nightstands, and dresser. Rich mahogany with premium linen upholstery.",
    image: bedFrame,
    tags: ["Bedroom", "Mahogany", "Luxury"],
  },
  {
    title: "Garki Legal Chambers",
    location: "Garki, Abuja",
    category: "Commercial",
    description:
      "Complete office fit-out including executive desks, bookshelves, and client seating. Professional teak finish with brass accents.",
    image: officeDesk,
    tags: ["Office", "Teak", "Commercial"],
  },
  {
    title: "Workshop Excellence",
    location: "BeePee Workshop",
    category: "Process",
    description:
      "Behind the scenes: our craftspeople at work creating precision joinery and hand-finished surfaces that define quality.",
    image: processCrafting,
    tags: ["Craftsmanship", "Process"],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A showcase of our custom projects—from intimate residential spaces to grand
              commercial installations across Abuja.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden hover-lift bg-card/50 border-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary/90">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create custom furniture that transforms your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/custom"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Request a Quote
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
