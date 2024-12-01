import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/rtulogo.png";
import cealogo from "../assets/images/cea-logo.png";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaPeopleLine } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

const HomePageNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const linkClassIcon = "h-24 w-24 p-1";
  const navbar = ({ isActive }) =>
    isActive
      ? "text-black bg-customYellow h-24 w-24 m-4 p-4 rounded-3xl border-[5px] border-black flex items-center"
      : "text-black bg-white h-24 w-24 m-4 p-4 rounded-3xl border-[5px] border-black flex items-center";
  const portal =
    "text-black bg-white h-24 w-24 m-4 p-4 rounded-3xl hover:bg-customBlue hover:text-white border-[5px] border-black flex items-center";

  return (
    <nav className="fixed inset-x-0 top-0 h-60 flex flex-row">
      <div className="flex items-center justify-center w-80">
        <img
          className="w-64 p-10 object-cover inline-block"
          src={logo}
          alt="rtu logo"
        />
      </div>
      <div className="flex flex-1 h-40 justify-center p-1">
        {!isHomePage && (
          <>
            <NavLink to="/" className={navbar}>
              <IoHome className={linkClassIcon} />
            </NavLink>
            <NavLink to="/open-ai" className={navbar}>
              <AiOutlineOpenAI className={linkClassIcon} />
            </NavLink>
            <NavLink to="/queue" className={navbar}>
              <FaPeopleLine className={linkClassIcon} />
            </NavLink>
            <NavLink to="/map" className={navbar}>
              <FaLocationDot className={linkClassIcon} />
            </NavLink>
            <a
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
            </a>
          </>
        )}
      </div>
      <div className="flex items-center justify-center w-80">
        <img
          className="w-64 p-10 object-cover inline-block"
          src={cealogo}
          alt="cea logo"
        />
      </div>
    </nav>
  );
};

export default HomePageNav;
