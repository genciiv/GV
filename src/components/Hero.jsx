import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-badge">
            🚀 Web Design • Branding • Marketing
          </span>

          <h1>
            Ndërtojmë <span>website premium</span> për
            biznese moderne
          </h1>

          <p>
            Krijojmë website profesionale, moderne dhe të
            optimizuara për performancë, SEO dhe konvertime.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Fillo Projektin
            </a>

            <a href="#portfolio" className="secondary-btn">
              Shiko Portfolio
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>50+</strong>
              <span>Projekte</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Responsive</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-card">
            <img
              src="/projects/project5.png"
              alt="preview"
            />
          </div>

          <div className="floating-card one">
            ⚡ SEO Optimized
          </div>

          <div className="floating-card two">
            🔥 Premium Design
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;