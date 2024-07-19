import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";
function footbar() {
  return (
    <>
      <div className="flex items-center h-[70px] md:px-5 px-3 justify-between">
        <IoHomeOutline className=" text-xl" />
        <MdOutlinePayment className=" text-xl" />
        <div className="w-[50px] h-[50px] flex items-center justify-center it rounded-full bg-sky-900 ">
          <FaMoneyBills className=" text-xl" />
        </div>

        <GrDocumentText className=" text-xl" />
        <RiAccountCircleFill className=" text-xl" />
      </div>
    </>
  );
}

export default footbar;
