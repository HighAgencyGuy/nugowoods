import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Search, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import ProductDetailDialog from "@/components/ProductDetailDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import tvConsole from "@/assets/products/tv-console.jpg";
import bedFrame from "@/assets/products/bed-frame.jpg";
import officeDesk from "@/assets/products/office-desk.jpg";
import outdoorSet from "@/assets/products/outdoor-set.jpg";
import bookshelf from "@/assets/products/bookshelf.jpg";
import armchair from "@/assets/products/armchair.jpg";
import diningTable from "@/assets/products/dining-table.jpg";
import wardrobe from "@/assets/products/wardrobe.jpg";
import officeChair from "@/assets/products/office-chair.jpg";
import coffeeTable from "@/assets/products/coffee-table.jpg";
import nightstand from "@/assets/products/nightstand.jpg";
import diningChairs from "@/assets/products/dining-chairs.jpg";
import sideboard from "@/assets/products/sideboard.jpg";
import studyDesk from "@/assets/products/study-desk.jpg";
import barStool from "@/assets/products/bar-stool.jpg";
import storageBench from "@/assets/products/storage-bench.jpg";
import displayCabinet from "@/assets/products/display-cabinet.jpg";
import consoleTable from "@/assets/products/console-table.jpg";
import shoeRack from "@/assets/products/shoe-rack.jpg";
import coatRack from "@/assets/products/coat-rack.jpg";
import dressingTable from "@/assets/products/dressing-table.jpg";
import tvStand from "@/assets/products/tv-stand.jpg";
import heroShowroom from "@/assets/hero-showroom.jpg";

const products = [
  {
    id: 1,
    name: "Maitama Modular Sofa",
    category: "Living Room",
    price: 450000,
    image: tvConsole,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 2,
    name: "Lagos Executive Dining Set",
    category: "Dining",
    price: 680000,
    image: bedFrame,
    wood: "Mahogany",
    inStock: true,
  },
  {
    id: 3,
    name: "Abuja Office Desk",
    category: "Office",
    price: 280000,
    image: officeDesk,
    wood: "Teak",
    inStock: true,
  },
  {
    id: 4,
    name: "Garden Lounge Set",
    category: "Outdoor",
    price: 390000,
    image: outdoorSet,
    wood: "Teak",
    inStock: true,
  },
  {
    id: 5,
    name: "Modern Bookshelf",
    category: "Living Room",
    price: 185000,
    image: bookshelf,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 6,
    name: "Reading Armchair",
    category: "Living Room",
    price: 165000,
    image: armchair,
    wood: "Oak",
    inStock: false,
  },
  {
    id: 7,
    name: "Elegant Dining Table",
    category: "Dining",
    price: 520000,
    image: diningTable,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 8,
    name: "Bedroom Wardrobe",
    category: "Bedroom",
    price: 385000,
    image: wardrobe,
    wood: "Mahogany",
    inStock: true,
  },
  {
    id: 9,
    name: "Executive Office Chair",
    category: "Office",
    price: 125000,
    image: officeChair,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 10,
    name: "Modern Coffee Table",
    category: "Living Room",
    price: 145000,
    image: coffeeTable,
    wood: "Teak",
    inStock: true,
  },
  {
    id: 11,
    name: "Bedside Nightstand",
    category: "Bedroom",
    price: 95000,
    image: nightstand,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 12,
    name: "Dining Chair Set (4pcs)",
    category: "Dining",
    price: 220000,
    image: diningChairs,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 13,
    name: "Dining Sideboard",
    category: "Dining",
    price: 325000,
    image: sideboard,
    wood: "Mahogany",
    inStock: true,
  },
  {
    id: 14,
    name: "Study Desk",
    category: "Office",
    price: 195000,
    image: studyDesk,
    wood: "Teak",
    inStock: false,
  },
  {
    id: 15,
    name: "Bar Stool",
    category: "Dining",
    price: 65000,
    image: barStool,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 16,
    name: "Storage Bench",
    category: "Living Room",
    price: 155000,
    image: storageBench,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 17,
    name: "Display Cabinet",
    category: "Living Room",
    price: 395000,
    image: displayCabinet,
    wood: "Mahogany",
    inStock: true,
  },
  {
    id: 18,
    name: "Console Table",
    category: "Living Room",
    price: 175000,
    image: consoleTable,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 19,
    name: "Shoe Rack Cabinet",
    category: "Bedroom",
    price: 115000,
    image: shoeRack,
    wood: "Teak",
    inStock: true,
  },
  {
    id: 20,
    name: "Coat Rack Stand",
    category: "Living Room",
    price: 55000,
    image: coatRack,
    wood: "Oak",
    inStock: true,
  },
  {
    id: 21,
    name: "Dressing Table",
    category: "Bedroom",
    price: 285000,
    image: dressingTable,
    wood: "Mahogany",
    inStock: false,
  },
  {
    id: 22,
    name: "TV Stand",
    category: "Living Room",
    price: 235000,
    image: tvStand,
    wood: "Teak",
    inStock: true,
  },
];

export default function Showroom() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedWood, setSelectedWood] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 9;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesWood = selectedWood === "all" || product.wood === selectedWood;
    return matchesSearch && matchesCategory && matchesWood;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroShowroom}
            alt="Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Showroom</h1>
            <p className="text-xl text-muted-foreground">
              Browse our most-loved pieces, handcrafted in Abuja with premium materials
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-12 bg-card rounded-2xl p-6 shadow-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Living Room">Living Room</SelectItem>
                <SelectItem value="Dining">Dining</SelectItem>
                <SelectItem value="Bedroom">Bedroom</SelectItem>
                <SelectItem value="Office">Office</SelectItem>
                <SelectItem value="Outdoor">Outdoor</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedWood} onValueChange={setSelectedWood}>
              <SelectTrigger>
                <SelectValue placeholder="Wood Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Woods</SelectItem>
                <SelectItem value="Oak">Oak</SelectItem>
                <SelectItem value="Teak">Teak</SelectItem>
                <SelectItem value="Mahogany">Mahogany</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="border-primary text-primary">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover-lift bg-card/50 border-border"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.inStock ? (
                    <Badge className="absolute top-4 right-4 bg-primary">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge className="absolute top-4 right-4 bg-muted">
                      Made to Order
                    </Badge>
                  )}
                </div>
              </Link>

              <CardContent className="pt-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{product.category}</Badge>
                  <span className="text-sm text-muted-foreground">{product.wood}</span>
                </div>
                <p className="text-2xl font-bold text-primary">
                  {formatPrice(product.price)}
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <Button 
                  className="w-full" 
                  onClick={() => {
                    setSelectedProduct(product);
                    setDialogOpen(true);
                  }}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found. Try adjusting your filters.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && filteredProducts.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Previous
            </Button>
            <div className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              Next
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        <ProductDetailDialog
          product={selectedProduct}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </div>
  );
}
