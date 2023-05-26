import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

function AddContractWrapper() {
  return (
    <div className="rounded-lg   absolute inset-0 p-3 items-center h-screen mx-auto w-6/12 shadow-md justify-center  bg-slate-300">
      <div className="flex">
        <div className="flex-1"></div>
        <XCircleIcon
          height={26}
          width={26}
          color="white"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default AddContractWrapper;
