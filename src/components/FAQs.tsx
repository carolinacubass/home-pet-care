
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Como funciona o atendimento veterinário domiciliar?",
      answer: "O atendimento domiciliar é realizado após agendamento prévio. A consulta ocorre no conforto da sua casa, onde realizo o exame clínico completo do seu pet, diagnóstico e, quando necessário, coleta de exames e aplicação de medicamentos."
    },
    {
      question: "Quais tipos de pets você atende?",
      answer: "Atendo principalmente cães e gatos de todas as idades, raças e portes."
    },
    {
      question: "Como agendar uma consulta?",
      answer: "Para agendar uma consulta, basta entrar em contato pelo WhatsApp (62) 98151-6021 ou por e-mail jessika.cml@hotmail.com informando seus dados, localização e a necessidade do seu pet."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceito pagamentos em dinheiro, PIX, cartões de crédito e débito."
    },
    {
      question: "O que devo preparar para a consulta domiciliar?",
      answer: "Recomendo separar a carteirinha de vacinação do pet, histórico de doenças anteriores e medicamentos em uso. Também é importante ter um local tranquilo e iluminado para o atendimento."
    },
    {
      question: "É possível solicitar receitas e atestados?",
      answer: "Sim, forneço receitas, atestados e laudos veterinários conforme a necessidade do seu pet após avaliação clínica."
    }
  ];

  return (
    <section className="section" id="faq">
      <div className="container mx-auto">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Esclareça suas dúvidas sobre os atendimentos veterinários
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-600">
              Ainda tem dúvidas? Entre em contato diretamente.
            </p>
            <a 
              href="https://wa.me/5562981516021" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-vet-blue hover:bg-vet-green text-white font-medium px-6 py-3 rounded-lg inline-block transition-all"
            >
              Falar com a Dra. Jéssika
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
