import { PhoneIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function PhoneNumbersComp(props) {
  return (
    <div className="">
      <div className="font-medium">Contact</div>
      <div classname="flex items-center space-x-2">
        <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
          <PhoneIcon height={22} width={22} color="#4ade80" />
          <input
            value={props.phone1}
            style={{
              background: "#e2e8f0",
              borderRadius: "6px",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              border: "none",
              outline: "none",
            }}
            className="font-medium "
            onChange={(e) => props.setPhone1(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneNumbersComp;
