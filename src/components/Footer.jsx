import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaCoffee,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contato" className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaCoffee className="text-3xl text-amber-300" />
            <h2 className="text-2xl font-bold">
              Café Aroma
            </h2>
          </div>

          <p className="text-amber-100">
            Servindo cafés especiais e momentos inesquecíveis todos os dias.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Navegação
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#inicio" className="hover:text-amber-300 transition">
                Início
              </a>
            </li>

            <li>
              <a href="#beneficios" className="hover:text-amber-300 transition">
                Benefícios
              </a>
            </li>

            <li>
              <a href="#produtos" className="hover:text-amber-300 transition">
                Produtos
              </a>
            </li>

            <li>
              <a href="#contato" className="hover:text-amber-300 transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Redes Sociais
          </h3>

          <div className="flex gap-5 text-3xl">

            <a href="#" className="hover:text-white transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-white transition">
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-amber-700 mt-10 pt-6 text-center text-amber-200">
        © 2026 Café Aroma • Todos os direitos reservados.
      </div>
    </footer>
  );
}