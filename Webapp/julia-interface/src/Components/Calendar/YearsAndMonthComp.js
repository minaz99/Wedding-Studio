import { ChevronDownIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Years from "./Years";
import Months from "./Months";

function YearsAndMonthComp(props) {
  return (
    <div className=" absolute inset-0 bg-slate-600 space-y-2 z-10 w-3/12  mx-auto h-fit  m-auto rounded-lg p-4 ">
      <div className="flex justify-end">
        <XCircleIcon
          height={26}
          width={26}
          className="cursor-pointer text-black/60 hover:text-black"
          onClick={() => props.setShowMonthAndYear(false)}
        />
      </div>
      <div className=" space-x-6 justify-center flex">
        <div className="items-center flex space-x-2">
          <div className="text-lg  text-white">Year </div>
          <div className="text-lg text-black rounded-full w-12 h-8 bg-blue-100  p-1">
            {props.year}
          </div>

          <Years setYearSelected={props.setYear} />
        </div>
        <div className="items-center flex space-x-2">
          <div className="text-lg text-white">Month</div>
          <div className="text-lg text-black text-center bg-blue-100 rounded-full w-8 h-8 p-1 ">
            {props.month}
          </div>
          <Months setMonthSelected={props.setMonth} />
        </div>
      </div>
    </div>
  );
}

export default YearsAndMonthComp;
