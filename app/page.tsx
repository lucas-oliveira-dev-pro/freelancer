import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import BudgetForm from "./components/BudgetForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <Technologies />

        <section id="orcamento" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <BudgetForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}