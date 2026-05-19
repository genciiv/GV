import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "50+", text: "Projekte të realizuara" },
    { number: "100%", text: "Responsive Design" },
    { number: "24/7", text: "Suport teknik" },
    { number: "5★", text: "Vlerësime klientësh" },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              className="stat-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <h2>{item.number}</h2>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;