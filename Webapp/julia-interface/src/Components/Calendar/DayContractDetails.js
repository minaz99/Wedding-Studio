import {
  BuildingStorefrontIcon,
  CameraIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function DayContractDetails(props) {
  return (
    <div className="rounded-md p-1  border-slate-400 border-2">
      <div className="flex items-center space-x-2 ">
        <CameraIcon height={16} width={16} color="#334155" />
        <div className="text-sm  text-slate-700">{props.photographer}</div>
      </div>
      <div className="flex items-center space-x-2 ">
        <VideoCameraIcon height={16} width={16} color="#334155" />
        <div className="text-sm  text-slate-700">{props.video}</div>
      </div>
      <div className="flex items-center space-x-2 ">
        <BuildingStorefrontIcon height={16} width={16} color="#334155" />
        <div className="text-sm  text-slate-700">{props.location}</div>
      </div>
    </div>
  );
}

export default DayContractDetails;
