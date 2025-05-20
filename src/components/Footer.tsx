
import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vet-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Dra. Jéssika Cristina</h3>
            <p className="mb-4 max-w-xs">
              Médica Veterinária - CRMV SP 69255<br />
              Atendimento domiciliar em São Paulo e região ABC
            </p>
            <p className="text-sm text-white/80">
              CNPJ: 48.328.755/0001-46
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-vet-green-light transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-vet-green-light transition-colors">Sobre</a></li>
              <li><a href="#services" className="hover:text-vet-green-light transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-vet-green-light transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-vet-green-light transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5562981516021" className="flex items-center gap-2 hover:text-vet-green-light transition-colors">
                  <Phone size={16} />
                  <span>(62) 98151-6021</span>
                </a>
              </li>
              <li>
                <a href="mailto:jessika.cml@hotmail.com" className="flex items-center gap-2 hover:text-vet-green-light transition-colors">
                  <Mail size={16} />
                  <span>jessika.cml@hotmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/jessikacristinas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-vet-green-light transition-colors"
                >
                  <Instagram size={16} />
                  <span>@jessikacristinas</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            © {currentYear} Dra. Jéssika Cristina. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/5562981516021" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-vet-green-light transition-colors"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/jessikacristinas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-vet-green-light transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
