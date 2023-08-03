import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function TableFooter(props) {
  const [arrowRightColor, setArrowRightColor] = useState("white");
  const [arrowLeftColor, setArrowLeftColor] = useState("white");
  return (
    <div className=" flex items-center  p-1 justify-end">
      <div className="mx-auto text-white text-lg">
        total results : {props.pageCount}
      </div>
      <div className="text-base flex items-center  text-white">
        1<div className=" mx-2 text-white">of 32</div>
      </div>
      <div className="flex space-x-12 ">
        <ChevronLeftIcon
          onMouseEnter={() => setArrowLeftColor("black")}
          onMouseLeave={() => setArrowLeftColor("white")}
          height={24}
          width={24}
          className=" hover:rounded-full p-1 hover:bg-slate-300 cursor-pointer"
          color={arrowLeftColor}
        />
        <ChevronRightIcon
          onMouseEnter={() => setArrowRightColor("black")}
          onMouseLeave={() => setArrowRightColor("white")}
          height={24}
          width={24}
          color={arrowRightColor}
          className=" hover:rounded-full p-1 hover:bg-slate-300 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default TableFooter;
