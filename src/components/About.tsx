
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg relative z-10">
                <img 
                  src="/uploads/715a0c5c-b454-4a59-ae88-630e9dc9c03d.png" 
                  alt="Dra. Jéssika com pet" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bottom-6 right-6 z-20 bg-white p-5 rounded-lg shadow-md">
                <p className="font-bold text-xl">5+ Anos</p>
                <p className="text-gray-600">de experiência</p>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-64 h-64 bg-vet-blue-light rounded-full opacity-50"></div>
              <div className="absolute -z-10 -top-4 -left-4 w-32 h-32 bg-vet-green-light rounded-full opacity-50"></div>
            </div>
            
            {/* Gallery of additional images */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/uploads/41a8a4c4-97a5-40d9-aec7-c496214c8ff4.png" 
                  alt="Dra. Jéssika examinando um pet" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/uploads/12162864-15c3-44b8-82e6-8618f26cca7b.png" 
                  alt="Dra. Jéssika com golden retriever" 
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="inline-block py-1 px-3 rounded-full bg-vet-blue-light text-vet-blue text-sm font-medium mb-4">
              Sobre mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dra. Jéssika Cristina Machado de Lima
            </h2>
            <p className="text-gray-700 mb-4">
              Médica Veterinária graduada pela Universidade Federal de Goiás, com 5 anos de experiência 
              no atendimento clínico de pequenos animais. Registro CRMV SP 69255.
            </p>
            <p className="text-gray-700 mb-6">
              Dedico-me a proporcionar um atendimento personalizado e humanizado, oferecendo 
              cuidados veterinários de qualidade no conforto do lar do seu pet, minimizando o stress 
              e garantindo maior bem-estar durante as consultas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-2">Formação</h3>
                <p className="text-gray-600">Universidade Federal de Goiás</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-2">Especialidades</h3>
                <p className="text-gray-600">Clínica Geral e Dermatologia</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-2">Registro</h3>
                <p className="text-gray-600">CRMV SP 69255</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold mb-2">CNPJ</h3>
                <p className="text-gray-600">48.328.755/0001-46</p>
              </div>
            </div>

            <a 
              href="#contact" 
              className="bg-vet-blue hover:bg-vet-green text-white font-medium px-6 py-3 rounded-lg inline-block transition-all"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
