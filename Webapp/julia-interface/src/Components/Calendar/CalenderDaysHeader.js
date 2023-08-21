import React from "react";

function CalenderDaysHeader() {
  return (
    <div className="p-2 flex mx-auto   text-white">
      <div className="text-start flex-1">SUN</div>
      <div className="flex-1 text-start">MON</div>
      <div className="flex-1 text-start">TUE</div>
      <div className="flex-1 text-start">WED</div>
      <div className="flex-1 text-start">THU</div>
      <div className="flex-1 text-start">FRI</div>
      <div className="flex-1 text-start">SAT</div>
    </div>
  );
}

export default CalenderDaysHeader;
