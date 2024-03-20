import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Faq from "./components/Faq";
import OtherProducts from "./components/OtherProducts";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="bg-gray-50">
      <section className="pt-10 max-w-[80rem] mx-auto">
        <NavBar />
        <Hero />
        <Why />
        <Faq />
        <OtherProducts />
        <Download />
        <Footer />
      </section>
    </section>
  );
}

export default App;
