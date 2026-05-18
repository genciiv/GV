function FAQ() {
  const faqs = [
    {
      q: "Sa kohë duhet për krijimin e website?",
      a: "Zakonisht 3-10 ditë në varësi të projektit.",
    },
    {
      q: "A funksionon në telefon?",
      a: "Po, çdo website është plotësisht responsive.",
    },
    {
      q: "A ndihmoni me domain dhe hosting?",
      a: "Po, ne merremi me konfigurimin komplet.",
    },
    {
      q: "A mund ta menaxhoj vetë website?",
      a: "Po, faqja ndërtohet që të jetë e lehtë për përdorim.",
    },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="section-title">
          <h2>Pyetje të shpeshta</h2>
          <p>Përgjigje për pyetjet që marrim më shpesh.</p>
        </div>

        <div className="faq-grid">
          {faqs.map((item, index) => (
            <div className="faq-card" key={index}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
