import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const API_KEY = process.env.OPENAI_API_KEY;
const systemMessage = {
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
};

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  let apiMessages = messages.map((messageObject) => {
    let role = "";
    if (messageObject.sender === "ChatGPT") {
      role = "assistant";
    } else {
      role = "user";
    }
    return { role: role, content: messageObject.message };
  });

  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      systemMessage,
      ...apiMessages
    ]
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});