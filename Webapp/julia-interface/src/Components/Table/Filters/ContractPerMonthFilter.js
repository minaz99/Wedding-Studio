import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Years from "react-calendar/dist/cjs/DecadeView/Years";
import Months from "react-calendar/dist/cjs/YearView/Months";

function ContractPerMonthFilter(props) {
  const dateSelectHandler = (e) => {
    props.setDataFrom("date");
    props.setDate(new Date(e.target.value));
  };
  return (
    <div className=" absolute inset-0 bg-slate-600 space-y-2 z-10 w-3/12  mx-auto h-fit  m-auto rounded-lg p-4 ">
      <div className=" space-x-6 justify-center flex">
        <div className="items-center flex space-x-2">
          <div className="text-lg  text-white">Year </div>
          <div className="text-lg text-black rounded-full w-12 h-8 bg-blue-100  p-1">
            {props.yearSelected}
          </div>

          <Years setYearSelected={props.setYearSelected} />
        </div>
        <div className="items-center flex space-x-2">
          <div className="text-lg text-white">Month</div>
          <div className="text-lg text-black text-center bg-blue-100 rounded-full w-8 h-8 p-1 ">
            {props.monthSelected}
          </div>
          <Months setMonthSelected={props.setMonthSelected} />
        </div>
      </div>
    </div>
  );
}

export default ContractPerMonthFilter;
