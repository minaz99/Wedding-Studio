import { PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";

function PhoneNumbersComp(props) {
  return (
    <div className="flex items-center  justify-evenly">
      <div>
        <div className="font-medium">Phone 1</div>

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
      <div>
        <div className="font-medium">Phone 2</div>

        <div className="rounded-md bg-slate-200 w-fit space-x-2 flex items-center p-1">
          <PhoneIcon height={22} width={22} color="#4ade80" />
          <input
            value={props.phone2}
            style={{
              background: "#e2e8f0",
              borderRadius: "6px",
              color: "#475569",
              padding: "3px 3px 3px 3px",
              border: "none",
              outline: "none",
            }}
            className="font-medium "
            onChange={(e) => props.setPhone2(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneNumbersComp;
