import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";

const Chat = ({ onConversationStart }) => {
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT!",
      sender: "ChatGPT",
      direction: 'ingoing'
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    const response = await fetch('http://localhost:4000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages: chatMessages })
    });

    const data = await response.json();
    setMessages([...chatMessages, {
      message: data.choices[0].message.content,
      sender: "ChatGPT"
    }]);
    setIsTyping(false);
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative flex flex-col w-full rounded-lg justify-center items-center">
      <div className="overflow-y-auto mb-2 flex-1 w-full justify-center px-56 py-4 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-500">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex p-2 mb-2 rounded-3xl ${
              msg.sender === "user"
                ? "bg-customGold justify-end self-end max-w-[75%] ml-auto px-4 py-4 min-w-[1%] w-[fit-content]"
                : "bg-blue-500 justify-start self-start max-w-[75%] mr-auto px-4 py-4 min-w-[1%] w-[fit-content]"
            }`}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div
        className={` ${
          onConversationStart && "p-2 flex justify-center w-[78%]"
        }`}
      >
        <SearchBar
          onSend={handleSend}
          width="w-full"
          placeholder="Message ChatGPT"
        />
      </div>
    </div>
  );
};

export default Chat;
