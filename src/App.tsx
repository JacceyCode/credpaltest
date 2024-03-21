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
      <NavBar />
      <Hero />
      <Why />
      <Faq />
      <OtherProducts />
      <Download />
      <Footer />
    </section>
  );
}

export default App;
