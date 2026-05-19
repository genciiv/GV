import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await client.responses.create({
      model: "llama-3.3-70b-versatile",
      instructions:
        "Je asistenti virtual i një agjencie web në Shqipëri. Përgjigju shkurt, profesionalisht dhe drejto klientin te shërbimet: krijim website, e-commerce, SEO, marketing, mirëmbajtje. Mos premto gjëra të pavërteta.",
      input: message,
    });

    res.json({ reply: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "Ndodhi një problem. Ju lutem provoni përsëri ose na kontaktoni në WhatsApp.",
    });
  }
});

app.listen(5000, () => {
  console.log("AI server running on http://localhost:5000");
});