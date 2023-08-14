import React from "react";
import CalenderRows from "./CalenderRows";

function DayOfWeekColumn(props) {
  let weekRow = props.data.Days.slice(props.rowCount, props.rowCount + 7);
  return (
    <div className="space-x-2 flex">
      <div>{props.day}</div>
      {weekRow.map((d) => {
        return <CalenderRows day={d.day} contracts={d.contracts} />;
      })}
    </div>
  );
}

export default DayOfWeekColumn;
