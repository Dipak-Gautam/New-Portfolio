import React from "react";
import bgimage from "./bgImage/backgroundnew.avif";

const Heroimage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgimage})` }}
        className="h-[70vh]  md:px-20 "
      >
        <div className="flex justify-between mx-7 h-full">
          <div className="items-center justify-center h-full border">
            <p>Hi, I am</p>
            <p> Dipak Gautam</p>
          </div>
          <div className=" border">
            <img src="assets/images/nobgprofile.png" alt="" className="w-96" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroimage;
