import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grid-bg overflow-hidden px-5 py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">

        {/* FOTO — PRIMEIRO NO MOBILE */}
        <div className="order-1 mx-auto w-full max-w-[320px] sm:max-w-[360px] md:order-2 md:max-w-md">
          <div className="neo relative">

            {/* Badge */}
            <div className="absolute right-3 top-3 z-10 border-4 border-black bg-[#8EC5FF] px-3 py-2 text-xs font-black sm:right-5 sm:top-5 sm:text-sm">
              Lucas Oliveira
            </div>

            {/* Foto */}
            <div className="overflow-hidden border-4 border-black bg-[#E4A88F]">
              <Image
                src="/perfil.jpg"
                alt="Lucas Oliveira - Desenvolvedor Full-Stack"
                width={400}
                height={400}
                priority
                className="block h-auto w-full"
              />
            </div>
          </div>

        </div>

        {/* CONTEÚDO */}
        <div className="order-2 text-center md:order-1 md:text-left">

          <div className="neo-small mb-6 inline-block bg-[#A7E8BD] px-3 py-2 text-xs font-black sm:text-sm">
            DISPONÍVEL PARA PROJETOS
          </div>

          <h1 className="text-5xl font-black leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl">
            TRANSFORMO
            <br />
            IDEIAS EM
            <br />

            <span className="mt-2 inline-block bg-[#E4A88F] px-2 py-1 sm:px-3">
              SITES E
              <br className="sm:hidden" /> APLICATIVOS.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base font-bold leading-relaxed sm:text-lg md:mx-0 md:text-xl">
            Desenvolvedor especializado em criar landing-pages, sites e aplicativos personalizados.
          </p>

          {/* BOTÕES */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#orcamento"
              className="neo-button bg-black px-6 py-4 text-base font-black text-white sm:text-lg"
            >
              RECEBER ORÇAMENTO →
            </a>

            <a
              href="#projetos"
              className="neo-button bg-white px-6 py-4 text-base font-black sm:text-lg"
            >
              VER PROJETOS
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}