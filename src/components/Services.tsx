
import { Home, Stethoscope, Cat, Dog, Syringe, Heart } from "lucide-react";

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="service-card">
    <div className="mb-4 bg-vet-green-light p-3 w-14 h-14 flex items-center justify-center rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Atendimento Domiciliar",
      description: "Consultas veterinárias no conforto do seu lar, reduzindo o stress do seu pet durante o atendimento.",
      icon: <Home className="w-6 h-6 text-vet-green" />
    },
    {
      title: "Clínica Geral",
      description: "Avaliação completa da saúde do seu pet, tratamentos preventivos e curativos para diversas condições.",
      icon: <Stethoscope className="w-6 h-6 text-vet-green" />
    },
    {
      title: "Dermatologia Veterinária",
      description: "Diagnóstico e tratamento de problemas de pele, alergias e outras condições dermatológicas.",
      icon: <Cat className="w-6 h-6 text-vet-green" />
    },
    {
      title: "Coleta de Material",
      description: "Coleta domiciliar de amostras para exames laboratoriais sem o stress do deslocamento.",
      icon: <Dog className="w-6 h-6 text-vet-green" />
    },
    {
      title: "Vacinação",
      description: "Aplicação de vacinas com toda segurança e conforto, seguindo o protocolo adequado para cada pet.",
      icon: <Syringe className="w-6 h-6 text-vet-green" />
    },
    {
      title: "Orientação Nutricional",
      description: "Indicação da melhor alimentação para o seu pet, considerando idade, raça e condições de saúde.",
      icon: <Heart className="w-6 h-6 text-vet-green" />
    }
  ];

  return (
    <section className="section bg-gray-50" id="services">
      <div className="container mx-auto">
        <h2 className="section-title">Serviços Veterinários</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Oferecendo atendimento veterinário completo e personalizado para cães e gatos 
          em São Paulo e região do ABC.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
