import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function TableFooter() {
  const [arrowRightColor, setArrowRightColor] = useState("white");
  const [arrowLeftColor, setArrowLeftColor] = useState("white");
  return (
    <div className=" flex items-center  p-2 justify-end">
      <div className="text-base flex items-center text-white">
        1<div className=" mx-2 text-white">of 32</div>
      </div>
      <div className="flex space-x-12 ">
        <ChevronLeftIcon
          onMouseEnter={() => setArrowLeftColor("black")}
          onMouseLeave={() => setArrowLeftColor("white")}
          height={16}
          width={16}
          className="cursor-pointer"
          color={arrowLeftColor}
        />
        <ChevronRightIcon
          onMouseEnter={() => setArrowRightColor("black")}
          onMouseLeave={() => setArrowRightColor("white")}
          height={16}
          width={16}
          color={arrowRightColor}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default TableFooter;
