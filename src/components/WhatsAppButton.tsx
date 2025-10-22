import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const whatsappNumber = "2348144041524";
  const message = encodeURIComponent(
    "Hi Nugowoods! I'm interested in learning more about your furniture."
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("WhatsApp button clicked", `https://wa.me/${whatsappNumber}?text=${message}`);
  };

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[9999] group pointer-events-auto h-14 w-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
      style={{ boxShadow: "0 0 40px rgba(37, 211, 102, 0.4)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
