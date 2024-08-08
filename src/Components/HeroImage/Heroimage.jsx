import React from "react";
import bgimage from "./bgImage/backgroundnew.avif";

const Heroimage = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgimage})` }}
        className="h-[70vh] flex justify-center items-center "
      >
        <p className="text-white text-2xl  font-semibold font-heebo">Hi</p>
      </div>
    </div>
  );
};

export default Heroimage;
