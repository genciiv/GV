function Stats() {
  const stats = [
    {
      number: "50+",
      text: "Projekte të realizuara",
    },
    {
      number: "100%",
      text: "Responsive Design",
    },
    {
      number: "24/7",
      text: "Suport teknik",
    },
    {
      number: "5★",
      text: "Vlerësime klientësh",
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h2>{item.number}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
