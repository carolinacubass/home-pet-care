
import { Phone, MessageSquare, Mail, Instagram } from "lucide-react";

const ContactItem = ({ icon, title, value, link, linkText }: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  link: string;
  linkText: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
    <div className="mb-3 bg-vet-blue-light p-3 w-12 h-12 rounded-full flex items-center justify-center text-vet-blue">
      {icon}
    </div>
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-gray-600 mb-4">{value}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-auto text-vet-blue hover:text-vet-green transition-colors font-medium flex items-center gap-1"
    >
      {linkText}
    </a>
  </div>
);

const Contact = () => {
  return (
    <section className="section bg-gradient-to-br from-vet-beige to-white" id="contact">
      <div className="container mx-auto">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Estou disponível para atendimentos em toda região de São Paulo e ABC. 
          Entre em contato para agendar uma consulta ou esclarecer dúvidas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ContactItem 
            icon={<Phone size={24} />}
            title="Telefone / WhatsApp"
            value="(62) 98151-6021"
            link="https://wa.me/5562981516021"
            linkText="Enviar mensagem"
          />
          <ContactItem 
            icon={<Mail size={24} />}
            title="E-mail"
            value="jessika.cml@hotmail.com"
            link="mailto:jessika.cml@hotmail.com"
            linkText="Enviar e-mail"
          />
          <ContactItem 
            icon={<Instagram size={24} />}
            title="Instagram"
            value="@jessikacristinas"
            link="https://instagram.com/jessikacristinas"
            linkText="Seguir"
          />
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-6">Área de Atendimento</h3>
              <p className="mb-4 text-gray-700">
                Atendimento domiciliar em toda região de São Paulo - SP e ABC:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• São Paulo (Capital)</li>
                <li>• Santo André</li>
                <li>• São Bernardo do Campo</li>
                <li>• São Caetano do Sul</li>
                <li>• Diadema</li>
                <li>• Mauá</li>
              </ul>
              <p className="text-gray-700">
                Para regiões não listadas, entre em contato para consultar disponibilidade.
              </p>
            </div>
            <div className="lg:w-1/2 bg-vet-blue-light p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Horário de Atendimento</h3>
                <p className="text-gray-700">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábados: 8h às 14h
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Atendimento de Emergência</h3>
                <p className="text-gray-700 mb-4">
                  Para emergências fora do horário de atendimento, entre em contato via WhatsApp.
                </p>
                <a 
                  href="https://wa.me/5562981516021" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-vet-green hover:bg-vet-green/90 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all"
                >
                  <MessageSquare size={18} />
                  Contato de Emergência
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
