import React, { useState } from "react";
import TypeWriter from "../components/TypeWriter";
import Chat from "../components/Chat";
const GPTpage = () => {
  const [showTypeWriter, setShowTypeWriter] = useState(true);

  const handleConversationStart = () => {
    setShowTypeWriter(false);
  };

  return (
    <>
      <div
        className={
          showTypeWriter
            ? "flex flex-col items-center justify-center font-lex pt-48"
            : "flex flex-col items-center justify-center font-lex"
        }
      >
        {showTypeWriter && (
          <div className="flex items-center justify-center w-[790px] h-20 pb-20">
            <TypeWriter text="What can I help with?" font="font-lex" />
          </div>
        )}
        <div
          className={
            showTypeWriter
              ? "flex justify-center w-full"
              : "w-full fixed flex justify-center bottom-0 top-48"
          }
        >
          <Chat onConversationStart={handleConversationStart} />
        </div>
      </div>
    </>
  );
};

export default GPTpage;
