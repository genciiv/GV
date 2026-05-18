function Testimonials() {
  const reviews = [
    {
      name: "Biznes Lokal",
      text: "Na krijuan një website modern, të shpejtë dhe shumë profesional.",
    },
    {
      name: "Dyqan Online",
      text: "Faqja u bë shumë e pastër dhe klientët e kanë më të lehtë të porosisin.",
    },
    {
      name: "Startup",
      text: "Komunikim i mirë, dizajn i bukur dhe rezultat shumë serioz.",
    },
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
            <div className="testimonial-card" key={index}>
              <div className="stars">★★★★★</div>
              <p>"{item.text}"</p>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
