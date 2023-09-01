import React from "react";
import Addon from "./Addon";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

function ComponentDelete(props) {
  let componentIDsArray = props.compsIDs.split(",");
  return (
    <div className="space-y-3 items-center">
      {componentIDsArray
        .filter((c) => c !== "," && c !== "")
        .map((id) => {
          return (
            <div className="flex space-x-2">
              <Addon token={props.token} id={id} />
              <MinusCircleIcon
                height={24}
                width={24}
                color="#475569"
                className="cursor-pointer"
              />
            </div>
          );
        })}
      <div className="flex mx-auto">
        <PlusCircleIcon
          height={24}
          width={24}
          color="#475569"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ComponentDelete;
