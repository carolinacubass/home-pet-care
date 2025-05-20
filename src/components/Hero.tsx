
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-r from-vet-beige to-vet-cream"
      id="home"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <span className="inline-block py-1 px-3 rounded-full bg-vet-blue-light text-vet-blue text-sm font-medium mb-4">
            CRMV SP 69255
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-4">
            Cuidados veterinários com <span className="text-vet-blue">dedicação</span> e <span className="text-vet-green">carinho</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Atendimento veterinário domiciliar personalizado em São Paulo e região ABC. 
            Seu pet recebe cuidados profissionais no conforto da sua casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5562981516021" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-vet-green hover:bg-vet-green/90 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              Agendar Consulta
              <ArrowRight size={18} />
            </a>
            <a 
              href="#services" 
              className="border-2 border-vet-blue text-vet-blue hover:bg-vet-blue hover:text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="rounded-2xl overflow-hidden shadow-lg animate-float">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Veterinária cuidando de gato" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <div className="bg-vet-green h-3 w-3 rounded-full animate-pulse-gentle"></div>
                <span className="font-medium">Disponível para atendimento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
