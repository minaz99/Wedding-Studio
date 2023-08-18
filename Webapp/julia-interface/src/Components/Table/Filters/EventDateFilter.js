import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  useGetContractsByDayQuery,
  useGetContractsInMonthQuery,
} from "../../../services/api/contractSlice";

function EventDateFilter(props) {
  const [dateString, setDateString] = useState("");
  const dateSelectHandler = (e) => {
    props.setDataFrom("date");
    props.setDate(new Date(e.target.value));
    setDateString(e.target.value);
  };
  return (
    <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
      <CalendarDaysIcon height={22} width={22} color="#818cf8" />
      <input
        type="date"
        value={dateString}
        style={{
          background: "#e2e8f0",
          borderRadius: "6px",
          color: "#475569",
          padding: "4px 4px 4px 4px",
          border: "none",
          outline: "none",
        }}
        className="font-medium"
        onChange={(e) => dateSelectHandler(e)}
      />
    </div>
  );
}

export default EventDateFilter;
