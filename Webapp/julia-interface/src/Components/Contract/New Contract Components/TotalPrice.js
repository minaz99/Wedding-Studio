import { ReceiptPercentIcon } from "@heroicons/react/24/outline";
import React from "react";

function TotalPrice(props) {
  return (
    <div className="bg-blue-100  rounded-md p-2 flex items-end">
      <div className="flex-1">
        <div className="font-medium">Add Discount</div>
        <div className="flex bg-white w-fit rounded-md space-x-1 items-center">
          <ReceiptPercentIcon
            height={22}
            width={22}
            color="#a5b4fc"
            className="mx-1"
          />
          <input className="rounded-md p-1 font-medium" placeholder="" />
        </div>
      </div>
      <div className="font-bold text-gray-600 text-lg">Price:</div>
      <div className="font-bold text-gray-600 text-lg">{props.total} KD</div>
    </div>
  );
}

export default TotalPrice;
