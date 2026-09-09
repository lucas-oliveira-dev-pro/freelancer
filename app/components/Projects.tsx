import Image from "next/image";

type Project = {
  title: string;
  screenNumbers: number;
  description: string;
  technologies: string[];
  images: string[];
  category: string;
};

const projects: Project[] = [
  {
    title: "Camarote da Brahma",
    screenNumbers: 1,
    category: "LANDING PAGE",
    description:
      "Landing-page para camarote da Brahma.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [
      "/projects/ct1.png",
      "/projects/ct2.png",
      "/projects/ct3.png",
    ],
  },
  {
    title: "Solicitação de guincho",
    screenNumbers: 26,
    category: "WEB APP",
    description:
      "Plataforma para solicitação de guincho.",
    technologies: [ "React", "Node.js"],
    images: [
      "/projects/gt1.png",
      "/projects/gt2.png",
      "/projects/gt3.png",
      "/projects/gt4.png",
    ],
  },
  {
    title: "Gerenciamento de ingressos para eventos",
    screenNumbers: 46,
    category: "WEB APP",
    description:
      "Aplicativo web utilizado por múltiplos eventos.",
    technologies: ["React", "Node.js"],
    images: [
      "/projects/cat1.jpg",
      "/projects/cat2.jpg",
    ],
  },
  {
    title: "Entrega de kits para eventos",
    screenNumbers: 32,
    category: "WEB APP",
    description:
      "Aplicativo web utilizado para entrega de kits para múltiplos eventos.",
    technologies: ["React", "Node.js"],
    images: [
      "/projects/kat1.jpg",
      "/projects/kat2.jpg",
      "/projects/kat3.jpg",
    ],
  },
  {
    title: "Gerencimento de estoque",
    screenNumbers: 20,
    category: "WEB APP",
    description:
      "Aplicativo web para gerenciamento de estoque para restaurante com 13 filiais.",
    technologies: ["React", "Node.js"],
    images: [
      "/projects/bt1.png",
      "/projects/bt2.png",
      "/projects/bt3.png",
      "/projects/bt4.png",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="overflow-hidden px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="neo-small mb-5 inline-block rotate-[-2deg] bg-[#FFD84D] px-3 py-2 text-sm font-black">
              PORTFÓLIO
            </div>

            <h2 className="text-5xl font-black leading-none tracking-tighter sm:text-6xl md:text-7xl">
              PROJETOS
            </h2>
          </div>

          <p className="max-w-md text-base font-bold leading-relaxed sm:text-lg md:text-right">
            Alguns dos sites, aplicativos e landing-pages que desenvolvi.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, projectIndex) => (
            <article
              key={project.title}
              className="neo overflow-hidden bg-white"
            >
              {/* PROJECT TOP */}
              <div className="border-b-4 border-black bg-[#E4A88F] p-5 sm:p-7 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  
                  <div>
                    <span className="mb-3 block font-mono text-sm font-black">
                      PROJETO 0{projectIndex + 1}
                    </span>

                    <h3 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
                      {project.title}
                    </h3>
                  </div>

                  <span className="neo-small self-start bg-white px-3 py-2 text-xs font-black">
                    {project.category}
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-base font-bold leading-relaxed sm:text-lg">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border-3 border-black bg-black px-3 py-2 text-xs font-black text-white sm:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* MOBILE SCREENSHOTS */}
              <div className="bg-[#F7F3ED] p-5 sm:p-7 md:p-10">
                
                <div className="mb-5 flex items-center justify-between">
                  { project.screenNumbers > 1 && (<p className="font-mono text-xs font-black uppercase sm:text-sm">
                    🚀 +{project.screenNumbers}  telas desenvolvidas
                  </p>)}

                  <p className="font-mono text-xs font-black sm:hidden">
                    ← DESLIZE →
                  </p>
                </div>

                {/* GALLERY */}
                <div
                  className="
                    flex
                    gap-5
                    overflow-x-auto
                    pb-5
                    snap-x
                    snap-mandatory
                    scrollbar-none
                    md:grid
                    md:grid-cols-3
                    md:overflow-visible
                    md:pb-0
                  "
                >
                  {project.images.map((image, imageIndex) => (
                    <div
                      key={image}
                      className="
                        group
                        relative
                        w-[190px]
                        flex-none
                        snap-start
                        sm:w-[220px]
                        md:w-full
                      "
                    >
                      {/* PHONE FRAME */}
                      <div
                        className="
                          neo-small
                          relative
                          overflow-hidden
                          bg-black
                          p-2
                          transition-transform
                          duration-200
                          group-hover:-translate-y-2
                        "
                      >
                        {/* SCREEN */}
                        <div className="relative overflow-hidden border-2 border-black bg-white">
                          <Image
                            src={image}
                            alt={`${project.title} - tela ${imageIndex + 1}`}
                            width={390}
                            height={844}
                            className="h-auto w-full object-cover"
                            sizes="
                              (max-width: 640px) 190px,
                              (max-width: 768px) 220px,
                              30vw
                            "
                          />
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center md:mt-20">
          <a
            href="#orcamento"
            className="neo-button bg-black px-7 py-4 text-center text-base font-black text-white sm:px-10 sm:text-lg"
          >
            FAÇA UM ORÇAMENTO DA SUA LANDIG PAGE, SITE OU APP →
          </a>
        </div>
      </div>
    </section>
  );
}