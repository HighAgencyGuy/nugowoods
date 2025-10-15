import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const whatsappNumber = "2348000000000";
  const message = encodeURIComponent(
    "Hi BeePee Furniture Works! I'm interested in learning more about your furniture."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white glow-gold group-hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    </a>
  );
}
