
import React from "react";


import Years from "../../Calendar/Years";
import Months from "../../Calendar/Months";
function ContractPerMonthFilter(props) {
  const onMonthSelection = (value) => {
    props.setDataFrom("month");
    props.setMonthSelected(value);
  };
  const onYearSelection = (value) => {
    props.setDataFrom("month");
    props.setYearSelected(value);
  };
  return (
    <div className=" space-x-6 justify-center flex">
      <div className="items-center flex space-x-2">
        <div className="text-lg  text-white">Year </div>
        <div className="text-lg text-black rounded-full w-12 h-8 bg-blue-100  p-1">
          {props.year}
        </div>

        <Years setYearSelected={onYearSelection} />
      </div>
      <div className="items-center flex space-x-2">
        <div className="text-lg text-white">Month</div>
        <div className="text-lg text-black text-center bg-blue-100 rounded-full w-8 h-8 p-1 ">
          {props.month}
        </div>
        <Months setMonthSelected={onMonthSelection} />
      </div>
    </div>
  );
}

export default ContractPerMonthFilter;
