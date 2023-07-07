import React from "react";
import ConractStageFilter from "./ConractStageFilter";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractStatusFilter from "./ContractStatusFilter";
import EventDateFilter from "./EventDateFilter";
function FilterWrapper(props) {
  return (
    <div className="absolute inset-0   z-10 w-3/12  mx-auto h-fit  m-auto rounded-lg bg-slate-600/80 p-4">
      <XCircleIcon
        width={26}
        height={26}
        className="float-right cursor-pointer"
        color="white"
        onClick={() => props.setShowFilter(false)}
      />
      <div className="p-2 space-y-6">
        <div className="text-xl  text-white text-center">
          {props.filterType}
        </div>
        {props.filterType === "Contract Stage" ? (
          <ConractStageFilter />
        ) : props.filterType === "Contract Status" ? (
          <ContractStatusFilter />
        ) : props.filterType === "Event Date" ? (
          <EventDateFilter />
        ) : (
          <div />
        )}
        <div className="text-center rounded-md p-2 bg-blue-400 text-white cursor-pointer shadow-md">
          Apply
        </div>
      </div>
    </div>
  );
}

export default FilterWrapper;
