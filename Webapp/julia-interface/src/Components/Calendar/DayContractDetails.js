import {
  BuildingStorefrontIcon,
  CameraIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function DayContractDetails(props) {
  const hasAddonsForVideo = (compID, compsIDs) => {
    let IDsArray = compsIDs.split(",").filter((id) => id !== "," && id !== "");
    return IDsArray.indexOf(compID);
  };
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
      {hasAddonsForVideo("21", props.componentids) >= 0 ? (
        <div className="flex items-center space-x-2 ">
          <div>Zoom</div>
          <div className="text-sm  text-slate-700">{props.zoomLight}</div>
        </div>
      ) : (
        <div></div>
      )}
      {hasAddonsForVideo("2", props.componentids) >= 0 ? (
        <div className="flex items-center space-x-2 ">
          <div>Crane</div>
          <div className="text-sm  text-slate-700">{props.cameraCrane}</div>
        </div>
      ) : (
        <div></div>
      )}
      {hasAddonsForVideo("4", props.componentids) >= 0 ? (
        <div className="flex items-center space-x-2 ">
          <div>Hanging</div>
          <div className="text-sm  text-slate-700">{props.hangingCamera}</div>
        </div>
      ) : (
        <div></div>
      )}
      {hasAddonsForVideo("10", props.componentids) >= 0 ? (
        <div className="flex items-center space-x-2 ">
          <div>Ronin</div>
          <div className="text-sm  text-slate-700">{props.cameraRonin}</div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex items-center space-x-2 ">
        <BuildingStorefrontIcon height={16} width={16} color="#334155" />
        <div className="text-sm  text-slate-700">{props.location}</div>
      </div>
    </div>
  );
}

export default DayContractDetails;
