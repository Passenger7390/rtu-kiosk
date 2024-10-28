import React from "react";
import logo from "./assets/images/rtulogo.png";
import cealogo from "./assets/images/cea-logo.png";
import openailogo from "./assets/images/white-openai-logo.png";
import queueicon from "./assets/images/white-queue.png";
import mapicon from "./assets/images/white-point.png";
import clipboardicon from "./assets/images/white-clipboard.png";

const Home = () => {
  return (
    <>
      {/* Logos */}
      <div className="font-lex">
        <div className="flex items-center justify-between p-2">
          <img
            className="w-80 p-10 object-cover inline-block"
            src={logo}
            alt="rtu logo"
          />
          <img
            className="w-80 p-10 object-cover inline-block"
            src={cealogo}
            alt="rtu logo"
          />
        </div>

        {/* Welcome message */}
        <p className="text-8xl align-middle text-center">
          WELCOME <span className="text-color-blue">RTU</span>
          <span className="text-color-gold">ISTA</span>
        </p>

        {/* Buttons */}
        <div>
          <div className="flex justify-center p-10">
            <button className="flex flex-col items-center justify-center border-8 m-10 w-60 rounded-3xl h-60 p-10 bg-white">
              <img src={openailogo} alt="openai-logo" className="p-0 w-full" />
              <span className="mt-auto">OpenAI</span>
            </button>
            <button className="flex flex-col items-center justify-center border-8 m-10 w-60 rounded-3xl h-60 p-10 bg-white">
              <img src={queueicon} alt="queue-icon" className="p-0 w-full" />
              <span className="mt-auto">Queue</span>
            </button>
            <button className="flex flex-col items-center justify-center border-8 m-10 w-60 rounded-3xl h-60 p-10 bg-white">
              <img src={mapicon} alt="map-icon" className="p-0 w-full" />
              <span className="mt-auto">Map</span>
            </button>
            <button className="flex flex-col items-center justify-center border-8 m-10 w-60 rounded-3xl h-60 p-10 bg-white">
              <img
                src={clipboardicon}
                alt="clipboard-icon"
                className="p-0 w-full"
              />
              <span className="mt-auto">Enrollment</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
