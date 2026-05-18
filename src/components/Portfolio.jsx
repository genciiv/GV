function Portfolio() {
  const projects = [
    {
      title: "Website Restoranti",
      category: "Restaurant Website",
    },
    {
      title: "Dyqan Online",
      category: "E-Commerce",
    },
    {
      title: "Website për Klinikë",
      category: "Medical Website",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Projektet Tona</h2>

          <p>Disa nga projektet moderne që kemi realizuar.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((item, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-image"></div>

              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
