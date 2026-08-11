export default function Testimonials() {
  const testimonials = [
    {
      name: "Victor Macedo",
      comment:
        "O melhor café que já experimentei! Atendimento excelente e ambiente muito agradável.",
      photo:
        "https://img.magnific.com/vetores-premium/icone-plano-vetorial-perfil-de-usuario-isolado-avatar-silhueta-de-um-homem-ou-mulher-silhueta-preta-em-fundo-branco-perfeito-para-historias-de-mensageiros-de-midia-social-ou-seu-adx9xa_719432-843.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Maria clara",
      comment:
        "Sempre peço o cappuccino. A qualidade é incrível e a entrega é rápida.",
      photo:
        "https://img.magnific.com/vetores-premium/icone-plano-vetorial-perfil-de-usuario-isolado-avatar-silhueta-de-um-homem-ou-mulher-silhueta-preta-em-fundo-branco-perfeito-para-historias-de-mensageiros-de-midia-social-ou-seu-adx9xa_719432-843.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "luiza macedo",
      comment:
        "Lugar perfeito para trabalhar e tomar um café especial. Recomendo para todos!",
      photo:
        "https://img.magnific.com/vetores-premium/icone-plano-vetorial-perfil-de-usuario-isolado-avatar-silhueta-de-um-homem-ou-mulher-silhueta-preta-em-fundo-branco-perfeito-para-historias-de-mensageiros-de-midia-social-ou-seu-adx9xa_719432-843.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <section id="depoimentos" className="bg-[#F3E9DD] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#35251F] mb-4">
          O que nossos clientes dizem
        </h2>

        <p className="text-center text-[#6B5548] mb-12">
          A satisfação dos nossos clientes é o nosso maior orgulho.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] rounded-2xl shadow-lg p-8"
            >

              <div className="flex flex-col items-center">

                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-24 h-24 rounded-full border-4 border-[#8B5E3C] object-cover"
                />

                <h3 className="mt-5 text-2xl font-bold text-[#35251F]">
                  {item.name}
                </h3>

                <p className="mt-4 text-[#6B5548] text-center italic leading-7">
                  "{item.comment}"
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}