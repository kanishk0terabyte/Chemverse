require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

console.log(
  "API KEY loaded:",
  process.env.OPENAI_API_KEY ? "YES" : "NO"
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* ================= CHAT API ================= */
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages missing or invalid" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("🔥 CHAT ERROR:", err.message);
    res.status(500).json({ error: "Chat generation failed" });
  }
});

/* ================= THEORY API ================= */
app.post("/api/theory", async (req, res) => {
  try {
    const { classId, experiment } = req.body;

    if (!classId || !experiment) {
      return res.status(400).json({ error: "classId or experiment missing" });
    }

    const prompt = `
You are an NCERT Chemistry teacher.

Generate detailed theory for:
Class ${classId} Chemistry Experiment: "${experiment}"

Format strictly as:
1. Aim
2. Theory
3. Materials Required
4. Procedure
5. Observations
6. Conclusion
7. Precautions

Use simple English.
NCERT level.
No emojis.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    });

    res.json({
      content: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("🔥 THEORY ERROR:", err.message);
    res.status(500).json({ error: "Theory generation failed" });
  }
});

/* ================= SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});