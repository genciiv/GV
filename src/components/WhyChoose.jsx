function WhyChoose() {
  const items = [
    {
      title: "Dizajn Premium",
      desc: "Website moderne dhe elegante që krijojnë besim.",
    },
    {
      title: "Shpejtësi Maksimale",
      desc: "Faqe super të shpejta dhe të optimizuara.",
    },
    {
      title: "SEO Friendly",
      desc: "Optimizim për Google dhe rezultate më të mira.",
    },
    {
      title: "Responsive",
      desc: "Perfekte në telefon, tablet dhe desktop.",
    },
  ];

  return (
    <section className="why">
      <div className="container">
        <div className="section-title">
          <h2>Pse të na zgjidhni ne?</h2>

          <p>
            Ne krijojmë eksperienca moderne digitale që ndihmojnë biznesin tuaj
            të rritet.
          </p>
        </div>

        <div className="why-grid">
          {items.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-number">0{index + 1}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
