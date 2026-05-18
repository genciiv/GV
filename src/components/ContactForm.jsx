function ContactForm() {
  return (
    <section className="contact-form-section" id="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <div className="section-title">
            <h2>Na shkruaj</h2>
            <p>Plotëso formën dhe ne do të të kontaktojmë shumë shpejt.</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Emri juaj" />
            <input type="email" placeholder="Email-i juaj" />
            <input type="text" placeholder="Subjekti" />
            <textarea rows="6" placeholder="Mesazhi juaj"></textarea>

            <button type="submit">Dërgo Mesazhin</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
