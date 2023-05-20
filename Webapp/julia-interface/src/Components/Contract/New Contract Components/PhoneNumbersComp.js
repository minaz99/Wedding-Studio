import { PhoneIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function PhoneNumbersComp() {
  return (
    <div className="flex justify-evenly">
      <div className="">
        <div className="font-medium">Phone number 1</div>
        <div classname="flex items-center space-x-2">
          <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
            <PhoneIcon height={22} width={22} color="#4ade80" />
            <input
              style={{
                background: "#e2e8f0",
                borderRadius: "6px",
                color: "#475569",
                padding: "3px 3px 3px 3px",
                border: "none",
                outline: "none",
              }}
              className="font-medium "
            />
          </div>
        </div>
      </div>
      <div>
        <div className="font-medium">Phone number 2</div>
        <div classname="flex items-center space-x-2">
          <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
            <PhoneIcon height={22} width={22} color="#4ade80" />
            <input
              style={{
                background: "#e2e8f0",
                borderRadius: "6px",
                color: "#475569",
                padding: "3px 3px 3px 3px",
                border: "none",
                outline: "none",
              }}
              className="font-medium "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumbersComp;
