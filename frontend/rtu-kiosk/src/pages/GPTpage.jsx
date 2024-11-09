import React from "react";
import TypeWriter from "../components/TypeWriter";
import SearchBar from "../components/SearchBar";
const GPTpage = () => {
  return (
    <>
      <div className="flex items-center justify-center font-lex">
        <div className="flex items-center justify-center w-[790px] h-20 border p-0">
          <TypeWriter text="What can I help with?" font="font-lex" />
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <SearchBar placeholder="Message ChatGPT" />
      </div>
    </>
  );
};

export default GPTpage;
