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
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
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

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Ndodhi një problem me AI assistant. Ju lutem provoni përsëri.",
        },
      ]);
    } finally {
      setLoading(false);
    }
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

            {loading && (
              <div className="chat-message bot">
                Duke menduar...
              </div>
            )}
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