
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Testimonial = {
  name: string;
  pet: string;
  comment: string;
  image: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Amanda Silva",
    pet: "Tutora da Luna",
    comment: "A Dra. Jéssika é uma profissional incrível! Minha gatinha tem pavor de ir ao veterinário e o atendimento em casa fez toda a diferença. Super recomendo!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    initials: "AS"
  },
  {
    name: "Carlos Pereira",
    pet: "Tutor do Max",
    comment: "Atendimento excepcional! A Dra. Jéssika é muito atenciosa e detalhista. Meu cão se sentiu confortável durante todo o procedimento.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    initials: "CP"
  },
  {
    name: "Fernanda Costa",
    pet: "Tutora da Belinha",
    comment: "Profissional extremamente competente e cuidadosa. O atendimento domiciliar é perfeito para minha cachorrinha idosa que fica muito estressada em clínicas.",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    initials: "FC"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-vet-green-light/30" id="testimonials">
      <div className="container mx-auto">
        <h2 className="section-title">Depoimentos</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          O que os tutores e seus pets dizem sobre nossos serviços
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <Avatar className="w-24 h-24 border-4 border-vet-blue-light">
                  <AvatarImage 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-lg font-bold bg-vet-blue text-white">
                    {testimonials[currentIndex].initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <svg className="w-10 h-10 text-vet-blue-light mb-4 mx-auto md:mx-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                </svg>
                
                <p className="text-gray-700 mb-6 text-lg">
                  {testimonials[currentIndex].comment}
                </p>
                
                <div>
                  <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                  <p className="text-vet-green">{testimonials[currentIndex].pet}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-vet-blue hover:text-white transition-colors"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-vet-blue" : "bg-gray-300"
                  }`}
                  aria-label={`Depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-vet-blue hover:text-white transition-colors"
              aria-label="Próximo depoimento"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
