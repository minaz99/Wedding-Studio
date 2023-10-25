import React from "react";
import Addon from "./Addon";
import { MinusCircleIcon } from "@heroicons/react/24/outline";

function ComponentDelete(props) {
  let componentIDsArray = props.compsIDs.split(",");
  const removeComponent = async (compID) => {
    let newCompsArray = componentIDsArray.filter(
      (c) => c !== "," && c !== "" && c !== compID
    );
    let componentsIDsString = "";
    newCompsArray.forEach((id) => (componentsIDsString += `${id},`));
    props.setCompsIDs(componentsIDsString);
    props.setComponents(props.components.filter((id) => id !== compID));
  };

  return (
    <div className="space-y-3 ">
      {componentIDsArray
        .filter((c) => c !== "," && c !== "")
        .map((id) => {
          return (
            <div className="flex space-x-2 items-center">
              <Addon token={props.token} id={id} />
              <MinusCircleIcon
                height={24}
                width={24}
                color="#475569"
                className="cursor-pointer"
                onClick={() => removeComponent(id)}
              />
            </div>
          );
        })}
    </div>
  );
}

export default ComponentDelete;
