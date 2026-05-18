function Process() {
  const steps = [
    {
      step: "01",
      title: "Analizojmë idenë",
      desc: "Kuptojmë biznesin, qëllimin dhe çfarë duhet të arrijë website.",
    },
    {
      step: "02",
      title: "Krijojmë dizajnin",
      desc: "Ndërtojmë pamje moderne, të pastër dhe profesionale.",
    },
    {
      step: "03",
      title: "Zhvillojmë faqen",
      desc: "E kthejmë dizajnin në website funksional dhe responsive.",
    },
    {
      step: "04",
      title: "Publikojmë online",
      desc: "E vendosim live me domain, hosting, siguri dhe optimizim.",
    },
  ];

  return (
    <section className="process">
      <div className="container">
        <div className="section-title">
          <h2>Si punojmë?</h2>
          <p>Një proces i qartë nga ideja deri te website online.</p>
        </div>

        <div className="process-grid">
          {steps.map((item, index) => (
            <div className="process-card" key={index}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
