import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Search, ShoppingCart } from "lucide-react";
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
];

export default function Showroom() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedWood, setSelectedWood] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesWood = selectedWood === "all" || product.wood === selectedWood;
    return matchesSearch && matchesCategory && matchesWood;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Showroom</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our most-loved pieces, handcrafted in Abuja with premium materials
          </p>
        </div>

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
          {filteredProducts.map((product) => (
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

        <ProductDetailDialog
          product={selectedProduct}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </div>
  );
}
