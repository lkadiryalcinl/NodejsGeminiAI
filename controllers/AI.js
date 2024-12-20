require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.generateContent = async(req,res) => {
    const prompt = req.body.prompt;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    res.status(200).json(result.response.text());
}