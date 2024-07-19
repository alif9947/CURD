import React from "react";
import Navbar from "../../components/Navbar";
import Footbar from "../../components/Footbar";
function Dhasboard() {
  return (
    <>
      <div className=" font-poppins w-full h-screen flex flex-col justify-between">
        <div>
          <Navbar />

          <div className="flex flex-col md:px-10 px-3 py-5 w-full h-full ">
            <div className="flex items-center justify-between pt-5 gap-5 ">
              <div className="h-[100px] w-[180px] md:h-[150px] md:w-[250px] bg-lime-700">
                d
              </div>
              <div className="h-[100px] w-[180px] md:h-[150px] md:w-[250px] bg-lime-700"></div>
            </div>
          </div>
        </div>
        <div>
          <Footbar />
        </div>
      </div>
    </>
  );
}

export default Dhasboard;
