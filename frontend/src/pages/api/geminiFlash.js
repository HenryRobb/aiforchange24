export default async function handler(req, res) {
  const prompt = req.headers['prompt'];

  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const apiKey = process.env.GEMINI_API_KEY;
  console.log(`don't look at this: `, apiKey);
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

  async function run() {
    const parts = [
      { text: `input: ${prompt}` },
      { text: "output: " },
    ];

    var result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });
    console.log(result.response.text());
  }

  run();
  res.status(200).json({ message: result.response.text() })
}