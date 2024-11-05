import React from "react";

const TypeWriter = ({ text, font, fontSize = "7xl" }) => {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap animate-type text-${fontSize} ${font}`}
      style={{ maxWidth: `${text.length}ch` }}
    >
      <span className="animate-type">{text}</span>
      <span className="border-r-2 border-black animate-blink">&nbsp;</span>
    </div>
  );
};

export default TypeWriter;
