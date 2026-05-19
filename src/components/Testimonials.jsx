import { motion } from "framer-motion";

function Testimonials() {
  const reviews = [
    { name: "Biznes Lokal", text: "Na krijuan një website modern, të shpejtë dhe shumë profesional." },
    { name: "Dyqan Online", text: "Faqja u bë shumë e pastër dhe klientët e kanë më të lehtë të porosisin." },
    { name: "Startup", text: "Komunikim i mirë, dizajn i bukur dhe rezultat shumë serioz." },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Çfarë thonë klientët?</h2>
          <p>Besimi ndërtohet me rezultate reale.</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((item, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stars">★★★★★</div>
              <p>"{item.text}"</p>
              <h3>{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;