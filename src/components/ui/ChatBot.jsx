import { useState } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Përshëndetje! Si mund t’ju ndihmojmë me website-in tuaj?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      from: "user",
      text: input,
    };

    const botMessage = {
      from: "bot",
      text: "Faleminderit! Na lini kontaktin ose plotësoni formën dhe do t’ju përgjigjemi shumë shpejt.",
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
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
            <span>Online</span>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                className={`chat-message ${msg.from === "user" ? "user" : "bot"}`}
                key={index}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Shkruaj mesazhin..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit">Dërgo</button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBot;