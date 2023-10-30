import React, { useState } from "react";
import Photographers from "./Photographers";
import EditPhotographersWrapper from "./EditPhotographersWrapper";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
function PhotographersWrapper(props) {
  const [editPhotographers, setEditPhotographers] = useState(false);
  const hasAddonsForVideo = (compID, compsIDs) => {
    let IDsArray = compsIDs.split(",").filter((id) => id !== "," && id !== "");
    return IDsArray.indexOf(compID);
  };
  return (
    <div className="space-y-3 rounded-lg shadow-md p-4  w-full bg-white h-fit  ">
      <div className="flex items-center">
        <div className="font-medium text-xl flex-1">Photographers</div>
        {editPhotographers ? (
          <XCircleIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditPhotographers(false)}
          />
        ) : (
          <PencilSquareIcon
            height={22}
            width={22}
            color="#475569"
            className="cursor-pointer"
            onClick={() => setEditPhotographers(true)}
          />
        )}
      </div>
      {editPhotographers ? (
        <EditPhotographersWrapper
          token={props.token}
          id={props.id}
          date={props.date}
          hasAddonsForVideo={hasAddonsForVideo}
          componentIDs={props.compsIDs}
        />
      ) : (
        <Photographers
          componentIDs={props.compsIDs}
          id={props.id}
          token={props.token}
          hasAddonsForVideo={hasAddonsForVideo}
        />
      )}
    </div>
  );
}

export default PhotographersWrapper;
