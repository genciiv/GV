function Services() {
  const services = [
    {
      title: "Krijim Website",
      desc: "Website moderne dhe profesionale për biznese.",
    },
    {
      title: "E-Commerce",
      desc: "Dyqane online me pagesa dhe menaxhim produktesh.",
    },
    {
      title: "SEO Optimizim",
      desc: "Optimizim për Google dhe shpejtësi maksimale.",
    },
    {
      title: "Menaxhim Social Media",
      desc: "Rritje e prezencës dhe reklamim profesional.",
    },
    {
      title: "UI/UX Design",
      desc: "Dizajn modern dhe eksperiencë perfekte përdorimi.",
    },
    {
      title: "Mirëmbajtje Website",
      desc: "Update, siguri dhe suport teknik.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Shërbimet Tona</h2>

          <p>Zgjidhje moderne për biznesin tuaj.</p>
        </div>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
