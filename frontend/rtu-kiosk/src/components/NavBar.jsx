import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/rtulogo.png";
import cealogo from "../assets/images/cea-logo.png";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaPeopleLine } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";


const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const linkClassIcon = "p-1 object-cover w-full h-full user-select-none";
  const navbar = ({ isActive }) =>
    isActive
      ? "text-black bg-customYellow max-h-[128px] max-w-[128px] min-w-[100px] min-h-[100px] m-4 p-4 rounded-3xl border-[5px] border-black flex items-center justify-center user-select-none"
      : "text-black bg-white max-h-[128px] max-w-[128px] min-w-[100px] min-h-[100px] m-4 p-4 rounded-3xl border-[5px] border-black flex items-center justify-center user-select-none";

  return (
    <nav className="fixed inset-x-0 top-0 h-48 flex flex-row">
      <div className="flex items-center justify-center min-w-[80px] max-w-[192px] min-h-[80px] max-h-[192px] ml-5 user-select-none" draggable="false">
        <img className="p-3 object-cover w-full user-select-none" draggable="false" src={logo} alt="rtu logo" />
      </div>
      <div className="flex flex-1 h-48 justify-center p-1 w-0">
        {!isHomePage && (
          <>
            <NavLink to="/" className={navbar} draggable="false">
              <IoHome className={linkClassIcon} />
            </NavLink>
            <NavLink to="/open-ai" className={navbar} draggable="false">
              <AiOutlineOpenAI className={linkClassIcon} />
            </NavLink>
            <NavLink to="/services" className={navbar} draggable="false">
              <GrServices className={linkClassIcon} />
            </NavLink>
            <NavLink to="/map" className={navbar} draggable="false">
              <FaLocationDot className={linkClassIcon} />
            </NavLink>
            {/* <a
              href="#"
              onClick={() => {
                window.open(
                  "https://rtu.campus-erp.com/Student/Login.php",
                  "_blank",
                  "width=1920,height=1080"
                );
                window.location.href = "/";
              }}
              target="_blank"
              rel="noopener noreferrer"
              className={portal}
            >
              <FaClipboardList className={linkClassIcon} />
            </a> */}
          </>
        )}
      </div>
      <div className="flex items-center justify-center min-w-[80px] max-w-[192px] min-h-[80px] max-h-[192px] mr-5">
        <img className="p-3 object-cover w-full user-select-none" draggable="false" src={cealogo} alt="cea logo" />
      </div>
    </nav>
  );
};

export default NavBar;
