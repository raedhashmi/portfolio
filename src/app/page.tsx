import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Infra from "../../components/Infra";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        <Hero />
        <Projects />
        <Infra />
      </main>

      <Footer />
    </>
  );
}
