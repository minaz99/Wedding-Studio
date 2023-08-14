import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function TableFooter(props) {
  const [arrowRightColor, setArrowRightColor] = useState("white");
  const [arrowLeftColor, setArrowLeftColor] = useState("white");
  return (
    <div className=" flex items-center  p-1 justify-end">
      <div className="mx-auto text-white text-lg">
        total results : {props.totalContracts}
      </div>
      <div className="text-base flex items-center  text-white">
        {props.page}
        <div className=" mx-2 text-white">of {props.pageCount}</div>
      </div>
      <div className="flex space-x-12 ">
        {props.page > 1 ? (
          <ChevronLeftIcon
            onMouseEnter={() => setArrowLeftColor("black")}
            onMouseLeave={() => setArrowLeftColor("white")}
            height={24}
            width={24}
            className=" hover:rounded-full p-1 hover:bg-slate-300 cursor-pointer"
            color={arrowLeftColor}
            onClick={() => props.setPage(props.page - 1)}
          />
        ) : (
          <ChevronLeftIcon
            onMouseEnter={() => setArrowLeftColor("black")}
            onMouseLeave={() => setArrowLeftColor("white")}
            height={24}
            width={24}
            className=" hover:rounded-full p-1 hover:bg-red-300 cursor-pointer"
            color={arrowLeftColor}
          />
        )}
        {props.page < props.pageCount ? (
          <ChevronRightIcon
            onMouseEnter={() => setArrowRightColor("black")}
            onMouseLeave={() => setArrowRightColor("white")}
            height={24}
            width={24}
            color={arrowRightColor}
            className=" hover:rounded-full p-1 hover:bg-slate-300 cursor-pointer"
            onClick={() => props.setPage(props.page + 1)}
          />
        ) : (
          <ChevronRightIcon
            onMouseEnter={() => setArrowRightColor("black")}
            onMouseLeave={() => setArrowRightColor("white")}
            height={24}
            width={24}
            color={arrowRightColor}
            className=" hover:rounded-full p-1 hover:bg-red-300 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default TableFooter;
