import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buttons = ({
  logo,
  alt,
  name = " ",
  width = 36,
  height = 36,
  hover = logo,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <button
            className={`h-${width} w-${width} max-w-[144px] max-h-[144px] min-h-[40px] min-w-[40px] border-4 border-black m-8 rounded-3xl p-4 mb-4 bg-white overflow-hidden hover:bg-customGold`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? hover : logo}
              alt={alt}
              className={`transition duration-450 ease-in-out`}
            />
          </button>
          <div>
            <p className={`text-center text-xl font-bold`}>{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
