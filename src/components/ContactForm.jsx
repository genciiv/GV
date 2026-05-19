import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Mesazhi u dërgua me sukses!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Ndodhi një gabim!");
      });
  };

  return (
    <section className="contact-form-section" id="contact">
      <div className="container">
        <div className="form-wrapper">
          <div className="section-title">
            <h2>Na shkruaj</h2>

            <p>Plotëso formën dhe ne do të të kontaktojmë shumë shpejt.</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Emri juaj" required />

            <input
              type="email"
              name="email"
              placeholder="Email-i juaj"
              required
            />

            <input type="text" name="subject" placeholder="Subjekti" required />

            <textarea
              name="message"
              rows="6"
              placeholder="Mesazhi juaj"
              required
            ></textarea>

            <button type="submit">Dërgo Mesazhin</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
