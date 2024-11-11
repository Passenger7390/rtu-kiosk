import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const Chat = ({ onConversationStart }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSend = async (input) => {
    if (onConversationStart) {
      onConversationStart();
    }

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("YOUR_AI_API_ENDPOINT", {
        message: input,
      });

      const aiMessage = { sender: "ai", text: response.data.answer };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

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
            {msg.text}
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
