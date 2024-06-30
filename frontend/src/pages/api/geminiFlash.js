const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");


export default async function handler(req, res) {
  const { prompt } = req.body;

  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const parts = [
    { text: `input: ${prompt}` },
    { text: "output: " },
  ];
  
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });
    res.status(200).json({ message: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate content' });
  }
}