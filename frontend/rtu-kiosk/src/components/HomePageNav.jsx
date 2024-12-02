import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaPeopleLine } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

const HomePageNav = () => {
  const linkClassIcon = "p-1 object-cover w-full h-full";
  const navbar =
    "relative inline-flex flex-col items-center text-black text-3xl border-[5px] border-black m-4 mr-5 p-4 h-60 w-60 rounded-3xl bg-white";
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
      <a
        href="#"
        onClick={() => {
          window.open(
            "https://rtu.campus-erp.com/Student/Login.php",
            "_blank",
            "width=1920,height=1080"
          );
        }}
        target="_blank"
        rel="noopener noreferrer"
        className={navbar}
      >
        <FaClipboardList className={linkClassIcon} />
        Enrollment
      </a>
    </nav>
  );
};

export default HomePageNav;
