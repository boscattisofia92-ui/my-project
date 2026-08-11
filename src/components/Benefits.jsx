export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20220729/original/pngtree-seamless-coffee-pattern-for-banners-picture-image_1876100.jpg')",
      }}
    >
      {/* Camada mais clara sobre a imagem */}
      <div className="absolute inset-0 bg-[#3B2418]/45"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="mb-12">

          <p className="text-sm uppercase tracking-[0.3em] text-[#F4D8BD] font-bold mb-3">
            Por que escolher o Boscatti?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Feito para você
          </h2>

          <p className="mt-5 text-[#FFF4E9] max-w-xl leading-7 text-lg">
            No Boscatti Café, cada detalhe é pensado para transformar
            uma simples pausa em um momento especial.
          </p>

        </div>

        {/* Benefícios */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Café especial */}
          <div className="bg-[#E3C7AD] p-8 min-h-[260px] rounded-2xl shadow-lg">

            <span className="text-sm font-bold text-[#70452F]">
              
            </span>

            <h3 className="text-2xl font-bold text-[#35251F] mt-12">
            ✴︎  Café especial
            </h3>

            <p className="mt-4 text-[#5A4538] leading-7">
              Grãos selecionados para garantir um café
              saboroso, fresco e cheio de aroma.
            </p>

          </div>

          {/* Ingredientes frescos */}
          <div className="bg-[#D6B79A] p-8 min-h-[260px] rounded-2xl shadow-lg">

            <span className="text-sm font-bold text-[#603D2A]">
              
            </span>

            <h3 className="text-2xl font-bold text-[#35251F] mt-12">
             ✴︎ Ingredientes frescos
            </h3>

            <p className="mt-4 text-[#513D31] leading-7">
              Ingredientes escolhidos com cuidado para
              oferecer qualidade em cada preparo.
            </p>

          </div>

          {/* Ambiente agradável */}
          <div className="bg-[#C5A184] p-8 min-h-[260px] rounded-2xl shadow-lg">

            <span className="text-sm font-bold text-[#4F3021]">
              
            </span>

            <h3 className="text-2xl font-bold text-[#35251F] mt-12">
              ✴︎ Ambiente agradável
            </h3>

            <p className="mt-4 text-[#49372C] leading-7">
              Um espaço tranquilo e aconchegante para
              conversar, estudar ou relaxar.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}