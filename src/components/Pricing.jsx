import { motion } from "framer-motion";

function Pricing() {
  const plans = [
    {
      name: "Start Web",
      price: "250€",
      desc: "Për biznese të vogla që duan prezencë online profesionale.",
      delivery: "3–5 ditë pune",
      features: [
        "1 faqe moderne landing page",
        "Dizajn responsive për telefon dhe desktop",
        "Lidhje me WhatsApp",
        "SEO bazik për Google",
        "Optimizim shpejtësie",
      ],
    },
    {
      name: "Pro Web",
      price: "450€",
      desc: "Për biznese që duan website më të plotë dhe më serioz.",
      delivery: "7–10 ditë pune",
      popular: true,
      features: [
        "Deri në 5 faqe",
        "Faqe: Home, Shërbime, Rreth Nesh, Kontakt",
        "Panel i thjeshtë për përmbajtje",
        "Animacione moderne",
        "Email/contact form profesional",
        "SEO dhe performancë e optimizuar",
      ],
    },
    {
      name: "Business Web",
      price: "750€+",
      desc: "Për biznese që kërkojnë sistem më të avancuar ose e-commerce.",
      delivery: "10–20 ditë pune",
      features: [
        "Faqe të shumta + strukturë custom",
        "Panel administrimi",
        "Database dhe menaxhim të dhënash",
        "E-commerce / porosi / rezervime",
        "Role përdoruesish dhe login",
        "Statistika, SEO dhe siguri",
        "Suport teknik pas publikimit",
      ],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Çmimet Tona</h2>
          <p>Zgjidh paketën që i përshtatet më mirë biznesit tënd.</p>
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
              {plan.popular && (
                <span className="popular-badge">★ Best Offer</span>
              )}

              <h3>{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>

              <h2>{plan.price}</h2>

              <div className="price-line"></div>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="delivery-box">
                📍 Dorëzimi: {plan.delivery}
              </div>

              <a href="#contact-form">Kërko Ofertë</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;