import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pgri.png";
function Beranda() {
  return (
    <div className="flex justify-center items-center h-screen w-full font-poppins ">
      <div className=" bg-white flex flex-col items-center w-[400px] h-[500px]  py-5 px-5 shadow-xl justify-between  ">
        <div className="flex items-center justify-center ">
          <img src={Logo} alt="Logo" className=" w-[100px] h-[100px]" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <form action="" className="flex flex-col items-center gap-5">
            <div className=" flex flex-col">
              <label htmlFor="">user</label>
              <input
                type="text"
                className=" border outline-none rounded-md"
                required
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="">password</label>
              <input
                type="text"
                className=" border outline-none rounded-md"
                required
              />
            </div>
            <div></div>
            <Link to="/dhasboard">
              <button className=" w-24 h-10 py-2 px-3 bg-[red]  ">login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
