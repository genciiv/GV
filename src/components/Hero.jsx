import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
      <div className="container hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">WEB AGENCY</span>

          <h1>
            Ndërtojmë Website <span>Moderne</span>
          </h1>

          <p>
            Krijojmë faqe profesionale, të shpejta dhe të optimizuara për
            biznesin tuaj. Dizajn elegant, performancë maksimale dhe prezencë
            serioze online.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-btn">
              Fillo Projektin
            </a>
            <a href="#portfolio" className="hero-outline">
              Shiko Projektet
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mockup-card">
            <div className="mockup-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mockup-content">
              <h3>Digital Experience</h3>
              <p>Website modern që sjell rezultate.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
