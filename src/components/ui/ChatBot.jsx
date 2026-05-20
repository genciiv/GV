import { useState } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Përshëndetje! Si mund t’ju ndihmoj me website-in tuaj?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const getBotReply = (message) => {
    const text = message.toLowerCase();

    if (
      text.includes("cmim") ||
      text.includes("çmim") ||
      text.includes("kushton") ||
      text.includes("paket")
    ) {
      return "Çmimet fillojnë nga 250€ për një faqe prezantuese. Për website më të plotë ose e-commerce, mund të kërkosh ofertë te forma e kontaktit.";
    }

    if (
      text.includes("ecommerce") ||
      text.includes("dyqan") ||
      text.includes("online") ||
      text.includes("produkte")
    ) {
      return "Po, mund të krijoj website e-commerce me produkte, kategori, porosi, panel administrimi dhe integrim me WhatsApp ose pagesa online.";
    }

    if (
      text.includes("seo") ||
      text.includes("google") ||
      text.includes("rendit")
    ) {
      return "Website-et optimizohen për SEO bazik, shpejtësi, strukturë të pastër dhe indeksim më të mirë në Google.";
    }

    if (
      text.includes("kontakt") ||
      text.includes("whatsapp") ||
      text.includes("telefon") ||
      text.includes("email")
    ) {
      return "Mund të më kontaktosh direkt nga forma e kontaktit ose nga butoni WhatsApp në faqe.";
    }

    if (
      text.includes("sa kohe") ||
      text.includes("koh") ||
      text.includes("dite") ||
      text.includes("ditë")
    ) {
      return "Një website i thjeshtë zakonisht realizohet për 3–5 ditë pune. Projektet më të avancuara kërkojnë 7–20 ditë, në varësi të kërkesave.";
    }

    return "Faleminderit! Për një përgjigje më të saktë, më trego çfarë lloj website të duhet: prezantues, portfolio, e-commerce apo website biznesi?";
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      from: "user",
      text: input,
    };

    const currentInput = input;

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botMessage = {
        from: "bot",
        text: getBotReply(currentInput),
      };

      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 700);
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        {open ? "×" : "AI"}
      </button>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <strong>AI Assistant</strong>
            <span>{loading ? "Duke shkruar..." : "Online"}</span>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                className={`chat-message ${
                  msg.from === "user" ? "user" : "bot"
                }`}
                key={index}
              >
                {msg.text}
              </div>
            ))}

            {loading && <div className="chat-message bot">Duke menduar...</div>}
          </div>

          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Shkruaj mesazhin..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? "..." : "Dërgo"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBot;