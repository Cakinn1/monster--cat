import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
export default function Header() {
  return (
    <div className="flex flex-1 justify-between items-center">
      <div className="flex gap-x-3">
        <div className="bg-black hover:opacity-60 cursor-pointer duration-300 p-[10px] rounded-full">
          <FaChevronLeft />
        </div>
        <div className="bg-black hover:opacity-60 cursor-pointer duration-300 p-[10px] rounded-full">
          <FaChevronRight />
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <div>
          <button  className="hover:opacity-60 duration-300 text-[#d4d4d4]">Sign up</button>
        </div>
        <div>
          <button className="hover:opacity-60 duration-300 bg-white text-black font-semibold py-[9px] rounded-full px-6">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
