import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingCart,
  Search,
  Megaphone,
  Palette,
  ShieldCheck,
} from "lucide-react";

function Services() {
  const services = [
    { icon: <Monitor size={34} />, title: "Krijim Website", desc: "Website moderne dhe profesionale për biznese." },
    { icon: <ShoppingCart size={34} />, title: "E-Commerce", desc: "Dyqane online me pagesa dhe menaxhim produktesh." },
    { icon: <Search size={34} />, title: "SEO Optimizim", desc: "Optimizim për Google dhe shpejtësi maksimale." },
    { icon: <Megaphone size={34} />, title: "Menaxhim Social Media", desc: "Rritje e prezencës dhe reklamim profesional." },
    { icon: <Palette size={34} />, title: "UI/UX Design", desc: "Dizajn modern dhe eksperiencë perfekte përdorimi." },
    { icon: <ShieldCheck size={34} />, title: "Mirëmbajtje Website", desc: "Update, siguri dhe suport teknik." },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Shërbimet Tona</h2>
          <p>Zgjidhje moderne për biznesin tuaj.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;