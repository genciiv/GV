import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Sa kohë duhet për krijimin e website?",
      a: "Zakonisht 3-10 ditë në varësi të projektit dhe materialeve që disponon biznesi.",
    },
    {
      q: "A funksionon në telefon?",
      a: "Po, çdo website ndërtohet responsive për telefon, tablet dhe desktop.",
    },
    {
      q: "A ndihmoni me domain dhe hosting?",
      a: "Po, ne ndihmojmë me domain, hosting, email profesional dhe konfigurimin teknik.",
    },
    {
      q: "A mund ta menaxhoj vetë website?",
      a: "Po, nëse projekti kërkon panel administrimi, mund të menaxhosh vetë përmbajtjen.",
    },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="section-title">
          <h2>Pyetje të shpeshta</h2>
          <p>Përgjigje për pyetjet që marrim më shpesh.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span>{item.q}</span>
                <strong>{openIndex === index ? "−" : "+"}</strong>
              </button>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;