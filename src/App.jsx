import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ui/ThemeToggle";
import LoadingScreen from "./components/ui/LoadingScreen";
import MouseFollower from "./components/ui/MouseFollower";
import AnimatedGrid from "./components/ui/AnimatedGrid";
import ChatBot from "./components/ui/ChatBot";

import "./styles/home.css";

function App() {
  return (
    <>
    <LoadingScreen />
    <AnimatedGrid />
    <MouseFollower />
    <ChatBot />

      <Navbar />

      <ThemeToggle />
      
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
