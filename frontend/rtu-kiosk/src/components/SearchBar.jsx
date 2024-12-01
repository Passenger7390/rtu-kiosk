import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = ({ placeholder = "Search...", data }) => {
  return (
    <>
      <div className="flex border rounded-full h-16 w-1/2 bg-white px-1 py-1">
        <input
          type="text"
          className="focus:outline-none ml-4 w-[890px] font-lex text-xl"
          placeholder={placeholder}
        />
        <button className="flex items-center justify-center w-14 rounded-2xl">
          <IoSearchOutline className="w-28 h-28 p-2" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
