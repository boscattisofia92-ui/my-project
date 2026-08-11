import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaCoffee,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[#3b2116] text-[#f3dfc5] py-12"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaCoffee className="text-3xl text-[#d6b28a]" />

            <h2 className="text-2xl font-bold text-[#f3dfc5]">
              Café Boscatti
            </h2>
          </div>

          <p className="text-[#d8bfa5]">
            Servindo cafés especiais e momentos inesquecíveis todos os dias.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#f3dfc5]">
            Navegação
          </h3>

          <ul className="space-y-2">
            <li>
              <a
                href="#inicio"
                className="text-[#d8bfa5] hover:text-[#f0cfae] transition"
              >
                Início
              </a>
            </li>

            <li>
              <a
                href="#beneficios"
                className="text-[#d8bfa5] hover:text-[#f0cfae] transition"
              >
                Benefícios
              </a>
            </li>

            <li>
              <a
                href="#produtos"
                className="text-[#d8bfa5] hover:text-[#f0cfae] transition"
              >
                Produtos
              </a>
            </li>

            <li>
              <a
                href="#contato"
                className="text-[#d8bfa5] hover:text-[#f0cfae] transition"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#f3dfc5]">
            Redes Sociais
          </h3>

          <div className="flex gap-5 text-3xl">

            <a
              href="#"
              className="text-[#d8bfa5] hover:text-[#f0cfae] transition"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="text-[#d8bfa5] hover:text-[#f0cfae] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="text-[#d8bfa5] hover:text-[#f0cfae] transition"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-[#674333] mt-10 pt-6 text-center text-[#c9aa8d]">
        © 2026 Café Boscatti• Todos os direitos reservados.
      </div>
    </footer>
  );
}