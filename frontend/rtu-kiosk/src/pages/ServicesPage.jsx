import React from "react";
import { NavLink } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";


const ServicesPage = () => {
    const portal =
    "relative inline-flex flex-col items-center text-black text-3xl border-[5px] border-black m-4 mr-5 p-4 h-80 w-80 rounded-3xl bg-white";
    const linkClassIcon = "p-1 object-cover w-full h-full";
  return <>
  
  <div className="flex flex-1 justify-center items-center w-100% h-screen pb-60 font-lex">
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
        <FaClipboardList className={linkClassIcon} />Enrollment
    </a>
    <NavLink to="/appointment" className={portal} draggable="false">
        
    <IoCalendarNumberOutline className={linkClassIcon}/>
    Appointment
    </NavLink>

  </div>

  

  </>;
};

export default ServicesPage;