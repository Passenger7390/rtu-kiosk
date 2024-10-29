import Buttons from "./Buttons";
import openailogo from "../assets/images/chatgpt.png";
import openailogohover from "../assets/images/chatgpt1.png";
import queueicon from "../assets/images/queueicon.png";
import queueiconhover from "../assets/images/queueiconhover.png";
import locationicon from "../assets/images/location.png";
import locationiconhover from "../assets/images/locationhover.png";
import clipboardicon from "../assets/images/clipboard.png";
import clipboardiconhover from "../assets/images/clipboard1.png";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <>
        {/* Logos */}
        <div className="font-lex">
          {/* Welcome message */}
          <p className="text-8xl align-middle text-center">
            WELCOME <span className="text-customBlue">RTU</span>
            <span className="text-customGold">ISTA</span>
          </p>

          {/* Buttons */}
          <div>
            <div className="flex justify-center p-1">
              <Buttons
                logo={openailogo}
                alt="openai-logo"
                name="OpenAI"
                hover={openailogohover}
              />
              <Buttons
                logo={queueicon}
                alt="queue-icon"
                name="Queue"
                hover={queueiconhover}
              />

              <Buttons
                logo={locationicon}
                alt="map-icon"
                name="Map"
                hover={locationiconhover}
              />
              <Buttons
                logo={clipboardicon}
                alt="clipboard-icon"
                name="Enrollment"
                hover={clipboardiconhover}
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default MainMenu;
