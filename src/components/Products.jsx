export default function Products() {
  const products = [
    {
      name: "Café Expresso",
      description: "Café intenso e aromático, preparado na hora.",
      image:
        "https://files.agro20.com.br/uploads/2020/01/Caf%C3%A9-expresso-1.jpg",
    },
    {
      name: "Cappuccino",
      description: "Mistura perfeita de café, leite vaporizado e espuma.",
      image:
        "https://media.istockphoto.com/id/2168005130/pt/foto/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=PtDFIR2rbcYaWLfXbSg6kTkaHqgeHbPl7iv00_OqSf8=",
    },
    {
      name: "Mocha",
      description: "Combinação deliciosa de café, chocolate e leite.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFb0L4fEzzq8DA-o6f9_c2weHK2yrXlj5jnnOAeXKV_fiaggDDqpUt8KT&s=10",
    },
    {
      name: "Latte",
      description: "Café suave com bastante leite vaporizado.",
      image:
        "https://images.ctfassets.net/0e6jqcgsrcye/53teNK4AvvmFIkFLtEJSEx/4d3751dcad227c87b3cf6bda955b1649/Cafe_au_lait.jpg",
    },

    // COMIDAS E DOCES

    {
      name: "Cookie",
      description:
        "Cookie crocante por fora, macio por dentro e recheado com muito chocolate. Perfeito para acompanhar seu café.",
      image:
        "https://docesdangelo.com.br/site/wp-content/uploads/2024/10/9-1.png",
    },
    {
      name: "Bolo de Iorgute",
      description:
        "Bolo fofinho e saboroso, preparado para deixar seu café ainda mais especial. Uma opção deliciosa para qualquer hora!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6fKVDuXeSfc61QvHJW90Kidd5r1uuPCuYKJ5L75fQkL4OLFt_sWG24A&s=10",
    },
    {
      name: "Croissant",
      description:
        "Croissant dourado e crocante, recheado com queijo, presunto e folhas frescas. Leve e deliciosa para qualquer hora.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOh-XLqzRB-coy7fv8vRhrzTR_N-943sMEm2eOZJ2fsg&s=10",
    },
    {
      name: "Brownie",
      description:
        "Brownie de chocolate intenso, macio e úmido, recheado com uma camada de caramelo. Sobremesa irresistível.",
      image:
        "https://swiftbr.vteximg.com.br/arquivos/ids/211295/623140-brownie-de-chocolate-com-nozes-mr-bey_rec.jpg?v=638963252535530000",
    },
  ];

  return (
    <section
      id="produtos"
      className="py-24 bg-[#D6B99C]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="mb-12">

          <p className="text-sm uppercase tracking-[0.3em] text-[#70452F] mb-3">
            Nosso cardápio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#35251F]">
            Nossos Cafés e Delícias
          </h2>

          <p className="mt-4 text-[#5A4538] max-w-xl">
            Cafés especiais, doces e outras delícias preparados
            com muito carinho pelo Boscatti Café.
          </p>

        </div>

        {/* Produtos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] overflow-hidden border border-[#C5A88E] shadow-sm rounded-2xl"
            >

              {/* Imagem */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              {/* Informações */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#35251F]">
                  {product.name}
                </h3>

                <p className="text-[#6B5548] mt-3 leading-6">
                  {product.description}
                </p>

                <button
                  className="mt-6 w-full bg-[#5A392B] text-white py-3 rounded-xl hover:bg-[#704737] transition"
                >
                  Comprar
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}