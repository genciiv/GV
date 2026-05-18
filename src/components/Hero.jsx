function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-left">
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
        </div>

        <div className="hero-right">
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
