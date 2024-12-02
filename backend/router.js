import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.post('/chat', async (req, res) => {
  const API_KEY = process.env.OPENAI_API_KEY; // Replace with your actual API key
  const apiRequestBody = {
    model: 'gpt-4o-mini', // Specify the model to use
    messages: req.body.messages
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiRequestBody)
    });

    const data = await response.json();
    console.log(data);

    const chatMessages = []; // Initialize chatMessages as needed
    const newMessages = [...chatMessages, {
      message: data.choices[0].message.content,
      sender: 'ChatGPT'
    }];

    res.json({
      messages: newMessages,
      isTyping: false
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from OpenAI API');
  }
});

router.get('/chat', (req, res) => {
  res.json({ msg: 'Welcome to the ChatGPT API' });
});

export default router;