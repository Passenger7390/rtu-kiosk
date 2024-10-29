import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaPeopleLine } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex justify-center">
      <NavLink to="/open-ai" className="navbar">
        <AiOutlineOpenAI className="icon-button" />
        OpenAI
      </NavLink>
      <NavLink to="/queue" className="navbar">
        <FaPeopleLine className="icon-button" />
        Queue
      </NavLink>
      <NavLink to="/map" className="navbar">
        <FaLocationDot className="icon-button" />
        Map
      </NavLink>
      <NavLink to="/" className="navbar">
        <FaClipboardList className="icon-button" />
        Enrollment
      </NavLink>
    </nav>
  );
};

export default NavBar;
