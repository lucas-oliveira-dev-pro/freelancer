export default function Technologies() {
  const technologies = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "REST API",
    "PostgreSQL",
    "Supabase",
    "Git",
  ];

  return (
    <section
      id="tecnologias"
      className="border-y-4 border-black bg-black px-5 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-black tracking-tighter md:text-6xl">
          TECNOLOGIAS
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="border-4 border-white px-5 py-3 text-lg font-black"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}