import React, { useState } from "react";
import ConractStageFilter from "./ConractStageFilter";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ContractStatusFilter from "./ContractStatusFilter";
import EventDateFilter from "./EventDateFilter";
import ContractPerMonthFilter from "./ContractPerMonthFilter";
function FilterWrapper(props) {
  const closeFilter = () => {
    props.setShowFilter(false);
  };

  return (
    <div className="absolute inset-0   z-10 w-3/12  mx-auto h-fit  m-auto rounded-lg bg-slate-500/80 p-4">
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
            setDataFrom={props.setDataFrom}
            //setShowFilter={props.setShowFilter}
          />
        ) : props.filterType === "Event Date" ? (
          <EventDateFilter
            setFilterTypeOption={props.setFilterTypeOption}
            token={props.token}
            setDate={props.setDate}
            date={props.date}
            setDataFrom={props.setDataFrom}
          />
        ) : props.filterType === "month" ? (
          <ContractPerMonthFilter
            setMonthSelected={props.setMonthSelected}
            setYearSelected={props.setYearSelected}
            setDataFrom={props.setDataFrom}
            year={props.yearSelected}
            month={props.monthSelected}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default FilterWrapper;
