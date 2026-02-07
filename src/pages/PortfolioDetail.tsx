import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import heroSofa from "@/assets/hero-sofa.jpg";
import heroDining from "@/assets/hero-dining.jpg";
import processCrafting from "@/assets/process-crafting.jpg";
import tvConsole from "@/assets/products/tv-console.jpg";
import bedFrame from "@/assets/products/bed-frame.jpg";
import officeDesk from "@/assets/products/office-desk.jpg";
import bookshelf from "@/assets/products/bookshelf.jpg";
import armchair from "@/assets/products/armchair.jpg";
import outdoorSet from "@/assets/products/outdoor-set.jpg";

const projects = [
  {
    id: "1",
    title: "Wuse II Penthouse Fit-Out",
    location: "Wuse II, Abuja",
    category: "Residential",
    description:
      "Complete living and dining room transformation with custom modular sofa, entertainment console, and 8-seater dining table in warm oak. Modern Nigerian luxury aesthetic.",
    fullDescription:
      "This prestigious penthouse project involved a complete transformation of the living and dining spaces. Working closely with the client, we designed and crafted a custom modular sofa that perfectly fits the open-plan layout, an entertainment console with integrated cable management, and a stunning 8-seater dining table in warm oak. Every piece was designed to complement the modern Nigerian luxury aesthetic while ensuring maximum comfort and functionality.",
    image: heroSofa,
    tags: ["Living Room", "Dining", "Oak"],
    deliverables: [
      "Custom modular sofa with premium upholstery",
      "Entertainment console with cable management",
      "8-seater dining table in warm oak",
      "Matching dining chairs",
      "Side tables and accent pieces",
    ],
    materials: ["Warm Oak", "Premium Linen Upholstery", "Brushed Brass Hardware"],
    duration: "8 weeks",
  },
  {
    id: "2",
    title: "Maitama Boardroom",
    location: "Maitama, Abuja",
    category: "Commercial",
    description:
      "Executive 12-seater conference table in mahogany with integrated cable management and matching credenza. Professional finish that reflects corporate excellence.",
    fullDescription:
      "For this executive boardroom project, we created a commanding 12-seater conference table that serves as the centerpiece of the space. The table features integrated cable management for seamless connectivity during meetings, along with a matching credenza for storage. The rich mahogany finish was chosen to reflect the company's commitment to excellence and professionalism.",
    image: heroDining,
    tags: ["Office", "Mahogany", "Commercial"],
    deliverables: [
      "12-seater executive conference table",
      "Integrated cable management system",
      "Matching credenza with storage",
      "Executive chairs (12)",
      "Presentation podium",
    ],
    materials: ["African Mahogany", "Tempered Glass", "Chrome Hardware"],
    duration: "6 weeks",
  },
  {
    id: "3",
    title: "Gwarinpa Family Home",
    location: "Gwarinpa, Abuja",
    category: "Residential",
    description:
      "TV console with custom storage solutions and bedroom wardrobes. Space-efficient design maximizing storage while maintaining clean lines.",
    fullDescription:
      "This family home project focused on creating functional storage solutions that don't compromise on style. We designed a TV console with concealed storage compartments and built custom bedroom wardrobes that maximize the available space. The clean lines and thoughtful organization help the family maintain an uncluttered, peaceful home environment.",
    image: tvConsole,
    tags: ["Storage", "Living Room", "Bedroom"],
    deliverables: [
      "TV console with concealed storage",
      "Master bedroom wardrobe",
      "Children's room wardrobes (2)",
      "Floating shelves",
      "Shoe storage unit",
    ],
    materials: ["Engineered Oak", "Soft-close Hardware", "LED Lighting"],
    duration: "5 weeks",
  },
  {
    id: "4",
    title: "Asokoro Master Suite",
    location: "Asokoro, Abuja",
    category: "Residential",
    description:
      "Luxury king bed frame with upholstered headboard, matching nightstands, and dresser. Rich mahogany with premium linen upholstery.",
    fullDescription:
      "The Asokoro Master Suite project was a study in luxury and comfort. We created a stunning king-size bed frame featuring a generously padded upholstered headboard, complemented by elegant nightstands and a spacious dresser. The rich mahogany construction paired with premium linen upholstery creates a bedroom sanctuary that exudes sophistication.",
    image: bedFrame,
    tags: ["Bedroom", "Mahogany", "Luxury"],
    deliverables: [
      "King-size bed frame with upholstered headboard",
      "Matching nightstands (2)",
      "6-drawer dresser with mirror",
      "Bedroom bench",
      "Jewelry armoire",
    ],
    materials: ["Mahogany", "Belgian Linen", "Antique Brass Hardware"],
    duration: "7 weeks",
  },
  {
    id: "5",
    title: "Garki Legal Chambers",
    location: "Garki, Abuja",
    category: "Commercial",
    description:
      "Complete office fit-out including executive desks, bookshelves, and client seating. Professional teak finish with brass accents.",
    fullDescription:
      "This prestigious law firm required furniture that conveys authority and professionalism. We designed executive desks with ample workspace and storage, floor-to-ceiling bookshelves for their extensive legal library, and comfortable client seating. The professional teak finish with brass accents creates an atmosphere of trust and competence.",
    image: officeDesk,
    tags: ["Office", "Teak", "Commercial"],
    deliverables: [
      "Partner desks (3)",
      "Associate workstations (6)",
      "Floor-to-ceiling bookshelves",
      "Client waiting area seating",
      "Conference table (6-seater)",
    ],
    materials: ["Burmese Teak", "Polished Brass", "Full-grain Leather"],
    duration: "10 weeks",
  },
  {
    id: "6",
    title: "Workshop Excellence",
    location: "Sancraft Workshop",
    category: "Process",
    description:
      "Behind the scenes: our craftspeople at work creating precision joinery and hand-finished surfaces that define quality.",
    fullDescription:
      "This showcase highlights the heart of Sancraft Furniture - our workshop where skilled craftspeople bring designs to life. Using traditional joinery techniques combined with modern precision tools, every piece is crafted with meticulous attention to detail. From selecting the finest timber to applying hand-finished surfaces, this is where quality is built into every creation.",
    image: processCrafting,
    tags: ["Craftsmanship", "Process"],
    deliverables: [
      "Traditional joinery techniques",
      "Hand-selected timber",
      "Precision cutting and shaping",
      "Hand-finished surfaces",
      "Quality control at every stage",
    ],
    materials: ["Various Premium Hardwoods", "Traditional Finishes", "Artisan Techniques"],
    duration: "Ongoing",
  },
  {
    id: "7",
    title: "Jabi Lake Mall Corporate Office",
    location: "Jabi, Abuja",
    category: "Commercial",
    description:
      "Complete office suite with executive desks, ergonomic seating, and custom storage. Modern design with efficient space utilization for growing business.",
    fullDescription:
      "For this dynamic corporate office, we designed a complete furniture suite that balances modern aesthetics with practical functionality. Executive desks feature clean lines and integrated storage, while ergonomic seating ensures comfort during long work hours. Custom storage solutions maximize the available space while maintaining a cohesive visual identity.",
    image: officeDesk,
    tags: ["Office", "Modern", "Commercial"],
    deliverables: [
      "Executive desk with return",
      "Ergonomic task chairs (8)",
      "Modular storage units",
      "Reception desk",
      "Breakout area furniture",
    ],
    materials: ["White Oak", "Powder-coated Steel", "Premium Fabric"],
    duration: "6 weeks",
  },
  {
    id: "8",
    title: "Katampe Extension Library",
    location: "Katampe, Abuja",
    category: "Residential",
    description:
      "Floor-to-ceiling bookshelves with integrated ladder system. Custom dimensions to maximize vertical space while maintaining aesthetic appeal.",
    fullDescription:
      "This home library project transformed an underutilized room into a book lover's paradise. Floor-to-ceiling bookshelves were custom-built to the exact room dimensions, maximizing every inch of vertical space. An integrated rolling ladder system provides easy access to upper shelves, while built-in lighting highlights the collection. A comfortable reading nook completes the space.",
    image: bookshelf,
    tags: ["Storage", "Custom", "Oak"],
    deliverables: [
      "Floor-to-ceiling bookshelves",
      "Rolling ladder system",
      "Integrated LED lighting",
      "Reading nook with seating",
      "Display cabinets for collectibles",
    ],
    materials: ["American Oak", "Stainless Steel Ladder Hardware", "LED Strip Lighting"],
    duration: "5 weeks",
  },
  {
    id: "9",
    title: "Lugbe Reading Corner",
    location: "Lugbe, Abuja",
    category: "Residential",
    description:
      "Comfortable reading armchair with custom upholstery and matching ottoman. Perfect blend of ergonomics and style for intimate spaces.",
    fullDescription:
      "This cozy reading corner project focused on creating the perfect spot for relaxation. The custom armchair was designed with ergonomic support for extended reading sessions, featuring high-density foam and premium upholstery. The matching ottoman provides comfortable foot support, while a small side table holds books and beverages within easy reach.",
    image: armchair,
    tags: ["Living Room", "Upholstery", "Comfort"],
    deliverables: [
      "Custom reading armchair",
      "Matching ottoman",
      "Side table with book shelf",
      "Floor lamp (coordinated design)",
      "Throw pillow set",
    ],
    materials: ["Solid Walnut Frame", "High-density Foam", "Velvet Upholstery"],
    duration: "3 weeks",
  },
  {
    id: "10",
    title: "Kubwa Outdoor Lounge",
    location: "Kubwa, Abuja",
    category: "Residential",
    description:
      "Weather-resistant outdoor furniture set with teak construction. Designed to withstand Abuja's climate while maintaining luxury aesthetics.",
    fullDescription:
      "This outdoor living project created a stunning lounge area that withstands Abuja's varied climate. Using premium teak with natural weather resistance, we designed comfortable seating that looks as good as it performs. All hardware is marine-grade stainless steel, and the cushions feature quick-dry foam with UV-resistant fabric. Perfect for entertaining or relaxing.",
    image: outdoorSet,
    tags: ["Outdoor", "Teak", "Weather-resistant"],
    deliverables: [
      "Outdoor sofa set (3-piece)",
      "Dining table with 6 chairs",
      "Side tables (2)",
      "Sun loungers (2)",
      "Umbrella with stand",
    ],
    materials: ["Grade-A Teak", "Marine-grade Stainless Steel", "Sunbrella Fabric"],
    duration: "4 weeks",
  },
  {
    id: "11",
    title: "Durumi Boutique Hotel",
    location: "Durumi, Abuja",
    category: "Commercial",
    description:
      "10-room hotel fit-out including beds, nightstands, and seating. Consistent quality across all pieces with on-time delivery for grand opening.",
    fullDescription:
      "This boutique hotel project required consistent quality and design across 10 guest rooms, all delivered on a tight timeline for the grand opening. Each room features a custom bed frame, nightstands, desk, and seating area. The design balances durability for commercial use with the warmth and style expected in a boutique property. All pieces were delivered and installed ahead of schedule.",
    image: bedFrame,
    tags: ["Hospitality", "Commercial", "Bulk Order"],
    deliverables: [
      "Queen bed frames (10)",
      "Nightstands (20)",
      "Writing desks (10)",
      "Desk chairs (10)",
      "Luggage racks (10)",
    ],
    materials: ["Engineered Hardwood", "Commercial-grade Upholstery", "Durable Finishes"],
    duration: "8 weeks",
  },
  {
    id: "12",
    title: "Life Camp Family Dining",
    location: "Life Camp, Abuja",
    category: "Residential",
    description:
      "Extendable 6-8 seater dining table with matching chairs. Perfect for family gatherings with elegant mahogany finish.",
    fullDescription:
      "This family dining project centered on creating a table that adapts to the family's needs. The extendable design comfortably seats 6 for everyday meals, expanding to accommodate 8 guests for special occasions. The elegant mahogany finish and matching chairs create a cohesive look, while the robust construction ensures this will be the family's gathering place for generations.",
    image: heroDining,
    tags: ["Dining", "Mahogany", "Extendable"],
    deliverables: [
      "Extendable dining table (6-8 seater)",
      "Upholstered dining chairs (8)",
      "Matching sideboard",
      "Bar cart",
      "Wall-mounted display cabinet",
    ],
    materials: ["Santos Mahogany", "Neutral Linen Upholstery", "Soft-close Extensions"],
    duration: "6 weeks",
  },
];

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <Badge className="w-fit mb-4">{project.category}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-lg">{project.location}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">About This Project</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Project Image */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Project Gallery</h2>
              <div className="grid gap-6">
                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-muted-foreground">Location</dt>
                    <dd className="font-medium">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Category</dt>
                    <dd className="font-medium">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Duration</dt>
                    <dd className="font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4">Materials Used</h3>
                <ul className="space-y-2">
                  {project.materials.map((material, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deliverables */}
            <div className="bg-card/50 rounded-lg p-6 border border-border mb-12">
              <h3 className="text-xl font-semibold mb-4">What Was Delivered</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Inspired by this project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create custom furniture that transforms your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/custom">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
