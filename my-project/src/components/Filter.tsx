import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Filter() {
  return (
    <div className="container mx-auto my-10 flex flex-row justify-between">
      <div className="flex flex-row items-center justify-center border border-gray-300 w-full max-w-[300px]">
        <AiOutlineSearch />
        <input
          className="w-full p-3"
          type="text"
          placeholder="Filter by name"
        />
      </div>
      <div className="flex flex-row items-center justify-between border border-gray-300 p-3 w-full max-w-[300px]">
        <button>Species</button>
        <IoMdArrowDropdown />
        <div>link 1</div>
      </div>
      <div className="flex flex-row items-center justify-between border border-gray-300 p-3 w-full max-w-[300px]">
        <button>Gender</button>
        <IoMdArrowDropdown />
      </div>
      <div className="flex flex-row items-center justify-between border border-gray-300 p-3 w-full max-w-[300px]">
        <button>Status</button>
        <IoMdArrowDropdown />
      </div>
    </div>
  );
}
