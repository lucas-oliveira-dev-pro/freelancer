export default function Header() {
  return (
    <header className="border-b-4 border-black bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a
          href="#inicio"
          className="text-2xl font-black tracking-tighter"
        >
          LUCAS.DEV
        </a>

        <nav className="hidden gap-8 font-bold md:flex">
          <a href="#projetos" className="hover:underline">
            Projetos
          </a>

          <a href="#tecnologias" className="hover:underline">
            Tecnologias
          </a>

          <a href="#orcamento" className="hover:underline">
            Orçamento
          </a>
        </nav>

        <a
          href="#orcamento"
          className="neo-small bg-[#FFD84D] px-4 py-2 font-black"
        >
          ORÇAMENTO
        </a>
      </div>
    </header>
  );
}