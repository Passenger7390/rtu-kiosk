import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ placeholder = "Search...", width = "w-1/2", onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return; // trims the string to prevent white spaces in the search bar
    onSend(input); // sends the text in the text outside the component
    setInput(""); // resets the text in the search bar
  };

  const handleKeyDown = (event) => {
    // function to handle enter key as a submit button
    if (event.key === "Enter") {
      handleSend();
    }
  };
  return (
    <>
      <div
        className={`flex align-center border rounded-full h-16 ${width} bg-white px-1 py-1 border-gray-500`}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // updates the input value in the state with the value in the search bar
          onKeyDown={handleKeyDown}
          className="focus:outline-none ml-4 w-[890px] font-lex text-xl flex-1"
          placeholder={placeholder}
        />
        <button
          onClick={handleSend}
          className="flex items-center justify-center w-14 rounded-2xl"
        >
          <IoSearchOutline className="w-28 h-28 p-2" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
