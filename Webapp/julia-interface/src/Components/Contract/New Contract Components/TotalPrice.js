import React from "react";

function TotalPrice(props) {
  return (
    <div className="space-x-2 flex">
      <div className="flex-1"></div>
      <div className="font-bold text-gray-600 text-lg">Price:</div>
      <div className="font-bold text-gray-600 text-lg">{props.total} KD</div>
    </div>
  );
}

export default TotalPrice;
