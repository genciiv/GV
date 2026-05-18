import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";

import "./styles/home.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
