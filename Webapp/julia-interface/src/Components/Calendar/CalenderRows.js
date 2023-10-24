import {
  BuildingStorefrontIcon,
  CameraIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import DayContractDetails from "./DayContractDetails";

function CalenderRows(props) {
  return (
    <div className="flex items-center w-fit overflow-y-scroll mx-auto rounded-md  bg-white  ">
      <div className="cursor-pointer p-2 font-mono w-36  h-32 space-y-2   rounded-md  ">
        <div className="text-slate-600">{props.day}</div>
        <div className="space-y-2 pb-2">
          {props.contracts.map((contract) => {
            return (
              <DayContractDetails
                photographer={contract.photographer}
                video={contract.video}
                location={contract.eventlocation}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CalenderRows;
