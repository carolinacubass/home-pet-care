
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5562981516021" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-vet-green text-white p-4 rounded-full shadow-lg hover:bg-vet-green/90 transition-all z-40 animate-pulse-gentle"
      aria-label="Contato pelo WhatsApp"
    >
      <div className="relative">
        <MessageSquare size={24} />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
