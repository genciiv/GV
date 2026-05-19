import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";

import "./styles/home.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Process />
        <Portfolio />
        <Pricing />
        <FAQ />
        <ContactForm />
        <Contact />
      </main>

      <Footer />
      <a
      href="https://wa.me/355692291041"
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>
    </>
  );
}

export default App;
