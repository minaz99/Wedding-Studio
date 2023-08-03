import React, { useState } from "react";
import ConractStageFilter from "./ConractStageFilter";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractStatusFilter from "./ContractStatusFilter";
import EventDateFilter from "./EventDateFilter";
function FilterWrapper(props) {
  const [filterOptionChecked, setFilterOptionChecked] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const closeFilter = () => {
    props.setShowFilter(false);
    props.setFilterType("Select Filter");
  };
  return (
    <div className="absolute inset-0   z-10 w-3/12  mx-auto h-fit  m-auto rounded-lg bg-slate-600/80 p-4">
      <XCircleIcon
        width={26}
        height={26}
        className="float-right cursor-pointer"
        color="white"
        onClick={() => closeFilter()}
      />
      <div className="p-2 space-y-6">
        <div className="text-xl  text-white text-center">
          {props.filterType}
        </div>
        {props.filterType === "stage" ? (
          <ConractStageFilter
            setFilterTypeOption={props.setFilterTypeOption}
            filterTypeOption={props.filterTypeOption}
            token={props.token}
          />
        ) : props.filterType === "Event Date" ? (
          <EventDateFilter
            setFilterTypeOption={props.setFilterTypeOption}
            token={props.token}
          />
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
