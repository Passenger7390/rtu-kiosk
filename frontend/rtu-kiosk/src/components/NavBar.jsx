import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaPeopleLine } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

const NavBar = () => {
  const linkClassIcon = "h-24 w-24";
  const navbar =
    "relative inline-flex flex-col items-center text-black text-3xl border-[5px] border-black m-4 mr-16 p-4 h-48 w-48 rounded-3xl bg-white hover:bg-customYellow hover:text-black";
  return (
    <nav className="flex justify-center h-56 mt-10">
      <NavLink to="/open-ai" className={navbar}>
        <AiOutlineOpenAI className={linkClassIcon} />
        OpenAI
      </NavLink>
      <NavLink to="/queue" className={navbar}>
        <FaPeopleLine className={linkClassIcon} />
        Queue
      </NavLink>
      <NavLink to="/map" className={navbar}>
        <FaLocationDot className={linkClassIcon} />
        Map
      </NavLink>
      <NavLink to="/" className={navbar}>
        <FaClipboardList className={linkClassIcon} />
        Enrollment
      </NavLink>
    </nav>
  );
};

export default NavBar;
