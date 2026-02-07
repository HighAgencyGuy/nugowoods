import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();

  const { data: project, isLoading, error } = useQuery({
    queryKey: ["portfolio-item", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("portfolio")
        .select("*")
        .eq("id", id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading project details...</div>
      </div>
    );
  }

  if (error || !project) {
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
            src={project.image_url}
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          {project.location && (
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{project.location}</span>
            </div>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, idx: number) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
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
                {project.description}
              </p>
            </div>

            {/* Project Image Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Project Gallery</h2>
              <div className="grid gap-6">
                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-muted-foreground">Location</dt>
                    <dd className="font-medium">{project.location || "Abuja, Nigeria"}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Category</dt>
                    <dd className="font-medium">
                      {project.tags?.[0] || "Custom Furniture"}
                    </dd>
                  </div>
                  {project.created_at && (
                    <div>
                      <dt className="text-sm text-muted-foreground">Completed</dt>
                      <dd className="font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(project.created_at).toLocaleDateString("en-NG", {
                          year: "numeric",
                          month: "long",
                        })}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4">What Was Delivered</h3>
                <ul className="space-y-2">
                  {project.tags?.map((tag: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{tag}</span>
                    </li>
                  )) || (
                    <li className="text-muted-foreground">Custom furniture pieces</li>
                  )}
                </ul>
              </div>
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
