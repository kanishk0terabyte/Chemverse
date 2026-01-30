import fetch from "node-fetch";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function getTheoryFromGemini(experimentName, className) {
  const prompt = `
You are a CBSE chemistry teacher.

Explain the experiment:
"${experimentName}" for ${className} students.

Return response strictly in JSON with keys:
- aim
- theory
- procedure
- precautions
- image_keywords (array of search keywords)

Keep explanation simple and exam-oriented.
`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = await res.json();
  const text = data.candidates[0].content.parts[0].text;

  return JSON.parse(text);
}