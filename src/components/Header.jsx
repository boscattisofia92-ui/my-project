import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex flex-col no-underline border-0 outline-none"
          >
            <span className="text-2xl font-bold tracking-[0.15em] text-white">
              BOCATTI
            </span>

            <span className="text-[10px] tracking-[0.45em] text-[#E3C7AD]">
              CAFÉ
            </span>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">

            <a
              href="#inicio"
              className="text-white font-medium no-underline border-0 outline-none hover:text-[#E3C7AD] transition"
            >
              Início
            </a>

            <a
              href="#beneficios"
              className="text-white font-medium no-underline border-0 outline-none hover:text-[#E3C7AD] transition"
            >
              Sobre
            </a>

            <a
              href="#produtos"
              className="text-white font-medium no-underline border-0 outline-none hover:text-[#E3C7AD] transition"
            >
              Cardápio
            </a>

            <a
              href="#depoimentos"
              className="text-white font-medium no-underline border-0 outline-none hover:text-[#E3C7AD] transition"
            >
              Clientes
            </a>

            {/* Fale conosco - somente texto */}
            <a
              href="#contato"
              className="text-white font-medium no-underline border-0 outline-none bg-transparent p-0 m-0 hover:text-[#E3C7AD] transition"
            >
              Fale conosco
            </a>

          </nav>

          {/* Botão Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl border-0 outline-none bg-transparent"
            aria-label="Abrir menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="md:hidden mt-5 bg-[#35251F]/95 p-6 shadow-xl">

            <div className="flex flex-col gap-5">

              <a
                href="#inicio"
                onClick={() => setMenuOpen(false)}
                className="text-white font-medium no-underline border-0 outline-none hover:text-[#E3C7AD] transition"
              >
                Início
              </a>

              <a
                href="#beneficios"
                onClick={() => setMenuOpen(false)}
                className="text-white font-medium no-underline border-0 outline-none hover:text-[#E3C7AD] transition"
              >
                Sobre
              </a>

              <a
                href="#produtos"
                onClick={() => setMenuOpen(false)}
                className="text-white font-medium no-underline border-0 outline-none hover:text-[#E3C7AD] transition"
              >
                Cardápio
              </a>

              <a
                href="#depoimentos"
                onClick={() => setMenuOpen(false)}
                className="text-white font-medium no-underline border-0 outline-none hover:text-[#E3C7AD] transition"
              >
                Clientes
              </a>

              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="text-white font-medium no-underline border-0 outline-none bg-transparent p-0 m-0 hover:text-[#E3C7AD] transition"
              >
                Fale conosco
              </a>

            </div>

          </nav>
        )}

      </div>
    </header>
  );
}