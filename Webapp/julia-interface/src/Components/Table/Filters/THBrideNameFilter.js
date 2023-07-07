import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function THBrideNameFilter(props) {
  return (
    <div className="space-x-2 flex items-center ml-2">
      <div className="flex p-2 space-x-2 items-center">
        <div className="  rounded-md p-1 flex items-center hover:bg-gray-300 bg-white">
          <input
            placeholder="Enter bride name"
            className="outline-none border-none hover:bg-gray-300 bg-white"
          />
        </div>
      </div>
      <XCircleIcon
        onClick={() => props.setSearchBride(false)}
        width={20}
        height={20}
        color="#334155"
        className="cursor-pointer"
      />
    </div>
  );
}

export default THBrideNameFilter;
