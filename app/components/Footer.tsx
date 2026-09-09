export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-[#E4A88F] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="text-2xl font-black">LUCAS.DEV</p>
          <p className="font-bold">
            Desenvolvedor Full-Stack
          </p>
        </div>

        <p className="font-bold">
          © {new Date().getFullYear()} Lucas Oliveira
        </p>
      </div>
    </footer>
  );
}