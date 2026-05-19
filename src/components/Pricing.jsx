import { motion } from "framer-motion";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "149€",
      desc: "Për biznese që duan prezencë online.",
      features: ["1-3 faqe", "Dizajn modern", "Responsive", "Kontakt form"],
    },
    {
      name: "Pro",
      price: "299€",
      desc: "Për faqe më serioze dhe profesionale.",
      features: ["Deri 6 faqe", "SEO bazik", "Animacione", "Optimizim shpejtësie"],
      popular: true,
    },
    {
      name: "Premium",
      price: "Me ofertë",
      desc: "Për e-commerce ose platforma custom.",
      features: ["Panel admin", "Database", "Pagesa online", "Suport teknik"],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Paketat tona</h2>
          <p>Zgjidh paketën që i përshtatet biznesit tënd.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && <span className="popular-badge">Më e zgjedhura</span>}

              <h3>{plan.name}</h3>
              <h2>{plan.price}</h2>
              <p>{plan.desc}</p>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <a href="#contact">Kërko Ofertë</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;