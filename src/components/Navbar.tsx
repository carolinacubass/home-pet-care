
import { useState, useEffect } from "react";
import { Phone, Instagram } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <a href="#" className="text-xl md:text-2xl font-bold text-vet-blue">
            Dra. Jéssika Cristina
            <span className="block text-sm font-medium text-vet-green">
              Médica Veterinária
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-vet-blue transition-colors">Sobre</a>
          <a href="#services" className="hover:text-vet-blue transition-colors">Serviços</a>
          <a href="#contact" className="hover:text-vet-blue transition-colors">Contato</a>
          <a href="#faq" className="hover:text-vet-blue transition-colors">Dúvidas</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+5562981516021" 
            className="hidden md:flex items-center gap-1 text-vet-blue hover:text-vet-green transition-colors"
            aria-label="Telefone para contato"
          >
            <Phone size={18} />
            <span className="hidden lg:inline">(62) 98151-6021</span>
          </a>
          <a 
            href="https://instagram.com/jessikacristinas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-vet-blue hover:text-vet-green transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a 
            href="#contact" 
            className="bg-vet-blue text-white px-4 py-2 rounded-md hover:bg-vet-green transition-all duration-200"
          >
            Agendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
