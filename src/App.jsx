import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-amber-50">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;