import React from "react";
import { FaBars } from "react-icons/fa";
import Avatar from "../assets/logo.png";

function navbar() {
  return (
    <>
      <div className="w-full h-[70px] bg-sky-900 flex items-center md:px-5 px-3 justify-between text-white">
        <div>
          <FaBars className="text-xl cursor-pointer" />
        </div>
        <div>SMK PGRI 2 PONOROGO </div>
        <div>
          <img src={Avatar} alt="" className=" w-10 h-10 rounded-full" />
        </div>
      </div>
    </>
  );
}

export default navbar;
