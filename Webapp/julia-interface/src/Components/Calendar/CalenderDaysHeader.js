import React from "react";

function CalenderDaysHeader() {
  return (
    <div className="p-2 flex   text-white ">
      <div className="flex-1 text-start">MON</div>
      <div className="flex-1 text-start">TUE</div>
      <div className="flex-1 text-start">WED</div>
      <div className="flex-1 text-start">THU</div>
      <div className="flex-1 text-start">FRI</div>
      <div className="flex-1 text-start">SAT</div>
      <div className="text-start flex-1">SUN</div>
    </div>
  );
}

export default CalenderDaysHeader;
