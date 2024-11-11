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

const NavBar1 = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <nav className="fixed inset-x-0 top-0 h-60 flex flex-row">
      <div className="flex items-center justify-center w-80">
        <img
          className="w-64 p-10 object-cover inline-block select-none"
          src={logo}
          alt="rtu logo"
          draggable="false"
        />
      </div>
      <div className="flex flex-1 h-40 justify-center p-1">
        {!isHomePage && (
          <>
            <NavLink to="/" className="navbar1">
              <IoHome className="icon-button1" />
            </NavLink>
            <NavLink to="/open-ai" className="navbar1">
              <AiOutlineOpenAI className="icon-button1" />
            </NavLink>
            <NavLink to="/queue" className="navbar1">
              <FaPeopleLine className="icon-button1" />
            </NavLink>
            <NavLink to="/map" className="navbar1">
              <FaLocationDot className="icon-button1" />
            </NavLink>
            <NavLink to="/" className="navbar1">
              <FaClipboardList className="icon-button1" />
            </NavLink>
          </>
        )}
      </div>
      <div className="flex items-center justify-center w-80">
        <img
          className="w-64 p-10 object-cover inline-block select-none"
          src={cealogo}
          alt="cea logo"
          draggable="false"
        />
      </div>
    </nav>
  );
};

export default NavBar1;
